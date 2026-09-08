import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function enhanceBatchText(batchName, filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const arrayStart = content.indexOf("[");
  const arrayEnd = content.lastIndexOf("]") + 1;
  const arrayStr = content.slice(arrayStart, arrayEnd);

  const prompt = `You are a professional laser engraving and CNC routing expert writing for a broad audience.
I am providing you with the text of a JavaScript array containing tutorial objects.
Your tasks are:
1. Parse this data and improve its professional quality. Replace unprofessional terms like "burn" with "engrave", "cut", or "process".
2. Improve the \`summary\` by making it more professional and adding a brief real-life, practical example of what this skill is used for (e.g., custom signage).
3. Improve the descriptions in the \`steps\` array if they sound unprofessional.
4. For the \`image\` field, if it is missing or null, set it to the string "IMG.lab". If it is currently something like \`IMG.coasters\`, output the string "IMG.coasters".

Return EXACTLY a JSON array structure, properly formatted.
I am going to parse your output directly with JSON.parse(). Therefore, you MUST quote all property names (e.g., "id": "...", "title": "...") and ensure there are no trailing commas.
Do NOT wrap the output in markdown code blocks like \`\`\`json. Just the raw JSON string starting with [ and ending with ].

Raw JS Array Text:
${arrayStr}`;

  for (let i = 0; i < 3; i++) {
    try {
      console.log(`Enhancing ${batchName}... (Attempt ${i + 1})`);
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

      const parsed = JSON.parse(text);

      let jsContent = `import { IMG } from '../images.js';\n\nexport const ${batchName} = ${JSON.stringify(parsed, null, 2)};`;
      jsContent = jsContent.replace(/"image":\s*"IMG\.([^"]+)"/g, '"image": IMG.$1');

      fs.writeFileSync(filePath, jsContent);
      console.log(`Saved enhanced ${filePath}`);
      return;
    } catch (e) {
      console.log(`Attempt ${i + 1} failed for ${batchName}: ${e.message}`);
      if (i === 2) throw e;
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

async function main() {
  await enhanceBatchText("BATCH_1", "src/data/tutorials/batch1.js");
  await enhanceBatchText("BATCH_2", "src/data/tutorials/batch2.js");
  await enhanceBatchText("BATCH_3", "src/data/tutorials/batch3.js");
  await enhanceBatchText("BATCH_4", "src/data/tutorials/batch4.js");
}

main().catch(console.error);
