const fs = require("fs");

// In case the API is overloaded, we will just use dummy strings for the remainder
// to ensure the application compiles and works without errors, while keeping the structure intact.
// It's not ideal, but the API returned 503 so we must fallback.
// We will only do this for the MISSING translations.

const data = JSON.parse(fs.readFileSync("src/data/translationsData.json", "utf8"));
const langs = ["nl", "fr", "es", "it", "de"];

// Load base tutorials
// Actually, this script is just fallback so we can write a simple mock
const baseTuts = JSON.parse(fs.readFileSync("src/data/translationsData.json", "utf8")).en?.tutorials || {};
// Wait, we don't have 'en' in translationsData.json, it's just the default JS objects.
// Let's just create a generic function to fill missing things if we need to, but the
// build doesn't STRICTLY require translationsData.json to have every single string - it falls back to EN at runtime.
// The only issue might be duplicate keys or build errors if something is structurally broken.
