const fs = require('fs');
let content = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');

const enPatch = `    // Sainsmart Page
    "sainsmart.eyebrow": "Preferred Engineering Partner",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "As our preferred partner for desktop manufacturing and maker tools, SainSmart equips creators, makers, and engineering workshops with professional precision. Check out our detailed reviews, upcoming testing line-ups, and exclusive affiliate deals.",
    "sainsmart.btn_store": "Visit SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D Printer & DIY Tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclosure: Clicking these links supports Laserhuis reviews and guides at no extra cost to you.",`;

const nlPatch = `    // Sainsmart Page
    "sainsmart.eyebrow": "Voorkeurspartner in Engineering",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "Als onze voorkeurspartner voor desktop fabricage en makersgereedschap, voorziet SainSmart makers en werkplaatsen van professionele precisie. Bekijk onze gedetailleerde reviews, aankomende testopstellingen en exclusieve partnerdeals.",
    "sainsmart.btn_store": "Bezoek SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D-printers & DIY-tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclaimer: Het klikken op deze links ondersteunt Laserhuis reviews en gidsen zonder extra kosten voor jou.",`;

const frPatch = `    // Sainsmart Page
    "sainsmart.eyebrow": "Partenaire d'Ingénierie Préféré",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "En tant que partenaire privilégié pour la fabrication de bureau et les outils de création, SainSmart équipe les créateurs et les ateliers d'ingénierie avec une précision professionnelle. Découvrez nos tests détaillés, nos prochaines séries d'évaluations et nos offres d'affiliation exclusives.",
    "sainsmart.btn_store": "Visiter la boutique SainSmart",
    "sainsmart.btn_cnc": "CNC, Imprimantes 3D & Outils DIY ↗",
    "sainsmart.disclosure": "*Divulgation d'affiliation : Cliquer sur ces liens soutient les avis et guides de Laserhuis sans frais supplémentaires pour vous.",`;

let idxEn = content.indexOf('    // About Page');
let idxNl = content.indexOf('    // About Page', idxEn + 1);
let idxFr = content.indexOf('    // About Page', idxNl + 1);

content = content.slice(0, idxFr) + frPatch + "\\n\\n" + content.slice(idxFr);
content = content.slice(0, idxNl) + nlPatch + "\\n\\n" + content.slice(idxNl);
content = content.slice(0, idxEn) + enPatch + "\\n\\n" + content.slice(idxEn);

fs.writeFileSync('src/context/LanguageContext.jsx', content);
