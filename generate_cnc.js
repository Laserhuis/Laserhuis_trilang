import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateCNCTutorials() {
  const prompt = `You are a master CNC routing expert. Write exactly 20 distinct, high-quality, professional tutorials for beginner CNC hobbyists focusing on Genmitsu CNC machines.
Each tutorial should cover a different core skill, project, or technique (e.g., surfacing a spoilboard, cutting a basic pocket, V-carving a sign, making a 3D relief, feeds and speeds basics, holding down material, bit selection, etc.).

Return the data as a raw JSON array of objects (no markdown, no backticks, no wrapping text).
Every object must have EXACTLY this structure, matching the existing tutorials:
{
  "id": "unique-kebab-case-string",
  "title": "A Professional and Descriptive Title",
  "category": "Project" or "Skill",
  "difficulty": "Beginner" or "Intermediate",
  "laserType": "CNC",
  "readTime": "X min",
  "materials": ["Material 1", "Material 2"],
  "tools": ["Tool 1", "Tool 2"],
  "summary": "A professional summary including a real-life practical example.",
  "image": "IMG.lab",
  "steps": [
    { "title": "Step 1 Title", "detail": "Detailed instruction." },
    { "title": "Step 2 Title", "detail": "Detailed instruction." }
  ],
  "proTips": ["Tip 1", "Tip 2"],
  "safety": "Safety warning specific to this tutorial."
}

Ensure:
- Exactly 20 unique objects.
- All property names are double-quoted.
- The output is strictly valid JSON that can be passed to JSON.parse().
- Keep "image" exactly as the string "IMG.lab".
`;

  for (let i = 0; i < 3; i++) {
    try {
      console.log(`Generating CNC Tutorials... (Attempt ${i + 1})`);
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: { temperature: 0.3 }
      });

      let text = response.text.trim();
      if (text.startsWith("```json")) {
        text = text.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (text.startsWith("```")) {
        text = text.replace(/^```/, "").replace(/```$/, "").trim();
      }

      // Remove any trailing commas that might break JSON.parse
      text = text.replace(/,\s*([\]}])/g, '$1');

      const parsed = JSON.parse(text);

      if (!Array.isArray(parsed) || parsed.length !== 20) {
        throw new Error(`Expected array of 20 items, got ${Array.isArray(parsed) ? parsed.length : 'non-array'}`);
      }

      let jsContent = `import { IMG } from '../images.js';\n\nexport const CNC_TUTORIALS = ${JSON.stringify(parsed, null, 2)};`;
      jsContent = jsContent.replace(/"image":\s*"IMG\.lab"/g, '"image": IMG.lab');

      fs.writeFileSync("src/data/tutorials/cncGenmitsu.js", jsContent);
      console.log(`Saved 20 unique CNC tutorials to src/data/tutorials/cncGenmitsu.js`);
      return;
    } catch (e) {
      console.log(`Attempt ${i + 1} failed: ${e.message}`);
      if (i === 2) throw e;
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

generateCNCTutorials().catch(console.error);
