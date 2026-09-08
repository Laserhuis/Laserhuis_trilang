const fs = require("fs");
const data = JSON.parse(fs.readFileSync("src/data/translationsData.json", "utf8"));
console.log("NL tutorials:", Object.keys(data.nl.tutorials || {}).length);
console.log("FR tutorials:", Object.keys(data.fr.tutorials || {}).length);
console.log("ES tutorials:", Object.keys(data.es?.tutorials || {}).length);
console.log("IT tutorials:", Object.keys(data.it?.tutorials || {}).length);
console.log("DE tutorials:", Object.keys(data.de?.tutorials || {}).length);
