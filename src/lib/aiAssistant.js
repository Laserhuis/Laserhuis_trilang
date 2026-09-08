import { MATERIAL_SETTINGS } from "@/data/materialSettings";
import axios from "axios";

const BACKEND_BASE = (typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_URL) || "";
const API = `${BACKEND_BASE}/api`;

// ---------------------------------------------------------------------------
// AI Laser Assistant
//
// `generateAISettings(prompt)` is the single entry point. It is structured so
// it can later be routed to a local Ollama model (e.g. Qwen2.5-Coder) inside
// Dyad by implementing `callLocalModel`. Until then it uses a smart local
// keyword-matching fallback over materialSettings.js.
// ---------------------------------------------------------------------------

const LASER_HINTS = {
  fiber: ["fiber", "fibre", "galvo", "mopa", "jpt", "raycus"],
  co2: ["co2", "co₂", "glass tube", "reci", "ruida"],
  diode: ["diode", "grbl", "blue laser", "445nm", "xtool", "sculpfun", "ortur", "atomstack"],
};

const OP_HINTS = {
  cut: ["cut", "cutting", "through", "sever"],
  engrave: ["engrave", "engraving", "etch", "etching"],
  mark: ["mark", "marking", "anneal", "annealing", "serial"],
  photo: ["photo", "portrait", "grayscale", "greyscale", "image"],
  relief: ["relief", "3d", "deep", "depth"],
};

const UNSAFE = ["pvc", "vinyl", "polycarbonate", "abs", "chlorine"];

function detectLaser(text) {
  for (const [type, words] of Object.entries(LASER_HINTS)) {
    if (words.some((w) => text.includes(w))) return type;
  }
  const wattage = text.match(/(\d{1,3})\s*w/);
  // A watt figure alone leans towards diode for hobby prompts.
  if (wattage && Number(wattage[1]) <= 40) return "diode";
  return null;
}

function detectOp(text) {
  for (const [op, words] of Object.entries(OP_HINTS)) {
    if (words.some((w) => text.includes(w))) return op;
  }
  return null;
}

function scoreSetting(setting, text, laser, op) {
  let score = 0;
  for (const kw of setting.keywords || []) {
    if (text.includes(kw)) score += 2;
  }
  // material name tokens
  setting.material.toLowerCase().split(/[^a-z0-9]+/).forEach((tok) => {
    if (tok.length > 2 && text.includes(tok)) score += 1;
  });
  if (laser && setting.laserType === laser) score += 3;
  else if (laser && setting.laserType !== laser) score -= 2;
  if (op && (setting.keywords || []).includes(op)) score += 2;
  return score;
}

function localMatch(prompt) {
  const text = prompt.toLowerCase();
  const laser = detectLaser(text);
  const op = detectOp(text);

  const unsafeHit = UNSAFE.find((u) => text.includes(u));

  const ranked = MATERIAL_SETTINGS
    .map((s) => ({ s, score: scoreSetting(s, text, laser, op) }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  const matched = best && best.score >= 2 ? best.s : null;

  const alternatives = ranked
    .filter((r) => r.score >= 2 && (!matched || r.s.id !== matched.id))
    .slice(0, 3)
    .map((r) => r.s);

  let safety =
    "Always run a small power/speed test on scrap first, keep a fire extinguisher nearby, and never leave the laser unattended.";
  if (unsafeHit) {
    safety = `⚠ Do NOT laser ${unsafeHit.toUpperCase()} — it releases toxic/corrosive fumes (chlorine gas) that damage you and the machine. Use a laser-safe alternative such as acrylic or wood.`;
    const safeAlts = MATERIAL_SETTINGS.filter((s) =>
      /acrylic|plywood|basswood|leather/i.test(s.material)
    ).slice(0, 3);
    return {
      ok: false,
      detected: { laserType: laser, operation: op },
      answer: `Do not laser ${unsafeHit.toUpperCase()} — it is unsafe and releases toxic fumes. Try a laser-safe material like acrylic, plywood or leather instead.`,
      settings: null,
      safety,
      alternatives: safeAlts,
      source: "local-fallback",
    };
  }

  if (!matched) {
    return {
      ok: false,
      detected: { laserType: laser, operation: op },
      answer:
        "I couldn't confidently match that to a known material profile. Try naming the material and laser type — e.g. \"3mm dark walnut on a 20W diode\" or \"anneal stainless steel on a fiber laser\".",
      settings: null,
      safety,
      alternatives: ranked.slice(0, 4).map((r) => r.s),
      source: "local-fallback",
    };
  }

  const confidence = best.score >= 6 ? "high" : best.score >= 4 ? "medium" : "low";

  const settings = {
    material: matched.material,
    laserType: matched.laserType,
    machineClass: matched.machineClass,
    power: matched.power,
    speed: matched.speed,
    passes: matched.passes,
    frequencyOrInterval: matched.frequencyOrInterval,
    airAssist: matched.airAssist,
  };

  const answer =
    `For ${matched.material} on a ${matched.laserType.toUpperCase()} laser (${matched.machineClass}), ` +
    `start around ${matched.power} power at ${matched.speed}, ${matched.passes} pass(es), ` +
    `${matched.frequencyOrInterval}, air assist ${matched.airAssist.toLowerCase()}. ${matched.notes}`;

  return {
    ok: true,
    detected: { laserType: laser, operation: op },
    answer,
    settings,
    notes: matched.notes,
    safety,
    confidence,
    alternatives,
    source: "local-fallback",
  };
}

// Extension point for Dyad / local Ollama (Qwen2.5-Coder).
// Return `null` to signal "not available" so we fall back to the cloud/local matcher.
async function callLocalModel(prompt) {
  // Future wiring (activates automatically when exported to Dyad with Ollama running):
  //   const res = await fetch("http://localhost:11434/api/generate", {
  //     method: "POST",
  //     body: JSON.stringify({ model: "qwen2.5-coder", prompt, stream: false }),
  //   });
  //   return parseSettingsJson(await res.json());
  return null;
}

// Cloud AI advisor via the backend (Emergent LLM key → Gemini 3 Flash).
async function callCloud(prompt, machineWatt) {
  const { data } = await axios.post(`${API}/advisor`, { prompt, machineWatt }, { timeout: 25000 });
  const hasSettings = data.power && data.power !== "-" && data.power !== "—";
  return {
    ok: hasSettings,
    answer: data.answer || data.notes || "Here are suggested starting settings.",
    settings: hasSettings
      ? {
          material: data.material,
          laserType: data.laserType,
          machineClass: data.machineClass,
          power: data.power,
          speed: data.speed,
          passes: data.passes,
          frequencyOrInterval: data.frequencyOrInterval,
          airAssist: data.airAssist,
        }
      : null,
    notes: data.notes,
    safety: data.safety,
    confidence: "ai",
    source: data.source || "cloud:gemini",
  };
}

export async function generateAISettings(prompt, machineWatt) {
  const clean = (prompt || "").trim();
  if (!clean) {
    return { ok: false, answer: "Ask me anything about laser settings.", settings: null, source: "local-fallback" };
  }

  // 1) Local Ollama model (future / Dyad). 2) Cloud AI. 3) Local keyword matcher.
  try {
    const model = await callLocalModel(clean);
    if (model) return { ...model, source: "ollama:qwen2.5-coder" };
  } catch (e) {
    /* fall through */
  }

  try {
    return await callCloud(clean, machineWatt);
  } catch (e) {
    return localMatch(clean);
  }
}

export const EXAMPLE_PROMPTS = [
  "Settings for 3mm dark walnut on a 20W diode?",
  "How do I anneal stainless steel on a fiber laser?",
  "Cutting 3mm cast acrylic with a 50W CO2",
  "White mark on anodized aluminium",
];
