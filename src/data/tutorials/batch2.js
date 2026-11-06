import { IMG } from "../images";

export const BATCH_2 = [
  // 26
  {
    id: "titanium-foil-stencil",
    title: "Laser Micro-Machining 0.1mm Titanium Foil SMT Solder Paste Stencils",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "15 min",
    estimatedTime: "15 min vacuum setup, 10 min galvo laser cut, 10 min deburring rinse",
    targetMaterial: "Grade-1 Pure Titanium Foil (0.1mm / 100µm thickness)",
    materials: [
      "Grade-1 Pure Titanium Foil (0.1mm / 100µm thickness, un-alloyed)",
      "Kapton High-Temperature Polyimide Tape",
      "Acetone Solvent & 5% Nitric Acid Passivation Bath"
    ],
    tools: [
      "MOPA Fiber Galvo Laser (20W–50W class)",
      "F-Theta Scan Lens (100mm focal length for short Rayleigh range)",
      "Porous Vacuum Retention Honeycomb Bed (-15 PSI vacuum pump)",
      "LightBurn Galvo or EZCAD3 Software (Wobble vector cut tool)",
      "Ultrasonic Cleaning Tank & Nitrile Gloves"
    ],
    summary: "Precision galvo micro-machining protocol for cutting ultra-fine SMT solder paste stencils and chemical heat shields from 100-micron Grade-1 titanium foil, detailing low thermal diffusivity physics, MOPA short pulse tuning (4ns-8ns), porous vacuum bed flattening, galvo wobble vector cuts, and chemical deburring.",
    image: IMG.titanium_foil,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers (1064nm wavelength, 20W–50W class with selectable short pulse widths 4ns-15ns). Short pulse high-frequency galvo scanning vaporizes titanium micro-kerfs without thermal foil warping.",
      unsuitableLasers: "CO2 lasers (10.6µm) reflect off metallic titanium; continuous-wave (CW) fiber lasers dump excess heat that severely warps 0.1mm foil into wave ripples.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta 100mm lens, porous vacuum holding bed (-15 PSI pump), HEPA metal dust extraction.",
      safetyHazards: "PYROPHORIC DUST HAZARD: Fine titanium micro-particles and kerf dust are pyrophoric and catch fire spontaneously in air if allowed to accumulate. Vacuum filtration bags must be cleaned daily. OXYGEN ASSIST WARNING: Never use pure oxygen gas assist on titanium cutting; titanium ignites violently in hot O2.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 0.1mm (100µm) Grade-1 commercially pure titanium foil. Titanium exhibits low thermal diffusivity (d = 6.8 mm²/s), meaning heat remains concentrated along cut lines. Continuous beam heating causes rapid thermal expansion warping. Inspect foil for micro-kinks or wrinkles before fixturing.",
    designPrep: "Import SMT pad stencil graphics into LightBurn Galvo. Enable 'Galvo Wobble' vector cutting tool with a 0.03mm wobble diameter and 0.01mm step pitch. Wobble vector motion sweeps laser beam in tiny overlapping circles, opening a clean 0.04mm kerf width that prevents cut metal burrs from re-welding.",
    laserSetup: "Mount porous vacuum retention bed on galvo baseplate. Lay 0.1mm titanium foil flat on vacuum plate, seal perimeter with Kapton tape, turn vacuum pump ON (-15 PSI). Focus 100mm F-Theta lens precisely on top foil surface plane.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (100mm short focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (Nitrogen inert gas purge optional)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Do NOT use oxygen gas assist. Optional nitrogen gas assist suppresses edge oxidation."
    },
    exhaust: {
      configuration: "Industrial HEPA metal dust extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local HEPA exhaust sized for fine titanium metal dust."
    },
    exactParameters: {
      mopa30W: {
        sourceType: "30W MOPA Fiber Galvo (1064nm ref)",
        power: "60% controller setting",
        speed: "350 mm/s (Galvo vector wobble cut speed)",
        passes: "4 Wobble Loop Passes (0.03mm wobble diameter)",
        lineInterval: "0.010mm step pitch",
        airAssist: "Off at marking point (or low Nitrogen purge)",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "350 kHz (High pulse frequency)",
        pulseWidth: "6 ns (Short pulse width restricts HAZ)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 4-pass wobble vector cut test on a scrap corner of 0.1mm titanium foil at 350 mm/s @ 60% power, 350 kHz, 6ns pulse width. Verify drop-out of a 1mm x 1mm square without foil lifting or edge dross welding.",
    steps: [
      {
        title: "Vacuum Retention Bed Setup & Foil Flattening",
        action: "Place porous vacuum bed on galvo base, position 0.1mm titanium foil flat over grid, tape perimeter with Kapton tape, turn vacuum pump ON (-15 PSI).",
        why: "Active vacuum suction holds ultra-thin 0.1mm foil perfectly flat, preventing laser focus drift and vibration ripples during scanning.",
        lookFor: "Titanium foil sucked flat to bed surface with zero air pockets or wrinkles.",
        possibleFailure: "Cutting un-vacuumed foil allows thermal expansion to lift foil into laser nozzle, destroying focal distance.",
        detail: "Clean vacuum bed plate, lay foil smoothly, apply Kapton tape around border, engage -15 PSI vacuum pump."
      },
      {
        title: "Galvo Wobble Vector & MOPA Pulse Configuration",
        action: "In LightBurn Galvo, set Galvo Wobble tool (0.03mm diameter), set 30W MOPA parameters (350 mm/s, 60% power, 350 kHz, 6ns pulse width, 4 passes).",
        why: "6ns short pulses at 350 kHz limit heat diffusion; 0.03mm wobble motion prevents kerf re-welding.",
        lookFor: "Wobble cut preview active in software showing 4-pass loop count.",
        possibleFailure: "Cutting with standard single-line vector without wobble causes molten titanium burrs to fuse back together.",
        detail: "Configure vector layer, enable Wobble tool, set 0.03mm wobble diameter, set 6ns pulse width."
      },
      {
        title: "Focal Alignment & HEPA Dust Containment",
        action: "Focus 100mm F-Theta lens precisely on top foil surface using dual red dots, verify vacuum pressure, start HEPA metal dust extraction.",
        why: "100mm lens creates a tight beam spot for sub-50µm kerfs; HEPA extraction captures airborne metal dust.",
        lookFor: "Dual red dots converged on top foil face; HEPA extraction pulling active negative pressure.",
        possibleFailure: "Running without HEPA extraction leaves fine titanium dust floating in air, creating a pyrophoric fire hazard.",
        detail: "Adjust galvo column Z height, verify red dot convergence, start HEPA metal dust filter unit."
      },
      {
        title: "Multi-Pass Micro-Machining Execution",
        action: "Close galvo enclosure doors, check 1064nm safety glasses, press Start for 4-pass wobble cut cycle.",
        why: "4 fast passes progressively ablate 25µm per pass, achieving a clean drop-out cut with zero thermal foil distortion.",
        lookFor: "Concentrated blue spark sweeping smoothly around stencil aperture outlines; zero red thermal glow spreading sideways.",
        possibleFailure: "Single pass at slow speed (20 mm/s) warps titanium foil into wave buckling.",
        detail: "Close enclosure, check eyewear, press Start, observe galvo wobble cut execution."
      },
      {
        title: "Ultrasonic Acid Cleanse & Passivation",
        action: "Turn off vacuum pump, remove cut titanium stencil, immerse in ultrasonic bath with 5% Nitric Acid for 3 minutes, rinse with acetone, dry.",
        why: "Acid bath dissolves microscopic cut edge dross burrs; acetone rinse leaves clean grease-free stencil for SMT printing.",
        lookFor: "Burr-free titanium stencil apertures with sharp 90° sidewalls under microscope.",
        possibleFailure: "Handling raw cut stencil with bare hands leaves skin oils that cause solder paste sticking.",
        detail: "Wear nitrile gloves, submerge stencil in ultrasonic acid bath for 3 min, rinse with acetone, dry with lint-free wipe."
      }
    ],
    troubleshooting: [
      {
        symptom: "0.1mm titanium foil buckles and warps into wave ripples during cutting",
        probableCause: "Heat accumulation from long MOPA pulse widths (>50ns) or inadequate vacuum suction holding foil flat",
        correctiveAction: "Shorten MOPA pulse width to 6ns, increase frequency to 350 kHz, and verify -15 PSI vacuum retention bed."
      },
      {
        symptom: "Cut stencil apertures fail to drop out / kerf re-welded together",
        probableCause: "Galvo Wobble tool was disabled or pass count was insufficient for 0.1mm thickness",
        correctiveAction: "Enable Galvo Wobble tool with 0.03mm diameter and increase pass count from 4 to 6 loops."
      },
      {
        symptom: "Titanium cut edge ignites into a bright white blinding flame flare",
        probableCause: "Oxygen assist gas was accidentally turned on or cutting power was set excessively high",
        correctiveAction: "Turn off oxygen gas assist immediately (use inert nitrogen or air-free galvo marking) and lower laser power."
      }
    ],
    proTips: [
      "Enable Galvo Wobble cutting (0.03mm diameter) to widen kerf slightly and prevent molten titanium re-welding.",
      "Never use oxygen assist gas when cutting titanium; titanium ignites spontaneously in hot O2.",
      "Clean vacuum filter bags daily; airborne titanium micro-dust is pyrophoric and presents a fire hazard."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. PYROPHORIC DUST HAZARD: Titanium dust is flammable and pyrophoric; clean vacuum filters daily. NO OXYGEN ASSIST: Titanium ignites in hot O2. Solvent Safety: Acetone and nitric acid require nitrile gloves, eye protection, and active ventilation."
  },

  // 27
  {
    id: "bamboo-cutting-board-epoxy",
    title: "Bamboo Cutting Board Deep Inlay Engraving & Food-Safe Epoxy Pour Prep",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "16 min",
    estimatedTime: "20 min engrave prep, 30 min laser 2-pass run, 4h seal dry, planar sanding",
    targetMaterial: "Moso Bamboo Cutting Board (20mm thick) & FDA-Compliant Food-Safe Epoxy Resin",
    materials: [
      "Moso Bamboo Cutting Board (20mm thickness, laminated end-grain or side-grain)",
      "FDA 175.300 Compliant Food-Safe Epoxy Resin & Liquid Color Pigment Paste",
      "Clear Unpigmented Sealer Epoxy",
      "Organic Mineral Oil & Beeswax Paste"
    ],
    tools: [
      "CO2 Laser (60W–100W class)",
      "LightBurn Software",
      "Random Orbital Sander (80, 120, 220, 320, 400 grit discs)",
      "Butane Micro-Torch / Heat Gun",
      "Digital Vernier Caliper"
    ],
    summary: "Deep 3mm cavity vector engraving protocol into hard Moso bamboo cutting boards for food-safe epoxy resin inlays, detailing bamboo vascular node density variation, 2-pass cross-raster pocket engraving (0° and 90°), char sealing to prevent bubble outgassing, FDA food-contact resin pouring, and planar flush sanding.",
    image: IMG.bamboo_cutting_board,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 60W–100W class). 10.6µm laser light is strongly absorbed by bamboo cellulose and lignin fibers.",
      unsuitableLasers: "Diode lasers (<20W) lack power to engrave deep 3mm pockets cleanly, causing severe charring and uneven depth.",
      minimumSpecs: "Enclosed CO2 laser, honeycomb bed, active enclosure smoke exhaust, clean air assist compressor (20-30 PSI).",
      safetyHazards: "TOXIC FUME & DUST HAZARD: Bamboo resin binders and epoxy sanding create fine respiratory dust and VOC fumes. Active fume extraction and organic vapor respirator with P3 particle filter during sanding are mandatory.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select high-density Moso bamboo cutting boards (20mm uniform thickness). Bamboo consists of dense vascular bundle strands embedded in soft parenchyma cells. Single-pass raster engraving produces uneven ridged pocket floors because vascular nodes burn slower than surrounding tissue. Executing 2 passes at 90° cross-raster angles creates a smooth 3.0mm flat pocket bottom.",
    designPrep: "In LightBurn, import inlay pocket design. Configure 2 distinct raster fill passes: Pass 1 (0° Horizontal scan angle, 300 mm/s @ 50% power, 318 LPI) and Pass 2 (90° Vertical scan angle, 300 mm/s @ 45% power, 318 LPI). For supported GCode devices, enable Overscanning default.",
    laserSetup: "Place bamboo cutting board flat on honeycomb bed. Focus CO2 laser beam on top board face plane. Set clean air assist to medium flow (20-25 PSI) to clear deep char ash.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch or 2.5 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Medium clean air assist (20-25 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Purges carbon ash from deep 3mm engraved pocket cavities."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for bamboo smoke and glue VOCs."
    },
    exactParameters: {
      co2_80W: {
        sourceType: "CO2 Laser (10.6µm 80W ref)",
        power: "50% controller setting (Pass 1 - 0°) / 45% controller setting (Pass 2 - 90°)",
        speed: "300 mm/s (Cross-raster scan speed)",
        passes: "2 Cross-Raster Passes (0° and 90° scan angles)",
        lineInterval: "0.080mm (318 LPI)",
        airAssist: "Medium air assist (20-25 PSI)",
        focusOffset: "-1.5mm (Focus positioned 1.5mm below top face into 3mm pocket)",
        lightburnMode: "Fill",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 2-pass cross-raster test pocket (20mm x 20mm) on a scrap bamboo board at 300 mm/s (Pass 1: 50% power @ 0°; Pass 2: 45% power @ 90°). Measure pocket depth with digital caliper (target depth: 3.0mm ± 0.2mm).",
    steps: [
      {
        title: "Bamboo Board Leveling & Bed Placement",
        action: "Place 20mm Moso bamboo board flat on honeycomb bed, check bed level with bubble indicator, and verify active smoke exhaust.",
        why: "Flat placement ensures uniform 3.0mm pocket depth across large cutting board graphics.",
        lookFor: "Board held level and secure without rocking on bed.",
        possibleFailure: "Tilted board causes pocket depth to vary from 1.5mm on one side to 4.0mm on the other.",
        detail: "Level board corners with calipers, focus CO2 laser to top surface, turn on enclosure exhaust."
      },
      {
        title: "2-Pass Cross-Raster Configuration Setup",
        action: "In LightBurn, set Pass 1 (0° scan angle, 300 mm/s @ 50% power, 318 LPI) and Pass 2 (90° scan angle, 300 mm/s @ 45% power, 318 LPI).",
        why: "Cross-rastering at 90° levels out bamboo vascular node ridges, producing a flat cavity floor for epoxy bonding.",
        lookFor: "Two raster layers active in software layer manager with 0° and 90° scan angles set.",
        possibleFailure: "Single-pass rastering leaves deep parallel ridges along hard vascular node strands.",
        detail: "Configure Pass 1 fill at 0°, set Pass 2 fill at 90°, set 0.08mm line interval, set -1.5mm focal offset."
      },
      {
        title: "Deep Cavity Engraving Execution",
        action: "Close laser enclosure doors, check 10.6µm safety eyewear, set 20-25 PSI air assist, press Start for 2-pass cross-raster run.",
        why: "Ablates 3.0mm deep pocket cavity with undercut char texture for mechanical epoxy anchoring.",
        lookFor: "Laser scanning cross-angles smoothly, producing deep dark pocket cavity with flat floor.",
        possibleFailure: "Low air assist (<10 PSI) allows carbon ash to ignite into charcoal flame inside pocket.",
        detail: "Close enclosure, check eyewear, press Start, observe 2-pass cross-raster pocket creation."
      },
      {
        title: "Char Vacuuming & Clear Sealer Epoxy Prime",
        action: "Vacuum loose carbon ash from pocket, brush cavity with a stiff dry toothbrush, coat pocket walls with thin unpigmented clear epoxy, let cure 4 hours.",
        why: "Sealing porous carbon walls with clear epoxy locks in residual air bubbles, preventing gas outgassing into colored epoxy pour.",
        lookFor: "Pocket walls completely sealed with a glossy, tack-free clear epoxy film.",
        possibleFailure: "Pouring colored epoxy directly onto unsealed carbon walls causes massive air bubble outgassing.",
        detail: "Vacuum ash, brush pocket clean, brush thin clear epoxy seal over walls, allow 4h gel time."
      },
      {
        title: "Food-Safe Epoxy Pouring & Planar Sanding",
        action: "Pour FDA 175.300 compliant colored epoxy slightly proud of board face, pop surface bubbles with butane torch, cure 24h, sand flush with 80-400 grit discs, coat with mineral oil.",
        why: "FDA compliant epoxy ensures food contact safety; progressive sanding levels epoxy flush; mineral oil restores bamboo wood grain.",
        lookFor: "Glass-smooth, seamless color epoxy inlay flush with polished, oiled bamboo board face.",
        possibleFailure: "Using non-food-grade industrial epoxy renders cutting board unsafe for food preparation.",
        detail: "Pour FDA epoxy slightly proud, torch bubbles, cure 24h, sand flat 80 through 400 grit, apply food-grade mineral oil/wax."
      }
    ],
    troubleshooting: [
      {
        symptom: "Colored epoxy pour develops hundreds of tiny pinhole air bubbles along cavity margins",
        probableCause: "Charred pocket walls were not sealed with a clear epoxy prime coat before pouring main colored resin",
        correctiveAction: "Always brush a thin seal coat of clear unpigmented epoxy over charred pocket walls and let gel for 4 hours before main pour."
      },
      {
        symptom: "Pocket cavity floor has rough parallel ridges and uneven depth",
        probableCause: "Engraving executed in a single raster scan direction (0°) across bamboo vascular nodes",
        correctiveAction: "Use 2 cross-raster passes (0° and 90°) at 300 mm/s to level vascular node variation."
      },
      {
        symptom: "Epoxy inlay cracks or separates from bamboo pocket sidewalls after curing",
        probableCause: "Pocket depth was too shallow (<1.5mm) or pocket walls were sanded smooth, removing mechanical lock",
        correctiveAction: "Engrave pocket to a minimum depth of 3.0mm, leaving rough laser char texture for mechanical lock."
      }
    ],
    proTips: [
      "Execute 2 passes at 90° cross-raster angles to eliminate uneven pocket floors caused by hard bamboo vascular nodes.",
      "Seal charred pocket walls with a thin coat of clear unpigmented epoxy before pouring colored resin to stop air outgassing.",
      "Use strictly FDA 175.300 compliant food-safe epoxy resin for cutting boards intended for food contact."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC DUST & RESIN HAZARD: Epoxy resin mixing and sanding generate VOC fumes and respirable silica/plastic dust. Wear organic vapor respirator with P3 filters and nitrile gloves during mixing and sanding. Solvent Safety: Mineral spirits are flammable."
  },

  // 28
  {
    id: "neoprene-sleeve-customization",
    title: "Neoprene Laptop Sleeve Customization via Heat-Transfer Vinyl Laser Cutting",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "9 min",
    estimatedTime: "10 min graphic prep, 5 min laser kiss-cut, 10 min heat press",
    targetMaterial: "4mm Synthetic Rubber Neoprene Sleeves & Polyurethane Heat Transfer Vinyl (PU HTV - PVC Free)",
    materials: [
      "Polyurethane Heat Transfer Vinyl Sheets (PU HTV - PVC-Free, 90µm vinyl on clear 100µm PET carrier)",
      "4mm Synthetic Rubber Neoprene Gear Sleeves",
      "Thermal Release Tape / Weeding Hook"
    ],
    tools: [
      "Diode Laser (10W optical output) or CO2 Laser (40W reference)",
      "LightBurn Software",
      "Clam-Shell Heat Press (150°C / 302°F capability) or Industrial Hand Iron",
      "Digital Vernier Caliper & Weeding Hook Tool"
    ],
    summary: "Kiss-cut vector laser calibration protocol for cutting polyurethane heat-transfer vinyl (PU HTV) films for heat-pressing onto 4mm synthetic rubber neoprene gear sleeves, detailing carrier layer retention, horizontal graphic mirroring, PVC-free material safety, 150°C thermal press parameters, and cold-peel execution.",
    image: IMG.denim_jacket,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength, 10W optical output) or CO2 lasers (10.6µm wavelength, 40W reference). Blue diode laser (450nm) offers controllable absorption in colored PU vinyl layers.",
      unsuitableLasers: "High-power fiber lasers (1064nm, 50W+) melt PET carrier backing instantaneously, causing thermal burn-through.",
      minimumSpecs: "Enclosed laser machine, sticky mat or bed hold-down, active enclosure exhaust fan system.",
      safetyHazards: "PVC CHLORINE GAS WARNING: Polyurethane (PU) HTV vinyl must be 100% PVC-Free. Laser cutting vinyl containing PVC releases toxic, corrosive chlorine gas (Cl2) that destroys lung tissue and corrodes laser optics and steel rails. Active enclosure exhaust extraction required for synthetic neoprene fumes.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 100% PVC-Free Polyurethane (PU) Heat Transfer Vinyl sheets (90µm vinyl color layer bonded to a 100µm clear PET carrier film). Verify manufacturer datasheet for 'PVC-Free' certification before laser cutting. Target substrate: 4mm synthetic rubber neoprene sleeves with polyester knit outer face.",
    designPrep: "In LightBurn, import vector graphics or typography. CRITICAL STEP: HORIZONTALLY MIRROR vector artwork before cutting so graphics read correctly after heat-pressing onto neoprene face. Set vector cut path to 'Kiss-Cut' power level (severing top 90µm vinyl layer while leaving 100µm PET carrier intact).",
    laserSetup: "Place HTV vinyl sheet VINYL-SIDE UP (clear PET carrier side facing down against bed) onto a low-tack sticky mat. Focus diode laser beam precisely on top vinyl film surface. Set air assist to low trickle flow (5 PSI).",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow (5 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist prevents disturbing delicate vinyl kiss-cut contours."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust fan",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for polyurethane fumes and rubber smoke."
    },
    exactParameters: {
      diode10W: {
        sourceType: "10W Optical Output Blue Diode Laser (450nm ref)",
        power: "12% controller setting (Kiss-Cut Vinyl Layer)",
        speed: "2200 mm/min",
        passes: 1,
        lineInterval: null,
        airAssist: "Low trickle flow (5 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      co2_40W: {
        sourceType: "CO2 Laser (10.6µm 40W ref)",
        power: "8% controller setting",
        speed: "400 mm/s",
        passes: 1,
        lineInterval: null,
        airAssist: "Low trickle flow (5 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 10mm x 10mm square kiss-cut test on a corner of PU HTV film at 2200 mm/min (8%, 10%, 12%, 14%, 16% power). Peel square with weeding hook to confirm top vinyl layer separates cleanly while clear PET backing remains 100% uncut and unscored.",
    steps: [
      {
        title: "PVC-Free Verification & Sticky Mat Bed Mounting",
        action: "Verify HTV vinyl is 100% PVC-Free Polyurethane, stick HTV vinyl-side UP onto sticky mat, and check local enclosure exhaust.",
        why: "PVC vinyl emits deadly chlorine gas when laser cut; sticky mat holds vinyl sheet flat to prevent focus drift.",
        lookFor: "Vinyl layer facing UP; clear PET backing stuck flat to mat; zero bubbles.",
        possibleFailure: "Laser cutting PVC vinyl corrodes machine rails and releases toxic chlorine fumes.",
        detail: "Check manufacturer spec sheet for PVC-Free PU logo, burnish vinyl onto Cricut mat, place on laser bed."
      },
      {
        title: "Horizontal Vector Mirroring & Kiss-Cut Setup",
        action: "In LightBurn, load vector artwork, click Mirror Horizontal, set kiss-cut parameters (2200 mm/min @ 12% power for 10W diode).",
        why: "Horizontal mirroring ensures text reads correctly after heat press flip; kiss-cut cuts vinyl while preserving PET carrier.",
        lookFor: "Software preview shows horizontally flipped graphics; kiss-cut line layer active.",
        possibleFailure: "Forgetting to mirror artwork produces backwards graphics when pressed onto neoprene sleeve.",
        detail: "Select graphics, click Mirror Horizontal icon, set 2200 mm/min @ 12% power layer."
      },
      {
        title: "Precision Surface Focusing & Laser Execution",
        action: "Focus diode laser on top vinyl surface, enable low 5 PSI air assist, close enclosure, and press Start.",
        why: "Precise focus delivers exact energy density required to sever 90µm vinyl without scoring PET backing.",
        lookFor: "Laser tracing sharp vector contours cleanly on top vinyl surface.",
        possibleFailure: "Setting laser power too high (30% power) cuts through PET carrier backing, destroying HTV transfer sheet.",
        detail: "Adjust z-focus to top vinyl film, set 5 PSI air assist, close enclosure, press Start."
      },
      {
        title: "Weeding Excess Vinyl Outline",
        action: "Remove HTV sheet from mat, use a weeding hook to peel away unneeded outer vinyl background, leaving target graphic on PET backing.",
        why: "Isolates target graphic design on clear sticky PET carrier film ready for alignment.",
        lookFor: "Clean target graphic remaining on clear PET backing with crisp vector margins.",
        possibleFailure: "Tearing delicate 90µm vinyl graphic details by pulling weeding hook too fast.",
        detail: "Pry corner of background vinyl with weeding hook, peel background slowly at 45° angle."
      },
      {
        title: "Heat Press Transfer & Cold-Peel Execution",
        action: "Position weeded HTV on 4mm neoprene sleeve, press at 150°C (302°F) for 12 seconds @ 30 PSI, allow full cooling, peel PET sheet.",
        why: "150°C heat activates PU thermal adhesive, bonding vinyl into neoprene polyester face; cold peel prevents graphic lifting.",
        lookFor: "Vibrant vinyl graphic permanently fused into neoprene fabric surface with sharp edges.",
        possibleFailure: "Peeling PET carrier sheet while still scalding hot strips vinyl off neoprene fabric.",
        detail: "Preheat press to 150°C, press sleeve 12 seconds, let cool 2 minutes until room temperature, peel PET sheet slowly."
      }
    ],
    troubleshooting: [
      {
        symptom: "PET carrier backing sheet is cut completely through during laser pass",
        probableCause: "Laser power was set too high or speed too slow for kiss-cutting 90µm vinyl layer",
        correctiveAction: "Reduce diode laser power by 25% or increase travel speed to 2500 mm/min."
      },
      {
        symptom: "HTV vinyl fails to weed cleanly (vinyl layer is not fully severed)",
        probableCause: "Laser power was set too low or focal distance was out of adjustment",
        correctiveAction: "Increase diode power setting by 2-3% and re-verify focal z-height."
      },
      {
        symptom: "Vinyl graphic peels off neoprene sleeve after heat pressing",
        probableCause: "Heat press temperature was too low (<140°C), press time insufficient, or PET carrier peeled warm",
        correctiveAction: "Verify press temperature at 150°C (302°F), press for 12 seconds @ 30 PSI pressure, and allow cold peel."
      }
    ],
    proTips: [
      "Always verify HTV sheet is 100% PVC-Free Polyurethane; vinyl containing PVC emits corrosive chlorine gas.",
      "Always horizontally mirror vector artwork in laser software before cutting HTV transfer films.",
      "Allow neoprene sleeve to cool completely to room temperature before peeling PET carrier sheet (cold peel)."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. CRITICAL SAFETY: PVC vinyl emits toxic chlorine gas; verify PVC-Free PU material certification. Exhaust extraction required. HEAT SAFETY: Heat press operates at 150°C (302°F); wear heat-resistant gloves."
  },

  // 29
  {
    id: "bone-horn-inlay-carving",
    title: "Precision Bone & Buffalo Horn Inlay Micro-Carving for Artisanal Knives",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    estimatedTime: "20 min water soak, 15 min laser cut/engrave, 30 min peroxide bleach/polish",
    targetMaterial: "Natural Bleached Cattle Bone Blanks (2.5mm) & Buffalo Horn Scale Sheets",
    materials: [
      "Natural Bleached Cattle Bone Blanks or Buffalo Horn Sheets (2.5mm thickness)",
      "Deionized Water Bath",
      "3% Hydrogen Peroxide Solution",
      "Water-Soluble Paper Masking Tape & White Diamond Buffing Compound"
    ],
    tools: [
      "CO2 Laser (50W–80W class) with Short Focal Optics (1.5 inch ZnSe lens)",
      "LightBurn Software",
      "Digital Vernier Caliper & Diamond Needle Files",
      "Cotton Buffing Wheel / Rotary Tool"
    ],
    summary: "Micro-carving and vector cutting protocol for natural cattle bone and buffalo horn inlay scales, detailing hydroxyapatite collagen pyrolysis mechanics, pre-soak water saturation cooling, short focal optics (1.5\"), high-pressure air assist char suppression, hydrogen peroxide bleaching, and diamond buffing.",
    image: IMG.bone_ivory,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–80W class). 10.6µm beam energy is absorbed by hydroxyapatite mineral matrix and organic collagen proteins.",
      unsuitableLasers: "Diode lasers (450nm) pass through semi-translucent bone and horn, causing severe internal scorching and cracking.",
      minimumSpecs: "CO2 laser with short focal optics (1.5\"), high-pressure air assist (30-40 PSI), active heavy smoke exhaust.",
      safetyHazards: "BIOLOGICAL DUST & KERATIN SMOKE HAZARD: Bone and horn laser ablation generates fine respirable hydroxyapatite dust and heavy keratin protein smoke (smells strongly like burnt hair). Wear N95/P3 respirator and run active enclosure exhaust.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use dense, fully bleached natural cattle bone blanks or buffalo horn scale sheets (2.5mm uniform thickness). Bone consists of 70% inorganic hydroxyapatite calcium phosphate mineral (Ca10(PO4)6(OH)2) and 30% organic collagen protein. Note: Laser heat vaporizes collagen, leaving chalky white mineral walls. Pre-soaking bone in deionized water for 20 minutes absorbs localized heat, reducing brown char depth.",
    designPrep: "In LightBurn, prepare inlay vector graphics. For 2.5mm bone cutting, use a 1.5 inch focal length ZnSe lens to provide a tiny spot size and rapid kerf vapor evacuation. Pocket engraving resolution: 0.063mm line interval (400 LPI) using LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Affix pre-soaked bone blank securely to honeycomb bed using water-soluble paper masking tape. Focus CO2 laser beam on top bone surface plane. Set high-pressure air assist to 35-40 PSI.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 1.5 inch short focal length lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (35-40 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist suppresses keratin protein charring and clears chalky mineral ash."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for heavy keratin protein smoke and mineral dust."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "65% controller setting (2.5mm Vector Cut) / 28% controller setting (Raster Engrave)",
        speed: "12 mm/s (Vector Cut - 2 passes) / 300 mm/s (Raster Engrave)",
        passes: "2 passes for vector cut (prevents thermal charring) / 1 pass for engrave",
        lineInterval: "0.063mm (400 LPI)",
        airAssist: "High pressure air assist (35-40 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line (Cut) / Fill (Engrave)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 2-pass vector cut test on a scrap corner of 2.5mm bone blank at 12 mm/s @ 60%, 65%, 70% power with 35 PSI air assist. Confirm clean 2-pass separation without brown thermal edge burn.",
    steps: [
      {
        title: "Deionized Water Pre-Soak & Paper Masking",
        action: "Submerge bone blanks in room temperature deionized water for 20 minutes, dry surface with paper towel, apply paper masking tape.",
        why: "Water saturation cools internal bone collagen during laser cutting, drastically reducing thermal yellow charring.",
        lookFor: "Bone blank moisture-conditioned; surface dry and paper masked.",
        possibleFailure: "Cutting dry bone causes heavy brown charring and hairline collagen heat cracks.",
        detail: "Soak bone in water for 20 min, pat dry, apply water-soluble paper tape smoothly over surface."
      },
      {
        title: "1.5 Inch Lens Installation & High Air Assist Setup",
        action: "Install 1.5\" ZnSe lens head, pin masked bone blank flat to honeycomb bed, set air assist to 35-40 PSI, check heavy exhaust.",
        why: "1.5\" short focus lens concentrates beam power density to vaporize hydroxyapatite quickly; 35 PSI air assist suppresses charring.",
        lookFor: "1.5\" lens mounted; 35-40 PSI air assist jet active; heavy exhaust running.",
        possibleFailure: "Using long 3.0\" lens spreads heat, causing wide yellow char margins on bone cut edges.",
        detail: "Mount 1.5\" lens nozzle, set focal Z distance, open 35 PSI air assist valve, start exhaust."
      },
      {
        title: "Raster Micro-Carving & Vector Cut Execution",
        action: "In LightBurn, execute raster engrave (300 mm/s @ 28% power, 400 LPI), followed by 2-pass vector cut (12 mm/s @ 65% power).",
        why: "Executing 2 light cut passes prevents thermal collagen scorching compared to 1 heavy pass.",
        lookFor: "Crisp ivory raster engrave followed by 2-pass vector cut dropping out cleanly.",
        possibleFailure: "Executing 1 single slow pass (5 mm/s) burns bone edge deep brown.",
        detail: "Set engrave fill layer, set 2-pass cut layer, close enclosure, check eyewear, press Start."
      },
      {
        title: "Hydrogen Peroxide Chemical Bleaching Bath",
        action: "Peel paper tape, immerse cut bone in 3% Hydrogen Peroxide solution for 30 minutes, rinse with deionized water, let dry.",
        why: "Hydrogen peroxide neutralizes organic char stains, restoring a pure snow-white ivory color across cut edges.",
        lookFor: "Bone inlay pieces returning to brilliant snow-white color.",
        possibleFailure: "Bleaching with harsh chlorine bleach weakens bone hydroxyapatite matrix, causing chalky crumbling.",
        detail: "Submerge bone pieces in 3% H2O2 bath for 30 min, rinse thoroughly under cold water, dry with cloth."
      },
      {
        title: "White Diamond Buffing & Polish",
        action: "Wearing P3 respirator, buff bone inlay pieces on a cotton wheel with White Diamond buffing compound to high luster.",
        why: "Polishes hydroxyapatite surface to a gleaming, smooth ivory-like shine suitable for fine knife handles.",
        lookFor: "Glass-smooth ivory luster with zero char stains or rough tool marks.",
        possibleFailure: "Buffing without respirator causes inhalation of bone dust particulates.",
        detail: "Wear P3 mask, apply White Diamond compound to cotton buffing wheel, polish bone pieces gently."
      }
    ],
    troubleshooting: [
      {
        symptom: "Cut bone edges are charred deep dark brown and smell strongly of burnt collagen",
        probableCause: "Bone was cut dry without pre-soaking, air assist pressure was too low, or 1 single slow pass was used",
        correctiveAction: "Pre-soak bone in water for 20 minutes, switch to a 2-pass cut strategy at 12 mm/s, and increase air assist to 35-40 PSI."
      },
      {
        symptom: "Bone inlay pieces crack into fragments during laser cutting",
        probableCause: "Thermal stress concentration from using a long focal lens or excessive laser power",
        correctiveAction: "Install a 1.5 inch short focal ZnSe lens and add 0.5mm radius fillets to sharp internal vector corners."
      },
      {
        symptom: "Buffalo horn cut edge smells overpowering and leaves sticky black residue",
        probableCause: "Buffalo horn consists of keratin protein which chars easily under thermal laser heat",
        correctiveAction: "Use 40 PSI air assist stream and wipe cut horn edges with 3% Hydrogen Peroxide immediately after cutting."
      }
    ],
    proTips: [
      "Pre-soak bone blanks in room temperature deionized water for 20 minutes before cutting to absorb localized heat.",
      "Use a 1.5 inch short focal length ZnSe lens to concentrate laser power density for clean bone micro-carving.",
      "Bleach laser-cut bone in 3% Hydrogen Peroxide for 30 minutes to restore a pure snow-white ivory color."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. BIOLOGICAL DUST HAZARD: Bone dust generated during buffing is a respiratory hazard; wear P3 respirator and run active fume extraction. Chemical Safety: 3% H2O2 requires eye protection."
  },

  // 30
  {
    id: "feather-light-art-cut",
    title: "Micro-Cut Feather Paper Art & Shadow Box Structural Framing",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "11 min",
    estimatedTime: "15 min design layer prep, 10 min paper laser cut, 20 min 3D standoff framing",
    targetMaterial: "300gsm Heavy Cotton Acid-Free Art Paper & 3D Shadow Box Frame",
    materials: [
      "300gsm Heavy Cotton Acid-Free Art Paper (Pure White / Black)",
      "Low-Tack Sticky Laser Cutting Mat (Cricut / Silhouette mat)",
      "3mm Self-Adhesive Foam Standoff Spacers",
      "3D Shadow Box Frame (25cm x 25cm with glass front)"
    ],
    tools: [
      "CO2 Laser (40W–60W class) or Diode Laser (10W reference)",
      "LightBurn Software",
      "Fine Tweezers & Precision Craft Knife"
    ],
    summary: "Ultra-delicate vector micro-cutting protocol for 300gsm heavy cotton paper art featuring sub-millimeter feather barb details, detailing cellulose combustion control, low-tack sticky mat paper stabilization, high-velocity flash-free parameters, low air assist soot control, and 3D shadow box layer assembly.",
    image: IMG.feather_art,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–60W class) or Diode lasers (450nm wavelength, 10W reference). 10.6µm light is rapidly absorbed by organic paper cellulose fibers.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm, 50W+) reflect off white paper fibers or burn paper uncontrollably.",
      minimumSpecs: "Enclosed laser machine, low-tack sticky paper mat, active enclosure exhaust, high-velocity motion control.",
      safetyHazards: "PAPER FIRE HAZARD: Fine paper cutouts and loose delicate feather barbs fly easily under air assist and ignite if caught in laser beam. Secure paper flat on a low-tack sticky mat. Maintain active supervision and keep fire extinguisher nearby.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 300gsm heavy cotton acid-free art paper. Paper consists of natural cellulose fibers. High thermal energy causes edge yellowing and smoke halo staining. High speed + low laser power + high velocity vector movement yields pristine snow-white cut edges on fine sub-millimeter feather barbs.",
    designPrep: "In LightBurn, import multi-layered feather artwork (5 staggered depth layers). Separate layers by color. Set vector cut path order from inner sub-millimeter barb details to outer contour outlines. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Burnish 300gsm paper smoothly onto a low-tack sticky mat to hold fine paper cuts flat. Focus CO2 laser beam on top paper face. Set clean air assist to medium flow (15-20 PSI) to clear smoke without lifting paper.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 1.5 inch or 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Medium clean air assist (15-20 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Medium air assist clears smoke without lifting delicate sub-millimeter paper barbs off sticky mat."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for paper cellulose smoke and organic fumes."
    },
    exactParameters: {
      co2_50W: {
        sourceType: "CO2 Laser (10.6µm 50W ref)",
        power: "12% controller setting",
        speed: "120 mm/s (High-speed vector cut)",
        passes: 1,
        lineInterval: null,
        airAssist: "Medium air assist (15-20 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      diode10W: {
        sourceType: "10W Optical Output Blue Diode Laser (450nm ref)",
        power: "25% controller setting",
        speed: "1800 mm/min",
        passes: 1,
        lineInterval: null,
        airAssist: "Medium air assist (15-20 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test on a scrap corner of 300gsm cotton paper at 120 mm/s (8%, 10%, 12%, 14% power for CO2 50W). Identify the lowest power setting that achieves 100% clean paper drop-out cut with zero yellow edge burn.",
    steps: [
      {
        title: "Paper Mat Burnishing & Rear-Side Cut Strategy",
        action: "Burnish 300gsm cotton paper flat onto a low-tack sticky mat, place on laser bed, check active enclosure exhaust.",
        why: "Sticky mat holds delicate sub-millimeter feather barbs flat, preventing air assist from blowing paper pieces into beam path.",
        lookFor: "Paper held 100% flat on sticky mat without bubbles or edge lifting.",
        possibleFailure: "Unpinned paper blows around bed under air assist, catching fire in laser beam path.",
        detail: "Roll paper smoothly onto Cricut mat using a rubber brayer, seat mat on laser bed."
      },
      {
        title: "Inner-to-Outer Vector Cut Ordering Setup",
        action: "In LightBurn, set cut order optimization to 'Inner Shapes First', set CO2 parameters (120 mm/s @ 12% power, 15-20 PSI air assist).",
        why: "Cutting fine inner feather barbs before outer contours ensures paper remains structurally anchored to mat during intricate cuts.",
        lookFor: "Vector optimization preview showing inner feather barbs cutting before outer frame contours.",
        possibleFailure: "Cutting outer contours first allows paper piece to shift on mat during fine inner barb cutting.",
        detail: "Enable Inner Shapes First in LightBurn optimization settings, set 120 mm/s @ 12% power layer."
      },
      {
        title: "Precision Surface Focus & Air Assist Calibration",
        action: "Focus laser beam on top paper face plane, verify 15-20 PSI clean air assist, close enclosure, start exhaust.",
        why: "15-20 PSI air assist clears paper smoke without lifting fine 0.5mm paper feather barbs off sticky mat.",
        lookFor: "Laser focused sharply on paper surface; air assist stream blowing lightly at nozzle.",
        possibleFailure: "Excessive air assist (40+ PSI) peels fine paper barbs off sticky mat during cutting.",
        detail: "Adjust z-focus to paper surface, verify air assist line at 15 PSI, close enclosure, start exhaust."
      },
      {
        title: "Micro-Cut Execution & Tweezer Peel",
        action: "Press Start for single-pass high-speed cut, monitor run through enclosure window, then pry cut paper art off mat using fine tweezers.",
        why: "High speed (120 mm/s) flash-vaporizes cellulose kerf, leaving pristine snow-white edges without yellow burn.",
        lookFor: "Laser tracing fine feather barbs smoothly with zero yellow smoke charring.",
        possibleFailure: "Running too slow (20 mm/s) char-burns paper edges bright yellow.",
        detail: "Close enclosure, press Start, use fine tweezers to gently lift cut paper art off sticky mat."
      },
      {
        title: "Multi-Layer 3D Foam Standoff Framing Assembly",
        action: "Apply 3mm self-adhesive foam standoffs between 5 staggered paper art layers, stack in depth sequence, mount inside 3D shadow box frame.",
        why: "3mm foam standoffs create deep physical drop-shadows between paper layers, producing dramatic 3D lighting contrast.",
        lookFor: "5-layer paper feather artwork mounted inside shadow box frame with deep realistic drop-shadows.",
        possibleFailure: "Gluing paper layers flat together eliminates 3D depth and shadow contrast.",
        detail: "Stick 3mm foam pads to rear of each paper layer, stack 5 layers in sequence, seal inside shadow box frame."
      }
    ],
    troubleshooting: [
      {
        symptom: "Fine paper feather barbs get blown away or torn during cutting",
        probableCause: "Paper was not held flat on a sticky mat, or air assist pressure was set too high (>30 PSI)",
        correctiveAction: "Mount paper firmly onto a low-tack sticky mat and reduce air assist pressure to 15 PSI."
      },
      {
        symptom: "Cut paper edges exhibit ugly yellow/brown smoke stains",
        probableCause: "Laser power was set too high or cutting speed was too slow, causing cellulose charring",
        correctiveAction: "Increase cutting speed to 120 mm/s and lower laser power to 10-12% (CO2 50W)."
      },
      {
        symptom: "Paper catches fire on laser bed",
        probableCause: "Loose cut paper scraps flew into beam path without sticky mat holding them down",
        correctiveAction: "Always use a sticky mat to hold paper 100% flat and clean bed of loose paper scraps."
      }
    ],
    proTips: [
      "Always mount 300gsm paper onto a low-tack sticky mat to hold sub-millimeter feather barbs flat.",
      "Set vector cut path order to 'Inner Shapes First' so fine barbs cut before outer contours.",
      "Use 3mm foam standoffs between paper layers inside a 3D shadow box frame to create dramatic drop-shadow contrast."
    ],
  },

  // 31
  {
    id: "polypropylene-chemical-stencil",
    title: "Laser Cutting Polypropylene (PP) Industrial Chemical Spray Stencils",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    estimatedTime: "10 min design bridge prep, 8 min laser cut, 5 min deburring",
    targetMaterial: "0.8mm Chemical-Resistant Polypropylene (PP) Sheet (PVC-Free)",
    materials: [
      "0.8mm Polypropylene (PP) Sheet (Chemical resistant grade, 100% halogen-free)",
      "Masking Tape / Bed Standoff Pins",
      "Isopropyl Alcohol (IPA) 99%"
    ],
    tools: [
      "CO2 Laser (50W–80W class)",
      "LightBurn Software (Bridge Vector Stencil Editor)",
      "Metal Edge Scraping Tool / Razor Scraper"
    ],
    summary: "High-velocity vector cut calibration for 0.8mm halogen-free polypropylene (PP) chemical spray stencils, detailing PP thermal melt dynamics (160°C melting point), high-pressure air assist melt-rejection (35 PSI), stencil bridge tie vector design rules, focal point displacement (+0.5mm top-kerf widening), and flash-free edge deburring.",
    image: IMG.cnc2,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–80W class). 10.6µm beam wavelength is absorbed by polypropylene polymers.",
      unsuitableLasers: "Diode lasers (450nm) reflect off semi-translucent or white PP sheets and melt wide sticky trenches due to short focus depth.",
      minimumSpecs: "Enclosed CO2 laser, honeycomb or pin bed, clean air assist compressor (30-40 PSI), active enclosure smoke exhaust.",
      safetyHazards: "POLYMER MELT & SMOKE HAZARD: Polypropylene melts at 160°C and pyrolyzes into flammable hydrocarbon vapors. High air assist is mandatory to blow molten polymer through kerf before flame ignition. Polypropylene is 100% halogen-free (PVC-free) and safe for laser cutting.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 0.8mm chemical-resistant Polypropylene (PP) sheets. PP is a thermoplastic polymer ([-CH2-CH(CH3)-]n) with excellent resistance to industrial solvents, acids, and spray paints. Verify sheet is 100% halogen-free PP without PVC flame-retardant additives.",
    designPrep: "In LightBurn, prepare stencil graphics. Ensure all enclosed characters (A, B, D, O, P, Q, R) feature bridge vector ties (minimum 1.5mm bridge width in LightBurn Stencil Bridge tool) so interior island pieces remain attached during cutting. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin PP sheet flat to honeycomb bed using bed pins. Set focal Z offset to +0.5mm above top surface plane (widening top kerf to clear molten beads). Connect high-pressure air assist (35 PSI).",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Freezes molten PP ejecta rapidly, preventing raised bead formation along kerf margins."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for hydrocarbon fumes and melt smoke."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "32% controller setting",
        speed: "45 mm/s (High-velocity vector cut)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (35 PSI)",
        focusOffset: "+0.5mm (Focus set 0.5mm above top surface plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test on a scrap corner of 0.8mm PP sheet at 45 mm/s (25%, 30%, 35%, 40% power) with 35 PSI air assist. Inspect kerf for clean drop-out separation without thick melted lip beads.",
    steps: [
      {
        title: "PP Halogen-Free Verification & Pin Bed Mounting",
        action: "Verify 0.8mm PP sheet is halogen-free, pin sheet flat to bed standoffs, and check active enclosure exhaust.",
        why: "Pinning PP sheet elevates kerf above bed to allow air assist stream to flush molten polymer ejecta downward.",
        lookFor: "PP sheet pinned flat on standoffs without sagging; exhaust pulling active draft.",
        possibleFailure: "Cutting PP flat on steel honeycomb reflects beam back into kerf, welding bottom melt lip.",
        detail: "Pin 4 corners of PP sheet flat, verify +0.5mm Z focus offset above top surface."
      },
      {
        title: "Bridge Vector Stencil Tie Configuration",
        action: "In LightBurn, select stencil text/graphics and use Stencil Bridge Tool to add 1.5mm bridge ties on all enclosed island features (A, B, D, O, P, Q, R).",
        why: "Bridge ties anchor interior letter islands to outer stencil sheet, preventing islands from falling out during cutting.",
        lookFor: "All enclosed letter islands bridged securely with 1.5mm tie gaps.",
        possibleFailure: "Omitting stencil bridges causes interior islands (e.g. center of 'O') to drop out completely.",
        detail: "Apply 1.5mm bridge ties using LightBurn Stencil Tool, check preview for unanchored islands."
      },
      {
        title: "High Air Assist & Focal Offset Calibration",
        action: "Set Z focus offset +0.5mm above top face, open air assist valve to 35 PSI, close enclosure doors, start exhaust.",
        why: "Slightly defocusing +0.5mm opens top kerf width slightly; 35 PSI air assist freezes molten PP ejecta before lip beads form.",
        lookFor: "35 PSI air assist jet active; focus set 0.5mm above top PP surface.",
        possibleFailure: "Cutting PP with low air assist (<10 PSI) allows molten polymer to re-weld behind cutting beam.",
        detail: "Adjust Z bed height +0.5mm, open 35 PSI air assist valve, check safety eyewear."
      },
      {
        title: "High-Velocity Vector Cutting Execution",
        action: "Press Start for 1-pass vector cut at 45 mm/s @ 32% power (60W CO2).",
        why: "High travel speed (45 mm/s) minimizes thermal dwell time, vaporizing kerf without extensive melted zone.",
        lookFor: "Laser tracing stencil contours smoothly with bright blue-white spark; cut stencil pieces dropping out cleanly.",
        possibleFailure: "Cutting too slow (10 mm/s) melts PP into wide, distorted sticky channels.",
        detail: "Close enclosure, check 10.6µm glasses, press Start, observe vector stencil cut."
      },
      {
        title: "Razor Deburring & IPA Solvent Cleanse",
        action: "Remove cut PP stencil from bed, scrape any minor top lip flash using a razor scraper held at 45°, wipe stencil clean with 99% IPA.",
        why: "Scraper removes microscopic melt beads; IPA removes handling oils and leaves a solvent-resistant stencil ready for paint spraying.",
        lookFor: "Clean, flexible, sharp 0.8mm PP stencil with smooth, flash-free aperture edges.",
        possibleFailure: "Handling fresh cut hot PP without gloves causes skin burns from sticky molten polymer.",
        detail: "Hold razor blade at 45°, scrape lip flash along cut lines, wipe stencil both sides with IPA."
      }
    ],
    troubleshooting: [
      {
        symptom: "Cut stencil edges have thick, raised melted polymer beads that prevent flat contact during spray painting",
        probableCause: "Air assist pressure set too low or cutting travel speed too slow",
        correctiveAction: "Increase air assist pressure to 35 PSI, set focal point +0.5mm above surface, and increase cutting speed to 45 mm/s."
      },
      {
        symptom: "Center islands of enclosed letters (e.g., A, O, P) fall out during cutting",
        probableCause: "Bridge ties were omitted in vector design software",
        correctiveAction: "Use LightBurn Stencil Bridge tool to insert 1.5mm bridge ties on all enclosed features."
      },
      {
        symptom: "Polypropylene sheet warps severely on laser bed during long stencil job",
        probableCause: "Excessive heat build-up from slow cutting speeds or inadequate bed pinning",
        correctiveAction: "Pin sheet securely at 6-8 perimeter points and increase cutting velocity."
      }
    ],
    proTips: [
      "Polypropylene is 100% halogen-free (PVC-free) and completely safe for CO2 laser cutting.",
      "Set focal point +0.5mm above top surface to widen top kerf slightly, allowing 35 PSI air assist to flush molten PP cleanly.",
      "Scrape any minor top melt lip flash using a sharp razor blade held at a 45° angle before spray paint testing."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. POLYMER MELT SAFETY: Molten PP droplets cause severe skin burns; handle fresh cut sheets with heat-resistant gloves. Active exhaust extraction required for hydrocarbon fumes."
  },

  // 32
  {
    id: "mopa-brass-engraving-oxide",
    title: "Deep Brass MOPA Engraving & Chemical Black Oxide Antiquing Infill",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    estimatedTime: "15 min galvo setup, 20 min multi-pass ablation run, 15 min chemical oxide/polish",
    targetMaterial: "C360 Free-Cutting Brass Nameplate Stock (2.0mm thick)",
    materials: [
      "C360 Solid Brass Nameplate Stock (2mm uniform thickness)",
      "Chemical Brass Black Oxidation Liquid (Selenium Dioxide / Copper Sulfate solution)",
      "Acetone Solvent & 1200-Grit Silicon Carbide Sandpaper",
      "Clear Lacquer Spray Sealant"
    ],
    tools: [
      "30W–50W MOPA Fiber Galvo Laser (1064nm)",
      "LightBurn Galvo or EZCAD3 Software (3-Layer Multi-Angle Hatching)",
      "F-Theta Scan Lens (160mm focal length)",
      "Flat Wooden Sanding Block & Microfiber Cloth"
    ],
    summary: "Deep 0.5mm galvo vector ablation protocol into C360 solid brass nameplates followed by targeted selenium dioxide chemical black oxidation, detailing 3-layer multi-angle hatching (0°, 45°, 90°), interleaved cleaning passes (80 kHz / 32ns), copper selenide chemical bonding, and planar surface highlights polishing.",
    image: IMG.brass_coin,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers (1064nm wavelength, 30W–50W class with variable pulse width control 20ns-200ns). High peak pulse power density ablates C360 brass cleanly.",
      unsuitableLasers: "CO2 lasers (10.6µm) and diode lasers (450nm) reflect off bare brass, failing to reach ablation threshold.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta scan lens, dual red-dot focus pointers, HEPA metal fume extraction system.",
      safetyHazards: "TOXIC CHEMICAL & DUST HAZARD: Brass ablation produces airborne copper/zinc metal dust. Brass Black oxidation liquid contains toxic selenium dioxide (SeO2) and nitric acid. Wear nitrile gloves, safety goggles, and P3 respirator.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use solid C360 Free-Cutting Brass stock (61.5% Copper, 35.5% Zinc, 3% Lead, 2mm thickness). Avoid brass-plated steel; deep 0.5mm ablation cuts through thin plating, exposing dark steel cores. Degrease brass with acetone before laser processing.",
    designPrep: "In LightBurn Galvo, import graphic or text. Configure 3 distinct hatch layers: Layer 1 (0° scan angle, 0.02mm pitch), Layer 2 (45° scan angle, 0.02mm pitch), Layer 3 (90° scan angle, 0.02mm pitch). Multi-angle hatching eliminates parallel scan line trenching in deep brass cavities.",
    laserSetup: "Fixture brass plate flat in a precision alignment pocket jig. Converge dual red-dot focus pointers on top brass surface. Ensure local HEPA metal fume extraction is running.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (HEPA enclosure exhaust active)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist turned off for galvo brass marking; keep HEPA exhaust active."
    },
    exhaust: {
      configuration: "Industrial HEPA metal fume extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local HEPA exhaust sized for copper and zinc metal dust."
    },
    exactParameters: {
      mopa50W: {
        sourceType: "50W MOPA Fiber Galvo (1064nm ref)",
        power: "80% controller setting (Deep Ablation Pass) / 20% controller setting (Cleaning Pass)",
        speed: "1000 mm/s (Deep Ablation) / 2500 mm/s (Cleaning)",
        passes: "20 Ablation Loops + 2 Interleaved Cleaning Passes",
        lineInterval: "0.020mm hatch pitch (3-angle cross hatch)",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "30 kHz (Ablation) / 80 kHz (Cleaning)",
        pulseWidth: "200 ns (Deep Ablation) / 32 ns (Cleaning)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 20-loop deep ablation test box (10mm x 10mm) on scrap brass at 1000 mm/s @ 80% power, 30 kHz, 200ns. Measure depth with depth micrometer (target depth: 0.50mm ± 0.05mm).",
    steps: [
      {
        title: "Brass Degreasing & Pocket Fixturing",
        action: "Wipe C360 brass plate with acetone, secure flat inside galvo alignment jig, and start local HEPA fume extraction.",
        why: "Acetone removes finger oils that cause uneven laser absorption; HEPA extraction captures heavy metal dust.",
        lookFor: "Reflective brass face free of grease; HEPA filter pulling active airflow.",
        possibleFailure: "Ablating over oil spots causes discolored grey patches during initial 5 passes.",
        detail: "Wipe brass with acetone-dampened cloth, seat flat in jig pocket, turn on HEPA exhaust."
      },
      {
        title: "3-Angle Hatch Layer & Interleaved Cleaning Setup",
        action: "In LightBurn Galvo, configure 3 hatch layers (0°, 45°, 90° @ 0.02mm pitch), set 20 ablation loops (1000 mm/s @ 80%, 30 kHz, 200ns), and set 2 cleaning passes (2500 mm/s @ 20%, 80 kHz, 32ns).",
        why: "3-angle hatching prevents galvo trenching; interleaved cleaning passes burn off brass slag oxidation.",
        lookFor: "Multi-hatch preview active showing 3 scan angles and cleaning pass rules.",
        possibleFailure: "Omitting cleaning passes allows black oxide slag to build up, stopping beam penetration at 0.2mm depth.",
        detail: "Configure 3 hatch layers, set 0.02mm pitch, set cleaning pass rule every 10 passes."
      },
      {
        title: "Galvo Focus & Deep Ablation Run",
        action: "Converge dual red-dot focus pointers on top brass face, close enclosure, check 1064nm safety glasses, press Start.",
        why: "Delivers high peak pulse power density to ablate 25µm of brass per loop down to 0.50mm total depth.",
        lookFor: "Bright yellow plasma spark glowing smoothly inside engraved cavity walls.",
        possibleFailure: "Out-of-focus beam fails to ablate brass, leaving shallow discolored surface marks.",
        detail: "Focus galvo column, close enclosure, check 1064nm glasses, press Start."
      },
      {
        title: "Selenium Dioxide Chemical Black Oxidation",
        action: "Remove engraved brass, apply Brass Black liquid into engraved channels using a cotton swab, allow 30 seconds reaction time, rinse under cold water.",
        why: "Selenium dioxide reacts with copper content in brass, forming a durable, jet-black copper selenide (CuSe) surface layer inside channels.",
        lookFor: "Engraved brass cavities turning jet-black within 30 seconds of liquid contact.",
        possibleFailure: "Applying oxidation liquid onto greasy un-cleaned brass results in patchy grey oxidation.",
        detail: "Wear nitrile gloves, apply Brass Black into channels, wait 30s until jet black, rinse under tap water."
      },
      {
        title: "Planar Surface Sanding & Lacquer Sealing",
        action: "Sand top flat surface with 1200-grit paper backed by a flat wooden block, wipe clean with IPA, spray 2 coats of clear acrylic lacquer.",
        why: "Flat sanding removes excess black oxide from top face while preserving black inside 0.5mm channels; lacquer prevents brass tarnishing.",
        lookFor: "High 3D visual contrast between gleaming brass top face and jet-black engraved lettering.",
        possibleFailure: "Sanding without a flat wooden block rounds off top edges and scoops black oxide out of channels.",
        detail: "Sand top face flat with 1200-grit paper on wooden block, wipe with IPA, spray clear lacquer."
      }
    ],
    troubleshooting: [
      {
        symptom: "Deep engraved brass cavity has rough parallel scan line trenches on bottom floor",
        probableCause: "Single static hatch angle (0°) was used across all 20 ablation loops",
        correctiveAction: "Configure 3 distinct hatch angles (0°, 45°, 90°) rotated automatically on every pass."
      },
      {
        symptom: "Chemical Brass Black liquid produces a dull grey, patchy mark that rubs off",
        probableCause: "Brass cavity contained residual laser slag or grease, or oxidation time was too short",
        correctiveAction: "Scrub cavity with IPA and brass wire brush, re-apply Brass Black liquid, and wait 45 seconds before rinsing."
      },
      {
        symptom: "Brass plate warps or shifts in jig during 20-loop ablation run",
        probableCause: "Thermal heat accumulation across continuous passes without cooling pauses",
        correctiveAction: "Insert a 2-second delay pause between ablation passes to allow thermal dissipation."
      }
    ],
    proTips: [
      "Rotate galvo hatch angles (0°, 45°, 90°) on every pass to eliminate parallel scan trenches in deep brass cavities.",
      "Schedule a fast low-power cleaning pass (2500 mm/s @ 20% power, 80 kHz) every 10 passes to burn off brass slag.",
      "Apply Brass Black oxidation liquid with a cotton swab and sand top face with 1200-grit paper on a flat block for high-contrast architectural signs."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC CHEMICAL & DUST HAZARD: Brass ablation generates copper/zinc dust; active HEPA extraction required. Brass Black liquid contains toxic selenium dioxide; wear nitrile gloves and safety goggles."
  },

  // 33
  {
    id: "co2-12mm-acrylic-polished-edge",
    title: "Cutting 12mm Thick Cast Acrylic with Flame-Polished Crystal Edges",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    estimatedTime: "10 min lens/bed setup, 12 min vector cut, 5 min stress relief",
    targetMaterial: "12mm Clear Cell-Cast PMMA Acrylic Block",
    materials: [
      "12mm Clear Cell-Cast PMMA Acrylic Sheet (Polymethyl Methacrylate)",
      "Deionized Water / Microfiber Cloth",
      "Sacrificial Acrylic Standoff Pins / Blade Bed"
    ],
    tools: [
      "High-Power CO2 Laser (100W–150W class)",
      "Long Focal Length Lens (2.5 inch or 3.0 inch ZnSe lens)",
      "LightBurn Software",
      "Ultra-Low Pressure Air Assist Regulator (2-3 PSI)"
    ],
    summary: "Industrial optical focus displacement and gas pressure tuning protocol for cutting 12mm thick cell-cast PMMA acrylic blocks with glass-clear flame-polished edges, detailing Rayleigh length optics (3.0\" ZnSe lens), -4.0mm internal focus displacement (1/3 depth), ultra-low trickle air assist re-flow dynamics (2-3 PSI), and thermal stress crazing prevention.",
    image: IMG.acrylic_glow,
    prerequisites: {
      compatibleLasers: "High-power CO2 lasers (10.6µm wavelength, 100W–150W+ class). 10.6µm beam light is absorbed by PMMA acrylic, depolymerizing polymer chains into liquid monomer.",
      unsuitableLasers: "Diode lasers (450nm) pass straight through clear acrylic without absorption; fiber lasers (1064nm) pass through PMMA.",
      minimumSpecs: "High-power CO2 laser, 3.0\" long focal ZnSe lens, precision Z-bed axis, ultra-low trickle air assist (2-3 PSI), high-capacity exhaust.",
      safetyHazards: "MONOMER VAPOR & FIRE HAZARD: Laser depolymerization of thick 12mm PMMA generates high volumes of methyl methacrylate monomer gas (C5O2H8), which is highly flammable. Active high-capacity exhaust ducting is mandatory. Never leave machine unattended.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 12mm Clear Cell-Cast PMMA Acrylic sheets. Cell-cast acrylic exhibits high molecular weight (Mw > 1,000,000 g/mol) and depolymerizes cleanly under CO2 heat into liquid monomer that re-flows into a smooth glass-clear cut wall. Avoid extruded acrylic; extruded PMMA has lower molecular weight and melts into gummy, distorted kerf edges.",
    designPrep: "In LightBurn, prepare vector cut artwork. For 12mm thick acrylic, install a 2.5 inch or 3.0 inch focal length ZnSe lens. A 3.0\" lens extends Rayleigh length (depth of field) to 4.2mm, maintaining a parallel vertical beam cylinder through 12mm thickness without V-shaped hourglass taper. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Elevate 12mm acrylic sheet on blade bed or aluminum standoff pins to eliminate bottom laser back-reflection flash marks. Set Z focus offset to -4.0mm (positioned 4mm below top surface, 1/3 depth into material). Connect ultra-low trickle air assist (2-3 PSI).",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 3.0 inch long focal length lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null,
      notes: "3.0 inch lens extends Rayleigh length depth of field to 4.2mm, maintaining parallel cut walls."
    },
    airAssist: {
      mode: "Ultra-low trickle flow (2-3 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Ultra-low trickle air assist prevents frosting, allowing molten PMMA sidewalls to re-flow smooth like liquid glass."
    },
    exhaust: {
      configuration: "High-capacity local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for flammable methyl methacrylate monomer vapors."
    },
    exactParameters: {
      co2_130W: {
        sourceType: "CO2 Laser (10.6µm 130W ref)",
        power: "88% controller setting",
        speed: "3.2 mm/s (Slow single-pass vector cut)",
        passes: 1,
        lineInterval: null,
        airAssist: "Ultra-low trickle flow (2-3 PSI)",
        focusOffset: "-4.0mm (Focus positioned 4mm inside 12mm acrylic body)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 1-pass vector cut test on scrap 12mm cast acrylic at 3.2 mm/s @ 88% power (130W CO2) with 2-3 PSI air assist and -4.0mm focal offset. Inspect cut edge for glass-like clarity and 90° vertical cut walls.",
    steps: [
      {
        title: "3.0 Inch Lens Mounting & Standoff Elevation",
        action: "Install 3.0\" ZnSe lens nozzle, elevate 12mm cast acrylic block on blade standoffs, and start high-capacity exhaust.",
        why: "3.0\" lens provides long beam waist for parallel vertical walls; standoffs prevent bed back-reflection flash marks.",
        lookFor: "3.0\" lens mounted; acrylic block level on standoffs; heavy exhaust pulling active draft.",
        possibleFailure: "Using short 1.5\" lens causes severe V-shaped hourglass taper across 12mm thickness.",
        detail: "Mount 3.0\" lens, elevate acrylic block on aluminum blade standoffs, turn on high-capacity exhaust."
      },
      {
        title: "1/3 Depth Focal Offset (-4.0mm) Alignment",
        action: "Set laser Z bed focus offset to -4.0mm below top surface face (1/3 depth into 12mm acrylic block).",
        why: "Positioning focal point 1/3 depth into material balances power density between top entrance kerf and bottom exit kerf.",
        lookFor: "Laser beam focal waist positioned 4mm below top acrylic face plane.",
        possibleFailure: "Focusing on top surface starves bottom exit kerf of energy, causing uncut bottom tabs.",
        detail: "Adjust Z bed height -4.0mm below top surface focus plane using digital gauge."
      },
      {
        title: "Ultra-Low Air Assist Trickle Calibration (2-3 PSI)",
        action: "Set air assist regulator to ultra-low trickle flow (2-3 PSI).",
        why: "High pressure air (30+ PSI) freezes molten PMMA instantly into white frosted striations; low trickle allows molten walls to re-flow glass-smooth.",
        lookFor: "Very gentle air trickle detectable at nozzle face.",
        possibleFailure: "Running 40 PSI high air assist creates rough, frosted, striate cut edges requiring manual polishing.",
        detail: "Adjust air regulator down to 2-3 PSI, verify gentle trickle at nozzle."
      },
      {
        title: "Single-Pass Slow Vector Cut Execution",
        action: "Close laser enclosure doors, check 10.6µm safety eyewear, press Start for single pass cut at 3.2 mm/s @ 88% power (130W CO2).",
        why: "Slow travel speed dumps high energy density into kerf, depolymerizing PMMA cleanly in a single pass.",
        lookFor: "Concentrated blue-white plasma spark traveling slowly through acrylic with liquid monomer re-flowing behind beam.",
        possibleFailure: "Cutting too fast (8 mm/s) fails to penetrate 12mm thickness, causing beam stalls.",
        detail: "Close enclosure, check eyewear, press Start, observe 12mm acrylic cut execution."
      },
      {
        title: "Post-Cut Cooling Rest & Stress Crazing Prevention",
        action: "Allow cut acrylic part to rest undisturbed on laser bed for 2 minutes, remove gently, wipe with deionized water.",
        why: "Resting allows molten sidewalls to re-solidify without finger marks; avoiding alcohol wipes prevents instant stress crazing cracks.",
        lookFor: "Pristine, glass-clear, flame-polished 12mm acrylic cut edges requiring zero hand polishing.",
        possibleFailure: "Wiping fresh laser-cut warm acrylic with alcohol solvent causes instant spiderweb stress crazing cracks.",
        detail: "Wait 2 minutes for edges to re-solidify, handle with clean cloth gloves, wipe with water-dampened microfiber cloth."
      }
    ],
    troubleshooting: [
      {
        symptom: "12mm acrylic cut edges are heavily frosted and rough with vertical striation ridges",
        probableCause: "Air assist pressure was set too high (>20 PSI), chilling molten PMMA before it could re-flow smooth",
        correctiveAction: "Reduce air assist pressure to ultra-low trickle flow (2-3 PSI) and lower travel speed to 3.2 mm/s."
      },
      {
        symptom: "Cut walls are severely V-shaped / hourglass angled instead of 90° vertical",
        probableCause: "Using a short focal length lens (1.5\" or 2.0\") with rapid beam divergence",
        correctiveAction: "Install a 3.0 inch long focal ZnSe lens and set Z focus offset to -4.0mm (1/3 depth into material)."
      },
      {
        symptom: "Fine spiderweb micro-cracks (crazing) appear across acrylic cut edges after handling",
        probableCause: "Wiping warm laser-cut acrylic with alcohol or solvent cleaners",
        correctiveAction: "Never use alcohol on laser-cut acrylic; clean strictly with deionized water or dedicated acrylic cleaner."
      }
    ],
    proTips: [
      "Use a 3.0 inch long focal length ZnSe lens to maintain parallel 90° vertical cut walls on 12mm thick acrylic.",
      "Set air assist to ultra-low trickle flow (2-3 PSI); high air pressure freezes PMMA into frosted striations, while trickle air allows walls to re-flow glass-smooth.",
      "Never wipe laser-cut acrylic with alcohol or solvent cleaners; internal thermal stress causes instant spiderweb crazing cracks."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. FLAMMABLE MONOMER VAPOR HAZARD: Laser depolymerization of 12mm acrylic generates high volumes of flammable methyl methacrylate gas. High-capacity exhaust extraction required. Never leave machine running unattended."
  },

  // 34
  {
    id: "kumiko-japanese-wood-joinery",
    title: "Laser Cut Japanese Kumiko Geometric Joinery Coasters with Friction Fit",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "15 min kerf wizard calibration, 10 min laser cut, 20 min friction assembly",
    targetMaterial: "3mm Cherry Wood Veneer / Basswood Precision Sheets",
    materials: [
      "3mm Precision Cherry Wood Veneer or Basswood Sheets (Straight tight grain)",
      "Blue Painter's Masking Tape",
      "Wood Glue (Titebond II PVA - optional for frame)"
    ],
    tools: [
      "CO2 Laser (50W–80W class) or Diode Laser (20W reference)",
      "LightBurn Software (Kerf Offset Calibration Wizard)",
      "Digital Precision Vernier Caliper",
      "Small Wooden Mallet / Alignment Jig"
    ],
    summary: "Precision kerf-calibrated vector cutting protocol for 3mm cherry wood interlocking Japanese Kumiko geometric lattice joinery, detailing kerf width array measurement (10-slat array test), kerf offset calculation (+half kerf), tight grain wood selection, blue painter's masking, and adhesive-free friction-fit snap assembly.",
    image: IMG.walnut_inlay,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–80W class) or Diode lasers (450nm wavelength, 20W reference). CO2 laser light vaporizes wood cellulose cleanly.",
      unsuitableLasers: "Fiber lasers (1064nm) pass through organic wood fibers without clean thermal cut absorption.",
      minimumSpecs: "Enclosed laser machine, honeycomb bed, clean air assist compressor (25-35 PSI), active enclosure smoke exhaust.",
      safetyHazards: "FIRE HAZARD: Thin 1.2mm wood lattice slats and loose cutout scraps catch fire if trapped in bed honeycomb. Maintain active air assist (25-35 PSI), clean honeycomb grid of loose scraps before cutting, and keep fire extinguisher nearby.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 3mm straight, tight-grain Cherry wood veneer or Basswood precision sheets. Avoid wild grain plywood or knotted hardwoods; wild grain causes thin 1.2mm Kumiko lattice slats to warp and twist after cutting. Apply blue painter's masking tape to both sides of wood board before cutting to prevent smoke resin staining.",
    designPrep: "In LightBurn, load Kumiko lattice vector design. Perform 10-slat kerf array test: cut 10 identical 3.0mm test slats, push together, measure total gap width with digital caliper, and divide by 10 to determine exact laser kerf width (e.g. 0.14mm kerf). Apply +0.07mm Kerf Offset (Inward/Outward) in LightBurn vector layer settings to achieve exact mechanical friction fit.",
    laserSetup: "Pin masked 3mm cherry wood sheet flat to honeycomb bed using hold-down pins. Focus CO2 laser beam on top masked wood surface. Connect clean air assist (25-35 PSI) to clear joint notches.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (25-35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist keeps interlocking joint notches free of sticky wood smoke resin."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for wood cellulose smoke and resin VOCs."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "30% controller setting",
        speed: "35 mm/s (Vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (25-35 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 10-slat kerf test array on scrap 3mm cherry wood at 35 mm/s @ 30% power. Push 10 cut slats together inside a frame, measure total gap with caliper, and divide by 10 to calculate exact laser kerf.",
    steps: [
      {
        title: "10-Slat Kerf Array Measurement & Offset Calculation",
        action: "Cut 10 test slats in 3mm cherry wood, push together inside test jig, measure total gap with digital caliper, divide by 10 to derive laser kerf.",
        why: "Derives exact laser beam kerf width (e.g. 0.14mm); applying half kerf (+0.07mm offset) ensures tight mechanical friction fit.",
        lookFor: "Exact kerf value calculated (e.g. 0.14mm total kerf = +0.07mm offset per side).",
        possibleFailure: "Guessing kerf offset produces loose, sloppy Kumiko joints that fall apart without glue.",
        detail: "Cut 10 slats, measure combined gap with digital caliper, enter half-kerf value in LightBurn Kerf Offset box."
      },
      {
        title: "Double-Sided Blue Masking & Bed Pinning",
        action: "Apply blue painter's masking tape smoothly to both sides of 3mm cherry wood, pin flat to honeycomb bed, check active smoke exhaust.",
        why: "Masking tape absorbs top and bottom wood smoke resin halos, keeping 1.2mm joint notches clean for friction fit.",
        lookFor: "Wood sheet masked both sides, held flat without bowing.",
        possibleFailure: "Unmasked wood develops heavy brown smoke halos inside tiny Kumiko joint notches, preventing clean seating.",
        detail: "Burnish blue painter's tape on both faces, pin 4 corners flat to bed grid, turn on enclosure exhaust."
      },
      {
        title: "Precision Focal Alignment & High Air Assist Setup",
        action: "Focus CO2 laser on top masked wood plane, open air assist valve to 25-35 PSI, close enclosure doors.",
        why: "25-35 PSI air assist blows wood ash out of fine 0.14mm kerfs, leaving char-free joint notches.",
        lookFor: "Laser focused sharply; 30 PSI air assist stream active at nozzle.",
        possibleFailure: "Cutting with weak air assist (<10 PSI) leaves charcoal dust inside joint notches, distorting fit.",
        detail: "Adjust Z focus to top masked surface, open 30 PSI air assist valve, close enclosure."
      },
      {
        title: "Kumiko Lattice Vector Cutting Execution",
        action: "Press Start for 1-pass vector cut at 35 mm/s @ 30% power (60W CO2).",
        why: "High speed + moderate power cuts thin 1.2mm Kumiko slats with minimal charring and zero distortion.",
        lookFor: "Laser tracing intricate Kumiko lattice lines smoothly with bright blue spark; parts dropping out cleanly.",
        possibleFailure: "Cutting too slow (10 mm/s) burns thin 1.2mm wood slats, causing fragile breakage.",
        detail: "Close enclosure, check eyewear, press Start, observe vector lattice cut."
      },
      {
        title: "Masking Peel & Adhesive-Free Friction Snap Assembly",
        action: "Peel blue painter's tape off both sides, assemble outer square frame, snap diagonal Kumiko lattice strips into joint notches using thumb pressure.",
        why: "Correct kerf offset yields a satisfying mechanical 'click' lock, holding 3D geometric lattice together without glue.",
        lookFor: "Glass-tight Japanese Kumiko coaster holding rigid shape under hand pressure without glue.",
        possibleFailure: "Forcing misaligned joints snaps delicate 1.2mm cherry wood lattice slats.",
        detail: "Peel masking tape, assemble outer frame, snap diagonal Kumiko lattice pieces into notches until locked."
      }
    ],
    troubleshooting: [
      {
        symptom: "Interlocking Kumiko joint notches are too loose and fall apart without glue",
        probableCause: "Kerf Offset was left at 0.0mm or set too small in laser software settings",
        correctiveAction: "Run 10-slat kerf array test, calculate exact kerf, and apply full +0.07mm Kerf Offset in LightBurn."
      },
      {
        symptom: "Kumiko lattice slats snap or break during assembly (too tight)",
        probableCause: "Excessive Kerf Offset applied or wood slats swelled due to moisture",
        correctiveAction: "Reduce Kerf Offset setting by 0.02mm (e.g. from +0.07mm down to +0.05mm)."
      },
      {
        symptom: "Thin 1.2mm Kumiko slats warp and twist into bow shapes after cutting",
        probableCause: "Using wild-grain hardwood or plywood with internal growth stress",
        correctiveAction: "Switch to high-grade 3mm Basswood or straight, tight-grain Cherry wood veneer."
      }
    ],
    proTips: [
      "Run a 10-slat kerf array test to measure exact laser beam kerf width before cutting production Kumiko pieces.",
      "Apply blue painter's tape to both sides of wood board before cutting to eliminate sanding smoke halos.",
      "Use straight, tight-grain Cherry wood or Basswood; wild-grain hardwoods warp when cut into thin 1.2mm Kumiko slats."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. WOOD FIRE RISK: Small wood lattice scraps catch fire easily; clean honeycomb grid of loose scraps before cutting. Active air assist (30 PSI) and exhaust extraction required."
  },

  // 35
  {
    id: "glass-wine-bottle-rotary-cut",
    title: "Rotary Glass Wine Bottle Slicing & Diamond Hand Edge Polishing",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    estimatedTime: "15 min rotary chuck setup, 5 min laser score, 10 min thermal shock split, 20 min wet sanding",
    targetMaterial: "Standard Glass Wine Bottles (750ml, 3mm-4mm wall thickness)",
    materials: [
      "Clean Glass Wine Bottles (750ml, uniform wall thickness)",
      "Boiling Water & Ice Water Bath",
      "Diamond Hand Sanding Pads (120, 220, 400, 1000 grit)",
      "Masking Tape & Safety Goggles"
    ],
    tools: [
      "CO2 Laser (60W–100W class)",
      "Rotary Chuck Attachment (or Drive Roller Rotary)",
      "LightBurn Software",
      "Cut-Resistant Kevlar Gloves & P3 Respiratory Protection"
    ],
    summary: "Precision rotary thermal stress fracture protocol for slicing 750ml glass wine bottles into glass tumblers and candle holders, detailing 1-pass circumferential micro-crack scoring, air assist suppression logic, differential thermal shock separation (boiling water to ice bath), and wet diamond chamfering.",
    image: IMG.glass_bottle,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 60W–100W class). 10.6µm laser light is strongly absorbed by soda-lime glass, causing rapid surface thermal expansion.",
      unsuitableLasers: "Diode lasers (450nm) and fiber lasers (1064nm) pass through clear/green glass without thermal absorption.",
      minimumSpecs: "CO2 laser, chuck/roller rotary attachment, fine z-height adjustment, active exhaust extraction.",
      safetyHazards: "SHARP GLASS & THERMAL SHOCK HAZARD: Snapping glass bottles creates extremely sharp, jagged raw edges and flying glass shards. Wear cut-resistant Kevlar gloves and impact safety goggles. SILICA DUST WARNING: Sanding glass dry generates dangerous respirable crystalline silica dust; ALWAYS sand glass wet under running water.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select high-quality 750ml soda-lime glass wine bottles with uniform 3mm-4mm wall thickness. Avoid cheap, thin-walled or asymmetrical decorative bottles with heavy seam lines; uneven glass thickness causes thermal shock cracks to travel off-axis.",
    designPrep: "In LightBurn, set up rotary attachment configuration (calculate steps per rotation based on bottle diameter). Create a single 1-pass horizontal vector score line around bottle circumference. AIR ASSIST RULE: Turn air assist OFF; air cooling suppresses localized thermal shock micro-cracking required for clean snapping.",
    laserSetup: "Mount wine bottle level in rotary chuck attachment. Verify zero slippage during rotation. Focus CO2 laser beam on top bottle surface plane at apex of rotation cylinder.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist is turned off during glass scoring to allow maximum localized thermal stress micro-cracking."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for glass micro-particulates and surface dust."
    },
    exactParameters: {
      co2_80W: {
        sourceType: "CO2 Laser (10.6µm 80W ref)",
        power: "45% controller setting",
        speed: "40 mm/s (Rotary circumferential vector score speed)",
        passes: "1 Single Continuous Pass (Do NOT repeat pass)",
        lineInterval: null,
        airAssist: "Off at marking point (0 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 1-pass score test on a scrap wine bottle at 40 mm/s @ 45% power (80W CO2) with air assist OFF. Inspect score line under 10x loupe to confirm a single, continuous, frosted micro-crack line around circumference without deep glass chipping.",
    steps: [
      {
        title: "Rotary Attachment Leveling & Bottle Mounting",
        action: "Mount 750ml wine bottle in rotary chuck, level bottle body horizontally with bubble level, and check rotary step calibration.",
        why: "Level mounting ensures uniform focal distance across 360° rotation; chuck grip prevents bottle slippage.",
        lookFor: "Bottle spinning true and level without wobble or slippage.",
        possibleFailure: "Bottle slipping in rotary roller causes score line start and end points to mismatch.",
        detail: "Clamp bottle base in chuck, adjust tailstock support, level top apex with bubble indicator."
      },
      {
        title: "1-Pass Vector Score & Air Assist Suppression Setup",
        action: "In LightBurn, set 1-pass horizontal vector line (40 mm/s @ 45% power for 80W CO2), turn air assist OFF, focus laser on bottle apex.",
        why: "1 continuous pass creates a uniform micro-crack line; turning air assist off allows thermal heat concentration.",
        lookFor: "Laser focused sharply on bottle apex; air assist solenoid turned OFF.",
        possibleFailure: "Executing multiple passes shatters score line into ragged glass splinters.",
        detail: "Configure 1-pass line layer, turn off air assist line, adjust Z focus to top bottle apex."
      },
      {
        title: "Circumferential Micro-Crack Scoring Run",
        action: "Close laser enclosure doors, check 10.6µm safety eyewear, press Start for single 360° rotary score pass.",
        why: "Ablates a continuous micro-fracture line around bottle wall without penetrating through glass body.",
        lookFor: "Thin white frosted micro-crack line forming seamlessly around bottle circumference.",
        possibleFailure: "Laser power too high (>70%) causes glass deep chipping and thermal stress fractures prior to water bath.",
        detail: "Close enclosure, check eyewear, press Start, observe 1-pass rotary score."
      },
      {
        title: "Thermal Shock Differential Separation",
        action: "Drench score line with boiling water (100°C) for 10 seconds, then immediately plunge bottle into ice water bath (0°C).",
        why: "Extreme differential thermal expansion snaps glass cleanly along laser score line with a clear ringing sound.",
        lookFor: "Bottle snapping cleanly in two along score line with sharp, level separation.",
        possibleFailure: "Uneven thermal shock application causes crack to branch off-axis into bottle body.",
        detail: "Wear Kevlar gloves and goggles, pour boiling water over score line 10s, plunge into ice water bath."
      },
      {
        title: "Wet Diamond Edge Chamfering & Lip Polish",
        action: "Chamfer sharp raw glass edges under running tap water using diamond hand pads (120 grit → 220 grit → 400 grit → 1000 grit).",
        why: "Water traps toxic glass dust while progressive diamond grits transform sharp raw edges into a silky smooth drinking rim.",
        lookFor: "Silky smooth, rounded, safe drinking rim with zero sharp burrs or micro-chips.",
        possibleFailure: "Sanding glass dry generates airborne silica dust and creates micro-fracture chips.",
        detail: "Wear Kevlar gloves, sand raw glass rim under running tap water through 120-1000 grit pads, inspect rim."
      }
    ],
    troubleshooting: [
      {
        symptom: "Thermal shock crack wanders off-axis into bottle body instead of following laser score line",
        probableCause: "Bottle wall thickness was non-uniform or multiple overlapping laser score passes were executed",
        correctiveAction: "Execute strictly 1 single continuous score pass at 40 mm/s @ 45% power and use high-quality wine bottles."
      },
      {
        symptom: "Bottle fails to separate after repeated boiling and ice water cycles",
        probableCause: "Laser power was set too low, failing to create a continuous surface micro-crack line",
        correctiveAction: "Increase laser power by 5-10% to ensure a continuous white micro-crack line around circumference."
      },
      {
        symptom: "Glass bottle shatters in laser machine during rotary scoring",
        probableCause: "Laser power was set excessively high or bottle had pre-existing structural cracks",
        correctiveAction: "Lower laser power to 45% (80W CO2) and inspect bottles for hairline cracks before laser job."
      }
    ],
    proTips: [
      "Execute strictly 1 single continuous vector score pass; repeating passes shatters glass into ragged splinters.",
      "Turn air assist OFF during glass scoring to allow maximum localized thermal stress micro-cracking.",
      "ALWAYS sand glass wet under running tap water to trap dangerous respirable glass dust and prevent edge chipping."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. SHARP GLASS & CUT HAZARD: Snapping glass creates razor-sharp raw edges; wear Kevlar cut gloves and impact goggles. DUST HAZARD: Always wet-sand glass to eliminate respirable silica dust."
  },

  // 36
  {
    id: "copper-sheet-fiber-cutting",
    title: "Precision Fiber Laser Cutting 1mm Pure Copper Sheets with N2 Assist Gas",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "20 min",
    estimatedTime: "15 min gas/bed setup, 5 min laser cut, 10 min edge inspection",
    targetMaterial: "C11000 Pure Copper Sheet (1.0mm thickness)",
    materials: [
      "C11000 Pure Electrolytic Copper Sheet (1.0mm thickness, 99.9% Cu)",
      "High-Purity Compressed Nitrogen Gas Cylinder (99.999% N2)",
      "Anti-Reflective Laser Coating Spray (optional for low power)"
    ],
    tools: [
      "High-Power CW Fiber Laser Cutting System (1000W+ class)",
      "High-Pressure Nitrogen Gas Regulator (12 Bar / 174 PSI capability)",
      "1.2mm High-Pressure Laser Cutting Nozzle",
      "Digital Micrometer & Optical Inspection Microscope"
    ],
    summary: "High-power fiber laser cutting protocol for 1.0mm C11000 pure copper sheets, detailing copper NIR back-reflection dynamics (98% reflectivity at 1064nm), beam tilting protection (5° off-perpendicular), 12 Bar (174 PSI) high-pressure nitrogen gas assist, exothermal combustion suppression, and dross-free edge inspection.",
    image: IMG.metal_macro,
    prerequisites: {
      compatibleLasers: "High-power continuous-wave (CW) Fiber laser cutting systems (1064nm wavelength, 1000W–2000W+ class). Fiber laser beams achieve the extreme power density required to overcome copper's high thermal conductivity (400 W/mK).",
      unsuitableLasers: "CO2 lasers (10.6µm) reflect off copper completely; diode lasers (<40W) lack power to melt 1.0mm copper.",
      minimumSpecs: "Enclosed CW fiber laser cutter, 12 Bar N2 gas assist line, anti-reflection optic isolator, heavy bed slats.",
      safetyHazards: "HIGH PRESSURE GAS & BACK-REFLECTION HAZARD: Pure copper reflects 98% of 1064nm light until melted (1085°C). Unprotected back-reflected light damages fiber laser source optics; tilt cutting head 5° off-perpendicular if source lacks back-reflection isolator. N2 assist gas operates at extreme pressure (12 Bar / 174 PSI); secure high-pressure lines and cylinders.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use C11000 pure electrolytic copper sheet (1.0mm uniform thickness). Pure copper possesses ultra-high thermal conductivity (400 W/mK) and high reflectivity at room temperature. Inspect sheet for surface oxidation scale before cutting.",
    designPrep: "In laser cutting software, import vector cut geometries. Lead-in vectors (3.0mm arc lead-in with 1.0mm pierce dwell) must be used on all cut paths to establish copper melt pool before travel begins. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Support 1.0mm copper sheet on sacrificial steel bed slats. Set laser cutting head focal position to -0.5mm (focused 0.5mm inside copper thickness). Connect high-purity Nitrogen gas assist (12 Bar / 174 PSI) through a 1.2mm nozzle.",
    optics: {
      lens: "High-power Fiber Laser Cutting Head Lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure Nitrogen assist gas (12 Bar / 174 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure N2 blows molten copper through kerf without oxidation, leaving bright metallic edges."
    },
    exhaust: {
      configuration: "Industrial metal fume extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for copper vapor and metallic particulates."
    },
    exactParameters: {
      fiber1000W: {
        sourceType: "1000W CW Fiber Laser (1064nm ref)",
        power: "950W controller setting",
        speed: "45 mm/s (1.0mm copper cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure Nitrogen gas (12 Bar / 174 PSI)",
        focusOffset: "-0.5mm (Focal point set 0.5mm inside 1.0mm sheet)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 1-pass cut test on scrap 1.0mm copper at 45 mm/s @ 950W with 12 Bar N2 gas assist and -0.5mm focus offset. Inspect drop-out part for bright silver/gold metallic cut edges with zero bottom dross burrs.",
    steps: [
      {
        title: "12 Bar Nitrogen Gas Line & Head Tilt Verification",
        action: "Connect 99.999% pure Nitrogen gas line, set regulator to 12 Bar (174 PSI), check cutting head tilt (5° off-perpendicular if required), wear 1064nm OD6+ glasses.",
        why: "12 Bar N2 gas flushes molten copper without oxidation; 5° head tilt prevents reflected beam from striking fiber source.",
        lookFor: "N2 pressure stable at 12 Bar; cutting head secure; enclosure interlocks active.",
        possibleFailure: "Cutting copper with Oxygen gas creates violent exothermal burning and heavy black oxide dross.",
        detail: "Verify N2 cylinder pressure, open 12 Bar regulator, check cutting head alignment, turn on metal fume exhaust."
      },
      {
        title: "Mid-Thickness Focal Offset & Nozzle Alignment",
        action: "Install 1.2mm cutting nozzle, set focal position to -0.5mm inside 1.0mm copper sheet, center nozzle orifice precisely over laser beam.",
        why: "Mid-thickness focus (-0.5mm) balances power density across 1.0mm kerf; centered nozzle ensures uniform N2 gas delivery.",
        lookFor: "Laser beam firing cleanly through center of 1.2mm nozzle tip; Z focus set -0.5mm into plate.",
        possibleFailure: "Off-center nozzle causes uneven N2 gas stream, leaving heavy dross on one side of cut part.",
        detail: "Perform tape shot test on nozzle tip, adjust nozzle alignment screws until beam is centered, set -0.5mm focus."
      },
      {
        title: "Lead-In Arc & Pierce Dwell Parameter Configuration",
        action: "In cutting software, set 3.0mm arc lead-ins with 0.2s pierce dwell, set 1000W parameters (45 mm/s @ 950W, 12 Bar N2).",
        why: "Lead-in pierce establishes instant copper melt pool before movement begins, eliminating beam reflections.",
        lookFor: "Lead-in arcs active on all geometry cut paths in software preview.",
        possibleFailure: "Starting cut directly on part contour without lead-in causes initial beam reflection and contour burn hole.",
        detail: "Set 3mm lead-in arcs, set 0.2s pierce dwell time, set 45 mm/s travel speed, set 950W power."
      },
      {
        title: "High-Power Fiber Cut Execution",
        action: "Close laser enclosure doors, check 1064nm safety glasses, press Start for single-pass 1000W copper cut.",
        why: "Melts copper instantaneously while 12 Bar N2 gas stream ejects molten metal out bottom of kerf.",
        lookFor: "Bright, intense green spark stream exiting bottom of copper sheet with zero top splatter.",
        possibleFailure: "Cutting speed too fast (>65 mm/s) causes beam stall, reflecting high power back into head.",
        detail: "Close enclosure, check eyewear, press Start, observe 1000W copper cut execution."
      },
      {
        title: "Dross Inspection & Micrometer Dimensional Audit",
        action: "Remove cut copper parts, inspect bottom kerf face for dross burrs, measure part dimensions with digital micrometer.",
        why: "Bright metallic copper edge with zero bottom dross confirms perfect balance of power, speed, focus, and N2 pressure.",
        lookFor: "Gleaming metallic copper cut face, 90° vertical walls, zero dross burrs on bottom edge.",
        possibleFailure: "Dross burrs adhering to bottom edge indicate N2 gas pressure was too low (<8 Bar) or focus was off.",
        detail: "Examine cut edge under magnifying glass, check bottom perimeter for dross, measure dimensions with micrometer."
      }
    ],
    troubleshooting: [
      {
        symptom: "Heavy, hard copper dross burrs weld along bottom edge of cut parts",
        probableCause: "Nitrogen assist gas pressure set too low (<8 Bar) or cutting head focal position set too high",
        correctiveAction: "Increase Nitrogen assist gas pressure to 12 Bar (174 PSI) and lower focal position to -0.5mm inside sheet."
      },
      {
        symptom: "Fiber laser cutter trips back-reflection alarm during initial piercing pass",
        probableCause: "Bare copper reflected 1064nm laser beam straight back into fiber optical isolator",
        correctiveAction: "Tilt cutting head 5° off-perpendicular, increase pierce power, or apply anti-reflective spray coat to copper face."
      },
      {
        symptom: "Cut edge is heavily oxidized black and rough",
        probableCause: "Oxygen assist gas was used instead of Nitrogen, or Nitrogen gas purity was insufficient (<99.99%)",
        correctiveAction: "Switch strictly to 99.999% pure Nitrogen assist gas at 12 Bar pressure."
      }
    ],
    proTips: [
      "Use strictly 99.999% high-purity Nitrogen gas assist at 12 Bar (174 PSI) to produce bright dross-free copper edges.",
      "Set focal position -0.5mm inside 1.0mm copper sheet to balance power density across entire kerf depth.",
      "Never use Oxygen assist gas on copper unless heavy black oxidation scale is acceptable."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. HIGH PRESSURE GAS SAFETY: Nitrogen operates at 12 Bar (174 PSI); secure high-pressure lines and cylinders with safety chains. LASER SAFETY: 1000W+ CW fiber laser requires fully interlocked Class 1 enclosure and OD6+ 1064nm eyewear."
  },

  // 37
  {
    id: "brass-wax-seal-carving",
    title: "Deep Carving Custom Brass Wax Seal Stamps with Fiber Galvo Laser",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    estimatedTime: "15 min graphic invert prep, 25 min 3D galvo slice run, 10 min wax press test",
    targetMaterial: "Solid Brass Wax Seal Blanks (25mm round x 5mm thick)",
    materials: [
      "Solid Brass Wax Seal Stamp Blanks (25mm diameter x 5mm thickness)",
      "Sealing Wax Beads & Melting Spoon",
      "Acetone Solvent & Brass Wire Wheel"
    ],
    tools: [
      "30W–50W Fiber Galvo Laser System (1064nm)",
      "LightBurn Galvo or EZCAD3 Software (3D Slice / Draft Angle Tool)",
      "F-Theta Scan Lens (100mm or 160mm focal length)",
      "Envelope Paper & Wax Seal Press Block"
    ],
    summary: "Inverted 3D galvo micro-carving protocol into solid 25mm brass blanks for custom heraldic wax seal stamp heads, detailing depth-inverted graphics, horizontal mirroring, 120-layer sliced galvo hatching, 10° draft angle wall tapering, interleaved slag cleaning passes, and wax impression testing.",
    image: IMG.brass_coin,
    prerequisites: {
      compatibleLasers: "Fiber Galvo lasers (1064nm wavelength, 30W–50W class). High pulse frequency galvo scanning vaporizes brass cavities cleanly.",
      unsuitableLasers: "CO2 lasers (10.6µm) reflect off brass; diode lasers (<40W) lack power to carve deep 1.2mm metal cavities.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta scan lens, dual red-dot focus pointers, HEPA metal fume extraction system.",
      safetyHazards: "TOXIC METAL DUST & REFLECTION HAZARD: Deep brass ablation generates fine airborne copper/zinc micro-particles; active HEPA extraction required. Specular 1064nm beam reflections off polished brass face present eye hazards; OD6+ 1064nm eyewear required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use solid C360 Free-Cutting Brass round stamp blanks (25mm diameter x 5mm thickness). Solid brass exhibits excellent thermal stability and polishes to a high shine. Degrease stamp face with acetone prior to fixturing.",
    designPrep: "In LightBurn Galvo or EZCAD3, import heraldic vector artwork. CRITICAL 3D INVERSION RULES: Artwork MUST be horizontally mirrored AND inverted in depth (engrave background away down to 1.2mm depth, leaving text/graphics raised). Apply a 10° draft angle taper to raised letter walls in 3D slice settings so hot wax releases cleanly without tearing paper.",
    laserSetup: "Fixture 25mm brass stamp blank flat inside a brass alignment pocket jig. Converge dual red-dot focus pointers on top brass face plane. Ensure local HEPA metal fume extraction is running.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (100mm or 160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (HEPA enclosure exhaust active)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist turned off for galvo brass marking; keep HEPA exhaust running continuously."
    },
    exhaust: {
      configuration: "Industrial HEPA metal particulate & VOC extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local HEPA exhaust sized for copper and zinc metal dust."
    },
    exactParameters: {
      fiber30W: {
        sourceType: "30W Fiber Galvo (1064nm ref)",
        power: "75% controller setting (Deep 3D Slice Pass) / 20% controller setting (Interleaved Cleaning Pass)",
        speed: "1200 mm/s (Deep Ablation) / 3000 mm/s (Cleaning)",
        passes: "120 Sliced Layers (0.010mm step height) + 1 Cleaning Pass every 15 layers",
        lineInterval: "0.015mm hatch pitch (Auto-rotating hatch increment +33°)",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "30 kHz (Deep Ablation) / 80 kHz (Cleaning)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 30-layer 3D slice test on a scrap brass coin at 1200 mm/s @ 75% power, 30 kHz, 0.015mm hatch. Measure carved depth with digital caliper depth probe to verify 10 microns per pass removal rate.",
    steps: [
      {
        title: "Horizontal Mirroring & Depth Inversion Setup",
        action: "In LightBurn Galvo, select artwork, click Mirror Horizontal, set 3D Slice depth inversion (background engraved 1.2mm deep, graphics raised).",
        why: "Horizontal mirroring ensures wax seal impression reads correctly; depth inversion leaves raised brass letters that press deep impressions into hot wax.",
        lookFor: "Software 3D preview showing background recessed 1.2mm and text raised.",
        possibleFailure: "Engraving text directly without depth inversion produces a flat plate that cannot make wax seal impressions.",
        detail: "Load artwork, click Mirror Horizontal, select 3D Slice Mode, set 1.2mm depth, invert grayscale."
      },
      {
        title: "10° Draft Angle Wall Taper Configuration",
        action: "Enable 10° Draft Angle Wall Taper in 3D slice settings, set 120 sliced layers at 0.010mm step height, set +33° hatch angle rotation.",
        why: "10° tapered letter walls allow the brass stamp to release cleanly from hot sealing wax without sticking or tearing paper.",
        lookFor: "3D slice preview showing 10° sloped sidewalls on all raised letter graphics.",
        possibleFailure: "Vertical 90° letter walls trap hot wax, tearing the wax seal off envelope paper during stamping.",
        detail: "Set 10° draft angle taper, set 120 slice layers, set 0.015mm hatch spacing with +33° auto rotation."
      },
      {
        title: "Precision Galvo Focus & Interleaved Cleaning Rule Setup",
        action: "Converge dual red-dot focus pointers on top brass face, set cleaning pass rule (3000 mm/s @ 20% power, 80 kHz every 15 layers), start HEPA exhaust.",
        why: "Interleaved cleaning passes burn off brass oxide slag, allowing deep beam penetration down to 1.2mm total depth.",
        lookFor: "Dual red dots converged; cleaning pass rule active; HEPA exhaust running.",
        possibleFailure: "Omitting cleaning passes causes brass slag to build up, stopping ablation at 0.3mm depth.",
        detail: "Focus galvo column, configure cleaning pass every 15 layers, turn on HEPA metal fume extractor."
      },
      {
        title: "3D Slice Deep Carving Execution",
        action: "Close galvo enclosure doors, check 1064nm safety glasses, press Start for 120-layer 3D galvo slice run.",
        why: "Progressively ablates 10 microns of brass per layer, carving a 1.2mm deep background cavity with raised tapered graphics.",
        lookFor: "Yellow/white plasma spark glowing inside brass cavity; background dropping uniformly.",
        possibleFailure: "Shift in focus plane during 120-layer run causes shallow fuzzy background details.",
        detail: "Close enclosure, check eyewear, press Start, observe 120-layer 3D slice execution."
      },
      {
        title: "Brass Wire Scrub & Sealing Wax Impression Test",
        action: "Clean carved brass stamp with acetone and fine brass wire wheel, melt wax beads onto envelope, press brass stamp, inspect impression.",
        why: "Brass wire wheel removes loose ash; wax test verifies sharp crisp heraldic impression and clean release.",
        lookFor: "Sharp, detailed 3D wax seal crest on envelope with clean background release.",
        possibleFailure: "Wax sticking inside stamp channels indicates draft angle was insufficient or surface was unpolished.",
        detail: "Scrub stamp with acetone and wire wheel, melt 3 wax beads, press stamp into wax 5s, lift clean."
      }
    ],
    troubleshooting: [
      {
        symptom: "Wax seal stamp sticks inside hot wax and tears envelope paper when lifted",
        probableCause: "Raised letter walls were 90° vertical without draft angle taper, or brass cavity was rough with slag",
        correctiveAction: "Incorporate a 10° draft angle taper on raised letter walls in 3D slice settings and polish stamp with brass wire wheel."
      },
      {
        symptom: "Wax seal text reads backwards on envelope",
        probableCause: "Artwork was not horizontally mirrored in laser software before carving brass blank",
        correctiveAction: "Click 'Mirror Horizontal' on artwork in LightBurn Galvo before carving."
      },
      {
        symptom: "Ablation stops progressing after 30 layers / black crust fills cavity",
        probableCause: "Interleaved cleaning passes were omitted, allowing brass slag oxidation to trap laser energy",
        correctiveAction: "Configure software to run a high-speed cleaning pass (3000 mm/s @ 20% power, 80 kHz) every 15 layers."
      }
    ],
    proTips: [
      "Invert artwork depth and horizontally mirror graphics so raised brass letters press readable impressions into hot wax.",
      "Incorporate a 10° draft angle taper on raised letter sidewalls to ensure clean release from hot sealing wax.",
      "Schedule an interleaved cleaning pass every 15 layers to burn off brass slag oxidation during deep 1.2mm 3D carving."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC METAL DUST & REFLECTION HAZARD: Galvo brass ablation generates fine copper/zinc dust; active HEPA extraction required. Specular 1064nm beam reflections off brass require OD6+ 1064nm glasses. HOT WAX SAFETY: Sealing wax melts at 90°C; avoid skin burns."
  },

  // 38
  {
    id: "leather-passport-stitch-holes",
    title: "Genuine Vegetable-Tanned Leather Wallet Vector Stitch-Hole Punching & Edge Cutting",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "15 min setup, 8 min machine run, 25 min saddle stitch",
    targetMaterial: "Full-Grain Vegetable-Tanned Leather (1.5mm - 2.0mm thick)",
    materials: [
      "1.5mm - 2.0mm Full-Grain Vegetable-Tanned Leather Hide",
      "Waxed Linen Thread (0.8mm gauge)",
      "Neatsfoot Oil / Leather Conditioning Balm",
      "Low-Tack Paper Transfer Masking Tape",
      "Natural Beeswax Block"
    ],
    tools: [
      "CO2 Laser (40W-60W class) or High-Power Diode Laser (10W-20W reference)",
      "Saddle Stitching Needles (Harness Needles)",
      "Wooden Edge Burnisher Tool",
      "LightBurn Software",
      "Digital Precision Vernier Caliper",
      "Honeycomb Hold-Down Pins"
    ],
    summary: "Comprehensive engineering guide for laser vector punching 1.0mm stitching holes, scoring fold lines, and contour cutting genuine 100% vegetable-tanned leather goods for hand-saddle stitching, detailing leather chemistry (Veg-Tan vs Chrome-Tan toxicity), parameter optimization, paper smoke masking, and traditional beeswax edge burnishing.",
    image: IMG.leather_book,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–60W class) and Diode lasers (450nm wavelength, 10W–20W reference). Organic collagen fibers absorb infrared and blue laser wavelengths effectively.",
      unsuitableLasers: "Fiber galvo lasers (1064nm) pass through light tan organic leather without controlled cutting or char heavy spots unevenly.",
      minimumSpecs: "Enclosed laser system, high-flow local exhaust ventilation, moderate air assist (15-20 PSI).",
      safetyHazards: "MUST USE VEGETABLE-TANNED LEATHER ONLY. Chrome-tanned leather contains Chromium(III) salts which decompose under thermal ablation into highly toxic, carcinogenic Hexavalent Chromium (Cr VI) gas and corrode machine hardware.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Strictly specify 100% Vegetable-Tanned full-grain leather (1.5mm-2.0mm thickness). Chrome-tanned leather processing releases toxic Hexavalent Chromium (Cr VI) gas upon laser burning. To distinguish: Veg-tan leather has a natural tan/beige core color, smells like plant bark, and burns to a light grey ash; Chrome-tan leather often has a bluish core cross-section, feels spongy, and releases acrid chemical smoke. Measure leather thickness with digital calipers across 4 points prior to cutting.",
    designPrep: "In LightBurn, generate vector stitch hole patterns along seam lines using 1.0mm circle arrays spaced at 4.0mm center-to-center pitch. Set circle objects to Vector Cut layer. For perimeter shapes, use a continuous Vector Cut line. Perform a coupon cut test to verify stitch hole clearance. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin leather hide flat onto honeycomb bed using hold-down pins. Mask top leather face with low-tack paper transfer tape using a squeegee to prevent smoke tar halos. Focus laser precisely to top leather surface plane. Ensure high-flow local exhaust is running to evacuate burnt protein smoke.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Moderate clean air assist (15-20 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Airflow clears vaporized collagen smoke from 1.0mm hole cuts."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for burnt protein smoke and organic VOCs."
    },
    exactParameters: {
      co2_50W: {
        sourceType: "CO2 Laser (10.6µm 50W ref)",
        power: "35% controller setting (1.0mm Vector Hole Punching) / 55% controller setting (Perimeter Cut)",
        speed: "100 mm/s (Stitch Hole Punching) / 20 mm/s (Perimeter Cut)",
        passes: 1,
        lineInterval: null,
        airAssist: "Moderate airflow (15-20 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform test cuts of 1.0mm circles on scrap veg-tan leather from your hide. Verify that laser power punches cleanly through without scorching or enlarging hole diameters beyond 1.1mm.",
    steps: [
      {
        title: "Leather Chemistry Verification (Veg-Tan vs Chrome-Tan Safety)",
        action: "Confirm leather hide is 100% Vegetable-Tanned by inspecting the tan/beige core cross-section and supplier certification.",
        why: "Thermal breakdown of Chrome-Tanned leather generates carcinogenic Hexavalent Chromium (Cr VI) gas and corrodes machine rails.",
        lookFor: "Natural tan core color with firm, dense fiber structure.",
        possibleFailure: "Processing chrome-tan leather produces toxic chemical fumes and rapid rail corrosion.",
        detail: "Cut a 5mm test strip from hide edge; confirm firm veg-tan texture and natural bark aroma."
      },
      {
        title: "Paper Transfer Masking & Hide Thickness Measurement",
        action: "Measure leather hide thickness with digital calipers across 4 points and apply paper transfer tape firmly with a squeegee.",
        why: "Paper masking captures burnt collagen protein smoke resin, preventing dark yellow halos on light tan leather faces.",
        lookFor: "Smooth paper masking application free of air bubbles or wrinkles.",
        possibleFailure: "Unmasked leather absorbs sticky yellow smoke tar into raw pores.",
        detail: "Record caliper readings, apply low-tack transfer tape, and smooth with squeegee."
      },
      {
        title: "Vector Stitch Hole & Perimeter Cut Pattern Layout",
        action: "Position 1.0mm circle vector arrays at 4.0mm pitch along seam lines in LightBurn.",
        why: "Replaces manual pricking irons with exact 1.0mm vector holes spaced for two-needle saddle stitching.",
        lookFor: "Uniform 1.0mm circle arrays aligned along seam lines in software.",
        possibleFailure: "Setting hole size too small (<0.8mm) makes needle passage difficult during saddle stitching.",
        detail: "In LightBurn: create 1.0mm circle, apply Grid Array along vector paths, and assign Cut layer."
      },
      {
        title: "Surface Focus Alignment & Bed Fixturing",
        action: "Secure leather hide flat with honeycomb hold-down pins and set laser focus height gauge to top surface plane.",
        why: "Eliminates hide warping and ensures uniform beam waist across all 1.0mm stitch holes.",
        lookFor: "Leather resting dead flat against bed with focus gauge touching top plane.",
        possibleFailure: "Bowed leather shifts out of focal plane, leaving un-punched or enlarged stitch holes.",
        detail: "Insert hold-down pins around hide perimeter, lower focus gauge to top surface, and lock Z-axis."
      },
      {
        title: "Parameter Execution & Protein Fume Extraction",
        action: "Enable high-flow local exhaust, set air assist to moderate flow (15-20 PSI), and execute vector hole punching and perimeter cutting pass.",
        why: "Moderate air assist clears vaporized collagen smoke from tiny 1.0mm holes while exhaust evacuates burnt protein odor.",
        lookFor: "Clean vector punching of 1.0mm holes with zero smoke lingering on bed.",
        possibleFailure: "Disabling air assist leaves charred collagen plugs trapped inside stitch holes.",
        detail: "Start local exhaust ducting, verify Cut Settings, and launch vector cut."
      },
      {
        title: "Tape Peel, Hand Saddle Stitching & Edge Burnishing",
        action: "Peel paper transfer tape, hand-stitch panels with waxed linen thread using two-needle saddle stitch, rub cut edges with beeswax and a wooden burnisher, and condition with Neatsfoot oil.",
        why: "Peeling tape leaves clean leather highlights; beeswax and friction heat seal cut edges into a smooth glossy profile; Neatsfoot oil restores leather suppleness.",
        lookFor: "Clean leather face, tight saddle-stitched seams, and smooth burnished edges.",
        possibleFailure: "Omitting edge burnishing leaves raw charred leather edges that rub off black soot on hands.",
        detail: "Peel masking tape, saddle stitch with 0.8mm thread, apply beeswax to cut edges, burnish with wooden tool, and wipe with Neatsfoot oil."
      }
    ],
    troubleshooting: [
      {
        symptom: "Dark yellow/brown smoke stains on finished leather face",
        probableCause: "Paper transfer masking tape was omitted or air assist pressure was too low",
        correctiveAction: "Apply low-tack paper transfer tape prior to cutting and increase air assist pressure."
      },
      {
        symptom: "Stitch holes charred shut or sticky charred resin inside holes",
        probableCause: "Laser power setting too high or speed too slow during hole vector cutting",
        correctiveAction: "Increase speed by 20%, lower laser power, and verify 15-20 PSI air assist."
      },
      {
        symptom: "Leather edge is rough and black char rubs off on hands",
        probableCause: "Edge was not cleaned or burnished after laser cutting",
        correctiveAction: "Wipe cut edges with damp cloth, rub with natural beeswax, and burnish with wooden tool."
      },
      {
        symptom: "Acrid chemical smell and white powder residue on bed",
        probableCause: "Chrome-tanned leather was used instead of Vegetable-tanned leather",
        correctiveAction: "Immediately stop operation, purge exhaust, and switch to 100% Vegetable-Tanned leather."
      }
    ],
    proTips: [
      "Strictly verify leather is 100% Vegetable-Tanned; Chrome-Tanned leather releases toxic Chromium(VI) fumes upon laser cutting.",
      "Pre-mask leather hide with low-tack paper transfer tape before laser cutting to catch burnt collagen smoke tar.",
      "Rub laser-cut edges with natural beeswax and a wooden burnisher to convert charred fibers into a smooth glossy finish."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Leather Safety Notice: Strictly prohibit Chrome-Tanned leather due to toxic Hexavalent Chromium (Cr VI) gas release and rapid machine corrosion. Use 100% Vegetable-Tanned leather only. Burnt collagen protein produces strong organic fumes; use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed."
  },

  // 39
  {
    id: "paper-wedding-invitation-lace",
    title: "High-Speed Galvo Laser Cut Lace Wedding Invitations on Pearlized Cardstock",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "10 min",
    estimatedTime: "10 min vector design, 2 min galvo cut batch, 5 min assembly",
    targetMaterial: "250gsm Shimmer Pearlized Cardstock Sheets (Mica-Coated)",
    materials: [
      "250gsm Shimmer Pearlized Cardstock Sheets (Mica titanium coated)",
      "Thin Metal Wire Standoff Bed Pins (20mm elevation)",
      "Enclosure Dust Blower System"
    ],
    tools: [
      "CO2 Galvo Laser System (30W–60W class) or Flatbed CO2 Laser with Pin Bed",
      "LightBurn Software",
      "Vacuum Scrap Removal Drawer"
    ],
    summary: "High-speed CO2 galvo laser vector cutting protocol for delicate filigree lace wedding invitations on 250gsm pearlized cardstock, detailing galvo mirror scanning mechanics (1800 mm/s), smoke back-flash wire pin elevation (20mm bed standoff), mica coating thermal resistance, and paper fire prevention.",
    image: IMG.feather_art,
    prerequisites: {
      compatibleLasers: "CO2 Galvo lasers (10.6µm wavelength, 30W–60W class) or Flatbed CO2 lasers. 10.6µm beam wavelength is absorbed by organic paper cellulose.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm) pass through or burn white paper fibers uncontrollably.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta lens, wire standoff pins (20mm height), active smoke exhaust.",
      safetyHazards: "PAPER FIRE HAZARD: High-speed galvo scanning produces light paper micro-cutouts that can fly into beam path. Elevate cardstock on wire pins 20mm above bed floor, clean scrap drawer after every batch run, and keep fire extinguisher nearby.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 250gsm Shimmer Pearlized Cardstock. Pearlized cardstock contains a surface coating of titanium dioxide micro-mica particles that resist heat yellowing compared to raw wood pulp paper. Verify cardstock is acid-free and lignin-free.",
    designPrep: "In LightBurn, prepare filigree lace vector artwork. Ensure filigree lace lines maintain a minimum 0.8mm bridge wall thickness to prevent delicate paper strips from burning through. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Elevate cardstock sheet on 20mm wire standoff pins above bed floor. Focus CO2 galvo beam on top cardstock surface. Direct mild cross-draft air blower across bed surface to clear smoke without blowing paper off pins.",
    optics: {
      lens: "F-Theta Scan Lens (200mm focal length for CO2 Galvo)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Gentle cross-draft air stream (5-10 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Cross-draft air clears smoke away from optical path without dislodging light cardstock."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for paper smoke and mica dust."
    },
    exactParameters: {
      co2_galvo30W: {
        sourceType: "30W CO2 Galvo Laser (10.6µm ref)",
        power: "22% controller setting",
        speed: "1800 mm/s (Galvo vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "Gentle cross-draft air stream (5-10 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "25 kHz (Pulse frequency)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 1-pass filigree test cut on a corner of 250gsm pearlized cardstock at 1800 mm/s @ 22% power, 25 kHz. Inspect cut edges under magnifier for zero brown charring and clean drop-out separation.",
    steps: [
      {
        title: "20mm Wire Pin Elevation & Cardstock Placement",
        action: "Place cardstock sheet on 20mm wire standoff pins over honeycomb bed, check sheet lies flat, and verify active smoke exhaust.",
        why: "Elevating paper 20mm above bed floor prevents laser beam back-flash reflections from leaving yellow burn marks on rear shimmer coat.",
        lookFor: "Cardstock resting flat on 20mm wire pins with empty air gap beneath.",
        possibleFailure: "Cutting paper flat against honeycomb bed reflects laser beam, causing ugly grid flash marks on rear side.",
        detail: "Position 4 corner wire pins, lay 250gsm sheet flat, focus galvo Z column to top paper plane."
      },
      {
        title: "Filigree Bridge Wall Vector Inspection",
        action: "In LightBurn, inspect filigree lace design to confirm all cut paths maintain minimum 0.8mm bridge wall thickness.",
        why: "Thin filigree bridges (<0.5mm) burn away under rapid thermal energy, destroying fine lace patterns.",
        lookFor: "All filigree lace struts measuring >=0.8mm in software measurement tool.",
        possibleFailure: "Unchecked sub-0.5mm vector lines burn through, causing lace pattern to disintegrate.",
        detail: "Check vector geometry, measure wall thickness with LightBurn tool, set 1800 mm/s @ 22% power layer."
      },
      {
        title: "Gentle Cross-Draft Air Setup & Focus",
        action: "Focus F-Theta lens to top paper face, set mild cross-draft air stream (5-10 PSI), close galvo enclosure.",
        why: "Gentle cross-draft clears cellulose smoke from beam path without blowing light paper sheet off standoff pins.",
        lookFor: "F-Theta lens focused sharply; mild air draft active; paper stable on pins.",
        possibleFailure: "High pressure air assist (30+ PSI) blows light paper sheet off pins into laser beam.",
        detail: "Focus Z height, adjust air regulator to 5-10 PSI, check 10.6µm safety glasses."
      },
      {
        title: "Galvo Filigree Vector Cutting Execution",
        action: "Close enclosure doors, check safety eyewear, press Start for 1-pass galvo vector cut (1800 mm/s @ 22% power, 25 kHz).",
        why: "High galvo mirror scanning speed (1800 mm/s) cuts complex lace filigree in 14 seconds per sheet without charring.",
        lookFor: "Galvo laser tracing filigree vectors at ultra-high speed; cut paper lace dropping out cleanly.",
        possibleFailure: "Cutting too slow (100 mm/s on flatbed) causes char yellowing along paper margins.",
        detail: "Press Start, observe 14-second galvo filigree cut execution, verify clean drop-outs."
      },
      {
        title: "Scrap Vacuum Drawer Cleanup & Assembly",
        action: "Remove cut lace invitation, vacuum paper micro-scraps from bed drawer, insert printed inner invitation card.",
        why: "Clearing paper scraps prevents fire hazard on next run; pearlized shimmer face provides elegant high-contrast frame.",
        lookFor: "Clean filigree lace invitation with snow-white edges and zero rear flash marks.",
        possibleFailure: "Accumulated paper micro-scraps in bed drawer catch fire during subsequent batch runs.",
        detail: "Lift cardstock carefully, vacuum scrap drawer, insert printed cardstock insert into lace sleeve."
      }
    ],
    troubleshooting: [
      {
        symptom: "Filigree lace edges exhibit yellow/brown charring",
        probableCause: "Laser travel speed was too slow or laser power percentage set too high",
        correctiveAction: "Increase galvo marking speed to 1800 mm/s and lower laser power to 20-22%."
      },
      {
        symptom: "Rear side of pearlized cardstock has dark grid flash marks",
        probableCause: "Cardstock was laid flat on honeycomb bed without pin elevation",
        correctiveAction: "Elevate cardstock sheet on 20mm wire standoff pins to eliminate back-reflection."
      },
      {
        symptom: "Paper sheet blows off pins during laser execution",
        probableCause: "Air assist pressure set too high (>15 PSI)",
        correctiveAction: "Reduce air assist stream to a gentle cross-draft (5-10 PSI)."
      }
    ],
    proTips: [
      "Elevate pearlized cardstock on 20mm wire pins above bed floor to prevent rear back-flash burn marks.",
      "Shimmer pearlized cardstock contains mica titanium coatings that resist heat yellowing compared to standard paper.",
      "Clean paper micro-scraps from laser bed drawer after every batch run to eliminate fire hazards."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. PAPER FIRE HAZARD: Paper micro-scraps accumulate quickly in bed drawers; clean scrap drawer after every batch. Maintain active exhaust extraction."
  },

  // 40
  {
    id: "laser-marking-barcodes-iso15415",
    title: "Laser Marking Barcodes & DataMatrix Codes to ISO/IEC 15415 Grade A Standards",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    estimatedTime: "15 min barcode generator setup, 5 min laser mark, 10 min verifier audit",
    targetMaterial: "316L Stainless Steel Medical Instruments & Automotive Metal Parts",
    materials: [
      "316L Stainless Steel Medical Stock / Passivated Automotive Parts",
      "99% Isopropyl Alcohol (IPA) / Microfiber Wipes",
      "ISO/IEC 15415 Verified DataMatrix Test Targets"
    ],
    tools: [
      "20W–50W Fiber Galvo Laser System (1064nm)",
      "Cognex / Keyence Industrial Barcode Verifier (ISO 15415 compliant)",
      "LightBurn Galvo or EZCAD3 Barcode Generator Software",
      "F-Theta Scan Lens (160mm focal length)"
    ],
    summary: "Precision galvo laser marking protocol for 2D DataMatrix ECC200 QR codes onto 316L stainless steel medical instruments achieving ISO/IEC 15415 Grade A (4.0/4.0) verification scores, detailing symbol contrast (SC), modulation (MOD), cell module hatch pitch (0.015mm), 3x quiet zone rules, and two-pass oxidation/cleaning passes.",
    image: IMG.metal_macro,
    prerequisites: {
      compatibleLasers: "Fiber Galvo lasers (1064nm wavelength, 20W–50W class). High pulse frequency galvo scanning creates crisp oxidation contrast on metallic surfaces.",
      unsuitableLasers: "CO2 lasers (10.6µm) reflect off bare stainless steel without metal-marking compound paste.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta 160mm lens, dual red-dot focus, ISO/IEC 15415 barcode verifier, HEPA metal dust exhaust.",
      safetyHazards: "1064nm SPECULAR REFLECTION & FUME HAZARD: Marking polished metals generates specular reflections of 1064nm light; OD6+ 1064nm safety eyewear required. Chromium oxide micro-particles require local HEPA fume extraction.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 316L Surgical Stainless Steel or passivated automotive alloy parts. Clean surface thoroughly with 99% IPA before laser marking; finger oils reduce modulation contrast, dropping ISO 15415 grades from A down to C.",
    designPrep: "In LightBurn Galvo, create 2D DataMatrix ECC200 barcode generator. Set Module Size to 0.25mm per cell. Configure 3x Quiet Zone margin (minimum 0.75mm white border around symbol). Configure 2 passes: Pass 1 (Oxidation Fill @ 1500 mm/s, 35% power, 40 kHz, 0.015mm cross-hatch) and Pass 2 (Border Clean Pass @ 2500 mm/s, 18% power, 80 kHz).",
    laserSetup: "Fixture 316L stainless part flat in precision alignment nest. Converge dual red-dot focus pointers precisely on top metal face plane. Start HEPA metal fume extraction system.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (HEPA enclosure exhaust active)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist turned off for galvo barcode marking; keep HEPA exhaust active."
    },
    exhaust: {
      configuration: "Industrial HEPA metal fume extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local HEPA exhaust sized for metallic chromium/nickel dust."
    },
    exactParameters: {
      fiber30W: {
        sourceType: "30W Fiber Galvo (1064nm ref)",
        power: "35% controller setting (Pass 1 Oxidation) / 18% controller setting (Pass 2 Edge Clean)",
        speed: "1500 mm/s (Pass 1) / 2500 mm/s (Pass 2)",
        passes: "2 Passes (Pass 1 Cell Fill + Pass 2 Border Clean)",
        lineInterval: "0.015mm hatch pitch (Cross-hatch grid)",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "40 kHz (Pass 1) / 80 kHz (Pass 2)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Mark a 10mm x 10mm DataMatrix code test grid on scrap 316L stainless steel. Scan marked code with an ISO 15415 compliant barcode verifier under 45° diffuse lighting to audit Symbol Contrast (SC >= 70%) and Modulation (MOD >= 0.60).",
    steps: [
      {
        title: "316L Solvent Cleanse & Nest Fixturing",
        action: "Wipe 316L stainless steel part with 99% IPA using a lint-free cloth, seat flat in alignment nest, start HEPA fume extraction.",
        why: "IPA eliminates grease oils that cause uneven laser absorption; alignment nest guarantees perpendicular 90° beam angle.",
        lookFor: "Degreased stainless face; part seated flat without tilting.",
        possibleFailure: "Marking over oil prints reduces Modulation score, dropping ISO verifier grade from A to C.",
        detail: "Wipe metal face with IPA cloth, seat in alignment fixture, turn on HEPA exhaust."
      },
      {
        title: "ECC200 DataMatrix Generator & 3x Quiet Zone Setup",
        action: "In LightBurn Galvo, generate DataMatrix ECC200 symbol, set 0.25mm cell module size, set 3x Quiet Zone margin (0.75mm border).",
        why: "3x Quiet Zone margin prevents surrounding metal reflections from corrupting verifier edge detection.",
        lookFor: "DataMatrix symbol active with clear 0.75mm un-marked quiet zone border in preview.",
        possibleFailure: "Omitting Quiet Zone margin causes verifier edge detection failures, resulting in automatic Grade F.",
        detail: "Create DataMatrix barcode, set 0.25mm module size, set 3x Quiet Zone parameter."
      },
      {
        title: "Two-Pass Oxidation & Edge Clean Layer Setup",
        action: "Set Pass 1 (0.015mm cross-hatch @ 1500 mm/s, 35% power, 40 kHz) and Pass 2 (Border Clean Line @ 2500 mm/s, 18% power, 80 kHz).",
        why: "Pass 1 creates dark high-contrast oxide cells; Pass 2 cleans cell boundaries for razor-sharp Modulation definition.",
        lookFor: "Two layer passes configured in software: Pass 1 cross-hatch fill + Pass 2 contour clean.",
        possibleFailure: "Single pass marking leaves fuzzy cell edges, lowering Modulation scores below 0.60.",
        detail: "Configure Layer 1 cross-hatch fill, configure Layer 2 contour line, set 0.015mm hatch pitch."
      },
      {
        title: "Precision Galvo Focus & Execution",
        action: "Converge dual red-dot focus pointers on top metal face plane, close galvo enclosure, check 1064nm safety glasses, press Start.",
        why: "Precise focus ensures tiny 0.25mm cell modules mark with sharp square edges.",
        lookFor: "Galvo laser tracing crisp dark DataMatrix cells in 2 seconds.",
        possibleFailure: "Out-of-focus galvo beam produces rounded oval cells that fail Axial Non-Uniformity metrics.",
        detail: "Focus galvo Z column, close enclosure, check 1064nm glasses, press Start."
      },
      {
        title: "ISO/IEC 15415 Industrial Verification Audit",
        action: "Scan marked 316L part with Cognex/Keyence barcode verifier under 45° diffuse lighting; review verification report score.",
        why: "Validates Grade A (4.0/4.0) scores across Symbol Contrast, Modulation, Axial Non-Uniformity, and Unused Error Correction.",
        lookFor: "Verification report displaying overall Grade A (4.0/4.0) PASS score.",
        possibleFailure: "Scoring Grade C or lower requires recalibrating hatch pitch or cleaning metal face.",
        detail: "Place verifier camera over DataMatrix mark, trigger 45° diffuse flash audit, verify 4.0/4.0 report output."
      }
    ],
    troubleshooting: [
      {
        symptom: "DataMatrix verification score drops to Grade C or F due to low Modulation (MOD)",
        probableCause: "Cell module edges were fuzzy due to single-pass marking or surface oil contamination",
        correctiveAction: "Wipe stainless steel with 99% IPA and add Pass 2 high-speed contour cleaning pass (2500 mm/s @ 18% power, 80 kHz)."
      },
      {
        symptom: "Symbol Contrast (SC) score is below 70%",
        probableCause: "Laser power was set too low or scan speed too fast, yielding light grey cells instead of dark black oxides",
        correctiveAction: "Increase Pass 1 laser power by 5% or reduce scan speed from 1500 mm/s down to 1200 mm/s."
      },
      {
        symptom: "Axial Non-Uniformity (ANU) score fails on curved cylindrical parts",
        probableCause: "Marking on a curved metal surface without enabling 3D cylinder projection correction",
        correctiveAction: "Enable LightBurn 3D Rotary / Cylinder Projection tool to correct focal distortion on curved shafts."
      }
    ],
    proTips: [
      "Wipe metal surface with 99% IPA before laser marking; finger oils reduce Modulation contrast.",
      "Incorporate a 3x module width Quiet Zone margin around DataMatrix symbols to guarantee verifier edge detection.",
      "Execute a fast low-power cleaning pass (2500 mm/s @ 18% power, 80 kHz) to sharpen cell borders for ISO Grade A scores."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. 1064nm SPECULAR REFLECTION & DUST HAZARD: Specular reflections off metal faces require OD6+ 1064nm safety eyewear. HEPA metal fume extraction is mandatory for chromium/nickel dust."
  },

  // 41
  {
    id: "solid-walnut-bas-relief",
    title: "Solid American Walnut 3D Bas-Relief Carving with Dynamic Depth Slicing",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "19 min",
    estimatedTime: "20 min 16-bit depth map prep, 45 min 3D laser carving, 24h drying/shellac finish",
    targetMaterial: "Kiln-Dried American Black Walnut Timber (30mm thickness)",
    materials: [
      "Kiln-Dried American Black Walnut Timber (30mm uniform thickness)",
      "Brass Detail Wire Brush & Deionized Water",
      "Dewaxed Amber Shellac & Denatured Alcohol",
      "Pure Botanical Walnut Oil"
    ],
    tools: [
      "High-Power CO2 Laser (80W–130W class)",
      "LightBurn Software (16-Bit Grayscale 3D Mode)",
      "Digital Precision Vernier Caliper",
      "Soft Microfiber Cloths"
    ],
    summary: "Deep 8mm 3D bas-relief architectural carving protocol into kiln-dried American Black Walnut timber using 16-bit grayscale depth maps, detailing Juglans nigra Janka hardness (1010 lbf) and juglone pigment pyrolysis, 2.0\" lens internal focus offset (+2.0mm inside body), post-carving water ash scrubbing, and dewaxed shellac sealing.",
    image: IMG.wood_relief,
    prerequisites: {
      compatibleLasers: "High-power CO2 lasers (10.6µm wavelength, 80W–130W class). CO2 laser light is strongly absorbed by walnut wood cellulose and lignin.",
      unsuitableLasers: "Diode lasers (<20W) lack power to carve deep 8mm 3D bas-relief pockets, causing severe surface charring.",
      minimumSpecs: "Enclosed CO2 laser, honeycomb bed, active high-capacity smoke exhaust (250+ CFM), clean air assist compressor (25-35 PSI).",
      safetyHazards: "WOOD SMOKE & ASH HAZARD: Deep 8mm walnut carving generates massive volumes of dense wood smoke resin and charcoal ash. Active high-capacity smoke exhaust extraction (250+ CFM) is mandatory. Never leave machine running unattended.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select quarter-sawn kiln-dried American Black Walnut timber (Juglans nigra, 30mm thickness). Black walnut features a Janka hardness of 1,010 lbf and rich natural juglone pigments that carve into deep chocolate tones under laser heat. Quarter-sawn timber minimizes cup warping during heavy thermal laser engraving.",
    designPrep: "Import a 16-bit smooth grayscale depth map PNG image into LightBurn. Enable '3D Grayscale' image mode. Configure power modulation: Min Power 10% (shallow white highlights) to Max Power 75% (deep 8mm black shadows) @ 300 mm/s, 350 DPI (0.072mm line interval). For supported GCode devices, enable Overscanning default.",
    laserSetup: "Secure walnut timber flat on honeycomb bed using heavy hold-down clamps. Focus 2.0 inch ZnSe lens on top wood surface, then set Z height focus offset +2.0mm inside material body (positioned 2.0mm below top face). Connect 25-35 PSI air assist to purge charcoal ash.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null,
      notes: "Focused +2.0mm inside material body to balance power density across 8mm depth range."
    },
    airAssist: {
      mode: "High pressure clean air assist (25-35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Purges dense carbon ash out of deep 8mm sculpted relief pockets."
    },
    exhaust: {
      configuration: "High-capacity local enclosure smoke exhaust system (250+ CFM)",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for heavy wood smoke and resin VOCs."
    },
    exactParameters: {
      co2_100W: {
        sourceType: "CO2 Laser (10.6µm 100W ref)",
        power: "Min 10% to Max 75% controller dynamic power range",
        speed: "300 mm/s (3D Grayscale scan speed)",
        passes: 1,
        lineInterval: "0.072mm (350 DPI)",
        airAssist: "High pressure air assist (25-35 PSI)",
        focusOffset: "+2.0mm (Focus set 2.0mm inside timber body)",
        lightburnMode: "3D Grayscale Fill",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 16-bit grayscale step-wedge gradient test (20mm x 50mm) on scrap walnut timber at 300 mm/s @ 10-75% power range, 350 DPI. Measure maximum depth with digital caliper depth gauge (target depth: 8.0mm ± 0.5mm).",
    steps: [
      {
        title: "Quarter-Sawn Walnut Selection & Clamp Bed Mounting",
        action: "Select 30mm quarter-sawn black walnut timber, clamp flat to honeycomb bed using hold-down clamps, verify high-capacity exhaust.",
        why: "Quarter-sawn timber resists thermal cup warping; heavy clamps prevent board shifting during 45-minute carving runs.",
        lookFor: "Walnut board clamped dead flat on bed; 250+ CFM exhaust pulling active draft.",
        possibleFailure: "Unclamped timber warps upward under localized laser heat, hitting laser nozzle head.",
        detail: "Inspect grain, clamp 4 corners tightly, focus CO2 lens, turn on 250+ CFM exhaust."
      },
      {
        title: "16-Bit Grayscale 3D Mode & Power Range Calibration",
        action: "In LightBurn, load 16-bit depth map PNG, select 3D Grayscale mode, set Min Power 10%, Max Power 75% (100W CO2), set 350 DPI (0.072mm line interval).",
        why: "16-bit depth maps provide 65,536 smooth depth gradations, eliminating 8-bit staircase contour banding.",
        lookFor: "Smooth 3D preview without visible contour steps; 350 DPI line interval set.",
        possibleFailure: "Using an 8-bit PNG image causes severe stair-step terracing across smooth 3D relief contours.",
        detail: "Load 16-bit PNG, select 3D Grayscale mode, set 10% min to 75% max power, set 350 DPI."
      },
      {
        title: "+2.0mm Internal Focal Offset Alignment",
        action: "Set laser Z bed focus height +2.0mm inside material body (2.0mm below top surface plane), open 25-35 PSI air assist valve.",
        why: "Positioning focal point +2.0mm inside timber balances focal waist across the 0mm-8mm depth relief range.",
        lookFor: "Focal plane set 2mm below top surface face; 30 PSI air assist jet active.",
        possibleFailure: "Focusing strictly on top face starves deep 8mm shadow pockets of laser power.",
        detail: "Adjust Z height +2.0mm inside wood body, open 30 PSI air assist valve, close enclosure."
      },
      {
        title: "3D Bas-Relief Carving Execution",
        action: "Close laser enclosure doors, check 10.6µm safety eyewear, press Start for 45-minute 3D grayscale carving pass.",
        why: "Dynamic power modulation carves smooth 3D contours into walnut timber down to 8mm max depth.",
        lookFor: "Laser scanning cross-raster lines smoothly, sculpting deep chocolate walnut relief details.",
        possibleFailure: "Low air assist (<10 PSI) allows carbon ash to build up in deep pockets, blocking laser beam penetration.",
        detail: "Close enclosure, check eyewear, press Start, monitor 45-minute 3D relief carving."
      },
      {
        title: "Water Ash Scrubbing & Dewaxed Shellac Finish",
        action: "Scrub carved walnut under running warm water with a soft brass wire brush along grain, dry 24 hours, apply 2 coats of dewaxed amber shellac, buff with walnut oil.",
        why: "Brass brush purges loose carbon ash; shellac locks wood fibers; walnut oil restores deep natural chocolate sheen.",
        lookFor: "Sculpted 3D walnut relief displaying rich chocolate tones and zero carbon soot.",
        possibleFailure: "Applying oil finish over unwashed carbon ash turns sculpted relief into a muddy black smear.",
        detail: "Scrub relief under warm water with brass brush, dry 24h, apply 2 coats shellac, rub with walnut oil."
      }
    ],
    troubleshooting: [
      {
        symptom: "3D sculpted relief exhibits severe stair-step contour terraces",
        probableCause: "An 8-bit PNG depth map (256 shades) was used instead of a true 16-bit grayscale image (65,536 shades)",
        correctiveAction: "Export source 3D depth map artwork as a 16-bit uncompressed PNG image."
      },
      {
        symptom: "Deep 8mm carved pockets are filled with thick black carbon ash",
        probableCause: "Air assist pressure was too low to purge heavy charcoal ash from deep cavities",
        correctiveAction: "Increase air assist pressure to 30-35 PSI and ensure 2.0\" lens is focused +2.0mm inside material."
      },
      {
        symptom: "Walnut board warps and cups during 45-minute carving run",
        probableCause: "Using flat-sawn lumber or failing to clamp board securely to laser bed",
        correctiveAction: "Select quarter-sawn walnut timber and secure all 4 corners with heavy bed clamps."
      }
    ],
    proTips: [
      "Use true 16-bit grayscale PNG depth maps to eliminate stair-step terracing in 3D laser bas-relief carving.",
      "Focus CO2 laser +2.0mm inside material body to balance focal waist density across 8mm depth range.",
      "Scrub carved relief under running water with a soft brass wire brush to purge carbon ash before applying shellac finish."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. WOOD SMOKE & DUST HAZARD: Deep 8mm carving generates heavy wood smoke and ash; high-capacity exhaust (250+ CFM) required. Never leave machine unattended during long 3D carving runs. Solvent Safety: Denatured alcohol is flammable."
  },

  // 42
  {
    id: "delrin-precision-gears",
    title: "Cutting Delrin (POM) Precision Mechanical Gears & Bushings",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "13 min",
    estimatedTime: "15 min involute gear CAD design, 8 min vector cut, 5 min mesh audit",
    targetMaterial: "3.0mm Acetal / Delrin (POM PolyOxyMethylene) Engineering Sheet",
    materials: [
      "3.0mm Delrin / Acetal Sheet (PolyOxyMethylene POM-C / POM-H, Homopolymer or Copolymer)",
      "Digital Precision Vernier Caliper (0.01mm resolution)",
      "Steel Dowel Pins (5.0mm diameter) for gear mesh testing"
    ],
    tools: [
      "CO2 Laser (50W–100W class)",
      "LightBurn Software (Vector Kerf Offset Tool)",
      "Active Formaldehyde Outdoor Exhaust Blower System"
    ],
    summary: "Precision vector cutting protocol for 3.0mm engineering acetal (Delrin / POM) mechanical gears and low-friction bushings, detailing POM direct solid-to-gas sublimation physics (zero melt lip), involute gear kerf offset calculation (+half kerf), high air assist (30 PSI), and formaldehyde gas exhaust safety.",
    image: IMG.cnc1,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–100W class). 10.6µm beam wavelength is strongly absorbed by polyoxymethylene polymer chains.",
      unsuitableLasers: "Diode lasers (<20W) and fiber lasers (1064nm) reflect off or melt white/black Delrin into sticky blobs.",
      minimumSpecs: "Enclosed CO2 laser, honeycomb bed, active high-flow outdoor exhaust system, clean air assist compressor (30 PSI).",
      safetyHazards: "FORMALDEHYDE TOXIC GAS HAZARD: Thermal decomposition of Delrin / PolyOxyMethylene (POM) releases toxic, irritating Formaldehyde gas (HCHO). Active high-capacity outdoor exhaust ventilation is strictly mandatory. Never breathe Delrin cutting fumes.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 3.0mm Delrin / Acetal sheets (POM-H Homopolymer or POM-C Copolymer). Delrin is a slippery engineering thermoplastic with low friction coefficient (µ = 0.20) and high tensile strength (70 MPa). Unlike acrylic, Delrin sublimates directly from solid to gas under CO2 heat without melting, producing glass-smooth vertical cut walls with zero raised melt lips.",
    designPrep: "In LightBurn, prepare involute gear vector profiles. Perform a cut slot kerf test: cut a 10mm x 10mm square, measure cut slot with digital caliper (e.g. 0.12mm kerf). Apply +0.06mm Kerf Offset (Outward for gear contours, Inward for axle bore holes) in LightBurn vector layer settings to guarantee zero backlash gear mesh.",
    laserSetup: "Pin Delrin sheet flat on honeycomb bed using bed pins. Focus CO2 laser beam precisely on top Delrin surface plane. Connect high-pressure air assist (30 PSI) to purge formaldehyde vapors and clear kerf.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (30 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure air assist clears vaporized formaldehyde gas and prevents edge re-welding."
    },
    exhaust: {
      configuration: "Active high-flow outdoor enclosure exhaust system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local outdoor exhaust sized for toxic formaldehyde (HCHO) gas."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "55% controller setting",
        speed: "22 mm/s (Vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (30 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test on scrap 3.0mm Delrin sheet at 22 mm/s @ 55% power (60W CO2) with 30 PSI air assist. Measure kerf width with digital caliper and inspect cut wall verticality.",
    steps: [
      {
        title: "Delrin Sheet Selection & Outdoor Exhaust Start",
        action: "Place 3.0mm Delrin sheet flat on bed standoffs, pin corners flat, and verify active outdoor formaldehyde exhaust system.",
        why: "Elevating Delrin on standoffs allows air assist jet to blow formaldehyde gas downward out of kerf; outdoor exhaust evacuates fumes.",
        lookFor: "Delrin sheet pinned flat; outdoor exhaust pulling active draft.",
        possibleFailure: "Operating without active outdoor exhaust fills room with toxic formaldehyde gas.",
        detail: "Pin 4 corners of Delrin sheet, focus CO2 laser, turn on high-flow outdoor exhaust blower."
      },
      {
        title: "Involute Gear Kerf Test & Offset Calculation",
        action: "Cut a 10mm test square in scrap Delrin, measure cut slot with digital caliper (e.g. 0.12mm kerf), and apply +0.06mm Kerf Offset in LightBurn.",
        why: "Applying half-kerf offset (+0.06mm) expands gear teeth and shrinks axle holes to exact CAD dimensions.",
        lookFor: "Exact kerf calculated (+0.06mm offset applied to gear contour layer).",
        possibleFailure: "Cutting gears without kerf offset produces sloppy, loose gear mesh with excessive backlash.",
        detail: "Cut 10mm test square, measure width with caliper, enter +0.06mm in LightBurn Kerf Offset box."
      },
      {
        title: "High Air Assist (30 PSI) & Surface Focus Setup",
        action: "Focus CO2 beam on top Delrin surface, open air assist valve to 30 PSI, close enclosure doors.",
        why: "30 PSI air assist forces vaporized POM gas out of cut channel, leaving slick, burr-free gear teeth.",
        lookFor: "Laser focused on top Delrin face; 30 PSI air assist jet active.",
        possibleFailure: "Cutting Delrin with weak air assist (<10 PSI) allows formaldehyde gas to condense back into white powder on cut walls.",
        detail: "Adjust Z focus to top Delrin face, open 30 PSI air assist valve, close enclosure."
      },
      {
        title: "Single-Pass Precision Vector Cutting Execution",
        action: "Press Start for 1-pass vector cut at 22 mm/s @ 55% power (60W CO2).",
        why: "Delrin sublimates cleanly under high energy density, leaving slick vertical gear walls.",
        lookFor: "Laser tracing gear teeth smoothly with a bright white spark; cut gears dropping out cleanly.",
        possibleFailure: "Cutting too slow (5 mm/s) char-scorches Delrin edges yellow.",
        detail: "Close enclosure, check 10.6µm eyewear, press Start, observe 3mm Delrin gear cut."
      },
      {
        title: "Dowel Pin Gear Mesh Audit & Clean",
        action: "Remove cut Delrin gears, wipe with dry cloth, mount onto 5.0mm steel dowel pins on a test board, spin by hand.",
        why: "Hand spinning verifies zero gear tooth binding and smooth involute mechanical engagement.",
        lookFor: "Slick, silent, smooth gear rotation without mechanical binding or backlash slop.",
        possibleFailure: "Gears binding on dowel pins indicates kerf offset was set too large.",
        detail: "Wipe Delrin gears, mount on steel dowel pins, spin by hand to audit smooth backlash-free mesh."
      }
    ],
    troubleshooting: [
      {
        symptom: "Delrin gears bind tightly against each other when mounted on test dowel pins",
        probableCause: "Kerf Offset setting was set too large in laser software",
        correctiveAction: "Reduce Kerf Offset setting by 0.02mm (e.g. from +0.06mm down to +0.04mm)."
      },
      {
        symptom: "Cut Delrin sidewalls have white powdery residue deposit",
        probableCause: "Air assist pressure was too low, allowing vaporized formaldehyde gas to re-condense",
        correctiveAction: "Increase air assist pressure to 30 PSI to purge gas out of kerf channel."
      },
      {
        symptom: "Acrid pungent odor in workshop during Delrin cutting",
        probableCause: "Enclosure exhaust system leak or inadequate CFM air flow",
        correctiveAction: "Check exhaust duct seals and ensure high-flow outdoor exhaust fan is operating properly."
      }
    ],
    proTips: [
      "Delrin sublimates directly from solid to gas under CO2 laser heat, leaving glass-smooth slick vertical cut walls ideal for gears.",
      "Apply a +half-kerf offset (+0.06mm) in laser software to guarantee zero-backlash involute gear mesh.",
      "High-capacity outdoor exhaust is mandatory during Delrin cutting to evacuate toxic formaldehyde gas."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. FORMALDEHYDE TOXIC GAS HAZARD: Delrin thermal ablation releases toxic formaldehyde gas (HCHO). High-flow outdoor exhaust ventilation is mandatory. Never breathe Delrin fumes."
  },

  // 43
  {
    id: "precious-metals-jewelry-cutting",
    title: "Gold & Silver Jewelry Fiber Laser Cutting & Recovery Trap Setup",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "21 min",
    estimatedTime: "15 min MOPA wobble setup, 20 min multi-loop cut, 40 min tumbler polish",
    targetMaterial: "925 Sterling Silver Sheet (0.8mm) & 14K Gold Sheet",
    materials: [
      "925 Sterling Silver Sheet or 14K Gold Sheet (0.8mm uniform thickness)",
      "Black Sharpie Permanent Marker (Initial optical absorption booster)",
      "Cyclone Precious Metal Scrap Filter Trap Unit",
      "Stainless Steel Shot & Magnetic Tumbler Polish Compound"
    ],
    tools: [
      "High-Peak MOPA Fiber Laser (50W–100W class with short pulse 2ns-10ns capability)",
      "LightBurn Galvo or EZCAD3 Software (Galvo Wobble Vector Tool)",
      "F-Theta Scan Lens (100mm short focal length)",
      "Ultrasonic Cleaning Tank & Fine Jeweler's Files"
    ],
    summary: "Precision galvo vector cutting protocol for 0.8mm 925 sterling silver and 14K gold jewelry pendants using high-peak power MOPA short pulses (4ns), detailing high metal reflectivity physics ($99\%$ reflection at 1064nm), surface blackening absorption tricks, galvo wobble vector paths, 40-loop cutting cycles, and $99.2\%$ precious metal scrap recovery cyclone traps.",
    image: IMG.metal_artisan,
    prerequisites: {
      compatibleLasers: "High-peak power MOPA Fiber Galvo lasers (1064nm wavelength, 50W–100W class with short pulse width control 2ns-10ns). High peak pulse power (15kW/pulse) exceeds silver ablation threshold instantly.",
      unsuitableLasers: "Continuous-wave (CW) fiber lasers and CO2 lasers reflect off silver/gold without cutting, causing severe back-reflection optic damage.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta 100mm lens, cyclone precious metal recovery trap, HEPA dust extraction.",
      safetyHazards: "HIGH REFLECTIVITY OPTIC & DUST RECOVERY HAZARD: Silver/gold reflects up to $99\%$ of 1064nm light at room temperature. Specular reflection can destroy scan optics; wear OD6+ 1064nm eyewear. Connect a cyclone scrap trap to capture valuable gold/silver dust.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 0.8mm 925 Sterling Silver or 14K Gold sheets. Silver and gold exhibit extreme thermal conductivity ($k_{silver} = 429 \text{ W/m}\cdot\text{K}$) and $99\%$ reflectivity at 1064nm wavelength. Coated permanent marker blackening on top surface absorbs initial laser pulse energy, lowering ablation threshold on pass 1.",
    designPrep: "In LightBurn Galvo, import jewelry pendant vector graphics. Enable 'Galvo Wobble' vector cutting tool with 0.05mm wobble diameter and 0.01mm step pitch. Wobble vector motion sweeps beam in tiny overlapping circles, opening a clean 0.06mm kerf width that prevents molten silver burrs from re-welding during multi-pass cutting.",
    laserSetup: "Fixture 0.8mm silver sheet flat in alignment jig over cyclone recovery vacuum funnel. Blacken top silver surface with black Sharpie marker. Converge dual red-dot focus pointers on top silver face. Turn ON cyclone scrap recovery trap system.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (100mm short focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null,
      notes: "100mm lens concentrates beam spot to maximize peak power density above silver ablation threshold."
    },
    airAssist: {
      mode: "Off at marking point (Inert Nitrogen purge optional)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Do NOT blow high air assist; keep cyclone scrap trap suction active under bed."
    },
    exhaust: {
      configuration: "Cyclone precious metal recovery trap + HEPA secondary filter",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Recovers 99.2% of vaporized gold/silver dust in sealed stainless collection flask."
    },
    exactParameters: {
      mopa50W: {
        sourceType: "50W MOPA Fiber Galvo (1064nm ref)",
        power: "95% controller setting",
        speed: "200 mm/s (Galvo vector wobble cut speed)",
        passes: "40 Wobble Loop Passes (0.05mm wobble diameter)",
        lineInterval: "0.010mm step pitch",
        airAssist: "Off at marking point (Cyclone vacuum active)",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "25 kHz (High pulse energy)",
        pulseWidth: "4 ns (Short pulse width achieves 15kW peak power)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 40-pass wobble cut test on a scrap corner of 0.8mm 925 silver sheet at 200 mm/s @ 95% power, 25 kHz, 4ns pulse width. Confirm drop-out of a 2mm x 2mm square without foil lifting or edge dross re-welding.",
    steps: [
      {
        title: "Silver Surface Blackening & Cyclone Trap Setup",
        action: "Blacken top 0.8mm silver sheet face with black Sharpie marker, seat flat in jig over cyclone recovery funnel, start cyclone vacuum trap.",
        why: "Black marker coating absorbs initial 1064nm laser energy; cyclone trap captures 99.2% of precious metal scrap for refinery smelting.",
        lookFor: "Blackened silver sheet flat in jig; cyclone trap pulling active suction into collection flask.",
        possibleFailure: "Cutting bare shiny silver without black marker causes $99\%$ back-reflection, damaging galvo mirror optics.",
        detail: "Coat silver sheet with black Sharpie, seat in jig, verify cyclone trap suction."
      },
      {
        title: "Galvo Wobble & 4ns MOPA Short Pulse Configuration",
        action: "In LightBurn Galvo, set Galvo Wobble tool (0.05mm diameter), set 50W MOPA parameters (200 mm/s, 95% power, 25 kHz, 4ns pulse width, 40 loop passes).",
        why: "4ns short pulses yield 15kW peak pulse power to ablate silver; 0.05mm wobble motion prevents kerf re-welding.",
        lookFor: "Software preview showing 40-loop wobble cut path active.",
        possibleFailure: "Using long pulse widths (>100ns) dumps excess heat into silver, causing thermal warping and dross welding.",
        detail: "Set Galvo Wobble tool (0.05mm diameter), set 4ns pulse width, set 40 loop passes."
      },
      {
        title: "100mm Lens Focal Convergence & Eye Protection",
        action: "Converge dual red-dot focus pointers on top silver face, close galvo enclosure, check 1064nm safety eyewear.",
        why: "100mm lens creates tight beam waist for maximum peak power density; OD6+ glasses protect eyes from specular reflection.",
        lookFor: "Dual red dots converged on top blackened silver face; 1064nm glasses on.",
        possibleFailure: "Operating out of focus fails to reach silver ablation threshold.",
        detail: "Adjust Z galvo column, verify red dots converged, close enclosure doors."
      },
      {
        title: "40-Pass Wobble Vector Cutting Execution",
        action: "Press Start for 40-pass wobble vector cut cycle.",
        why: "40 rapid passes progressively ablate 20 microns of silver per pass down to 0.8mm total depth.",
        lookFor: "Concentrated blue-white spark sweeping around jewelry pendant outlines; cut pendant dropping out cleanly into catch net.",
        possibleFailure: "Stopping cut cycle at pass 20 leaves uncut metal tabs.",
        detail: "Press Start, monitor 40-pass wobble cut cycle, verify drop-out separation."
      },
      {
        title: "Ultrasonic Rinse & Magnetic Tumbler Polish",
        action: "Remove cut silver pendant, wash in ultrasonic tank with IPA, file tiny attachment tabs, polish in magnetic tumbler with steel shot for 40 minutes.",
        why: "Ultrasonic rinse removes marker soot; filing removes tab nubs; magnetic tumbler polishes silver to a high jewelry store luster.",
        lookFor: "Gleaming, mirror-polished 925 sterling silver pendant ready for sales display.",
        possibleFailure: "Skipping magnetic tumbling leaves dull, frosted cut edges on silver pendant.",
        detail: "Wash pendant in ultrasonic IPA bath, file tab nubs with needle file, tumble 40 min in magnetic tumbler."
      }
    ],
    troubleshooting: [
      {
        symptom: "Laser beam reflects off 0.8mm silver sheet without making any cut mark",
        probableCause: "Silver surface was un-blackened or MOPA pulse width was set too long (>50ns), failing peak power threshold",
        correctiveAction: "Coat top silver face with black Sharpie marker and shorten MOPA pulse width to 4ns @ 25 kHz."
      },
      {
        symptom: "Cut silver pendant edges re-weld together during multi-pass cutting",
        probableCause: "Galvo Wobble tool was disabled, creating a single narrow kerf channel",
        correctiveAction: "Enable Galvo Wobble tool in software with a 0.05mm wobble diameter and 0.01mm step pitch."
      },
      {
        symptom: "Precious gold/silver dust lost in general workshop air",
        probableCause: "Operating without a dedicated cyclone recovery trap unit",
        correctiveAction: "Connect a high-efficiency cyclone scrap separator directly to laser cutting bed funnel."
      }
    ],
    proTips: [
      "Coat silver top face with black Sharpie permanent marker before cutting to absorb initial 1064nm laser energy.",
      "Enable Galvo Wobble vector cutting (0.05mm diameter) to widen kerf slightly and prevent molten silver re-welding.",
      "Connect a cyclone precious metal recovery trap to capture 99.2% of vaporized gold/silver dust for refinery smelting."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. HIGH REFLECTIVITY & SCRAP RECOVERY HAZARD: Specular reflections off silver require OD6+ 1064nm safety glasses. Dedicated cyclone filter trap required to capture precious metal dust."
  },

  // 44
  {
    id: "box-enclosures-living-hinge",
    title: "Custom Laser Cut Enclosure Boxes with Finger Joints & Curved Living Hinges",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "15 min",
    estimatedTime: "20 min parametric box.py setup, 12 min vector cut, 15 min hydration & snap assembly",
    targetMaterial: "3.0mm Baltic Birch Plywood Sheet (B/BB Grade)",
    materials: [
      "3.0mm Baltic Birch Plywood Sheet (B/BB Grade, 3-ply void-free core)",
      "Titebond II PVA Wood Glue",
      "Spray Bottle filled with Deionized Water",
      "Blue Painter's Masking Tape"
    ],
    tools: [
      "CO2 Laser (50W–80W class) or Diode Laser (20W reference)",
      "LightBurn Software or Boxes.py Parametric Generator",
      "Digital Precision Vernier Caliper",
      "Wood Clamps & Rubber Bands"
    ],
    summary: "Parametric vector layout and kerf calibration protocol for laser cutting Baltic birch plywood electronics enclosure boxes featuring interlocking finger joints and 90° curved living hinges, detailing living hinge lattice mechanics, kerf tab compensation (+half kerf), water hydration flex rules, and wood glue assembly.",
    image: IMG.wood_letter,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–80W class) or Diode lasers (450nm wavelength, 20W reference). 10.6µm light vaporizes wood cellulose cleanly.",
      unsuitableLasers: "Fiber lasers (1064nm) pass through organic wood fibers without clean cutting.",
      minimumSpecs: "Enclosed laser machine, honeycomb bed, active enclosure smoke exhaust, clean air assist compressor (25-35 PSI).",
      safetyHazards: "WOOD SCRAP & FIRE HAZARD: Living hinge lattice patterns create dozens of thin, flammable wood strip scraps that can catch fire on laser bed. Clean honeycomb bed grid before cutting, maintain active 30 PSI air assist, and keep fire extinguisher nearby.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 3.0mm Baltic Birch Plywood (B/BB Grade, 3-ply void-free core). Baltic birch features uniform birch veneer cores with minimal internal glue voids, allowing thin living hinge flex strips to bend without breaking. Avoid cheap construction plywood with interior core gaps.",
    designPrep: "Generate box layout in Boxes.py or LightBurn Box Generator. LIVING HINGE GEOMETRY: Living hinges use alternating parallel vector cut lines spaced 1.5mm apart. A 90° corner flex radius of $R = 15\text{mm}$ requires a minimum hinge zone width of $W = \frac{\pi}{2} \times R \approx 23.5\text{mm}$. Perform kerf test to determine finger joint kerf offset (+0.06mm). For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin masked 3.0mm Baltic birch plywood flat to honeycomb bed using bed pins. Focus CO2 laser beam precisely on top wood surface plane. Connect clean air assist (25-35 PSI) to prevent charring living hinge flex strips.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (25-35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist keeps living hinge flex strips free of sticky wood smoke resin."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for wood smoke and glue VOCs."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "40% controller setting",
        speed: "30 mm/s (Vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (25-35 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test of a 5-line living hinge sample strip on scrap 3mm Baltic birch at 30 mm/s @ 40% power (60W CO2) with 30 PSI air assist. Flex sample strip by hand to verify flexibility without snap breakage.",
    steps: [
      {
        title: "Baltic Birch Board Selection & Bed Pinning",
        action: "Select 3.0mm void-free Baltic birch plywood, apply blue painter's masking tape to both faces, pin flat to honeycomb bed, start smoke exhaust.",
        why: "Void-free core prevents living hinge breakage; blue masking tape prevents smoke resin staining.",
        lookFor: "Baltic birch sheet pinned dead flat on bed without bowing.",
        possibleFailure: "Bowed plywood shifts out of focal plane, leaving un-severed living hinge flex cuts.",
        detail: "Inspect board core, apply blue masking tape both sides, pin 4 corners flat, turn on exhaust."
      },
      {
        title: "Parametric Living Hinge & Finger Joint Layout",
        action: "In LightBurn Box Generator, set 3.0mm material thickness, set +0.06mm finger joint kerf offset, configure 23.5mm living hinge zone width for 15mm corner radius.",
        why: "23.5mm living hinge width provides exact arc length for a 90° bend; +0.06mm kerf offset ensures snug press-fit finger joints.",
        lookFor: "Box preview showing finger joint tabs and living hinge lattice cut pattern.",
        possibleFailure: "Making living hinge zone too narrow (<15mm for 15mm radius) causes wood strips to snap during bending.",
        detail: "Set material thickness = 3.0mm, set kerf offset = +0.06mm, set hinge zone = 23.5mm."
      },
      {
        title: "High Air Assist & Surface Focus Setup",
        action: "Focus CO2 laser on top masked surface, open air assist valve to 25-35 PSI, close laser enclosure doors.",
        why: "25-35 PSI air assist purges wood ash out of fine living hinge cuts, keeping flex strips char-free.",
        lookFor: "Laser focused on top wood plane; 30 PSI air assist jet active at nozzle.",
        possibleFailure: "Cutting living hinge with weak air assist (<10 PSI) leaves charcoal in kerf, reducing hinge flexibility.",
        detail: "Focus Z height, open 30 PSI air assist valve, check safety glasses, close enclosure."
      },
      {
        title: "Single-Pass Vector Cutting Execution",
        action: "Press Start for 1-pass vector cut at 30 mm/s @ 40% power (60W CO2).",
        why: "Single fast pass cuts clean vector lines through 3.0mm Baltic birch without excessive charring.",
        lookFor: "Laser tracing box outlines and living hinge lattice lines smoothly; parts dropping out cleanly.",
        possibleFailure: "Cutting too fast (50 mm/s) leaves uncut bottom wood fibers that rip living hinges during removal.",
        detail: "Close enclosure, check eyewear, press Start, observe box vector cut execution."
      },
      {
        title: "Water Hydration, Flexing & Finger Joint Glue Assembly",
        action: "Peel masking tape, spray living hinge wood lattice lightly with water mist, flex gently around 90° corner, apply Titebond II glue to finger joints, clamp box tight for 1 hour.",
        why: "Water mist hydrates wood cellulose fibers, increasing flexibility and preventing grain snapping; glue secures finger joints.",
        lookFor: "Seamless curved wood enclosure box with tight finger joint corners and zero cracks.",
        possibleFailure: "Bending bone-dry living hinge wood strips rapidly without water mist causes instant wood grain snapping.",
        detail: "Peel tape, mist living hinge with water, wait 1 min, flex gently into shape, glue finger joints, clamp 1 hour."
      }
    ],
    troubleshooting: [
      {
        symptom: "Living hinge wood strips snap and break during 90° bending",
        probableCause: "Wood strips were bent bone-dry without water misting, or living hinge cut lines were oriented parallel to wood face grain",
        correctiveAction: "Orient living hinge vector cuts perpendicular to wood face grain and mist lattice with water prior to bending."
      },
      {
        symptom: "Box finger joints are too loose and slide apart easily",
        probableCause: "Finger Joint Kerf Offset was left at 0.0mm in box generator software",
        correctiveAction: "Measure cut slot kerf and set +0.06mm Kerf Offset in box generator software."
      },
      {
        symptom: "Living hinge flex strips catch fire on laser bed",
        probableCause: "Air assist pressure was too low or loose wood scrap dropouts ignited under laser beam",
        correctiveAction: "Clean bed honeycomb grid of loose scraps before cutting and maintain 30 PSI air assist stream."
      }
    ],
    proTips: [
      "Orient living hinge cut lines perpendicular to wood face grain to maximize tensile flex strength.",
      "Spray living hinge wood lattice lightly with water mist before bending to hydrate cellulose fibers and prevent snapping.",
      "Apply a +half-kerf offset (+0.06mm) to finger joint tabs to achieve tight press-fit box corners."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. WOOD FIRE HAZARD: Living hinge lattice cuts produce many small wood scraps; clean bed honeycomb grid before cutting. High air assist (30 PSI) and active smoke extraction required."
  },

  // 45
  {
    id: "dark-wood-chemical-contrast",
    title: "Diode Laser Dark Wood Staining & Chemical Contrast Activation",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "12 min",
    estimatedTime: "15 min solution prep & sponge coat, 30 min dry, 10 min diode mark, 1 hour seal",
    targetMaterial: "Basswood & Maple Hardwood Boards & 10% Sodium Bicarbonate Solution (NaHCO3)",
    materials: [
      "Basswood / Maple Boards (Light hardwoods, 5mm-10mm thick)",
      "Sodium Bicarbonate (NaHCO3 Baking Soda)",
      "Warm Deionized Water",
      "Sponge Applicator & Microfiber Cloth",
      "Clear Satin Polyurethane Spray"
    ],
    tools: [
      "Diode Laser (10W–20W optical output reference)",
      "LightBurn Software",
      "Digital Precision Vernier Caliper"
    ],
    summary: "Chemical contrast activation protocol for diode laser engraving light hardwoods (basswood, maple) pre-treated with a 10% Sodium Bicarbonate (NaHCO3) solution, detailing tannic acid browning mechanics, 40% power reduction, zero-smoke dark marks, and polyurethane sealing.",
    image: IMG.wood_tech,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength, 10W–20W optical output) or CO2 lasers (10.6µm wavelength). 450nm blue diode light triggers rapid thermal reaction in alkali-treated wood fibers.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm) pass through light hardwoods without controlled burning.",
      minimumSpecs: "Enclosed laser machine, sticky mat or bed hold-down, active enclosure exhaust fan system.",
      safetyHazards: "NON-TOXIC CHEMICAL SAFE PRACTICE: Sodium Bicarbonate (NaHCO3) is safe and non-toxic. Ensure wood is completely dry before laser engraving. Active enclosure exhaust extraction required for wood smoke.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use clean, smooth light hardwoods such as Basswood or Maple. Light hardwoods contain natural tannic acids. Pre-soaking wood in a 10% Sodium Bicarbonate solution (10g baking soda in 100ml warm water) creates an alkaline surface environment that reacts with tannic acids under 450nm diode heat, causing dark browning at 40% lower power levels.",
    designPrep: "In LightBurn, import photo or vector artwork. Configure engraving layer: 6000 mm/min @ 18% power (20W diode), 300 DPI (0.085mm line interval). Compared to untreated wood (which requires 35% power and leaves yellow smoke halos), chemical activation yields jet-black contrast with zero smoke soot. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Apply baking soda solution evenly using a sponge, allow wood to dry completely (30 minutes room drying). Lay dry treated board flat on bed grid. Focus diode laser precisely on top wood surface plane.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow (5-10 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist prevents disturbing delicate chemical surface layer."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust fan",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for wood cellulose smoke."
    },
    exactParameters: {
      diode20W: {
        sourceType: "20W Optical Output Blue Diode Laser (450nm ref)",
        power: "18% controller setting (Treated Wood Engrave)",
        speed: "6000 mm/min",
        passes: 1,
        lineInterval: "0.085mm (300 DPI)",
        airAssist: "Low trickle flow (5-10 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Fill / Image",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a step-wedge engrave test (10mm x 10mm boxes) on scrap treated basswood at 6000 mm/min (10%, 14%, 18%, 22% power). Confirm dark black contrast at 18% power without surface wood charring.",
    steps: [
      {
        title: "10% Sodium Bicarbonate Solution Prep & Application",
        action: "Dissolve 10g Sodium Bicarbonate in 100ml warm deionized water, sponge solution evenly across basswood face, let dry 30 minutes.",
        why: "Alkaline solution reacts with wood tannic acids under laser heat, drastically lowering thermal energy required for dark browning.",
        lookFor: "Even moisture coat across wood face; wood surface completely dry to touch after 30 minutes.",
        possibleFailure: "Engraving damp wood causes water vapor steam bubbles that distort image clarity.",
        detail: "Mix 10g baking soda in 100ml warm water, wipe evenly with sponge, air dry 30 min until completely dry."
      },
      {
        title: "Low-Power High-Speed Diode Raster Setup",
        action: "In LightBurn, load artwork, set layer parameters (6000 mm/min @ 18% power for 20W diode, 300 DPI), focus diode laser to top face.",
        why: "Chemical activation permits 40% lower power, producing dark crisp marks with zero brown smoke resin halos.",
        lookFor: "Software preview active showing 300 DPI fill layer at 18% power.",
        possibleFailure: "Running at standard untreated power (35% power) burns through chemical layer, leaving deep charred trenches.",
        detail: "Configure image fill layer, set 6000 mm/min @ 18% power, set 300 DPI, adjust z-focus."
      },
      {
        title: "Low Air Assist & Enclosure Exhaust Execution",
        action: "Set air assist to gentle trickle (5-10 PSI), close enclosure doors, start exhaust fan, press Start.",
        why: "Gentle air trickle clears minor fumes without blowing dried sodium bicarbonate dust across bed.",
        lookFor: "Diode beam scanning rapidly across treated wood, producing instant jet-black marks.",
        possibleFailure: "Disabling exhaust allows wood smoke to settle on fresh chemical mark.",
        detail: "Set 5-10 PSI air assist, start enclosure exhaust fan, press Start."
      },
      {
        title: "Damp Cloth Rinse & Surface Drying",
        action: "Remove engraved wood, wipe surface gently with a damp microfiber cloth to remove residual dried baking soda powder, dry 1 hour.",
        why: "Rinsing removes unreacted white baking soda dust, revealing pure dark wood contrast beneath.",
        lookFor: "Rich, deep, jet-black engraving contrast on clean light basswood background.",
        possibleFailure: "Skipping damp wipe leaves a chalky white film over dark engraved artwork.",
        detail: "Wipe wood surface gently with damp microfiber cloth, air dry 1 hour."
      },
      {
        title: "Clear Polyurethane Seal Application",
        action: "Spray 2 light coats of clear satin polyurethane sealant over dry wood face, allowing 30 minutes dry time between coats.",
        why: "Polyurethane seal locks chemical wood contrast and protects basswood face against moisture and finger oils.",
        lookFor: "Smooth, sealed, durable wood finish with vibrant dark artwork contrast.",
        possibleFailure: "Applying thick wet polyurethane coat in 1 pass causes chemical mark bleeding.",
        detail: "Spray 2 light satin polyurethane coats, dry 30 min between coats."
      }
    ],
    troubleshooting: [
      {
        symptom: "Engraved mark is light grey instead of dark black",
        probableCause: "Baking soda solution was too weak or laser power was set too low (<12% power)",
        correctiveAction: "Verify 10% solution mix (10g per 100ml) and increase diode laser power to 18%."
      },
      {
        symptom: "White chalky powder film covers finished wood face",
        probableCause: "Unreacted sodium bicarbonate powder was not wiped off with a damp cloth after laser engraving",
        correctiveAction: "Wipe wood surface gently with a damp microfiber cloth before applying clear polyurethane spray."
      },
      {
        symptom: "Wood face exhibits yellow smoke resin halos around artwork",
        probableCause: "Laser power was set excessively high (>30% power), burning wood cellulose beyond chemical reaction threshold",
        correctiveAction: "Reduce diode laser power to 18% and increase travel speed to 6000 mm/min."
      }
    ],
    proTips: [
      "Pre-soak light hardwoods in 10% Sodium Bicarbonate solution to trigger chemical dark browning at 40% lower power levels.",
      "Always allow treated wood to dry completely for 30 minutes before laser engraving to prevent steam distortion.",
      "Wipe finished wood with a damp microfiber cloth to remove unreacted white powder before applying clear polyurethane sealer."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. NON-TOXIC CHEMICAL PRACTICE: Sodium Bicarbonate is safe and non-toxic. Maintain active enclosure exhaust extraction for wood smoke."
  },

  // 46
  {
    id: "glass-crystal-internal-3d-engraving",
    title: "Sub-Surface Laser Engraving (SSLE) 3D Point Clouds inside Crystal Glass",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "18 min",
    estimatedTime: "20 min 3D point cloud generation, 10 min SSLE laser run, 5 min LED base audit",
    targetMaterial: "Optical Grade K9 Crystal Glass Blocks",
    materials: [
      "K9 Optical Crystal Glass Blocks (Bubble-free, polished 50mm x 50mm x 80mm)",
      "Microfiber Lens Cloth & 99% Isopropyl Alcohol (IPA)",
      "LED Display Base (Under-lighting display)"
    ],
    tools: [
      "532nm Green Pulsed SSLE Laser System or Ultra-Short Pulse UV Laser System",
      "3D Point Cloud Conversion Software (200,000 point array builder)",
      "Dynamic Z-Axis Galvo Scanner Column"
    ],
    summary: "Sub-surface laser engraving (SSLE) micro-fracture protocol for focusing 532nm green pulsed laser beams inside K9 optical glass blocks, detailing non-linear multiphoton absorption mechanics, 200,000-point 3D point cloud generation, bottom-to-top Z galvo depth scanning, and zero surface damage.",
    image: IMG.lab,
    prerequisites: {
      compatibleLasers: "532nm Green Pulsed SSLE lasers or UV ultra-short pulse lasers. High-peak power green laser light passes through transparent glass until focused tightly to trigger non-linear multiphoton absorption.",
      unsuitableLasers: "Standard CO2 lasers (10.6µm) absorb on top glass surface, cracking outer faces instead of internal sub-surface volume.",
      minimumSpecs: "Enclosed 532nm green laser column, dynamic Z-axis galvo scanner, optical alignment nest, OD5+ 532nm safety glasses.",
      safetyHazards: "532nm GREEN LASER RADIATION HAZARD: Pulsed 532nm green laser light presents severe retinal hazards from diffuse reflections; certified OD5+ 532nm laser safety eyewear is strictly mandatory. Handle K9 crystal blocks with microfiber gloves to prevent surface grease marks.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use optical grade K9 crystal glass blocks (50mm x 50mm x 80mm). K9 glass exhibits high optical purity, uniform refractive index ($n = 1.5168$), and zero internal bubbles or inclusions. Clean outer glass surfaces thoroughly with 99% IPA before laser engraving; surface dust or fingerprints scatter laser light, causing accidental surface micro-cracks.",
    designPrep: "In 3D point cloud software, convert 3D CAD mesh model into a discrete 3D point cloud containing 200,000 points spaced 0.15mm apart in X, Y, and Z axes. CRITICAL Z-ORDER RULE: Sort point execution order from BOTTOM to TOP (+Z direction) so lower micro-fracture points do not block incoming laser beam paths for upper points.",
    laserSetup: "Place K9 crystal block in optical alignment nest on galvo baseplate. Clean outer faces with 99% IPA microfiber wipe. Calibrate dynamic Z-axis galvo focal range from bottom plane ($Z = 0\text{mm}$) to top plane ($Z = 50\text{mm}$).",
    optics: {
      lens: "Dynamic Z-Axis F-Theta Scan Lens (532nm green wavelength)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null,
      notes: "Focuses pulse to a tight 10-micron focal spot inside glass body to trigger multiphoton absorption."
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Sub-surface engraving occurs internally within sealed glass volume; no air assist required."
    },
    exhaust: {
      configuration: "Enclosure ambient dust filter fan",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Keep enclosure air dust-free to prevent beam scattering on glass faces."
    },
    exactParameters: {
      green532nm: {
        sourceType: "532nm Green Pulsed SSLE Laser (ref)",
        power: "2.5 mJ pulse energy",
        speed: "4,000 points/sec (Pulse repetition frequency 4 kHz)",
        passes: "1 Pass (200,000 point array execution)",
        lineInterval: "0.150mm point spacing",
        airAssist: "Off at marking point",
        focusOffset: "Dynamic Z-Scan (Bottom to Top execution)",
        frequency: "4 kHz (Pulse repetition rate)",
        pulseWidth: "3 ns (Short pulse width achieves multiphoton absorption)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Execute a 1,000-point test cube (10mm x 10mm x 10mm) inside a scrap K9 glass block at 2.5 mJ pulse energy, 4 kHz. Inspect micro-fracture points under magnifier to confirm 50-micron uniform point size without internal stress cracks.",
    steps: [
      {
        title: "K9 Glass Solvent Cleanse & Nest Alignment",
        action: "Wipe K9 crystal block outer faces with 99% IPA microfiber wipe, seat firmly in optical alignment nest on galvo baseplate.",
        why: "Eliminates surface dust and finger oils that cause laser beam scattering and surface glass damage.",
        lookFor: "Pristine, finger-print free K9 glass block seated perpendicular in nest.",
        possibleFailure: "Surface grease spots absorb 532nm pulse energy, cracking outer glass face.",
        detail: "Wipe glass faces with IPA microfiber cloth, seat in alignment nest, check block squareness."
      },
      {
        title: "3D Point Cloud Conversion & Bottom-to-Top Z-Ordering",
        action: "In SSLE software, convert 3D CAD mesh to a 200,000 point cloud (0.15mm point spacing), set execution Z-sort from bottom ($Z=0$) to top ($Z=50mm$).",
        why: "Bottom-to-top Z-ordering ensures laser beam passes through clear un-engraved glass for every point layer.",
        lookFor: "Software preview displaying 200,000 points with bottom-to-top layer animation.",
        possibleFailure: "Engraving top-to-bottom causes upper micro-fracture points to block laser beam from reaching lower layers.",
        detail: "Load 3D mesh, set 0.15mm point pitch, click 'Sort Bottom-to-Top', generate 200,000 point array."
      },
      {
        title: "Dynamic Z-Galvo Calibration & Eye Protection",
        action: "Calibrate Z-axis galvo focal range for 50mm glass depth, close laser enclosure doors, put on certified OD5+ 532nm safety glasses.",
        why: "Dynamic Z galvo shifts focal waist precisely inside glass body; OD5+ glasses protect eyes from green laser pulses.",
        lookFor: "Z galvo zeroed to bottom glass plane; OD5+ 532nm safety glasses on.",
        possibleFailure: "Operating without OD5+ 532nm glasses presents severe eye injury hazards from diffuse green laser pulses.",
        detail: "Calibrate Z galvo travel (0mm-50mm range), close enclosure, verify OD5+ green glasses."
      },
      {
        title: "Sub-Surface Engraving Array Execution",
        action: "Press Start for 200,000-point SSLE array run (4,000 points/sec @ 2.5 mJ pulse energy).",
        why: "High peak pulse power focused to 10 microns triggers non-linear multiphoton absorption, creating 50-micron internal micro-crack points.",
        lookFor: "Green laser pulse flashing rapidly inside glass body, building floating 3D point cloud image in 50 seconds.",
        possibleFailure: "Setting pulse energy too high (>4 mJ) creates large internal stress fractures that shatter crystal block.",
        detail: "Press Start, observe green pulse array execution inside glass block, monitor 50-second run."
      },
      {
        title: "LED Display Base Inspection",
        action: "Remove engraved K9 crystal block, place on LED light display base, inspect floating 3D holographic image under white LED light.",
        why: "Internal micro-crack points scatter LED light, rendering a brilliant 3D holographic image suspended inside crystal.",
        lookFor: "Brilliant, crisp, floating 3D holographic image inside perfectly smooth, undamaged crystal glass.",
        possibleFailure: "Fuzzy 3D image indicates point spacing was set too wide (>0.3mm).",
        detail: "Place crystal block on LED base, turn on LED light, audit 3D image clarity from all 4 viewing angles."
      }
    ],
    troubleshooting: [
      {
        symptom: "Outer top face of K9 crystal glass cracks or chips during internal engraving",
        probableCause: "Surface dust or fingerprints absorbed 532nm pulse energy, or Z galvo zero depth was miscalibrated",
        correctiveAction: "Clean outer glass faces thoroughly with 99% IPA and re-calibrate Z galvo zero plane."
      },
      {
        symptom: "3D sub-surface image has empty shadowed voids in upper layers",
        probableCause: "Point execution order was set top-to-bottom, causing upper points to block laser beam from reaching lower depth layers",
        correctiveAction: "Re-sort point cloud execution order strictly from bottom plane to top plane (+Z direction)."
      },
      {
        symptom: "Crystal block develops large internal spiderweb crack fractures",
        probableCause: "Pulse energy was set too high (>4 mJ) or point spacing was set too dense (<0.08mm)",
        correctiveAction: "Reduce pulse energy to 2.5 mJ and set point cloud grid spacing to 0.15mm."
      }
    ],
    proTips: [
      "Clean outer glass faces with 99% IPA before engraving; surface dust scatters laser light and causes surface micro-cracks.",
      "Sort 3D point cloud execution strictly from bottom to top so lower micro-points don't block incoming laser beam paths.",
      "Display finished SSLE crystal blocks on an LED under-lighting base to scatter light and illuminate floating 3D artwork."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. 532nm GREEN LASER HAZARD: Pulsed 532nm green laser radiation presents severe retinal eye hazards; certified OD5+ 532nm safety eyewear is strictly mandatory. Handle glass blocks with care."
  },

  // 47
  {
    id: "polymer-rubber-gaskets",
    title: "Custom Polymer Rubber Gasket Fabrication for Automotive Engines",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    estimatedTime: "15 min flange CAD design, 8 min vector cut, 10 min solvent rinse & fitment",
    targetMaterial: "3.0mm NBR Nitrile Rubber Gasket Sheets (Acrylonitrile-Butadiene)",
    materials: [
      "3.0mm NBR Nitrile Rubber Gasket Sheet (Oil-resistant grade)",
      "Degreasing Solvent / Warm Water",
      "Flange Alignment Dowels"
    ],
    tools: [
      "CO2 Laser (60W–100W class)",
      "LightBurn Software (Kerf Offset Tool)",
      "Digital Precision Vernier Caliper"
    ],
    summary: "High-precision vector cutting protocol for 3.0mm NBR nitrile rubber automotive gaskets and fluid pump seals, detailing acrylonitrile-butadiene thermal properties, bolt hole kerf compensation (-0.05mm), 35 PSI air assist soot purging, and active sulfur fume exhaust.",
    image: IMG.cnc1,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 60W–100W class). 10.6µm light is strongly absorbed by synthetic rubber polymers.",
      unsuitableLasers: "Diode lasers (<20W) and fiber lasers (1064nm) melt rubber into sticky, deformed channels.",
      minimumSpecs: "Enclosed CO2 laser, honeycomb bed, active sulfur-grade fume exhaust, clean air assist compressor (35 PSI).",
      safetyHazards: "SULFUR SMOKE & ASH HAZARD: Thermal ablation of vulcanized nitrile rubber releases acrid sulfur fumes and fine rubber soot. Active local exhaust extraction with carbon filtration media is mandatory. Clean bed honeycomb grid before cutting.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 3.0mm NBR Nitrile Rubber Gasket sheets (Acrylonitrile-Butadiene). NBR synthetic rubber provides high resistance to motor oils, hydraulic fluids, and fuels. Store raw gasket roll flat for 24 hours prior to cutting to eliminate material memory curl.",
    designPrep: "In LightBurn, prepare engine flange gasket vector artwork. Measure bolt hole clearance diameters (e.g. M8 bolt = 8.5mm hole). Apply -0.05mm Kerf Offset to bolt hole vectors and +0.05mm Kerf Offset to outer flange contours in LightBurn layer settings to guarantee exact bolt alignment. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Lay flat NBR rubber sheet on honeycomb bed, pin perimeter securely. Focus CO2 laser beam on top rubber face plane. Connect high-pressure air assist (35 PSI) to purge rubber soot and prevent cut edge re-welding.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist blows sticky rubber char soot out of kerf and prevents edge re-welding."
    },
    exhaust: {
      configuration: "Active local enclosure exhaust duct with carbon filtration",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for acrid rubber sulfur fumes and soot particulate."
    },
    exactParameters: {
      co2_80W: {
        sourceType: "CO2 Laser (10.6µm 80W ref)",
        power: "65% controller setting",
        speed: "15 mm/s (Vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (35 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test of a 10mm bolt hole on scrap 3.0mm NBR rubber at 15 mm/s @ 65% power (80W CO2) with 35 PSI air assist. Verify clean drop-out and test M8 bolt passage.",
    steps: [
      {
        title: "NBR Sheet Flattening & Sulfur Exhaust Start",
        action: "Lay 3.0mm NBR rubber sheet flat on honeycomb bed, pin perimeter, start active sulfur-grade exhaust system.",
        why: "Flat placement prevents focus drift; active carbon exhaust captures acrid vulcanized sulfur fumes.",
        lookFor: "NBR sheet resting dead flat; carbon exhaust pulling active negative pressure.",
        possibleFailure: "Cutting curled rubber sheet causes nozzle collisions during head travel.",
        detail: "Unroll NBR sheet, pin corners flat to honeycomb grid, focus CO2 laser, turn on sulfur exhaust."
      },
      {
        title: "Flange Bolt Hole Kerf Offset Layout",
        action: "In LightBurn, load flange artwork, set -0.05mm Kerf Offset on bolt holes, set +0.05mm Kerf Offset on outer perimeter contour.",
        why: "Applying negative kerf offset to bolt holes ensures M8 bolts slide through without binding.",
        lookFor: "Software preview displaying kerf offset active on hole layers.",
        possibleFailure: "Cutting bolt holes without kerf offset shrinks hole diameters, causing bolt alignment binding.",
        detail: "Select bolt hole layer, enter -0.05mm in Kerf Offset box, select perimeter layer, enter +0.05mm."
      },
      {
        title: "High Air Assist (35 PSI) & Focus Alignment",
        action: "Focus CO2 laser on top NBR rubber face, open air assist valve to 35 PSI, close laser enclosure doors.",
        why: "35 PSI air assist stream blows molten rubber soot downward through kerf before edge re-welding occurs.",
        lookFor: "Laser focused on top rubber plane; 35 PSI air assist jet active at nozzle.",
        possibleFailure: "Cutting rubber with weak air assist (<10 PSI) allows molten rubber to re-weld shut behind laser beam.",
        detail: "Focus Z height, open 35 PSI air assist valve, check safety glasses, close enclosure."
      },
      {
        title: "Single-Pass Vector Cutting Execution",
        action: "Press Start for 1-pass vector cut at 15 mm/s @ 65% power (80W CO2).",
        why: "Single fast pass dumps concentrated thermal energy to sever 3.0mm NBR rubber cleanly in 1 pass.",
        lookFor: "Laser tracing gasket contours smoothly; cut gasket dropping out cleanly from sheet.",
        possibleFailure: "Cutting too fast (30 mm/s) leaves uncut rubber bottom bridges.",
        detail: "Close enclosure, check 10.6µm eyewear, press Start, observe 3mm NBR gasket cut."
      },
      {
        title: "Solvent Wash & Engine Flange Fitment Audit",
        action: "Remove cut NBR gasket, wash in warm water with mild solvent to remove surface soot, align onto engine flange dowel pins.",
        why: "Washing removes loose carbon soot; dowel pin alignment verifies perfect bolt hole pitch.",
        lookFor: "Clean, soot-free NBR gasket seating flat over engine flange dowel pins with exact bolt alignment.",
        possibleFailure: "Installing unwashed gasket transfers carbon soot into engine oil passages.",
        detail: "Wash gasket in water/solvent bath, dry with lint-free towel, fit over engine flange dowels."
      }
    ],
    troubleshooting: [
      {
        symptom: "Cut rubber gasket edges re-weld shut behind laser beam",
        probableCause: "Air assist pressure was too low or cutting speed was set too slow",
        correctiveAction: "Increase air assist pressure to 35 PSI and increase cutting speed to 15 mm/s."
      },
      {
        symptom: "Flange bolt holes are too small and bind against M8 bolts during engine assembly",
        probableCause: "Kerf Offset was omitted on bolt hole vector layers",
        correctiveAction: "Apply a -0.05mm Kerf Offset to bolt hole vector layers in laser software."
      },
      {
        symptom: "Sticky black rubber ash collects heavily on underside of cut gasket",
        probableCause: "Cutting rubber flat on a dirty honeycomb bed without standoff elevation",
        correctiveAction: "Clean honeycomb bed grid thoroughly with degreaser or elevate rubber sheet on pin standoffs."
      }
    ],
    proTips: [
      "Store raw NBR rubber roll flat 24 hours before cutting to eliminate material memory curl.",
      "Apply a -0.05mm Kerf Offset to bolt hole vector layers so flange bolts slide through without binding.",
      "Wash cut NBR gaskets in warm water with mild solvent to remove loose carbon soot before engine assembly."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. SULFUR FUME & SOOT HAZARD: Vulcanized rubber releases acrid sulfur fumes and fine soot. Active carbon-filtered exhaust extraction is mandatory."
  },

  // 48
  {
    id: "fiber-industrial-rust-removal",
    title: "Industrial Fiber Laser Cleaning & Rust Removal on Ferrous Metals",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    estimatedTime: "15 min galvo wobble setup, 10 min laser ablation pass, 10 min passivation primer",
    targetMaterial: "Corroded Heavy Structural Steel Plates (Fe2O3 Iron Oxide Rust Scale)",
    materials: [
      "Corroded Heavy Structural Steel Plates (Heavy Fe2O3 rust scale)",
      "Anti-Corrosion Primer Spray / Passivation Fluid",
      "Microfiber Wipes"
    ],
    tools: [
      "Pulsed Fiber Cleaning Laser System (100W–500W class)",
      "Handheld Galvo Wobble Laser Cleaning Head (100mm scan width)",
      "HEPA Metal Oxide Vacuum Dust Extraction Unit"
    ],
    summary: "Non-abrasive selective laser thermal ablation protocol for stripping heavy Fe2O3 iron oxide rust scale from structural steel plates using pulsed fiber lasers (100W–500W), detailing selective ablation thresholds (1500°C pulse shockwaves), 100mm linear wobble scanning, HEPA oxide dust collection, and surface passivation.",
    image: IMG.machine_fiber,
    prerequisites: {
      compatibleLasers: "High-power Pulsed Fiber lasers (1064nm wavelength, 100W–500W+ class). High pulse energy creates micro-shockwaves that vaporize iron oxide rust scale while base steel reflects laser light safely.",
      unsuitableLasers: "CO2 lasers (10.6µm) reflect off metallic rust; low-power lasers (<50W) fail to reach rust shockwave ablation threshold.",
      minimumSpecs: "Enclosed cleaning booth or PAPR hood system, 100mm galvo wobble head, HEPA oxide vacuum unit, OD6+ 1064nm eyewear.",
      safetyHazards: "INTENSE REFLECTION & TOXIC DUST HAZARD: Rust ablation releases high volumes of airborne respirable iron oxide dust particulates and intense diffuse 1064nm specular reflections. PAPR respirator hood or N95 mask + OD6+ 1064nm safety goggles strictly required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use corroded heavy structural steel plates or forged ferrous parts with Fe2O3 iron oxide rust scale. Selective laser cleaning relies on the differential thermal damage threshold between rust scale ($1500^\circ\text{C}$ shockwave ablation) and raw steel substrate ($k_{steel} = 50 \text{ W/m}\cdot\text{K}$ heat sink). The base steel reflects 1064nm light safely once rust scale is removed.",
    designPrep: "In laser cleaning controller, configure 100mm wide linear wobble scan beam at 200 Hz frequency. Linear wobble motion sweeps laser beam in rapid side-to-side oscillations, preventing localized heat buildup or base metal melting.",
    laserSetup: "Position HEPA metal oxide vacuum extraction nozzle 50mm from cleaning point. Hold cleaning head at an $85^\circ$ incident angle to metal face (avoid $90^\circ$ direct perpendicular angle to prevent specular back-reflection into galvo mirrors). Turn ON HEPA vacuum unit.",
    optics: {
      lens: "F-Theta Scan Lens (250mm long focal length for laser cleaning)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null,
      notes: "Focuses pulse to create thermal shockwave ablation across 100mm scan width."
    },
    airAssist: {
      mode: "Off at cleaning head (HEPA vacuum extraction active)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Do NOT blow compressed air; keep HEPA vacuum suction nozzle active at cleaning point."
    },
    exhaust: {
      configuration: "HEPA metal oxide dust vacuum extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Captures 99.97% of airborne respirable iron oxide dust particles."
    },
    exactParameters: {
      fiber200W: {
        sourceType: "200W Pulsed Fiber Cleaning Laser (1064nm ref)",
        power: "1.8 mJ pulse energy",
        speed: "8000 mm/s (Galvo line scan velocity)",
        passes: "1 Pass (Linear scan sweep)",
        lineInterval: "100mm scan line width",
        airAssist: "Off at cleaning head (HEPA vacuum active)",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "30 kHz (Pulse repetition rate)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 100mm single-pass cleaning scan on a scrap corroded steel plate at 8000 mm/s, 30 kHz, 1.8 mJ pulse energy. Inspect cleaned path to verify Sa 3.0 white metal surface grade without base metal melting.",
    steps: [
      {
        title: "HEPA Vacuum Nozzle Positioning & Eye Protection",
        action: "Position HEPA oxide vacuum suction nozzle 50mm from target rust area, turn ON vacuum unit, put on OD6+ 1064nm safety goggles.",
        why: "HEPA vacuum captures airborne iron oxide dust at the source; OD6+ glasses protect eyes from diffuse 1064nm reflections.",
        lookFor: "HEPA vacuum pulling active suction; OD6+ 1064nm safety glasses on.",
        possibleFailure: "Operating without HEPA vacuum fills room with respirable iron oxide dust.",
        detail: "Position vacuum nozzle 50mm from rust, start HEPA extractor unit, put on OD6+ 1064nm safety glasses."
      },
      {
        title: "100mm Galvo Wobble Scan & Parameter Setup",
        action: "In cleaning controller, set 100mm line scan width @ 200 Hz wobble frequency, set 200W parameters (8000 mm/s, 30 kHz, 1.8 mJ pulse energy).",
        why: "100mm linear wobble sweeps laser beam rapidly across surface, preventing localized steel overheating.",
        lookFor: "Controller displaying 100mm line wobble scan active at 200 Hz.",
        possibleFailure: "Cleaning with a static spot without wobble melts base steel into rough crater pits.",
        detail: "Select 100mm line wobble mode, set 200 Hz frequency, set 30 kHz pulse rate."
      },
      {
        title: "85° Incident Angle & Laser Sweep Execution",
        action: "Hold cleaning gun at an 85° angle to metal plate, press trigger, sweep cleaning beam smoothly across corroded steel surface.",
        why: "Holding gun at 85° prevents direct perpendicular specular back-reflections from hitting internal galvo scan mirrors.",
        lookFor: "Bright orange plasma flash and crackling acoustic sound as rust scale vaporizes instantly, leaving gleaming silver Sa 3.0 steel.",
        possibleFailure: "Holding gun at 90° direct perpendicular angle damages internal galvo scan mirrors.",
        detail: "Hold gun at 85° angle, pull trigger, sweep beam across rust at 50 mm/s manual travel speed."
      },
      {
        title: "Sa 3.0 White Metal Surface Inspection",
        action: "Release trigger, inspect cleaned steel path under bright light to verify Sa 3.0 near-white metal surface finish.",
        why: "Sa 3.0 surface grade confirms 100% removal of oxide scale, exposing pristine anchor profile for welding or coating.",
        lookFor: "Gleaming silver Sa 3.0 bare steel surface completely free of brown rust scale.",
        possibleFailure: "Residual brown patches indicate manual sweep speed was too fast.",
        detail: "Inspect cleaned steel face; re-scan any stubborn heavy rust patches."
      },
      {
        title: "Passivation Primer Spray Application",
        action: "Wipe clean bare steel face with solvent wipe, spray anti-corrosion primer within 30 minutes.",
        why: "Clean bare steel reacts rapidly with ambient humidity; applying primer within 30 minutes prevents flash rusting.",
        lookFor: "Clean bare steel coated with protective anti-corrosion primer.",
        possibleFailure: "Leaving bare steel unsealed overnight causes instant orange flash rust.",
        detail: "Wipe steel with solvent, spray anti-corrosion primer coat within 30 min."
      }
    ],
    troubleshooting: [
      {
        symptom: "Base steel plate surface becomes gouged, discolored, or melted",
        probableCause: "Laser travel sweep speed was too slow or wobble scan frequency was disabled",
        correctiveAction: "Enable 100mm line wobble scan at 200 Hz and increase manual sweep velocity across metal plate."
      },
      {
        symptom: "Galvo cleaning gun head shuts down with reflection error",
        probableCause: "Cleaning gun was held at a direct 90° perpendicular angle to metal face, reflecting beam back into optics",
        correctiveAction: "Tilt laser gun head to an 85° incident angle to redirect reflections safely away from galvo optics."
      },
      {
        symptom: "Cleaned bare steel develops orange flash rust within 2 hours",
        probableCause: "Bare steel was left unsealed in humid workshop air",
        correctiveAction: "Wipe clean bare steel with solvent and apply anti-corrosion primer spray within 30 minutes of laser cleaning."
      }
    ],
    proTips: [
      "Hold laser cleaning gun at an 85° incident angle to prevent back-reflected light from hitting galvo scan optics.",
      "Laser cleaning leaves a pristine Sa 3.0 near-white metal surface ideal for weld prep or powder coating.",
      "Apply anti-corrosion primer spray within 30 minutes of laser cleaning to prevent flash rusting on bare steel."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. INTENSE REFLECTION & TOXIC DUST HAZARD: Heavy rust ablation releases airborne iron oxide dust and diffuse 1064nm specular reflections. PAPR respirator hood or N95 mask + OD6+ 1064nm safety goggles strictly required."
  },

  // 49
  {
    id: "multilayer-depth-mandala-art",
    title: "3D Multilayer Wood Mandala Art Creation & Precision Alignment Jig",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "16 min",
    estimatedTime: "20 min vector nesting & alignment hole prep, 25 min 8-layer cut batch, 12h stain dry, 2h glue clamp",
    targetMaterial: "3.0mm Baltic Birch Plywood (8 Sheets 30x30cm) & Contrasting Wood Stains",
    materials: [
      "3.0mm Baltic Birch Plywood (8 Sheets 30x30cm, void-free core)",
      "Contrasting Wood Stains (Natural, Golden Oak, Walnut, Mahogany, Black Teak)",
      "Titebond II PVA Wood Glue",
      "4x 3.0mm Wooden Dowel Alignment Pins"
    ],
    tools: [
      "CO2 Laser (50W–80W class) or Diode Laser (20W reference)",
      "LightBurn Software",
      "Wood Clamps & Microfiber Rags"
    ],
    summary: "Parametric nesting, pre-staining, vector cutting, and dowel-pin alignment protocol for crafting intricate 8-layer 3D architectural wood mandala wall art, detailing 3.0mm alignment hole geometry, clean air assist vector cutting, pre-cut wood staining, and stacked dowel-pin clamping.",
    image: IMG.wood_wall,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–80W class) or Diode lasers (450nm wavelength, 20W reference). CO2 laser light cuts 3mm Baltic birch cleanly.",
      unsuitableLasers: "Fiber lasers (1064nm) pass through organic wood fibers without clean cutting.",
      minimumSpecs: "Enclosed laser machine, honeycomb bed, active enclosure smoke exhaust, clean air assist compressor (25-35 PSI).",
      safetyHazards: "WOOD STAIN FLAMMABILITY & SMOKE HAZARD: Wood stain rags are susceptible to spontaneous combustion; store oily rags in water-filled metal cans. Active enclosure exhaust extraction required during laser cutting.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 3.0mm Baltic Birch Plywood (8 Sheets 30x30cm, B/BB Grade void-free core). Baltic birch provides flat, uniform veneer layers. Check that every sheet has identical thickness ($\pm 0.1\text{mm}$) to prevent cumulative stack height errors across 8 layers.",
    designPrep: "In LightBurn, separate mandala artwork into 8 individual vector layers. CRITICAL ALIGNMENT RULE: Incorporate four 3.0mm dowel alignment holes at identical corner X,Y coordinates on every single layer. Pre-stain wood sheets before cutting if you want natural dark laser cut edges to outline vector geometry. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin Baltic birch sheet flat on honeycomb bed using bed pins. Focus CO2 laser beam precisely on top wood surface plane. Connect clean air assist (25-35 PSI) to keep top veneer faces bright.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure clean air assist (25-35 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist prevents smoke resin halos on pre-stained wood veneer faces."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for wood smoke and stain VOCs."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "45% controller setting",
        speed: "32 mm/s (Vector cut speed)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (25-35 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a vector cut test on scrap 3mm Baltic birch at 32 mm/s @ 45% power (60W CO2) with 25 PSI air assist. Verify 3.0mm dowel pin fits snugly into alignment hole.",
    steps: [
      {
        title: "Wood Sheet Pre-Staining & Alignment Hole Layout",
        action: "Stain 8 Baltic birch sheets with contrasting wood stains (Layer 1 Natural, Layer 2 Golden Oak, Layer 3 Walnut, Layer 4 Mahogany, Layer 5 Black Teak), dry 12 hours. In LightBurn, add 3.0mm corner alignment holes to all 8 layers.",
        why: "Pre-staining before cutting leaves dark laser-burnt vector edges to outline 3D geometry; 3.0mm dowel holes guarantee exact 8-layer registration.",
        lookFor: "8 wood sheets pre-stained and dry; 3.0mm corner alignment holes set at identical coordinates on all layers.",
        possibleFailure: "Omitting alignment holes causes 8-layer stack misalignment during glue assembly.",
        detail: "Stain sheets, dry 12h, load LightBurn, place four 3.0mm alignment holes in identical corner coordinates."
      },
      {
        title: "High Air Assist & Surface Focus Setup",
        action: "Pin pre-stained sheet flat on bed standoffs, focus CO2 laser to top surface, open 25-35 PSI air assist valve, start exhaust.",
        why: "25-35 PSI air assist stream keeps pre-stained veneer faces free of sticky brown smoke tar.",
        lookFor: "Laser focused on top wood plane; 25 PSI air assist jet active at nozzle.",
        possibleFailure: "Cutting pre-stained wood with weak air assist (<10 PSI) leaves dark yellow smoke halos across stained face.",
        detail: "Focus Z height, open 25 PSI air assist valve, check safety glasses, close enclosure."
      },
      {
        title: "Batch Vector Cutting Execution (Layers 1 to 8)",
        action: "Press Start for 1-pass vector cut at 32 mm/s @ 45% power (60W CO2) for each layer in sequence.",
        why: "Single fast vector pass cuts intricate mandala geometries cleanly without charring wood veneer.",
        lookFor: "Laser cutting delicate mandala lattice lines smoothly; cut parts dropping out cleanly.",
        possibleFailure: "Cutting too fast leaves uncut bottom wood fibers that rip mandala lattice during removal.",
        detail: "Execute vector cut pass for Layer 1, repeat for Layers 2 through 8, inspect cut pieces."
      },
      {
        title: "Dowel Pin Alignment & Sequential Layer Stacking",
        action: "Insert 4x 3.0mm wooden dowel pins into a base board, slide Layer 1 over dowel pins, apply thin Titebond II wood glue to back of Layer 2, slide Layer 2 over dowel pins, repeat through Layer 8.",
        why: "Corner dowel pins lock all 8 mandala layers into perfect optical registration without shifting.",
        lookFor: "8 mandala layers stacked over dowel pins in perfect 3D alignment.",
        possibleFailure: "Attempting to align 8 complex mandala layers by hand without dowel pins results in crooked layers.",
        detail: "Insert dowel pins, apply glue between layers, stack Layers 1-8 over pins sequentially."
      },
      {
        title: "Clamping, Curing & Dowel Flush Trim",
        action: "Apply wood clamps over stacked mandala layers, clamp tight for 2 hours, trim excess dowel pin lengths flush with flush-cut pliers, apply clear wax.",
        why: "Clamping flattens 8 layers into a rigid 3D architectural panel; clear wax protects wood face.",
        lookFor: "Stunning 3D architectural wood mandala wall art with perfect layer alignment and contrasting stained depth.",
        possibleFailure: "Insufficient clamp pressure allows gaps between layers.",
        detail: "Clamp stacked mandala 2 hours, trim dowel pins flush, apply clear wax coat."
      }
    ],
    troubleshooting: [
      {
        symptom: "8 mandala layers shift out of alignment during glue assembly",
        probableCause: "Dowel pin alignment holes were omitted in vector software layout",
        correctiveAction: "Incorporate four 3.0mm alignment holes in identical corner coordinates on every layer."
      },
      {
        symptom: "Pre-stained wood veneer faces have dark brown smoke tar stains after laser cutting",
        probableCause: "Air assist pressure was too low during vector cutting pass",
        correctiveAction: "Increase air assist pressure to 25-35 PSI to purge wood smoke away from stained veneer face."
      },
      {
        symptom: "Oily stain rags catch fire in workshop waste bin",
        probableCause: "Spontaneous combustion of oil-based wood stain rags",
        correctiveAction: "Store oily wood stain rags in a water-filled metal container immediately after use."
      }
    ],
    proTips: [
      "Incorporate four 3.0mm dowel alignment holes in identical corner coordinates on every layer for perfect 8-layer registration.",
      "Pre-stain wood sheets before laser cutting so natural dark burnt vector cut lines outline 3D geometry.",
      "Store oily wood stain rags in water-filled metal cans to prevent spontaneous combustion fire hazards."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. STAIN FLAMMABILITY HAZARD: Oily wood stain rags are susceptible to spontaneous combustion; store rags in water-filled metal cans. Active enclosure exhaust extraction required for wood smoke."
  },

  // 50
  {
    id: "mopa-frequency-plastics-marking",
    title: "MOPA Fiber Laser Frequency Tuning for Commercial Plastics (ABS, PC, Nylon)",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "17 min",
    estimatedTime: "15 min MOPA pulse frequency tuning, 5 min galvo mark, 5 min optical contrast audit",
    targetMaterial: "ABS Plastic Housings, Polycarbonate (PC) Keycaps, & Nylon 66 Cable Ties",
    materials: [
      "ABS Plastic Component Housings (White foaming mark)",
      "Polycarbonate (PC) Keycaps (Black carbonization mark)",
      "Nylon 66 Cable Ties (High-contrast mark)",
      "99% Isopropyl Alcohol (IPA) Solvent Wipes"
    ],
    tools: [
      "MOPA Fiber Laser System (20W–50W class with 2ns-500ns pulse width control)",
      "LightBurn Galvo or EZCAD3 Software",
      "F-Theta Scan Lens (160mm focal length)",
      "Optical Loupe / Contrast Magnifier"
    ],
    summary: "MOPA fiber laser pulse frequency and duration tuning protocol for high-contrast non-destructive laser marking on industrial polymers (ABS, PC, Nylon 66), detailing surface micro-foaming mechanics (white text on ABS at 350 kHz / 4ns), controlled surface carbonization (black text on PC at 80 kHz / 60ns), and organic polymer fume filtration.",
    image: IMG.acrylic_blue,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers (1064nm wavelength, 20W–50W class with selectable pulse duration 2ns–500ns). Variable short pulse control enables precise thermal management required for polymer foaming vs carbonization.",
      unsuitableLasers: "Standard Q-switched fiber lasers (fixed ~100ns pulse) dump excess heat into plastics, causing ugly charred melt trenches.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta 160mm lens, dual red-dot focus, HEPA active carbon fume filter system.",
      safetyHazards: "ORGANIC POLYMER FUME HAZARD: Laser marking plastics decomposes polymers into toxic organic VOC fumes and fine micro-soot. Active HEPA carbon-filtered exhaust extraction is strictly mandatory.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select commercial injection-molded plastics: ABS (Acrylonitrile-Butadiene-Styrene), PC (Polycarbonate), or Nylon 66 (Polyamide). Plastics react under 1064nm laser heat via two distinct physical mechanisms: 1) Micro-Foaming (gentle surface expansion of gas bubbles creating bright white text), or 2) Controlled Carbonization (thermal carbon bonding creating jet-black marks). Clean plastic surfaces with 99% IPA wipe before marking.",
    designPrep: "In LightBurn Galvo, configure material-specific hatch layer profiles. MATERIAL TUNING MATRIX (30W MOPA): ABS Plastic (White Foaming): 2000 mm/s @ 18% power, 350 kHz, 4ns pulse width, 0.03mm hatch. Polycarbonate PC (Black Carbonization): 1200 mm/s @ 22% power, 80 kHz, 60ns pulse width, 0.03mm hatch. Nylon 66: 1800 mm/s @ 20% power, 250 kHz, 8ns pulse width. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Fixture plastic housing flat in alignment nest. Converge dual red-dot focus pointers on top plastic surface plane. Start active HEPA carbon fume filter unit.",
    optics: {
      lens: "F-Theta Galvo Scan Lens (160mm focal length)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (HEPA enclosure exhaust active)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist turned off for galvo plastic marking; keep HEPA carbon filter active."
    },
    exhaust: {
      configuration: "HEPA + Active Carbon organic polymer fume filter system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Captures organic plastic pyrolysis VOCs and fine polymer soot."
    },
    exactParameters: {
      mopa30W_abs: {
        sourceType: "30W MOPA Fiber Galvo (ABS White Foaming ref)",
        power: "18% controller setting",
        speed: "2000 mm/s",
        passes: 1,
        lineInterval: "0.030mm hatch pitch",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "350 kHz (High pulse repetition frequency)",
        pulseWidth: "4 ns (Short pulse width restricts thermal penetration)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      mopa30W_pc: {
        sourceType: "30W MOPA Fiber Galvo (PC Black Carbonization ref)",
        power: "22% controller setting",
        speed: "1200 mm/s",
        passes: 1,
        lineInterval: "0.030mm hatch pitch",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "80 kHz (Moderate pulse frequency)",
        pulseWidth: "60 ns (Longer pulse width triggers surface carbon bonding)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a frequency grid test (200 kHz to 400 kHz in 50 kHz steps @ 4ns pulse width, 18% power) on scrap ABS plastic housing. Inspect marked text under loupe for smooth, non-tactile, bright snow-white contrast.",
    steps: [
      {
        title: "Plastic Component Degreasing & Nest Fixturing",
        action: "Wipe ABS/PC plastic housing with 99% IPA wipe, seat flat in alignment nest, start HEPA active carbon fume filter.",
        why: "IPA removes mold release agents and finger oils; carbon filtration captures organic VOC plastic fumes.",
        lookFor: "Degreased plastic housing flat in nest; HEPA carbon filter pulling active draft.",
        possibleFailure: "Marking over mold release oils causes blotchy, uneven mark contrast.",
        detail: "Wipe plastic with IPA wipe, seat in alignment fixture, turn on HEPA carbon filter unit."
      },
      {
        title: "MOPA Pulse Duration & Frequency Tuning",
        action: "In LightBurn Galvo, select material profile: For ABS White Foaming set 2000 mm/s @ 18% power, 350 kHz, 4ns pulse width, 0.03mm hatch. For PC Black Mark set 1200 mm/s @ 22% power, 80 kHz, 60ns pulse width.",
        why: "4ns pulses at 350 kHz melt ABS surface gently to expand gas bubbles (white foaming); 60ns pulses at 80 kHz carbonize PC (black mark).",
        lookFor: "Material profile layer parameters correctly configured in software layer manager.",
        possibleFailure: "Using wrong pulse parameters (e.g. 200ns pulse on ABS) burns plastic into ugly charred melt trenches.",
        detail: "Select material layer, set power/speed/frequency/pulse width matching target polymer profile."
      },
      {
        title: "Precision Galvo Focus Convergence",
        action: "Converge dual red-dot focus pointers precisely on top plastic face plane, close galvo enclosure, check 1064nm safety glasses.",
        why: "Precise focus delivers exact peak power density required for controlled surface micro-foaming.",
        lookFor: "Dual red dots converged on top plastic face; galvo enclosure closed.",
        possibleFailure: "Out-of-focus galvo beam fails to foam plastic, leaving faint un-marked traces.",
        detail: "Adjust galvo column Z height, verify red dots converged, close enclosure doors."
      },
      {
        title: "MOPA Plastic Marking Execution",
        action: "Press Start for 1-pass galvo plastic marking cycle.",
        why: "MOPA laser scans polymer face in 1 second, creating high-contrast text via micro-foaming or carbonization.",
        lookFor: "Galvo laser scanning plastic face smoothly, producing crisp snow-white (ABS) or jet-black (PC) text.",
        possibleFailure: "Heavy black smoke indicates laser power was set excessively high.",
        detail: "Press Start, monitor 1-second galvo mark execution, observe high-contrast mark formation."
      },
      {
        title: "Tactile & Optical loupe Inspection",
        action: "Remove marked plastic part, inspect mark under 10x optical loupe and run finger across text.",
        why: "Proper MOPA foaming yields a smooth, non-tactile, high-contrast mark that does not catch fingernails or weaken plastic housings.",
        lookFor: "Smooth, non-tactile, razor-sharp white or black text with zero surface cratering.",
        possibleFailure: "Rough cratered text indicates power was too high or pulse width too long.",
        detail: "Inspect mark under 10x loupe, check surface smoothness with finger, confirm high contrast."
      }
    ],
    troubleshooting: [
      {
        symptom: "ABS plastic burns into dark yellow/brown charred melt trenches",
        probableCause: "MOPA pulse width was set too long (>50ns) or pulse frequency was too low (<150 kHz), dumping excess heat",
        correctiveAction: "Shorten MOPA pulse width to 4ns, increase pulse frequency to 350 kHz, and lower power to 18%."
      },
      {
        symptom: "Polycarbonate keycap mark is faint grey instead of jet black",
        probableCause: "Pulse width was too short (4ns) or frequency too high (350 kHz), preventing surface carbon bonding",
        correctiveAction: "Increase MOPA pulse width to 60ns and lower pulse frequency to 80 kHz @ 22% power."
      },
      {
        symptom: "Plastic laser mark rubs off easily with finger pressure",
        probableCause: "Laser power was set too low, resulting in superficial surface dust instead of sub-surface micro-foaming",
        correctiveAction: "Increase MOPA laser power by 3% or reduce galvo scan speed by 20%."
      }
    ],
    proTips: [
      "Use short MOPA pulse widths (4ns) at high frequency (350 kHz) to produce bright snow-white text on ABS plastic via micro-foaming.",
      "Use longer pulse widths (60ns) at moderate frequency (80 kHz) to create jet-black marks on Polycarbonate via controlled carbonization.",
      "Perform a 99% IPA wipe on plastic parts before marking to remove mold release agents that cause blotchy contrast."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. ORGANIC POLYMER FUME HAZARD: Plastic laser marking releases organic VOC fumes and soot. HEPA active carbon exhaust filtration is strictly mandatory."
  }
];

