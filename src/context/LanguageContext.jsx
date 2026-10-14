import React, { createContext, useContext, useState } from "react";

export const LANGUAGES = [
  { code: "nl", label: "Nederlands", short: "NL", flag: "🇳🇱" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", short: "DE", flag: "🇩🇪" },
  { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
];

const translations = {
  nl: {
    "nav.home": "Home",
    "nav.tutorials": "Handleidingen",
    "nav.reviews": "Reviews",
    "nav.materials": "Materialen",
    "nav.compare": "Vergelijken",
    "nav.favourites": "Favorieten",
    "nav.videos": "Video's",
    "nav.about": "Over Ons",
    "nav.brands": "Merken",
    "nav.gallery": "Galerij",
    "nav.sainsmart": "SainSmart Hub",
    "nav.cnc_calculator": "CNC Calculator",

    "sainsmart.eyebrow": "Voorkeurspartner in Engineering",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "Als onze voorkeurspartner voor desktop fabricage en makersgereedschap, voorziet SainSmart makers en werkplaatsen van professionele precisie. Bekijk onze gedetailleerde reviews, aankomende testopstellingen en exclusieve partnerdeals.",
    "sainsmart.btn_store": "Bezoek SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D-printers & DIY-tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclaimer: Het klikken op deze links ondersteunt Laserhuis reviews en gidsen zonder extra kosten voor jou.",

    "about.eyebrow": "Precisie Laservakmanschap & Techniek",
    "about.welcome": "Welkom bij",
    "about.hero_desc": "Laserhuis is hét digitale platform voor lasergraveren, -snijden en industriële markering. Ontworpen voor hobbyisten, makers en productiewerkplaatsen.",
    "about.mission_title": "Onze Missie",
    "about.mission_p1": "We zijn Laserhuis gestart met een eenvoudig doel: lasertechnologie toegankelijk, voorspelbaar en opmerkelijk nauwkeurig maken.",
    "about.stat_tutorials": "Technische Handleidingen",
    "about.stat_reviews": "Diepgaande Reviews",
    "about.stat_makers": "Geholpen Makers",
    "about.stat_dither": "Dithering Algoritmes",

    "laser.diode": "Diode Laser",
    "laser.co2": "CO2 Laser",
    "laser.fiber": "Fiber Galvo Laser",
    "laser.uv": "UV Laser",

    "diff.beginner": "Beginner",
    "diff.intermediate": "Gemiddeld",
    "diff.advanced": "Gevorderd",
    "diff.expert": "Expert",
  },
  en: {
    "nav.home": "Home",
    "nav.tutorials": "Tutorials",
    "nav.reviews": "Reviews",
    "nav.materials": "Materials",
    "nav.compare": "Compare",
    "nav.favourites": "Favourites",
    "nav.videos": "Videos",
    "nav.about": "About Us",
    "nav.brands": "Brands",
    "nav.gallery": "Gallery",
    "nav.sainsmart": "SainSmart Hub",
    "nav.cnc_calculator": "CNC Calculator",

    "sainsmart.eyebrow": "Preferred Engineering Partner",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "As our preferred partner for desktop manufacturing and maker tools, SainSmart equips creators, makers, and engineering workshops with professional precision. Check out our detailed reviews, upcoming testing line-ups, and exclusive affiliate deals.",
    "sainsmart.btn_store": "Visit SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D Printer & DIY Tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclosure: Clicking these links supports Laserhuis reviews and guides at no extra cost to you.",

    "about.eyebrow": "Precision Laser Crafting & Engineering",
    "about.welcome": "Welcome to",
    "about.hero_desc": "Laserhuis is the definitive digital hub for laser engraving, cutting, and industrial marking. Designed for hobbyists, makers, and production workshops.",
    "about.mission_title": "Our Mission",
    "about.mission_p1": "We started Laserhuis with a simple goal: to make laser technology accessible, predictable, and remarkably precise.",
    "about.stat_tutorials": "Technical Tutorials",
    "about.stat_reviews": "In-Depth Reviews",
    "about.stat_makers": "Makers Helped",
    "about.stat_dither": "Dither Algorithms",

    "laser.diode": "Diode Laser",
    "laser.co2": "CO2 Laser",
    "laser.fiber": "Fiber Galvo Laser",
    "laser.uv": "UV Laser",

    "diff.beginner": "Beginner",
    "diff.intermediate": "Intermediate",
    "diff.advanced": "Advanced",
    "diff.expert": "Expert",
  },
  de: {
    "nav.home": "Startseite",
    "nav.tutorials": "Anleitungen",
    "nav.reviews": "Bewertungen",
    "nav.materials": "Materialien",
    "nav.compare": "Vergleichen",
    "nav.favourites": "Favoriten",
    "nav.videos": "Videos",
    "nav.about": "Über uns",
    "nav.brands": "Marken",
    "nav.gallery": "Galerie",
    "nav.sainsmart": "SainSmart Hub",
    "nav.cnc_calculator": "CNC-Rechner",

    "laser.diode": "Diodenlaser",
    "laser.co2": "CO2 Laser",
    "laser.fiber": "Faser-Galvo-Laser",
    "laser.uv": "UV Laser",

    "diff.beginner": "Anfänger",
    "diff.intermediate": "Fortgeschritten",
    "diff.advanced": "Experte",
    "diff.expert": "Profi",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.tutorials": "Tutoriels",
    "nav.reviews": "Avis",
    "nav.materials": "Matériaux",
    "nav.compare": "Comparer",
    "nav.favourites": "Favoris",
    "nav.videos": "Vidéos",
    "nav.about": "À Propos",
    "nav.brands": "Marques",
    "nav.gallery": "Galerie",
    "nav.sainsmart": "SainSmart Hub",
    "nav.cnc_calculator": "Calculateur CNC",

    "laser.diode": "Laser Diode",
    "laser.co2": "Laser CO2",
    "laser.fiber": "Laser Fibre Galvo",
    "laser.uv": "Laser UV",

    "diff.beginner": "Débutant",
    "diff.intermediate": "Intermédiaire",
    "diff.advanced": "Avancé",
    "diff.expert": "Expert",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("laserhuis_lang") || "nl";
  });

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("laserhuis_lang", newLang);
  };

  const t = (key, fallback = "") => {
    const langDict = translations[language] || translations.nl;
    if (langDict && langDict[key]) return langDict[key];
    const enDict = translations.en;
    if (enDict && enDict[key]) return enDict[key];
    return fallback || key;
  };

  const translateLaserType = (type) => {
    const key = `laser.${type?.toLowerCase()}`;
    return t(key, type ? type.toUpperCase() : "");
  };

  const translateDifficulty = (level) => {
    const key = `diff.${level?.toLowerCase()}`;
    return t(key, level || "");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t,
        translateLaserType,
        translateDifficulty,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "nl",
      setLanguage: () => {},
      t: (key, fallback = "") => fallback || key,
      translateLaserType: (type) => type || "",
      translateDifficulty: (level) => level || "",
    };
  }
  return context;
};
