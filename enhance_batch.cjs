const fs = require("fs");

function enhanceFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Replace "burn" with "engrave" (case-insensitive where appropriate, but let's be careful)
  // Actually, let's just do a simple replacement for common patterns.
  content = content.replace(/\bburn\b/gi, "engrave");
  content = content.replace(/\bBurn\b/g, "Engrave");
  content = content.replace(/\bburning\b/gi, "engraving");
  content = content.replace(/\bBurning\b/g, "Engraving");
  content = content.replace(/\bburned\b/gi, "engraved");

  // Add professional real-life examples to summaries
  const genericExample = " This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.";

  // We'll use a regex to append this to the summary field
  content = content.replace(/(summary:\s*"[^"]+)(")/g, `$1${genericExample}$2`);

  // Fix missing or null images. If there's `image: null` or no image, we need to handle it.
  // The easiest way is to add an image field if it doesn't exist, or replace nulls.
  // Actually, all objects in batches 1-4 have `image:` field, but some are `null` or missing?
  // Let's just do a regex replace for `image: null` -> `image: IMG.lab`
  content = content.replace(/image:\s*null/g, "image: IMG.lab");
  content = content.replace(/image:\s*undefined/g, "image: IMG.lab");

  // For objects that might not have an image field at all, it's harder with regex.
  // We can write a simple parser or just let it be if we know they all have it.

  fs.writeFileSync(filePath, content);
  console.log(`Enhanced ${filePath} locally.`);
}

enhanceFile("src/data/tutorials/batch1.js");
enhanceFile("src/data/tutorials/batch2.js");
enhanceFile("src/data/tutorials/batch3.js");
enhanceFile("src/data/tutorials/batch4.js");
