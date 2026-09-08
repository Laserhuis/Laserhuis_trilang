import { createContext, useContext, useState, useEffect } from "react";

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "nl", label: "Nederlands", short: "NL", flag: "🇳🇱" },
  { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
  { code: "it", label: "Italiano", short: "IT", flag: "🇮🇹" },
  { code: "de", label: "Deutsch", short: "DE", flag: "🇩🇪" }
];

export const TRANSLATIONS = {
  en: {
    // Nav
    "nav.reviews": "Reviews",
    "nav.tutorials": "Tutorials",
    "nav.cnc": "Genmitsu CNC",
    "nav.materials": "Materials",
    "nav.gallery": "Gallery",
    "nav.videos": "Videos",
    "nav.brands": "Brands",
    "nav.sainsmart": "SainSmart",
    "nav.about": "About",
    "nav.compare": "Compare",
    "nav.favourites": "Saved",
    "nav.dithering": "Dithering",

    // Header
    "header.search_placeholder": "Search tutorials, reviews, materials…",
    "header.no_matches": "No matches for",
    "header.group_tutorials": "Tutorials",
    "header.group_reviews": "Reviews",
    "header.group_materials": "Materials",
    "header.switch_language": "Language",

    // Hero
    "hero.badge": "Diode · CO2 · Fiber / Galvo",
    "hero.title_start": "The knowledge hub for",
    "hero.title_highlight": "laser makers.",
    "hero.subtitle": "50+ real-world tutorials, honest machine reviews and a live material settings finder — plus an AI assistant that dials in power, speed and passes for any material.",
    "hero.cta_tutorials": "Browse tutorials",
    "hero.cta_materials": "Settings finder",
    "hero.stat_tutorials": "Tutorials",
    "hero.stat_reviews": "Machine reviews",
    "hero.stat_materials": "Settings profiles",

    // Laser Types
    "laser.diode.label": "Diode",
    "laser.diode.blurb": "Compact GRBL machines for wood, leather, acrylic and light cutting.",
    "laser.co2.label": "CO2",
    "laser.co2.blurb": "Glass-tube powerhouses for cutting acrylic and photo-grade engraving.",
    "laser.fiber.label": "Fiber / Galvo",
    "laser.fiber.blurb": "High-speed galvo sources for permanent metal marking and deep engraving.",
    "laser.tutorials_link": "tutorials →",

    // Home Sections
    "home.learn_eyebrow": "Learn",
    "home.learn_title": "Featured tutorials",
    "home.learn_all": "All tutorials",
    "home.tools_eyebrow": "Tools",
    "home.tools_title": "Dial in your settings",
    "home.tools_all": "Full library",
    "home.compare_eyebrow": "Compare",
    "home.compare_title": "Top-rated machines",
    "home.compare_all": "All reviews",
    "home.disclaimer": "Reference data — always test on scrap and follow your machine's safety guidance.",

    // Tutorials Page
    "tutorials.eyebrow": "Tutorial library",
    "tutorials.title": "Tutorials",
    "tutorials.subtitle": "practical laser projects across diode, CO2 and fiber workflows. Filter live and open any card for full step-by-step instructions.",
    "tutorials.search_placeholder": "Search by title, material or tag…",
    "tutorials.filter_laser": "Laser type",
    "tutorials.filter_difficulty": "Difficulty",
    "tutorials.filter_category": "Project type",
    "tutorials.filter_all": "All",
    "tutorials.reset_filters": "Reset",
    "tutorials.results_count": "result(s) found",
    "tutorials.empty_title": "No tutorials match your filters",
    "tutorials.empty_btn": "Clear filters",
    "tutorials.quick_all": "All Projects",
    "tutorials.quick_wood": "Wood & Birch",
    "tutorials.quick_acrylic": "Acrylic Cutting",
    "tutorials.quick_slate": "Slate Coasters",
    "tutorials.quick_metal": "Metal & MOPA",
    "tutorials.quick_leather": "Leather Craft",
    "tutorials.quick_rotary": "Rotary Tumblers",
    "tutorials.quick_dithering": "Photo Dithering",

    // Tutorial Card & Modal
    "tutorial.est_time": "Est. Time",
    "tutorial.material": "Target Material",
    "tutorial.walkthrough": "Walkthrough",
    "tutorial.safety_rating": "Safety Rating",
    "tutorial.steps_count": "steps",
    "tutorial.tested_params": "Tested LightBurn / Software Parameters",
    "tutorial.copy_params": "Copy Parameters",
    "tutorial.copied_toast": "Copied LightBurn parameters to clipboard!",
    "tutorial.power": "Power",
    "tutorial.speed": "Speed",
    "tutorial.passes": "Passes",
    "tutorial.line_interval": "Line Interval / DPI",
    "tutorial.air_assist": "Air Assist",
    "tutorial.focus_offset": "Focus Offset",
    "tutorial.software_mode": "Software Mode",
    "tutorial.frequency": "Frequency / Pulse",
    "tutorial.prep_protocol": "Material Preparation Protocol",
    "tutorial.equipment_needed": "Equipment & Accessories Needed",
    "tutorial.step_walkthrough": "Step-by-Step Practical Walkthrough",
    "tutorial.step_progress": "Progress",
    "tutorial.step_mark_done": "Mark Done",
    "tutorial.step_completed": "Completed",
    "tutorial.troubleshooting": "Quality Tuning & Troubleshooting Matrix",
    "tutorial.symptom": "Symptom",
    "tutorial.real_fix": "Real-world Fix",
    "tutorial.pro_tips": "Pro Secrets & Techniques",
    "tutorial.safety_protocol": "Safety & Exhaust Protocol",
    "tutorial.safety_default": "Always wear OD6+ certified laser safety eyewear for your specific wavelength and ensure 120+ CFM extraction.",

    // Difficulty Levels
    "difficulty.Beginner": "Beginner",
    "difficulty.Intermediate": "Intermediate",
    "difficulty.Advanced": "Advanced",

    // Materials Page
    "materials.eyebrow": "Material settings",
    "materials.title": "Settings library",
    "materials.subtitle": "Structured starting settings by laser type and substrate. Use the finder or ask the AI assistant, then browse the full matrix below.",
    "materials.search_placeholder": "Search materials or notes…",
    "materials.filter_all": "All",

    // Reviews Page
    "reviews.eyebrow": "Machine lab",
    "reviews.title": "Laser reviews",
    "reviews.subtitle": "Hands-on bench testing, real cutting speeds, focal optics inspection and software compatibility across top laser brands.",
    "reviews.search_placeholder": "Search reviews, brands or models…",
    "reviews.featured_badge": "Featured Review",
    "reviews.read_full": "Read full in-depth review",
    "reviews.filter_brand": "Brand",
    "reviews.filter_all": "All",

    // Review Modal
    "review.optical_power": "Optical Power",
    "review.controller": "Controller",
    "review.spot_size": "Spot Size",
    "review.min_resolution": "Min Resolution",
    "review.work_envelope": "Work Envelope",
    "review.price_class": "Price Class",
    "review.hardware_specs": "Hardware & Controller Specs",
    "review.lab_benchmarks": "Lab Tested Benchmarks & Speeds",
    "review.build_safety": "Build Quality & Safety Features",
    "review.supported_software": "Supported Software Platforms",
    "review.pros": "Lab Certified Pros",
    "review.limitations": "Real-World Limitations",

    // Compare Page
    "compare.eyebrow": "Compare machines",
    "compare.title": "Compare",
    "compare.subtitle": "Pick two engravers to see their specs side by side and decide which fits your workflow.",
    "compare.machine_a": "Machine A",
    "compare.machine_b": "Machine B",

    // Favourites Page
    "favourites.eyebrow": "Saved",
    "favourites.title": "Favourites",
    "favourites.subtitle": "Everything you've bookmarked, saved in your browser for quick access.",
    "favourites.empty_title": "No favourites yet",
    "favourites.empty_sub": "Tap the heart on any tutorial, machine or settings profile to save it here.",
    "favourites.browse_btn": "Browse tutorials",

    // Gallery Page
    "gallery.eyebrow": "Community Showcase",
    "gallery.title": "Laser Inspiration Gallery",
    "gallery.subtitle": "Browse high-definition finished projects from master makers. Discover new techniques, focal alignments, and substrate finishes.",
    "gallery.owner_login": "Owner / Admin Login",
    "gallery.admin_active": "Admin Active",
    "gallery.log_out": "Log Out",
    "gallery.upload_btn": "Upload Photos",
    "gallery.new_folder": "New Folder",

    // Settings Finder
    "finder.title": "Settings Finder",
    "finder.step_laser": "1 — Laser type",
    "finder.step_material": "2 — Material / operation",
    "finder.select_placeholder": "Select a material…",
    "finder.step_power": "3 — Machine power",
    "finder.speed": "Speed",
    "finder.power": "Power",
    "finder.passes": "Passes",
    "finder.freq_interval": "Freq / Interval",
    "finder.air_assist": "Air Assist",
    "finder.machine": "Machine",
    "finder.empty_laser": "No settings recorded for this laser type yet.",
    "finder.pick_prompt": "Pick a material to reveal recommended settings.",

    // AI Assistant
    "ai.title": "AI Laser Assistant",
    "ai.badge": "Gemini AI · Ollama-ready",
    "ai.input_placeholder": 'e.g. "Settings for 3mm dark walnut on a 20W diode?"',
    "ai.ask_btn": "Ask",
    "ai.awaiting_query": "awaiting query — describe your material and laser…",
    "ai.consulting": "consulting AI advisor",
    "ai.safety_disclaimer": "AI-generated starting point. Always run an engraved power/speed test matrix on scrap material.",

    // Videos Page
    "videos.eyebrow": "Laserhuis on YouTube",
    "videos.title": "Videos",
    "videos.subtitle": "Hands-on machine tests, tutorials and tool demos from the Laserhuis channel — laser engraving made simple.",
    "videos.subscribe": "Subscribe on YouTube",

    // Sainsmart Page
    "sainsmart.eyebrow": "Preferred Engineering Partner",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "As our preferred partner for desktop manufacturing and maker tools, SainSmart equips creators, makers, and engineering workshops with professional precision. Check out our detailed reviews, upcoming testing line-ups, and exclusive affiliate deals.",
    "sainsmart.btn_store": "Visit SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D Printer & DIY Tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclosure: Clicking these links supports Laserhuis reviews and guides at no extra cost to you.", 
    "sainsmart.nav_title": "Navigation:",
    "sainsmart.nav_flagship": "# Flagship Laser",
    "sainsmart.nav_cnc": "# Heavy-Duty CNC",
    "sainsmart.nav_gear": "# Recommended Gear",
    "sainsmart.nav_faq": "# Calibration & FAQs",
    "sainsmart.flagship_eyebrow": "Flagship Review",
    "sainsmart.flagship_title": "Our #1 Rated Desktop Laser",
    "sainsmart.editor_pick": "★ Editor's Pick", 
    "sainsmart.knowledgebase": "Knowledgebase",
    "sainsmart.faq_title": "Maker Setup & Calibration FAQs",
    "sainsmart.faq_desc": "Get the absolute most out of your SainSmart Genmitsu equipment with expert-curated answers on calibration, materials, and troubleshooting.",
    "sainsmart.partner_title": "SainSmart is Our Preferred Manufacturing Partner",
    "sainsmart.partner_desc": "Through close collaboration, we are able to benchmark top CNC, laser, and 3D printing equipment. Every review is supported by extensive real-world workshop runs to supply honest data for our fellow makers.",

    // About Page
    "about.eyebrow": "Precision Laser Crafting & Engineering",
    "about.welcome": "Welcome to",
    "about.hero_desc": "Laserhuis is the definitive digital hub for laser engraving, cutting, and industrial marking. Designed for hobbyists, makers, and production workshops, we eliminate trial-and-error material scorching with tested parameters, expert technical documentation, and smart browser software.",
    "about.mission_title": "Our Mission",
    "about.mission_p1": "We started Laserhuis with a simple goal: to make laser technology accessible, predictable, and remarkably precise. Whether you are operating a 10W desktop diode, a 50W CO2 tube cutter, or a 60W MOPA fiber galvo system, getting clean cuts and crisp engravings shouldn't mean wasting expensive raw materials on endless test grids.",
    "about.mission_p2": "Every tutorial, review, and material parameter on Laserhuis is rigorously verified by master artisans and material scientists. We break down focal optics, air assist dynamics, gas extraction, and wavelength absorption so you achieve Grade-A output every time.",
    "about.mission_suite": "Active hardware test suite covering Diode, CO2, and Fiber/Galvo sources.",
    "about.stat_tutorials": "Technical Tutorials",
    "about.stat_tutorials_sub": "Grade A++++ Guides",
    "about.stat_reviews": "In-Depth Reviews",
    "about.stat_reviews_sub": "Hands-on Hardware Tests",
    "about.stat_makers": "Makers Helped",
    "about.stat_makers_sub": "Global Community",
    "about.stat_dither": "Dither Algorithms",
    "about.stat_dither_sub": "Photo-to-Laser Studio",
    "about.what_you_find": "What You'll Find On Laserhuis",
    "about.pillar1_title": "Step-by-Step Tutorials",
    "about.pillar1_desc": "Over 100+ deep technical guides spanning Diode, CO2, and Fiber/Galvo workflows with precise physics, chemistry, and power settings.",
    "about.pillar2_title": "Unbiased Machine Reviews",
    "about.pillar2_desc": "Hands-on benchmark testing across leading diode engravers, CO2 glass-tube cutters, and industrial fiber galvo workstations.",
    "about.pillar3_title": "Dynamic Settings Library",
    "about.pillar3_desc": "A comprehensive material parameter database scaled automatically to your specific laser source wattage.",
    "about.pillar4_title": "Browser-Based Tools",
    "about.pillar4_desc": "Instant web utilities like our 20+ algorithm Dithering Studio, rotary step calculators, and jig layout tools.",
    "about.fb_eyebrow": "OFFICIAL LASERHUIS COMMUNITY",
    "about.fb_title_pre": "Join the",
    "about.fb_title_highlight": "Laserhuis",
    "about.fb_title_post": "Facebook Community!",
    "about.fb_desc1": "Connect with over ",
    "about.fb_desc_strong": "15,000+ laser engravers, makers, and workshop owners",
    "about.fb_desc2": ". Get daily setting cheat sheets, free LightBurn vector file drops, and instant peer troubleshooting support for all diode, CO2, and galvo systems.",
    "about.fb_bullet1": "<strong>Daily Setting Cheat Sheets</strong> dropped weekly",
    "about.fb_bullet2": "<strong>Free SVG / LightBurn Files</strong> for members",
    "about.fb_bullet3": "<strong>Project Showcases</strong> & feedback",
    "about.fb_bullet4": "<strong>Instant Q&A</strong> with master artisans",
    "about.fb_cta": "Follow @laserhuis on Facebook",
    "about.fb_cta_sub": "15K+ Followers • Daily Updates",

    // Footer
    "footer.desc": "The ultimate knowledge & asset hub for laser makers — tutorials, machine reviews, material settings database and community gallery.",
    "footer.newsletter_title": "Newsletter",
    "footer.newsletter_sub": "Get new tutorials, laser settings drops, and community updates directly to your inbox.",
    "footer.newsletter_placeholder": "you@workshop.com",
    "footer.newsletter_join": "Join",
    "footer.newsletter_invalid": "Enter a valid email address.",
    "footer.newsletter_success": "Welcome to the list! Check your inbox.",
    "footer.resources_title": "Resources & Guides",
    "footer.res_dithering": "Dithering Guide & Matrix Studio",
    "footer.res_pricing": "Laser Job Pricing & Cost Calculator",
    "footer.res_rotary": "Kerf Joint & Rotary Setup Calculator",
    "footer.res_lightburn": "LightBurn Cheat Sheet",
    "footer.res_safety": "Laser Safety & Toxic Material Rules",
    "footer.res_facebook": "Facebook Community",
    "footer.contact_support": "Contact Support",
    "footer.copyright": "© 2026 Laserhuis.com — All rights reserved.",
    "footer.safety_banner": "⚡ High-Voltage Laser Crafting & Engineering • Always test settings on scrap & adhere to laser safety guidance.",
  },

  nl: {
    // Nav
    "nav.reviews": "Reviews",
    "nav.tutorials": "Handleidingen",
    "nav.materials": "Materialen",
    "nav.gallery": "Galerij",
    "nav.videos": "Video's",
    "nav.brands": "Merken",
    "nav.sainsmart": "SainSmart",
    "nav.about": "Over ons",
    "nav.compare": "Vergelijken",
    "nav.favourites": "Favorieten",
    "nav.dithering": "Dithering",

    // Header
    "header.search_placeholder": "Zoek handleidingen, reviews, materialen…",
    "header.no_matches": "Geen resultaten voor",
    "header.group_tutorials": "Handleidingen",
    "header.group_reviews": "Reviews",
    "header.group_materials": "Materialen",
    "header.switch_language": "Taal",

    // Hero
    "hero.badge": "Diode · CO2 · Fiber / Galvo",
    "hero.title_start": "Het kennisplatform voor",
    "hero.title_highlight": "lasermakers.",
    "hero.subtitle": "50+ praktische handleidingen, eerlijke machine-reviews en een live materiaalinstellingen-database — plus een AI-assistent voor vermogen, snelheid en passes.",
    "hero.cta_tutorials": "Bekijk handleidingen",
    "hero.cta_materials": "Instellingen zoeker",
    "hero.stat_tutorials": "Handleidingen",
    "hero.stat_reviews": "Machine-reviews",
    "hero.stat_materials": "Materiaalprofielen",

    // Laser Types
    "laser.diode.label": "Diode",
    "laser.diode.blurb": "Compacte GRBL-machines voor hout, leer, acrylaat en lichte snijdtoepassingen.",
    "laser.co2.label": "CO2",
    "laser.co2.blurb": "Glazen buis krachtpatsers voor strak acrylaat snijden en fotogravures.",
    "laser.fiber.label": "Fiber / Galvo",
    "laser.fiber.blurb": "Ultrasnelle galvo-bronnen voor permanente metaalmarkering en diepgraveren.",
    "laser.tutorials_link": "handleidingen →",

    // Home Sections
    "home.learn_eyebrow": "Leren",
    "home.learn_title": "Aanbevolen handleidingen",
    "home.learn_all": "Alle handleidingen",
    "home.tools_eyebrow": "Gereedschappen",
    "home.tools_title": "Stel je parameters af",
    "home.tools_all": "Volledige bibliotheek",
    "home.compare_eyebrow": "Vergelijken",
    "home.compare_title": "Best beoordeelde machines",
    "home.compare_all": "Alle reviews",
    "home.disclaimer": "Referentiegegevens — test altijd eerst op restmateriaal en volg de veiligheidsinstructies van je machine.",

    // Tutorials Page
    "tutorials.eyebrow": "Handleidingen bibliotheek",
    "tutorials.title": "Handleidingen",
    "tutorials.subtitle": "praktische laserprojecten voor diode-, CO2- en fiber-workflows. Filter live en open een kaart voor complete stap-voor-stap instructies.",
    "tutorials.search_placeholder": "Zoek op titel, materiaal of trefwoord…",
    "tutorials.filter_laser": "Lasertype",
    "tutorials.filter_difficulty": "Moeilijkheidsgraad",
    "tutorials.filter_category": "Projecttype",
    "tutorials.filter_all": "Alles",
    "tutorials.reset_filters": "Wissen",
    "tutorials.results_count": "resultaten gevonden",
    "tutorials.empty_title": "Geen handleidingen gevonden voor deze filters",
    "tutorials.empty_btn": "Filters wissen",
    "tutorials.quick_all": "Alle Projecten",
    "tutorials.quick_wood": "Hout & Berkenmultiplex",
    "tutorials.quick_acrylic": "Acrylaat Snijden",
    "tutorials.quick_slate": "Leisteen Onderzetters",
    "tutorials.quick_metal": "Metaal & MOPA",
    "tutorials.quick_leather": "Lederbewerking",
    "tutorials.quick_rotary": "Rotary Tuimelaars",
    "tutorials.quick_dithering": "Foto Dithering",

    // Tutorial Card & Modal
    "tutorial.est_time": "Geschatte Tijd",
    "tutorial.material": "Doelmateriaal",
    "tutorial.walkthrough": "Stappenplan",
    "tutorial.safety_rating": "Veiligheid",
    "tutorial.steps_count": "stappen",
    "tutorial.tested_params": "Geteste LightBurn / Software Parameters",
    "tutorial.copy_params": "Kopieer Parameters",
    "tutorial.copied_toast": "LightBurn parameters gekopieerd naar klembord!",
    "tutorial.power": "Vermogen",
    "tutorial.speed": "Snelheid",
    "tutorial.passes": "Passes",
    "tutorial.line_interval": "Lijninterval / DPI",
    "tutorial.air_assist": "Luchtondersteuning",
    "tutorial.focus_offset": "Focus Offset",
    "tutorial.software_mode": "Software Modus",
    "tutorial.frequency": "Frequentie / Puls",
    "tutorial.prep_protocol": "Materiaalvoorbereiding Protocol",
    "tutorial.equipment_needed": "Benodigde Apparatuur & Accessoires",
    "tutorial.step_walkthrough": "Praktisch Stappenplan",
    "tutorial.step_progress": "Voortgang",
    "tutorial.step_mark_done": "Stap Voltooid",
    "tutorial.step_completed": "Voltooid",
    "tutorial.troubleshooting": "Kwaliteitsafstemming & Probleemoplossing",
    "tutorial.symptom": "Symptoom",
    "tutorial.real_fix": "Praktische Oplossing",
    "tutorial.pro_tips": "Professionele Geheimen & Technieken",
    "tutorial.safety_protocol": "Veiligheids- & Afzuigprotocol",
    "tutorial.safety_default": "Draag altijd een OD6+ gecertificeerde laserveiligheidsbril voor je golflengte en zorg voor minimaal 120 CFM rookafzuiging.",

    // Difficulty Levels
    "difficulty.Beginner": "Beginner",
    "difficulty.Intermediate": "Gemiddeld",
    "difficulty.Advanced": "Gevorderd",

    // Materials Page
    "materials.eyebrow": "Materiaalinstellingen",
    "materials.title": "Instellingen bibliotheek",
    "materials.subtitle": "Gestructureerde startinstellingen per lasertype en substraat. Gebruik de zoeker of raadpleeg de AI-assistent, en verken het overzicht hieronder.",
    "materials.search_placeholder": "Zoek materialen of opmerkingen…",
    "materials.filter_all": "Alles",

    // Reviews Page
    "reviews.eyebrow": "Machine laboratorium",
    "reviews.title": "Laser reviews",
    "reviews.subtitle": "Grondige praktijktests, werkelijke snijsnelheden, optische focuskwaliteit en software-compatibiliteit van topmerken.",
    "reviews.search_placeholder": "Zoek reviews, merken of modellen…",
    "reviews.featured_badge": "Uitgelichte Review",
    "reviews.read_full": "Lees complete review",
    "reviews.filter_brand": "Merk",
    "reviews.filter_all": "Alles",

    // Review Modal
    "review.optical_power": "Optisch Vermogen",
    "review.controller": "Controller",
    "review.spot_size": "Laserpunt (Spot)",
    "review.min_resolution": "Min. Resolutie",
    "review.work_envelope": "Werkbereik",
    "review.price_class": "Prijsklasse",
    "review.hardware_specs": "Hardware & Controller Specificaties",
    "review.lab_benchmarks": "In het Lab Geteste Snelheden & Benchmarks",
    "review.build_safety": "Bouwkwaliteit & Veiligheidskenmerken",
    "review.supported_software": "Ondersteunde Software",
    "review.pros": "Gecertificeerde Pluspunten",
    "review.limitations": "Aandachtspunten & Beperkingen",

    // Compare Page
    "compare.eyebrow": "Vergelijk machines",
    "compare.title": "Vergelijken",
    "compare.subtitle": "Kies twee lasermachines om specificaties zij aan zij te vergelijken en ontdek wat bij jouw werkplaats past.",
    "compare.machine_a": "Machine A",
    "compare.machine_b": "Machine B",

    // Favourites Page
    "favourites.eyebrow": "Opgeslagen",
    "favourites.title": "Favorieten",
    "favourites.subtitle": "Al je opgeslagen items, lokaal bewaard in je browser voor snelle toegang.",
    "favourites.empty_title": "Nog geen favorieten",
    "favourites.empty_sub": "Klik op het hartje bij een handleiding, machine of materiaalprofiel om deze hier te bewaren.",
    "favourites.browse_btn": "Bekijk handleidingen",

    // Gallery Page
    "gallery.eyebrow": "Community Showcase",
    "gallery.title": "Laser Inspiratie Galerij",
    "gallery.subtitle": "Bekijk voltooide projecten van ervaren makers in hoge resolutie. Ontdek nieuwe technieken, focusuitlijning en afwerkingen.",
    "gallery.owner_login": "Eigenaar / Beheerder Login",
    "gallery.admin_active": "Beheerder Actief",
    "gallery.log_out": "Uitloggen",
    "gallery.upload_btn": "Foto's Uploaden",
    "gallery.new_folder": "Nieuwe Map",

    // Settings Finder
    "finder.title": "Instellingen Zoeker",
    "finder.step_laser": "1 — Lasertype",
    "finder.step_material": "2 — Materiaal / bewerking",
    "finder.select_placeholder": "Selecteer een materiaal…",
    "finder.step_power": "3 — Laservermogen",
    "finder.speed": "Snelheid",
    "finder.power": "Vermogen",
    "finder.passes": "Passes",
    "finder.freq_interval": "Freq / Interval",
    "finder.air_assist": "Air Assist",
    "finder.machine": "Machine",
    "finder.empty_laser": "Nog geen instellingen geregistreerd voor dit lasertype.",
    "finder.pick_prompt": "Kies een materiaal om aanbevolen instellingen te bekijken.",

    // AI Assistant
    "ai.title": "AI Laser Assistent",
    "ai.badge": "Gemini AI · Ollama-ready",
    "ai.input_placeholder": 'bijv. "Instellingen voor 3mm walnoot op een 20W diode?"',
    "ai.ask_btn": "Vraag",
    "ai.awaiting_query": "wacht op vraag — beschrijf je materiaal en laser…",
    "ai.consulting": "AI-adviseur raadplegen",
    "ai.safety_disclaimer": "Door AI gegenereerd startpunt. Voer altijd eerst een testmatrix uit op restmateriaal.",

    // Videos Page
    "videos.eyebrow": "Laserhuis op YouTube",
    "videos.title": "Video's",
    "videos.subtitle": "Praktijktests van machines, tutorials en software-demo's van het Laserhuis YouTube-kanaal — lasergraveren eenvoudig gemaakt.",
    "videos.subscribe": "Abonneer op YouTube",

    // Sainsmart Page
    "sainsmart.eyebrow": "Voorkeurspartner in Engineering",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "Als onze voorkeurspartner voor desktop fabricage en makersgereedschap, voorziet SainSmart makers en werkplaatsen van professionele precisie. Bekijk onze gedetailleerde reviews, aankomende testopstellingen en exclusieve partnerdeals.",
    "sainsmart.btn_store": "Bezoek SainSmart Store",
    "sainsmart.btn_cnc": "CNC, 3D-printers & DIY-tools ↗",
    "sainsmart.disclosure": "*Affiliate Disclaimer: Het klikken op deze links ondersteunt Laserhuis reviews en gidsen zonder extra kosten voor jou.", 
    "sainsmart.nav_title": "Navigatie:",
    "sainsmart.nav_flagship": "# Vlaggenschip Laser",
    "sainsmart.nav_cnc": "# Heavy-Duty CNC",
    "sainsmart.nav_gear": "# Aanbevolen Uitrusting",
    "sainsmart.nav_faq": "# Kalibratie & FAQs",
    "sainsmart.flagship_eyebrow": "Vlaggenschip Review",
    "sainsmart.flagship_title": "Onze #1 Beoordeelde Desktop Laser",
    "sainsmart.editor_pick": "★ Keuze van de Redactie", 
    "sainsmart.knowledgebase": "Kennisbank",
    "sainsmart.faq_title": "Maker Setup & Kalibratie FAQs",
    "sainsmart.faq_desc": "Haal het maximale uit uw SainSmart Genmitsu apparatuur met door experts samengestelde antwoorden over kalibratie, materialen en probleemoplossing.",
    "sainsmart.partner_title": "SainSmart is Onze Voorkeurspartner voor Productie",
    "sainsmart.partner_desc": "Door nauwe samenwerking kunnen we de beste CNC-, laser- en 3D-printapparatuur benchmarken. Elke review wordt ondersteund door uitgebreide praktijktests om eerlijke data te leveren voor onze mede-makers.",

    // About Page
    "about.eyebrow": "Precisie Laservakmanschap & Techniek",
    "about.welcome": "Welkom bij",
    "about.hero_desc": "Laserhuis is hét digitale platform voor lasergraveren, -snijden en industriële markering. Ontworpen voor hobbyisten, makers en productiewerkplaatsen. We elimineren trial-and-error materiaalverbranding met geteste parameters, deskundige technische documentatie en slimme browser-software.",
    "about.mission_title": "Onze Missie",
    "about.mission_p1": "We zijn Laserhuis gestart met een eenvoudig doel: lasertechnologie toegankelijk, voorspelbaar en opmerkelijk nauwkeurig maken. Of je nu een 10W desktop diode, een 50W CO2-buissnijder of een 60W MOPA fiber galvo-systeem bedient, strakke sneden en scherpe gravures zouden niet moeten betekenen dat je dure ruwe materialen verspilt aan eindeloze testroosters.",
    "about.mission_p2": "Elke handleiding, review en materiaalparameter op Laserhuis wordt streng geverifieerd door meestervakmensen en materiaalwetenschappers. We analyseren focusoptiek, luchtondersteuningsdynamiek, gasafzuiging en golflengte-absorptie zodat je elke keer Grade-A resultaten behaalt.",
    "about.mission_suite": "Actieve hardware-testsuite voor Diode-, CO2- en Fiber/Galvo-bronnen.",
    "about.stat_tutorials": "Technische Handleidingen",
    "about.stat_tutorials_sub": "Klasse A++++ Gidsen",
    "about.stat_reviews": "Diepgaande Reviews",
    "about.stat_reviews_sub": "Praktijk Hardware Tests",
    "about.stat_makers": "Geholpen Makers",
    "about.stat_makers_sub": "Wereldwijde Community",
    "about.stat_dither": "Dithering Algoritmes",
    "about.stat_dither_sub": "Foto-naar-Laser Studio",
    "about.what_you_find": "Wat je vindt op Laserhuis",
    "about.pillar1_title": "Stapsgewijze Handleidingen",
    "about.pillar1_desc": "Meer dan 100 diepgaande technische gidsen voor Diode, CO2 en Fiber/Galvo workflows met nauwkeurige fysica, chemie en vermogensinstellingen.",
    "about.pillar2_title": "Onafhankelijke Machine Reviews",
    "about.pillar2_desc": "Praktische benchmarktests van toonaangevende diode-graveerders, CO2 glazen-buis snijders en industriële fiber galvo-werkstations.",
    "about.pillar3_title": "Dynamische Instellingen Bibliotheek",
    "about.pillar3_desc": "Een uitgebreide materiaalparameterdatabase die automatisch schaalt naar jouw specifieke laserbronvermogen.",
    "about.pillar4_title": "Browser-Gebaseerde Tools",
    "about.pillar4_desc": "Directe webhulpmiddelen zoals onze Dithering Studio met 20+ algoritmes, roterende stapcalculators en mal-layout tools.",
    "about.fb_eyebrow": "OFFICIËLE LASERHUIS COMMUNITY",
    "about.fb_title_pre": "Word lid van de",
    "about.fb_title_highlight": "Laserhuis",
    "about.fb_title_post": "Facebook Community!",
    "about.fb_desc1": "Maak contact met meer dan ",
    "about.fb_desc_strong": "15.000+ lasergraveurs, makers en werkplaatseigenaren",
    "about.fb_desc2": ". Krijg wekelijkse spiekbriefjes met instellingen, gratis LightBurn vectorbestanden en directe peer-to-peer probleemoplossing voor alle diode, CO2 en galvo-systemen.",
    "about.fb_bullet1": "<strong>Dagelijkse Instellingen Spiekbriefjes</strong> wekelijks gedeeld",
    "about.fb_bullet2": "<strong>Gratis SVG / LightBurn Bestanden</strong> voor leden",
    "about.fb_bullet3": "<strong>Project Showcases</strong> & feedback",
    "about.fb_bullet4": "<strong>Directe Q&A</strong> met meestervakmensen",
    "about.fb_cta": "Volg @laserhuis op Facebook",
    "about.fb_cta_sub": "15K+ Volgers • Dagelijkse Updates",

    // Footer
    "footer.desc": "Het ultieme kennis- en ontmoetingspunt voor lasermakers — handleidingen, machine-reviews, database met materiaalinstellingen en galerij.",
    "footer.newsletter_title": "Nieuwsbrief",
    "footer.newsletter_sub": "Ontvang nieuwe handleidingen, laserinstellingen en community-updates direct in je mailbox.",
    "footer.newsletter_placeholder": "jouw@werkplaats.nl",
    "footer.newsletter_join": "Aanmelden",
    "footer.newsletter_invalid": "Voer een geldig e-mailadres in.",
    "footer.newsletter_success": "Welkom bij de lijst! Controleer je inbox.",
    "footer.resources_title": "Gidsen & Hulpmiddelen",
    "footer.res_dithering": "Dithering Gids & Matrix Studio",
    "footer.res_pricing": "Kostprijs & Uurtarief Calculator",
    "footer.res_rotary": "Kerf & Rotary Setup Calculator",
    "footer.res_lightburn": "LightBurn Spiekbrief & Sneltoetsen",
    "footer.res_safety": "Laserveiligheid & Giftige Materialen",
    "footer.res_facebook": "Facebook Community",
    "footer.contact_support": "Contacteer Ondersteuning",
    "footer.copyright": "© 2026 Laserhuis.com — Alle rechten voorbehouden.",
    "footer.safety_banner": "⚡ Hoogwaardige Lasertechniek • Test altijd op reststukken & hanteer strikte veiligheidsmaatregelen.",
  },


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
  },
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
  },
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
  },
  fr: {
    // Nav
    "nav.reviews": "Avis",
    "nav.tutorials": "Tutoriels",
    "nav.materials": "Matériaux",
    "nav.gallery": "Galerie",
    "nav.videos": "Vidéos",
    "nav.brands": "Marques",
    "nav.sainsmart": "SainSmart",
    "nav.about": "À propos",
    "nav.compare": "Comparer",
    "nav.favourites": "Favoris",
    "nav.dithering": "Tramage",

    // Header
    "header.search_placeholder": "Rechercher tutoriels, avis, matériaux…",
    "header.no_matches": "Aucun résultat pour",
    "header.group_tutorials": "Tutoriels",
    "header.group_reviews": "Avis",
    "header.group_materials": "Matériaux",
    "header.switch_language": "Langue",

    // Hero
    "hero.badge": "Diode · CO2 · Fibre / Galvo",
    "hero.title_start": "La référence pour les",
    "hero.title_highlight": "créateurs laser.",
    "hero.subtitle": "50+ tutoriels pratiques, avis impartiaux sur les machines et base de réglages matériaux en temps réel — plus un assistant IA pour puissance, vitesse et passes.",
    "hero.cta_tutorials": "Explorer les tutoriels",
    "hero.cta_materials": "Trouver des réglages",
    "hero.stat_tutorials": "Tutoriels",
    "hero.stat_reviews": "Avis machines",
    "hero.stat_materials": "Profils de réglages",

    // Laser Types
    "laser.diode.label": "Diode",
    "laser.diode.blurb": "Systèmes GRBL compacts pour bois, cuir, acrylique et découpes fines.",
    "laser.co2.label": "CO2",
    "laser.co2.blurb": "Tubes verre haute performance pour la découpe d'acrylique et gravures photos.",
    "laser.fiber.label": "Fibre / Galvo",
    "laser.fiber.blurb": "Sources galvo ultra-rapides pour marquage métallique permanent et gravure profonde.",
    "laser.tutorials_link": "tutoriels →",

    // Home Sections
    "home.learn_eyebrow": "Apprendre",
    "home.learn_title": "Tutoriels en vedette",
    "home.learn_all": "Tous les tutoriels",
    "home.tools_eyebrow": "Outils",
    "home.tools_title": "Ajustez vos paramètres",
    "home.tools_all": "Bibliothèque complète",
    "home.compare_eyebrow": "Comparer",
    "home.compare_title": "Machines les mieux notées",
    "home.compare_all": "Tous les avis",
    "home.disclaimer": "Données indicatives — effectuez toujours un essai préalable et respectez les règles de sécurité.",

    // Tutorials Page
    "tutorials.eyebrow": "Bibliothèque de tutoriels",
    "tutorials.title": "Tutoriels",
    "tutorials.subtitle": "projets laser concrets pour diode, CO2 et fibre. Filtrez en direct et ouvrez une fiche pour le guide pas-à-pas complet.",
    "tutorials.search_placeholder": "Rechercher par titre, matériau ou mot-clé…",
    "tutorials.filter_laser": "Type de laser",
    "tutorials.filter_difficulty": "Difficulté",
    "tutorials.filter_category": "Type de projet",
    "tutorials.filter_all": "Tous",
    "tutorials.reset_filters": "Réinitialiser",
    "tutorials.results_count": "résultat(s) trouvé(s)",
    "tutorials.empty_title": "Aucun tutoriel ne correspond à vos filtres",
    "tutorials.empty_btn": "Effacer les filtres",
    "tutorials.quick_all": "Tous les Projets",
    "tutorials.quick_wood": "Bois & Bouleau",
    "tutorials.quick_acrylic": "Découpe Acrylique",
    "tutorials.quick_slate": "Sous-verres Ardoise",
    "tutorials.quick_metal": "Métal & MOPA",
    "tutorials.quick_leather": "Travail du Cuir",
    "tutorials.quick_rotary": "Gobelets Rotatifs",
    "tutorials.quick_dithering": "Tramage Photo",

    // Tutorial Card & Modal
    "tutorial.est_time": "Durée Estimée",
    "tutorial.material": "Matériau Cible",
    "tutorial.walkthrough": "Guide Pas-à-Pas",
    "tutorial.safety_rating": "Sécurité",
    "tutorial.steps_count": "étapes",
    "tutorial.tested_params": "Paramètres Testés LightBurn / Logiciel",
    "tutorial.copy_params": "Copier les Paramètres",
    "tutorial.copied_toast": "Paramètres LightBurn copiés dans le presse-papier !",
    "tutorial.power": "Puissance",
    "tutorial.speed": "Vitesse",
    "tutorial.passes": "Passes",
    "tutorial.line_interval": "Intervalle Ligne / DPI",
    "tutorial.air_assist": "Assistance d'Air",
    "tutorial.focus_offset": "Décalage Focal",
    "tutorial.software_mode": "Mode Logiciel",
    "tutorial.frequency": "Fréquence / Impulsion",
    "tutorial.prep_protocol": "Protocole de Préparation du Matériau",
    "tutorial.equipment_needed": "Équipements & Accessoires Requis",
    "tutorial.step_walkthrough": "Guide Pratique Étape par Étape",
    "tutorial.step_progress": "Progression",
    "tutorial.step_mark_done": "Marquer Terminé",
    "tutorial.step_completed": "Terminé",
    "tutorial.troubleshooting": "Matrice d'Ajustement & Résolution des Problèmes",
    "tutorial.symptom": "Symptôme",
    "tutorial.real_fix": "Solution Pratique",
    "tutorial.pro_tips": "Secrets & Astuces de Pro",
    "tutorial.safety_protocol": "Protocole de Sécurité & Extraction",
    "tutorial.safety_default": "Portez impérativement des lunettes de protection certifiées OD6+ adaptées à votre longueur d'onde et prévoyez une extraction minimale de 120 CFM.",

    // Difficulty Levels
    "difficulty.Beginner": "Débutant",
    "difficulty.Intermediate": "Intermédiaire",
    "difficulty.Advanced": "Avancé",

    // Materials Page
    "materials.eyebrow": "Paramètres matériaux",
    "materials.title": "Base de réglages",
    "materials.subtitle": "Paramètres de départ par type de laser et support. Utilisez la recherche ou l'assistant IA, puis consultez la matrice ci-dessous.",
    "materials.search_placeholder": "Rechercher matériaux ou notes…",
    "materials.filter_all": "Tous",

    // Reviews Page
    "reviews.eyebrow": "Laboratoire machines",
    "reviews.title": "Avis machines laser",
    "reviews.subtitle": "Tests d'atelier rigoureux, vitesses réelles de coupe, examen de l'optique focale et compatibilité logicielle.",
    "reviews.search_placeholder": "Rechercher avis, marques ou modèles…",
    "reviews.featured_badge": "Avis à la Une",
    "reviews.read_full": "Lire l'avis complet",
    "reviews.filter_brand": "Marque",
    "reviews.filter_all": "Toutes",

    // Review Modal
    "review.optical_power": "Puissance Optique",
    "review.controller": "Contrôleur",
    "review.spot_size": "Taille du Faisceau",
    "review.min_resolution": "Résolution Min.",
    "review.work_envelope": "Surface Utile",
    "review.price_class": "Gamme de Prix",
    "review.hardware_specs": "Spécifications Matérielles & Contrôleur",
    "review.lab_benchmarks": "Benchmarks & Vitesses Testés en Laboratoire",
    "review.build_safety": "Qualité de Fabrication & Sécurité",
    "review.supported_software": "Logiciels Compatibles",
    "review.pros": "Points Forts Certifiés",
    "review.limitations": "Limites & Points d'Attention",

    // Compare Page
    "compare.eyebrow": "Comparer les machines",
    "compare.title": "Comparatif",
    "compare.subtitle": "Sélectionnez deux graveurs laser pour comparer leurs fiches techniques et choisir l'outil adapté à votre atelier.",
    "compare.machine_a": "Machine A",
    "compare.machine_b": "Machine B",

    // Favourites Page
    "favourites.eyebrow": "Enregistrés",
    "favourites.title": "Favoris",
    "favourites.subtitle": "Tous vos favoris conservés localement dans votre navigateur pour un accès instantané.",
    "favourites.empty_title": "Aucun favori pour le moment",
    "favourites.empty_sub": "Cliquez sur le cœur d'un tutoriel, d'une machine ou d'un matériau pour l'enregistrer ici.",
    "favourites.browse_btn": "Explorer les tutoriels",

    // Gallery Page
    "gallery.eyebrow": "Vitrine Communautaire",
    "gallery.title": "Galerie d'Inspiration Laser",
    "gallery.subtitle": "Découvrez des projets finis en haute résolution créés par des artisans d'exception. Explorez de nouvelles finitions et techniques.",
    "gallery.owner_login": "Connexion Administrateur",
    "gallery.admin_active": "Admin Actif",
    "gallery.log_out": "Déconnexion",
    "gallery.upload_btn": "Téléverser des Photos",
    "gallery.new_folder": "Nouveau Dossier",

    // Settings Finder
    "finder.title": "Sélecteur de Paramètres",
    "finder.step_laser": "1 — Type de laser",
    "finder.step_material": "2 — Matériau / opération",
    "finder.select_placeholder": "Sélectionnez un matériau…",
    "finder.step_power": "3 — Puissance machine",
    "finder.speed": "Vitesse",
    "finder.power": "Puissance",
    "finder.passes": "Passes",
    "finder.freq_interval": "Fréq / Intervalle",
    "finder.air_assist": "Air Assist",
    "finder.machine": "Machine",
    "finder.empty_laser": "Aucun paramètre enregistré pour ce type de laser.",
    "finder.pick_prompt": "Choisissez un matériau pour afficher les réglages recommandés.",

    // AI Assistant
    "ai.title": "Assistant Laser IA",
    "ai.badge": "Gemini AI · Compatible Ollama",
    "ai.input_placeholder": 'ex: "Paramètres pour noyer 3mm sur diode 20W ?"',
    "ai.ask_btn": "Demander",
    "ai.awaiting_query": "en attente de saisie — décrivez votre matériau et machine…",
    "ai.consulting": "consultation du conseiller IA",
    "ai.safety_disclaimer": "Paramètres générés par IA. Effectuez toujours une grille de test sur vos chutes.",

    // Videos Page
    "videos.eyebrow": "Laserhuis sur YouTube",
    "videos.title": "Vidéos",
    "videos.subtitle": "Tests machines en atelier, tutoriels pratiques et démonstrations du canal Laserhuis — la gravure laser en toute simplicité.",
    "videos.subscribe": "S'abonner sur YouTube",

    // Sainsmart Page
    "sainsmart.eyebrow": "Partenaire d'Ingénierie Préféré",
    "sainsmart.title_hub": "Hub",
    "sainsmart.hero_desc": "En tant que partenaire privilégié pour la fabrication de bureau et les outils de création, SainSmart équipe les créateurs et les ateliers d'ingénierie avec une précision professionnelle. Découvrez nos tests détaillés, nos prochaines séries d'évaluations et nos offres d'affiliation exclusives.",
    "sainsmart.btn_store": "Visiter la boutique SainSmart",
    "sainsmart.btn_cnc": "CNC, Imprimantes 3D & Outils DIY ↗",
    "sainsmart.disclosure": "*Divulgation d'affiliation : Cliquer sur ces liens soutient les avis et guides de Laserhuis sans frais supplémentaires pour vous.", 
    "sainsmart.nav_title": "Navigation :",
    "sainsmart.nav_flagship": "# Laser Phare",
    "sainsmart.nav_cnc": "# CNC Robuste",
    "sainsmart.nav_gear": "# Équipement Recommandé",
    "sainsmart.nav_faq": "# Étalonnage & FAQ",
    "sainsmart.flagship_eyebrow": "Test Phare",
    "sainsmart.flagship_title": "Notre Laser de Bureau N°1",
    "sainsmart.editor_pick": "★ Choix de la Rédaction", 
    "sainsmart.knowledgebase": "Base de Connaissances",
    "sainsmart.faq_title": "FAQ sur la Configuration & l'Étalonnage pour les Créateurs",
    "sainsmart.faq_desc": "Tirez le meilleur parti de votre équipement SainSmart Genmitsu grâce à des réponses d'experts sur l'étalonnage, les matériaux et le dépannage.",
    "sainsmart.partner_title": "SainSmart est Notre Partenaire de Fabrication Préféré",
    "sainsmart.partner_desc": "Grâce à une étroite collaboration, nous pouvons évaluer les meilleurs équipements CNC, laser et d'impression 3D. Chaque test est étayé par des essais intensifs en atelier réel afin de fournir des données honnêtes à nos collègues créateurs.",

    // About Page
    "about.eyebrow": "Artisanat Laser & Ingénierie de Haute Précision",
    "about.welcome": "Bienvenue sur",
    "about.hero_desc": "Laserhuis est la plateforme numérique de référence pour la gravure, la découpe et le marquage industriel au laser. Conçu pour les amateurs, les créateurs et les ateliers de production, nous éliminons les essais et erreurs grâce à des paramètres testés, une documentation technique experte et des logiciels en ligne intelligents.",
    "about.mission_title": "Notre Mission",
    "about.mission_p1": "Nous avons créé Laserhuis avec un objectif simple : rendre la technologie laser accessible, prévisible et remarquablement précise. Que vous utilisiez une diode de bureau de 10W, un tube CO2 de 50W ou un système galvo fibre MOPA de 60W, obtenir des découpes nettes et des gravures précises ne devrait pas signifier gaspiller des matériaux coûteux dans des grilles de test interminables.",
    "about.mission_p2": "Chaque tutoriel, test et paramètre matériel sur Laserhuis est rigoureusement vérifié par des maîtres artisans et des scientifiques des matériaux. Nous décomposons l'optique focale, la dynamique de l'assistance à air, l'extraction des gaz et l'absorption des longueurs d'onde pour que vous obteniez un résultat de Classe A à chaque fois.",
    "about.mission_suite": "Banc d'essai matériel actif couvrant les sources Diode, CO2 et Fibre/Galvo.",
    "about.stat_tutorials": "Tutoriels Techniques",
    "about.stat_tutorials_sub": "Guides Qualité Supérieure",
    "about.stat_reviews": "Tests Approfondis",
    "about.stat_reviews_sub": "Tests Matériels Pratiques",
    "about.stat_makers": "Créateurs Aidés",
    "about.stat_makers_sub": "Communauté Mondiale",
    "about.stat_dither": "Algorithmes de Tramage",
    "about.stat_dither_sub": "Studio Photo vers Laser",
    "about.what_you_find": "Ce que vous trouverez sur Laserhuis",
    "about.pillar1_title": "Tutoriels Étape par Étape",
    "about.pillar1_desc": "Plus de 100 guides techniques approfondis couvrant les workflows Diode, CO2 et Fibre/Galvo avec des paramètres précis de physique, chimie et puissance.",
    "about.pillar2_title": "Avis Impartiaux sur les Machines",
    "about.pillar2_desc": "Tests de performances pratiques sur les principaux graveurs à diode, les découpeuses CO2 à tube de verre et les stations de travail galvo industrielles.",
    "about.pillar3_title": "Bibliothèque de Paramètres Dynamique",
    "about.pillar3_desc": "Une base de données complète de paramètres matériels qui s'adapte automatiquement à la puissance de votre source laser.",
    "about.pillar4_title": "Outils Basés sur le Navigateur",
    "about.pillar4_desc": "Des utilitaires web instantanés comme notre Studio de Tramage avec plus de 20 algorithmes, des calculateurs de pas rotatifs et des outils de mise en page.",
    "about.fb_eyebrow": "COMMUNAUTÉ OFFICIELLE LASERHUIS",
    "about.fb_title_pre": "Rejoignez la",
    "about.fb_title_highlight": "Communauté Facebook",
    "about.fb_title_post": "Laserhuis !",
    "about.fb_desc1": "Connectez-vous avec plus de ",
    "about.fb_desc_strong": "15 000+ graveurs laser, créateurs et propriétaires d'ateliers",
    "about.fb_desc2": ". Obtenez des fiches de paramètres quotidiennes, des fichiers vectoriels LightBurn gratuits, et un support de dépannage instantané par des pairs pour tous les systèmes diode, CO2 et galvo.",
    "about.fb_bullet1": "<strong>Fiches de paramètres quotidiennes</strong> partagées chaque semaine",
    "about.fb_bullet2": "<strong>Fichiers SVG / LightBurn gratuits</strong> pour les membres",
    "about.fb_bullet3": "<strong>Présentations de projets</strong> & retours d'expérience",
    "about.fb_bullet4": "<strong>Questions & Réponses instantanées</strong> avec des maîtres artisans",
    "about.fb_cta": "Suivez @laserhuis sur Facebook",
    "about.fb_cta_sub": "15K+ Abonnés • Mises à jour quotidiennes",

    // Footer
    "footer.desc": "Le carrefour incontournable pour les créateurs laser — tutoriels, avis machines, base de données de réglages et galerie communautaire.",
    "footer.newsletter_title": "Infolettre",
    "footer.newsletter_sub": "Recevez nos nouveaux tutoriels, réglages de matériaux et actualités directement dans votre boîte mail.",
    "footer.newsletter_placeholder": "votre@atelier.fr",
    "footer.newsletter_join": "Rejoindre",
    "footer.newsletter_invalid": "Veuillez entrer une adresse e-mail valide.",
    "footer.newsletter_success": "Bienvenue sur la liste ! Vérifiez votre boîte de réception.",
    "footer.resources_title": "Ressources & Guides",
    "footer.res_dithering": "Guide du Tramage & Studio Matrix",
    "footer.res_pricing": "Calculateur de Coûts & Devis Laser",
    "footer.res_rotary": "Calculateur Trait de Coupe (Kerf) & Axe Rotatif",
    "footer.res_lightburn": "Aide-mémoire & Raccourcis LightBurn",
    "footer.res_safety": "Sécurité Laser & Matériaux Toxiques",
    "footer.res_facebook": "Communauté Facebook",
    "footer.contact_support": "Contacter le Support",
    "footer.copyright": "© 2026 Laserhuis.com — Tous droits réservés.",
    "footer.safety_banner": "⚡ Artisanat Laser & Ingénierie • Testez toujours sur des chutes et appliquez les consignes de sécurité.",
  },
};

const STORAGE_LANG_KEY = "laserhuis_lang";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
  languages: LANGUAGES,
  translateDifficulty: (lvl) => lvl,
  translateLaserType: (type) => type,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      if (saved && ["en", "nl", "fr"].includes(saved)) {
        return saved;
      }
      // Check browser navigator language
      if (typeof navigator !== "undefined" && navigator.language) {
        const navLang = navigator.language.slice(0, 2).toLowerCase();
        if (["nl", "fr"].includes(navLang)) return navLang;
      }
    } catch {
      // ignore
    }
    return "en";
  });

  const setLanguage = (newLang) => {
    if (["en", "nl", "fr"].includes(newLang)) {
      setLanguageState(newLang);
      try {
        localStorage.setItem(STORAGE_LANG_KEY, newLang);
      } catch {
        // ignore
      }
    }
  };

  const t = (key, fallback = "") => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    // Fallback to English
    if (TRANSLATIONS.en && TRANSLATIONS.en[key] !== undefined) {
      return TRANSLATIONS.en[key];
    }
    return fallback || key;
  };

  const translateDifficulty = (level) => {
    return t(`difficulty.${level}`, level);
  };

  const translateLaserType = (type) => {
    if (type === "diode") return t("laser.diode.label", "Diode");
    if (type === "co2") return t("laser.co2.label", "CO2");
    if (type === "fiber") return t("laser.fiber.label", "Fiber / Galvo");
    return type;
  };

  useEffect(() => {
    // Set document lang attribute for accessibility and SEO
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: LANGUAGES,
        translateDifficulty,
        translateLaserType,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
