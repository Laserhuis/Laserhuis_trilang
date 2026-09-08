import { IMG } from "../images.js";

export const BATCH_1 = [
  // 1
  {
    id: "wood-coasters-stucki",
    title: "Mastering Photo Engraving on Birch Plywood with Stucki Dithering",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "12 min",
    materials: ["3mm Grade-A Baltic Birch Plywood (5-ply)", "Blue Painter's Masking Tape (3M 2090)", "Food-Grade Pure Mineral Oil"],
    tools: ["LightBurn DSP/GRBL Software v1.6+", "320-Grit Silicon Carbide Sandpaper", "Static-Free Microfiber Cloth"],
    summary: "Comprehensive optical and chemical methodology for converting high-dynamic-range family photo portraits into ultra-crisp, zero-halo photo engravings on birch wood without charring fine detail. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_action,
    steps: [
      {
        title: "Photometric Pre-Processing & Gamma Correction",
        detail: "Import 16-bit uncompressed TIFF/PNG image into LightBurn. Apply 0.5 Sharpen contrast mask. Adjust midpoint gamma to 0.85 in LightBurn Image Adjust to compress shadow tones and boost midtone micro-details in eye iris and skin pores."
      },
      {
        title: "Dithering Matrix Selection (Why Stucki)",
        detail: "Select 'Stucki' error-diffusion dithering under Layer Settings. Unlike Floyd-Steinberg or Atkinson which generate directional dot patterning at 300+ DPI, Stucki uses a 48-coefficient error propagation kernel over a 5x5 pixel matrix, producing smooth 45° tonal gradients and preventing dot clustering in birch wood grain."
      },
      {
        title: "Spot Size Matching & Line Interval Math",
        detail: "Calculate line interval using laser spot diameter d0 = 0.08mm. Set Line Interval to 0.08mm (exactly 317.5 DPI). Matching line interval to focal spot width eliminates line overlap double-engraving while guaranteeing 100% surface coverage without raw wood stripes."
      },
      {
        title: "Substrate Surface Preparation & Masking",
        detail: "Sand birch surface with 320-grit paper along wood grain to remove mill press glaze. Apply 3M 2090 paper masking with plastic squeegee at 45° angle to purge air bubbles, capturing airborne vaporized wood pitch sap."
      },
      {
        title: "Laser Parameter Execution Across Platforms",
        detail: "Run 20W 455nm Diode at 4500 mm/min @ 28% power; 50W CO2 (10,600nm) at 350 mm/s @ 12% power; 30W Fiber (1064nm) - N/A (1064nm passes through wood without thermal absorption)."
      },
      {
        title: "Chemical Cleanse & Polymer Preservation",
        detail: "Peel masking tape, wipe surface with 99% Isopropyl Alcohol (IPA) on lint-free microfiber to dissolve residual resin, and seal with 5mL food-grade mineral oil. Allow 40 minutes ambient curing at 20°C."
      }
    ],
    proTips: [
      "Birch wood contains lignin which turns yellow when exposed to UV; always store raw boards in dark storage prior to laser processing.",
      "If output appears washed out, increase lightburn image contrast by +12% rather than raising laser power, preserving wood cellular structure."
    ],
    safety: "Wood pyrolysis releases terpenes and PM2.5 particulates. Enclosure active exhaust ventilation (minimum 120 CFM) is required."
  },

  // 2
  {
    id: "slate-coasters-laser",
    title: "Laser Engraving Natural Welsh Slate Coasters with Halftone Matrix",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "10 min",
    materials: ["Natural Welsh Slate Coaster Blanks (10x10cm)", "Satin Clear Polyurethane Spray", "Self-Adhesive 2mm Felt Pads"],
    tools: ["LightBurn Software", "99% Isopropyl Alcohol", "Soft Nylon Bristle Brush"],
    summary: "Engineered method for creating high-contrast bright white permanent vector line art and photographic portraits on natural metamorphic black slate. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.slate_coaster,
    steps: [
      {
        title: "Metamorphic Substrate Cleaning",
        detail: "Degrease slate tile surface using 99% Isopropyl Alcohol and nylon brush to extract trapped quarry dust and skin oils from microscopic surface pores."
      },
      {
        title: "Image Inversion & Dithering Dynamics",
        detail: "Invert artwork in LightBurn (Toggle 'Negative Image' ON). Because laser micro-fractures dark slate into bright white crystalline quartz/mica, bright pixels require laser pulses while shadow areas remain untouched black."
      },
      {
        title: "Hardware Execution Across Laser Types",
        detail: "Diode (455nm 20W): 3000 mm/min @ 42% power, 254 DPI (0.10mm line interval). CO2 (10,600nm 60W): 280 mm/s @ 16% power, 254 DPI. Fiber (1064nm 30W): 1500 mm/s @ 35% power, 200 kHz frequency, 0.05mm line hatch."
      },
      {
        title: "Post-Engrave Thermal Dust Extraction & Sealing",
        detail: "Vacuum loose micro-silica dust. Apply a 2g spray coat of mineral oil or satin polyurethane to deepen background blackness while preserving bright laser white pop."
      }
    ],
    proTips: [
      "Washing slate with a microscopic film of mineral oil boosts optical contrast ratio from 4:1 to 18:1.",
      "Due to non-planar slate surface variance (+/- 0.8mm), set focus at the average planar median height."
    ],
    safety: "Silica dust generated during stone ablation can cause silicosis. Wear N95/FFP2 dust mask during brush cleaning."
  },

  // 3
  {
    id: "acrylic-edge-lit-sign",
    title: "Creating Edge-Lit Acrylic LED Desk Signs via Sub-Surface Vector Scoring",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["4mm Cast Acrylic (PMMA - PolyMethyl MethAcrylate)", "LED Wooden Base (6000K White)", "Deionized Water & Dish Soap"],
    tools: ["60W+ CO2 Laser", "LightBurn Software", "Digital Vernier Caliper (0.01mm resolution)"],
    summary: "Industrial workflow for reverse-side raster engraving and vector edge cutting of cell-cast acrylic plates for edge-lit LED illumination displays. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.neon1,
    steps: [
      {
        title: "Polymer Selection: Cast vs Extruded PMMA",
        detail: "MUST use Cell-Cast PMMA. Extruded acrylic melts into sticky strings and produces clear cuts when engraved. Cast acrylic sublimates directly from solid to gas, leaving a snow-white micro-frosted finish that refracts LED light."
      },
      {
        title: "Horizontal Mirror & Reverse Engraving",
        detail: "Mirror design horizontally in LightBurn. Engrave on the REAR side of the sheet so the smooth front face remains pristine and easy to wipe clean."
      },
      {
        title: "Raster Engrave Parameters (CO2 60W)",
        detail: "350 mm/s @ 14% power, Line Interval 0.05mm (508 DPI), Air Assist OFF (or ultra-low 3 PSI) to prevent cold air ripples on molten acrylic surface."
      },
      {
        title: "Precision Tab Vector Cut & Kerf Calculation",
        detail: "Measure LED base slot width (e.g. 4.15mm). Apply Kerf Offset of +0.12mm to base tab vector cut at 12 mm/s @ 68% power with high-pressure air assist (25 PSI)."
      },
      {
        title: "Stress Crack Mitigation (No Alcohol!)",
        detail: "NEVER clean laser-cut acrylic with Isopropyl Alcohol. Thermal internal stress causes instant crazing (micro-shattering). Clean exclusively with deionized water and 1% mild dish soap."
      }
    ],
    proTips: [
      "Leaving paper protective film on the bottom side during cutting prevents laser beam flash-back marks from metal bed blades.",
      "Flame polishing edges with a hydrogen-oxygen torch restores crystal optical transparency."
    ],
    safety: "PMMA thermal decomposition generates Methyl Methacrylate gas. Active carbon filtration exhaust is required."
  },

  // 4
  {
    id: "fiber-stainless-annealing",
    title: "Black Chromium Oxide Passivation Annealing on Stainless Steel",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "16 min",
    materials: ["304/316 Industrial Stainless Steel Metal Cards", "Acetone Degreaser (C3H6O)"],
    tools: ["30W/50W MOPA Fiber Laser", "EZCAD3 or LightBurn Galvo", "Dual-Red Pointer Focus Gauge"],
    summary: "Metallurgical process for generating permanent jet-black non-ablative oxide surface layers (Cr2O3/Fe3O4) on stainless steel without material removal. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Chemical Degreasing & Surface Oxide Stripping",
        detail: "Wipe stainless steel with pure Acetone using lint-free cloth to purge organic finger lipids that block uniform heat transfer."
      },
      {
        title: "Galvo Optical Focus Precision",
        detail: "Align dual red focal dots to exact focal plane (+/- 0.05mm tolerance). A 100um focal variance alters energy density by 35%."
      },
      {
        title: "Thermal Oxidation Parameter Calibration (50W MOPA)",
        detail: "Speed = 220 mm/s, Power = 45%, Frequency = 35 kHz, Pulse Width = 200ns, Line Hatch = 0.012mm (Cross-Hatch Enabled at 45° and 135°). Defocus vertically by +0.3mm to increase beam spot footprint and accumulate thermal energy without ablation."
      },
      {
        title: "Corrosion Testing & Passivation Verification",
        detail: "Immerse marked part in 5% Salt Spray (NaCl) for 24 hours. Properly annealed Cr2O3 layers exhibit 0% rust or surface pitting."
      }
    ],
    proTips: [
      "Annealing relies on controlled thermal diffusion. If metal warps, lower power by 5% and increase frequency to 45 kHz to reduce heat affected zone (HAZ).",
      "Cross-hatching eliminates visible galvo scan lines, producing a uniform matte black finish."
    ],
    safety: "1064nm NIR galvo beams cause permanent retina damage. Wear OD6+ certified 1064nm laser eyewear."
  },

  // 5
  {
    id: "leather-hat-patches",
    title: "Custom Leatherette Hat Patches with Vector Score & Cut",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "8 min",
    materials: ["Laserable Dual-Color Leatherette Sheet (PVC-Free)", "Blank Snapback Hats", "Heat-Activated Adhesive Film (3M 300LSE)"],
    tools: ["Diode / CO2 Laser", "Hat Heat Press (160°C)", "Microfiber Wipe"],
    summary: "Production workflow for batch-manufacturing dual-tone synthetic leather cap patches with mock-stitch vector borders and heat-activated backing. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.leather_engrave,
    steps: [
      {
        title: "Material Safety Verification",
        detail: "VERIFY material is PVC-free Polyurethane (PU) leatherette. Laser cutting PVC releases toxic Hydrogen Chloride gas (HCl) which destroys laser electronics and lung tissue."
      },
      {
        title: "Surface Engrave Pass",
        detail: "20W Diode: 4200 mm/min @ 22% power; 50W CO2: 400 mm/s @ 12% power. Vaporizes 0.1mm top color layer to reveal gold/black backing."
      },
      {
        title: "Mock-Stitch Vector Scoring",
        detail: "Execute dashed line vector score at 1800 mm/min @ 12% power to simulate hand-stitched perimeter thread."
      },
      {
        title: "Vector Cut & Heat Press Assembly",
        detail: "Cut perimeter at 800 mm/min @ 75% power (20W Diode). Apply 3M 300LSE backing, place on cap press at 160°C (320°F) for 15 seconds at 40 PSI pressure."
      }
    ],
    proTips: [
      "Clean charred leatherette edges with a damp baby wipe containing no oils before heat pressing.",
      "Use heat-resistant kapton tape to hold patches centered on curved hat panels."
    ],
    safety: "Inspect leatherette SDS sheet to guarantee 0% PVC composition."
  },

  // 6
  {
    id: "tio2-white-tile-diode",
    title: "TiO2 Chemical Conversion Marking on White Ceramic Tiles (Norton Method)",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "15 min",
    materials: ["White Glazed Ceramic Wall Tiles (15x15cm)", "Titanium Dioxide Powder (TiO2 Anatase)", "Polyvinyl Alcohol (PVA) Liquid Binder", "Ethanol 95% Solvent"],
    tools: ["HVLP Spray Gun / Airbrush", "Precision Scale (0.1g accuracy)", "Diode Laser 10W-20W"],
    summary: "Photochemical reaction protocol fusing Titanium Dioxide (TiO2) into the ceramic silica glass matrix using blue diode laser light to create indestructible photo tiles. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.laser_badge,
    steps: [
      {
        title: "Chemical Slurry Preparation Math",
        detail: "Mix 10g TiO2 (Anatase grade) + 1g PVA binder + 40ml Ethanol solvent. Agitate thoroughly with magnetic stirrer for 5 minutes until fully dispersed with zero agglomerates."
      },
      {
        title: "Uniform Wet Film Deposition",
        detail: "Spray 15 microns wet film layer onto ceramic tile using airbrush at 20 PSI. Allow Ethanol to evaporate for 12 minutes at 20°C ambient until tile displays a flat chalky white film."
      },
      {
        title: "Laser Photothermal Sintering Dynamics",
        detail: "Diode 10W (455nm): 1200 mm/min @ 85% power, 318 DPI. The localized 825°C focal temperature triggers a Phase Transition from Anatase to Rutile TiO2 while fusing titanium ions directly into the molten ceramic SiO2 glaze matrix."
      },
      {
        title: "Chemical Rinse & Quality Inspection",
        detail: "Rinse tile under warm tap water using dish sponge. Excess unreacted TiO2 powder washes away, revealing a vitrified, scratch-proof jet-black photo mark with Mohs hardness 7+."
      }
    ],
    proTips: [
      "If the black mark scrapes off with a blade, your laser power was too low or speed too high to reach 825°C sintering threshold.",
      "Flat white rust preventative spray paint (containing TiO2) can be substituted for quick prototyping."
    ],
    safety: "TiO2 powder inhalation is a respiratory irritant. Mix slurry inside a fume hood or wear an N95 respirator."
  },

  // 7
  {
    id: "rotary-powder-tumbler",
    title: "Precision Rotary Engraving on Powder-Coated Stainless Steel Tumblers",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "18 min",
    materials: ["Yeti/Hydroflask Style Powder Coated Stainless Steel Tumblers", "Simple Green Degreaser", "Denatured Alcohol"],
    tools: ["Chuck or Roller Rotary Attachment", "Laser Distance Gauge / Rotary Caliper", "CO2 or Diode Laser"],
    summary: "Rotary geometry, steps-per-rotation calibration, and laser ablation settings for stripping tough polyester powder coatings down to mirror steel. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.tumbler,
    steps: [
      {
        title: "Rotary Setup & Steps/Rev Calibration Math",
        detail: "Measure tumbler outer diameter D with caliper (e.g. 88.5mm). Calculate circumference C = PI * D = 278.03mm. Input exact diameter into LightBurn Rotary Setup dialog. Verify rotary steps per revolution (e.g., 10,000 steps = 360°)."
      },
      {
        title: "Surface Cleaning & Leveling",
        detail: "Wipe tumbler exterior with Denatured Alcohol. Mount tumbler in chuck rotary. Place bubble level on top surface along Y axis to guarantee 0° horizontal pitch."
      },
      {
        title: "Powder Coating Laser Ablation Pass",
        detail: "CO2 60W: 300 mm/s @ 28% power, 318 DPI, High Air Assist (20 PSI) to blow away sticky vaporized polyester soot. Diode 20W: 1800 mm/min @ 80% power."
      },
      {
        title: "Post-Laser Chemical Cleanse & Polishing",
        detail: "Apply 2ml Simple Green degreaser to a brass wire brush or Magic Eraser sponge. Scrub off residual baked powder residue to reveal gleaming stainless steel underneath."
      }
    ],
    proTips: [
      "Use chuck rotary rather than roller rotary for tapered tumblers to eliminate slippage and drift during multi-pass vector fills.",
      "Wrap blue painter's tape around chuck jaws to prevent metal jaw scratches on tumbler bases."
    ],
    safety: "Vaporized powder coats yield synthetic polymer fumes. Ensure active extraction."
  },

  // 8
  {
    id: "3d-relief-wood-carving",
    title: "Deep 3D Relief Sculpting in Hardwood Using 16-Bit Grayscale Heightmaps",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "22 min",
    materials: ["Solid American Walnut Board (25mm thick, kiln-dried 8% moisture)", "Danishing Oil / Tung Oil Finish"],
    tools: ["100W+ CO2 Laser with Short Focus Lens (1.5 inch or 2.0 inch)", "LightBurn 3D Slice Mode", "Brass Wire Detail Brush"],
    summary: "Multi-pass 3D laser relief sculpting technique utilizing 16-bit depth maps to carve organic 12mm deep hardwood bas-relief sculptures with zero step-banding. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_relief,
    steps: [
      {
        title: "16-Bit vs 8-Bit Heightmap Depth Dynamics",
        detail: "Export heightmap strictly as 16-bit PNG (65,536 gray shades). 8-bit images only possess 256 gray levels, resulting in harsh stepped stair-casing artifacts across smooth 3D contoured surfaces."
      },
      {
        title: "LightBurn 3D Grayscale Mode Configuration",
        detail: "Set Image Mode to 'Grayscale' and enable '3D Slice' or adjust power scaling linear curve: Black = 100% power (Maximum Depth), White = 0% power (Surface Preservation)."
      },
      {
        title: "Pass Structure & Beam Optics (CO2 100W)",
        detail: "Pass 1 (Deep Sculpt): 250 mm/s @ 70% power, 300 DPI, 1.5\" lens focused 3mm into material. Pass 2 (Cleaning/Smoothing Pass): 400 mm/s @ 20% power, 400 DPI, 2.0\" lens focused on top surface to engrave away remaining depth wood fuzz."
      },
      {
        title: "Carbon Ash Scrubbing & Botanical Oil Sealing",
        detail: "Scrub sculpted wood under running water with a brass wire brush along wood fibers to remove loose carbon residue. Dry thoroughly for 24 hours, then rub with 3 coats of pure Tung Oil."
      }
    ],
    proTips: [
      "Always select kiln-dried hardwood (Walnut, Cherry, Maple) with uniform grain density; pine and cedar softwoods have fluctuating ring densities that carve unevenly.",
      "Orient the heightmap raster direction parallel to the wood grain to minimize fiber tear-out."
    ],
    safety: "Deep wood engraving produces thick heavy smoke and ember potential. Keep air assist ON at 30 PSI and never leave machine unattended."
  },

  // 9
  {
    id: "mopa-color-titanium",
    title: "Spectrum Color Marking on Grade-2 Titanium via Thin-Film Oxide Interference",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "20 min",
    materials: ["Grade 2 Titanium Sheet (1.5mm polished finish)", "Pure Acetone"],
    tools: ["60W MOPA Fiber Laser (2ns - 500ns pulse adjustable)", "EZCAD3 / LightBurn Galvo", "F-Theta 160mm Focal Lens"],
    summary: "Physics-based optical color tuning on titanium by controlling nano-scale TiO2 oxide layer thickness via MOPA laser pulse width and frequency manipulation. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Thin-Film Optical Interference Physics",
        detail: "Color on titanium is created without pigments. Laser heat generates a transparent Titanium Dioxide (TiO2) oxide film. As ambient light hits the film, light reflected from the oxide top surface interferes with light reflected from the metal substrate below. Film thickness (30nm to 350nm) determines which color wavelength is constructively reinforced."
      },
      {
        title: "Surface Preparation Protocol",
        detail: "Ultrasonically clean titanium plate in acetone for 10 minutes. Any finger lipid contamination causes uneven oxide film growth and splotchy color output."
      },
      {
        title: "Color Palette Frequency & Pulse Width Matrix (60W MOPA)",
        detail: "Vibrant Yellow (60nm oxide): 1200 mm/s, 22% power, 350 kHz, 8ns pulse, 0.005mm hatch. Deep Violet (110nm oxide): 800 mm/s, 30% power, 250 kHz, 16ns pulse. Peacock Cyan (180nm oxide): 600 mm/s, 38% power, 180 kHz, 32ns pulse. Rose Magenta (260nm oxide): 450 mm/s, 44% power, 120 kHz, 60ns pulse."
      },
      {
        title: "Environmental Stabilization",
        detail: "Allow titanium piece to cool in room air for 5 minutes. Apply a thin coat of microcrystalline Renaissance Wax to seal the surface against finger oil contamination."
      }
    ],
    proTips: [
      "A 1°C ambient temperature drift or air draft across the laser bed alters color spectrum hue. Use an enclosure with controlled airflow.",
      "Short pulse widths (2ns to 16ns) allow extreme thermal precision without heat spreading to adjacent metal zones."
    ],
    safety: "MOPA laser reflections from specular titanium plates can breach standard safety glasses if angle matches reflection. Use OD6+ fully sealed safety goggles."
  },

  // 10
  {
    id: "glass-etching-tempera",
    title: "Precision Micro-Fracture Glass Etching Using Black Tempera Paint Coating",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    materials: ["Tempered Glass / Glassware / Pint Glasses", "Black Washable Tempera Paint", "Dish Soap"],
    tools: ["CO2 Laser (40W-100W) or Diode Laser (20W)", "Foam Brush", "LightBurn Software"],
    summary: "Controlled thermal shock methodology for generating smooth frosted glassware markings without chipping or micro-shattering glass substrates. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.lab,
    steps: [
      {
        title: "Thermal Absorber Chemistry Coating",
        detail: "Mix 10 parts Black Tempera Paint with 1 part liquid dish soap. Apply a thin, streak-free layer using a foam brush over the glass region. The black pigment absorbs 455nm/10,600nm laser photon energy instantly, while dish soap enables easy water rinse."
      },
      {
        title: "Optical Micro-Fracture Mechanics",
        detail: "When the laser strikes the tempera coat, localized kinetic heat transfer occurs in 20 microseconds, cracking the silica surface layer at a depth of 5 microns without generating large glass shards or dangerous deep stress fractures."
      },
      {
        title: "Laser Parameters Across Systems",
        detail: "CO2 (60W): 220 mm/s @ 18% power, 300 DPI, Line Interval 0.085mm. Diode (20W): 1000 mm/min @ 70% power, 254 DPI. Air assist OFF or minimum trickle (2 PSI) to prevent rapid surface cooling."
      },
      {
        title: "Rinse & Micro-Glass Polish",
        detail: "Rinse pint glass under warm tap water. Dry with towel and rub with fine Scotch-Brite pad to remove microscopic silica dust tags."
      }
    ],
    proTips: [
      "Never engrave lead crystal glass; lead content causes unpredictable thermal expansion and glass cracking.",
      "For curved wine glasses, use a rubber-ringed rotary tool and set focus at the apex of curvature."
    ],
    safety: "Wear protective gloves and eye protection when cleaning etched glass to prevent micro-glass splinter penetration."
  },

  // 11
  {
    id: "anodized-aluminum-cards",
    title: "High-Speed Laser Vaporization of Anodized Aluminum Metal Cards",
    category: "Project",
    difficulty: "Beginner",
    laserType: "fiber",
    readTime: "9 min",
    materials: ["Anodized Aluminum Metal Business Card Blanks (0.4mm thick, Matte Black)", "Isopropyl Alcohol 99%"],
    tools: ["Fiber Galvo Laser (20W-50W) or Diode Laser (10W-20W)", "LightBurn Software / EZCAD"],
    summary: "High-speed laser bleaching and vaporization of the dyed organic anodic layer on aluminum cards to reveal bright silver aluminum substrate. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Substrate Photochemistry Mechanics",
        detail: "Anodized aluminum consists of an aluminum oxide matrix (Al2O3) infused with organic dyes. Laser energy vaporizes the dye molecules without melting the high-melting-point aluminum base (660°C), resulting in ultra-sharp 1000+ DPI silver text."
      },
      {
        title: "Parameter Matrix",
        detail: "Fiber Galvo 30W: 3000 mm/s @ 25% power, 30 kHz frequency, Line Hatch 0.025mm. Diode 20W: 5000 mm/min @ 30% power, 318 DPI. CO2 60W: 500 mm/s @ 12% power, 400 DPI."
      },
      {
        title: "Batch Marking Array Setup",
        detail: "Construct an acrylic alignment jig holding 10 cards in a 2x5 grid. Use LightBurn 'Grid Array' tool with exact offset displacement to batch-mark 10 cards in under 25 seconds."
      }
    ],
    proTips: [
      "Higher laser power turns the aluminum gray instead of bright silver due to minor molten oxidation. Lower power yields brighter white contrast.",
      "Anodized aluminum cards require zero post-processing cleaning."
    ],
    safety: "Reflective silver substrate can bounce galvo beam off-axis during dye vaporization. Wear laser protective eyewear."
  },

  // 12
  {
    id: "rubber-stamps-lightburn",
    title: "Custom Rubber Stamp Production with LightBurn Ramp Shoulder Profiles",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["Laser-Grade Low-Odor Natural Rubber Vulcanized Sheet (2.3mm)", "Wooden Stamp Mount Blocks", "Double-Sided Cushion Mounting Tape"],
    tools: ["CO2 Laser (50W-100W)", "LightBurn Software", "Nylon Scrub Brush"],
    summary: "Precision engraving of high-resolution text and logos into vulcanized rubber sheets with engineered trapezoidal shoulder walls for ink rigidity. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cnc1,
    steps: [
      {
        title: "LightBurn Ramp Profile Mechanics",
        detail: "Enable 'Ramp' mode in LightBurn Layer Settings and set Ramp Length to 0.4mm. Without a ramp shoulder, tall thin rubber characters (like letter stems or period dots) flex and collapse under ink pad pressure, causing smudged ink prints."
      },
      {
        title: "Image Inversion & Mirror Configuration",
        detail: "Toggle 'Negative Image' ON and 'Mirror Horizontal' ON so the stamp impression reads correctly when stamped on paper."
      },
      {
        title: "Laser Ablation Execution (CO2 60W)",
        detail: "Pass 1 (Deep Engrave): 180 mm/s @ 55% power, 400 DPI, Air Assist ON (15 PSI) to clear rubber dust. Pass 2 (Vector Cut Cutout): 8 mm/s @ 70% power."
      },
      {
        title: "Dust Scrubbing & Mounting",
        detail: "Scrub engraved rubber plate under warm soapy water with a nylon brush to remove loose vulcanized rubber ash. Dry completely, stick cushion tape to rear, and mount onto wooden block."
      }
    ],
    proTips: [
      "Always verify rubber is labeled 'Laser-Grade Low-Odor'. Non-laserable rubber produces sulfurous fumes that linger for weeks.",
      "Store rubber sheets flat at 20°C to prevent curling."
    ],
    safety: "Rubber engraving generates strong sulfur vapor. Ensure high-volume extraction (200+ CFM) with activated charcoal gas filtration."
  },

  // 13
  {
    id: "cardboard-packaging-proto",
    title: "Corrugated Cardboard Box Prototyping with Vector Crease & Perforation",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "10 min",
    materials: ["Single-Wall E-Flute Corrugated Cardboard (1.5mm)", "Kraft Board 350gsm"],
    tools: ["CO2 Laser (40W-80W) or Diode Laser (10W-20W)", "Bone Folder Folding Tool"],
    summary: "Methodology for cutting packaging prototypes with laser-scored perforation folding lines and zero edge-engrave soot. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cnc2,
    steps: [
      {
        title: "Vector Fold Line Engineering: Score vs Perforate",
        detail: "For tight 90° box folds, do not use continuous vector lines which engrave through outer paper liners. Use a dashed perforation vector line (e.g., 3mm cut, 2mm skip) to weaken the inner flute without tearing the outer liner."
      },
      {
        title: "High-Speed Laser Parameters",
        detail: "Perforation Score (CO2 60W): 400 mm/s @ 10% power, 30 PSI High Air Assist. Outer Contour Cut: 45 mm/s @ 35% power. High speed prevents heat accumulation in hollow cardboard flutes."
      },
      {
        title: "Folding & Assembly",
        detail: "Use a bone folder along the laser perforated crease line to create sharp, professional 90° box corner folds without cracking Kraft paper fibers."
      }
    ],
    proTips: [
      "Use honeycomb bed pins to hold cardboard dead flat; bowed cardboard changes focal height and leaves un-cut tabs.",
      "Air assist must be directed straight down into the cut line to snuff out internal cardboard flute embers."
    ],
    safety: "Cardboard flutes trap air pockets and engrave readily. NEVER leave cardboard laser cutting unattended. Keep a spray bottle of water nearby."
  },

  // 14
  {
    id: "denim-laser-distressing",
    title: "Precision Laser Distressing & Pattern Fading on Denim Textiles",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["100% Cotton Indigo Dyed Denim Jeans / Jackets", "Textile Starch Spray"],
    tools: ["CO2 Galvo or Flatbed Laser", "LightBurn Software", "Commercial Washing Machine"],
    summary: "Photothermal degradation of indigo dye molecules on cotton fibers to create vintage whiskering, destruction holes, and graphic patterns. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.denim_jacket,
    steps: [
      {
        title: "Photothermal Indigo Vaporization Science",
        detail: "Indigo dye sits on the surface of cotton warp threads. Laser photon energy rapidly heats indigo dye to sublimation temperature (300°C), converting dark blue dye into gas without damaging underlying white cotton core fibers."
      },
      {
        title: "Image Preparation for Fading",
        detail: "Convert design to 8-bit grayscale. Use 'Jarvis' or 'Stucki' dithering at 150 DPI. Low DPI prevents excessive dot overlap that would weaken cotton fabric structural tensile strength."
      },
      {
        title: "Laser Parameters (CO2 80W)",
        detail: "Whiskering / Fading: 600 mm/s @ 14% power, 150 DPI. Heavy Destruction / Ripping: 150 mm/s @ 45% power with high air assist."
      },
      {
        title: "Post-Laser Enzyme Wash",
        detail: "Wash distressed denim in cold water with mild detergent to purge vaporized dye ash and reveal bright white distressed highlights."
      }
    ],
    proTips: [
      "Spandex/Elastane stretch denim contains synthetic rubber fibers that melt into sticky yellow residue under laser. Stick to 98-100% cotton denim.",
      "Iron denim flat before laser scanning to prevent focal variance blur."
    ],
    safety: "Cotton dust fluffs inside laser bed present a flash-fire risk. Vacuum laser cabinet weekly."
  },

  // 15
  {
    id: "brass-coin-3d-fiber",
    title: "Deep 3D Relief Engraving & Stamping Die Creation on Brass Challenge Coins",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "25 min",
    materials: ["Solid Brass Challenge Coin Blanks (40mm x 3mm)", "Brass Cleaner / Brasso Polish", "Acetone"],
    tools: ["50W/100W MOPA Fiber Laser", "3D Slice Software / LightBurn Galvo", "Ultrasonic Cleaner"],
    summary: "Multi-layer 250-pass galvo laser ablation protocol for carving 1.5mm deep 3D sculptural reliefs into solid brass coin stock. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Deep Ablation Physics & 250-Layer Slicing",
        detail: "Convert 3D STL or 16-bit depth map into 250 vector layers sliced at 0.005mm (5 microns) per pass. Each galvo pass vaporizes a 5-micron brass layer, progressively building a 1.25mm deep 3D tactile relief."
      },
      {
        title: "Galvo Hatch Angle Dynamic Rotation",
        detail: "Configure LightBurn 'Auto Hatch Angle Rotate' by +33° on every single pass. Rotating hatch angles prevents directional trench formation and galvo track lines."
      },
      {
        title: "Laser Layer Parameters (50W Fiber Galvo)",
        detail: "Deep Ablation Layer: 1200 mm/s @ 85% power, 35 kHz frequency, 0.02mm hatch pitch. Cleaning Pass (Every 20 layers): 3000 mm/s @ 20% power, 80 kHz frequency to engrave off accumulated brass slag oxidation."
      },
      {
        title: "Chemical Antique Patina Finish",
        detail: "Dip carved coin into Potassium Polysulfide (Liver of Sulfur) solution for 30 seconds to turn brass jet black. Buff high-relief highlights with 2000-grit sandpaper and Brasso to create dramatic 3D contrast."
      }
    ],
    proTips: [
      "Brass ablation generates fine metallic brass dust. Keep galvo F-Theta lens protected with an optical protective window filter.",
      "Brass conducts heat rapidly. Pause process for 30 seconds every 50 passes to prevent coin thermal expansion distortion."
    ],
    safety: "Heavy metallic vapor ablation requires active HEPA metal fume extraction filter system."
  },

  // 16
  {
    id: "ceramic-sub-surface-enamel",
    title: "Sub-Surface Vitrified Enamel Laser Marking on Porcelain Ware",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    materials: ["Glazed Porcelain Plates / Mugs", "Laser Ceramic Marking Paste (CerMark LDM6000)"],
    tools: ["CO2 Laser 50W+", "Airbrush / Foam Applicator", "Ultrasound Cleaner"],
    summary: "High-temperature bonding of thermal ceramic marking compounds onto high-fired porcelain and stoneware glazes. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.laser_badge,
    steps: [
      {
        title: "CerMark Paste Application Math",
        detail: "Dilute CerMark LDM6000 paste 1:1 with Ethanol. Spray a thin 20-micron wet coat onto clean ceramic plate using airbrush at 18 PSI. Allow to dry 5 minutes to a smooth pale pink powder film."
      },
      {
        title: "Thermal Fusion Reaction Mechanism",
        detail: "CO2 10,600nm laser energy heats the CerMark pigment to 1100°C within 10 microseconds, permanently cross-linking molybdenum/glass frit particles into the molten top porcelain glaze layer."
      },
      {
        title: "Laser Parameters (CO2 60W)",
        detail: "120 mm/s @ 45% power, 500 DPI, Line Interval 0.05mm. Slow speed is required to transfer sufficient thermal energy into high-mass ceramic glaze."
      },
      {
        title: "Washing & Quality Assurance",
        detail: "Wash plate in warm water with sponge. Unbonded pink powder washes off, leaving a dishwasher-safe, microwavable jet-black mark."
      }
    ],
    proTips: [
      "Too thin CerMark coating yields light gray marks; too thick coating absorbs laser energy without heating the underlying glaze, flaking off.",
      "Porcelain mugs require focal adjustment across curvature."
    ],
    safety: "CerMark paste contains metal oxides. Avoid skin contact and inhalation during airbrush spraying."
  },

  // 17
  {
    id: "canvas-painting-photo-laser",
    title: "Multi-Layer Paint Vaporization Photo Art on Stretched Canvas",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "14 min",
    materials: ["Artist Canvas Board", "Acrylic Spray Paint (Layer 1 Black, Layer 2 Red, Layer 3 White Primer)"],
    tools: ["Diode Laser 10W-20W or CO2 Laser 40W", "LightBurn Software"],
    summary: "Selective laser vaporization of top paint layers to reveal underlying vibrant color coats, generating multi-color laser photographic art. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.wood_action,
    steps: [
      {
        title: "Paint Layering Protocol & Curing",
        detail: "Spray Canvas with Layer 1 (Jet Black, 2 coats). Allow 2 hours drying. Spray Layer 2 (Vibrant Crimson Red, 2 coats). Allow 2 hours drying. Spray Layer 3 (Flat White Primer, 1 light thin coat). Allow 24 hours full curing at 20°C."
      },
      {
        title: "Dithering & Image Processing Settings",
        detail: "Process image using 'Atkinson' dithering in LightBurn. Invert image. Configure power scaling so white background areas melt top white coat to reveal red, and dark shadow areas melt white+red coats to reveal deep black base."
      },
      {
        title: "Laser Power Density Calibration",
        detail: "Diode 20W: 3500 mm/min @ 18% power for Red depth; 3500 mm/min @ 32% power for Black base depth. DPI set strictly to 254 (0.10mm line interval)."
      },
      {
        title: "Cleanse & UV Protective Sealing",
        detail: "Gently wipe canvas with soft dry microfiber to remove paint ash. Spray coat of clear Satin Acrylic Sealer to protect paint layers."
      }
    ],
    proTips: [
      "Paint MUST be 100% cured for 24 hours. Damp or tacky paint melts into a sticky sludge instead of cleanly sublimating.",
      "Keep laser air assist at low trickle (5 PSI) so paint ash isn't blown back onto sticky laser cuts."
    ],
    safety: "Vaporizing synthetic acrylic paint produces VOC organic fumes. Fume extraction with carbon media is required."
  },

  // 18
  {
    id: "carbon-fiber-plate-cutting",
    title: "Precision Laser Cutting 1.5mm Carbon Fiber Sheets with Zero Edge Delamination",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    materials: ["3K Twill Weave Carbon Fiber Plate (1.5mm thick, Epoxy Matrix)"],
    tools: ["100W+ CO2 Laser or 1064nm Fiber Laser", "High-Pressure Nitrogen/Air Assist System (60 PSI)", "HEPA/Carbon Extraction System"],
    summary: "Industrial parameters for cutting carbon fiber reinforced polymers (CFRP) without thermal matrix epoxy degradation or edge fiber fraying. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.machine_fiber,
    steps: [
      {
        title: "CFRP Thermal Anisotropy Challenges",
        detail: "Carbon fibers possess ultra-high thermal conductivity along fiber axes (800 W/mK) while epoxy resin decomposes at 300°C. High laser energy causes epoxy heat damage far beyond the cut line. High-speed multi-pass cuts are mandatory."
      },
      {
        title: "Multi-Pass High Speed Cut Strategy",
        detail: "Rather than one slow pass, execute 8 fast passes at 35 mm/s @ 85% power (CO2 100W) with 60 PSI high-pressure air assist. Nitrogen gas assist prevents carbon edge combustion oxidation."
      },
      {
        title: "Edge Quality & Matrix Inspection",
        detail: "Inspect edge under 20x optical magnifier. Clean sharp carbon weave with zero void delamination between epoxy layers verifies correct thermal management."
      }
    ],
    proTips: [
      "Submerge carbon fiber sheet under 2mm of water inside a specialized shallow water tray to instantly cool heat affected zone (HAZ) during fiber laser cutting.",
      "Wear nitrile gloves when handling cut carbon plates to prevent micro-carbon splinter insertion."
    ],
    safety: "CRITICAL: Airborne carbon fiber dust is conductive and causes short circuits in electrical electronics. HEPA filter extraction is mandatory."
  },

  // 19
  {
    id: "mother-of-pearl-inlay",
    title: "Laser Cutting Mother-of-Pearl Nacre Shell Veneers for Guitar Inlays",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    materials: ["Natural Mother of Pearl (Nacre) Shell Sheets (0.3mm thick on transfer paper)", "Cyanoacrylate Glue (CA Medium)", "Ebony Wood Fretboard"],
    tools: ["CO2 Laser (40W-60W) with 1.5\" Focal Lens", "LightBurn Software", "Jeweler's Loupe"],
    summary: "Precision vector cutting of fragile aragonite calcium carbonate shell veneers and matching wood pocket engraving for musical instrument luthiery. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.shell_mother_pearl,
    steps: [
      {
        title: "Crystalline Aragonite Thermal Fragility",
        detail: "Nacre shell consists of hexagonal aragonite platelets bound by organic conchiolin proteins. High heat shatters shell. Short focal length lens (1.5\") provides a tiny 0.06mm spot size for rapid cool kerf vapor cutting."
      },
      {
        title: "Shell Cut Parameters (CO2 50W)",
        detail: "Vector Cut: 18 mm/s @ 28% power, 25 PSI High Air Assist. Execute 2 light passes rather than 1 heavy pass to prevent shell fracturing."
      },
      {
        title: "Matching Fretboard Cavity Pocket Engrave",
        detail: "Engrave matching pocket in Ebony wood: 250 mm/s @ 35% power, 0.05mm line interval. Apply -0.05mm Kerf Inset to shell vector so inlay snaps flush into fretboard pocket."
      },
      {
        title: "Inlay Press & Sanding",
        detail: "Glue shell inlay into wood pocket using black-dyed CA glue. Allow 30 minutes curing, then sand flush with 400 through 1200 grit silicon carbide paper."
      }
    ],
    proTips: [
      "Stick shell sheet onto double-sided transfer tape before cutting to catch tiny delicate inlay pieces.",
      "Natural shell color variations look most dramatic when oriented parallel to fretboard length."
    ],
    safety: "Calcium carbonate shell dust is highly toxic to lungs. Wear P3/N99 respirator during sanding."
  },

  // 20
  {
    id: "silicone-wristband-laser",
    title: "Laser Engraving & Paint Filling Custom Medical Silicone Wristbands",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "9 min",
    materials: ["100% Medical-Grade Silicone Wristbands", "Silicone-Based Ink / Oil-Based Paint Pens"],
    tools: ["CO2 Laser 40W+", "LightBurn Software", "Denatured Alcohol Wipes"],
    summary: "Deep laser ablation into silicone rubber bands followed by contrast ink infilling for durable custom medical alerts and event wristbands. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.silicone_band,
    steps: [
      {
        title: "Silicone Thermal Stability Mechanics",
        detail: "Silicone (Polydimethylsiloxane) possesses high heat resistance (up to 300°C). CO2 10,600nm laser light cleanly ablates silicone, producing white silicon dioxide silica dust in deep engraved channels."
      },
      {
        title: "Laser Engrave Parameters (CO2 60W)",
        detail: "300 mm/s @ 35% power, 318 DPI, High Air Assist (25 PSI) to purge sticky white silica dust from deep 0.4mm vector text channels."
      },
      {
        title: "Ink Infill Protocol",
        detail: "Wipe engraved band with Denatured Alcohol. Smear oil-based paint or silicone ink across engraved channels using a squeegee. Allow 15 minutes partial drying, then wipe band surface clean with alcohol wipe, leaving bold ink inside channels."
      }
    ],
    proTips: [
      "Diode 455nm lasers pass directly through clear/white silicone without absorption. CO2 10,600nm is required for silicone rubber.",
      "Use a wooden alignment pin jig to stretch wristbands flat during laser engraving."
    ],
    safety: "Silicone laser ablation produces fine silica (SiO2) micro-dust. Wear dust mask during cleaning."
  },

  // 21
  {
    id: "marble-granite-engraving",
    title: "Deep Inscription & Photo Engraving on Polished Black Granite Memorials",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "17 min",
    materials: ["Polished Black Shanxi Granite Slab (20mm thick)", "White Monument Litho Highlighter Paint"],
    tools: ["CO2 Laser 80W-150W", "LightBurn Software", "Squeegee / Microfiber Towel"],
    summary: "Precision micro-spalling methodology for permanently etching fine serif typography and photographic portraits onto polished black memorial granite. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.granite_monument,
    steps: [
      {
        title: "Granite Quartz Spalling Mechanics",
        detail: "Laser pulses heat quartz/feldspar crystals in granite instantly. Thermal stress causes local surface micro-fracturing ('spalling'), popping off 10-micron stone chips to leave bright white frosted contrast against mirror black polish."
      },
      {
        title: "Dithering Algorithm & Spot Size Math",
        detail: "Use 'Jarvis' dithering algorithm in LightBurn. Set Resolution strictly to 200 DPI (0.127mm line interval). Higher DPI causes overlapping thermal zones that shatter granite glaze into dull grey smudges."
      },
      {
        title: "Laser Parameters (CO2 100W)",
        detail: "400 mm/s @ 18% power, Air Assist OFF (prevents cooling of micro-fracturing shock points). Single pass execution."
      },
      {
        title: "Litho Paint Infill for Maximum Sunlight POP",
        detail: "For outdoor memorials exposed to rain, rub white Litho Monument Paint across laser etched areas. Squeegee off surface excess. Paint locks into micro-fractures, boosting outdoor wet readability."
      }
    ],
    proTips: [
      "Always test stone density on a scrap corner; natural granite quartz composition varies across quarry batches.",
      "Do not clean laser-engraved granite with oil products; oil soaks into quartz micro-fractures and turns white marks dark grey."
    ],
    safety: "Heavy stone slabs require proper ergonomic lifting gear and stable machine bed support (100kg+ capacity)."
  },

  // 22
  {
    id: "mirror-glass-back-etching",
    title: "Rear-Surface Silver Coating Laser Vaporization on Decorative Glass Mirrors",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "11 min",
    materials: ["Standard Glass Wall Mirror (4mm thick)", "Black Acrylic Backing Spray Paint", "Glass Cleaner"],
    tools: ["Diode Laser 10W-20W or CO2 Laser 50W", "LightBurn Software"],
    summary: "Engineered removal of rear protective paint and reflective silver coating from mirrors without damaging the front glass surface, allowing LED backlighting. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.glass_mirror,
    steps: [
      {
        title: "Rear Silver Vaporization Photochemistry",
        detail: "Mirrors consist of front glass, silver reflective layer, and dark protective grey backing paint. Placing mirror REAR-SIDE UP allows blue diode (455nm) or fiber (1064nm) laser energy to vaporize dark backing paint and silver layer cleanly."
      },
      {
        title: "Artwork Preparation & Inversion",
        detail: "Mirror image horizontally in LightBurn. Invert image if doing photographic engraving so silver layer remains where highlights belong."
      },
      {
        title: "Laser Parameters (20W Blue Diode)",
        detail: "3200 mm/min @ 45% power, 300 DPI, Air Assist ON (15 PSI). CO2 60W (engraving rear): 350 mm/s @ 14% power."
      },
      {
        title: "Backlight Paint Infill or LED Frame Mounting",
        detail: "Wipe glass rear with isopropyl alcohol. Spray clear transparent stained glass paint or place an RGB LED panel behind clear glass areas to create illuminated mirror art."
      }
    ],
    proTips: [
      "Placing mirror FRONT-SIDE UP under a CO2 laser shatters glass due to front reflection and thermal shock. Always engrave rear side.",
      "Put black damp paper beneath mirror to catch stray laser pass-through light."
    ],
    safety: "Vaporized silver/lead mirror paint backing requires active fume extraction with HEPA filtration."
  },

  // 23
  {
    id: "eva-foam-cosplay-bevels",
    title: "Precision Laser Cutting & Angle Bevel Scoring High-Density EVA Foam",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["High-Density EVA Cosplay Foam Sheets (5mm & 10mm thickness, 100kg/m3)", "Contact Cement Adhesive"],
    tools: ["CO2 Laser 60W-130W", "LightBurn Software", "Heat Gun (1500W)"],
    summary: "Clean vector cutting and v-groove score lines in thick high-density ethylene-vinyl acetate (EVA) foam for costume armor construction. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.foam_insert,
    steps: [
      {
        title: "EVA Thermal Vaporization Mechanics",
        detail: "EVA foam melts and expands rapidly when heated. High power + high cutting speed combined with strong 40 PSI air assist freezes molten foam edges into clean 90° smooth rubberized cut walls."
      },
      {
        title: "Laser Parameters (10mm High-Density EVA - CO2 100W)",
        detail: "Contour Cut: 18 mm/s @ 65% power, Focal point set 4mm inside foam body, 45 PSI Air Assist. Partial V-Groove Score: 80 mm/s @ 15% power."
      },
      {
        title: "Heat Gun Cell Sealing",
        detail: "Pass 400°C heat gun quickly over laser-cut foam edges. Heat collapses open microscopic foam cells, smoothing edge texture to accept primer paint without soaking up glue."
      },
      {
        title: "Armor Bevel Folding & Contact Cement Bonding",
        detail: "Apply contact cement inside laser v-grooves, allow to dry 5 minutes until tacky, then press cut edges together to lock rigid 45° angled armor seams."
      }
    ],
    proTips: [
      "Diode lasers require black or dark colored EVA foam; white/pink EVA foam reflects 455nm diode light.",
      "Focusing 3.0\" focal lens provides long beam waist required for perpendicular cut edges on 10mm+ foam."
    ],
    safety: "EVA foam pyrolysis produces toxic acetic acid and vinyl monomer vapors. Exhaust ducting outside is required."
  },

  // 24
  {
    id: "cork-coaster-marking",
    title: "High-Speed Vector Scoring & Cutting Natural Cork Beverage Coasters",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "7 min",
    materials: ["Natural High-Density Grain Cork Sheets (4mm thick)", "Transfer Tape Masking"],
    tools: ["Diode Laser 10W-20W or CO2 Laser 40W+", "LightBurn Software"],
    summary: "Parameters for crisp dark brown laser marking and engrave-free contour cutting of natural suberin-rich cork wood sheets. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.cork_pad,
    steps: [
      {
        title: "Suberin Matrix Photothermal Reaction",
        detail: "Cork consists of dead oak bark cells bonded by natural suberin wax. Suberin chars at low temperature (200°C), producing rich dark chocolate brown contrast with modest laser energy."
      },
      {
        title: "Laser Parameters (20W Diode)",
        detail: "Engrave Logo: 4000 mm/min @ 22% power, 254 DPI, Line Interval 0.10mm. Vector Cut (4mm Cork): 600 mm/min @ 70% power, 30 PSI Air Assist."
      },
      {
        title: "Post-Cut Clean Up",
        detail: "Gently wipe cork edges with a damp cloth. Natural cork absorbs water quickly, so do not soak in water."
      }
    ],
    proTips: [
      "Rubber-bound recycled cork contains synthetic binders that char heavily; always source 100% natural grain suberin cork.",
      "Masking cork with paper tape prevents dark smoke halo rings around detailed vector text."
    ],
    safety: "Cork dust burns rapidly. Ensure active air flow and clear bed of loose cork particles."
  },

  // 25
  {
    id: "pcb-copper-laser-ablation",
    title: "Direct Laser PCB Prototyping via UV / Fiber Laser Copper Vaporization",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "22 min",
    materials: ["FR4 Double-Sided Copper Clad PCB Laminate (35um copper thickness / 1oz)"],
    tools: ["355nm UV Laser or 30W Fiber Galvo Laser", "LightBurn / EZCAD3 Software", "Digital Multimeter"],
    summary: "Direct non-chemical isolation routing and copper ablation on FR4 circuit boards using high-frequency short-pulse laser galvo systems. This technique is widely used in professional settings to create high-quality, custom products such as personalized signage, bespoke gifts, and industrial marking solutions.",
    image: IMG.pcb_etch,
    steps: [
      {
        title: "Copper Ablation Threshold Physics",
        detail: "Copper has ultra-high thermal conductivity (400 W/mK) and reflects 95% of 1064nm NIR light. Short pulse widths (<10ns) or 355nm UV laser light are required to exceed copper's thermal ablation threshold without engraving the FR4 fiberglass substrate below."
      },
      {
        title: "Gerber to Vector Isolation Outline Conversion",
        detail: "Export PCB trace design from KiCad/Altium as Gerber format. Import into LightBurn and apply 'Offset Isolation Trace' tool with 0.15mm clearance width around copper pads."
      },
      {
        title: "Laser Layer Parameters (30W Fiber Galvo - 1064nm MOPA)",
        detail: "Isolation Trace Ablation: 450 mm/s @ 90% power, 20 kHz, 8ns pulse width, Hatch 0.01mm (Cross-Hatch x4 passes). FR4 Depth Clearance: 1500 mm/s @ 40% power, 60 kHz."
      },
      {
        title: "Continuity & Short Circuit Verification",
        detail: "Clean board with Isopropyl Alcohol and check trace isolation using digital multimeter resistance mode (verify >10 MegaOhms between adjacent isolated traces)."
      }
    ],
    proTips: [
      "Applying a thin coat of matte black spray paint onto copper before laser ablation drops reflection from 95% down to 10%, drastically accelerating copper removal.",
      "Solderability is restored instantly after acetone paint removal."
    ],
    safety: "Vaporized copper and FR4 epoxy glass dust produce hazardous particulates. HEPA filter fume extraction is mandatory."
  }
];
