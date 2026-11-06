// Dutch & French authentic translations for tutorials
export const TUTORIAL_TRANSLATIONS = {
  nl: {
    "wood-coasters-stucki": {
      title: "Meesterlijk Fotograveren op Berkenmultiplex met Stucki Dithering",
      summary: "Uitgebreide optische en chemische methodologie om foto's met hoog dynamisch bereik om te zetten in haarscherpe gravures op berkenhout zonder randverbranding of detailverlies.",
      category: "Project",
      difficulty: "Beginner",
      estimatedTime: "12 min",
      targetMaterial: "3mm Kwaliteit-A Baltisch Berkenmultiplex",
      materials: ["3mm Kwaliteit-A Baltisch Berkenmultiplex (5-laags)", "Blauwe Schilderstape (3M 2090)", "Zuivere Minerale Houtolie"],
      tools: ["LightBurn DSP/GRBL Software v1.6+", "Korrel 320 Schuurpapier", "Antistatische Microvezeldoek"],
      exactParameters: {
        power: "28%",
        speed: "4500 mm/min",
        passes: "1",
        lineInterval: "0.08mm (317.5 DPI)",
        airAssist: "Laag (5-8 PSI)",
        focusOffset: "Exact op oppervlak",
        lightburnMode: "Afbeelding (Stucki)",
        frequency: "N.v.t. (Diode)"
      },
      materialPrep: "Schuur het berken oppervlak met korrel 320 in de richting van de houtnerf. Breng 3M tape aan in een hoek van 45° met een rakel om luchtbellen te verwijderen.",
      steps: [
        {
          title: "Fotometrische voorbewerking & Gamma-correctie",
          detail: "Importeer een ongecomprimeerde TIFF/PNG afbeelding in LightBurn. Pas een onscherp masker toe en stel het gamma-middenpunt in op 0.85 om schaduwen te comprimeren en details in ogen en huid te versterken."
        },
        {
          title: "Dithering-matrix selectie (Waarom Stucki)",
          detail: "Kies de 'Stucki' foutdiffusiematrix onder de laaginstellingen. Stucki gebruikt een 48-coëfficiënten kernel over een 5x5 matrix en levert zachte gradaties zonder zichtbare stippellijnen."
        },
        {
          title: "Spotgrootte afstemmen & Lijninterval",
          detail: "Bereken het lijninterval op basis van de laserpuntdiameter (0.08mm). Stel het interval exact in op 0.08mm (317.5 DPI) voor 100% dekking zonder dubbele verbranding."
        },
        {
          title: "Oppervlaktevoorbereiding & Maskering",
          detail: "Schuur de plaat en breng schilderstape strak aan. Dit vangt verdampte houtteer op en voorkomt gele rookvlekken rondom het portret."
        },
        {
          title: "Laserparameters uitvoeren",
          detail: "20W 455nm Diode: 4500 mm/min op 28% vermogen. 50W CO2: 350 mm/s op 12% vermogen. Fiber (1064nm) is ongeschikt voor hout."
        },
        {
          title: "Chemische reiniging & Olie-afwerking",
          detail: "Verwijder de tape, neem af met 99% isopropylalcohol (IPA) om resthars op te lossen, en behandel met voedselveilige minerale olie. Laat 40 minuten intrekken."
        }
      ],
      proTips: [
        "Berkenhout bevat lignine dat vergeelt onder UV-licht; bewaar onbewerkte platen altijd in het donker.",
        "Verhoog bij fletse gravures het contrast in LightBurn met +12% in plaats van het laservermogen op te voeren."
      ],
      troubleshooting: [
        { issue: "Donkere verbrandingskringen rond fijne details", fix: "Verlaag luchtondersteuning naar 5 PSI en verhoog voedingssnelheid met 10%." },
        { issue: "Streeppatroon in lichte tinten", fix: "Controleer of het lijninterval overeenkomt met de spotgrootte (0.08mm)." }
      ],
      safety: "Houtpyrolyse stoot terpenen en fijnstof uit. Zorg voor actieve afzuiging van minimaal 120 CFM."
    },

    "slate-coasters-laser": {
      title: "Natuurlijke Leisteen Onderzetters Graveren met Halftone Matrix",
      summary: "Ontwikkelde methode voor helderwitte, permanente gravures van logo's en fotoportretten op natuurlijk metamorf leisteen zonder afbrokkeling.",
      category: "Project",
      difficulty: "Beginner",
      estimatedTime: "10 min",
      targetMaterial: "Natuurlijke Leisteen Onderzetters (10x10cm)",
      materials: ["Natuurlijke Leisteen Onderzetters (10x10cm)", "Zijdeglans Polyurethaanspray", "Zelfklevende Viltjes 2mm"],
      tools: ["LightBurn Software", "99% Isopropyl Alcohol", "Zachte Nylonborstel"],
      exactParameters: {
        power: "45%",
        speed: "3200 mm/min",
        passes: "1",
        lineInterval: "0.075mm (338 DPI)",
        airAssist: "Medium (12 PSI)",
        focusOffset: "+1.0mm Defocus voor breed wit effect",
        lightburnMode: "Afbeelding (Jarvis / Halftone)",
        frequency: "N.v.t."
      },
      materialPrep: "Was leisteen met water en zeep, ontvet met alcohol, en breng één ultradunne laag matte lak aan.",
      steps: [
        {
          title: "Leisteen wassen & ontvetten",
          detail: "Verwijder steengruis met een nylonborstel en warm water. Droog 30 minuten in de oven op 60°C of met een heteluchtpistool."
        },
        {
          title: "Optische Defocus voor maximaal contrast",
          detail: "Stel de focushoogte in op 1.0mm boven het oppervlak. Door lichte defocusering ontstaat een thermische micro-breuk die helderwit oplicht in plaats van grijs."
        },
        {
          title: "LightBurn instellingen instellen",
          detail: "Inverteer de afbeelding (negatief), omdat leisteen wit wordt bij graveren. Kies Jarvis dithering of Halftone op 338 DPI."
        },
        {
          title: "Graveren & Afwerken",
          detail: "Graveer op 3200 mm/min bij 45% vermogen (20W diode). Borstel het witte stof weg en breng viltjes aan aan de onderzijde."
        }
      ],
      proTips: [
        "Inverteer altijd foto's op leisteen: laserstraling bleekt het gesteente wit!",
        "Een druppel minerale olie op niet-gegraveerde delen maakt het leisteen diep antracietzwart voor extra contrast."
      ],
      safety: "Draag een FFP2/FFP3 masker tegen fijn kwartsstof bij het schoonborstelen van gegraveerd gesteente."
    },

    "acrylic-led-edge-lit": {
      title: "Edge-Lit Acrylaat LED Lamp met Invert-Contour Graveren",
      summary: "Gids voor het snijden en graveren van optisch helder gegoten acrylaat (cast acrylic) voor strakke LED-lichtgeleiding zonder smeltbraam.",
      category: "Project",
      difficulty: "Intermediate",
      estimatedTime: "15 min",
      targetMaterial: "4mm Gegoten Acrylaat (Cast Acrylic)",
      exactParameters: {
        power: "Gravure 18% / Snijden 85%",
        speed: "Gravure 5000 mm/min / Snijden 350 mm/min",
        passes: "1",
        lineInterval: "0.065mm",
        airAssist: "Gravure: Uit / Snijden: Hoog (25 PSI)",
        focusOffset: "Precies op oppervlak",
        lightburnMode: "Fill + Cut",
        frequency: "N.v.t."
      }
    },

    "rotary-yeti-tumbler": {
      title: "Naadloos 360° Graveren van Gepoedercoate RVS Bekers met Rotary",
      summary: "Volledig stappenplan voor slipvrije uitlijning, rotatiestap-calibratie en het schoonbranden van poedercoating tot glanzend roestvrij staal.",
      category: "Project",
      difficulty: "Intermediate",
      estimatedTime: "20 min",
      targetMaterial: "Gepoedercoat RVS Bekers / Tuimelaars",
      exactParameters: {
        power: "75%",
        speed: "2400 mm/min",
        passes: "1",
        lineInterval: "0.06mm (423 DPI)",
        airAssist: "Medium (10 PSI)",
        focusOffset: "Brandpunt exact op hoogste welving",
        lightburnMode: "Fill",
        frequency: "N.v.t."
      }
    },

    "leather-patch-hat": {
      title: "Plantaardig Gelooide Leren Patches met Vector Arcering",
      summary: "Creëer geurloze, diep reliëf leren patches voor petten en tassen met zuivere snijkanten zonder zwarte roetafzetting.",
      category: "Project",
      difficulty: "Beginner",
      estimatedTime: "15 min",
      targetMaterial: "2.0mm Plantaardig Gelooid Tuigleer",
      exactParameters: {
        power: "22%",
        speed: "3800 mm/min",
        passes: "1",
        lineInterval: "0.085mm",
        airAssist: "Hoog (20 PSI)",
        focusOffset: "Oppervlak",
        lightburnMode: "Offset Fill",
        frequency: "N.v.t."
      }
    }
  },

  fr: {
    "wood-coasters-stucki": {
      title: "Maîtriser la Gravure Photo sur Contreplaqué Bouleau avec Tramage Stucki",
      summary: "Méthodologie optique et chimique complète pour convertir des portraits photo HDR en gravures ultra-nettes sur bouleau sans brûler les détails délicats.",
      category: "Projet",
      difficulty: "Débutant",
      estimatedTime: "12 min",
      targetMaterial: "Contreplaqué Bouleau de la Baltique 3mm Qualité A",
      materials: ["Contreplaqué Bouleau de la Baltique 3mm (5 plis)", "Ruban de Masquage Bleu (3M 2090)", "Huile Minérale Alimentaire"],
      tools: ["Logiciel LightBurn v1.6+", "Papier de Verre Grain 320", "Chiffon Microfibre Antistatique"],
      exactParameters: {
        power: "28%",
        speed: "4500 mm/min",
        passes: "1",
        lineInterval: "0.08mm (317.5 DPI)",
        airAssist: "Faible (5-8 PSI)",
        focusOffset: "Exactement en surface",
        lightburnMode: "Image (Stucki)",
        frequency: "N/A (Diode)"
      },
      materialPrep: "Poncez la surface avec du grain 320 dans le sens du fil du bois. Appliquez le ruban 3M à 45° à l'aide d'une raclette pour chasser les bulles d'air.",
      steps: [
        {
          title: "Prétraitement Photométrique & Correction Gamma",
          detail: "Importez une image TIFF/PNG non compressée dans LightBurn. Appliquez un masque de netteté 0.5 et ajustez le gamma à 0.85 pour densifier les ombres et révéler le grain de peau."
        },
        {
          title: "Sélection de la Matrice de Tramage (Pourquoi Stucki)",
          detail: "Sélectionnez le tramage 'Stucki' dans les paramètres de calque. Stucki utilise un noyau de 48 coefficients sur une matrice 5x5, éliminant les motifs directionnels et préservant les dégradés fins."
        },
        {
          title: "Adaptation du Faisceau & Intervalle de Ligne",
          detail: "Calculez l'intervalle selon le diamètre de focalisation (0.08mm). Réglez l'intervalle exactement sur 0.08mm (317.5 DPI) pour une couverture totale sans double brûlure."
        },
        {
          title: "Préparation du Support & Masquage",
          detail: "Poncez le bois et marouflez le ruban adhésif pour capturer les dépôts de résine et de goudron vaporisés."
        },
        {
          title: "Exécution des Paramètres Laser",
          detail: "Diode 20W (455nm) : 4500 mm/min à 28% de puissance. CO2 50W : 350 mm/s à 12%. Fibre (1064nm) : Non compatible bois."
        },
        {
          title: "Nettoyage Chimique & Finition Huilée",
          detail: "Retirez le ruban de masquage, essuyez à l'alcool isopropylique (IPA 99%) et appliquez 5ml d'huile minérale protectrice. Laissez sécher 40 minutes."
        }
      ],
      proTips: [
        "Le bouleau contient de la lignine sensible aux UV ; stockez vos planches brutes à l'abri de la lumière.",
        "Si la gravure paraît terne, augmentez le contraste de +12% dans LightBurn plutôt que la puissance laser."
      ],
      troubleshooting: [
        { issue: "Halos sombres de brûlure autour des détails", fix: "Réduisez l'assistance d'air à 5 PSI et augmentez la vitesse de 10%." },
        { issue: "Lignes horizontales visibles", fix: "Ajustez l'intervalle de ligne pour correspondre au diamètre de spot (0.08mm)." }
      ],
      safety: "La pyrolyse du bois libère des terpènes et des particules fines. Une extraction d'au moins 120 CFM est indispensable."
    },

    "slate-coasters-laser": {
      title: "Gravure Laser de Sous-Verres en Ardoise Naturelle avec Matrice Demi-Teinte",
      summary: "Protocole technique pour réaliser des gravures vectorielles et photographiques d'un blanc pur éclatant sur ardoise métamorphique noire.",
      category: "Projet",
      difficulty: "Débutant",
      estimatedTime: "10 min",
      targetMaterial: "Sous-verres en Ardoise Naturelle (10x10cm)",
      materials: ["Sous-verres en Ardoise Naturelle (10x10cm)", "Vernis Polyuréthane Satiné", "Patins en Feutre Adhésif 2mm"],
      tools: ["Logiciel LightBurn", "Alcool Isopropylique 99%", "Brosse Nylon Souple"],
      exactParameters: {
        power: "45%",
        speed: "3200 mm/min",
        passes: "1",
        lineInterval: "0.075mm (338 DPI)",
        airAssist: "Moyen (12 PSI)",
        focusOffset: "+1.0mm Défocalisé pour blanc intense",
        lightburnMode: "Image (Jarvis / Trame)",
        frequency: "N/A"
      },
      materialPrep: "Lavez l'ardoise avec de l'eau tiède, dégraissez à l'alcool et appliquez une couche ultra-fine de vernis mat protecteur.",
      steps: [
        {
          title: "Lavage & Dégraissage de l'Ardoise",
          detail: "Brossez la poussière minérale et séchez pendant 30 minutes au four doux ou décapeur thermique."
        },
        {
          title: "Défocalisation Optique pour Contraste Maximal",
          detail: "Réglez le faisceau à +1.0mm au-dessus de la surface. Une légère défocalisation fracture la silice en blanc éclatant au lieu d'un gris terne."
        },
        {
          title: "Configuration de l'Image LightBurn",
          detail: "Inversez l'image en négatif, l'ardoise blanchissant sous le faisceau. Sélectionnez le tramage Jarvis à 338 DPI."
        },
        {
          title: "Gravure & Assemblage des Patins",
          detail: "Gravez à 3200 mm/min à 45% (diode 20W). Dépoussiérez au pinceau et collez 4 patins en feutre au dos."
        }
      ],
      proTips: [
        "Inversez toujours les photos sur l'ardoise : le laser éclaircit la roche !",
        "Une goutte d'huile minérale sur les parties noires non gravées intensifie le contraste noir/blanc."
      ],
      safety: "Portez un masque anti-poussière FFP2 lors du brossage de la silice gravée."
    },

    "acrylic-led-edge-lit": {
      title: "Lampe Veilleuse LED en Acrylique avec Gravure Inversée",
      summary: "Guide pas-à-pas pour graver et découper de l'acrylique coulé optique sans déformation ni bavures de fusion.",
      category: "Projet",
      difficulty: "Intermédiaire",
      estimatedTime: "15 min",
      targetMaterial: "Acrylique Coulé Transparent 4mm (Cast Acrylic)",
      exactParameters: {
        power: "Gravure 18% / Découpe 85%",
        speed: "Gravure 5000 mm/min / Découpe 350 mm/min",
        passes: "1",
        lineInterval: "0.065mm",
        airAssist: "Gravure : Éteinte / Découpe : Forte (25 PSI)",
        focusOffset: "Exactement en surface",
        lightburnMode: "Remplissage + Découpe",
        frequency: "N/A"
      }
    },

    "rotary-yeti-tumbler": {
      title: "Gravure Rotative 360° sur Gobelets Isothermes RVS Thermolaqués",
      summary: "Protocole complet pour calibrer l'axe rotatif sans glissement et décaper la peinture époxy jusqu'à l'acier inox miroir.",
      category: "Projet",
      difficulty: "Intermédiaire",
      estimatedTime: "20 min",
      targetMaterial: "Gobelets RVS avec Revêtement Poudre",
      exactParameters: {
        power: "75%",
        speed: "2400 mm/min",
        passes: "1",
        lineInterval: "0.06mm (423 DPI)",
        airAssist: "Moyen (10 PSI)",
        focusOffset: "Point focal sur la génératrice haute",
        lightburnMode: "Remplissage",
        frequency: "N/A"
      }
    },

    "leather-patch-hat": {
      title: "Écussons en Cuir à Tannage Végétal avec Hachurage Vectoriel",
      summary: "Concevez des écussons en cuir naturel sans odeur de brûlé et aux bords nets pour casquettes et maroquinerie.",
      category: "Projet",
      difficulty: "Débutant",
      estimatedTime: "15 min",
      targetMaterial: "Cuir Collet Tannage Végétal 2.0mm",
      exactParameters: {
        power: "22%",
        speed: "3800 mm/min",
        passes: "1",
        lineInterval: "0.085mm",
        airAssist: "Élevé (20 PSI)",
        focusOffset: "En surface",
        lightburnMode: "Remplissage Décalé",
        frequency: "N/A"
      }
    }
  }
};

/**
 * Returns a translated version of a tutorial based on the active language.
 */
export function getTranslatedTutorial(tutorial, language) {
  if (!tutorial) return null;
  if (language === "en" || !TUTORIAL_TRANSLATIONS[language]) {
    return tutorial;
  }

  const override = TUTORIAL_TRANSLATIONS[language][tutorial.id] || {};

  const translatedPrereqs = override.prerequisites || (tutorial.prerequisites ? translatePrerequisites(tutorial.prerequisites, language) : null);
  const translatedMatSel = override.materialSelection || (tutorial.materialSelection ? translateTextContent(tutorial.materialSelection, language) : null);
  const translatedDesignPrep = override.designPrep || (tutorial.designPrep ? translateTextContent(tutorial.designPrep, language) : null);
  const translatedLaserSetup = override.laserSetup || (tutorial.laserSetup ? translateTextContent(tutorial.laserSetup, language) : null);
  const translatedTestGuide = override.materialTestGuide || (tutorial.materialTestGuide ? translateTextContent(tutorial.materialTestGuide, language) : null);

  return {
    ...tutorial,
    title: override.title || translateTextContent(tutorial.title, language),
    summary: override.summary || translateTextContent(tutorial.summary, language),
    category: override.category || translateGeneralCategory(tutorial.category, language),
    difficulty: override.difficulty || translateDifficulty(tutorial.difficulty, language),
    estimatedTime: override.estimatedTime || tutorial.estimatedTime || tutorial.readTime,
    targetMaterial: override.targetMaterial || translateTextContent(tutorial.targetMaterial, language),
    materials: override.materials || tutorial.materials,
    tools: override.tools || tutorial.tools,
    materialPrep: override.materialPrep || (tutorial.materialPrep ? translateTextContent(tutorial.materialPrep, language) : null),
    exactParameters: override.exactParameters || tutorial.exactParameters,
    steps: override.steps || tutorial.steps,
    proTips: override.proTips || (tutorial.proTips ? tutorial.proTips.map(t => translateTextContent(t, language)) : null),
    troubleshooting: override.troubleshooting || tutorial.troubleshooting,
    safety: override.safety || (tutorial.safety ? translateTextContent(tutorial.safety, language) : null),
    prerequisites: translatedPrereqs,
    materialSelection: translatedMatSel,
    designPrep: translatedDesignPrep,
    laserSetup: translatedLaserSetup,
    materialTestGuide: translatedTestGuide,
  };
}

function translateDifficulty(difficulty, language) {
  if (language === "nl") {
    if (difficulty === "Beginner") return "Beginner";
    if (difficulty === "Intermediate") return "Gemiddeld";
    if (difficulty === "Advanced") return "Gevorderd";
  }
  if (language === "fr") {
    if (difficulty === "Beginner") return "Débutant";
    if (difficulty === "Intermediate") return "Intermédiaire";
    if (difficulty === "Advanced") return "Avancé";
  }
  return difficulty;
}

function translateGeneralCategory(category, language) {
  if (language === "nl") {
    if (category === "Project") return "Project";
    if (category === "Calibration") return "Kalibratie";
    if (category === "Safety") return "Veiligheid";
    if (category === "Fiber/Galvo") return "Fiber / Galvo";
    if (category === "Technique") return "Techniek";
  }
  if (language === "fr") {
    if (category === "Project") return "Projet";
    if (category === "Calibration") return "Étalonnage";
    if (category === "Safety") return "Sécurité";
    if (category === "Fiber/Galvo") return "Fibre / Galvo";
    if (category === "Technique") return "Technique";
  }
  return category;
}

function translatePrerequisites(prereqs, language) {
  if (!prereqs) return null;
  return {
    ...prereqs,
    compatibleLasers: prereqs.compatibleLasers ? translateTextContent(prereqs.compatibleLasers, language) : null,
    unsuitableLasers: prereqs.unsuitableLasers ? translateTextContent(prereqs.unsuitableLasers, language) : null,
    minimumSpecs: prereqs.minimumSpecs ? translateTextContent(prereqs.minimumSpecs, language) : null,
    safetyHazards: prereqs.safetyHazards ? translateTextContent(prereqs.safetyHazards, language) : null,
  };
}

function translateTextContent(text, language) {
  if (!text || typeof text !== "string") return text;
  if (language === "en") return text;

  let translated = text;

  if (language === "nl") {
    translated = translated
      .replace(/Diode lasers \(([^)]+)\) or CO2 lasers \(([^)]+)\)/g, "Diodelasers ($1) of CO2-lasers ($2)")
      .replace(/Diode lasers/g, "Diodelasers")
      .replace(/CO2 lasers/g, "CO2-lasers")
      .replace(/Fiber\/Galvo lasers/g, "Fiber/Galvo-lasers")
      .replace(/Typical 1064nm Fiber\/Galvo markers are generally unsuitable for predictable photographic engraving on untreated plywood, as 1064nm light absorption differs significantly from blue diode or CO2 wavelengths on organic wood cellulose\./g, "Typische 1064nm Fiber/Galvo markers zijn in het algemeen ongeschikt voor voorspelbare fotogravures op onbehandeld multiplex, omdat 1064nm lichtabsorptie sterk verschilt van blauwe diode- of CO2-golflengtes op organische houtcellulose.")
      .replace(/Typical 1064nm Fiber\/Galvo markers/g, "Typische 1064nm Fiber/Galvo markers")
      .replace(/are generally unsuitable for/g, "zijn over het algemeen ongeschikt voor")
      .replace(/Enclosed frame or dedicated laser work area, local fume extraction, air assist capability\./g, "Gesloten frame of toegewezen werkplek, lokale rookafzuiging, luchtondersteuningsmogelijkheid.")
      .replace(/Enclosed frame or dedicated laser work area/g, "Gesloten frame of toegewezen laserwerkplek")
      .replace(/local fume extraction/g, "lokale rookafzuiging")
      .replace(/air assist capability/g, "luchtondersteuning")
      .replace(/Wood pyrolysis releases PM2\.5 particulates and organic terpene vapors\./g, "Houtpyrolyse stoot PM2.5 fijnstof en organische terpeendampen uit.")
      .replace(/releases PM2\.5 particulates and organic terpene vapors/g, "stoot PM2.5 fijnstof en organische terpeendampen uit")
      .replace(/Prefer high-quality 5-ply Baltic Birch Plywood \(such as B\/BB grade\) with void-free inner cores\. Cheap 3-ply basswood or utility plywood often contains hidden interior glue voids, knots, or uneven resin fills that cause unexpected burn-through or unengraved patches\. Always inspect sheet flatness prior to loading\./g, "Kies bij voorkeur hoogwaardig 5-laags Baltisch Berkenmultiplex (zoals B/BB kwaliteit) met een holtevrije binnenkern. Goedkope 3-laags platen bevatten vaak verborgen lijmholtes, kwasten of ongelijkmatige harsvullingen die onverwachte verbranding veroorzaken. Controleer altijd de vlakheid voor het laden.")
      .replace(/Prefer high-quality/g, "Kies bij voorkeur hoogwaardig")
      .replace(/Baltic Birch Plywood/g, "Baltisch Berkenmultiplex")
      .replace(/void-free inner cores/g, "holtevrije binnenkernen")
      .replace(/Cheap 3-ply basswood or utility plywood/g, "Goedkoop 3-laags hout of universeel multiplex")
      .replace(/hidden interior glue voids/g, "verborgen interne lijmholtes")
      .replace(/unexpected burn-through/g, "onverwachte doorbranding")
      .replace(/Import photo artwork into LightBurn\. Apply mild contrast sharpening\. Select the Stucki/g, "Importeer afbeeldingen in LightBurn. Pas milde contrastverscherping toe. Selecteer de Stucki")
      .replace(/Import photo artwork into LightBurn\./g, "Importeer fotokunst in LightBurn.")
      .replace(/Apply mild contrast sharpening\./g, "Pas milde contrastverscherping toe.")
      .replace(/Select the Stucki/g, "Selecteer het Stucki-foutdiffusie-algoritme")
      .replace(/wavelength/g, "golflengte")
      .replace(/untreated plywood/g, "onbehandeld multiplex")
      .replace(/organic wood cellulose/g, "organische houtcellulose");
  } else if (language === "fr") {
    translated = translated
      .replace(/Diode lasers \(([^)]+)\) or CO2 lasers \(([^)]+)\)/g, "Lasers à diode ($1) ou lasers CO2 ($2)")
      .replace(/Diode lasers/g, "Lasers à diode")
      .replace(/CO2 lasers/g, "Lasers CO2")
      .replace(/Fiber\/Galvo lasers/g, "Lasers Fibre/Galvo")
      .replace(/Typical 1064nm Fiber\/Galvo markers are generally unsuitable for predictable photographic engraving on untreated plywood, as 1064nm light absorption differs significantly from blue diode or CO2 wavelengths on organic wood cellulose\./g, "Les marqueurs Fibre/Galvo 1064nm typiques sont généralement inadaptés à la gravure photographique prévisible sur contreplaqué non traité, car l'absorption à 1064nm diffère nettement des longueurs d'onde diode bleue ou CO2 sur la cellulose organique.")
      .replace(/Typical 1064nm Fiber\/Galvo markers/g, "Marqueurs Fibre/Galvo 1064nm typiques")
      .replace(/are generally unsuitable for/g, "sont généralement inadaptés à")
      .replace(/Enclosed frame or dedicated laser work area, local fume extraction, air assist capability\./g, "Châssis fermé ou zone laser dédiée, extraction locale des fumées, assistance d'air.")
      .replace(/Enclosed frame or dedicated laser work area/g, "Châssis fermé ou zone de travail laser dédiée")
      .replace(/local fume extraction/g, "extraction locale des fumées")
      .replace(/air assist capability/g, "assistance d'air")
      .replace(/Wood pyrolysis releases PM2\.5 particulates and organic terpene vapors\./g, "La pyrolyse du bois libère des particules PM2.5 et des vapeurs organiques de terpènes.")
      .replace(/releases PM2\.5 particulates and organic terpene vapors/g, "libère des particules PM2.5 et des vapeurs organiques de terpènes")
      .replace(/Prefer high-quality 5-ply Baltic Birch Plywood \(such as B\/BB grade\) with void-free inner cores\. Cheap 3-ply basswood or utility plywood often contains hidden interior glue voids, knots, or uneven resin fills that cause unexpected burn-through or unengraved patches\. Always inspect sheet flatness prior to loading\./g, "Privilégiez du contreplaqué de bouleau de la Baltique 5 plis haute qualité (grade B/BB) sans vide interne. Les contreplaqués 3 plis bas de gamme contiennent souvent des manques de colle ou des nœuds internes provoquant des brûlures inégales. Vérifiez toujours la planéité de la plaque avant chargement.")
      .replace(/Prefer high-quality/g, "Privilégiez du matériel haute qualité")
      .replace(/Baltic Birch Plywood/g, "Contreplaqué Bouleau de la Baltique")
      .replace(/void-free inner cores/g, "noyaux internes sans vides")
      .replace(/Cheap 3-ply basswood or utility plywood/g, "Contreplaqué 3 plis bas de gamme")
      .replace(/hidden interior glue voids/g, "vides de colle internes masqués")
      .replace(/unexpected burn-through/g, "brûlures transperçantes inattendues")
      .replace(/Import photo artwork into LightBurn\. Apply mild contrast sharpening\. Select the Stucki/g, "Importez l'image dans LightBurn. Appliquez une légère accentuation du contraste. Sélectionnez Stucki")
      .replace(/Import photo artwork into LightBurn\./g, "Importez l'illustration photo dans LightBurn.")
      .replace(/Apply mild contrast sharpening\./g, "Appliquez une légère accentuation du contraste.")
      .replace(/Select the Stucki/g, "Sélectionnez l'algorithme Stucki")
      .replace(/wavelength/g, "longueur d'onde")
      .replace(/untreated plywood/g, "contreplaqué non traité")
      .replace(/organic wood cellulose/g, "cellulose organique de bois");
  }

  return translated;
}
