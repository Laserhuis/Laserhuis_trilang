import { IMG } from "../images.js";

export const BATCH_2 = [
  // 26
  {
    id: "titanium-foil-stencil",
    title: "Precision Marking & Stencil Cutting on Grade-1 Titanium Foil",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "15 min",
    materials: ["Grade-1 Pure Titanium Foil (0.1mm thickness)", "Acetone Degreaser"],
    tools: ["MOPA Fiber Laser (20W-50W)", "Vacuum Retention Honeycomb Bed", "F-Theta 100mm Lens"],
    summary: "Micro-machining protocol for cutting ultra-fine heat shields and chemical stencils from 100-micron pure titanium foil without warping. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.titanium_foil,
    steps: [
      {
        title: "Thermal Distortion Mitigation in Micro-Foils",
        detail: "Titanium has low thermal diffusivity (d = 6.8 mm²/s). High continuous thermal input causes immediate foil buckling. MOPA short pulses (4ns-8ns) at high frequency (400 kHz) vaporize titanium kerf while restricting heat spreading."
      },
      {
        title: "Vacuum Retention & Bed Flattening",
        detail: "Secure foil onto a porous vacuum bed operating at -15 PSI pressure. Tape perimeter with Kapton heat-resistant masking to eliminate micro-vibrations."
      },
      {
        title: "Laser Cutting Parameters (30W MOPA)",
        detail: "Speed = 350 mm/s, Power = 60%, Frequency = 350 kHz, Pulse Width = 6ns, 4 Wobble Loop Passes (Wobble Diameter 0.03mm). Multi-pass wobble prevents kerf burr welding."
      },
      {
        title: "Deburring & Chemical Cleanse",
        detail: "Immerse cut foil in ultrasonic bath with 5% Nitric Acid solution for 3 minutes to remove micro-dross along cut edges, followed by acetone rinse."
      }
    ],
    proTips: [
      "Wobble frequency must match galvo scan speed to ensure smooth overlapping pulse circles along vector contours.",
      "Never use oxygen assist gas on titanium cut lines; titanium ignites spontaneously in hot O2."
    ],
    safety: "Titanium dust particles are pyrophoric. Clean vacuum filter bag daily to prevent dust fires."
  },

  // 27
  {
    id: "bamboo-cutting-board-epoxy",
    title: "Bamboo Cutting Board Deep Inlay Engraving & Food-Safe Epoxy Pour Prep",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "16 min",
    materials: ["Moso Bamboo Cutting Board (20mm thick)", "Food-Safe Epoxy Resin (FDA 175.300 compliant)", "Liquid Resin Pigment Paste"],
    tools: ["CO2 Laser (60W-100W)", "LightBurn Software", "Orbital Sander (80 to 400 grit)"],
    summary: "Deep 3mm cavity engraving into end-grain bamboo boards with undercut sidewall profiling for mechanical locking of food-safe epoxy resin inlays. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.bamboo_cutting_board,
    steps: [
      {
        title: "Bamboo Node Density Variance Mitigation",
        detail: "Bamboo stems contain hard vascular bundles held together by soft parenchyma cells. Standard single-pass engraving produces uneven ridge valleys. Execute 2 passes at 90° raster cross-angles to achieve flat pocket bottoms."
      },
      {
        title: "Mechanical Lock Cavity Engraving (CO2 80W)",
        detail: "Pass 1 (0° Horizontal): 300 mm/s @ 50% power, 318 DPI. Pass 2 (90° Vertical): 300 mm/s @ 45% power. Depth reaches 3.2mm."
      },
      {
        title: "Char Seal & Resin Pouring",
        detail: "Vacuum loose carbon ash. Coat cavity walls with a thin layer of clear unpigmented epoxy sealant to trap residual air bubbles. Allow 4 hours gel time, then pour colored epoxy mix slightly proud of wood surface."
      },
      {
        title: "Planar Sanding & Food-Grade Finishing",
        detail: "Sand cured epoxy flush with orbital sander using 80, 120, 220, 320, 400 grit discs. Treat board with organic beeswax and mineral oil paste."
      }
    ],
    proTips: [
      "Sealing carbon walls with clear epoxy before pouring colored resin prevents dark carbon bleeding into light resin tints.",
      "Use a butane torch passed quickly over poured resin to pop entrapped surface bubbles."
    ],
    safety: "Epoxy resin mixing requires nitrile gloves and organic vapor respirator. Sanding resin produces fine silica/plastic dust."
  },

  // 28
  {
    id: "neoprene-sleeve-customization",
    title: "Neoprene Laptop Sleeve Customization via Heat-Transfer Vinyl Laser Cutting",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "9 min",
    materials: ["4mm Synthetic Rubber Neoprene Sleeves", "Polyurethane Heat Transfer Vinyl (PU HTV - PVC Free)"],
    tools: ["Diode Laser 10W or CO2 Laser 40W", "Heat Press (150°C)", "Weeding Hook Tool"],
    summary: "Precision vector kiss-cutting of polyurethane heat-transfer vinyl films for heat-pressing onto synthetic neoprene gear sleeves. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.denim_jacket,
    steps: [
      {
        title: "Kiss-Cut Depth Calibration Science",
        detail: "HTV consists of a 100-micron clear PET carrier sheet and a 90-micron PU vinyl color layer. The laser must cut the PU layer while leaving the clear PET backing 100% intact."
      },
      {
        title: "Vector Mirror & Power Tuning",
        detail: "Mirror graphic horizontally in LightBurn. Diode 10W: 2200 mm/min @ 12% power; CO2 40W: 400 mm/s @ 8% power."
      },
      {
        title: "Weeding & Heat Press Application",
        detail: "Peel away excess vinyl outline using weeding hook. Position graphic onto neoprene sleeve, press at 150°C (300°F) for 12 seconds under medium pressure (30 PSI)."
      }
    ],
    proTips: [
      "Always verify HTV sheet is PVC-Free Polyurethane; vinyl containing PVC emits chlorine gas during laser cutting.",
      "Allow neoprene to cool completely before peeling PET carrier sheet (cold peel vinyls)."
    ],
    safety: "Neoprene synthetic rubber emits characteristic odor when heated. Keep exhaust fan active."
  },

  // 29
  {
    id: "bone-horn-inlay-carving",
    title: "Precision Bone & Buffalo Horn Inlay Micro-Carving for Artisanal Knives",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    materials: ["Natural Bleached Cattle Bone Blanks (2.5mm)", "Water-Soluble Masking Tape", "Cyanoacrylate Glue"],
    tools: ["CO2 Laser (50W-80W) with 1.5\" Focal Optics", "Digital Caliper", "Diamond Needle Files"],
    summary: "High-density hydroxyapatite calcium phosphate bone carving for decorative knife handle scales and musical instrument inlay nuts. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.bone_ivory,
    steps: [
      {
        title: "Hydroxyapatite Collagen Pyrolysis Mechanics",
        detail: "Bone consists of 70% inorganic hydroxyapatite mineral and 30% organic collagen. Laser cutting vaporizes collagen, leaving chalky white mineral walls. Short focal optics (1.5\") prevent thermal yellow scorching along cut edges."
      },
      {
        title: "Substrate Masking & Water Saturation",
        detail: "Soak bone blanks in room temperature deionized water for 20 minutes prior to laser processing. Moisture absorbs excess localized heat, reducing char depth."
      },
      {
        title: "Laser Parameters (CO2 60W)",
        detail: "Vector Cut (2.5mm Bone): 12 mm/s @ 65% power, 35 PSI Air Assist, 2 Passes. Deep Engrave: 300 mm/s @ 28% power, 400 DPI."
      },
      {
        title: "Polishing & Mineral Sealing",
        detail: "Buff cut bone with 1000-grit sandpaper and white diamond buffing compound to achieve a smooth ivory-like polish."
      }
    ],
    proTips: [
      "Buffalo horn contains keratin protein which smells strongly like burnt hair during laser cutting; air assist at 40 PSI minimizes charring.",
      "Bleach laser-cut bone in 3% Hydrogen Peroxide for 30 minutes to restore pure snow-white color."
    ],
    safety: "Bone dust contains biological particulates. Wear N95 mask and run fume extractor."
  },

  // 30
  {
    id: "feather-light-art-cut",
    title: "Micro-Cut Feather Paper Art & Shadow Box Structural Framing",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    materials: ["300gsm Heavy Cotton Acid-Free Paper", "3D Shadow Box Frame (25x25cm)", "Acrylic Spacer Standoffs"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W)", "LightBurn Software"],
    summary: "Multi-layered delicate paper cut art featuring sub-millimeter feather barb vectors and 3D floating shadow box assembly. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.feather_art,
    steps: [
      {
        title: "Paper Fiber Kerf & Flash-engrave Prevention",
        detail: "Paper consists of cellulose fibers. Excess power ignites edges into yellow smoke stains. High speed + low power + maximum air assist (30 PSI) yields pristine snow-white cut edges."
      },
      {
        title: "Laser Cutting Parameters (CO2 50W)",
        detail: "Vector Cut: 120 mm/s @ 12% power, 30 PSI Air Assist. Diode 10W: 1800 mm/min @ 25% power."
      },
      {
        title: "Multi-Layer Standoff Assembly",
        detail: "Cut 5 distinct paper layers with staggered feather vector depths. Separate paper layers using 3mm foam standoffs to create deep realistic shadows when front-lit."
      }
    ],
    proTips: [
      "Use a clean sticky mat (like Cricut mats) inside laser bed to hold paper perfectly flat without blowing away fine cut pieces.",
      "Cut paper vectors from back side to ensure any microscopic soot remains invisible on front face."
    ],
    safety: "Light paper scraps can fly into laser tube path or mirror assembly. Ensure bed vacuum or sticky mat holds paper down."
  },

  // 31
  {
    id: "polypropylene-chemical-stencil",
    title: "Laser Cutting Polypropylene (PP) Industrial Chemical Spray Stencils",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["0.8mm Polypropylene (PP) Sheet (Chemical Resistant Grade)"],
    tools: ["CO2 Laser (50W-80W)", "LightBurn Software", "Metal Deburring Tool"],
    summary: "Clean vector cutting of durable, solvent-proof polypropylene sheets for industrial spray paint marking and solvent washing. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cnc2,
    steps: [
      {
        title: "Polypropylene Polymer Thermal Dynamics",
        detail: "Polypropylene melts at 160°C. Standard cutting creates thick raised melted beads along kerf edges. High air assist (35 PSI) and high cutting velocity freeze molten PP before raised beads form."
      },
      {
        title: "Laser Cutting Parameters (CO2 60W)",
        detail: "Vector Cut (0.8mm PP): 45 mm/s @ 32% power, 35 PSI Air Assist, 1 Pass. Setting focal point 0.5mm above surface opens top kerf."
      },
      {
        title: "Bridge Vector Stencil Layout",
        detail: "Ensure all enclosed letters (A, B, D, O, P, Q, R) feature a minimum 1.5mm bridge vector connection in LightBurn stencil bridge editor to prevent interior islands from falling out."
      }
    ],
    proTips: [
      "Polypropylene is 100% halogen-free (PVC-free) and completely safe to laser cut.",
      "Clean melted lip flash with a sharp razor scraper held at 45° angle."
    ],
    safety: "Hot molten PP droplets can stick to skin. Handle fresh cut sheets with protective heat gloves."
  },

  // 32
  {
    id: "mopa-brass-engraving-oxide",
    title: "Deep Brass MOPA Engraving & Chemical Black Oxide Antiquing Infill",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["Brass Nameplate Stock (2mm thickness)", "Brass Black Oxidation Liquid (Selenium Dioxide solution)", "Acetone"],
    tools: ["30W/50W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3", "Microfiber Towel"],
    summary: "Precision deep galvo engraving into solid brass followed by targeted chemical oxidation for high-contrast architectural signs. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.brass_coin,
    steps: [
      {
        title: "Galvo Hatch Strategy for Brass Cavities",
        detail: "Configure 3 hatch layers: Layer 1 (0° cross), Layer 2 (45° cross), Layer 3 (90° cross). Hatch pitch set to 0.02mm. Executing multi-angle hatches prevents bottom trench ridging."
      },
      {
        title: "Laser Parameters (50W MOPA Fiber)",
        detail: "Deep Cavity Pass (x20 loop): Speed = 1000 mm/s, Power = 80%, Frequency = 30 kHz, Pulse Width = 200ns. Cleaning Pass (x2 loop): Speed = 2500 mm/s, Power = 20%, Frequency = 80 kHz, Pulse Width = 32ns."
      },
      {
        title: "Chemical Black Oxide Reaction",
        detail: "Apply Brass Black liquid into engraved channels using a cotton swab. Selenium dioxide reacts with brass copper content in 30 seconds, forming an insoluble jet-black copper selenide surface coating."
      },
      {
        title: "Top Surface Polishing",
        detail: "Sand top flat surface with 1200-grit paper backed by a flat wooden block. Black oxidation remains locked inside deep laser channels while top face shines bright brass."
      }
    ],
    proTips: [
      "Clean brass thoroughly with acetone before applying oxidation liquid; grease spots prevent black chemical reaction.",
      "Seal finished brass plate with lacquer to prevent copper tarnishing."
    ],
    safety: "Brass Black liquid contains toxic selenium compounds. Wear nitrile gloves and safety glasses."
  },

  // 33
  {
    id: "co2-12mm-acrylic-polished-edge",
    title: "Cutting 12mm Thick Cast Acrylic with Flame-Polished Crystal Edges",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    materials: ["12mm Clear Cell-Cast PMMA Acrylic Block", "Deionized Water"],
    tools: ["100W-150W CO2 Laser with 2.5\" or 3.0\" Long Focal Lens", "LightBurn Software"],
    summary: "Optical focus placement, gas pressure tuning, and power density settings for achieving glass-clear flame-polished cut edges on 12mm thick acrylic. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.acrylic_glow,
    steps: [
      {
        title: "Long Focal Optics & Rayleigh Length Math",
        detail: "A standard 2.0\" lens has a short focal depth that creates V-shaped hour-glass cut walls on thick acrylic. A 3.0\" focal lens extends Rayleigh length depth of field to 4.2mm, maintaining a parallel vertical beam cylinder through the entire 12mm sheet."
      },
      {
        title: "Focal Point Displacement",
        detail: "Set focal point 4.0mm BELOW the top surface (1/3 depth into material). This balances energy density between top entrance kerf and bottom exit kerf."
      },
      {
        title: "Laser Parameters (130W CO2)",
        detail: "Vector Cut: 3.2 mm/s @ 88% power, Air Assist set to ULTRA-LOW TRICKLE (3 PSI). High air pressure chills molten PMMA, creating frosted striations. Low air pressure allows molten acrylic walls to re-flow and melt smooth like liquid glass."
      },
      {
        title: "Post-Cut Handling",
        detail: "Allow cut acrylic part to rest on bed for 2 minutes before handling to let molten edges re-solidify without finger imprints."
      }
    ],
    proTips: [
      "Elevate acrylic on cone points or blade bed to prevent laser reflection flash-marks on bottom edge.",
      "Never wipe fresh cut acrylic with alcohol; internal stress causes instant micro-cracking."
    ],
    safety: "Cutting thick acrylic generates high flammable monomer vapor volume. Keep fire extinguisher next to machine."
  },

  // 34
  {
    id: "kumiko-japanese-wood-joinery",
    title: "Laser Cut Japanese Kumiko Geometric Joinery Coasters with Friction Fit",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["3mm Cherry Wood Veneer / Basswood Precision Sheets", "Wood Glue (Titebond II)"],
    tools: ["CO2 Laser (50W-80W) or Diode Laser (20W)", "LightBurn Kerf Offset Wizard"],
    summary: "Precision kerf-calibrated vector cutting of delicate interlocking Japanese Kumiko pattern lattices requiring zero adhesive friction assembly. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.walnut_inlay,
    steps: [
      {
        title: "Kerf Width Precision Measurement",
        detail: "Cut a 10-slat test array in 3mm Cherry wood. Measure total gap with caliper and divide by 10 to determine exact laser kerf (e.g., 0.14mm). Input +0.07mm Kerf Offset in LightBurn layer settings."
      },
      {
        title: "Laser Cutting Parameters (CO2 60W)",
        detail: "Vector Cut: 35 mm/s @ 30% power, 25 PSI Air Assist. Clean air assist prevents wood smoke resin from coating interlocking joint notches."
      },
      {
        title: "Interlocking Assembling Protocol",
        detail: "Assemble outer square frame, then snap diagonal Kumiko lattice strips into position using thumb pressure. Perfect kerf offset yields a satisfying mechanical 'click' lock."
      }
    ],
    proTips: [
      "Use basswood or cherry wood with straight tight grain; wild grain woods warp when cut into 1.2mm thin Kumiko slats.",
      "Apply blue painter's tape to both sides of wood board before cutting to eliminate smoke sanding."
    ],
    safety: "Thin wood lattice pieces can catch fire if trapped in bed honeycomb. Clear small cutouts immediately."
  },

  // 35
  {
    id: "glass-wine-bottle-rotary-cut",
    title: "Rotary Glass Wine Bottle Slicing & Diamond Hand Edge Polishing",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    materials: ["Glass Wine Bottles (750ml)", "Thermal Shock Ice Water Bath", "Silicon Carbide Sandpaper (120 to 1000 grit)"],
    tools: ["CO2 Laser (60W-100W)", "Chuck Rotary Attachment", "Diamond Hand Sanding Pads"],
    summary: "Controlled circumference score line thermal cracking to cleanly sever wine bottles into glass tumblers and candle holders. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.glass_bottle,
    steps: [
      {
        title: "Thermal Stress Fracture Scoring Principle",
        detail: "Glass cannot be laser vapor-cut like wood. The laser engraves a continuous 1-pass circumferential micro-crack vector line. Applying ice water immediately causes differential thermal expansion, snapping glass along score line."
      },
      {
        title: "Rotary Score Parameters (CO2 80W)",
        detail: "Mount bottle in chuck rotary. Vector Score: 40 mm/s @ 45% power, Single continuous pass, Air Assist OFF. Do NOT execute multiple passes."
      },
      {
        title: "Thermal Shock Separation",
        detail: "Drench score line with boiling water for 10 seconds, then immediately plunge bottle into ice water bath. Bottle snaps cleanly along laser score line with a ring sound."
      },
      {
        title: "Diamond Edge Chamfering",
        detail: "Chamfer sharp cut edges using 120-grit wet diamond hand pad under running tap water, progressing to 400 and 1000 grit for a silky smooth lip edge."
      }
    ],
    proTips: [
      "Maintain consistent bottle wall thickness; cheap uneven wine bottles crack off-axis.",
      "Always sand glass wet under running water to trap dangerous silica dust."
    ],
    safety: "Glass snapping generates sharp edges. Wear cut-resistant Kevlar gloves and safety goggles."
  },

  // 36
  {
    id: "copper-sheet-fiber-cutting",
    title: "Precision Fiber Laser Cutting 1mm Pure Copper Sheets with N2 Assist Gas",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "20 min",
    materials: ["C11000 Pure Copper Sheet (1.0mm thickness)", "High-Purity Nitrogen Gas Cylinder (99.999% N2)"],
    tools: ["1000W+ CW Fiber Cutting Laser or 100W MOPA Fiber Galvo", "Nitrogen High Pressure Regulator (150 PSI)"],
    summary: "High-power fiber laser cutting of reflective pure copper sheets using high-pressure Nitrogen assist gas to prevent copper back-reflection damage. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Copper Back-Reflection Physics Protection",
        detail: "Pure copper reflects up to 98% of 1064nm NIR light at room temperature. Until copper melts (1085°C), reflected laser light travels back up optics, risking fiber source destruction. Beam tilting (5° off-perpendicular) and high initial peak power overcome reflection safely."
      },
      {
        title: "Nitrogen Assist Gas Dynamics",
        detail: "Nitrogen gas pressurized to 12 Bar (174 PSI) blows molten copper out of kerf without oxidation, leaving bright metallic cut edges requiring zero deburring."
      },
      {
        title: "Cutting Parameters (1000W CW Fiber Laser)",
        detail: "Speed = 45 mm/s, Power = 950W, Focal Position = -0.5mm inside sheet, N2 Gas Pressure = 12 Bar, Nozzle Diameter = 1.2mm."
      },
      {
        title: "Burr Inspection & Dimensional Audit",
        detail: "Measure cut part with micrometer. Clean perpendicular edge with zero dross bottom drop confirms optimal focus and gas pressure match."
      }
    ],
    proTips: [
      "Never use Oxygen assist gas on copper unless heavy oxidation scale is acceptable; O2 creates violent exothermal engraving.",
      "Apply anti-reflective coating spray for low-power galvo fiber setups."
    ],
    safety: "High pressure gas cylinders require secure chains and certified high-pressure lines."
  },

  // 37
  {
    id: "brass-wax-seal-carving",
    title: "Deep Carving Custom Brass Wax Seal Stamps with Fiber Galvo Laser",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    materials: ["Solid Brass Wax Seal Blanks (25mm round x 5mm thick)", "Acetone Degreaser", "Wax Seal Beads & Melting Spoon"],
    tools: ["30W/50W Fiber Galvo Laser", "LightBurn / EZCAD3", "Brass Wire Wheel"],
    summary: "3D deep inverted vector carving of custom heraldic wax seal stamp heads into solid brass blanks. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.brass_coin,
    steps: [
      {
        title: "Inverted Mirror Geometry Setup",
        detail: "Artwork MUST be mirrored horizontally AND inverted in depth (engrave background away, leaving letters raised by 1.2mm). Raised brass letters press deep impressions into hot wax."
      },
      {
        title: "Layer Hatching Execution (30W Fiber Galvo)",
        detail: "Set 120 Hatch passes with 0.015mm hatch step. Speed = 1200 mm/s, Power = 75%, Frequency = 30 kHz. Execute 1 cleanup pass every 15 deep passes at 3000 mm/s @ 20% power."
      },
      {
        title: "Draft Angle Taper Calibration",
        detail: "Incorporate a 10° draft angle on raised letter walls in 3D slice settings. Tapered letter walls allow clean release from hot sealing wax without tearing paper."
      },
      {
        title: "Wax Impression Test",
        detail: "Melt wax beads, pour onto envelope, and press brass stamp. Sharp detailed wax crest with clean background release verifies successful carving."
      }
    ],
    proTips: [
      "Chill brass stamp on ice block between wax seal pressings for instant wax solidification.",
      "Polish stamp face with metal polish to prevent wax adhesion."
    ],
    safety: "Galvo laser reflection during brass surface passes requires OD6+ 1064nm protective glasses."
  },

  // 38
  {
    id: "leather-passport-stitch-holes",
    title: "Genuine Vegetable-Tanned Leather Passport Wallet Stitch Hole Punching",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    materials: ["1.8mm Full-Grain Vegetable-Tanned Leather", "Waxed Linen Thread (0.8mm)", "Neatsfoot Oil"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W-20W)", "Saddle Stitching Needles", "Pricking Iron Calibration Tool"],
    summary: "Precision laser vector punching of 1.0mm stitching holes and edge perimeter cutting for hand-stitched leather goods. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.leather_book,
    steps: [
      {
        title: "Leather Chemistry: Veg-Tan vs Chrome-Tan",
        detail: "MUST use Vegetable-Tanned leather. Chrome-Tanned leather contains Chromium(III) salts which decompose under laser into toxic carcinogenic Chromium(VI) and ruin laser bed metals."
      },
      {
        title: "Vector Stitch Hole Pattern Generation",
        detail: "Create 1.0mm circle vector arrays spaced at 4.0mm pitch along seam lines in LightBurn. Precision circular holes eliminate manual pricking iron punching."
      },
      {
        title: "Laser Parameters (CO2 50W)",
        detail: "Stitch Hole Punching: 100 mm/s @ 35% power, 30 PSI Air Assist. Perimeter Cut: 20 mm/s @ 55% power."
      },
      {
        title: "Saddle Stitch Assembly & Conditioning",
        detail: "Hand stitch wallet using traditional two-needle saddle stitch through laser punched holes. Treat finished leather with Neatsfoot oil to restore suppleness."
      }
    ],
    proTips: [
      "Mask leather surface with paper tape before cutting to prevent smoke resin halo discoloration on light tan leather.",
      "Rub cut edges with beeswax and a wooden burnisher for glossy burnished edge finish."
    ],
    safety: "Burnt leather protein smells strongly of organic sulfur. Run exhaust ventilation during processing."
  },

  // 39
  {
    id: "paper-wedding-invitation-lace",
    title: "High-Speed Galvo Laser Cut Lace Wedding Invitations on Pearlized Cardstock",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "10 min",
    materials: ["250gsm Shimmer Pearlized Cardstock Sheets"],
    tools: ["CO2 Galvo Laser (30W-60W) or Flatbed Laser with Honeycomb Bed", "LightBurn Software"],
    summary: "Ultra-fast galvo mirror vector cutting of delicate filigree lace wedding invitations without edge charring. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.feather_art,
    steps: [
      {
        title: "Galvo vs Flatbed Speed Comparison",
        detail: "A flatbed laser head moving heavy X/Y gantries takes 4 minutes per invitation. A CO2 Galvo laser bouncing mirrors cuts complex filigree lace in 14 seconds per sheet."
      },
      {
        title: "Laser Parameters (30W CO2 Galvo)",
        detail: "Marking Speed = 1800 mm/s, Power = 22%, Frequency = 25 kHz. Air Assist blower directed across bed to clear light paper cutouts."
      },
      {
        title: "Smoke Back-Flash Elimination",
        detail: "Support cardstock on elevated thin wire pins 20mm above bed floor to prevent laser reflection flash marks on rear shimmer coat."
      }
    ],
    proTips: [
      "Shimmer pearlized paper contains mica titanium coatings that resist yellowing compared to standard wood pulp papers.",
      "Batch print text first on digital press before laser cutting lace borders."
    ],
    safety: "Paper micro-scraps can ignite if accumulated inside vacuum bed. Clean drawer after every batch run."
  },

  // 40
  {
    id: "laser-marking-barcodes-iso15415",
    title: "Laser Marking Barcodes & DataMatrix Codes to ISO/IEC 15415 Grade A Standards",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["316L Stainless Steel Medical Instruments / Automotive Castings"],
    tools: ["Fiber Galvo Laser (20W-50W)", "Cognex / Keyence Industrial Barcode Verifier", "LightBurn Barcode Generator"],
    summary: "Engineering setup for marking 2D DataMatrix QR codes onto industrial metal parts achieving ISO 15415 Grade A verification scores. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "ISO/IEC 15415 Quality Parameter Metrics",
        detail: "Grade A verification requires scoring 4.0/4.0 on Symbol Contrast (SC), Modulation (MOD), Axial Non-Uniformity (ANU), and Unused Error Correction (UEC). Edge quiet zones must measure at least 3x module width."
      },
      {
        title: "Cell Module Hatch Calibration",
        detail: "Configure LightBurn 'DataMatrix' generator with 0.25mm module size. Set Cell Fill Hatch to 0.015mm cross-hatch. Ensure quiet zone white border is preserved."
      },
      {
        title: "Laser Parameters (30W Fiber Galvo - 316L Metal)",
        detail: "Speed = 1500 mm/s, Power = 35%, Frequency = 40 kHz, 2 Passes. Pass 1 creates dark oxided cells; Pass 2 cleans cell borders for high Modulation contrast."
      },
      {
        title: "Industrial Verification Audit",
        detail: "Scan mark using Cognex verifier under 45° diffuse lighting. Verify report confirms Overall Grade A (4.0/4.0) compliance for UID track and trace."
      }
    ],
    proTips: [
      "Do not mark barcodes on curved surfaces without enabling LightBurn 3D cylinder projection correction; distortion drops grade to F.",
      "High frequency (>50 kHz) lowers surface roughness, increasing reflectance contrast."
    ],
    safety: "Wear 1064nm laser safety goggles during galvo calibration."
  },

  // 41
  {
    id: "solid-walnut-bas-relief",
    title: "Solid American Walnut 3D Bas-Relief Carving with Dynamic Depth Slicing",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "19 min",
    materials: ["Kiln-Dried American Black Walnut Board (30mm)", "Walnut Oil / Shellac Sealer"],
    tools: ["CO2 Laser (80W-130W)", "LightBurn 3D Mode", "Brass Detail Brush"],
    summary: "Deep 8mm bas-relief carving into solid black walnut timber using 16-bit grayscale depth maps and post-laser shellac sealing. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_relief,
    steps: [
      {
        title: "Walnut Density & Lignin Pyrolysis Behavior",
        detail: "American Black Walnut (Juglans nigra) has a Janka hardness of 1,010 lbf and rich natural juglone pigments that carve into deep rich chocolate tones without excessive carbon charring."
      },
      {
        title: "3D Grayscale Laser Parameters (100W CO2)",
        detail: "Speed = 300 mm/s, Power Min = 10%, Power Max = 75%, 350 DPI, Line Interval = 0.072mm. Lens = 2.0\" focused 2.0mm inside material."
      },
      {
        title: "Post-Carving Ash Extraction",
        detail: "Scrub sculpted walnut surface under running warm water using a brass detail brush along wood fiber grain. Allow 24 hours room drying."
      },
      {
        title: "Shellac & Botanical Oil Finish",
        detail: "Apply 2 coats of dewaxed amber shellac diluted 50% with denatured alcohol to lock wood fibers, followed by pure walnut oil rub."
      }
    ],
    proTips: [
      "Select quarter-sawn walnut boards to minimize wood cup warping during heavy multi-pass thermal engraving.",
      "Orient laser scan vector parallel to walnut wood grain."
    ],
    safety: "Heavy wood carving produces dense smoke. Ensure 250+ CFM exhaust blower is operational."
  },

  // 42
  {
    id: "delrin-precision-gears",
    title: "Cutting Delrin (POM) Precision Mechanical Gears & Bushings",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    materials: ["3mm Acetal / Delrin (POM - PolyOxyMethylene) Sheet"],
    tools: ["CO2 Laser (50W-100W)", "Digital Vernier Caliper (0.01mm resolution)", "LightBurn Software"],
    summary: "Precision vector cutting of slippery engineering acetal (Delrin) for low-friction gears and mechanical bushings with exact gear tooth kerf offset. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cnc1,
    steps: [
      {
        title: "Delrin Polymer Sublimation Mechanics",
        detail: "PolyOxyMethylene (POM) sublimates directly from solid to gas without liquefying, producing glass-smooth slick vertical cut walls ideal for mechanical gears."
      },
      {
        title: "Involute Gear Kerf Offset Calculation",
        detail: "Measure cut slot kerf (e.g. 0.12mm). Apply +0.06mm Kerf Offset to gear vector outline in LightBurn to guarantee perfect involute tooth mesh without gear backlash slop."
      },
      {
        title: "Laser Cutting Parameters (CO2 60W)",
        detail: "Vector Cut (3mm Delrin): 22 mm/s @ 55% power, 30 PSI High Air Assist. Air assist blows away vaporized formaldehyde gas."
      },
      {
        title: "Dimensional Gear Mesh Test",
        detail: "Mount cut Delrin gears onto steel dowel pins and spin by hand. Smooth low-friction mesh verifies proper kerf compensation."
      }
    ],
    proTips: [
      "Delrin cuts with almost zero melt lip compared to acrylic or polyethylene.",
      "Delrin is available in white and black; both cut with identical laser parameters."
    ],
    safety: "Delrin thermal decomposition releases Formaldehyde gas (HCHO). Active outdoor exhaust ventilation is mandatory."
  },

  // 43
  {
    id: "precious-metals-jewelry-cutting",
    title: "Gold & Silver Jewelry Fiber Laser Cutting & Recovery Trap Setup",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "21 min",
    materials: ["14K Yellow Gold Sheet / 925 Sterling Silver Sheet (0.8mm)", "Deionized Water"],
    tools: ["50W/100W MOPA Fiber Laser with High-Peak Power", "Cyclone Precious Metal Scrap Filter Trap", "F-Theta 100mm Lens"],
    summary: "High-peak power galvo cutting of precious metal jewelry pendants with 99% precious metal dust recovery systems. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "High Reflectivity Physics & MOPA Peak Power",
        detail: "Silver reflects 99% of 1064nm light. Standard continuous lasers fail to cut silver. MOPA fiber lasers configured with short pulse widths (2ns - 10ns) achieve ultra-high peak power (15kW per pulse), exceeding silver ablation threshold instantly."
      },
      {
        title: "Cyclone Gold/Silver Scrap Trap Integration",
        detail: "Connect a high-efficiency cyclone dust separator directly to laser cutting nozzle enclosure. 99.2% of vaporized gold/silver dust drops into a sealed stainless collection flask for refinery smelting."
      },
      {
        title: "Laser Cutting Parameters (50W MOPA Fiber - 0.8mm 925 Silver)",
        detail: "Speed = 200 mm/s, Power = 95%, Frequency = 25 kHz, Pulse Width = 4ns, 40 Wobble Loop Passes (Wobble Diameter 0.05mm)."
      },
      {
        title: "Jeweler's Edge Polishing",
        detail: "Ultrasonically wash cut pendant, filed minor tab attachment points, and magnetic tumbler polish with stainless steel shot for 40 minutes."
      }
    ],
    proTips: [
      "Blacken silver sheet with a permanent marker before starting cut to jumpstart initial photon thermal absorption.",
      "Never mix precious metal scrap dust with wood or plastic waste."
    ],
    safety: "Precious metal dust requires dedicated filtration to prevent loss and air contamination."
  },

  // 44
  {
    id: "box-enclosures-living-hinge",
    title: "Custom Laser Cut Enclosure Boxes with Finger Joints & Curved Living Hinges",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "15 min",
    materials: ["3mm Baltic Birch Plywood", "Wood Glue (Titebond II)"],
    tools: ["CO2 Laser (50W-80W) or Diode Laser (20W)", "Boxes.py / LightBurn Box Generator"],
    summary: "Parametric design, kerf compensation, and vector lattice cut calculations for building wooden electronics enclosures with flexible curved living hinges. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_letter,
    steps: [
      {
        title: "Living Hinge Lattice Vector Geometry",
        detail: "A living hinge converts rigid plywood into flexible curved wood using alternating parallel vector cuts spaced 1.5mm apart. Flex radius R = 15mm requires a minimum 45mm hinge zone width."
      },
      {
        title: "Finger Joint Kerf Calculation",
        detail: "Measure laser cut kerf (e.g. 0.12mm). Set 'Box Finger Joint Kerf' parameter in generator software to 0.12mm so tab fingers press fit snugly without glue slop."
      },
      {
        title: "Laser Parameters (CO2 60W)",
        detail: "Vector Cut: 30 mm/s @ 40% power, 30 PSI Air Assist. Clean air assist prevents smoke soot on living hinge flex strips."
      },
      {
        title: "Flexing & Assembly Protocol",
        detail: "Gently hydrate living hinge wood strips with a spray of water before bending around corner box frames to prevent wood grain cracking."
      }
    ],
    proTips: [
      "Orient living hinge cut lines perpendicular to wood face grain to maximize tensile flex strength.",
      "Slightly sand finger tabs with 220-grit paper if joint fit is too tight."
    ],
    safety: "Living hinge lattice cuts create many small wood scrap dropouts. Keep honeycomb bed clean."
  },

  // 45
  {
    id: "dark-wood-chemical-contrast",
    title: "Diode Laser Dark Wood Staining & Chemical Contrast Activation",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "12 min",
    materials: ["Basswood / Maple Board", "Baking Soda (Sodium Bicarbonate - NaHCO3)", "Warm Water"],
    tools: ["Diode Laser 10W-20W", "Sponge Applicator", "LightBurn Software"],
    summary: "Pre-treating light hardwoods with Sodium Bicarbonate solution to trigger chemical tanning dark wood contrast under blue diode lasers. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_tech,
    steps: [
      {
        title: "Sodium Bicarbonate Tannin Reaction Chemistry",
        detail: "Pre-soaking wood in 10% Sodium Bicarbonate solution (10g baking soda in 100ml warm water) reacts with natural wood tannic acids. When diode laser heat (455nm) hits treated wood, chemical dark browning occurs at 40% lower thermal energy levels."
      },
      {
        title: "Solution Application & Drying",
        detail: "Sponge baking soda solution evenly across wood surface. Allow 30 minutes room drying at 20°C until wood surface feels completely dry to touch."
      },
      {
        title: "Laser Engraving Parameters (20W Diode)",
        detail: "6000 mm/min @ 18% power, 300 DPI. Compared to untreated wood (which requires 35% power), chemical contrast yields jet-black marks with 0% wood engraving smoke soot."
      },
      {
        title: "Rinse & Clear Sealing",
        detail: "Wipe wood with damp cloth to remove excess dried baking soda powder, dry 1 hour, and seal with clear satin polyurethane."
      }
    ],
    proTips: [
      "High tannin woods like Oak and Cherry produce the darkest chemical reaction contrast.",
      "Baking soda treatment permits 2x faster laser scan speeds."
    ],
    safety: "Sodium Bicarbonate is safe and non-toxic. Standard laser dust mask recommended."
  },

  // 46
  {
    id: "glass-crystal-internal-3d-engraving",
    title: "Sub-Surface Laser Engraving (SSLE) 3D Point Clouds inside Crystal Glass",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["K9 Optical Glass Crystal Blocks"],
    tools: ["532nm Green Pulsed SSLE Laser or Ultra-Short Pulse UV Laser", "3D Point Cloud Software"],
    summary: "Focusing high-peak green laser pulses inside K9 optical glass blocks to create 3D micro-crack point clouds without touching outer glass surfaces. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.lab,
    steps: [
      {
        title: "Sub-Surface Non-Linear Optical Absorption Physics",
        detail: "Optical K9 glass is transparent to visible light. When a high-peak power 532nm green laser pulse is focused to a 10-micron focal spot inside glass volume, non-linear multiphoton absorption occurs, creating a controlled micro-crack point (50 microns wide) at depth Z without damaging surface glass."
      },
      {
        title: "3D Point Cloud Conversion",
        detail: "Convert 3D CAD mesh into a 3D point cloud containing 200,000 discrete X,Y,Z coordinate points spaced 0.15mm apart."
      },
      {
        title: "Laser Pulse Parameters (532nm SSLE Green Laser)",
        detail: "Pulse Energy = 2.5 mJ, Pulse Width = 3ns, Repetition Rate = 4,000 Hz. Galvanometer Z-axis galvo dynamically shifts focal depth from bottom to top."
      },
      {
        title: "Optical Inspection",
        detail: "Place crystal block on an LED light base. Micro-points scatter LED light, rendering a floating 3D holographic image inside crystal."
      }
    ],
    proTips: [
      "K9 crystal must be free of internal bubbles and striations.",
      "Engrave points from bottom to top so lower points don't block upper laser beam paths."
    ],
    safety: "532nm green laser energy requires specialized OD5+ 532nm green laser safety goggles."
  },

  // 47
  {
    id: "polymer-rubber-gaskets",
    title: "Custom Polymer Rubber Gasket Fabrication for Automotive Engines",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["NBR Nitrile Rubber Gasket Sheet (1.5mm & 3.0mm thickness)"],
    tools: ["CO2 Laser (60W-100W)", "LightBurn Software", "Digital Caliper"],
    summary: "High-precision vector cutting of oil-resistant nitrile rubber gasket sheets for custom engine headers and fluid pump housings. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cnc1,
    steps: [
      {
        title: "Nitrile Rubber (NBR) Thermal Properties",
        detail: "NBR (Acrylonitrile-Butadiene Rubber) provides high oil resistance. CO2 lasers cleanly cut NBR, but high air assist (35 PSI) is critical to blow away rubber char soot and prevent edge re-welding."
      },
      {
        title: "Flange Hole Kerf Calculation",
        detail: "Measure bolt hole clearance diameter (e.g. M8 bolt = 8.5mm hole). Apply -0.05mm Kerf Offset in LightBurn so bolt holes cut at exact diameter."
      },
      {
        title: "Laser Parameters (CO2 80W - 3mm NBR Gasket)",
        detail: "Vector Cut: 15 mm/s @ 65% power, 35 PSI High Air Assist. Single pass execution."
      },
      {
        title: "Cleaning & Fitment Test",
        detail: "Wash gasket in solvent to remove loose carbon residue. Install on engine housing flange and verify bolt alignment."
      }
    ],
    proTips: [
      "Never cut silicone or NBR gaskets on a dirty honeycomb bed; sticky rubber ash collects on bottom face.",
      "Store raw gasket roll flat 24 hours before laser cutting to eliminate material curl."
    ],
    safety: "Nitrile rubber ablation generates strong sulfur fumes. Fume extraction with carbon media is required."
  },

  // 48
  {
    id: "fiber-industrial-rust-removal",
    title: "Industrial Fiber Laser Cleaning & Rust Removal on Ferrous Metals",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    materials: ["Corroded Heavy Structural Steel Plates (Fe2O3 Rust)"],
    tools: ["100W-1000W Pulsed Fiber Cleaning Laser", "Handheld Galvo Wobble Head", "HEPA Vacuum Extraction"],
    summary: "Non-abrasive laser ablation stripping of heavy iron oxide rust scale from structural steel without removing base metal. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.machine_fiber,
    steps: [
      {
        title: "Selective Laser Thermal Ablation Physics",
        detail: "Iron oxide rust (Fe2O3) has lower thermal damage threshold than base steel. High-peak short laser pulses heat rust scale to 1500°C in nanoseconds, causing explosive thermal expansion and shockwave ejection of rust scale while base steel reflects laser light safely."
      },
      {
        title: "Galvo Wobble Beam Scanning",
        detail: "Configure galvo head with 100mm wide line wobble scan at 200 Hz. Linear wobble prevents localized metal overheating."
      },
      {
        title: "Laser Parameters (200W Pulsed Fiber Cleaner)",
        detail: "Pulse Energy = 1.8 mJ, Repetition Rate = 30 kHz, Scan Velocity = 8000 mm/s, Line Width = 80mm."
      },
      {
        title: "Surface Passivation & Rust Inhibitor",
        detail: "Wipe clean bare metal with solvent and spray anti-corrosion primer within 30 minutes to prevent flash rusting."
      }
    ],
    proTips: [
      "Laser cleaning leaves a clean Sa 3.0 white metal surface ideal for weld prep or powder coating.",
      "Hold laser gun at 85° angle to prevent back-reflected light from hitting internal galvo mirrors."
    ],
    safety: "Heavy rust ablation releases toxic oxide dust and intense diffuse 1064nm reflection. Wear laser safety goggles and PAPR respirator hood."
  },

  // 49
  {
    id: "multilayer-depth-mandala-art",
    title: "3D Multilayer Wood Mandala Art Creation & Precision Alignment Jig",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "16 min",
    materials: ["3mm Baltic Birch Plywood (8 Sheets 30x30cm)", "Wood Stain (Oak, Walnut, Mahogany, Teak)", "Wood Glue"],
    tools: ["CO2 Laser (50W-80W) or Diode Laser (20W)", "LightBurn Software", "4x Corner Dowel Alignment Pins"],
    summary: "Vector nesting, multi-color wood staining, and 8-layer alignment pin assembly for intricate 3D architectural mandala wall art. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_wall,
    steps: [
      {
        title: "Parametric Layer Nesting & Vector Cleaning",
        detail: "Separate mandala design into 8 individual vector layers in LightBurn. Include four 3.0mm alignment holes in the exact same corner coordinates on every layer."
      },
      {
        title: "Batch Vector Cutting (CO2 60W)",
        detail: "Vector Cut (8 Layers): 32 mm/s @ 45% power, 25 PSI Air Assist. Clean air assist keeps top veneer faces white."
      },
      {
        title: "Selective Staining & Curing",
        detail: "Stain each cut layer with contrasting wood stains: Layer 1 Natural, Layer 2 Golden Oak, Layer 3 Walnut, Layer 4 Mahogany, Layer 5 Black Teak. Allow 12 hours drying at 20°C."
      },
      {
        title: "Dowel Pin Alignment Assembly",
        detail: "Insert 3mm wooden dowel pins into corner alignment holes. Apply wood glue to layer backs and stack layers sequentially over dowel pins. Clamp tight for 2 hours."
      }
    ],
    proTips: [
      "Stain wood sheets BEFORE laser cutting if you prefer natural burnt cut vector edges to outline design geometries.",
      "Check that every sheet has identical thickness (+/- 0.1mm) to prevent cumulative height errors."
    ],
    safety: "Wood stain rags are susceptible to spontaneous combustion. Store oily rags in water-filled metal cans."
  },

  // 50
  {
    id: "mopa-frequency-plastics-marking",
    title: "MOPA Fiber Laser Frequency Tuning for Commercial Plastics (ABS, PC, Nylon)",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    materials: ["ABS Plastic Housings", "Polycarbonate (PC) Keycaps", "Nylon 66 Cable Ties"],
    tools: ["20W/30W/50W MOPA Fiber Laser (2ns-500ns pulse)", "LightBurn Galvo / EZCAD3"],
    summary: "High-contrast foaming and color-change laser marking on industrial polymers using adjustable MOPA pulse frequency tuning. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "Polymer Foaming vs Carbonization Mechanics",
        detail: "Standard 1064nm fiber lasers engrave plastic into ugly char. MOPA short pulses (2ns-10ns) at high frequency (200-500 kHz) melt polymer surface gently, expanding microscopic gas bubbles ('foaming') that scatter light into bright snow-white text without engraving."
      },
      {
        title: "Material Frequency Tuning Matrix (30W MOPA)",
        detail: "ABS Plastic (White Foaming Mark): 2000 mm/s, 18% power, 350 kHz, 4ns pulse width, Hatch 0.03mm. Polycarbonate (Black Mark): 1200 mm/s, 22% power, 80 kHz, 60ns pulse width. Nylon 66: 1800 mm/s, 20% power, 250 kHz, 8ns pulse width."
      },
      {
        title: "Laser Execution & Quality Check",
        detail: "Execute mark pass. Inspect text under magnifier. Smooth non-tactile finish with high optical contrast verifies correct MOPA frequency setup."
      }
    ],
    proTips: [
      "Polycarbonate turns jet black under 60ns pulses due to controlled surface carbonization.",
      "Add laser-marking additives (like mica or titanium dioxide) to raw plastic injection resins for maximum contrast."
    ],
    safety: "Plastic laser marking generates organic polymer fumes. Run active carbon filtration."
  }
];
