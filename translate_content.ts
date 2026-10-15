import { GoogleGenAI } from "@google/genai";
import fs from "fs";

import { REVIEWS } from "./src/data/reviews.js";
import { MATERIALS } from "./src/data/materialSettings.js";
import { BATCH_1 } from "./src/data/tutorials/batch1.js";
import { BATCH_2 } from "./src/data/tutorials/batch2.js";
import { BATCH_3 } from "./src/data/tutorials/batch3.js";
import { BATCH_4 } from "./src/data/tutorials/batch4.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const ALL_TUTORIALS = [...BATCH_1, ...BATCH_2, ...BATCH_3, ...BATCH_4];

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
  
  let translations = { nl: { reviews: {}, materials: {}, tutorials: {} }, fr: { reviews: {}, materials: {}, tutorials: {} } };
  try {
    if (fs.existsSync("src/data/translationsData.json")) {
      const fileData = fs.readFileSync("src/data/translationsData.json", "utf8");
      if (fileData.length > 100) {
        translations = JSON.parse(fileData);
      }
    }
  } catch(e) {}

  const save = () => fs.writeFileSync("src/data/translationsData.json", JSON.stringify(translations, null, 2));

  if (Object.keys(translations.nl.reviews).length === 0) {
    console.log("Translating reviews to NL...");
    const reviewsNl = await translateChunk(REVIEWS.map(r => ({ id: r.id, summary: r.summary, pros: r.pros, cons: r.cons, hardwareSpecs: r.hardwareSpecs, benchmarks: r.benchmarks })), "reviews", "Dutch");
    for (const r of reviewsNl) translations.nl.reviews[r.id] = r;
    save();
  }

  if (Object.keys(translations.fr.reviews).length === 0) {
    console.log("Translating reviews to FR...");
    const reviewsFr = await translateChunk(REVIEWS.map(r => ({ id: r.id, summary: r.summary, pros: r.pros, cons: r.cons, hardwareSpecs: r.hardwareSpecs, benchmarks: r.benchmarks })), "reviews", "French");
    for (const r of reviewsFr) translations.fr.reviews[r.id] = r;
    save();
  }

  const topTutorials = ALL_TUTORIALS.slice(0, 8).map(t => ({ id: t.id, title: t.title, summary: t.summary, steps: t.steps, troubleshooting: t.troubleshooting }));
  
  if (Object.keys(translations.nl.tutorials).length === 0) {
    console.log("Translating tutorials to NL...");
    const tutsNl = await translateChunk(topTutorials, "tutorials", "Dutch");
    for (const t of tutsNl) translations.nl.tutorials[t.id] = t;
    save();
  }

  if (Object.keys(translations.fr.tutorials).length === 0) {
    console.log("Translating tutorials to FR...");
    const tutsFr = await translateChunk(topTutorials, "tutorials", "French");
    for (const t of tutsFr) translations.fr.tutorials[t.id] = t;
    save();
  }

  console.log("Done!");
}

main().catch(console.error);
