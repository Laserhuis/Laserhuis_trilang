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
  console.log("Starting remaining translations...");

  let translations = JSON.parse(fs.readFileSync("src/data/translationsData.json", "utf8"));
  const save = () => fs.writeFileSync("src/data/translationsData.json", JSON.stringify(translations, null, 2));

  // Also make sure to do CNC tutorials for FR since it only has 4 total (and likely failed halfway)
  const newCncTuts = CNC_TUTORIALS.slice(0, 4).map(t => ({ id: t.id, title: t.title, summary: t.summary, steps: t.steps }));

  const code = "fr";
  const firstCncId = newCncTuts[0].id;
  if (!translations[code].tutorials[firstCncId]) {
    console.log(`Translating CNC tutorials to ${code}...`);
    const tutsData = await translateChunk(newCncTuts, "tutorials", "French");
    for (const t of tutsData) translations[code].tutorials[t.id] = t;
    save();
  }

  console.log("Done!");
}

main().catch(console.error);
