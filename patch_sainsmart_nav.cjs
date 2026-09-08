const fs = require('fs');
let content = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');

const enPatch = `    "sainsmart.nav_title": "Navigation:",
    "sainsmart.nav_flagship": "# Flagship Laser",
    "sainsmart.nav_cnc": "# Heavy-Duty CNC",
    "sainsmart.nav_gear": "# Recommended Gear",
    "sainsmart.nav_faq": "# Calibration & FAQs",
    "sainsmart.flagship_eyebrow": "Flagship Review",
    "sainsmart.flagship_title": "Our #1 Rated Desktop Laser",
    "sainsmart.editor_pick": "★ Editor's Pick",`;

const nlPatch = `    "sainsmart.nav_title": "Navigatie:",
    "sainsmart.nav_flagship": "# Vlaggenschip Laser",
    "sainsmart.nav_cnc": "# Heavy-Duty CNC",
    "sainsmart.nav_gear": "# Aanbevolen Uitrusting",
    "sainsmart.nav_faq": "# Kalibratie & FAQs",
    "sainsmart.flagship_eyebrow": "Vlaggenschip Review",
    "sainsmart.flagship_title": "Onze #1 Beoordeelde Desktop Laser",
    "sainsmart.editor_pick": "★ Keuze van de Redactie",`;

const frPatch = `    "sainsmart.nav_title": "Navigation :",
    "sainsmart.nav_flagship": "# Laser Phare",
    "sainsmart.nav_cnc": "# CNC Robuste",
    "sainsmart.nav_gear": "# Équipement Recommandé",
    "sainsmart.nav_faq": "# Étalonnage & FAQ",
    "sainsmart.flagship_eyebrow": "Test Phare",
    "sainsmart.flagship_title": "Notre Laser de Bureau N°1",
    "sainsmart.editor_pick": "★ Choix de la Rédaction",`;

let idxEn = content.indexOf('    "sainsmart.disclosure"');
let idxNl = content.indexOf('    "sainsmart.disclosure"', idxEn + 1);
let idxFr = content.indexOf('    "sainsmart.disclosure"', idxNl + 1);

const enEnd = content.indexOf('\\n', idxEn) + 1;
const nlEnd = content.indexOf('\\n', idxNl) + 1;
const frEnd = content.indexOf('\\n', idxFr) + 1;

content = content.slice(0, frEnd) + frPatch + "\\n" + content.slice(frEnd);
content = content.slice(0, nlEnd) + nlPatch + "\\n" + content.slice(nlEnd);
content = content.slice(0, enEnd) + enPatch + "\\n" + content.slice(enEnd);

fs.writeFileSync('src/context/LanguageContext.jsx', content);
