import fs from "fs";

const file = "src/context/LanguageContext.jsx";
let content = fs.readFileSync(file, "utf8");

const esTranslations = `
  es: {
    "nav.reviews": "Reseñas",
    "nav.tutorials": "Tutoriales",
    "nav.cnc": "Genmitsu CNC",
    "nav.materials": "Materiales",
    "nav.gallery": "Galería",
    "nav.videos": "Vídeos",
    "nav.brands": "Marcas",
    "nav.sainsmart": "SainSmart",
    "nav.about": "Acerca de",
    "nav.compare": "Comparar",
    "nav.favourites": "Guardado",
    "nav.dithering": "Tramado",
    "header.search_placeholder": "Buscar tutoriales, reseñas, materiales…",
    "header.no_matches": "No hay coincidencias para",
    "header.group_tutorials": "Tutoriales",
    "header.group_reviews": "Reseñas",
    "header.group_materials": "Materiales",
    "header.switch_language": "Idioma",
    "footer.title": "Laserhuis",
    "footer.desc": "Empoderando a los creadores.",
    "footer.rights": "Todos los derechos reservados."
  },`;

const itTranslations = `
  it: {
    "nav.reviews": "Recensioni",
    "nav.tutorials": "Tutorial",
    "nav.cnc": "Genmitsu CNC",
    "nav.materials": "Materiali",
    "nav.gallery": "Galleria",
    "nav.videos": "Video",
    "nav.brands": "Marchi",
    "nav.sainsmart": "SainSmart",
    "nav.about": "Chi siamo",
    "nav.compare": "Confronta",
    "nav.favourites": "Salvato",
    "nav.dithering": "Dithering",
    "header.search_placeholder": "Cerca tutorial, recensioni, materiali…",
    "header.no_matches": "Nessuna corrispondenza per",
    "header.group_tutorials": "Tutorial",
    "header.group_reviews": "Recensioni",
    "header.group_materials": "Materiali",
    "header.switch_language": "Lingua",
    "footer.title": "Laserhuis",
    "footer.desc": "Potenziare i creatori.",
    "footer.rights": "Tutti i diritti riservati."
  },`;

const deTranslations = `
  de: {
    "nav.reviews": "Bewertungen",
    "nav.tutorials": "Tutorials",
    "nav.cnc": "Genmitsu CNC",
    "nav.materials": "Materialien",
    "nav.gallery": "Galerie",
    "nav.videos": "Videos",
    "nav.brands": "Marken",
    "nav.sainsmart": "SainSmart",
    "nav.about": "Über uns",
    "nav.compare": "Vergleichen",
    "nav.favourites": "Gespeichert",
    "nav.dithering": "Dithering",
    "header.search_placeholder": "Tutorials, Bewertungen, Materialien suchen…",
    "header.no_matches": "Keine Treffer für",
    "header.group_tutorials": "Tutorials",
    "header.group_reviews": "Bewertungen",
    "header.group_materials": "Materialien",
    "header.switch_language": "Sprache",
    "footer.title": "Laserhuis",
    "footer.desc": "Schöpfer stärken.",
    "footer.rights": "Alle Rechte vorbehalten."
  },`;

// Check if they are already in the file
if (!content.includes("es: {")) {
  content = content.replace("fr: {", esTranslations + itTranslations + deTranslations + "\n  fr: {");
  fs.writeFileSync(file, content);
  console.log("Added UI translations to LanguageContext.jsx");
} else {
  console.log("Translations already exist.");
}
