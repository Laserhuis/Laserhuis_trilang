const fs = require('fs');
let content = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');

const enPatch = `    "sainsmart.knowledgebase": "Knowledgebase",
    "sainsmart.faq_title": "Maker Setup & Calibration FAQs",
    "sainsmart.faq_desc": "Get the absolute most out of your SainSmart Genmitsu equipment with expert-curated answers on calibration, materials, and troubleshooting.",
    "sainsmart.partner_title": "SainSmart is Our Preferred Manufacturing Partner",
    "sainsmart.partner_desc": "Through close collaboration, we are able to benchmark top CNC, laser, and 3D printing equipment. Every review is supported by extensive real-world workshop runs to supply honest data for our fellow makers.",`;

const nlPatch = `    "sainsmart.knowledgebase": "Kennisbank",
    "sainsmart.faq_title": "Maker Setup & Kalibratie FAQs",
    "sainsmart.faq_desc": "Haal het maximale uit uw SainSmart Genmitsu apparatuur met door experts samengestelde antwoorden over kalibratie, materialen en probleemoplossing.",
    "sainsmart.partner_title": "SainSmart is Onze Voorkeurspartner voor Productie",
    "sainsmart.partner_desc": "Door nauwe samenwerking kunnen we de beste CNC-, laser- en 3D-printapparatuur benchmarken. Elke review wordt ondersteund door uitgebreide praktijktests om eerlijke data te leveren voor onze mede-makers.",`;

const frPatch = `    "sainsmart.knowledgebase": "Base de Connaissances",
    "sainsmart.faq_title": "FAQ sur la Configuration & l'Étalonnage pour les Créateurs",
    "sainsmart.faq_desc": "Tirez le meilleur parti de votre équipement SainSmart Genmitsu grâce à des réponses d'experts sur l'étalonnage, les matériaux et le dépannage.",
    "sainsmart.partner_title": "SainSmart est Notre Partenaire de Fabrication Préféré",
    "sainsmart.partner_desc": "Grâce à une étroite collaboration, nous pouvons évaluer les meilleurs équipements CNC, laser et d'impression 3D. Chaque test est étayé par des essais intensifs en atelier réel afin de fournir des données honnêtes à nos collègues créateurs.",`;

let idxEn = content.indexOf('    "sainsmart.editor_pick"');
let idxNl = content.indexOf('    "sainsmart.editor_pick"', idxEn + 1);
let idxFr = content.indexOf('    "sainsmart.editor_pick"', idxNl + 1);

const enEnd = content.indexOf('\\n', idxEn) + 1;
const nlEnd = content.indexOf('\\n', idxNl) + 1;
const frEnd = content.indexOf('\\n', idxFr) + 1;

content = content.slice(0, frEnd) + frPatch + "\\n" + content.slice(frEnd);
content = content.slice(0, nlEnd) + nlPatch + "\\n" + content.slice(nlEnd);
content = content.slice(0, enEnd) + enPatch + "\\n" + content.slice(enEnd);

fs.writeFileSync('src/context/LanguageContext.jsx', content);
