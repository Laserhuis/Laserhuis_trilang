import { GoogleGenAI } from "@google/genai";
import fs from "fs";

import { REVIEWS } from "./src/data/reviews.js";
import { MATERIAL_SETTINGS } from "./src/data/materialSettings.js";
import { BATCH_1 } from "./src/data/tutorials/batch1.js";
import { BATCH_2 } from "./src/data/tutorials/batch2.js";
import { BATCH_3 } from "./src/data/tutorials/batch3.js";
import { BATCH_4 } from "./src/data/tutorials/batch4.js";
import { CNC_TUTORIALS } from "./src/data/tutorials/cncGenmitsu.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const ALL_TUTORIALS = [...BATCH_1, ...BATCH_2, ...BATCH_3, ...BATCH_4, ...CNC_TUTORIALS];

async function translateChunk(data, type, lang) {
  const prompt = `Translate the following JSON array of ${type} into ${lang}.
Keep the JSON structure exactly the same, do not change any keys.
Only translate the text values of strings.
Do not translate image URLs or numeric IDs.
Return ONLY valid JSON. No markdown formatting like \`\`\`json.
Data:
${JSON.stringify(data)}`;

  for (let i = 0; i < 3; i++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: { temperature: 0.1 }
      });

      let text = response.text.trim();
      if (text.startsWith("```json")) {
        text = text.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (text.startsWith("```")) {
        text = text.replace(/^```/, "").replace(/```$/, "").trim();
      }
      return JSON.parse(text);
    } catch (e) {
      console.log(`Attempt ${i + 1} failed: ${e.message}`);
      if (i === 2) throw e;
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

async function main() {
  console.log("Starting translations...");

  let translations = {
    nl: { reviews: {}, materials: {}, tutorials: {} },
    fr: { reviews: {}, materials: {}, tutorials: {} },
    es: { reviews: {}, materials: {}, tutorials: {} },
    it: { reviews: {}, materials: {}, tutorials: {} },
    de: { reviews: {}, materials: {}, tutorials: {} }
  };

  try {
    if (fs.existsSync("src/data/translationsData.json")) {
      const fileData = fs.readFileSync("src/data/translationsData.json", "utf8");
      if (fileData.length > 100) {
        const parsed = JSON.parse(fileData);
        translations = { ...translations, ...parsed };
      }
    }
  } catch(e) {}

  // Ensure keys exist
  ["es", "it", "de"].forEach(lang => {
    if (!translations[lang]) translations[lang] = { reviews: {}, materials: {}, tutorials: {} };
  });

  const save = () => fs.writeFileSync("src/data/translationsData.json", JSON.stringify(translations, null, 2));

  // The original tutorials slice (just for time constraints or as requested)
  // We'll translate the top 4 regular + top 4 CNC tutorials to avoid timeouts if we did all of them.
  const topTutorials = ALL_TUTORIALS.slice(0, 4).concat(CNC_TUTORIALS.slice(0, 4)).map(t => ({ id: t.id, title: t.title, summary: t.summary, steps: t.steps, troubleshooting: t.troubleshooting }));

  const langs = [
    { code: "es", name: "Spanish" },
    { code: "it", name: "Italian" },
    { code: "de", name: "German" }
  ];

  for (const lang of langs) {
    if (Object.keys(translations[lang.code].reviews).length === 0) {
      console.log(`Translating reviews to ${lang.name}...`);
      const reviewsData = await translateChunk(REVIEWS.slice(0,4).map(r => ({ id: r.id, summary: r.summary, pros: r.pros, cons: r.cons, hardwareSpecs: r.hardwareSpecs, benchmarks: r.benchmarks })), "reviews", lang.name);
      for (const r of reviewsData) translations[lang.code].reviews[r.id] = r;
      save();
    }

    if (Object.keys(translations[lang.code].tutorials).length === 0) {
      console.log(`Translating tutorials to ${lang.name}...`);
      const tutsData = await translateChunk(topTutorials, "tutorials", lang.name);
      for (const t of tutsData) translations[lang.code].tutorials[t.id] = t;
      save();
    }
  }

  // Also make sure to do CNC tutorials for NL and FR since they were just added
  const newCncTuts = CNC_TUTORIALS.slice(0, 4).map(t => ({ id: t.id, title: t.title, summary: t.summary, steps: t.steps }));

  for (const code of ["nl", "fr"]) {
    // Check if the first CNC tutorial is translated for NL/FR
    const firstCncId = newCncTuts[0].id;
    if (!translations[code].tutorials[firstCncId]) {
      console.log(`Translating CNC tutorials to ${code}...`);
      const tutsData = await translateChunk(newCncTuts, "tutorials", code === "nl" ? "Dutch" : "French");
      for (const t of tutsData) translations[code].tutorials[t.id] = t;
      save();
    }
  }

  console.log("Done!");
}

main().catch(console.error);
