import { IMG } from "../images";

export const BATCH_3 = [
  // 51
  {
    id: "acrylic-keyboard-plate",
    title: "Precision Laser Cutting Custom Mechanical Keyboard Switch Plates in Cast Acrylic",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["1.5mm & 4.0mm Cell-Cast Clear Acrylic Sheets", "Cherry MX Keyboard Switches"],
    tools: ["CO2 Laser (50W-80W)", "Digital Vernier Caliper (0.01mm resolution)", "LightBurn Software"],
    summary: "Precision vector cutting of 14.00mm square keyboard switch cutouts with kerf compensation for snap-fit Cherry MX mechanical switches.",
    image: IMG.acrylic_blue,
    steps: [
      {
        title: "MX Switch Cutout Geometry & Kerf Compensation",
        detail: "Standard Cherry MX switches require a 14.00mm x 14.00mm (+0.05mm/-0.00mm) square hole with corner retaining notch tabs. Measure laser kerf (e.g., 0.14mm) and apply -0.07mm Kerf Inset to guarantee switches click in firmly without popping out during keycaps pulling."
      },
      {
        title: "Laser Cutting Parameters (CO2 60W - 1.5mm Cast Acrylic)",
        detail: "Vector Cut: 18 mm/s @ 45% power, Air Assist set to 12 PSI. Air assist prevents melted corner tabs while preserving clear polished cut edges."
      },
      {
        title: "Switch Snap-Fit Dimensional Verification",
        detail: "Press Cherry MX switch into test hole cutout. A crisp mechanical snap sound and 0.0mm wobble verifies proper kerf setting."
      }
    ],
    proTips: [
      "Use cell-cast acrylic rather than extruded acrylic to prevent stress cracking around tight switch corner notches.",
      "Leave protective paper backing on acrylic during cutting to catch flare flashback."
    ],
    safety: "PMMA vapor requires active exhaust ducting."
  },

  // 52
  {
    id: "rotary-crystal-champagne-flutes",
    title: "Rotary Engraving Crystal Champagne Flutes with Wet Paper Masking",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    materials: ["Lead-Free Crystal Glass Champagne Flutes", "Paper Towel / Masking Paper", "Water"],
    tools: ["CO2 Laser (40W-60W)", "Chuck Rotary Attachment", "LightBurn Software"],
    summary: "Rotary glass laser etching on fragile ultra-thin crystal flutes using wet paper masking to prevent thermal glass shattering.",
    image: IMG.glass_etch,
    steps: [
      {
        title: "Crystal Thermal Shock Vulnerability",
        detail: "Crystal glass has thin 1.2mm walls and high thermal expansion. Laser thermal pulse shock causes micro-fracturing cracks to propagate across thin glass walls. Wet paper towel dampens thermal shock."
      },
      {
        title: "Wet Masking Application",
        detail: "Wrap a single layer of wet paper towel smoothly around crystal flute glass region. Squeegee out air bubbles. Water layer absorbs excess thermal shock while laser vaporizes black ink/paper onto glass surface."
      },
      {
        title: "Rotary Parameters (CO2 50W)",
        detail: "Mount flute in rubber-jawed chuck rotary. Speed = 250 mm/s, Power = 14%, 254 DPI, Air Assist OFF."
      },
      {
        title: "Rinse & Inspection",
        detail: "Rinse flute under tap water and peel paper towel. Micro-frosted crisp etching without deep cracks or glass shards."
      }
    ],
    proTips: [
      "Always level rotary chuck axis so glass surface remains parallel to X laser rail.",
      "Engrave at 254 DPI rather than 400 DPI to avoid glass heat accumulation."
    ],
    safety: "Handle fragile glassware gently. Wear safety goggles."
  },

  // 53
  {
    id: "mopa-color-stainless-spectrum",
    title: "MOPA Fiber Color Marking on Stainless Steel: Building a Repeatable Color Matrix",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "22 min",
    estimatedTime: "20 min surface preparation, 15 min color matrix test run",
    targetMaterial: "316L / 304 Mirror-Polished Stainless Steel Sheet",
    materials: [
      "316L or 304 Mirror-Polished Stainless Steel Sheet",
      "Pure Acetone Degreaser & Microfiber Wipes",
      "Microcrystalline Protective Wax"
    ],
    tools: [
      "60W MOPA Fiber Galvo Laser (1064nm, 2ns–500ns pulse width range)",
      "LightBurn Galvo or EZCAD3 Software",
      "F-Theta Scan Lens (160mm focal length)",
      "Precision Bed Fixture & Dual Red-Dot Focus Indicator"
    ],
    summary: "Technical guide for achieving vibrant, repeatable structural colors (Gold, Magenta, Blue, Green) on stainless steel via MOPA thin-film oxide interference, detailing pulse-width modulation, frequency tuning, grid test matrices, and surface cleanliness protocols.",
    image: IMG.metal_macro,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers with adjustable pulse width control (2ns to 500ns). Independent control over pulse duration and frequency is required to modulate surface heat accumulation without surface ablation.",
      unsuitableLasers: "Conventional Q-switched fiber lasers with fixed pulse duration cannot reliably access the full chromatic interference spectrum. Diode (450nm) and CO2 (10.6µm) lasers cannot produce thin-film oxide interference on bare stainless steel.",
      minimumSpecs: "MOPA fiber galvo engine, F-Theta scan lens, rigid column with fine Z-axis resolution, HEPA local fume extraction.",
      safetyHazards: "1064nm NIR galvo beams generate specular reflections from mirror-polished steel.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Color generation on stainless steel is an optical interference phenomenon produced by transparent thin-film chromium oxide (Cr2O3) layers ranging from 30nm to 300nm in thickness. Structural color vibrancy depends on alloy purity, surface polish, ambient airflow, beam quality, focus, pulse width, frequency, scan speed, power, and line interval. Prefer 316L or 304 stainless steel with a #8 mirror finish. Brushed satin finishes produce diffuse reflections that mute color saturation.",
    designPrep: "In LightBurn Galvo or EZCAD3, design a 5x5 grid of 10mm test squares. Assign a distinct parameter profile to each square, keeping focal distance and hatch spacing (0.005mm–0.010mm) constant while stepping pulse duration (e.g. 30ns to 200ns) and frequency (e.g. 80kHz to 250kHz). Enforce bi-directional cross-hatching at 0° and 90°.",
    laserSetup: "Mount the mirror-polished plate perfectly flat in a zero-play pocket fixture. Align focus precisely on the top metal surface using the dual red-dot indicators. Ensure no draft from cooling fans blows directly across the plate during processing, as micro-thermal fluctuations shift oxide layer thickness.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Do not blow compressed air directly across the marking area during color generation. Forced convective air currents cool the thermal boundary layer unpredictably, causing uneven color gradients."
    },
    exhaust: {
      configuration: "Enclosure local exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "60W MOPA Fiber Galvo (1064nm)",
          power: "35% - 48% controller setting",
          speed: "600 - 1200 mm/s",
          passes: "1 - 2 (Bi-directional cross-hatch)",
          lineInterval: "0.005mm - 0.008mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "Exact focal plane (0.0mm)",
          frequency: "90 - 200 kHz",
          pulseWidth: "32ns (Green) / 60ns (Blue) / 100ns (Red) / 200ns (Gold)",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm)",
          power: "Unsuitable for reliable broad-spectrum color",
          speed: "N/A",
          passes: "N/A",
          lineInterval: "N/A",
          airAssist: "Off",
          focusOffset: "N/A",
          frequency: "N/A",
          pulseWidth: null,
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        }
      },
      sharedParameters: {
        provenance: "REFERENCE_STARTING_POINT",
        sourceName: null,
        sourceReference: null,
        physicallyTested: false,
        lastEditorialReview: "2026-11"
      },
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Because oxide growth is sensitive to thermal buildup and alloy heat capacity, never assume colors are universal internet recipes. Run a controlled 2-variable parameter matrix on a sample from your exact material lot. Keep focus and hatch pitch fixed; step pulse width across rows and frequency across columns. Inspect the finished matrix under diffuse daylight or 5000K CRI 95+ neutral light.",
    steps: [
      {
        title: "Substrate Degreasing & Solvent Evaporation",
        action: "Wipe mirror-polished 316L sheet with pure acetone or 99% Isopropyl Alcohol using a lint-free microfiber cloth. Solvent Safety: Acetone and IPA are highly flammable. Work in a well-ventilated area away from open sparks or laser beams. Allow the surface to dry completely before firing the laser.",
        why: "Microscopic oil films or fingerprints carbonize under laser heat, blocking oxygen contact and turning vibrant interference colors into muddy gray patches.",
        lookFor: "Streak-free, optically pristine metal surface.",
        possibleFailure: "Leaving fingerprint oils results in spotty brown discoloration across target color blocks.",
        detail: "Degrease in a single wiping motion and verify surface dryness under reflected light."
      },
      {
        title: "Rigid Bed Fixturing & Focus Convergence",
        action: "Clamp the stainless sheet in a low-profile aluminum fixture. Adjust galvo Z-height until the dual red focus dots align precisely into a single point on the top metal face.",
        why: "A focal displacement of merely 50µm alters power density by over 20%, shifting oxide film thickness and altering the resulting color hue.",
        lookFor: "Single converged red focal dot across all four sheet corners.",
        possibleFailure: "A tilted plate creates a rainbow gradient across a square intended to be solid blue."
      },
      {
        title: "LightBurn Galvo Matrix Execution",
        action: "Send the 5x5 test grid to the MOPA galvo controller. Execute the run while monitoring enclosure fume extraction.",
        why: "Multi-pass cross-hatching at dense line intervals (0.005mm) delivers steady, uniform heat input, allowing chromium ions to bind with ambient oxygen into a uniform Cr2O3 dielectric layer.",
        lookFor: "Smooth, vibrant color blocks forming silently without bright sparking or metal sputtering.",
        possibleFailure: "Sparks or crackling audio indicates excess power causing metal ablation rather than thin-film oxidation."
      },
      {
        title: "Chromatic Inspection & Protective Wax Sealing",
        action: "Remove the marked sample and inspect under neutral lighting. Once cooled, apply a thin coat of microcrystalline wax with a soft cloth to protect against skin oil contamination.",
        why: "Thin-film interference colors shift slightly if skin oils fill the microscopic surface structure. Microcrystalline wax seals the surface without altering refractive index.",
        lookFor: "Vibrant, stable color rendition resistant to finger touch.",
        possibleFailure: "Color appears dull or disappears when touched with bare fingers until sealed."
      }
    ],
    proTips: [
      "Short pulse durations (30ns–60ns) produce blue and green tones; longer pulse durations (150ns–200ns) produce gold and magenta tones.",
      "Record the ambient room temperature and material lot number alongside your winning matrix parameters for full production repeatability."
    ],
    troubleshooting: [
      {
        issue: "Color shifts from blue to dull gray across the same square",
        fix: "Check sheet flatness with a dial indicator and eliminate drafts from external room cooling fans."
      },
      {
        issue: "Splotchy brown spots inside bright red or gold blocks",
        fix: "Repeat acetone cleaning protocol with clean microfiber wipes; never touch cleaned surfaces with bare skin."
      },
      {
        issue: "Surface feels rough or shows metallic debris under fingernail test",
        fix: "Increase scan speed by 20% or reduce laser power percentage; you have crossed the thermal threshold into ablative etching."
      }
    ],
    safety: "Ensure galvo enclosure interlocks are engaged. Certified 1064nm eyewear must be worn during setup or open alignment modes."
  },

  // 54
  {
    id: "leather-embossing-die-fabrication",
    title: "Fabricating Brass Leather Bookbinding Embossing Dies with Fiber Galvo",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    materials: ["Solid Brass Plate Block (8mm thickness)", "Acetone", "Leather Book Covers"],
    tools: ["50W Fiber Galvo Laser", "LightBurn / EZCAD3 3D", "Hot Foil Stamping Press"],
    summary: "Deep 3D galvo engraving of raised brass embossing dies for hot foil stamping and leather bookbinding covers.",
    image: IMG.brass_coin,
    steps: [
      {
        title: "Die Geometry Inversion & Draft Angle",
        detail: "Invert design (engrave background down by 1.8mm, leaving text raised). Apply 12° draft angle to raised letter sidewalls to allow clean hot die release from leather without tearing book cover grain."
      },
      {
        title: "Multi-Pass Deep Ablation (50W Fiber)",
        detail: "Speed = 1000 mm/s, Power = 82%, Frequency = 30 kHz, 180 Hatch Passes (0.015mm pitch, Auto Hatch Angle Rotate +33°). Execute cleanup pass every 20 deep passes."
      },
      {
        title: "Hot Foil Stamping Test",
        detail: "Mount brass die into hot foil press at 110°C (230°F). Press onto leather book cover with gold foil sheet for 3 seconds. Crisp gold foil impression verifies die depth."
      }
    ],
    proTips: [
      "Brass ablation generates metallic dust; keep galvo lens protected with optical filter glass.",
      "Polish raised die faces with 2000-grit paper before foil press testing."
    ],
    safety: "Active metal fume extraction filter system required."
  },

  // 55
  {
    id: "kapton-polyimide-film-laser",
    title: "Laser Cutting Ultra-Thin Kapton Polyimide Film for Aerospace Electronics",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "11 min",
    materials: ["50-Micron Dupont Kapton Polyimide Film (Amber)", "Silicone Sticky Mat Base"],
    tools: ["CO2 Laser (40W-60W) or 355nm UV Laser", "LightBurn Software"],
    summary: "Micro-vector cutting of high-temperature Kapton polyimide films for flexible printed circuits (FPC) and aerospace thermal insulation.",
    image: IMG.cnc2,
    steps: [
      {
        title: "Polyimide Thermal Stability Chemistry",
        detail: "Kapton polyimide withstands temperatures up to 400°C without melting. CO2 laser light (10,600nm) vaporizes Kapton cleanly, but requires high speed + low power to prevent carbon edge deposition."
      },
      {
        title: "Sticky Mat Retention",
        detail: "Secure 50-micron Kapton film flat onto a tacky silicone mat. Air assist blowers can easily flutter loose film, causing distorted cut vectors."
      },
      {
        title: "Laser Parameters (CO2 50W - 50um Kapton)",
        detail: "Vector Cut: 150 mm/s @ 12% power, 15 PSI Air Assist. Single pass execution yields zero char carbon edge."
      },
      {
        title: "Microscope Inspection",
        detail: "Inspect cut Kapton vector edges under 40x optical microscope. Clean yellow polyimide edge without carbon burrs verifies correct settings."
      }
    ],
    proTips: [
      "355nm UV cold laser produces zero heat affected zone (HAZ) on Kapton.",
      "Wipe cut Kapton with Isopropyl Alcohol to remove microscopic vapor residue."
    ],
    safety: "Polyimide pyrolysis releases organic nitriles. Fume extraction required."
  },

  // 56
  {
    id: "end-grain-cutting-board-grooves",
    title: "Deep Engraving Solid Hardwood End-Grain Cutting Board Juice Grooves",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "15 min",
    materials: ["End-Grain Maple & Walnut Cutting Board (40mm thick)", "Food-Grade Beeswax/Mineral Oil Paste"],
    tools: ["CO2 Laser (80W-130W)", "LightBurn 3D Grayscale Mode", "Brass Wire Wheel"],
    summary: "Carving 6mm deep rounded juice collection channels into heavy end-grain butcher block boards using 16-bit gradient vector profiles.",
    image: IMG.wood_relief,
    steps: [
      {
        title: "End-Grain Fiber Absorption Dynamics",
        detail: "End-grain wood fibers stand vertically like drinking straws. Laser energy penetrates deeper along vertical fibers than face-grain boards. Use a U-shaped 16-bit gradient vector path to engrave smooth rounded channels."
      },
      {
        title: "Laser Parameters (CO2 100W - 6mm Deep Groove)",
        detail: "Speed = 200 mm/s, Power = 65%, 300 DPI, 3 Passes, 30 PSI High Air Assist. Air assist snuffs out vertical wood fiber ember glow."
      },
      {
        title: "Ash Cleanup & Oil Saturation",
        detail: "Scrub juice groove with brass wire brush under warm water. Dry 24 hours, then submerge board in food-grade mineral oil for 2 hours."
      }
    ],
    proTips: [
      "End-grain absorbs 4x more mineral oil than side-grain wood.",
      "Mask surrounding board face with heavy paper tape to prevent smoke resin settling."
    ],
    safety: "Deep end-grain carving produces dense wood smoke. Ensure active exhaust is running."
  },

  // 57
  {
    id: "galvo-annealing-anodized-black-aluminum",
    title: "Black and White Laser Marking Anodized Aluminum: Dye Bleaching vs MOPA Oxide Tuning",
    category: "Fiber/Galvo",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "15 min",
    estimatedTime: "10 min setup, 5 min laser marking",
    targetMaterial: "Anodized Aluminum Housings / Equipment Plates",
    materials: [
      "Type II Anodized Aluminum Parts (Black, Clear, or Colored Coating)",
      "99% Isopropyl Alcohol & Microfiber Cloth"
    ],
    tools: [
      "Fiber or MOPA Galvo Laser (1064nm, 20W–50W)",
      "LightBurn Galvo or EZCAD3 Software",
      "F-Theta Scan Lens (160mm focal length)"
    ],
    summary: "Technical guide for high-speed laser marking on anodized aluminum, detailing white organic dye bleaching on dark anodized parts and dark/black marking on clear or colored anodized aluminum using short MOPA pulse durations without damaging the anodic oxide shell.",
    image: IMG.laser_badge,
    prerequisites: {
      compatibleLasers: "Fiber galvo lasers (1064nm, 20W–50W). Conventional Q-switched sources excel at white dye bleaching; MOPA fiber sources with short pulse widths (2ns to 15ns) enable high-contrast dark marking on clear or colored anodized layers.",
      unsuitableLasers: "Diode lasers (450nm) can bleach certain organic dyes at low speeds but lack speed for industrial batch runs; CO2 lasers (10.6µm) reflect off metallic substrate or burn anodized coating.",
      minimumSpecs: "Fiber galvo laser column, F-Theta scan lens, dual red-dot focus indicator, HEPA local fume extraction.",
      safetyHazards: "1064nm NIR specular reflections from glossy anodized surfaces.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Type II anodized aluminum features a porous aluminum oxide (Al2O3) ceramic coating (8µm to 25µm thick) sealed over the aluminum base. White marking relies on selective laser thermal vaporization of organic dye trapped in the pores without melting the surrounding oxide shell. Black marking on clear/colored anodized aluminum uses ultra-short MOPA pulses (4ns to 12ns) at high frequency to cause localized thermal modification of the aluminum interface underneath the transparent oxide layer without rupturing the protective anodic skin.",
    designPrep: "In LightBurn Galvo or EZCAD3, set up vector logos, text, or ISO-15415 Data Matrix barcodes. For white dye bleaching, select cross-hatching at 0.025mm–0.035mm pitch. For black marking on clear anodized stock, set a tight hatch pitch (0.010mm–0.015mm) and select short MOPA pulse widths.",
    laserSetup: "Mount anodized aluminum parts in a rigid aluminum jig. Converge dual red focus dots precisely on the target marking plane. Turn on local enclosure HEPA fume extraction.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Keep air assist off at galvo head; ensure enclosure HEPA exhaust is running."
    },
    exhaust: {
      configuration: "Enclosure local exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "MOPA Fiber Galvo (1064nm, 30W reference)",
          power: "White Bleach: 22% | Black Mark: 35% controller setting",
          speed: "White Bleach: 2500 mm/s | Black Mark: 1200 mm/s",
          passes: "1 (Cross-Hatch at 45°)",
          lineInterval: "White: 0.030mm | Black: 0.012mm",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Surface Focus)",
          frequency: "White: 45 kHz | Black: 250 kHz",
          pulseWidth: "White: 200ns | Black: 8ns (ultra-short pulse)",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm, 20W reference)",
          power: "White Bleach: 25% controller setting",
          speed: "White Bleach: 2000 mm/s",
          passes: "1 (Cross-Hatch at 45°)",
          lineInterval: "0.030mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Surface Focus)",
          frequency: "35 kHz",
          pulseWidth: null,
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        }
      },
      sharedParameters: {
        provenance: "REFERENCE_STARTING_POINT",
        sourceName: null,
        sourceReference: null,
        physicallyTested: false,
        lastEditorialReview: "2026-11"
      },
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Because anodizing dye chemistry and oxide layer thickness vary across suppliers, run a small 1-variable line test grid before processing finished parts. For white bleaching, increase speed in 250 mm/s increments until text turns crisp white without melting into dull grey. For black marking on clear stock, vary MOPA pulse width between 4ns and 15ns at high frequency (200kHz+).",
    steps: [
      {
        title: "Part Cleaning & Fixturing",
        action: "Wipe anodized aluminum housing with 99% Isopropyl Alcohol using a pluisvrije microfiber doek to remove oils, then seat part securely in jig.",
        why: "Finger oils obstruct uniform dye bleaching and cause spotty text width under fast galvo scanning.",
        lookFor: "Clean, oil-free anodized coating.",
        possibleFailure: "Uncleaned finger oils leave dark greasy smudges across white laser markings.",
        detail: "Wipe part with IPA, allow 15 seconds evaporation, clamp flat in fixture."
      },
      {
        title: "Focal Plane Verification",
        action: "Adjust Z-height column until dual red focus pointers converge into a single dot on target anodized surface.",
        why: "Precise focus maintains sharp spot size for crisp barcode edges and micro-text legibility.",
        lookFor: "Single red focal dot on target marking area.",
        possibleFailure: "Defocused laser beam melts anodic layer into rough grey crater."
      },
      {
        title: "Galvo Laser Execution",
        action: "Close enclosure, check 1064nm safety eyewear, press Start to execute vector marking job.",
        why: "Fast galvo scanning vaporizes organic dye molecules in 1.8 seconds per logo without damaging ceramic oxide shell.",
        lookFor: "Instant, silent transformation of black anodized dye into bright white graphic mark.",
        possibleFailure: "Cratered or rough grey mark indicates excessive laser power or low scan speed."
      },
      {
        title: "Wipe & Durability Audit",
        action: "Wipe finished mark with IPA and scrub lightly with a microfiber cloth to inspect contrast.",
        why: "Proper dye bleaching leaves ceramic oxide intact, making mark 100% scratch-proof and solvent-resistant.",
        lookFor: "High-contrast, razor-sharp white or black mark resistant to acetone and scratching.",
        possibleFailure: "Mark smudges or rubs off if organic dye was charred rather than vaporized."
      }
    ],
    proTips: [
      "For white marking on black anodized stock, use high scan speeds (2000+ mm/s) and low power to avoid melting the underlying metal.",
      "For black marking on clear anodized stock, short MOPA pulse widths (6ns–12ns) at high frequency (200kHz+) are mandatory to avoid breaking the anodic skin."
    ],
    troubleshooting: [
      {
        issue: "White mark turns dull grey or feels rough under thumbnail test",
        fix: "Increase galvo scan speed by 20% or reduce laser power percentage; you are overheating and melting the oxide shell."
      },
      {
        issue: "Black mark on clear anodized stock appears brown or rub-susceptible",
        fix: "Reduce MOPA pulse duration to 8ns and increase frequency to 250kHz to minimize thermal shock."
      },
      {
        issue: "Faint white mark with visible scan line gaps",
        fix: "Reduce hatch pitch from 0.035mm to 0.025mm to achieve complete fill coverage."
      }
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
  },

  // 58
  {
    id: "multilayer-contour-topographic-map",
    title: "Multi-Layer Laser Cut Topographic Contour Map Art with GIS Vector Data",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "18 min",
    materials: ["3mm Baltic Birch Plywood (6 Layers)", "Blue Wood Stain (Water Depths)", "Wood Glue"],
    tools: ["CO2 Laser (50W-80W)", "QGIS Software / LightBurn", "Acrylic Layer Spacers"],
    summary: "Converting GIS digital elevation models (DEM) into multi-layer vector contour maps with laser-etched bathymetric lake depth lines.",
    image: IMG.wood_wall,
    steps: [
      {
        title: "GIS Elevation Data Vector Extraction",
        detail: "Import DEM elevation data into QGIS. Generate 10-meter vector contour lines. Export vector DXF files separated into discrete land height layers and water depth layers."
      },
      {
        title: "Laser Engrave & Cut Execution (CO2 60W)",
        detail: "Layer Vector Cut: 32 mm/s @ 40% power. Etch Road/River Line Art: 300 mm/s @ 15% power, 300 DPI."
      },
      {
        title: "Staining & Gradient Assembly",
        detail: "Stain water layers progressive shades of blue (shallow light blue to deep ocean navy). Stack plywood land elevation layers sequentially over dowel alignment pins."
      },
      {
        title: "Framing & Acrylic Cover",
        detail: "Mount assembled 3D topographic map inside solid hardwood shadowbox frame with 2mm clear acrylic cover glass."
      }
    ],
    proTips: [
      "Use QGIS 'Simplify Line' filter to reduce excessive node points in raw GIS contour exports.",
      "Check that every layer includes identical corner alignment holes."
    ],
    safety: "Plywood cutting generates wood smoke soot. Keep exhaust fan active."
  },

  // 59
  {
    id: "fkm-viton-rubber-gaskets",
    title: "Laser Cutting Chemical Resistant FKM Viton Rubber Hydraulic Gaskets",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "13 min",
    materials: ["2.0mm FKM Viton Fluoropolymer Rubber Sheet"],
    tools: ["CO2 Laser (60W-100W)", "High-Pressure Air Assist (40 PSI)", "Digital Caliper"],
    summary: "Precision vector cutting of fluoroelastomer Viton rubber gaskets for high-temperature chemical and hydraulic systems.",
    image: IMG.cnc1,
    steps: [
      {
        title: "Fluoroelastomer Viton Thermal Chemistry",
        detail: "Viton (FKM) withstands up to 250°C and aggressive fuels. CO2 laser cutting vaporizes Viton cleanly, but requires high air assist (40 PSI) to blow away sticky fluorine ash."
      },
      {
        title: "Flange Kerf Adjustment",
        detail: "Apply -0.06mm Kerf Inset in LightBurn to compensate for beam width on 2.0mm rubber."
      },
      {
        title: "Laser Parameters (CO2 80W - 2mm Viton)",
        detail: "Vector Cut: 18 mm/s @ 60% power, 40 PSI High Air Assist, Single Pass."
      },
      {
        title: "Solvent Cleaning",
        detail: "Wash cut Viton gasket in Isopropyl Alcohol to remove loose surface ash before flange installation."
      }
    ],
    proTips: [
      "Viton rubber contains fluorine. Fume extraction with activated carbon media is mandatory.",
      "Store Viton sheets flat to prevent material memory curl."
    ],
    safety: "Viton pyrolysis generates Hydrogen Fluoride (HF) traces. HEPA and active carbon extraction required."
  },

  // 60
  {
    id: "slate-mortar-pestle-herb-grinding",
    title: "Laser Engraving Slate Mortar & Pestle Kitchen Herb Grinding Sets",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "12 min",
    materials: ["Natural Black Slate Mortar and Pestle Set", "Mineral Oil"],
    tools: ["Diode Laser 20W or CO2 Laser 50W", "LightBurn Rotary Setup", "Nylon Brush"],
    summary: "Rotary photo and text engraving on natural slate mortar bowls followed by food-safe mineral oil seasoning.",
    image: IMG.slate_coaster,
    steps: [
      {
        title: "Curved Slate Geometry Alignment",
        detail: "Slate mortar bowls have curved exterior walls. Mount mortar in rotary chuck, set focal point at median bowl radius height."
      },
      {
        title: "Negative Image Inversion & Laser Execution",
        detail: "Invert artwork in LightBurn. Diode 20W: 2400 mm/min @ 45% power, 254 DPI. CO2 60W: 250 mm/s @ 18% power."
      },
      {
        title: "Slate Seasoning & Washing",
        detail: "Brush away stone dust, wash mortar bowl with warm water, and rub exterior with food-grade mineral oil to deepen slate black background."
      }
    ],
    proTips: [
      "Do not engrave inside the mortar bowl grinding cavity; keep markings strictly on outer polished exterior walls.",
      "Mineral oil boosts contrast ratio from 4:1 up to 18:1."
    ],
    safety: "Silica dust generated during stone ablation requires dust mask."
  },

  // 61
  {
    id: "titanium-bone-screws-udi-marking",
    title: "Laser Marking Medical Grade Titanium Bone Screws (UDI Compliance)",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "16 min",
    materials: ["Grade 5 Titanium (Ti-6Al-4V ELI) Medical Screws"],
    tools: ["MOPA Fiber Galvo Laser (20W-30W)", "Rotary Indexing Fixture", "Keyence Barcode Verifier"],
    summary: "Passivated non-ablative black matrix UDI barcode marking on titanium medical bone screws compliant with FDA regulations.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "FDA Unique Device Identification (UDI) Standards",
        detail: "Medical implants require permanent corrosion-resistant 2D DataMatrix barcodes. Laser mark must be non-ablative black oxide layer that withstands 500+ autoclave steam sterilization cycles."
      },
      {
        title: "Rotary Cylinder Execution (20W MOPA Fiber)",
        detail: "Mount screw in precision rotary fixture. Speed = 800 mm/s, Power = 32%, Frequency = 180 kHz, Pulse Width = 16ns, Hatch = 0.01mm cross-hatch."
      },
      {
        title: "Autoclave Sterilization Testing",
        detail: "Subject marked titanium screw to 134°C steam autoclave for 50 cycles. Verify DataMatrix barcode maintains ISO 15415 Grade A readability."
      }
    ],
    proTips: [
      "Short MOPA pulse width (16ns) prevents thermal damage to delicate screw thread pitch.",
      "Ultrasonically clean screws in citric acid passivation bath after laser marking."
    ],
    safety: "Wear 1064nm NIR safety goggles during galvo operation."
  },

  // 62
  {
    id: "acrylic-light-guide-plates-lgp",
    title: "Laser Cut Custom Acrylic Light Guide Plates (LGP) with Matrix Micro-Dots",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "17 min",
    materials: ["6mm Optical Grade Cell-Cast Acrylic Sheet", "Edge-Lit LED Strip (6000K)"],
    tools: ["CO2 Laser (60W-100W)", "LightBurn LGP Grid Generator", "Photometer Light Meter"],
    summary: "Engineered raster micro-dot density gradient engraving on optical acrylic plates for uniform LED backlighting panel displays.",
    image: IMG.acrylic_glow,
    steps: [
      {
        title: "Light Guide Optics & Gradient Dot Math",
        detail: "Light injected into acrylic edges reflects internally. To emit uniform surface light, micro-dot engraving density must increase linearly as distance from LED edge increases (10% dot density near LEDs up to 85% dot density at center)."
      },
      {
        title: "LightBurn LGP Grid Raster Generation",
        detail: "Generate gradient dot pattern in LightBurn LGP tool. Micro-dot size = 0.3mm diameter. Engrave depth = 0.1mm."
      },
      {
        title: "Laser Parameters (CO2 80W)",
        detail: "Raster Engrave LGP Dots: 450 mm/s @ 16% power, 400 DPI, Air Assist OFF. Perimeter Cut: 10 mm/s @ 70% power."
      },
      {
        title: "Illumination Uniformity Verification",
        detail: "Attach LED strip to edge and measure surface lux with photometer. Uniformity score >88% verifies proper dot gradient curve."
      }
    ],
    proTips: [
      "Flame polish acrylic edges to maximize total internal reflection (TIR) efficiency.",
      "Place white reflective film on rear face of LGP plate."
    ],
    safety: "PMMA vapor requires active exhaust ducting."
  },

  // 63
  {
    id: "hardboard-hdf-mdf-furniture",
    title: "Production Cutting 6mm Hardboard (HDF/MDF) Furniture Components",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    materials: ["6mm High-Density Fiberboard (HDF / Masonite)", "Wood Glue"],
    tools: ["CO2 Laser (80W-130W)", "High-Pressure Air Assist (35 PSI)", "LightBurn Software"],
    summary: "Industrial parameters for cutting dense 6mm HDF sheets with minimal edge charring and zero kerf taper.",
    image: IMG.mdf_board,
    steps: [
      {
        title: "HDF Binder Resin Combustion Mechanics",
        detail: "HDF consists of wood fibers bonded with synthetic urea-formaldehyde resins under high pressure. High power + 35 PSI air assist blows out molten resin binder before edge charring spreads."
      },
      {
        title: "Optics Focus Setup",
        detail: "Use 2.5\" or 3.0\" focal length lens. Set focal point 2.5mm inside HDF sheet (1/3 depth) to maintain parallel vertical cut walls."
      },
      {
        title: "Laser Parameters (CO2 100W - 6mm HDF)",
        detail: "Vector Cut: 12 mm/s @ 82% power, 35 PSI High Air Assist, Single Pass."
      },
      {
        title: "Edge Wipe & Assembly",
        detail: "Wipe dark cut edges with damp microfiber cloth to remove loose carbon ash before gluing furniture joint tabs."
      }
    ],
    proTips: [
      "HDF emits dark resin smoke; keep laser mirrors and focus lens clean daily.",
      "Elevate HDF on blade bed to prevent bottom reflection marks."
    ],
    safety: "Urea-formaldehyde resin fumes require high-volume exhaust ventilation."
  },

  // 64
  {
    id: "hdpe-cutting-boards-laser",
    title: "Laser Marking High-Density Polyethylene (HDPE) Commercial Cutting Boards",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    materials: ["12mm Commercial White HDPE Cutting Board Sheets"],
    tools: ["CO2 Laser (50W-80W) or MOPA Fiber Laser", "LightBurn Software", "Scraper Tool"],
    summary: "Surface melt-foaming and high-contrast vector marking on commercial white HDPE plastic cutting boards.",
    image: IMG.cnc2,
    steps: [
      {
        title: "HDPE Polymer Melting Behavior",
        detail: "HDPE melts at 130°C and has high thermal viscosity. CO2 laser engraving melts top surface into raised smooth vector beads. MOPA fiber lasers generate high-contrast dark marks."
      },
      {
        title: "Laser Parameters (CO2 60W - White HDPE)",
        detail: "Vector Marking: 180 mm/s @ 22% power, 254 DPI, Air Assist ON (15 PSI). Setting low power prevents sticky deep melting."
      },
      {
        title: "Deburring & Sanitize Rinse",
        detail: "Scrape minor raised melted beads with flat steel scraper. Wash board with hot soapy water; HDPE non-porous surface is 100% food safe."
      }
    ],
    proTips: [
      "Diode 455nm lasers pass directly through white HDPE without absorption.",
      "Use MOPA fiber laser at 200 kHz for dark black contrast marks on HDPE."
    ],
    safety: "HDPE is halogen-free and safe to cut. Exhaust ventilation recommended."
  },

  // 65
  {
    id: "silver-bullion-coins-scrap-capture",
    title: "Fiber Galvo Deep Engraving Silver Bullion Coins & Precious Scrap Capture",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "20 min",
    materials: ["999 Fine Silver Bullion Rounds (1 oz / 31.1g)", "Acetone Degreaser"],
    tools: ["50W MOPA Fiber Galvo Laser", "Precision Scale (0.01g accuracy)", "Enclosed Cyclone Vacuum Filter"],
    summary: "High-precision 3D deep galvo engraving on pure silver bullion rounds with 99.5% silver scrap dust recovery system.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Precious Metal Scrap Recovery Mechanics",
        detail: "Deep laser ablation on 1 oz silver round removes 0.4g of pure silver ($0.35 value). Connecting a cyclone vacuum filter directly to galvo enclosure collects 99.5% of vaporized silver micro-particles for refinery melting."
      },
      {
        title: "High Peak MOPA Parameters (50W Fiber - Pure Silver)",
        detail: "Speed = 350 mm/s, Power = 90%, Frequency = 22 kHz, Pulse Width = 4ns, 100 Hatch Passes (0.015mm pitch, Auto Hatch Rotate)."
      },
      {
        title: "Weight Audit & Ultrasonic Cleaning",
        detail: "Weigh engraved coin on precision scale to record exact silver loss. Ultrasonically clean coin in acetone, then polish high relief highlights with jeweler's cloth."
      }
    ],
    proTips: [
      "Blacken silver surface with dry-erase marker before laser pass to maximize initial photon absorption.",
      "Keep silver scrap filter bag isolated from other metal wastes."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 66
  {
    id: "felt-coasters-desk-pads",
    title: "Laser Cutting & Inlay Assembly Multi-Tone Synthetic Felt Desk Pads",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "8 min",
    materials: ["3mm Pressed Polyester Synthetic Felt Sheets (Charcoal, Heather Gray, Cream)"],
    tools: ["Diode Laser 10W-20W or CO2 Laser 40W", "Fabric Glue", "LightBurn Software"],
    summary: "Precision vector cut sealing of synthetic polyester felt sheets and interlocking geometric color inlay desk pads.",
    image: IMG.laser_badge,
    steps: [
      {
        title: "Synthetic Felt Thermal Edge Sealing",
        detail: "Polyester felt fibers melt under laser heat, self-sealing cut vector edges to prevent fraying and loose fiber fuzz. Natural wool felt chars; synthetic polyester felt seals cleanly."
      },
      {
        title: "Laser Parameters (20W Diode - 3mm Polyester Felt)",
        detail: "Vector Cut: 1200 mm/min @ 45% power, 20 PSI Air Assist. CO2 40W: 40 mm/s @ 20% power."
      },
      {
        title: "Geometric Color Inlay Assembly",
        detail: "Cut matching interlocking geometric shapes from Charcoal and Cream felt sheets. Fit shapes together like a puzzle and bond onto a felt backing sheet using fabric adhesive."
      }
    ],
    proTips: [
      "Always verify felt is 100% Synthetic Polyester or Acrylic (PVC-free).",
      "Air assist prevents molten felt fibers from blowing onto top face."
    ],
    safety: "Synthetic felt cutting generates characteristic plastic smell. Exhaust required."
  },

  // 67
  {
    id: "rotary-anodized-baseball-bats",
    title: "Rotary Laser Engraving Anodized Aluminum Baseball Bats",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "fiber",
    readTime: "13 min",
    materials: ["Anodized Aluminum Baseball Bats"],
    tools: ["Fiber Galvo Laser or CO2 Laser with Rotary", "Roller Rotary Attachment", "LightBurn Software"],
    summary: "High-speed 360° rotary laser ablation of anodized coating on aluminum baseball bats for custom team branding.",
    image: IMG.metal_artisan,
    steps: [
      {
        title: "Tapered Cylinder Rotary Calibration",
        detail: "Baseball bats taper along barrel length. Mount bat on roller rotary with tailstock support. Measure exact barrel diameter at target logo location and input into LightBurn Rotary Setup."
      },
      {
        title: "Laser Parameters (30W Fiber Galvo)",
        detail: "Speed = 2200 mm/s, Power = 28%, Frequency = 35 kHz, Line Hatch = 0.025mm. Laser vaporizes black/red anodized dye, revealing bright silver aluminum underneath."
      },
      {
        title: "Post-Engrave Wipe",
        detail: "Wipe engraved barrel with microfiber cloth and Isopropyl Alcohol. Zero post-processing polish required."
      }
    ],
    proTips: [
      "Use roller rotary with rubber O-rings to prevent aluminum bat barrel slippage.",
      "Check barrel level along horizontal axis using spirit level."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 68
  {
    id: "wooden-acoustic-guitar-rosettes",
    title: "Precision Laser Cutting & Engraving Custom Wooden Acoustic Guitar Rosettes",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    materials: ["1.0mm Maple Veneer", "1.0mm Rosewood Veneer", "Mother of Pearl Shell Strips"],
    tools: ["CO2 Laser (40W-60W) with 1.5\" Lens", "LightBurn Software", "Digital Caliper"],
    summary: "Micro-vector cutting of concentric wooden ring rosettes and soundhole channel inlays for custom luthiery.",
    image: IMG.walnut_inlay,
    steps: [
      {
        title: "Concentric Ring Kerf Offset Math",
        detail: "A guitar rosette consists of interlocking 1.0mm concentric wood and shell rings around soundhole. Apply exact +0.05mm Kerf Offset to outer ring vectors and -0.05mm Kerf Offset to inner ring vectors for zero-gap inlay fit."
      },
      {
        title: "Laser Parameters (CO2 50W - 1.0mm Veneer)",
        detail: "Vector Cut: 40 mm/s @ 22% power, 30 PSI High Air Assist. Short 1.5\" focal lens maintains narrow 0.06mm beam spot."
      },
      {
        title: "Rosette Channel Press & Sanding",
        detail: "Glue interlocking veneer rings into guitar top soundhole channel with wood glue. Sand flush with 320 to 600 grit paper after 4 hours curing."
      }
    ],
    proTips: [
      "Mask wood veneers with low-tack paper tape before cutting to eliminate smoke stains.",
      "Orient wood grain directions diagonally to create dynamic radial rosette patterns."
    ],
    safety: "Fine wood sanding dust requires N95 dust mask."
  },

  // 69
  {
    id: "drone-frame-carbon-fiber-countersunk",
    title: "Laser Marking Carbon Fiber Drone Frame Plates & Counter-Sunk Holes",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "15 min",
    materials: ["3K Carbon Fiber FPV Drone Arms / Top Plates (3.0mm thickness)"],
    tools: ["30W/50W MOPA Fiber Laser", "LightBurn Galvo / EZCAD3", "HEPA Vacuum Extraction"],
    summary: "Galvo laser vector marking of motor numbers and logo graphics onto 3K carbon fiber FPV drone frame plates.",
    image: IMG.machine_fiber,
    steps: [
      {
        title: "Carbon Fiber Resin Vaporization Mechanics",
        detail: "3K woven carbon fiber plates consist of carbon filaments in epoxy matrix. Galvo laser marks bright white text by selectively vaporizing top 20-micron epoxy surface layer without severing structural carbon load fibers."
      },
      {
        title: "Laser Parameters (30W MOPA Fiber)",
        detail: "Marking Speed = 1800 mm/s, Power = 24%, Frequency = 250 kHz, Pulse Width = 8ns, Line Hatch = 0.03mm. Short MOPA pulse width prevents heat spreading into epoxy."
      },
      {
        title: "Cleaning & Acetone Wipe",
        detail: "Wipe marked carbon plate with acetone to remove loose epoxy ash, revealing crisp white contrast graphics."
      }
    ],
    proTips: [
      "Do not exceed 30% power; excessive laser energy burns deep carbon fibers and degrades arm stiffness.",
      "HEPA vacuum extraction mandatory for carbon micro-dust."
    ],
    safety: "Conductive carbon dust can short electrical circuits. Keep vacuum active."
  },

  // 70
  {
    id: "galvo-micro-texture-hydrophobicity",
    title: "Fiber Galvo Micro-Texture Surface Hydrophobicity Modification on Metals",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "22 min",
    materials: ["Grade 5 Titanium / Stainless Steel 304 Plates", "Deionized Water"],
    tools: ["50W MOPA Fiber Laser", "EZCAD3 / LightBurn Galvo", "Contact Angle Goniometer"],
    summary: "Creating hydrophobic self-cleaning metal surfaces by galvo laser texturing micro-pillar array patterns.",
    image: IMG.metal_macro,
    steps: [
      {
        title: "Lotus Effect Biomimetic Physics",
        detail: "Self-cleaning lotus leaves feature micro-scale pillars topped with nano-structures that trap air beneath water droplets. Galvo laser cross-hatching engraves a 50-micron grid array of square micro-pillars on metal surfaces, driving water contact angle above 140° (Hydrophobic)."
      },
      {
        title: "Micro-Pillar Grid Hatch Setup",
        detail: "Configure LightBurn Galvo grid array: Square pillar width = 40 microns, Trench width = 20 microns, Trench depth = 35 microns."
      },
      {
        title: "Laser Parameters (50W MOPA Fiber)",
        detail: "Speed = 800 mm/s, Power = 60%, Frequency = 50 kHz, Pulse Width = 32ns, 15 Cross-Hatch Passes."
      },
      {
        title: "Water Droplet Contact Angle Test",
        detail: "Deposit a 5uL water droplet onto laser textured metal surface. Droplet forms a near-perfect sphere and rolls off freely at 5° tilt angle."
      }
    ],
    proTips: [
      "Heat treat textured metal in oven at 100°C for 1 hour to accelerate organic hydrocarbon adsorption.",
      "Hydrophobic surfaces resist bio-fouling and chemical corrosion."
    ],
    safety: "Wear 1064nm safety goggles during galvo operation."
  },

  // 71
  {
    id: "cardstock-boardgame-inserts",
    title: "Laser Cut Custom Cardstock Board Game Inserts & Token Organizers",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "9 min",
    materials: ["2.0mm Black High-Density Chipboard / Cardstock", "PVA Bookbinding Glue"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W)", "LightBurn Software"],
    summary: "Precision vector cutting of heavy black chipboard sheets for custom board game box storage trays and card organizers.",
    image: IMG.cnc2,
    steps: [
      {
        title: "Chipboard Kerf & Box Tab Setup",
        detail: "Black chipboard (2.0mm) cuts cleanly with zero smoke discoloration. Apply +0.08mm Kerf Offset in LightBurn box generator for snug finger tab assembly."
      },
      {
        title: "Laser Parameters (CO2 50W - 2mm Black Chipboard)",
        detail: "Vector Cut: 35 mm/s @ 35% power, 25 PSI Air Assist. Diode 10W: 800 mm/min @ 60% power."
      },
      {
        title: "PVA Glue Assembly",
        detail: "Assemble tray tabs with PVA glue and hold with mini clamps for 15 minutes. Lightweight rigid chipboard trays keep game components organized."
      }
    ],
    proTips: [
      "Black chipboard conceals laser smoke marks completely.",
      "Use honeycomb bed pins to hold chipboard sheets flat."
    ],
    safety: "Paper chipboard cuts easily. Keep air assist active to prevent embers."
  },

  // 72
  {
    id: "co2-laser-polishing-acrylic-prisms",
    title: "CO2 Laser Polishing 8mm Cast Acrylic Prisms & Optical Lenses",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    materials: ["8mm Clear Cell-Cast PMMA Acrylic Plates"],
    tools: ["CO2 Laser (80W-130W) with Defocused Beam Optics", "LightBurn Software"],
    summary: "Defocus thermal re-flowing of saw-cut acrylic edges to achieve optical crystal clarity without manual flame polishing.",
    image: IMG.acrylic_glow,
    steps: [
      {
        title: "Thermal Reflow Surface Tension Optics",
        detail: "CO2 laser light at low energy density heats top 50 microns of acrylic to its glass transition temperature (160°C) without vaporizing material. Surface tension causes molten acrylic to re-flow, smoothing saw marks into optical mirror clarity."
      },
      {
        title: "Defocus Lens Setup",
        detail: "Defocus CO2 laser beam vertically by +12.0mm to expand spot footprint to 2.5mm diameter."
      },
      {
        title: "Laser Polishing Parameters (CO2 100W)",
        detail: "Scan Speed = 150 mm/s, Power = 18%, Line Interval = 0.20mm, Air Assist OFF (or 1 PSI trickle). Execute 1 continuous raster pass across cut edge."
      },
      {
        title: "Optical Inspection",
        detail: "Shine laser pointer through polished acrylic prism edge. Zero beam scattering verifies optical surface smoothness."
      }
    ],
    proTips: [
      "Ensure acrylic edge is thoroughly cleaned with deionized water before laser polishing pass.",
      "Air assist must be OFF during polishing to prevent wind ripples on molten acrylic face."
    ],
    safety: "PMMA vapor requires active exhaust ducting."
  },

  // 73
  {
    id: "silicone-kitchenware-bake-forms",
    title: "Laser Marking Silicone Kitchenware & Molds (FDA Compliance)",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "10 min",
    materials: ["FDA Food-Grade Silicone Baking Molds / Spatulas"],
    tools: ["CO2 Laser 50W+" , "LightBurn Software", "Denatured Alcohol Wipes"],
    summary: "Deep laser vector engraving into FDA food-grade silicone kitchenware without additive inks or chemical residues.",
    image: IMG.silicone_band,
    steps: [
      {
        title: "Food-Safe Non-Chemical Marking Mechanics",
        detail: "Food contact silicone prohibits additive chemical paints or laser marking pastes. CO2 laser energy cleanly ablates silicone, producing white silica (SiO2) micro-dust that washes off with water, leaving permanent tactile branding."
      },
      {
        title: "Laser Parameters (CO2 60W - Silicone Spatula)",
        detail: "Vector Engrave: 250 mm/s @ 32% power, 318 DPI, High Air Assist (25 PSI). Air assist clears silica dust from engraved vector channels."
      },
      {
        title: "Sanitizing Wash",
        detail: "Scrub silicone mold with hot water and dish soap, dry 30 minutes, and bake at 180°C for 20 minutes to fully post-cure."
      }
    ],
    proTips: [
      "Diode 455nm lasers pass through clear/colored silicone without absorption; CO2 10,600nm laser is required.",
      "Marking remains dishwasher safe up to 250°C."
    ],
    safety: "Silica dust generated during ablation requires dust mask."
  },

  // 74
  {
    id: "brass-foil-stamping-blocks",
    title: "Deep Vector Carving Brass Printing Blocks for Hot Foil Stamping",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "19 min",
    materials: ["Solid Brass Printing Blocks (10mm thick)", "Acetone"],
    tools: ["50W Fiber Galvo Laser", "LightBurn / EZCAD3 3D", "Hot Stamping Machine"],
    summary: "Precision galvo carving of raised brass printing blocks for hot foil stamping on leather, paper, and book covers.",
    image: IMG.brass_coin,
    steps: [
      {
        title: "Raised Vector Profile Setup",
        detail: "Invert artwork (engrave background away by 1.5mm depth, leaving text/logo raised). Apply 10° draft angle to letter walls to facilitate clean hot foil release."
      },
      {
        title: "Galvo Deep Ablation (50W Fiber)",
        detail: "Speed = 1100 mm/s, Power = 80%, Frequency = 28 kHz, 150 Hatch Passes (0.015mm pitch, Auto Hatch Rotate +33°)."
      },
      {
        title: "Hot Stamping Quality Audit",
        detail: "Install brass block into hot stamping press at 120°C. Press gold foil onto cardstock. Sharp foil edges without bleeding verify die depth."
      }
    ],
    proTips: [
      "Polish raised brass surfaces with 2000-grit paper before foil stamping.",
      "Clean block face with acetone between stamping runs."
    ],
    safety: "Active metal fume extraction filter system required."
  },

  // 75
  {
    id: "plywood-model-aircraft-ribs",
    title: "Laser Cutting Plywood Model Aircraft Wing Ribs & Interlocking Spars",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    materials: ["1.5mm & 3.0mm Aircraft Grade Birch Plywood (3-ply)", "CA Thin Glue"],
    tools: ["CO2 Laser (40W-60W) or Diode Laser (10W-20W)", "LightBurn Software", "Gram Precision Scale"],
    summary: "Precision vector cutting of lightweight airframe wing ribs and interlocking spars for radio-controlled model aircraft.",
    image: IMG.wood_letter,
    steps: [
      {
        title: "Aircraft Plywood Kerf & Weight Optimization",
        detail: "Model aircraft demand high strength-to-weight ratio. Apply +0.05mm Kerf Offset to interlocking spar slots so wing ribs snap onto main carbon/spruce spars without glue slop."
      },
      {
        title: "Laser Cutting Parameters (CO2 50W - 1.5mm Aircraft Birch)",
        detail: "Vector Cut: 45 mm/s @ 28% power, 30 PSI High Air Assist. High speed prevents char weight buildup."
      },
      {
        title: "Airframe Wing Assembly",
        detail: "Slide wing ribs onto carbon tube spar over building plan, verify 0° wing twist alignment, and wick CA thin glue into interlocking joints."
      }
    ],
    proTips: [
      "Use 3-ply aircraft birch plywood rather than standard balsa wood for high-stress wing root ribs.",
      "Include lightening hole vector cutouts inside rib bodies to reduce airframe mass by 25%."
    ],
    safety: "Plywood cutting generates smoke. Exhaust ventilation required."
  }
];
