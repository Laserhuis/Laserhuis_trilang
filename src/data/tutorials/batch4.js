import { IMG } from "../images";

export const BATCH_4 = [
  // 76
  {
    id: "anodized-drone-motors-esc",
    title: "Laser Marking Anodized Aluminum Drone Motors & ESC Housings",
    category: "Fiber/Galvo",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "11 min",
    materials: ["Anodized Aluminum Brushless Motor Cans / ESC Heat Sinks"],
    tools: ["Fiber Galvo Laser (20W-30W)", "Rotary Fixture", "LightBurn Galvo"],
    summary: "Precision laser dye bleaching of motor KV specs and logo graphics onto anodized aluminum drone motor bells.",
    image: IMG.machine_fiber,
    steps: [
      {
        title: "Rotary Setup & Anodic Dye Bleaching",
        detail: "Mount motor bell in rotary chuck. Set marking parameters to vaporize black/red anodized dye layer without melting aluminum oxide shell, leaving bright white text."
      },
      {
        title: "Laser Parameters (20W Fiber Galvo)",
        detail: "Speed = 2200 mm/s, Power = 24%, Frequency = 35 kHz, Line Hatch = 0.025mm cross-hatch. Execution time: 1.2 seconds per motor bell."
      },
      {
        title: "Wipe & Audit",
        detail: "Wipe marked bell with Isopropyl Alcohol. Bright white KV number readable from 2 meters away."
      }
    ],
    proTips: [
      "Use low laser power to avoid damaging internal neodymium motor magnets.",
      "Zero post-processing required."
    ],
    safety: "Wear 1064nm NIR safety goggles during galvo operation."
  },

  // 77
  {
    id: "acrylic-aquarium-lids-feeding-ports",
    title: "Laser Cut Custom Acrylic Aquarium Lids & Feeding Port Hatches",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["6.0mm Cell-Cast Clear Acrylic Sheet", "Acrylic Hinges", "Acrylic Solvent Cement (Weld-On 3)"],
    tools: ["CO2 Laser (60W-100W)", "Digital Caliper", "LightBurn Software"],
    summary: "Precision vector cutting of custom rimless aquarium mesh tops, feeding ports, and filter cutout slots in 6mm cast acrylic.",
    image: IMG.acrylic_glow,
    steps: [
      {
        title: "Rimless Tank Measurement & Kerf Setup",
        detail: "Measure tank interior rim dimensions. Apply -0.10mm Kerf Inset in LightBurn to guarantee lid drops flush inside glass tank rim with 0.5mm expansion gap."
      },
      {
        title: "Laser Parameters (CO2 80W - 6mm Cast Acrylic)",
        detail: "Vector Cut: 12 mm/s @ 68% power, 15 PSI Air Assist. Clean air assist yields crystal clear flame-polished cut walls."
      },
      {
        title: "Feeding Hatch Hinge Solvent Bonding",
        detail: "Capillary bond acrylic hinges to feeding port hatch using Weld-On 3 solvent cement. Allow 15 minutes curing."
      }
    ],
    proTips: [
      "Use cell-cast acrylic; extruded acrylic warps under humid aquarium lights.",
      "Include 6mm ventilation slot arrays to prevent humidity fogging."
    ],
    safety: "Acrylic solvent cement requires well-ventilated workspace."
  },

  // 78
  {
    id: "inside-ring-jewelry-micro-engraving",
    title: "Fiber Galvo Micro-Engraving Gold & Silver Jewelry Rings (Inside Ring Engraver)",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["14K Gold / 925 Sterling Silver Wedding Bands"],
    tools: ["30W Fiber Galvo Laser", "Inside-Ring Rotary Attachment", "LightBurn / EZCAD3"],
    summary: "Micro-text vector engraving inside curved metal wedding rings using rotary galvo laser systems.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Inside Ring Rotary Kinematics",
        detail: "Mount ring in specialized inside-ring rotary chuck angled at 45°. Set focal point on interior curved metal surface. Calculate inner ring circumference."
      },
      {
        title: "Laser Parameters (30W Fiber Galvo - 14K Gold)",
        detail: "Speed = 1500 mm/s, Power = 30%, Frequency = 40 kHz, 3 Hatch Passes (0.02mm pitch). Micro-text height = 1.0mm."
      },
      {
        title: "Jeweler's Polish",
        detail: "Ultrasonically wash ring and polish interior band with jeweler's rouge cloth."
      }
    ],
    proTips: [
      "Keep text font bold serif or sans-serif for legibility at 1mm letter height.",
      "Capture precious metal dust in rotary vacuum trap."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 79
  {
    id: "leather-knife-sheaths-grooves",
    title: "Laser Cutting & Engraving Leather Knife Sheaths with Thread Grooves",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    materials: ["3.5mm Heavy Vegetable-Tanned Tooling Leather (9oz)", "Waxed Thread", "Neatsfoot Oil"],
    tools: ["CO2 Laser (50W-80W) or Diode Laser (20W)", "LightBurn Software", "Saddle Stitch Needles"],
    summary: "Vector scoring stitch grooves, punching 1.2mm needle holes, and perimeter cutting heavy 9oz tooling leather knife sheaths.",
    image: IMG.leather_book,
    steps: [
      {
        title: "Veg-Tan Leather Vector Setup",
        detail: "Score a 1.0mm wide stitch groove vector line along seam perimeter, punch 1.2mm round needle holes at 5mm pitch, and cut outer sheath outline."
      },
      {
        title: "Laser Parameters (CO2 60W - 3.5mm Veg-Tan)",
        detail: "Stitch Groove Score: 180 mm/s @ 15% power. Hole Punch: 80 mm/s @ 40% power. Perimeter Cut: 12 mm/s @ 65% power, 35 PSI Air Assist."
      },
      {
        title: "Saddle Stitching & Edge Burnishing",
        detail: "Hand stitch sheath with waxed thread through laser-punched holes. Wet leather welt edge and burnish glossy smooth with wooden slicker."
      }
    ],
    proTips: [
      "Mask leather face with paper tape to prevent smoke halo marks.",
      "Soak finished sheath in Neatsfoot oil to condition leather."
    ],
    safety: "Burnt leather protein emits strong smell. Run active exhaust."
  },

  // 80
  {
    id: "sic-wafer-laser-marking",
    title: "Laser Marking High-Performance Silicon Carbide (SiC) Ceramic Wafers",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "19 min",
    materials: ["4-Inch Silicon Carbide (SiC) Semiconductor Wafers"],
    tools: ["355nm UV Laser or 30W MOPA Fiber Galvo", "Wafer Handling Wand", "Keyence Microscope"],
    summary: "Sub-surface non-damaging serial number marking on ultra-hard Silicon Carbide semiconductor wafers for cleanroom traceability.",
    image: IMG.pcb_etch,
    steps: [
      {
        title: "Silicon Carbide Crystal Hardness Mechanics",
        detail: "SiC has a Mohs hardness of 9.5 and high thermal conductivity. Laser marking must generate a smooth non-particulate optical mark on wafer edge without inducing micro-cracks that cause wafer shattering during chip fabrication."
      },
      {
        title: "Laser Parameters (355nm UV Laser / 30W MOPA)",
        detail: "Speed = 600 mm/s, Power = 18%, Frequency = 80 kHz, Pulse Width = 4ns, Line Hatch = 0.01mm. Ultra-short pulse prevents thermal shock."
      },
      {
        title: "Microscope & Particle Audit",
        detail: "Inspect mark under 100x cleanroom microscope. Zero micro-crack propagation and zero particulate debris verifies semiconductor spec compliance."
      }
    ],
    proTips: [
      "Handle SiC wafers strictly with vacuum wands inside HEPA cleanroom environment.",
      "Mark barcodes on wafer orientation flat/notch region."
    ],
    safety: "UV laser light requires OD6+ 355nm safety goggles."
  },

  // 81
  {
    id: "thick-felt-acoustic-panels",
    title: "CO2 Laser Cutting Thick Felt Sound Insulating Acoustic Wall Panels",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["9mm Compressed PET Acoustic Felt Panels (300kg/m3)"],
    tools: ["CO2 Laser (80W-130W)", "LightBurn Software", "High-Pressure Air Assist (35 PSI)"],
    summary: "Precision 3D geometric cutouts and edge beveling of heavy 9mm PET acoustic felt panels for recording studio sound treatment.",
    image: IMG.laser_badge,
    steps: [
      {
        title: "PET Compressed Felt Thermal Fusion",
        detail: "9mm PET felt consists of recycled polyester fibers compressed under heat. High laser power + 35 PSI air assist melts and seals 9mm cut walls without charring or loose fiber fraying."
      },
      {
        title: "Laser Parameters (CO2 100W - 9mm PET Felt)",
        detail: "Vector Cut: 15 mm/s @ 72% power, 35 PSI High Air Assist, Single Pass."
      },
      {
        title: "Acoustic Wall Tile Assembly",
        detail: "Mount cut 3D geometric felt tiles onto wall using spray adhesive to form sound absorbing acoustic baffles."
      }
    ],
    proTips: [
      "Elevate 9mm felt on blade bed to prevent bottom molten fiber flashback.",
      "100% synthetic PET felt self-seals edges cleanly."
    ],
    safety: "PET felt cutting generates plastic fumes. Exhaust ventilation required."
  },

  // 82
  {
    id: "tpu-flexible-phone-cases",
    title: "Laser Marking Thermoplastic Polyurethane (TPU) Flexible Phone Cases",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "10 min",
    materials: ["Flexible Matte Black TPU Phone Cases"],
    tools: ["20W/30W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3"],
    summary: "High-speed white foaming laser text and logo marking on flexible TPU rubber smartphone cases.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "TPU Polymer Surface Foaming Mechanics",
        detail: "MOPA fiber laser short pulses (4ns-8ns) at high frequency (300 kHz) gently melt TPU rubber surface, expanding micro-bubbles that reflect light into bright snow-white text without burning or rubber stiffening."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber - Black TPU)",
        detail: "Speed = 2200 mm/s, Power = 16%, Frequency = 350 kHz, Pulse Width = 4ns, Line Hatch = 0.03mm cross-hatch. Execution time: 1.5 seconds."
      },
      {
        title: "Flexibility & Scratch Test",
        detail: "Flex TPU case 180°. White laser mark remains bonded without cracking or flaking."
      }
    ],
    proTips: [
      "Do not use high laser power; excess heat burns TPU rubber into sticky yellow residue.",
      "Zero post-processing cleaning required."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 83
  {
    id: "steel-stamping-punches-toolmarking",
    title: "Fiber Galvo Deep Engraving Steel Stamping Punches for Toolmarking",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    materials: ["Hardened D2 Tool Steel Punch Blanks (62 HRC)"],
    tools: ["50W Fiber Galvo Laser", "LightBurn / EZCAD3 3D", "Microscope"],
    summary: "Carving 1.2mm deep raised reversed steel stamping punches into 62 HRC hardened D2 tool steel for hammer marking metal parts.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Hardened D2 Steel Deep Ablation Mechanics",
        detail: "D2 tool steel hardened to 62 HRC resists mechanical cutters. Fiber galvo laser vaporizes hardened steel effortlessly layer by layer without softening steel temper."
      },
      {
        title: "Galvo Deep Ablation Setup (50W Fiber)",
        detail: "Invert design (engrave background away by 1.2mm, leaving text raised). Speed = 900 mm/s, Power = 85%, Frequency = 28 kHz, 120 Hatch Passes (0.015mm pitch, Auto Hatch Rotate)."
      },
      {
        title: "Hammer Stamping Test",
        detail: "Strike steel punch with 2lb hammer onto mild steel plate. Clear 1.2mm deep indent impression confirms punch sharp edge relief."
      }
    ],
    proTips: [
      "Incorporate 15° draft angle on raised letter walls to prevent punch sticking in stamped metal.",
      "Clean punch face with acetone between test strikes."
    ],
    safety: "Active metal fume extraction filter system required."
  },

  // 84
  {
    id: "cardboard-pop-display-stands",
    title: "Laser Cut Custom Cardboard Display Stands & POP Merchandising Racks",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    materials: ["3.0mm B-Flute Corrugated Cardboard Sheets"],
    tools: ["CO2 Laser (60W-100W)", "LightBurn Software", "Bone Folder Folding Tool"],
    summary: "Cutting point-of-purchase (POP) retail display racks with laser-scored perforation folding lines in 3mm corrugated cardboard.",
    image: IMG.cnc2,
    steps: [
      {
        title: "Corrugated Perforation Line Setup",
        detail: "Score fold lines using 4mm cut / 3mm skip dashed perforation vectors. Perforations weaken inner corrugated flute while preserving outer paper liner strength."
      },
      {
        title: "Laser Parameters (CO2 80W - 3mm B-Flute)",
        detail: "Perforation Score: 300 mm/s @ 12% power. Outer Cut: 50 mm/s @ 35% power, 30 PSI High Air Assist."
      },
      {
        title: "Display Stand Assembly",
        detail: "Fold cardboard along perforated lines using bone folder and interlock shelf tabs to form rigid counter display stand."
      }
    ],
    proTips: [
      "Direct high-pressure air assist into cut kerf to snuff out internal corrugated flute embers.",
      "Keep honeycomb bed clear of loose cardboard scraps."
    ],
    safety: "Cardboard can ignite if left unattended. Keep water spray bottle nearby."
  },

  // 85
  {
    id: "peek-surgical-implants-marking",
    title: "Laser Marking Medical Grade PEEK (PolyEther Ether Ketone) Surgical Implants",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "16 min",
    materials: ["Medical Grade PEEK (PolyEther Ether Ketone) Implant Cages"],
    tools: ["355nm UV Laser or MOPA Fiber Laser", "Keyence Microscope", "Autoclave Tester"],
    summary: "Dark high-contrast non-ablative laser marking on medical PEEK spinal implants compliant with FDA biocompatibility standards.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "PEEK Polymer Biocompatibility Photochemistry",
        detail: "PEEK is an advanced thermoplastic used in spinal implants. Laser mark must produce jet-black contrast inside PEEK polymer matrix without altering surface roughness or releasing cytotoxic degradation products."
      },
      {
        title: "Laser Parameters (355nm UV Laser / MOPA Fiber - PEEK)",
        detail: "Speed = 1200 mm/s, Power = 15%, Frequency = 60 kHz, Pulse Width = 8ns, Line Hatch = 0.02mm cross-hatch."
      },
      {
        title: "Autoclave & Cytotoxicity Verification",
        detail: "Subject marked PEEK cage to 100 steam autoclave cycles. Mark remains jet black with zero biocompatibility degradation."
      }
    ],
    proTips: [
      "Use 355nm UV cold laser for zero heat affected zone on PEEK.",
      "Ultrasonically clean implants in citric acid bath."
    ],
    safety: "Wear appropriate laser safety goggles."
  },

  // 86
  {
    id: "cork-yoga-mats-blocks",
    title: "CO2 Laser Engraving & Cutting Cork Yoga Mats & Blocks",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "10 min",
    materials: ["Natural High-Density Cork Yoga Mats (5mm) & Blocks (100mm)"],
    tools: ["CO2 Laser (50W-100W)", "LightBurn Software"],
    summary: "Large-format laser engraving of alignment position grids and yoga mandalas onto natural cork mats.",
    image: IMG.cork_pad,
    steps: [
      {
        title: "Natural Cork Suberin Char Reaction",
        detail: "Cork contains natural suberin wax that turns deep dark brown at low laser energy. Low power engraving yields dark rich contrast with zero surface char dust."
      },
      {
        title: "Laser Parameters (CO2 80W - Natural Cork Mat)",
        detail: "Grid Engrave: 400 mm/s @ 22% power, 254 DPI, Line Interval 0.10mm, Air Assist ON (15 PSI)."
      },
      {
        title: "Post-Engrave Clean Up",
        detail: "Wipe cork mat with damp cloth to remove light surface dust."
      }
    ],
    proTips: [
      "Use 100% natural cork mats; synthetic rubber-bound cork mats char excessively.",
      "Mask cork mat with paper tape for detailed fine vector text."
    ],
    safety: "Cork dust burns readily. Ensure active air flow."
  },

  // 87
  {
    id: "stainless-medical-trays-autoclave",
    title: "Laser Marking Stainless Steel Medical Trays with Autoclave Resistance",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "14 min",
    materials: ["316L Stainless Steel Surgical Instrument Trays"],
    tools: ["30W/50W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3", "Keyence Barcode Verifier"],
    summary: "Passivated black chromium oxide laser marking on 316L medical stainless steel trays resistant to 1000+ autoclave sterilization cycles.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Passivation Annealing Photochemistry",
        detail: "Laser thermal pulses grow a non-ablative Chromium Oxide (Cr2O3) black surface layer without disturbing the underlying stainless steel metal matrix, preserving full corrosion resistance."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber - 316L Metal)",
        detail: "Speed = 250 mm/s, Power = 42%, Frequency = 35 kHz, Pulse Width = 200ns, Line Hatch = 0.012mm cross-hatch. Defocus vertically by +0.3mm."
      },
      {
        title: "Autoclave Sterilization Testing",
        detail: "Subject marked stainless tray to 100 autoclave cycles at 134°C. Mark maintains 100% jet-black contrast and ISO 15415 Grade A barcode readability."
      }
    ],
    proTips: [
      "Degrease stainless steel with pure acetone before laser marking.",
      "Defocusing beam expands thermal footprint for deep smooth black annealing."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 88
  {
    id: "acrylic-control-panels-led-backlit",
    title: "Laser Cut Custom Acrylic LED Backlit Instrument Control Panels",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "15 min",
    materials: ["Dual-Layer Black/White Translucent Cast Acrylic (3mm)", "Deionized Water"],
    tools: ["CO2 Laser (50W-80W)", "LightBurn Software", "Digital Caliper"],
    summary: "Dual-layer acrylic engraving and cutout for illuminated aircraft and automotive control instrument panels.",
    image: IMG.acrylic_glow,
    steps: [
      {
        title: "Dual-Layer Laser Ablation Photochemistry",
        detail: "Dual-layer acrylic features a 0.1mm black top coat over a translucent white base. Laser vaporizes black top layer to reveal white text that glows when backlit by LEDs."
      },
      {
        title: "Laser Parameters (CO2 60W - Dual-Layer Acrylic)",
        detail: "Text Engrave (Top Layer): 350 mm/s @ 14% power, 400 DPI, Line Interval 0.05mm. Panel Cut: 15 mm/s @ 55% power, 20 PSI Air Assist."
      },
      {
        title: "LED Backlight Test",
        detail: "Place panel over LED backplate. Text glows crisp white with zero light bleeding through black top face."
      }
    ],
    proTips: [
      "Clean laser engraved panel with deionized water and dish soap; avoid alcohol to prevent crazing.",
      "Apply Kerf Offset of +0.08mm to switch cutout holes."
    ],
    safety: "PMMA vapor requires active exhaust ducting."
  },

  // 89
  {
    id: "cardboard-shipping-boxes-cartons",
    title: "Laser Cutting & Scoring Custom Cardboard Shipping Boxes & Cartons",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "10 min",
    materials: ["4.0mm C-Flute Corrugated Cardboard Sheets"],
    tools: ["CO2 Laser (60W-100W)", "LightBurn Box Generator", "Bone Folder"],
    summary: "Cutting custom corrugated shipping cartons with laser perforated fold creases and tab locks.",
    image: IMG.cnc2,
    steps: [
      {
        title: "C-Flute Score Line Geometry",
        detail: "Score fold creases using 5mm cut / 4mm skip dashed perforation vectors in LightBurn to allow clean 90° box corner folds."
      },
      {
        title: "Laser Parameters (CO2 80W - 4mm C-Flute)",
        detail: "Perforation Score: 320 mm/s @ 14% power. Perimeter Cut: 40 mm/s @ 42% power, 35 PSI High Air Assist."
      },
      {
        title: "Box Assembly",
        detail: "Fold box along perforated lines and interlock corner flaps to form rigid custom shipping carton."
      }
    ],
    proTips: [
      "Direct high-pressure air assist into cut kerf to extinguish internal flute embers.",
      "Clear loose cardboard scrap dropouts from laser bed."
    ],
    safety: "Cardboard can burn if unattended. Keep fire extinguisher nearby."
  },

  // 90
  {
    id: "copper-heat-pipes-thermal-sinks",
    title: "Fiber Galvo Deep Engraving Copper Heat Pipes & Thermal Sinks",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["Pure Copper Heat Pipes / CPU Heatsink Fins (C11000)"],
    tools: ["50W/100W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3"],
    summary: "High-peak power galvo laser engraving on pure copper CPU heat sinks and heat pipes.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Copper Reflectivity Overcoming Physics",
        detail: "Pure copper reflects 98% of 1064nm light. MOPA short pulse width (4ns-8ns) at high peak power exceeds copper ablation threshold instantly, permitting deep crisp vector marking."
      },
      {
        title: "Laser Parameters (50W MOPA Fiber - Pure Copper)",
        detail: "Speed = 400 mm/s, Power = 90%, Frequency = 22 kHz, Pulse Width = 4ns, 15 Cross-Hatch Passes (0.015mm pitch)."
      },
      {
        title: "Cleaning & Thermal Audit",
        detail: "Wipe copper with acetone. Deep crisp copper marking with zero thermal pipe deformation verifies successful execution."
      }
    ],
    proTips: [
      "Blacken copper surface with dry-erase marker before laser pass to boost initial photon absorption.",
      "Tilt laser beam 5° off-perpendicular to protect galvo optics from back-reflection."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 91
  {
    id: "leatherette-journal-covers-bookmarks",
    title: "Laser Cut Custom Leatherette Journal Covers & Bookmark Inserts",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "9 min",
    materials: ["Laserable Dual-Color Leatherette Sheets (PU / PVC-Free)", "Elastic Band"],
    tools: ["Diode Laser 10W-20W or CO2 Laser 40W", "LightBurn Software"],
    summary: "Production workflow for batch manufacturing dual-tone synthetic leather notebook covers and custom bookmarks.",
    image: IMG.leather_engrave,
    steps: [
      {
        title: "PVC-Free Verification & Raster Engrave",
        detail: "Verify material is PVC-free PU leatherette. Engrave top color layer to expose gold/silver backing. Diode 20W: 4500 mm/min @ 22% power, 318 DPI."
      },
      {
        title: "Perimeter Cut & Elastic Slot Punch",
        detail: "Cut bookmark perimeter and elastic band retention slots: Diode 20W: 800 mm/min @ 75% power, 20 PSI Air Assist."
      },
      {
        title: "Assembly & Wipe",
        detail: "Wipe leatherette with damp microfiber wipe to remove light surface soot, insert elastic band, and fit onto journal cover."
      }
    ],
    proTips: [
      "Clean leatherette edges with baby wipes containing zero oils.",
      "Use heat-resistant tape to hold leatherette flat."
    ],
    safety: "Verify material SDS sheet guarantees 0% PVC composition."
  },

  // 92
  {
    id: "polycarbonate-bullet-resistant-sheets",
    title: "Laser Marking High-Density Polycarbonate (PC) Bullet-Resistant Sheets",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "14 min",
    materials: ["9.5mm High-Impact Polycarbonate (Lexan) Sheets"],
    tools: ["355nm UV Laser or 30W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3"],
    summary: "Sub-surface dark carbonization marking inside bullet-resistant polycarbonate sheets without yellow edge scorching.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "Polycarbonate Carbonization Chemistry",
        detail: "Polycarbonate contains aromatic benzene rings that char yellow under standard CO2 lasers. 355nm UV lasers or MOPA fiber lasers at 60ns pulse width trigger controlled sub-surface carbonization, generating crisp black text inside transparent PC."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber - 9.5mm PC)",
        detail: "Speed = 1000 mm/s, Power = 22%, Frequency = 80 kHz, Pulse Width = 60ns, Line Hatch = 0.025mm cross-hatch."
      },
      {
        title: "Optical Transparency Audit",
        detail: "Inspect mark under microscope. Jet-black text enclosed inside transparent polycarbonate with zero surface cracking verifies proper settings."
      }
    ],
    proTips: [
      "Do not attempt CO2 laser cutting on thick polycarbonate; CO2 produces heavy yellow soot and melted edges.",
      "Use UV cold laser for crystal optical transparency."
    ],
    safety: "Polycarbonate laser processing generates organic fumes. Active carbon extraction required."
  },

  // 93
  {
    id: "wood-model-ship-decks-planking",
    title: "Laser Cut Precision Wood Model Ship Decks & Planking Strips",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    materials: ["1.0mm Limewood / Basswood Veneer Sheets"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W)", "LightBurn Software", "Digital Caliper"],
    summary: "Micro-vector scoring simulated deck planking line art and cutting 1.0mm limewood deck overlays for scale model ships.",
    image: IMG.wood_letter,
    steps: [
      {
        title: "Planking Line Vector Score & Perimeter Cut",
        detail: "Score 0.1mm wide deck planking lines spaced at 2.5mm scale pitch, score nail head dots, and cut outer deck perimeter."
      },
      {
        title: "Laser Parameters (CO2 50W - 1.0mm Limewood)",
        detail: "Deck Line Score: 220 mm/s @ 12% power. Deck Cut: 45 mm/s @ 24% power, 30 PSI High Air Assist."
      },
      {
        title: "Deck Staining & Model Assembly",
        detail: "Wipe scored deck with light teak wood stain. Scored plank lines absorb stain heavily, rendering dark realistic deck seams."
      }
    ],
    proTips: [
      "Use limewood or basswood with tight straight grain for scale model fidelity.",
      "Mask wood with paper tape to eliminate smoke staining."
    ],
    safety: "Wood veneer micro-scraps can ignite if trapped in bed. Keep bed clean."
  },

  // 94
  {
    id: "anodized-industrial-rating-plates-vin",
    title: "Laser Marking Anodized Aluminum Industrial Rating Plates & VIN Tags",
    category: "Fiber/Galvo",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "12 min",
    materials: ["Black Anodized Aluminum Industrial Rating Plates (0.8mm)"],
    tools: ["Fiber Galvo Laser (20W-30W)", "LightBurn Galvo / EZCAD3", "Keyence Barcode Verifier"],
    summary: "High-speed laser marking of serial numbers, electrical ratings, and 2D DataMatrix QR codes on anodized aluminum equipment VIN tags.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "High-Speed Anodic Dye Vaporization",
        detail: "Fiber laser energy vaporizes black organic dye layer, revealing bright silver aluminum oxide substrate underneath at speeds up to 3000 mm/s."
      },
      {
        title: "Laser Parameters (30W Fiber Galvo)",
        detail: "Speed = 2800 mm/s, Power = 25%, Frequency = 40 kHz, Line Hatch = 0.025mm cross-hatch. Tag execution time: 2.2 seconds."
      },
      {
        title: "Barcode ISO 15415 Grade A Verification",
        detail: "Scan 2D DataMatrix code with barcode verifier. High contrast silver-on-black delivers Grade A (4.0/4.0) score."
      }
    ],
    proTips: [
      "Anodized rating plates withstand outdoor weather and salt spray.",
      "Zero post-processing cleaning required."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 95
  {
    id: "titanium-bicycle-frames-component-marking",
    title: "Fiber Galvo Annealing Titanium Bicycle Frames & Component Logo Marking",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    materials: ["Grade 9 Titanium (Ti-3Al-2.5V) Bicycle Tubing"],
    tools: ["30W/50W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3", "Acetone Degreaser"],
    summary: "Non-ablative black oxidation laser annealing on titanium bicycle frame tubes resistant to weathering and fatigue.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Titanium Non-Ablative Annealing Photochemistry",
        detail: "Laser thermal pulses grow a transparent Titanium Dioxide (TiO2) oxide film on titanium tubing without removing metal or inducing stress riser notch points that degrade frame fatigue strength."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber - Titanium Tube)",
        detail: "Speed = 600 mm/s, Power = 35%, Frequency = 160 kHz, Pulse Width = 32ns, Line Hatch = 0.01mm cross-hatch. Defocus vertically by +0.2mm."
      },
      {
        title: "Corrosion & Fatigue Verification",
        detail: "Wipe mark with acetone. Non-ablative jet-black logo remains pristine and scratch-proof."
      }
    ],
    proTips: [
      "Degrease titanium tube with pure acetone before laser pass.",
      "Defocusing expands thermal spot for deep smooth black annealing."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 96
  {
    id: "silicone-gaskets-laboratory-pumps",
    title: "CO2 Laser Cut Custom Silicone Gaskets for Laboratory Pumps",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    materials: ["1.5mm High-Purity Translucent Medical Silicone Sheet"],
    tools: ["CO2 Laser (50W-80W)", "High-Pressure Air Assist (35 PSI)", "Digital Caliper"],
    summary: "Precision vector cutting of chemical-resistant medical silicone gaskets for peristaltic laboratory pumps.",
    image: IMG.silicone_band,
    steps: [
      {
        title: "Translucent Silicone Laser Vaporization Mechanics",
        detail: "CO2 10,600nm laser light is absorbed 100% by translucent silicone, sublimating rubber into white silica (SiO2) micro-dust. High air assist (35 PSI) blows away dust to yield clean 90° cut edges."
      },
      {
        title: "Laser Parameters (CO2 60W - 1.5mm Silicone)",
        detail: "Vector Cut: 22 mm/s @ 48% power, 35 PSI High Air Assist, Single Pass."
      },
      {
        title: "Sanitizing Wash",
        detail: "Rinse cut gasket in warm water to purge silica dust, dry 30 minutes, and autoclave sanitize before pump assembly."
      }
    ],
    proTips: [
      "Diode 455nm lasers pass through translucent silicone without cutting; CO2 laser is required.",
      "Apply -0.05mm Kerf Inset for bolt hole precision."
    ],
    safety: "Silica dust generated during ablation requires dust mask."
  },

  // 97
  {
    id: "abs-plastic-enclosures-white-foaming",
    title: "Laser Marking ABS Plastic Electronic Enclosures with White Foaming",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "10 min",
    materials: ["Matte Black ABS Plastic Project Enclosures"],
    tools: ["20W/30W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3"],
    summary: "High-contrast snow-white foaming laser text and port labels on black ABS plastic project boxes.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "ABS Polymer Foaming Reaction Mechanics",
        detail: "MOPA fiber laser short pulses (4ns-8ns) at high frequency (300-400 kHz) melt ABS surface gently, expanding microscopic gas bubbles ('foaming') that reflect light into bright snow-white text without burning or charring."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber - Black ABS Box)",
        detail: "Speed = 2000 mm/s, Power = 18%, Frequency = 350 kHz, Pulse Width = 4ns, Line Hatch = 0.03mm cross-hatch. Execution time: 1.8 seconds."
      },
      {
        title: "Scratch & Wipe Test",
        detail: "Scrub mark with isopropyl alcohol. Smooth white mark remains 100% indelible."
      }
    ],
    proTips: [
      "Do not use high power; excess laser power burns ABS into sticky yellow soot.",
      "Zero post-processing cleaning required."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 98
  {
    id: "acrylic-stencil-templates-architectural",
    title: "Laser Cut Custom Acrylic Stencil Templates for Architectural Drafts",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "9 min",
    materials: ["1.0mm Clear Cell-Cast Acrylic Sheet"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W)", "LightBurn Software"],
    summary: "Micro-vector cutting of architectural drafting stencil symbol templates in thin 1.0mm clear cast acrylic.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "Drafting Symbol Vector Bridge Setup",
        detail: "Verify all enclosed symbols (doors, furniture, plumbing fixtures) feature stencil bridge connections in LightBurn stencil editor."
      },
      {
        title: "Laser Parameters (CO2 50W - 1.0mm Clear Acrylic)",
        detail: "Vector Cut: 40 mm/s @ 28% power, 20 PSI Air Assist. Clean air assist yields glass-clear polished cut edges."
      },
      {
        title: "Rinse & Wash",
        detail: "Peel protective paper film and wash stencil with warm water and dish soap."
      }
    ],
    proTips: [
      "Use 1.0mm cell-cast acrylic for flexible durable drafting stencils.",
      "Apply Kerf Offset of -0.04mm to fine symbol cutout lines."
    ],
    safety: "PMMA vapor requires active exhaust ducting."
  },

  // 99
  {
    id: "stainless-reusable-straws-drinkware",
    title: "Laser Marking Stainless Steel Reusable Straws & Drinkware",
    category: "Project",
    difficulty: "Beginner",
    laserType: "fiber",
    readTime: "8 min",
    materials: ["304 Food-Grade Stainless Steel Reusable Straws"],
    tools: ["Fiber Galvo Laser (20W-30W)", "Rotary Fixture", "LightBurn Galvo"],
    summary: "Rotary fiber galvo laser annealing of custom name logos on food-grade stainless steel drinking straws.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Small Diameter Rotary Calibration",
        detail: "Mount 6mm diameter stainless straw in rotary chuck. Set rotary diameter to 6.0mm and focus laser on top apex."
      },
      {
        title: "Laser Parameters (30W Fiber Galvo - 304 Stainless)",
        detail: "Speed = 1200 mm/s, Power = 32%, Frequency = 40 kHz, Line Hatch = 0.02mm. Pass 1 creates dark oxided text."
      },
      {
        title: "Sanitizing Rinse",
        detail: "Wash marked straw in warm soapy water. Black mark is 100% dishwasher safe and food safe."
      }
    ],
    proTips: [
      "Use rotary chuck with rubber jaws to avoid scratching stainless straw.",
      "Zero post-processing polish required."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 100
  {
    id: "wooden-jigsaw-puzzles-micro-kerf",
    title: "Laser Cut Custom Wooden Jigsaw Puzzles with Micro-Kerf Interlocking Tabs",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "16 min",
    materials: ["4mm Grade-A Birch Plywood (5-ply)", "UV Printed Photo Substrate", "Puzzle Clear Sealant"],
    tools: ["CO2 Laser (50W-80W)", "LightBurn Jigsaw Puzzle Generator", "LightBurn Software"],
    summary: "Generating 500-piece interlocking wooden jigsaw puzzles with micro-kerf vector cutlines and zero image tearing.",
    image: IMG.wood_action,
    steps: [
      {
        title: "Jigsaw Puzzle Matrix Generator & Kerf Math",
        detail: "Generate 500-piece interlocking jigsaw grid over UV printed photo on 4mm Birch plywood in LightBurn. Set Kerf Offset to 0.00mm; tiny laser kerf (0.08mm) provides perfect satisfying mechanical puzzle tab fit."
      },
      {
        title: "Laser Parameters (CO2 60W - 4mm Photo Plywood)",
        detail: "Vector Cut: 22 mm/s @ 52% power, 35 PSI High Air Assist. High air assist prevents top photo ink charring and blows away cut smoke."
      },
      {
        title: "Breakout & Quality Inspection",
        detail: "Flex cut puzzle board to break pieces apart. Clean 90° cut walls with zero photo paper peeling verify proper power and gas setting."
      }
    ],
    proTips: [
      "Spray UV printed photo face with clear matte acrylic sealer 2 hours BEFORE laser cutting to lock ink fibers.",
      "Cut puzzle from photo side down onto sticky mat to catch small puzzle pieces."
    ],
    safety: "Wood smoke soot requires active exhaust fan."
  }
];
