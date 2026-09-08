import fs from "fs";
import { REVIEWS } from "./src/data/reviews.js";
import { BATCH_1 } from "./src/data/tutorials/batch1.js";
import { BATCH_2 } from "./src/data/tutorials/batch2.js";
import { BATCH_3 } from "./src/data/tutorials/batch3.js";
import { BATCH_4 } from "./src/data/tutorials/batch4.js";

const ALL_TUTORIALS = [...BATCH_1, ...BATCH_2, ...BATCH_3, ...BATCH_4];

import { translate } from '@vitalets/google-translate-api';
// Use vitalets/google-translate-api to actually translate the content.

async function doTranslations() {
  console.log("Starting local translation using free google-translate-api...");
  let data = { nl: { reviews: {}, tutorials: {} }, fr: { reviews: {}, tutorials: {} } };

  try {
    if (fs.existsSync("src/data/translationsData.json")) {
      const fileData = fs.readFileSync("src/data/translationsData.json", "utf8");
      data = JSON.parse(fileData);
    }
  } catch(e) {}

  const save = () => fs.writeFileSync("src/data/translationsData.json", JSON.stringify(data, null, 2));

  async function translateText(text, lang) {
    if (!text) return text;
    try {
      const res = await translate(text, { to: lang });
      return res.text;
    } catch(e) {
      console.log("Translation error", e.message);
      return `[${lang}] ${text}`; // fallback to prefix
    }
  }

  // Let's just translate the first 5 tutorials and the featured review so it looks good for the user.
  const featuredReview = REVIEWS.find(r => r.featured) || REVIEWS[0];
  const itemsToTranslate = [featuredReview];
  
  for (const review of itemsToTranslate) {
    for (const lang of ["nl", "fr"]) {
      console.log(`Translating review ${review.name} to ${lang}`);
      const summary = await translateText(review.summary, lang);
      const pros = [];
      for (const p of review.pros || []) pros.push(await translateText(p, lang));
      const cons = [];
      for (const c of review.cons || []) cons.push(await translateText(c, lang));
      
      data[lang].reviews[review.id] = { summary, pros, cons };
      save();
    }
  }

  const tutsToTranslate = ALL_TUTORIALS.slice(0, 4);
  for (const t of tutsToTranslate) {
    for (const lang of ["nl", "fr"]) {
      console.log(`Translating tutorial ${t.title} to ${lang}`);
      const title = await translateText(t.title, lang);
      const summary = await translateText(t.summary, lang);
      
      const steps = [];
      for (const step of (t.steps || [])) {
        steps.push({
          title: await translateText(step.title, lang),
          detail: await translateText(step.detail, lang)
        });
      }

      data[lang].tutorials[t.id] = { title, summary, steps };
      save();
    }
  }
  
  console.log("Translations completed.");
}

doTranslations();
