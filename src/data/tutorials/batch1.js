import { IMG } from "../images";

export const BATCH_1 = [
  // 1
  {
    id: "wood-coasters-stucki",
    title: "Mastering Photo Engraving on Birch Plywood with Stucki Dithering",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "12 min",
    estimatedTime: "15 min setup, 10 min machine run",
    targetMaterial: "3mm Grade-A Baltic Birch Plywood",
    materials: [
      "3mm Baltic Birch Plywood (5-ply void-free core recommended)",
      "Low-tack Blue Painter's Masking Tape",
      "Wood Finish (e.g. Mineral Oil or Natural Wax Finish)"
    ],
    tools: [
      "LightBurn Software (with Material Test & Interval Test tools)",
      "320-Grit Silicon Carbide Sandpaper",
      "Static-Free Microfiber Cloth",
      "Honeycomb Bed Hold-Down Pins"
    ],
    summary: "Practical methodology for converting photo portraits into photo engravings on 3mm Baltic birch plywood using Stucki error-diffusion dithering, featuring LightBurn Interval Test, Material Test, and Overscanning workflows to calibrate parameters for your specific laser setup.",
    image: IMG.wood_action,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength) or CO2 lasers (10.6µm wavelength).",
      unsuitableLasers: "Typical 1064nm Fiber/Galvo markers are generally unsuitable for predictable photographic engraving on untreated plywood, as 1064nm light absorption differs significantly from blue diode or CO2 wavelengths on organic wood cellulose.",
      minimumSpecs: "Enclosed frame or dedicated laser work area, local fume extraction, air assist capability.",
      safetyHazards: "Wood pyrolysis releases PM2.5 particulates and organic terpene vapors.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Prefer high-quality 5-ply Baltic Birch Plywood (such as B/BB grade) with void-free inner cores. Cheap 3-ply basswood or utility plywood often contains hidden interior glue voids, knots, or uneven resin fills that cause unexpected burn-through or unengraved patches. Always inspect sheet flatness prior to loading.",
    designPrep: "Import photo artwork into LightBurn. Apply mild contrast sharpening. Select the Stucki error-diffusion dithering algorithm, which distributes quantization error to 12 future neighbouring pixels using a 5x5 matrix with weights summed to a divisor of 42. This generally helps reduce noticeable directional patterning along natural wood grain compared to simpler dithering kernels. Determine your appropriate line interval using LightBurn's built-in Interval Test on a scrap section of your wood sheet rather than assuming maximum line density produces maximum quality. (Note: A 0.10 mm line interval equals approximately 254 lines per inch [LPI = 25.4 / 0.10mm]. Running higher DPI than your laser's effective spot size can lead to dot overlap and over-darkening). For supported GCode devices, enable Overscanning and begin with the machine or LightBurn default. Increase it only if edge darkening remains and sufficient travel space is available. The required value depends on engraving speed, machine acceleration and available travel. DSP controllers may manage this differently, while Galvo systems do not use Overscanning.",
    laserSetup: "Pin the plywood flat against your laser bed using hold-down pins to prevent sheet bowing. Set focus to the top wood surface plane per manufacturer instructions. Enable local fume exhaust and low air assist to protect optics while preventing soot re-deposition.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low flow protects focal optics from smoke while avoiding heavy air blasts that push soot into bare wood pores."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "28% controller setting (starting point)",
      speed: "4500 mm/min (Diode starting point) / 350 mm/s (CO2 starting point)",
      passes: "1",
      lineInterval: "0.10mm (~254 LPI) - verify via Interval Test",
      airAssist: "Low trickle flow",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Image (Stucki Dither)",
      frequency: "N/A (Continuous diode / RF CO2)",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Do not rely on universal settings. Use LightBurn's Material Test generator (Laser Tools -> Material Test Generator) to create a test matrix on scrap wood from the same batch. Keep line interval fixed at ~0.10mm (~254 LPI) and test a speed range (e.g. 3,000 to 6,000 mm/min) against power settings (e.g. 15% to 35%). Look for the grid cell that gives rich shadow detail without burning adjacent highlight dots together. Additionally, run LightBurn's Interval Test to find the exact line interval where raster lines just touch without overlapping.",
    steps: [
      {
        title: "Photometric Preparation & Tone Adjustment",
        action: "Import photo into LightBurn, convert to grayscale, boost midtone contrast slightly, and apply a mild unsharp mask.",
        why: "Laser dithering converts continuous tones into binary on/off pulses; pre-adjusting midtones prevents shadow details from collapsing into solid black areas.",
        lookFor: "Subtle detail visible in both highlights and dark shadows on the screen preview.",
        possibleFailure: "Unadjusted images often result in muddy, flat photo output with over-darkened facial features.",
        detail: "Import image into LightBurn. Open Image Adjust. Boost midtone contrast and set sharpening to enhance edge definition."
      },
      {
        title: "Dithering Kernel Selection (Stucki Algorithm)",
        action: "In LightBurn Image Settings, set Image Mode to Stucki.",
        why: "Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. This generally helps reduce noticeable directional patterning along wood grain compared to simpler kernels.",
        lookFor: "Natural, organic dot distribution across smooth gradients without harsh pixel clusters.",
        possibleFailure: "Using basic ordered dithering can create distracting mechanical patterns that clash with wood grain.",
        detail: "Set Layer Mode to Image and select Stucki under Dithering options."
      },
      {
        title: "Line Interval Calibration & Math (0.10mm = ~254 LPI)",
        action: "Set starting line interval to 0.10mm (~254 LPI via LPI = 25.4 / 0.10mm) and refine using LightBurn's Interval Test.",
        why: "Setting line interval too narrow causes adjacent burn spots to overlap, scorching the wood and destroying highlight detail. Calculating 254 LPI correctly prevents over-burning.",
        lookFor: "Clean line density where raster passes sit side-by-side without visible gaps or charred overlap.",
        possibleFailure: "Miscalculating LPI or setting line interval too low burns wood into a dark crust.",
        detail: "Enter 0.10mm Line Interval in LightBurn layer settings and run Interval Test to confirm."
      },
      {
        title: "Surface Preparation & Low-Tack Masking",
        action: "Hand-sand birch surface lightly with 320-grit paper along the grain, wipe away dust, and optionally apply low-tack paper masking tape.",
        why: "Sanding removes surface press glaze and levels micro-burrs. Paper masking captures vaporized wood pitch sap and smoke residue.",
        lookFor: "Smooth, dust-free surface with flat tape application free of air bubbles.",
        possibleFailure: "Un-sanded rough surfaces scatter focus; trapped air bubbles under tape allow smoke seepage halos.",
        detail: "Sand lightly with 320-grit paper, wipe static dust, and apply paper masking tape firmly with a squeegee."
      },
      {
        title: "Bed Leveling & Optical Surface Focus",
        action: "Secure plywood flat with honeycomb pins and set laser height gauge precisely to the top wood plane.",
        why: "Bowed plywood shifts out of the focal plane, broadening the beam spot and reducing power density.",
        lookFor: "Wood resting flat across all corners with focal gauge touching the top surface plane.",
        possibleFailure: "Focusing on the bed rather than top surface produces fuzzy, blurry details.",
        detail: "Insert hold-down pins at corners, drop laser focus gauge to touch top wood surface, and lock Z-height."
      },
      {
        title: "Parameter Execution, Overscanning & Air Assist Control",
        action: "Enable local exhaust, verify Overscanning is enabled for GCode devices (e.g. 2.5% to 5%), and set air assist to low trickle flow before launching the engraving job.",
        why: "Low air assist protects optics while preventing heavy blasts from pushing soot into wood pores. Overscanning extends head travel past image edges before decelerating, ensuring constant velocity firing.",
        lookFor: "Steady smoke extraction toward ducting and clean, uniform wood tone formation.",
        possibleFailure: "Disabling overscanning on GCode lasers causes dark charred burn lines along left and right graphic borders.",
        detail: "Verify LightBurn Cut Settings: enable Overscanning (starting with machine/software default), set air assist to low trickle flow, and start the run."
      },
      {
        title: "Clean-Up & Protective Finishing",
        action: "Remove masking tape, wipe off light surface dust with a dry microfiber cloth, and optionally apply a light coat of mineral oil or natural wood wax.",
        why: "Applying a light coat of mineral oil or natural wood wax can deepen wood tone and enhance visual contrast between bare wood and dithered marks. Note that liquid oil finishes do not provide automatic food safety, heat resistance, or dishwasher resistance. Always select finishes according to your intended end-use and follow the finish manufacturer's curing and application instructions.",
        lookFor: "Deep tone contrast with clean wood highlights.",
        possibleFailure: "Washing thin plywood with water can cause wood warping and grain raise.",
        detail: "Peel masking tape, wipe with dry microfiber, and apply finish following manufacturer instructions."
      }
    ],
    troubleshooting: [
      { issue: "Photo appears washed out with weak contrast", likelyCause: "Speed too fast or power setting too low", howToConfirm: "Darkest shadow areas appear light tan instead of deep charcoal", fix: "Run LightBurn Material Test to find higher power % or lower speed setting." },
      { issue: "Dark shadow areas burn into a solid black blob", likelyCause: "Power setting too high or line interval too narrow causing spot overlap", howToConfirm: "Inspect dots under magnification; adjacent dots touch and char together", fix: "Increase line interval using LightBurn Interval Test and lower power setting." },
      { issue: "Horizontal banding lines across image", likelyCause: "Loose Y-axis timing belt or erratic stepper motion", howToConfirm: "Check belt tension and look for periodic line spacing matching belt pitch", fix: "Tension mechanical belts and verify smooth rail movement." },
      { issue: "Dark charred burn lines on left and right image borders", likelyCause: "Overscanning disabled on GCode laser system", howToConfirm: "Heavy burning occurs strictly where laser head changes direction", fix: "Enable Overscanning (2.5% to 5%) in LightBurn Cut Settings." }
    ],
    proTips: [
      "Always test line interval using LightBurn's Interval Test tool. Finding the exact point where lines touch without overlapping produces sharper images than blindly setting max resolution.",
      "For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists and travel space allows.",
      "Orient wood grain horizontally (parallel to scan travel) whenever possible to prevent micro-chatter across growth rings."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements. Solvent Safety: Isopropyl Alcohol (IPA) and Acetone are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 2
  {
    id: "slate-coasters-laser",
    title: "Laser Engraving Natural Welsh Slate Coasters with Halftone Matrix",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "10 min",
    estimatedTime: "10 min setup, 8 min machine run",
    targetMaterial: "Natural Metamorphic Black Slate (10x10cm Blanks)",
    materials: [
      "Natural Metamorphic Black Slate Coaster Blanks (10x10cm, 4-6mm thick)",
      "Satin Clear Polyurethane Spray or Mineral Oil",
      "Self-Adhesive 2mm Felt Pads",
      "99% Isopropyl Alcohol"
    ],
    tools: [
      "LightBurn Software",
      "Diode Laser (10W-20W) or CO2 Laser / Fiber Galvo Laser",
      "Soft Nylon Bristle Brush",
      "Static-Free Microfiber Cloth",
      "Digital Vernier Caliper / Focal Height Gauge"
    ],
    summary: "Engineering protocol for creating permanent high-contrast bright white vector line art and photographic dithered imagery on natural black metamorphic slate, covering slate cleaning, graphic image inversion mechanics, parameters across laser sources, and post-processing sealer contrast enhancement.",
    image: IMG.slate_coaster,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm), CO2 lasers (10.6µm), and Fiber/Galvo lasers (1064nm). All three laser wavelengths are efficiently absorbed by natural slate silica/mica minerals.",
      unsuitableLasers: "Extremely low-power focused diode lasers (<5W) require impractically slow scan speeds to induce surface micro-fracturing.",
      minimumSpecs: "Enclosed laser system or dedicated ventilated work area, local fume extraction, dust protection during post-cleaning.",
      safetyHazards: "Stone thermal ablation generates fine airborne micro-silica dust (silicosis hazard during dry brushing). Wear an N95/FFP2 dust mask during post-engrave brushing.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Natural slate is a fine-grained metamorphic rock composed of quartz, mica, and clay minerals. When laser light strikes slate, localized thermal shock micro-fractures the dark surface into bright white micro-crystalline silica/quartz particles. Natural slate exhibits surface height variance (+/- 0.8mm across a 10cm tile). Measure median thickness across multiple points with calipers and set laser focus to the median surface height rather than the highest peak.",
    designPrep: "Invert artwork in LightBurn (Toggle 'Negative Image' ON) for photographic engraving. Because laser light micro-fractures dark slate into bright white marks, bright pixels on screen correspond to laser firing, while shadow areas remain un-engraved dark slate. For photographic engraving, use Stucki dithering. Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. Determine your appropriate line interval using LightBurn's built-in Interval Test on a scrap slate tile rather than assuming maximum resolution. (Note: A 0.10 mm line interval equals approximately 254 lines per inch [LPI = 25.4 / 0.10mm]). For supported GCode devices, enable Overscanning and begin with the machine or LightBurn default. Increase it only if edge darkening remains and sufficient travel space is available. The required value depends on engraving speed, machine acceleration and available travel. DSP controllers may manage this differently, while Galvo systems do not use Overscanning.",
    laserSetup: "Secure slate tile on bed using hold-down pins or fixture. Set z-focus height to the median surface height plane. Enable local fume extraction and low air assist flow to clear silica dust from optics.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist flow protects focal lens from airborne stone dust without blowing abrasive grit into linear guide rails."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "42% controller setting (Diode 20W reference) / 16% controller setting (CO2 60W reference)",
      speed: "3000 mm/min (Diode reference) / 280 mm/s (CO2 reference)",
      passes: "1",
      lineInterval: "0.10mm (~254 LPI) - verify via Interval Test",
      airAssist: "Low trickle flow",
      focusOffset: "0.0mm (Surface median focus)",
      lightburnMode: "Image (Stucki Dither / Inverted) or Fill (Vector Inverted)",
      frequency: "N/A (Continuous diode / RF CO2)",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run LightBurn's Material Test generator on a scrap slate tile from your batch. Test scan speed against power settings to find the exact grid square yielding a brilliant chalk-white mark without pitting or flaking stone fragments away.",
    steps: [
      {
        title: "Substrate Degreasing & Quarry Dust Extraction",
        action: "Clean slate tile thoroughly with 99% Isopropyl Alcohol using a nylon brush and allow to dry completely. Solvent Safety: Isopropyl Alcohol (IPA) is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Removes skin oils and quarry dust trapped inside slate pores that cause uneven optical absorption.",
        lookFor: "Completely dry, matte dark slate surface free of grease smudges.",
        possibleFailure: "Engraving over finger oils leaves dark splotchy patches on the finished piece.",
        detail: "Wipe slate tile with IPA-soaked lint-free cloth and scrub with nylon brush, allowing 2 minutes for solvent evaporation."
      },
      {
        title: "Software Image Inversion & Stucki Dithering Dynamics",
        action: "Import design into LightBurn, toggle Negative Image ON, and select Stucki dithering mode.",
        why: "Inverts image tones so laser pulses create bright highlights on dark stone. Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42.",
        lookFor: "Negative preview on screen with crisp micro-dot detail in highlight zones.",
        possibleFailure: "Forgetting to invert image results in a photo negative on the final slate.",
        detail: "Open Image Adjust in LightBurn, enable Negative Image, set Dithering to Stucki, and refine midtone contrast."
      },
      {
        title: "Median Surface Height Caliper Focus",
        action: "Measure slate thickness across 4 corners with digital calipers and set laser focus height to the median plane.",
        why: "Metamorphic slate has natural thickness variance (+/- 0.8mm); median focus prevents extreme defocusing across uneven areas.",
        lookFor: "Focal height gauge touching the median height plane of the tile.",
        possibleFailure: "Focusing on the highest peak leaves low corners blurry and out of focus.",
        detail: "Place focal gauge on median slate surface height, lock Z-axis column height, and confirm clearance."
      },
      {
        title: "Parameter Execution, Overscanning & Low Air Assist",
        action: "Enable local exhaust, verify Overscanning default for GCode lasers, set air assist to low trickle flow, and launch engraving job.",
        why: "Low air assist protects focal lens while avoiding heavy air blasts that scatter silica dust onto machine rails.",
        lookFor: "Uniform bright white mark forming cleanly behind laser head travel.",
        possibleFailure: "Disabling overscanning causes dark charred border lines on GCode lasers.",
        detail: "Verify Cut Settings, start local exhaust, and run laser pass."
      },
      {
        title: "Post-Engrave Dust Vacuuming & Sealer Application",
        action: "Vacuum loose silica dust (wearing N95 dust mask) and apply a thin spray coat of satin polyurethane or mineral oil wipe.",
        why: "Sealing deepens the natural dark background blackness, boosting optical contrast from 4:1 up to 18:1.",
        lookFor: "Vibrant bright white engraved graphic standing out against dark satin black slate background.",
        possibleFailure: "Dry brushing without a dust mask exposes operator to hazardous airborne silica dust.",
        detail: "Vacuum loose stone dust, wipe with dry microfiber, and apply a light coat of mineral oil or satin polyurethane spray."
      },
      {
        title: "Felt Pad Assembly",
        action: "Apply 4 self-adhesive 2mm felt or rubber pads onto the bottom corners of the slate tile.",
        why: "Protects furniture tables from scratches caused by natural rough slate bottoms.",
        lookFor: "Securely bonded felt pads flush with tile corners.",
        possibleFailure: "Omitting pads causes raw slate edges to scratch tabletop surfaces.",
        detail: "Peel protective backing from felt pads and press firmly onto four bottom slate corners."
      }
    ],
    troubleshooting: [
      { issue: "Engraving looks like a photo negative", likelyCause: "Image was not inverted in software prior to output", howToConfirm: "Highlights on original photo are dark on slate, shadows are white", fix: "Toggle 'Negative Image' ON in LightBurn Cut Settings." },
      { issue: "Slate surface flakes off in large uneven chips", likelyCause: "Laser power too high or focus too sharp, causing violent thermal expansion", howToConfirm: "Deep pits and rough chipped edges visible under magnification", fix: "Reduce laser power by 15% and verify line interval." },
      { issue: "Engraving contrast fades when handled or wet", likelyCause: "Unsealed micro-fractured slate absorbs finger oils", howToConfirm: "Dark finger smudges appear over white engraved areas", fix: "Apply a light coat of satin clear polyurethane sealer or mineral oil to seal micro-fractures." },
      { issue: "Blurry details across one side of coaster", likelyCause: "Slate tile tilted on bed or un-level bed surface", howToConfirm: "Measure focal height at all four corners with caliper gauge", fix: "Shim or adjust tile to level median height plane before engraving." }
    ],
    proTips: [
      "Washing slate with a microscopic film of mineral oil boosts optical contrast ratio from 4:1 to 18:1.",
      "Due to non-planar slate surface variance (+/- 0.8mm), set focus at the median surface height.",
      "For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Silica dust generated during stone ablation can cause silicosis; wear an N95/FFP2 dust mask during post-cleaning. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements. Solvent Safety: Isopropyl Alcohol (IPA) and Acetone are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 3
  {
    id: "acrylic-edge-lit-sign",
    title: "Creating Edge-Lit Acrylic LED Desk Signs via Sub-Surface Vector Scoring",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "20 min setup, 12 min machine run",
    targetMaterial: "4mm Acrylic (PMMA) Sheet",
    materials: [
      "4mm Clear PMMA Acrylic Sheet",
      "LED Base (with matching slot width)",
      "Mild Dish Soap & Water",
      "Microfiber Cloth"
    ],
    tools: [
      "CO2 Laser (10.6µm wavelength)",
      "LightBurn Software",
      "Digital Vernier Caliper",
      "Elevated Blade Slat Bed / Pin Table"
    ],
    summary: "Comprehensive guide for preparing, scoring, and perimeter-cutting clear acrylic panels for edge-lit LED displays, explaining material selection trade-offs between cast and extruded PMMA, measured kerf coupon testing for base tab fitting, and thermal stress-crazing prevention.",
    image: IMG.neon1,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–80W class) or specialized UV lasers. Clear acrylic absorbs 10.6µm CO2 laser light efficiently.",
      unsuitableLasers: "Standard 450nm blue diode lasers pass directly through clear acrylic without heating or cutting unless specialized opaque coatings are used.",
      minimumSpecs: "Laser enclosure, local exhaust ventilation, adjustable air assist.",
      safetyHazards: "Thermal breakdown of PMMA generates Methyl Methacrylate vapors. Chlorinated polymers (PVC/vinyl) are strictly prohibited.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Prefer cast PMMA for this edge-lit engraving project because its engraving behaviour generally produces the frosted, light-scattering effect desired for edge-lit graphics. Extruded PMMA can also be laser processed, but engraving appearance and edge behaviour differ. Test the exact sheet stock before production. Actual acrylic sheet thickness may differ from nominal thickness (e.g. nominal 4mm) and should be measured across several points with digital calipers before designing base mounting tabs. Plastics Safety Notice: Do not laser process PVC, vinyl containing PVC, or chlorinated plastics in a normal maker environment due to toxic gas release and rapid machine corrosion. Do not process unknown plastics until composition is positively identified and confirmed suitable. Polycarbonate (Lexan) is a generally poor or limited laser-processing candidate depending on thickness, wavelength and application, producing heavy yellowing, charring, soot, and intense smoke rather than clean cuts.",
    designPrep: "Mirror your artwork horizontally in LightBurn (Edit -> Mirror Horizontal) so that engraving is executed on the back face of the sheet (second-surface processing). This leaves the front face smooth and protected from dust. Do not rely on a generic kerf value. Cut a series of small tab-fit test coupons on scrap acrylic from the same sheet using your actual machine speed and power settings. Tab fit depends on measured sheet thickness, base slot width, optical kerf, and desired fit tightness (snug press-fit vs loose drop-in). Measure your sheet thickness across multiple points using digital calipers and apply your measured Outward Kerf Offset in LightBurn (Cut Settings -> Kerf Offset).",
    laserSetup: "Elevate the acrylic sheet on blade slats or a pin table to elevate it above bed reflections. Set z-focus to the top acrylic surface. Ensure effective local exhaust is active to clear PMMA vapors.",
    optics: {
      lens: "Manufacturer-supplied CO2 focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Dual mode (Low flow for raster fill / Higher flow for vector cut)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Higher airflow during vector cutting helps clear vaporized PMMA from the cut kerf."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "14% controller setting (Raster Fill) / 68% controller setting (Vector Cut)",
      speed: "350 mm/s (Raster Fill) / 12 mm/s (Vector Cut)",
      passes: "1",
      lineInterval: "0.08mm (~317 LPI) - refine with Interval Test",
      airAssist: "Low for raster fill / Higher for vector cut",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Fill (Mirrored) + Line Cut",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run a test grid on scrap acrylic from your target batch. Test raster power and speed combinations to verify the visual frosting density under LED illumination. Additionally, cut a series of test tabs (varying kerf offset in 0.03mm increments) to test mechanical fit inside your LED base slot before cutting the full sign.",
    steps: [
      {
        title: "Substrate Evaluation & Caliper Thickness Measurement",
        action: "Measure actual sheet thickness across several points using digital calipers and confirm acrylic material type (prefer cast PMMA for edge-lit frosting).",
        why: "Acrylic sheet thickness can vary across the board from nominal specifications. Measuring ensures exact tab fit calculation.",
        lookFor: "Precise caliper readings recorded across 4 sheet points.",
        possibleFailure: "Assuming nominal sheet thickness leads to tabs that wobble loosely or crack when forced into the LED base.",
        detail: "Measure acrylic sheet thickness and base slot width with calipers, recording dimensions for kerf coupon testing."
      },
      {
        title: "Horizontal Mirror & Second-Surface Graphic Layout",
        action: "Select design objects in LightBurn and click Mirror Horizontal.",
        why: "Engraving on the rear face (second-surface) leaves the front face smooth and easy to wipe clean, keeping dust out of engraved grooves.",
        lookFor: "Text appearing reversed on screen preview prior to sending job.",
        possibleFailure: "Forgetting to mirror results in backward text when viewed from the front.",
        detail: "Select graphic objects in LightBurn and click Edit -> Mirror Horizontal."
      },
      {
        title: "Second-Surface Raster Engraving Execution",
        action: "Run the mirrored raster fill layer using low air assist flow and setting power/speed to match your test grid results.",
        why: "Controlled rastering produces uniform light-scattering frosting across graphic areas.",
        lookFor: "Crisp, bright white frosted graphics across the rear face.",
        possibleFailure: "Excessive power causes heat buildup and distorted surface melting.",
        detail: "Execute raster layer with air assist on low flow, monitoring visual frosting quality."
      },
      {
        title: "Perimeter Vector Cut & Measured Kerf Coupon Test",
        action: "Execute perimeter cut layer with your measured kerf offset enabled, elevating sheet on blade slats or pin supports.",
        why: "Tab fit depends on measured sheet thickness, slot width, kerf and desired fit. Elevating the sheet on supports or leaving underside paper masking can reduce bed flashback marks, though final results depend on support geometry, airflow, and bed reflection characteristics.",
        lookFor: "Smooth cut edge profile with tab fitting snugly into the LED base.",
        possibleFailure: "Omitting a measured kerf coupon test produces tabs that either fail to enter the slot or fit too loosely.",
        detail: "Run a tab coupon test series, select the best fitting offset in LightBurn Cut Settings, and cut the elevated sheet."
      },
      {
        title: "Post-Processing & Safe Cleaning Protocol",
        action: "Avoid alcohol and aggressive solvent cleaning on freshly laser-cut acrylic unless the material manufacturer explicitly confirms compatibility. Laser processing can leave residual thermal stress that increases susceptibility to environmental stress cracking. For routine cleaning, begin with mild soap and water.",
        why: "Solvents penetrate thermal micro-stresses along laser-cut edges, causing immediate stress-crazing (spiderweb fracturing).",
        lookFor: "Clean, clear acrylic panel with smooth edges free of micro-cracks.",
        possibleFailure: "Wiping laser-cut acrylic with Isopropyl Alcohol or solvent cleaners causes spiderweb cracks along all cut edges.",
        detail: "Clean panel with warm water and mild dish soap using a soft microfiber cloth, then air dry."
      }
    ],
    troubleshooting: [
      { issue: "Engraved frosting looks dull or uneven when illuminated", likelyCause: "Raster power setting too low or line interval inappropriate", howToConfirm: "Inspect under side LED light", fix: "Run LightBurn Material Test and Interval Test to adjust raster power % and line interval." },
      { issue: "Spiderweb micro-cracks appear along laser-cut edges", likelyCause: "Cleaned with alcohol or aggressive solvent", howToConfirm: "Cracks radiate outward from laser-cut perimeter", fix: "Avoid alcohol and aggressive solvents; clean laser-cut acrylic strictly with mild soap and water." },
      { issue: "Base tab wobbles loosely or fails to insert into LED base slot", likelyCause: "Generic kerf value assumed without measured coupon test", howToConfirm: "Measure cut tab width against LED base slot width with calipers", fix: "Run a series of tab test coupons on scrap stock to determine exact Outward Kerf Offset." },
      { issue: "Back-reflection scorch marks along bottom edge", likelyCause: "Acrylic rested directly on flat metal honeycomb bed during cutting", howToConfirm: "Scorch marks align with metal bed grid contact points", fix: "Elevate acrylic sheet on blade slats or pin supports to reduce flashback." }
    ],
    proTips: [
      "Leaving paper protective masking on the underside during vector cutting or elevating the sheet on blade slats or pin supports can reduce bed flashback marks, though final results depend on support geometry, airflow, and bed reflection characteristics.",
      "Always measure actual sheet thickness with digital calipers across several points rather than assuming nominal board thickness."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Do not laser process PVC, vinyl containing PVC, or chlorinated plastics in a normal maker environment. Do not process unknown plastics until composition is positively identified and confirmed suitable. Polycarbonate is a limited laser candidate producing heavy soot and smoke. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements. Solvent Safety: Isopropyl Alcohol (IPA) and Acetone are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 4
  {
    id: "fiber-stainless-annealing",
    title: "Black Annealing Stainless Steel with a Fiber/MOPA Laser",
    category: "Project",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "16 min",
    estimatedTime: "15 min setup, 5 min machine run",
    targetMaterial: "304 / 316 Stainless Steel Sheet",
    materials: [
      "304 or 316 Grade Stainless Steel Sheet",
      "Degreasing Solvent (Acetone or 99% IPA)",
      "Lint-Free Wipes"
    ],
    tools: [
      "Fiber or MOPA Galvo Laser (1064nm wavelength)",
      "LightBurn Galvo or EZCAD Software",
      "Focus Finder Pointer",
      "Galvo Head Elevator Column"
    ],
    summary: "Technical guide for achieving dark black surface annealing marks on stainless steel using galvo fiber lasers, explaining the principles of controlled non-ablative surface heating, focus adjustments, and parameter refinement via test grids.",
    image: IMG.metal_artisan,
    prerequisites: {
      compatibleLasers: "Fiber galvo lasers (1064nm wavelength, 20W–50W+ class). MOPA fiber sources provide adjustable pulse width; conventional Q-switched fiber sources generally do not provide independent user control of pulse width.",
      unsuitableLasers: "Diode lasers (450nm) and CO2 lasers (10.6µm) generally lack the focused beam energy density required to anneal bare, un-coated stainless steel.",
      minimumSpecs: "Galvo laser source, focus adjustment column, local fume extraction.",
      safetyHazards: "1064nm galvo beams pose intense specular and diffuse reflection risks.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Black annealing relies on controlled surface heating and oxide formation rather than intentional bulk material removal. Appearance and durability depend on alloy, surface finish, laser source, lens, focus, frequency, pulse characteristics, speed, power and hatch configuration. Prefer austenitic stainless steels (such as 304 or 316 grades) with smooth brushed or polished finishes. Thoroughly degrease metal stock prior to processing to remove finger oils and cutting coolants.",
    designPrep: "In LightBurn Galvo or EZCAD, configure hatch fill. Select a dense line distance (e.g. 0.010mm - 0.015mm) and enable bi-directional cross-hatching (e.g. Pass 1 at 45°, Pass 2 at 135°). For MOPA sources, pulse width can be adjusted (e.g. 200ns range) to control heat duration. For conventional Q-switched sources, parameter tuning relies on speed, power, frequency, focus offset, and hatch settings.",
    laserSetup: "Mount steel stock flat in a rigid fixture. Align focus to the top metal plane using your laser's focus indicator. Adjust vertical height to move away from the sharp focal plane according to your machine's documented Z-axis convention (whether raising or lowering the galvo column). This broadens beam footprint and reduces peak irradiance below ablation thresholds.",
    optics: {
      lens: "F-Theta Galvo Scan Lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Do not apply directed air blasts at the marking point unless explicitly validated for your setup, as forced air currents can disrupt local surface heat buildup required for thermal oxidation. Keep enclosure fume extraction active throughout the marking process."
    },
    exhaust: {
      configuration: "Local galvo enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "MOPA Fiber Galvo (1064nm)",
          power: "45% controller setting (50W reference)",
          speed: "220 mm/s starting point",
          passes: "2 (Cross-Hatch at 45° and 135°)",
          lineInterval: "0.012mm hatch spacing",
          airAssist: "Off at marking point",
          focusOffset: "Vertical offset away from sharp focus (per Z-axis convention)",
          frequency: "35 kHz starting point",
          pulseWidth: "200 ns (user-adjustable on MOPA sources)",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm)",
          power: "55% controller setting (30W reference)",
          speed: "180 mm/s starting point",
          passes: "2 (Cross-Hatch at 45° and 135°)",
          lineInterval: "0.012mm hatch spacing",
          airAssist: "Off at marking point",
          focusOffset: "Vertical offset away from sharp focus (per Z-axis convention)",
          frequency: "25 kHz starting point",
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
    materialTestGuide: "Because thermal mass varies significantly with plate thickness and alloy composition, never assume a single universal setting. Create a hatch test grid on scrap stainless steel from your target lot. Keep focus defocus offset fixed and vary galvo scan speed against frequency (and pulse width if using a MOPA source). Evaluate the test grid under direct and angled lighting for a deep matte black tone with zero tactile surface roughness or substrate warping.",
    steps: [
      {
        title: "Substrate Degreasing & Solvent Safety",
        action: "Clean stainless steel blank thoroughly with acetone or 99% Isopropyl Alcohol using a lint-free cloth, handling edges with clean gloves. Solvent Safety: Acetone and IPA are flammable. Use with suitable ventilation and away from ignition sources. Allow complete surface evaporation before operating the laser.",
        why: "Fingerprint oils and machine lubricants breakdown under laser heat, causing uneven brown discoloration and blotchy marks. Solvents must evaporate completely to avoid fire risks.",
        lookFor: "Completely degreased, dry metal surface.",
        possibleFailure: "Skipping degreasing leaves faint brown fingerprints permanently baked into the metal surface.",
        detail: "Wipe metal card in one direction with degreasing solvent, avoiding hand contact with cleaned faces, and wait for complete evaporation."
      },
      {
        title: "Galvo Focus Finder & Vertical Defocus Offset Application",
        action: "Focus laser to top metal surface using focus pointers, then adjust vertical height to move away from the sharp focal plane according to your machine's documented Z-axis convention.",
        why: "In-focus spot concentrations can exceed metal ablation thresholds, digging rough trenches. Moving away from sharp focus spreads beam energy into a controlled thermal bath.",
        lookFor: "Galvo head displaced away from sharp focal plane per machine convention.",
        possibleFailure: "Engraving in sharp focus ablates metal surface, producing rough metallic gray cuts instead of smooth black annealing.",
        detail: "Converge focus pointers on metal surface, then adjust Z-axis elevator column away from sharp focus."
      },
      {
        title: "Galvo Hatch Grid Configuration (Cross-Hatch)",
        action: "Configure hatch spacing to ~0.012mm with 2-pass cross-hatching (e.g. 45° and 135°).",
        why: "Tight cross-hatch overlap ensures continuous surface heat distribution and eliminates visible scan line tracks.",
        lookFor: "Dense, uniform hatch grid preview in software.",
        possibleFailure: "Wide hatch spacing (e.g. 0.05mm) leaves raw steel gaps, producing a light gray mark.",
        detail: "In galvo hatch settings: set Spacing ~0.012mm, enable Hatch 1 (45°), enable Hatch 2 (135°)."
      },
      {
        title: "Parameter Execution & Source-Specific Configuration",
        action: "Set speed, power, and frequency according to your test matrix. On MOPA sources, select a long pulse width (e.g. 200ns). On conventional Q-switched sources, adjust speed, power, and frequency only.",
        why: "MOPA sources allow pulse duration tuning to optimize heat accumulation. Conventional Q-switched sources generally do not provide independent user control of pulse width.",
        lookFor: "Dark surface mark forming smoothly during galvo scan passes without heavy sparks or snapping noises.",
        possibleFailure: "Setting speed too fast or power too low yields faint brown or straw-yellow marks.",
        detail: "Run galvo job according to source characteristics, observing surface mark progress."
      },
      {
        title: "Result Inspection & Quality Verification",
        action: "Allow metal part to cool, wipe surface gently with a dry microfiber cloth, and inspect mark appearance under direct and angled lighting.",
        why: "Black annealing creates a dark thermal surface layer that should feel smooth to the touch.",
        lookFor: "Consistent dark mark with smooth surface texture flush with surrounding metal.",
        possibleFailure: "Surface feeling rough like fine sandpaper indicates metal ablation rather than controlled annealing.",
        detail: "Wipe metal card dry and inspect under good lighting for smooth texture and even color tone."
      }
    ],
    troubleshooting: [
      { issue: "Mark appears light brown or straw-colored instead of black", likelyCause: "Heat input insufficient (speed too fast or frequency inappropriate)", howToConfirm: "Mark tone is light brown under direct light", fix: "Reduce galvo scan speed by 20% or adjust frequency in your test grid." },
      { issue: "Surface feels rough and metallic gray ash wipes off", likelyCause: "Beam intensity exceeded ablation threshold (in-focus or power too high)", howToConfirm: "Loud snapping noise during pass and tactile roughness under finger", fix: "Increase vertical defocus offset away from sharp focus and lower power setting." },
      { issue: "Thin steel sheet bows or warps upward", likelyCause: "Excessive heat accumulation across thin substrate", howToConfirm: "Sheet edges lift off fixture during pass", fix: "Increase galvo speed, increase frequency, or allow cooling delay between passes." },
      { issue: "Visible parallel line tracks across mark", likelyCause: "Hatch spacing too wide or single-pass hatch used", howToConfirm: "Inspect under magnification for un-heated metal strips", fix: "Reduce hatch spacing to ~0.012mm and enable 2-pass cross-hatching." }
    ],
    proTips: [
      "MOPA fiber lasers allow pulse width adjustments to tune thermal heat accumulation, whereas conventional Q-switched sources rely on speed, power, and frequency tuning.",
      "Bi-directional cross-hatching at 45° and 135° eliminates optical line orientation artifacts.",
      "Do not apply directed air blasts at the marking point during thermal annealing unless validated; keep enclosure extraction active."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements. Solvent Safety: Acetone and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 5
  {
    id: "leather-hat-patches",
    title: "Batch Manufacturing Synthetic Leatherette Hat Patches with Mock-Stitch Vector Scoring",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "12 min",
    estimatedTime: "15 min setup, 10 min machine run",
    targetMaterial: "PVC-Free Dual-Color Polyurethane Leatherette Sheet",
    materials: [
      "PVC-Free Polyurethane (PU) Dual-Color Laserable Leatherette Sheets",
      "Heat-Activated Adhesive Backing Transfer Tape (3M 300LSE / 3M 9474LE)",
      "Blank Snapback / Trucker Hat Caps",
      "Lint-Free Microfiber Wipe",
      "Mild Soap Water Solution"
    ],
    tools: [
      "Diode Laser (10W-20W) or CO2 Laser (40W-60W)",
      "Hat Heat Press / Curved Cap Press",
      "LightBurn Software",
      "Digital Vernier Caliper",
      "Squeegee Applicator Tool"
    ],
    summary: "Production protocol for batch-engraving dual-tone laserable leatherette sheets, executing simulated perimeter thread scoring, precision vector perimeter cutting, and heat-press bonding to curved cap panels while enforcing strict material safety checks against chlorinated polymers (PVC).",
    image: IMG.leather_engrave,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm) and CO2 lasers (10.6µm). Dual-color polyurethane leatherette absorbs both blue diode and infrared CO2 wavelengths effectively.",
      unsuitableLasers: "1064nm Fiber lasers without specialized pulse control can melt backing film unpredictably or blast through thin PU layers without clean color contrast.",
      minimumSpecs: "Enclosed laser system, local fume extraction, air assist capability, heat press for assembly.",
      safetyHazards: "Chlorinated plastics (PVC) release toxic Hydrogen Chloride (HCl) gas when laser cut, destroying lungs and corroding machine rails. MUST verify 100% PVC-free PU composition.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Plastics Safety Notice: Strictly verify that synthetic leatherette is certified 100% PVC-free Polyurethane (PU). Laser processing Polyvinyl Chloride (PVC) releases corrosive Hydrogen Chloride (HCl) gas and toxic fumes. Inspect the supplier Safety Data Sheet (SDS) before loading unknown artificial leathers. Dual-tone leatherette features a thin (0.05-0.10mm) colored top layer over a contrasting core (e.g. black top over gold core, or brown top over black core). Measure sheet thickness across multiple points with digital calipers prior to cutting perimeter shapes to ensure accurate kerf and power selection.",
    designPrep: "In LightBurn, organize artwork onto separate color layers: Layer 1 (Raster Fill - Engrave top color layer), Layer 2 (Vector Score - Dashed line mock stitching at ~1.5mm dash / 1.0mm gap), and Layer 3 (Vector Cut - Outer perimeter profile). Calculate line interval using LPI = 25.4 / lineInterval (e.g. 0.08mm line interval = ~317 LPI). For supported GCode devices, enable Overscanning and begin with the machine or LightBurn default. Increase it only if edge darkening remains and sufficient travel space is available. The required value depends on engraving speed, machine acceleration and available travel. DSP controllers may manage this differently, while Galvo systems do not use Overscanning.",
    laserSetup: "Pin leatherette sheet flat onto honeycomb bed using hold-down pins to prevent sheet bowing. Apply 3M heat-activated adhesive transfer tape to the back of the sheet BEFORE laser cutting perimeter shapes to save assembly time. Set focal height gauge precisely to the top leatherette surface.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow for raster engrave / Moderate flow for vector cut",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist during raster fill prevents smoke residue from baking into top leatherette layer."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "22% controller setting (Raster Fill) / 75% controller setting (Vector Cut)",
      speed: "4200 mm/min (Diode Raster) / 800 mm/min (Diode Vector Cut) / 350 mm/s (CO2 Raster)",
      passes: "1",
      lineInterval: "0.08mm (~317 LPI) - verify via Interval Test",
      airAssist: "Low trickle for engrave / Moderate for vector cut",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Fill + Line Score + Line Cut",
      frequency: "N/A (Continuous diode / RF CO2)",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run LightBurn's Material Test matrix on a scrap strip of leatherette. Test raster power (15% to 35%) at your target scan speed to determine the exact threshold that cleanly vaporizes the top color layer without melting through the underlying core layer.",
    steps: [
      {
        title: "SDS Material Composition & PVC-Free Verification",
        action: "Inspect supplier Safety Data Sheet (SDS) to confirm 100% Polyurethane (PU) composition and zero PVC content.",
        why: "Thermal breakdown of PVC releases toxic Hydrogen Chloride (HCl) gas, causing immediate machine corrosion and severe respiratory hazard.",
        lookFor: "Manufacturer SDS explicitly marking material as PVC-Free Polyurethane.",
        possibleFailure: "Cutting PVC leatherette corrodes laser rails, destroys optics, and releases acrid toxic fumes.",
        detail: "Confirm material product number against SDS documentation before putting sheet on bed."
      },
      {
        title: "Adhesive Transfer Backing Application",
        action: "Apply 3M 300LSE adhesive transfer tape firmly to the back of the leatherette sheet using a squeegee prior to laser cutting.",
        why: "Pre-applying adhesive allows laser vector cutting of patch outline and backing in one operation, ensuring edge alignment.",
        lookFor: "Smooth adhesive layer free of air bubbles or wrinkles on rear face.",
        possibleFailure: "Applying adhesive after laser cutting requires tedious manual trimming of individual patches.",
        detail: "Peel protective backing paper slowly while pressing 3M transfer film with squeegee across rear leatherette surface."
      },
      {
        title: "Multi-Layer Design Layout & Mock-Stitch Setup",
        action: "Set up 3 distinct LightBurn layers: Layer C00 (Raster Engrave), Layer C01 (Vector Score Dashed Line), Layer C02 (Vector Cut Outer Contour).",
        why: "Separates raster parameter control from score lines and perimeter cutting.",
        lookFor: "Color-coded layer arrangement in LightBurn workspace.",
        possibleFailure: "Running raster fill and vector score on the same layer causes deep burned trenches in leatherette.",
        detail: "Configure Layer C00 Fill mode, Layer C01 Line mode (enable Perforation Cut 1.5mm / 1.0mm), Layer C02 Line mode."
      },
      {
        title: "Surface Focus Alignment & Sheet Fixturing",
        action: "Secure sheet flat on honeycomb bed with hold-down pins and lower laser focal height gauge to touch top leatherette surface plane.",
        why: "Bowed leatherette causes focal spot waist to expand, producing fuzzy raster fills.",
        lookFor: "Sheet resting dead flat against bed with focal gauge touching top surface.",
        possibleFailure: "Out-of-focus rastering fails to vaporize top color layer completely.",
        detail: "Pin corners of leatherette sheet, drop focal gauge to top plane, and lock Z-axis height."
      },
      {
        title: "Parameter Execution, Overscanning & Fume Extraction",
        action: "Enable local exhaust, verify Overscanning default for GCode lasers, set air assist to low trickle flow, and execute laser run.",
        why: "Low air assist protects optics while preventing heavy blasts from baking smoke into top color layer. Overscanning prevents edge charring.",
        lookFor: "Clean vaporization of top color layer revealing sharp core contrast.",
        possibleFailure: "Disabling overscanning burns dark heavy spots on left and right patch edges.",
        detail: "Turn on local exhaust ducting, verify Overscanning in Cut Settings, and start process."
      },
      {
        title: "Post-Engrave Wipe & Curved Heat-Press Bonding",
        action: "Wipe patch surface with a damp microfiber cloth (water only, no alcohol/oils), position patch on cap, and press at 160°C (320°F) for 15 seconds at 40 PSI pressure.",
        why: "Cleans light surface dust while heat press cures 3M adhesive bond into cap fabric fibers.",
        lookFor: "Strong permanent adhesive bond with zero edge lifting on cap panel.",
        possibleFailure: "Wiping leatherette with alcohol or solvent strips color and damages PU finish.",
        detail: "Wipe patch with water-dampened cloth, peel 3M release liner, align patch on hat press, and apply heat press cycle."
      }
    ],
    troubleshooting: [
      { issue: "Top color layer not fully removed / patchy color", likelyCause: "Raster power setting too low or scan speed too fast", howToConfirm: "Top color film remains in fine detail areas", fix: "Increase raster power by 10% or decrease scan speed in LightBurn Cut Settings." },
      { issue: "Core color layer melted/charred through to backing", likelyCause: "Raster power too high or line interval too dense", howToConfirm: "Deep burned grooves exposing adhesive film beneath", fix: "Reduce raster power and confirm line interval is 0.08mm (~317 LPI)." },
      { issue: "Patch peels off cap after heat pressing", likelyCause: "Heat press temperature too low, pressure insufficient, or dwell time too short", howToConfirm: "Adhesive did not flow into fabric fibers", fix: "Verify cap press reaches 160°C (320°F), set pressure to 40 PSI, and press for full 15 seconds." },
      { issue: "Dark charred border lines on left and right graphic edges", likelyCause: "Overscanning disabled on GCode laser controller", howToConfirm: "Charring occurs exclusively where laser head changes direction", fix: "Enable Overscanning in LightBurn Cut Settings (starting with software default)." }
    ],
    proTips: [
      "Clean laser-engraved leatherette strictly with a water-dampened microfiber cloth; avoid alcohol and aggressive solvents.",
      "Pre-apply 3M 300LSE adhesive transfer tape to the back of the sheet before laser cutting perimeter shapes.",
      "For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Plastics Safety Notice: Do not laser process PVC, vinyl containing PVC, or chlorinated plastics due to toxic Hydrogen Chloride (HCl) gas release. Inspect material Safety Data Sheet (SDS) before processing. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
  },

  // 6
  {
    id: "tio2-white-tile-diode",
    title: "TiO2 Chemical Conversion Marking on White Ceramic Tiles (Norton Method)",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "15 min",
    estimatedTime: "20 min prep/drying, 10 min machine run",
    targetMaterial: "White Glazed Ceramic Wall Tiles (15x15cm)",
    materials: [
      "White Glazed Ceramic Wall Tiles (15x15cm)",
      "Titanium Dioxide Powder (TiO2 Anatase Grade) or TiO2 Aerosol Spray",
      "Polyvinyl Alcohol (PVA) Liquid Binder",
      "95% Ethanol / Denatured Alcohol Solvent",
      "Distilled Water"
    ],
    tools: [
      "HVLP Spray Gun / Precision Airbrush",
      "Precision Scale (0.1g accuracy)",
      "Diode Laser (10W-20W 455nm) or CO2 Laser (40W-60W)",
      "Magnetic Stirrer / Agitator",
      "Soft Non-Abrasive Washing Sponge",
      "Digital Vernier Caliper"
    ],
    summary: "Photochemical reaction protocol fusing Titanium Dioxide (TiO2) into the ceramic silica glass matrix using blue diode laser light, detailing Anatase-to-Rutile phase transition dynamics, liquid slurry deposition, parameter calibration, and post-wash vitrification inspection.",
    image: IMG.laser_badge,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength, 10W–20W) and CO2 lasers (10.6µm). 455nm blue laser light efficiently triggers localized photothermal sintering of TiO2 Anatase particles into ceramic glaze.",
      unsuitableLasers: "Low-power diode lasers (<5W) lack the optical power density to reach the required 825°C sintering threshold.",
      minimumSpecs: "Enclosed laser frame or dedicated ventilated work area, local fume extraction, airbrush spray booth.",
      safetyHazards: "Titanium dioxide powder inhalation is a respiratory irritant. Flammable alcohol solvent vapors during spray coating.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Standard white glazed wall tiles feature a thin silica glass surface glaze ($SiO_2$) fired over a ceramic clay body. The Norton Method relies on depositing a uniform 15-micron wet film layer of Anatase-grade Titanium Dioxide ($TiO_2$). Under focused laser heat ($825^\circ\text{C}$ focal zone temperature), Anatase $TiO_2$ undergoes a crystalline Phase Transition into Rutile $TiO_2$, while titanium ions cross-link directly into the molten ceramic $SiO_2$ glaze matrix to form an indestructible jet-black mark with Mohs hardness 7+.",
    designPrep: "In LightBurn, import photo or vector graphics. For photographic tiles, use Stucki dithering. Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. Calculate line interval using $LPI = 25.4 / lineInterval$ (e.g. 0.08mm line interval = ~317 LPI). For supported GCode devices, enable Overscanning and begin with the machine or LightBurn default. Increase it only if edge darkening remains and sufficient travel space is available.",
    laserSetup: "Place sprayed tile flat on laser bed. Focus laser precisely on the top chalky white film plane using focal gauge. Enable local exhaust ventilation to capture alcohol and binder combustion vapors.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist protects optics from slurry aerosol without blowing dry TiO2 powder off the un-engraved tile."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "85% controller setting (Diode 10W reference) / 22% controller setting (CO2 60W reference)",
      speed: "1200 mm/min (Diode reference) / 180 mm/s (CO2 reference)",
      passes: "1",
      lineInterval: "0.08mm (~317 LPI) - verify via Interval Test",
      airAssist: "Low trickle flow",
      focusOffset: "0.0mm (Surface film focus)",
      lightburnMode: "Image (Stucki Dither) or Fill",
      frequency: "N/A (Continuous diode / RF CO2)",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Spray a test tile with $TiO_2$ slurry and run a LightBurn Material Test matrix testing speed against power. Wash the tile after laser processing: the correct setting yields a jet-black mark that cannot be scraped off with a steel razor blade. If the mark washes away, power density was too low to reach $825^\circ\text{C}$ sintering.",
    steps: [
      {
        title: "Chemical Slurry Formulation & Mixing Math",
        action: "Mix 10g TiO2 Anatase powder, 1g PVA binder, and 40ml 95% Ethanol solvent in a beaker; agitate with magnetic stirrer for 5 minutes. Solvent Safety: Ethanol and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Thorough dispersion prevents particle agglomeration that causes splotchy, uneven ceramic sintering.",
        lookFor: "Smooth, milky slurry free of powder clumps or sediment.",
        possibleFailure: "Un-agitated powder clumps clog airbrush nozzles and create heavy white streaks on tile.",
        detail: "Weigh 10g Anatase TiO2, mix with PVA binder and Ethanol, and agitate until smooth."
      },
      {
        title: "Uniform Wet Film Deposition & Evaporation",
        action: "Spray a 15-micron wet film layer onto ceramic tile using an airbrush at 20 PSI, then allow Ethanol to evaporate for 12 minutes until tile shows a chalky white film.",
        why: "Ethanol must evaporate completely prior to laser processing to prevent solvent fire ignition under laser beam.",
        lookFor: "Flat, dry, chalky white film across tile face.",
        possibleFailure: "Engraving damp alcohol film ignites solvent vapors and causes splotchy marks.",
        detail: "Spray 2 light passes with airbrush, place tile in drying area, and wait 12 minutes."
      },
      {
        title: "Image Preparation & Stucki Dithering Setup",
        action: "Import design into LightBurn, select Image mode with Stucki dithering, and set line interval to 0.08mm (~317 LPI).",
        why: "Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42.",
        lookFor: "Crisp dithered preview in LightBurn workspace.",
        possibleFailure: "Setting line interval too coarse leaves un-sintered white gaps between raster lines.",
        detail: "Select Stucki dithering mode, verify 0.08mm line interval, and sharpen midtones."
      },
      {
        title: "Surface Focus Alignment & Parameter Execution",
        action: "Place dry tile on bed, focus laser height to top film plane, enable local exhaust, verify Overscanning default for GCode lasers, and run job.",
        why: "Precision focal plane alignment delivers peak photon density required to induce $825^\circ\text{C}$ localized phase transition.",
        lookFor: "Dark grey line forming cleanly behind beam travel with zero flame ignition.",
        possibleFailure: "Out-of-focus beam fails to reach sintering temperature, yielding faint grey un-bonded powder.",
        detail: "Set focus gauge to top tile film, start exhaust ducting, and run laser pass."
      },
      {
        title: "Chemical Water Rinse & Vitrification Hardness Testing",
        action: "Rinse tile under warm tap water with a soft non-abrasive sponge to wash off unreacted TiO2 powder, then test mark with a steel razor blade.",
        why: "Unreacted powder washes off easily, leaving only the permanently vitrified TiO2-silica matrix.",
        lookFor: "Jet-black mark that withstands firm scraping with a steel razor blade without scratching.",
        possibleFailure: "If mark scrapes off, laser power was too low; re-test with higher power setting.",
        detail: "Rinse tile thoroughly under tap water, dry with microfiber cloth, and perform blade scrape test."
      }
    ],
    troubleshooting: [
      { issue: "Black mark washes off under water or scrapes off with razor blade", likelyCause: "Laser power setting too low or scan speed too fast to reach 825°C sintering threshold", howToConfirm: "Mark disappears when scrubbed with wet sponge", fix: "Increase laser power by 15% or decrease scan speed in LightBurn Cut Settings." },
      { issue: "Splotchy, streaky, or uneven black marks across tile", likelyCause: "TiO2 coating applied unevenly or sprayed too thick with airbrush", howToConfirm: "Heavy white powder accumulation visible before laser pass", fix: "Apply thin, even passes with airbrush and allow complete alcohol evaporation." },
      { issue: "Tile glaze cracks or crazes along laser cut lines", likelyCause: "Laser power far too high or tile subjected to sudden thermal shock", howToConfirm: "Fine spiderweb hairline fractures visible in glass glaze around mark", fix: "Lower laser power by 20% and ensure air assist is set to low trickle flow." }
    ],
    proTips: [
      "Mixing TiO2 Anatase powder with PVA binder and Ethanol creates a far cleaner ceramic bond than off-the-shelf spray paint.",
      "Always perform a blade scrape test after washing off excess powder; a true vitrified mark will not scrape off.",
      "For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TiO2 powder is a respiratory irritant; wear an N95 mask during powder handling. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Solvent Safety: Ethanol and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 7
  {
    id: "rotary-powder-tumbler",
    title: "Precision Rotary Engraving & Powder Coating Stripping on Stainless Tumblers",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "15 min",
    estimatedTime: "20 min setup, 12 min machine run",
    targetMaterial: "Powder-Coated Stainless Steel Tumblers",
    materials: [
      "Powder-Coated Stainless Steel Tumblers (Yeti / Hydro Flask style)",
      "Simple Green Degreaser Concentrate or Denatured Alcohol",
      "Soft Brass Wire Detail Brush / Magic Eraser Sponge",
      "Low-Tack Blue Painter's Masking Tape",
      "Microfiber Cleaning Cloth"
    ],
    tools: [
      "Chuck Rotary Attachment (or Roller Rotary with clamp)",
      "CO2 Laser (40W-80W) or High-Power Diode Laser (20W+)",
      "Digital Vernier Caliper",
      "Miniature Bubble Level",
      "LightBurn Software"
    ],
    summary: "Comprehensive technical guide for rotary setup, steps-per-revolution mathematical calibration, powder coating thermal ablation, high-pressure air assist soot clearance, and post-laser chemical cleansing on stainless steel tumblers.",
    image: IMG.tumbler,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm) and high-power Blue Diode lasers (20W+). Infrared CO2 laser light is strongly absorbed by baked polyester/epoxy powder coatings.",
      unsuitableLasers: "Standard low-power diode lasers (<10W) lack speed and power density to strip tough industrial powder coats down to bare stainless steel efficiently.",
      minimumSpecs: "Enclosed laser system with Z-axis clearance for rotary axis, active exhaust ventilation, high-pressure air assist.",
      safetyHazards: "Thermal ablation of polyester/epoxy powder coatings generates dense synthetic polymer fumes and airborne micro-soot. Active exhaust extraction required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Powder-coated drinkware features a durable baked polyester or epoxy coating (0.10–0.20mm thick) over an austenitic stainless steel container. Chuck rotaries are strongly preferred over roller rotaries for tapered or top-heavy tumblers because chuck jaws physically clamp the tumbler, preventing rotational slippage, axial walk, and registration drift during multi-pass vector fills. Measure outer tumbler diameter with digital calipers across the exact engraving zone.",
    designPrep: "In LightBurn Rotary Setup dialog: Measure tumbler outer diameter (D) with calipers and calculate circumference (C = PI * D). Input exact diameter into LightBurn Rotary Setup. Verify rotary motor steps per revolution (e.g. 10,000 steps per 360° rotation). Calculate line interval using LPI = 25.4 / lineInterval (e.g. 0.08mm line interval = ~317 LPI). Enable high air assist during rastering to blow away vaporized polymer soot. Galvo systems do not use Overscanning, while GCode flatbed lasers with rotary motor drives handle overscanning along the longitudinal axis.",
    laserSetup: "Mount tumbler in chuck rotary jaws (wrapping jaw contact points with blue painter's tape to prevent metal jaw scratches). Place a small bubble level on top of the tumbler along the longitudinal axis to guarantee 0.0° horizontal tilt. Set laser Z-height focus precisely to the top apex curve of the tumbler.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High flow airflow",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure air assist blows away sticky vaporized polyester soot from the optical beam path."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "28% controller setting (CO2 60W reference) / 80% controller setting (Diode 20W reference)",
      speed: "300 mm/s (CO2 reference) / 1800 mm/min (Diode reference)",
      passes: "1",
      lineInterval: "0.08mm (~317 LPI) - verify via Interval Test",
      airAssist: "High flow airflow",
      focusOffset: "0.0mm (Apex surface focus)",
      lightburnMode: "Fill (Rotary Mode Enabled)",
      frequency: "Standard RF / Glass CO2 pulse",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run a small test grid graphic on a sacrificial powder-coated tumbler from your batch. Test scan speed against power settings to find the exact threshold where powder coating is cleanly vaporized down to bare steel without heat-staining or yellowing the stainless metal underneath.",
    steps: [
      {
        title: "Tumbler Caliper Measurement & Circumference Math",
        action: "Measure tumbler outer diameter at the exact engraving zone with digital calipers and calculate circumference (C = PI * D).",
        why: "Accurate diameter entry in software Rotary Setup prevents graphic stretching or squishing along the rotational axis.",
        lookFor: "Precise caliper reading recorded and entered into LightBurn Rotary Setup.",
        possibleFailure: "Guessing tumbler diameter distorts aspect ratio and circles turn into ovals.",
        detail: "Measure outer diameter in mm, calculate circumference, and enter values into LightBurn Rotary Setup dialog."
      },
      {
        title: "Rotary Attachment Mounting & Bubble Leveling",
        action: "Mount tumbler into chuck rotary jaws (wrapping contact points with blue tape) and place bubble level along top Y-axis profile.",
        why: "Leveling guarantees uniform focal distance from laser nozzle across the entire length of the graphic.",
        lookFor: "Bubble centered on level indicator with zero tilt along tumbler length.",
        possibleFailure: "Tilted tumbler causes focus to drift, resulting in blurry un-ablated patches.",
        detail: "Clamp chuck jaws firmly, place level on top apex, and adjust rotary height tilt screw until level."
      },
      {
        title: "Software Rotary Setup & Steps/Rev Verification",
        action: "Enable Rotary Mode in LightBurn, enter measured diameter, and test 360° test pulse rotation.",
        why: "Verifies stepper motor pulse scaling matches physical rotary attachment gearing.",
        lookFor: "Tumbler rotating exactly 360° and returning to zero mark during test pulse.",
        possibleFailure: "Mismatched steps/rev causes multi-pass alignment drift and distorted text.",
        detail: "Click Test Rotary in LightBurn and observe physical rotation accuracy."
      },
      {
        title: "Apex Surface Focus Alignment",
        action: "Lower focal height gauge precisely onto the top center apex of the tumbler curvature.",
        why: "Curved cylinders drop out of focus rapidly on shoulders; focusing at the top apex centers focal waist depth.",
        lookFor: "Focal gauge touching top apex point of tumbler cylinder.",
        possibleFailure: "Focusing off-center shortens effective depth of field on curved walls.",
        detail: "Position laser head over top center of tumbler, drop focus gauge, and lock Z-axis height."
      },
      {
        title: "High-Pressure Air Assist Ablation Run",
        action: "Enable local exhaust ducting, turn air assist to high flow, and launch rotary raster fill pass.",
        why: "High air assist blows sticky vaporized polyester soot away from nozzle optics and prevents re-deposition.",
        lookFor: "Vaporized soot blowing clearly away toward exhaust port.",
        possibleFailure: "Low airflow allows polymer soot to settle back onto hot bare metal, leaving sticky yellow film.",
        detail: "Verify exhaust operation, turn air assist valve to high flow, and execute run."
      },
      {
        title: "Post-Laser Chemical Cleanse & Polishing",
        action: "Apply Simple Green degreaser or Denatured Alcohol and scrub with Magic Eraser sponge or soft brass detail brush. Solvent Safety: Denatured Alcohol is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Dissolves and lifts residual baked polymer resin, revealing bright gleaming stainless steel beneath.",
        lookFor: "Mirror silver stainless steel contrast with zero sticky brown residue.",
        possibleFailure: "Using harsh steel wire brushes scratches bare stainless steel surface.",
        detail: "Apply 2ml Simple Green to Magic Eraser, scrub engraved graphic gently, rinse with clean water, and dry."
      }
    ],
    troubleshooting: [
      { issue: "Graphic appears stretched or compressed vertically", likelyCause: "Incorrect diameter or rotary steps per revolution in software settings", howToConfirm: "Measure engraved graphic height on tumbler against original CAD file", fix: "Re-measure tumbler diameter with calipers and verify LightBurn Rotary Setup parameters." },
      { issue: "Graphic drifts out of registration / diagonal shifting", likelyCause: "Tumbler slipping on roller wheels during fast acceleration", howToConfirm: "Horizontal lines fail to align on multi-pass fills", fix: "Switch to chuck rotary attachment or reduce rotary axis acceleration in controller settings." },
      { issue: "Residual sticky yellow film on bare stainless steel", likelyCause: "Power setting slightly low or air assist pressure insufficient", howToConfirm: "Bare metal feels sticky to touch", fix: "Increase laser power by 5% and clean part with Simple Green concentrate using a Magic Eraser." },
      { issue: "Metal scratches on top or bottom tumbler rims", likelyCause: "Unprotected metal chuck jaws clamping directly onto tumbler coating", howToConfirm: "Small indentations matching jaw teeth", fix: "Wrap chuck jaws with blue painter's tape before clamping tumblers." }
    ],
    proTips: [
      "Use a chuck rotary rather than a roller rotary for tapered tumblers to eliminate slippage and axial drift.",
      "Wrap blue painter's tape around chuck jaws to prevent metal jaw scratches on tumbler bases.",
      "Clean post-engraved powder coat strictly with Simple Green or Denatured Alcohol using a soft Magic Eraser sponge."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Vaporized powder coatings produce synthetic polymer fumes and micro-soot. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements. Solvent Safety: Denatured Alcohol is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 8
  {
    id: "3d-relief-wood-carving",
    title: "Deep 3D Relief Sculpting in Hardwood Using 16-Bit Grayscale Heightmaps",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "18 min",
    estimatedTime: "25 min setup, 35 min machine run",
    targetMaterial: "Kiln-Dried Solid Hardwood Board (Walnut / Cherry)",
    materials: [
      "Solid American Walnut or Cherry Board (20-25mm thick, kiln-dried 6-8% moisture content)",
      "Pure Tung Oil or Danish Oil Botanical Finish",
      "320-Grit Silicon Carbide Sandpaper",
      "Soft Brass Wire Detail Brush"
    ],
    tools: [
      "High-Power CO2 Laser (60W-100W+)",
      "Short Focal Length Optics (1.5-inch or 2.0-inch lens)",
      "LightBurn Software (Grayscale 3D Slice Mode)",
      "Digital Vernier Caliper",
      "Honeycomb Hold-Down Pins"
    ],
    summary: "Comprehensive technical methodology for carving deep 3D bas-relief sculptures in kiln-dried hardwood boards using 16-bit depth maps, multi-pass depth slicing, optical lens focal strategies, carbon ash scrubbing, and botanical oil sealing.",
    image: IMG.wood_relief,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 60W–100W+ class). Wood cellulose absorbs 10.6µm infrared light efficiently for thermal vaporization.",
      unsuitableLasers: "Diode lasers (<20W) require excessive passes and char wood edges heavily. Fiber lasers (1064nm) pass through organic wood cellulose with minimal thermal absorption.",
      minimumSpecs: "Enclosed laser system, high-volume local exhaust, high-pressure air assist (25-30 PSI) to suppress embers during deep carving.",
      safetyHazards: "Deep wood laser relief sculpting generates heavy smoke, airborne soot, and fire/ember hazards. Continuous monitoring is required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Only use kiln-dried solid hardwood stock (such as Walnut, Cherry, or Hard Maple) with uniform grain density and low resin content. Avoid softwoods (Pine, Cedar) whose alternating soft springwood and dense summerwood rings carve at different rates, producing severe ridging. Avoid 3-ply plywood which contains interior glue layers that block depth engraving. Measure board thickness with calipers across multiple points prior to setting initial Z-focus height.",
    designPrep: "Export artwork strictly as a 16-bit PNG image (65,536 grayscale steps). Standard 8-bit images contain only 256 grayscale levels, producing harsh stepped stair-casing artifacts across smooth 3D contoured reliefs. In LightBurn Image Settings: Set Image Mode to 'Grayscale' and select 3D Slice or configure linear power scaling (Black = 100% power max depth, White = 0% power surface). Calculate line interval using LPI = 25.4 / lineInterval (e.g. 0.085mm line interval = ~300 LPI). For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists.",
    laserSetup: "Secure hardwood board flat on bed using pins or clamps. Set Z-focus height: For Pass 1 (Deep Relief Sculpt), focus 2-3mm below the top surface plane to place the focal waist inside the cut depth zone. For Pass 2 (Surface Clean-Up), reset focus to the top surface plane. Ensure high-pressure air assist (25-30 PSI) is active to blow away wood embers.",
    optics: {
      lens: "1.5-inch or 2.0-inch short focal length lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure continuous flow",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure airflow snuffs out embers in deep carved wood pockets."
    },
    exhaust: {
      configuration: "High volume enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "70% controller setting (Pass 1 Deep Sculpt) / 20% controller setting (Pass 2 Cleaning)",
      speed: "250 mm/s (Pass 1) / 400 mm/s (Pass 2)",
      passes: "2 (Pass 1 Deep Sculpt + Pass 2 Surface Clean)",
      lineInterval: "0.085mm (~300 LPI) - verify via Interval Test",
      airAssist: "High pressure continuous flow (25-30 PSI)",
      focusOffset: "-2.0mm (Pass 1 Sub-surface focus) / 0.0mm (Pass 2 Surface focus)",
      lightburnMode: "Image (Grayscale 3D Slice)",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Cut a small 16-bit gradient ramp test block on scrap hardwood stock from your batch. Test speed and power to calibrate the maximum depth achieved per pass without scorching wood into black char.",
    steps: [
      {
        title: "Wood Substrate Selection & Caliper Measurement",
        action: "Inspect kiln-dried hardwood board for flat grain and measure thickness with digital calipers across 4 points.",
        why: "Softwoods or wet boards warp and carve unevenly due to fluctuating moisture content and ring density.",
        lookFor: "Kiln-dried board measuring flat within 0.2mm tolerance.",
        possibleFailure: "Using wet softwood produces severe grain ridging and warped boards.",
        detail: "Measure board thickness with calipers and confirm wood species before loading."
      },
      {
        title: "16-Bit Grayscale Heightmap Export & Dynamic Range Scaling",
        action: "Export heightmap graphic strictly as 16-bit PNG format and load into LightBurn Image Mode Grayscale 3D Slice.",
        why: "16-bit depth provides 65,536 depth levels, eliminating stair-step terracing artifacts.",
        lookFor: "Smooth gradient preview on screen with zero visible contour steps.",
        possibleFailure: "Exporting as 8-bit PNG creates 256 harsh stair-steps across 3D relief slopes.",
        detail: "Import 16-bit PNG into LightBurn, select Grayscale 3D Slice, and calibrate power min/max levels."
      },
      {
        title: "Sub-Surface Focal Plane Alignment & High Air Assist Setup",
        action: "Set laser focus 2mm below top surface plane and enable 30 PSI high-pressure air assist.",
        why: "Sub-surface focus places energy waist at median carving depth while air assist suppresses embers inside deep grooves.",
        lookFor: "Focal height set 2mm into wood depth with high airflow active.",
        possibleFailure: "Focusing on top plane broadens beam waist at bottom of deep cuts, creating sloped fuzzy walls.",
        detail: "Position laser height 2mm lower than top surface and set air assist valve to high pressure."
      },
      {
        title: "Pass 1 Execution (Deep Relief Sculpt) & Overscanning",
        action: "Enable high-volume exhaust, verify Overscanning default for GCode lasers, and launch deep sculpt pass.",
        why: "Carves main 3D bas-relief contours into hardwood cellulose.",
        lookFor: "Deep relief geometry forming cleanly behind raster scans.",
        possibleFailure: "Disabling overscanning burns heavy charred border lines on left and right edges.",
        detail: "Start local exhaust, verify overscanning enabled in Cut Settings, and execute Pass 1."
      },
      {
        title: "Pass 2 Execution (Surface Smoothing & Ash Burn-Off)",
        action: "Reset focus height to top surface plane, lower laser power to 20%, increase speed to 400 mm/s, and run smoothing pass.",
        why: "Vaporizes loose wood fuzz and levels micro-terracing left from Pass 1.",
        lookFor: "Smooth wood surface texture across relief slopes.",
        possibleFailure: "Omitting smoothing pass leaves fuzzy carbonized wood fibers inside deep relief pockets.",
        detail: "Adjust focal height to surface 0.0mm, change layer power/speed settings, and run Pass 2."
      },
      {
        title: "Carbon Ash Wire Scrubbing & Botanical Oil Sealing",
        action: "Scrub carved relief under running water with a soft brass wire detail brush along wood grain, dry for 24 hours, and apply pure Tung Oil.",
        why: "Cleans loose carbon ash from wood pores and seals raw fibers against ambient humidity.",
        lookFor: "Clean wood grain detail with rich botanical oil tone contrast.",
        possibleFailure: "Applying oil finish over un-scrubbed ash creates muddy dark smudges.",
        detail: "Scrub relief under tap water with brass brush, dry thoroughly for 24h, and apply 3 coats of Tung Oil."
      }
    ],
    troubleshooting: [
      { issue: "Stepped stair-casing bands across smooth slopes", likelyCause: "Image was exported as 8-bit PNG (256 gray levels) instead of 16-bit PNG", howToConfirm: "Visible contour steps on sloped 3D relief walls", fix: "Re-export graphic as 16-bit PNG from CAD/3D depth mapping software." },
      { issue: "Deep carved pockets ignite into small embers", likelyCause: "Air assist pressure too low or scan speed too slow", howToConfirm: "Glowing embers visible in deep carved recesses during laser pass", fix: "Increase air assist pressure to 30 PSI and increase scan speed." },
      { issue: "Wood relief has visible horizontal ridge lines", likelyCause: "Line interval too wide or loose Y-axis belt timing", howToConfirm: "Inspect lines under magnification for un-carved wood gaps", fix: "Reduce line interval to 0.085mm (~300 LPI) and verify belt tension." },
      { issue: "Warped board after laser carving", likelyCause: "Internal wood stress released in thin non-kiln-dried board", howToConfirm: "Board lifts off bed corners after carving", fix: "Use kiln-dried hardwood at least 20mm thick and secure firmly with clamps." }
    ],
    proTips: [
      "Export 3D heightmaps strictly as 16-bit PNG files (65,536 depth levels) to eliminate stair-step banding.",
      "Always select kiln-dried hardwood (Walnut, Cherry, Maple) with uniform grain density.",
      "For supported GCode devices, enable Overscanning using default settings and adjust if edge darkening persists."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Deep wood laser relief sculpting produces heavy smoke, airborne soot, and fire/ember hazards. Never leave machine unattended during operation. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed."
  },

  // 9
  {
    id: "mopa-color-titanium",
    title: "Spectrum Color Marking on Grade-2 Titanium via Thin-Film Oxide Interference",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "16 min",
    estimatedTime: "20 min setup, 5 min machine run",
    targetMaterial: "Grade 2 Titanium Sheet (Polished Finish)",
    materials: [
      "Grade 2 Titanium Sheet / Blanks (1.0mm-2.0mm thickness, mirror polished finish)",
      "Pure Acetone or 99% Isopropyl Alcohol",
      "Renaissance Microcrystalline Wax",
      "Lint-Free Microfiber Wipes",
      "Nitrile Powder-Free Gloves"
    ],
    tools: [
      "60W MOPA Fiber Galvo Laser (2ns to 500ns pulse width adjustable)",
      "LightBurn Galvo or EZCAD3 Software",
      "F-Theta Scan Lens",
      "Dual Red Dot Focus Pointer System",
      "Ultrasonic Cleaner Bath (Optional)"
    ],
    summary: "Advanced physics-guided protocol for reproducing vibrant spectrum color palettes on Grade 2 titanium through controlled nano-scale titanium dioxide (TiO2) thin-film thermal oxidation interference, detailing MOPA pulse width selection, surface degreasing, hatch cross-hatching strategies, parameter profiles, and environmental stabilization.",
    image: IMG.metal_macro,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers (1064nm wavelength) with user-adjustable pulse width duration (2ns to 500ns range).",
      unsuitableLasers: "Standard Q-Switched fiber lasers lack independent pulse width adjustment, severely restricting color spectrum reproducibility. Diode and CO2 lasers cannot achieve the required energy density on un-coated titanium.",
      minimumSpecs: "Galvo elevator column, F-Theta scan lens, local enclosure exhaust, draft-free ambient workspace.",
      safetyHazards: "Specular and diffuse galvo reflections off polished titanium plates pose severe eye hazards. Acetone solvent flammability.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Titanium color marking does NOT use pigments or dyes. Laser thermal energy induces a rapid reaction between titanium metal and atmospheric oxygen, growing a transparent Titanium Dioxide (TiO2) oxide film layer. When ambient light strikes the film, light reflected from the oxide surface interferes with light reflected from the underlying titanium substrate. Thin film interference physics dictates that film thickness determines which light wavelength is constructively reinforced, producing hues from light straw yellow to deep violet, peacock cyan, rose magenta, and bright green. Smooth polished Grade 2 titanium yields far higher color vibrancy than rough unpolished stock. Degreasing is mandatory.",
    designPrep: "In LightBurn Galvo or EZCAD: Configure fine cross-hatch fill (e.g. 0.005mm to 0.010mm hatch spacing) with bi-directional passes (Pass 1 at 45°, Pass 2 at 135°). Select pulse width duration based on target color: Yellow (short pulse 8ns-16ns), Violet (mid pulse 16ns-32ns), Cyan (long pulse 32ns-60ns), Green/Magenta (very long pulse 60ns-100ns). Dual source profiles: MOPA profile with pulseWidth parameter vs Q-Switched fallback profile (note Q-Switched lacks pulseWidth control and yields limited brownish/blue tones).",
    laserSetup: "Fixture titanium plate flat on galvo table. Focus precisely to top metal plane using galvo focus pointers. Ensure local fume exhaust is running. Prevent room air drafts that cause thermal fluctuation across the laser bed.",
    optics: {
      lens: "F-Theta Galvo Scan Lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air currents disrupt local thermal equilibrium required for uniform oxide layer growth. Keep enclosure exhaust running."
    },
    exhaust: {
      configuration: "Local galvo enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local galvo exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "MOPA Fiber Galvo (1064nm)",
          power: "30% controller setting (50W reference)",
          speed: "800 mm/s (Violet spectrum reference)",
          passes: "2 (Cross-Hatch at 45° and 135°)",
          lineInterval: "0.008mm hatch spacing",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
          frequency: "220 kHz",
          pulseWidth: "24 ns (user-adjustable MOPA pulse)",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm)",
          power: "35% controller setting (30W reference)",
          speed: "600 mm/s",
          passes: "2 (Cross-Hatch at 45° and 135°)",
          lineInterval: "0.008mm hatch spacing",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
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
    materialTestGuide: "Run a grid test matrix on scrap titanium plate. Keep focus constant and vary pulse width duration (8ns to 100ns) against galvo speed and power setting. Record exact parameter combinations corresponding to distinct spectral colors for your specific machine lens setup.",
    steps: [
      {
        title: "Ultrasonic Substrate Degreasing & Solvent Safety",
        action: "Clean titanium plate in pure acetone using a lint-free cloth or ultrasonic bath, handling edges strictly with clean powder-free nitrile gloves. Solvent Safety: Acetone and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Fingerprint lipids and machining lubricants cause splotchy oxide film growth and uneven color spectrum output.",
        lookFor: "Completely degreased, dry, reflective titanium metal surface.",
        possibleFailure: "Skipping degreasing leaves faint brown fingerprints permanently baked into the metal color.",
        detail: "Wipe titanium blank with acetone-dampened cloth, handle with nitrile gloves, and allow 2 minutes for complete evaporation."
      },
      {
        title: "Galvo Focal Plane Precision Alignment",
        action: "Converge dual red dot focus pointers precisely on the top titanium surface plane.",
        why: "Focal waist alignment dictates optical power density and localized thermal oxidation rates.",
        lookFor: "Red dot pointers overlapped into a single sharp spot on top titanium surface.",
        possibleFailure: "Defocusing shifts peak thermal temperature, turning target violet colors into dull grey or brown.",
        detail: "Adjust galvo column height until focus pointers merge into a single sharp focal point."
      },
      {
        title: "MOPA Pulse Width & Hatch Grid Configuration",
        action: "Set MOPA pulse width (e.g. 24ns for violet, 60ns for cyan), set frequency, and configure bi-directional cross-hatching (0.008mm pitch at 45° and 135°).",
        why: "Pulse duration controls energy delivery time per pulse without overheating or melting adjacent metal zones.",
        lookFor: "Dense cross-hatch fill pattern loaded in galvo software workspace.",
        possibleFailure: "Using a single hatch direction creates optical line tracks that shift color with viewing angle.",
        detail: "In galvo hatch settings: set Spacing ~0.008mm, enable Hatch 1 (45°), enable Hatch 2 (135°), and select pulse duration."
      },
      {
        title: "Thermal Oxidation Execution in Controlled Atmosphere",
        action: "Execute galvo color pass with local galvo enclosure exhaust running and enclosure doors closed.",
        why: "Enclosure shields scan area from room air drafts that cause localized temperature drop and color hue shifting.",
        lookFor: "Vibrant spectrum color appearing smoothly on metal surface during galvo pass.",
        possibleFailure: "Air drafts blowing across laser bed cause color hue to drift across a single graphic.",
        detail: "Close galvo enclosure, start local exhaust, and launch galvo execution pass."
      },
      {
        title: "Post-Marking Stabilization & Microcrystalline Wax Sealing",
        action: "Allow titanium piece to cool for 5 minutes, then apply a light coat of Renaissance microcrystalline wax with a soft microfiber cloth.",
        why: "Protects nano-scale oxide layer from finger oil absorption which alters light refraction indices.",
        lookFor: "Lustrous, touch-stable color finish with brilliant spectral pop.",
        possibleFailure: "Unsealed titanium shows dark finger smudge marks when touched.",
        detail: "Let metal cool to room temperature, apply a pea-sized dot of Renaissance wax, and buff gently with dry microfiber."
      }
    ],
    troubleshooting: [
      { issue: "Color appears dull grey or brown across all settings", likelyCause: "Laser power density too high or scan speed too slow, causing metal ablation instead of thin-film oxidation", howToConfirm: "Loud snapping noise during galvo pass and tactile roughness on metal surface", fix: "Increase scan speed by 30%, lower laser power, or reduce MOPA pulse duration." },
      { issue: "Splotchy or blotchy color variation across a single shape", likelyCause: "Finger oils or machining coolant residue on metal surface prior to marking", howToConfirm: "Color shifts align with finger touch marks", fix: "Degrease metal thoroughly with pure acetone or 99% IPA before laser marking." },
      { issue: "Colors shift hue across different areas of the bed", likelyCause: "F-Theta scan lens field distortion or un-level titanium plate", howToConfirm: "Measure focal height across all 4 corners of titanium plate", fix: "Level titanium plate on fixture bed and load F-Theta lens field correction file." },
      { issue: "Colors shift hue when touched with fingers", likelyCause: "Finger lipids changing optical refractive index of exposed oxide film", howToConfirm: "Wiping with alcohol restores original color hue", fix: "Seal finished titanium part with Renaissance microcrystalline wax after laser marking." }
    ],
    proTips: [
      "MOPA fiber lasers allow pulse duration tuning (2ns to 500ns) to control thermal heat accumulation, whereas conventional Q-switched sources rely on speed, power, and frequency tuning.",
      "Bi-directional cross-hatching at 45° and 135° eliminates optical directionality artifacts.",
      "Seal finished color titanium parts with Renaissance microcrystalline wax to prevent finger oils from altering optical interference color."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. 1064nm galvo beams pose intense specular and diffuse reflection risks off polished metal surfaces. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Solvent Safety: Acetone and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 10
  {
    id: "glass-etching-tempera",
    title: "Precision Micro-Fracture Glass Etching Using Black Tempera Paint Coating",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    estimatedTime: "10 min prep, 8 min machine run",
    targetMaterial: "Clear Soda-Lime Glassware / Pint Glasses / Framed Glass",
    materials: [
      "Clear Soda-Lime Glassware / Pint Glasses / Glass Sheets",
      "Black Washable Tempera Paint (Liquid)",
      "Liquid Dish Soap (10:1 mix ratio binder)",
      "Lint-Free Microfiber Towel",
      "Fine Scotch-Brite Pad"
    ],
    tools: [
      "CO2 Laser (40W-100W) or Diode Laser (20W+)",
      "Foam Brush Applicator",
      "LightBurn Software",
      "Rotary Attachment (for cylindrical glassware)",
      "Digital Vernier Caliper"
    ],
    summary: "Controlled thermal shock methodology for generating smooth frosted glassware markings without chipping or micro-shattering glass substrates, explaining thermal absorber chemistry, micro-fracture kinetics, parameter matrices across laser sources, and safe cleaning protocols.",
    image: IMG.lab,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm) and high-power Diode lasers (20W+). Clear glass absorbs 10.6µm CO2 radiation directly; diode lasers require the black tempera absorber coat to transfer heat into the glass silica matrix.",
      unsuitableLasers: "Standard low-power diode lasers (<10W) without an absorber coating pass directly through clear glass without heating.",
      minimumSpecs: "Enclosed laser system, active fume extraction, low air assist capability.",
      safetyHazards: "Thermal shock micro-fracturing generates microscopic glass silica splinters. Wear protective safety glasses and cut-resistant gloves during post-wash scrubbing.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Soda-lime glass is the standard material for beverage glassware and flat window panes. Do NOT laser engrave Lead Crystal Glass; lead content alters thermal expansion co-efficients, causing glass to crack unpredictably under laser heat. The black tempera paint coating acts as a 100% optical absorber layer: photon energy absorbed in the black pigment causes 20-microsecond thermal conduction into the top 5 microns of the glass surface, micro-fracturing silica bonds smoothly without creating deep stress cracks or loose glass shards.",
    designPrep: "In LightBurn, prepare vector graphics or grayscale text. For flat glass or rotary cylinders, set line interval to 0.085mm (~300 LPI) using $LPI = 25.4 / lineInterval$. Avoid excessive DPI (>400 DPI) on glass; over-lapping thermal shocks cause surface glass flaking and rough chipped edges. For supported GCode devices, enable Overscanning default.",
    laserSetup: "For flat glass: Place glass sheet on bed, elevating on blade slats. For cylindrical glassware: Mount glass in rotary attachment and level apex curvature horizontally with a bubble level. Focus laser to top glass surface plane.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off or low trickle flow (2 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist blasts cool air onto hot glass, triggering rapid thermal shock cracking. Keep air assist off or at minimum trickle."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "18% controller setting (CO2 60W reference) / 70% controller setting (Diode 20W reference)",
      speed: "220 mm/s (CO2 reference) / 1000 mm/min (Diode reference)",
      passes: "1",
      lineInterval: "0.085mm (~300 LPI) - verify via Interval Test",
      airAssist: "Off or low trickle flow",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Fill / Image",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Apply tempera paint coat on a scrap glass bottle and run a speed vs power test matrix. Inspect the washed mark under a magnifier: optimal settings yield a smooth, frosted satin white etch. If glass flakes or feels rough, laser power is too high.",
    steps: [
      {
        title: "Thermal Absorber Chemistry Coating Application",
        action: "Mix 10 parts liquid black tempera paint with 1 part liquid dish soap; apply a thin, streak-free layer using a foam brush over the glass area and allow 5 minutes drying.",
        why: "Black pigment absorbs laser photon energy instantly; dish soap breaks surface tension for smooth wetting and enables effortless tap water rinse.",
        lookFor: "Uniform matte black paint coat across glass surface with zero bare glass spots.",
        possibleFailure: "Engraving bare clear glass with diode lasers causes zero marking; on CO2 lasers it causes rough chipped fractures.",
        detail: "Mix tempera paint and dish soap, brush evenly on glass, and wait 5 minutes until dry to touch."
      },
      {
        title: "Rotary Mounting & Apex Focus Alignment",
        action: "For cylindrical glassware, mount glass into rotary attachment, level top apex horizontally with bubble level, and focus laser to top glass surface.",
        why: "Horizontal leveling keeps focal waist waist aligned along the entire cylinder length.",
        lookFor: "Bubble level centered on top glass profile.",
        possibleFailure: "Tilted glass drops out of focus on far ends, resulting in patchy, un-etched text.",
        detail: "Clamp glass in rotary jaws, level with bubble gauge, and set focal height touching top apex."
      },
      {
        title: "Line Interval & Overscanning Configuration",
        action: "In LightBurn, set line interval to 0.085mm (~300 LPI), verify Overscanning default for GCode lasers, and set air assist to off or low trickle.",
        why: "Setting line interval too narrow causes adjacent glass thermal shocks to overlap, chipping glass off in sharp shards.",
        lookFor: "300 LPI line density preview in LightBurn Cut Settings.",
        possibleFailure: "High resolution (>400 LPI) overheats glass surface, causing rough chipped edges.",
        detail: "Enter 0.085mm line interval in LightBurn settings, turn air assist to low trickle, and confirm overscanning."
      },
      {
        title: "Laser Micro-Fracture Execution & Exhaust Control",
        action: "Enable local exhaust ducting and run laser pass.",
        why: "Micro-fracturing occurs in 20 microseconds per pulse, creating 5-micron surface micro-cracks without deep glass stress.",
        lookFor: "Light grey mark forming cleanly behind laser nozzle with zero glass popping or cracking sounds.",
        possibleFailure: "Loud popping sounds indicate laser power is too high, causing deep structural glass cracking.",
        detail: "Start exhaust fan, launch laser run, and monitor glass marking progress."
      },
      {
        title: "Tap Water Rinse & Micro-Glass Polish",
        action: "Rinse glass under warm tap water to wash away black tempera paint, dry with towel, and rub lightly with fine Scotch-Brite pad wearing protective gloves.",
        why: "Tap water dissolves dish soap binder instantly; Scotch-Brite pad removes microscopic glass silica tags.",
        lookFor: "Smooth, frosted white glass etching that feels smooth to touch.",
        possibleFailure: "Skipping Scotch-Brite buffing leaves tiny sharp silica micro-tags on glass surface.",
        detail: "Rinse tempera paint under running tap water, dry with towel, and buff etched surface with Scotch-Brite pad."
      }
    ],
    troubleshooting: [
      { issue: "Glass chips, flakes off in shards, or feels sharp and rough", likelyCause: "Laser power too high or line interval too dense (>400 LPI), causing excessive thermal stress", howToConfirm: "Deep pits and loose sharp glass shards visible under magnification", fix: "Lower laser power by 20% and set line interval strictly to 0.085mm (~300 LPI)." },
      { issue: "Etching looks faint, uneven, or barely visible", likelyCause: "Tempera paint coat was brushed too thick or laser focus was off-plane", howToConfirm: "Paint absorbed heat without conducting into underlying glass", fix: "Apply a thinner foam brush coat of tempera paint and re-verify Z-axis surface focus." },
      { issue: "Glass bottle cracks or shatters during laser processing", likelyCause: "Lead crystal glass was used or high air assist thermal shock fractured glass", howToConfirm: "Structural crack propagating along glass body", fix: "Use soda-lime glass only, disable air assist or set to low trickle flow (2 PSI)." }
    ],
    proTips: [
      "Mixing dish soap into black tempera paint allows smooth streak-free coating and effortless tap water clean-up.",
      "Never engrave lead crystal glass; lead content causes unpredictable thermal expansion and glass cracking.",
      "Buffing freshly laser-etched glass with a fine Scotch-Brite pad removes microscopic silica tags for a smooth feel."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Micro-fractured glass releases tiny glass splinters; wear safety glasses and cut-resistant gloves during washing. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed."
  },

  // 11
  {
    id: "anodized-aluminum-cards",
    title: "High-Speed Laser Bleaching & Vaporization of Anodized Aluminum Business Cards",
    category: "Project",
    difficulty: "Beginner",
    laserType: "fiber",
    readTime: "12 min",
    estimatedTime: "10 min setup, 2 min machine run (batch of 10)",
    targetMaterial: "Anodized Aluminum Metal Card Blanks (0.4mm thick)",
    materials: [
      "Anodized Aluminum Business Card Blanks (0.4mm thick, Matte Black or Colored Anodic Layer)",
      "99% Isopropyl Alcohol",
      "Lint-Free Microfiber Wipes",
      "Nitrile Powder-Free Gloves"
    ],
    tools: [
      "Fiber Galvo Laser (20W-50W) or Diode Laser (10W-20W) / CO2 Laser",
      "LightBurn Software / EZCAD",
      "Custom Acrylic Alignment Grid Jig (2x5 Array)",
      "Dual Red Dot Focus Pointer System"
    ],
    summary: "Technical methodology for high-speed laser bleaching and organic dye vaporization from aluminum oxide anodic coatings, detailing photothermal mechanisms, grid array batching, parameter profiles for MOPA and Q-Switched sources, and optical contrast optimization without base aluminum substrate ablation.",
    image: IMG.metal_artisan,
    prerequisites: {
      compatibleLasers: "Fiber Galvo lasers (1064nm wavelength), 450nm Diode lasers, or 10.6µm CO2 lasers. Fiber galvo systems deliver maximum throughput for high-volume batch production.",
      unsuitableLasers: "Low-power focused diode lasers (<5W) require impractically slow scan speeds for batch manufacturing, though dye absorption occurs across visible wavelengths.",
      minimumSpecs: "Workpiece alignment fixture/jig, local exhaust ventilation.",
      safetyHazards: "High-speed galvo specular reflections from exposed aluminum substrate when dye is fully cleared; airborne organic dye combustion particulates.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Anodized aluminum consists of an amorphous aluminum oxide matrix (Al2O3) infused with organic or synthetic dyes. Laser marking does not melt the underlying solid aluminum base (melting point ~660°C); rather, focused photon energy sublimates or bleaches the organic dye molecules trapped within the porous anodic layer. Matte finishes produce cleaner contrast with less specular glare than high-gloss anodized stock. Always inspect blanks for uniform anodic coating depth and scratch-free surface quality before loading.",
    designPrep: "In LightBurn or EZCAD, create high-density vector graphics or text. For galvo fiber systems, configure a fine hatch line spacing (e.g. 0.025mm to 0.035mm) with single-pass or bi-directional hatch. Over-powering the beam will cause thermal oxidation of the bare aluminum substrate, shifting the mark from bright silver-white to a dull grey tone. Use LightBurn's Grid Array tool to tile card artwork matching your physical alignment jig.",
    laserSetup: "Place the physical acrylic alignment jig on the laser bed. Focus the beam precisely to the card top surface plane using double-red dot alignment or focus gauge. Ensure local fume extraction is running to clear dye sublimation vapors.",
    optics: {
      lens: "F-Theta Galvo Scan Lens / Manufacturer Optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off or low trickle at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist is generally turned off for galvo card marking to avoid disturbing lightweight cards in the alignment jig. Keep enclosure exhaust active."
    },
    exhaust: {
      configuration: "Local galvo enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "MOPA Fiber Galvo (1064nm)",
          power: "22% controller setting (30W reference)",
          speed: "2500 mm/s",
          passes: "1",
          lineInterval: "0.025mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
          frequency: "45 kHz",
          pulseWidth: "100 ns",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm)",
          power: "28% controller setting (30W reference)",
          speed: "2000 mm/s",
          passes: "1",
          lineInterval: "0.025mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
          frequency: "30 kHz",
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
    materialTestGuide: "Perform a speed vs power hatch grid test on a scrap anodized card. Observe the mark under bright lighting: optimal power yields a brilliant, bright silver-white contrast. If the mark turns grey or beige, laser power density is too high, causing thermal etching/oxidation of the base aluminum. Reduce power or increase galvo speed until bright silver is achieved.",
    steps: [
      {
        title: "Substrate Degreasing & Alignment Jig Placement",
        action: "Clean anodized card blanks with 99% Isopropyl Alcohol using a lint-free cloth and place cards into acrylic alignment grid jig. Solvent Safety: Isopropyl Alcohol (IPA) is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Removes skin oils and dust trapped in microscopic anodic pores that interfere with optical dye sublimation.",
        lookFor: "Completely clean, fingerprint-free matte anodized cards seated firmly in jig pockets.",
        possibleFailure: "Engraving over finger lipids leaves dark blotchy patches on silver text.",
        detail: "Wipe cards with IPA-soaked microfiber, let dry 2 minutes, and fit cards into jig array pockets."
      },
      {
        title: "Software Grid Array Layout & Origin Calibration",
        action: "In LightBurn or EZCAD, generate a 2x5 grid array matching physical jig pocket center spacing.",
        why: "Aligns software vector output exactly with physical card positions on the bed.",
        lookFor: "Red framing tracer running precisely around the perimeter of each physical card in the jig.",
        possibleFailure: "Mismatched grid coordinates cause text to engrave off-center on cards.",
        detail: "Use LightBurn Grid Array tool to duplicate design with exact X/Y offset matching physical jig."
      },
      {
        title: "Hatch Density & Line Interval Calibration (0.025mm)",
        action: "Set galvo hatch line spacing to 0.025mm with bi-directional single pass.",
        why: "Dense hatch spacing ensures 100% dye vaporization across vector fill shapes without visible scan stripes.",
        lookFor: "Solid silver vector fill preview in galvo software workspace.",
        possibleFailure: "Wide hatch spacing (e.g. 0.08mm) leaves dark un-bleached dye stripes across text.",
        detail: "In galvo hatch settings: enter 0.025mm spacing, enable Bi-directional Hatch, and set angle to 45°."
      },
      {
        title: "Optical Focus & Focal Plane Alignment",
        action: "Converge dual red dot focus pointers precisely onto the top card surface plane.",
        why: "Focusing at exact top plane maximizes power density required for instantaneous dye bleaching.",
        lookFor: "Red dot pointers merged into a single sharp focus point.",
        possibleFailure: "Defocusing broadens beam waist, reducing power density and leaving grey un-bleached marks.",
        detail: "Adjust galvo height column until red dots touch and lock Z-axis column."
      },
      {
        title: "Galvo Laser Bleaching & Vaporization Execution",
        action: "Enable local galvo enclosure exhaust ducting and launch galvo batch marking run.",
        why: "Sublimates organic dye molecules trapped inside anodic oxide pores within 25 seconds for a batch of 10 cards.",
        lookFor: "Brilliant bright silver text forming instantly without sparks or deep metal smoke.",
        possibleFailure: "Over-powering laser melts base aluminum, causing dull grey oxidation marks.",
        detail: "Close galvo enclosure, start exhaust, and press Start."
      },
      {
        title: "Quality Inspection & Packaging",
        action: "Remove cards from jig pockets and inspect under direct lighting for crisp silver contrast and clean edges.",
        why: "Verifies bright silver contrast without substrate scorching or discoloration.",
        lookFor: "Crisp white-silver contrast against dark anodized card background with zero post-cleaning required.",
        possibleFailure: "Skipping inspection allows grey/beige scorched cards into customer shipments.",
        detail: "Inspect finished cards under direct bright light and stack into protective card cases."
      }
    ],
    troubleshooting: [
      { issue: "Mark appears dark grey or dull instead of bright silver-white", likelyCause: "Laser power too high or scan speed too slow, causing thermal melting and oxidation of base aluminum", howToConfirm: "Scorched grey tone under direct light and slight tactile roughness on metal surface", fix: "Lower laser power by 15% or increase galvo scan speed by 25% in Cut Settings." },
      { issue: "Visible dark stripes or line gaps across text fill", likelyCause: "Hatch line spacing too wide for optical spot size", howToConfirm: "Inspect text under magnification for un-bleached dye lines", fix: "Reduce galvo hatch line spacing from 0.04mm down to 0.025mm." },
      { issue: "Cards shift out of position during galvo scan", likelyCause: "High exhaust airflow or bed vibration moving lightweight 0.4mm metal cards", howToConfirm: "Card shifts inside jig pocket during marking pass", fix: "Use acrylic pocket jig with tight pocket tolerances or apply low-tack painter's tape on jig base." },
      { issue: "Text appears fuzzy or un-sharp along edges", likelyCause: "Focal height off plane or incorrect lens field calibration", howToConfirm: "Red focus dots split into two separate spots on top card face", fix: "Re-align dual red dot focus pointers to converge on top card surface." }
    ],
    proTips: [
      "Lower laser power yields a brighter white-silver mark on anodized aluminum; excessive power melts the base aluminum into dull grey oxidation.",
      "Anodized aluminum cards require zero post-laser chemical cleaning.",
      "Use an acrylic grid array jig to batch-mark 10 cards in under 25 seconds with 100% repeat positioning."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Reflective metal cards can bounce galvo beams off-axis during dye vaporization. Use effective local galvo exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Solvent Safety: Isopropyl Alcohol (IPA) is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 12
  {
    id: "rubber-stamps-lightburn",
    title: "Custom Vulcanized Rubber Stamp Engraving with LightBurn Trapezoidal Ramp Profiles",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "15 min setup, 12 min machine run",
    targetMaterial: "Laser-Grade Low-Odor Natural Rubber Vulcanized Sheet (2.3mm)",
    materials: [
      "2.3mm Laser-Grade Low-Odor Natural Rubber Vulcanized Sheet",
      "Hardwood Stamp Mounting Blocks",
      "Double-Sided Cushion Mounting Tape (1.5mm acrylic foam)",
      "Mild Liquid Dish Soap",
      "Distilled Water"
    ],
    tools: [
      "CO2 Laser (50W-100W)",
      "LightBurn Software (Stamp Ramp Mode)",
      "Soft Nylon Scrub Brush",
      "Digital Vernier Caliper",
      "Microfiber Drying Towel"
    ],
    summary: "Engineering methodology for engraving high-resolution text and logos into vulcanized rubber sheets with trapezoidal ramp shoulder profiles, detailing LightBurn Ramp Length settings, horizontal mirroring, parameter optimization, ash scrubbing, and cushion mounting.",
    image: IMG.cnc1,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–100W class). Vulcanized natural rubber strongly absorbs infrared radiation for rapid photothermal vaporization.",
      unsuitableLasers: "Diode lasers (<20W) and Fiber galvo lasers (1064nm) lack effective thermal absorption or speed for deep 1.2mm rubber stamp relief engraving.",
      minimumSpecs: "Enclosed laser system, high-volume local exhaust extraction (200+ CFM) with activated carbon filtration.",
      safetyHazards: "Vulcanized rubber burning generates strong sulfurous fumes and fine airborne rubber ash. Ensure high-volume active extraction.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Strictly specify 'Laser-Grade Low-Odor' natural vulcanized rubber sheets (2.3mm standard thickness). Do NOT use standard tire rubber or non-laserable rubber compounds which release dense sulfur dioxide gas and offensive lingering odors. Measure sheet thickness across multiple points with calipers to ensure accurate Z-focus depth.",
    designPrep: "In LightBurn Layer Settings: Set Layer Mode to 'Fill' (or 'Image'), toggle 'Negative Image' ON (so background is engraved away, leaving raised text), toggle 'Mirror Horizontal' ON (so stamp impression reads correctly when pressed onto paper), and enable 'Ramp' mode with a Ramp Length of 0.35mm to 0.50mm. The trapezoidal ramp shoulder widens the base of thin letters, preventing fine stems or periods from flexing and smudging ink.",
    laserSetup: "Pin rubber sheet flat onto bed. Focus laser height precisely to the top rubber plane. Ensure high-volume exhaust and active air assist (15 PSI) are running to blow away heavy rubber ash.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Moderate airflow (15 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist clears heavy vaporized rubber ash from the laser beam path."
    },
    exhaust: {
      configuration: "High-volume enclosure exhaust with carbon filter",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "55% controller setting (CO2 60W Deep Engrave) / 70% controller setting (Perimeter Vector Cut)",
      speed: "180 mm/s (Deep Engrave Pass) / 8 mm/s (Perimeter Vector Cut)",
      passes: "1",
      lineInterval: "0.065mm (~390 LPI) - verify via Interval Test",
      airAssist: "Moderate airflow (15 PSI)",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Fill (Ramp Mode & Negative Enabled) + Line Cut",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run a test graphic containing fine 6pt text and 0.5mm dots on scrap laser rubber. Test ramp length settings (0.25mm to 0.60mm) and verify under magnification that character bases exhibit trapezoidal shoulder walls.",
    steps: [
      {
        title: "Rubber Substrate Verification & Caliper Measurement",
        action: "Confirm rubber sheet is certified 'Laser-Grade Low-Odor' and measure thickness across 4 corners with digital calipers.",
        why: "Non-laserable rubber releases dense sulfur fumes; accurate thickness measurement guarantees 1.2mm relief depth.",
        lookFor: "Sheet measuring 2.3mm thickness within +/-0.05mm tolerance.",
        possibleFailure: "Engraving standard sulfur-heavy rubber produces persistent toxic fumes that contaminate the studio.",
        detail: "Verify product labeling, record 2.3mm caliper reading, and secure sheet flat on bed."
      },
      {
        title: "LightBurn Ramp Profile, Mirror & Inversion Configuration",
        action: "In LightBurn Layer Settings: enable Ramp Mode (set Ramp Length to 0.40mm), toggle Negative Image ON, and click Mirror Horizontal.",
        why: "Ramp creates trapezoidal shoulders for character stability under ink pad pressure; Negative engraves background away; Mirroring ensures readable paper stamping.",
        lookFor: "Mirrored, inverted preview in LightBurn with ramp shoulder cross-section enabled.",
        possibleFailure: "Forgetting Mirror Horizontal produces backward, un-readable stamped text.",
        detail: "Enable Ramp (0.40mm length), toggle Negative Image ON, toggle Mirror Horizontal ON, and set line interval to 0.065mm (~390 LPI)."
      },
      {
        title: "Surface Focus & High-Volume Exhaust Setup",
        action: "Set focal height gauge precisely to top rubber plane, turn on high-volume exhaust (200+ CFM), and set air assist to 15 PSI.",
        why: "Precision focus delivers clean 1.2mm relief depth; active air assist clears heavy rubber ash from focal optics.",
        lookFor: "Laser nozzle focused to top rubber plane with strong exhaust suction active.",
        possibleFailure: "Defocusing produces shallow, rounded rubber characters that hold excess ink.",
        detail: "Position focus gauge on top rubber surface, lock Z-axis height, and start exhaust extraction."
      },
      {
        title: "Deep Engrave & Perimeter Cut Execution",
        action: "Run Pass 1 (Deep Engrave Fill at 180 mm/s @ 55% power) followed by Pass 2 (Vector Cut Cutout at 8 mm/s @ 70% power).",
        why: "Pass 1 vaporizes 1.2mm background rubber; Pass 2 cuts the stamp die outline free from the sheet.",
        lookFor: "Deep relief channels forming around raised trapezoidal rubber characters.",
        possibleFailure: "Cutting perimeter before engraving causes rubber die to shift under air assist airflow.",
        detail: "Execute raster engrave layer first, followed immediately by vector cut layer."
      },
      {
        title: "Vulcanized Ash Scrubbing & Cushion Block Mounting",
        action: "Scrub engraved rubber die under warm soapy water with a soft nylon brush, dry completely, apply double-sided cushion tape, and press onto wooden block.",
        why: "Soapy water scrubs away loose rubber ash; cushion tape distributes hand stamping pressure evenly.",
        lookFor: "Clean rubber die with sharp, dust-free character shoulders firmly mounted on wooden block.",
        possibleFailure: "Omitting ash scrubbing causes loose rubber dust to contaminate ink pads during first use.",
        detail: "Scrub rubber die in warm soapy water, dry with microfiber towel, apply cushion tape, and press onto hardwood block."
      }
    ],
    troubleshooting: [
      { issue: "Fine text stems or period dots flex and smudge ink when stamped", likelyCause: "Ramp Mode was disabled or Ramp Length setting was too short (<0.20mm)", howToConfirm: "Character side walls are vertical straight pillars instead of trapezoidal ramps", fix: "Enable Ramp Mode in LightBurn Cut Settings and set Ramp Length to 0.40mm." },
      { issue: "Stamped impression reads backward on paper", likelyCause: "Mirror Horizontal was omitted in software before engraving", howToConfirm: "Text on engraved rubber reads normally instead of mirrored", fix: "Toggle 'Mirror Horizontal' ON in LightBurn before running the laser pass." },
      { issue: "Engraved rubber background depth is too shallow (<0.8mm)", likelyCause: "Laser power too low or scan speed too fast", howToConfirm: "Non-image background areas pick up ink from stamp pad", fix: "Increase laser power by 10% or lower scan speed to achieve 1.2mm relief depth." }
    ],
    proTips: [
      "Always enable LightBurn Ramp Mode (0.40mm length) to create trapezoidal character shoulders that prevent fine letter stems from smudging ink.",
      "Strictly verify rubber is labeled 'Laser-Grade Low-Odor' to prevent heavy sulfur fumes.",
      "Mount rubber dies using 1.5mm acrylic foam cushion tape to ensure uniform ink transfer across hand-stamped surfaces."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Vulcanized rubber produces strong sulfurous fumes; use high-volume local exhaust with activated carbon filtration sized for the machine enclosure."
  },

  // 13
  {
    id: "cardboard-packaging-proto",
    title: "Corrugated Cardboard Box Prototyping with Vector Crease & Perforation",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "12 min",
    estimatedTime: "10 min setup, 5 min machine run",
    targetMaterial: "Single-Wall E-Flute / B-Flute Corrugated Cardboard (1.5mm - 3.0mm)",
    materials: [
      "Single-Wall E-Flute or B-Flute Corrugated Cardboard Sheets (1.5mm - 3.0mm)",
      "350gsm Kraft Paperboard Stock",
      "Emergency Water Spray Bottle (Safety)"
    ],
    tools: [
      "CO2 Laser (40W-80W) or Diode Laser (10W-20W)",
      "Bone Folder Creasing Tool",
      "LightBurn Software (Perforation Cut Mode)",
      "Digital Vernier Caliper",
      "Honeycomb Hold-Down Pins"
    ],
    summary: "Production protocol for cutting packaging prototypes with laser-scored perforation folding lines and zero edge-burn soot, detailing vector perforation engineering (cut/skip ratios), high-speed parameter management, flute ember suppression, and professional 90° box assembly.",
    image: IMG.cnc2,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm) and Diode lasers (450nm). Cellulosic paper flutes absorb infrared and blue laser wavelengths rapidly.",
      unsuitableLasers: "Fiber galvo lasers (1064nm) pass through organic paper flutes with minimal cutting action or char heavy spots unevenly.",
      minimumSpecs: "Enclosed laser frame, high-volume local exhaust, high-pressure air assist (25-30 PSI) directed straight into the cut kerf.",
      safetyHazards: "Corrugated cardboard flutes trap air pockets and present high fire/ember ignition risks. Continuous operator monitoring required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Corrugated cardboard consists of outer Kraft paper liners sandwiching a fluted paper arch core (E-Flute = 1.5mm, B-Flute = 3.0mm). Do NOT use continuous solid vector line scoring for 90° box fold lines; continuous vector cuts sever the outer paper liner, causing box seams to tear open upon folding. Use dashed vector perforation (e.g. 3.0mm cut / 2.0mm skip) to weaken the inner flute core while preserving outer liner tensile strength. Measure total board thickness with digital calipers prior to cutting.",
    designPrep: "In LightBurn, organize box flat-pattern vectors onto 2 distinct layers: Layer 1 (Perforation Crease Score - enable Perforation Cut with 3.0mm cut length / 2.0mm skip length), and Layer 2 (Outer Contour Cut - continuous vector line). For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin cardboard dead flat onto honeycomb bed using hold-down pins to prevent sheet bowing. Focus laser precisely to top paper surface plane. Ensure high-pressure air assist (25-30 PSI) is active and pointed directly into the laser kerf to extinguish internal flute embers.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure continuous flow (25-30 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure airflow snuffs out embers inside internal paper flutes."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "12% controller setting (Perforation Score) / 38% controller setting (Contour Cut)",
      speed: "350 mm/s (CO2 Perforation Score) / 45 mm/s (CO2 Contour Cut)",
      passes: "1",
      lineInterval: "N/A (Dashed Vector Perforation & Contour Cut)",
      airAssist: "High pressure continuous flow (25-30 PSI)",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Line (Perforation Enabled + Continuous Line Cut)",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run test cuts of a 50mm perforation line on scrap cardboard from your batch. Verify that dashed cuts slice cleanly through the inner flute without scorching or burning through the outer liner paper.",
    steps: [
      {
        title: "Cardboard Flute Inspection & Caliper Measurement",
        action: "Measure cardboard sheet thickness with digital calipers and identify flute type (E-Flute 1.5mm / B-Flute 3.0mm).",
        why: "Determines vector cut power requirements and folding allowance calculations.",
        lookFor: "Sheet measuring 1.5mm (E-Flute) or 3.0mm (B-Flute) flat without crushed flutes.",
        possibleFailure: "Using crushed cardboard distorts box dimensions after folding.",
        detail: "Measure board thickness with calipers and record flute geometry."
      },
      {
        title: "Vector Perforation Layer & Cut/Skip Ratio Setup",
        action: "In LightBurn: assign crease fold lines to Layer C00, enable Perforation Cut mode, and enter 3.0mm Cut Length / 2.0mm Skip Length.",
        why: "Dashed perforations allow crisp 90° box corner folds without tearing outer Kraft paper liners.",
        lookFor: "Dashed line pattern preview along fold vectors in software workspace.",
        possibleFailure: "Using continuous score lines severs paper fibers, causing box flaps to fall off upon folding.",
        detail: "Configure Layer C00 Line mode, enable Perforation Cut (3.0mm cut / 2.0mm skip), and set Layer C01 to continuous Cut."
      },
      {
        title: "Bed Pinning & High-Pressure Air Assist Alignment",
        action: "Secure cardboard sheet dead flat on honeycomb bed with hold-down pins, set focus gauge to top surface, and turn on 30 PSI air assist.",
        why: "Pinning prevents cardboard bowing; high air assist snuffs out smoldering embers inside hollow paper flutes.",
        lookFor: "Flat sheet with high-pressure air stream directed straight into laser nozzle.",
        possibleFailure: "Low air assist allows smoldering embers to catch fire inside cardboard flutes.",
        detail: "Insert pins along cardboard borders, drop focus gauge to top plane, and turn on high air assist."
      },
      {
        title: "High-Speed Laser Cut Execution & Ember Monitoring",
        action: "Enable local exhaust ducting and run laser pass while actively monitoring the job.",
        why: "High scan speed (350 mm/s) on perforation lines minimizes heat accumulation in paper flutes.",
        lookFor: "Clean dashed perforation scores forming rapidly with zero lingering smoke or flames.",
        possibleFailure: "Leaving cardboard laser cutting unattended presents a severe fire hazard.",
        detail: "Start local exhaust, launch laser run, and observe cut line for embers."
      },
      {
        title: "Bone Folder Folding & Professional Box Assembly",
        action: "Remove cut prototype from bed, run a bone folder along laser perforated fold lines, and fold box flaps to 90°.",
        why: "Bone folder creates crisp, professional box corner folds without cracking Kraft paper fibers.",
        lookFor: "Sharp 90° box corner folds with clean laser-cut edges.",
        possibleFailure: "Folding by hand without a bone folder creates wavy, distorted fold lines.",
        detail: "Run bone folder tool firmly along perforated crease lines and fold box panels into shape."
      }
    ],
    troubleshooting: [
      { issue: "Box flaps tear off easily along fold lines when folded", likelyCause: "Perforation cut length was too long or skip gap was too short (e.g. 5mm cut / 1mm skip)", howToConfirm: "Paper liner is completely severed along fold seam", fix: "Adjust Perforation Cut settings to 2.5mm Cut Length / 2.5mm Skip Length in LightBurn." },
      { issue: "Smoldering embers or dark charred soot along cut edges", likelyCause: "Air assist pressure too low or laser speed too slow", howToConfirm: "Black soot rubs off on hands upon touching cardboard edges", fix: "Increase air assist pressure to 30 PSI and increase scan speed." },
      { issue: "Cardboard sheet catches fire inside hollow flutes", likelyCause: "Laser power setting far too high or machine left unattended", howToConfirm: "Flames visible inside cardboard flute channels", fix: "Immediately pause laser, extinguish with water spray bottle, lower power setting, and increase air assist." }
    ],
    proTips: [
      "Always use dashed vector perforation lines (3mm cut / 2mm skip) instead of continuous score lines for 90° box fold seams.",
      "Direct high-pressure air assist (30 PSI) straight into the cut kerf to snuff out internal cardboard flute embers.",
      "Run a bone folder tool along laser perforated lines to achieve crisp 90° box corner folds without cracking paper fibers."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Cardboard flutes present a high fire hazard; NEVER leave cardboard laser cutting unattended. Keep a spray bottle of water nearby. Use effective local exhaust sized for the machine enclosure."
  },

  // 14
  {
    id: "denim-laser-distressing",
    title: "Precision Laser Distressing & Pattern Fading on Denim Textiles",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "15 min setup, 6 min machine run",
    targetMaterial: "100% Cotton Indigo-Dyed Denim Fabric",
    materials: [
      "100% Cotton Indigo-Dyed Denim Jeans / Jackets / Fabric Blanks",
      "Spray Textile Starch (for fabric flattening)",
      "Mild Cold-Water Detergent",
      "Lint-Free Fabric Wipes"
    ],
    tools: [
      "CO2 Galvo Laser or CO2 Flatbed Laser (40W-80W)",
      "LightBurn Software",
      "Clothes Steamer / Garment Iron",
      "Commercial Washing Machine"
    ],
    summary: "Photothermal degradation protocol for sublimating indigo dye molecules from cotton warp fibers to create vintage whiskering, destruction rips, and graphic patterns, detailing indigo sublimation thermodynamics, low-DPI dithering, parameter scaling, and post-laser wash-off.",
    image: IMG.denim_jacket,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–80W class) or CO2 galvo textile lasers. Organic cotton cellulose and surface indigo dye absorb 10.6µm infrared radiation rapidly.",
      unsuitableLasers: "Standard diode lasers (<20W) require impractically slow speeds for large textile areas. Fiber galvo lasers (1064nm) pass through organic blue denim with minimal thermal reaction.",
      minimumSpecs: "Enclosed laser system or galvo enclosure, active fume extraction with particulate filtration, garment flattening frame.",
      safetyHazards: "Cellulosic cotton dust fluffs inside laser bed present flash-fire risks. Vacuum laser cabinet interior regularly.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Strictly specify 98%–100% Cotton Indigo Denim. Avoid synthetic stretch denim containing high percentages of Spandex, Elastane, or Polyester (>5%). Synthetic elastic fibers melt into sticky yellow residue under laser heat, destroying fabric hand feel and causing discolored marks. Measure fabric thickness and steam iron flat before laser processing.",
    designPrep: "In LightBurn, convert artwork to 8-bit grayscale. For faded whiskering or photo textures, set resolution strictly to 150-200 DPI (0.127mm - 0.170mm line interval) using $LPI = 25.4 / lineInterval$. High DPI (>300 DPI) causes excessive laser dot overlap that severely degrades cotton fiber tensile strength, causing fabric to tear easily during wear.",
    laserSetup: "Iron or steam denim fabric flat to eliminate wrinkles. Secure denim onto bed using magnet hold-down bars or frame fixture. Focus laser height precisely to the top fabric plane. Ensure local fume extraction is running.",
    optics: {
      lens: "Manufacturer-supplied focusing optics / Galvo Scan Lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow for fading / High flow for destruction rips",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist prevents airborne lint fluff from igniting during surface dye sublimation."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "14% controller setting (CO2 80W Fading Pass) / 45% controller setting (Destruction Ripping Pass)",
      speed: "600 mm/s (Fading Pass) / 150 mm/s (Ripping Pass)",
      passes: "1",
      lineInterval: "0.15mm (~170 LPI) - low resolution for fiber strength",
      airAssist: "Low trickle for fading / High flow for ripping",
      focusOffset: "0.0mm (Surface focus)",
      lightburnMode: "Image (Jarvis/Stucki Dither @ 170 LPI) + Line Cut",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Run a test grid matrix on a scrap piece of 100% cotton denim. Test scan speed against power settings to calibrate the exact threshold that sublimates surface indigo dye to white without scorching or weakening underlying cotton warp threads.",
    steps: [
      {
        title: "Fabric Composition & Iron Flattening Protocol",
        action: "Confirm denim composition is 98-100% cotton, steam iron fabric flat to eliminate wrinkles, and spray light textile starch.",
        why: "Synthetic elastane fibers melt into sticky yellow sludge under laser heat; wrinkles cause focal height variance blurs.",
        lookFor: "Flat, smooth cotton denim surface free of creases or synthetic elastane content.",
        possibleFailure: "Engraving stretch denim melts synthetic rubber threads, destroying fabric texture.",
        detail: "Check garment fabric tag, iron denim flat with steam, and spray starch."
      },
      {
        title: "Image Resolution & Low-DPI Dithering Setup",
        action: "Import design into LightBurn, select Stucki dithering, and set line interval strictly to 0.15mm (~170 LPI).",
        why: "Low LPI resolution prevents excessive dot overlap that destroys cotton warp fiber tensile strength.",
        lookFor: "Low-DPI dithered pattern preview in software workspace.",
        possibleFailure: "Using high DPI (>300 DPI) burns cotton fibers, causing jeans to rip along laser lines.",
        detail: "Set Image mode Stucki dithering, enter 0.15mm line interval, and boost midtone contrast."
      },
      {
        title: "Garment Bed Fixturing & Surface Focus Alignment",
        action: "Secure denim flat on bed using magnetic hold-down bars and lower laser focal height gauge to touch top denim surface.",
        why: "Prevents fabric movement from air assist currents and keeps focal waist aligned across large textile panels.",
        lookFor: "Denim held taut and flat against bed plane with focus gauge touching top fibers.",
        possibleFailure: "Bowed fabric shifts out of focal plane, creating blurry unfocused wash patches.",
        detail: "Position magnet bars around garment edges, drop focus gauge to top fabric face, and lock Z-axis."
      },
      {
        title: "Laser Photothermal Dye Sublimation Execution",
        action: "Enable local exhaust ducting, set air assist to low trickle flow, and execute laser fading pass.",
        why: "Sublimates surface indigo dye molecules ($300^\circ\text{C}$) into gas without damaging white cotton core threads.",
        lookFor: "Bright white dithered highlights appearing instantly behind beam travel.",
        possibleFailure: "Excessive laser power burns through cotton warp threads, creating accidental destruction holes.",
        detail: "Start local exhaust, verify Cut Settings, and launch laser run."
      },
      {
        title: "Post-Laser Cold Water Enzyme Wash",
        action: "Wash distressed denim garment in cold water with mild detergent in a commercial washing machine, then tumble dry.",
        why: "Washing purges vaporized indigo ash and loose carbon residue, revealing bright white vintage distressed contrast.",
        lookFor: "Soft, vintage distressed denim with bright white dithered highlights and zero dark ash.",
        possibleFailure: "Skipping post-laser washing leaves dark carbonized dye ash on fabric that smudges onto skin.",
        detail: "Wash garment on cold gentle cycle, tumble dry, and inspect finished distressed highlights."
      }
    ],
    troubleshooting: [
      { issue: "Laser distressed area tears open easily during wear or washing", likelyCause: "Resolution was set too high (>300 DPI) or laser power was excessive, severing cotton warp fibers", howToConfirm: "Cotton threads under magnification are severed rather than surface-bleached", fix: "Lower resolution strictly to 150-170 LPI (0.15mm line interval) and lower laser power by 15%." },
      { issue: "Sticky yellow/brown melt residue along laser lines", likelyCause: "Denim fabric contains synthetic Spandex, Elastane, or Polyester fibers", howToConfirm: "Synthetic fibers melted into hard plastic droplets under laser heat", fix: "Use strictly 98%–100% Cotton denim fabric for laser distressing." },
      { issue: "Faded pattern looks blurry or out of focus in center of garment", likelyCause: "Denim fabric wrinkled or bowed upward on bed during laser pass", howToConfirm: "Wrinkle creases visible across laser engraved zone", fix: "Steam iron denim completely flat and secure borders with magnetic hold-down bars." }
    ],
    proTips: [
      "Keep laser resolution strictly between 150–170 LPI (0.15mm line interval) to preserve structural cotton fiber strength.",
      "Avoid synthetic stretch denim containing Spandex/Polyester; stick to 98-100% cotton denim.",
      "Wash distressed denim in cold water immediately after laser processing to purge vaporized dye ash."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Cotton dust fluffs present a flash-fire risk; vacuum laser cabinet interior weekly. Use effective local exhaust sized for the machine enclosure."
  },

  // 15
  {
    id: "brass-coin-3d-fiber",
    title: "Deep 3D Relief Engraving & Stamping Die Creation on Brass Challenge Coins",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "20 min",
    estimatedTime: "20 min setup, 45 min machine run (250 passes)",
    targetMaterial: "Solid C360 Free-Cutting Brass Challenge Coin Blanks",
    materials: [
      "Solid Brass Challenge Coin Blanks (40mm diameter x 3mm thickness, C360 Brass)",
      "Potassium Polysulfide (Liver of Sulfur) Antique Patina Solution",
      "Brasso Metal Polish / Liquid Brass Cleaner",
      "2000-Grit Silicon Carbide Wet/Dry Sandpaper",
      "Pure Acetone / 99% Isopropyl Alcohol"
    ],
    tools: [
      "50W-100W MOPA or Q-Switched Fiber Galvo Laser",
      "LightBurn Galvo or EZCAD3 Software (3D Slice Mode)",
      "F-Theta Scan Lens (160mm focal length)",
      "Dual Red Dot Focus Pointer System",
      "Ultrasonic Cleaning Bath"
    ],
    summary: "Multi-layer 250-pass galvo laser ablation protocol for carving 1.25mm deep 3D sculptural reliefs into solid brass coin stock, detailing 16-bit heightmap slicing, dynamic hatch angle rotation (+33°), cleaning pass interleaving, thermal cooling intervals, and chemical antiquing finish.",
    image: IMG.metal_artisan,
    prerequisites: {
      compatibleLasers: "Fiber Galvo lasers (1064nm wavelength, 50W–100W class) with MOPA or Q-switched sources. High peak pulse power density is required to ablate C360 brass alloy cleanly.",
      unsuitableLasers: "Diode lasers (450nm) and CO2 lasers (10.6µm) reflect off bare brass surfaces, failing to achieve metal ablation threshold.",
      minimumSpecs: "Galvo laser column, F-Theta scan lens, protective optical window, HEPA metal fume extraction system.",
      safetyHazards: "Heavy brass ablation generates fine airborne metallic brass dust and copper/zinc vapors. Active HEPA filtration and optical eye protection are mandatory.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "C360 Free-Cutting Brass (100% solid alloy: 61.5% Copper, 35.5% Zinc, 3% Lead) is the ideal substrate for deep 3D laser coin engraving. Avoid brass-plated steel or zinc core coin blanks; deep laser ablation cuts through thin plating, exposing contrasting dark zinc cores. Measure blank thickness and diameter with digital calipers prior to fixturing.",
    designPrep: "Export 3D relief artwork strictly as a 16-bit PNG heightmap file (65,536 depth levels). Convert heightmap into 250 vector slicing layers at 0.005mm (5 microns) per pass in LightBurn Galvo or EZCAD3 3D Slice. Configure dynamic hatch angle auto-rotation (+33° on every single pass). Dynamic hatch rotation eliminates directional line tracks and galvo trenching.",
    laserSetup: "Fixture brass coin flat in a metal alignment pocket jig. Converge dual red dot focus pointers precisely on the top brass surface. Ensure local HEPA metal fume extraction is active.",
    optics: {
      lens: "F-Theta Galvo Scan Lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist is turned off for galvo coin marking to prevent air turbulence. Keep enclosure HEPA exhaust active throughout the run."
    },
    exhaust: {
      configuration: "HEPA metal fume extraction filter system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local galvo HEPA exhaust sized for metal dust and fumes."
    },
    exactParameters: {
      parameterProfiles: {
        mopa: {
          sourceType: "MOPA Fiber Galvo (1064nm 50W ref)",
          power: "85% controller setting (Deep Ablation Pass) / 20% controller setting (Cleaning Pass)",
          speed: "1200 mm/s (Deep Ablation Pass) / 3000 mm/s (Cleaning Pass)",
          passes: "250 Sliced Layers (5-micron step per pass)",
          lineInterval: "0.020mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
          frequency: "35 kHz (Deep Ablation) / 80 kHz (Cleaning)",
          pulseWidth: "200 ns (Deep Ablation) / 60 ns (Cleaning)",
          provenance: "REFERENCE_STARTING_POINT",
          physicallyTested: false
        },
        qSwitched: {
          sourceType: "Conventional Q-Switched Fiber Galvo (1064nm 50W ref)",
          power: "85% controller setting (Deep Ablation) / 20% controller setting (Cleaning)",
          speed: "1200 mm/s (Deep Ablation) / 2800 mm/s (Cleaning)",
          passes: "250 Sliced Layers (5-micron step per pass)",
          lineInterval: "0.020mm hatch pitch",
          airAssist: "Off at marking point",
          focusOffset: "0.0mm (Sharp focus plane)",
          frequency: "28 kHz (Deep Ablation) / 60 kHz (Cleaning)",
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
    materialTestGuide: "Run a 50-pass 3D gradient test box on a scrap brass coin. Measure carved depth with digital calipers to confirm actual removal rate per pass (target: 5 microns per pass).",
    steps: [
      {
        title: "Substrate Verification & Acetone Degreasing",
        action: "Confirm coin blank is solid C360 brass and clean thoroughly with pure acetone or 99% IPA using a lint-free cloth. Solvent Safety: Acetone is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Removes oil and lubricants that cause uneven galvo beam absorption during early passes.",
        lookFor: "Clean, dry, reflective brass coin surface.",
        possibleFailure: "Engraving over finger oils causes dark discolored spots during first 20 passes.",
        detail: "Wipe coin blank with acetone-dampened cloth and place into alignment jig."
      },
      {
        title: "16-Bit Heightmap Slicing & Auto-Hatch Rotation Setup",
        action: "In LightBurn Galvo or EZCAD3: load 16-bit PNG heightmap, configure 250 sliced layers at 0.005mm step height, and set Auto Hatch Angle Rotate to +33° per pass.",
        why: "Rotating hatch angles by +33° on every pass eliminates directional trenching and galvo scan line tracks.",
        lookFor: "Sliced 3D layer preview in software with +33° hatch angle rotation enabled.",
        possibleFailure: "Using a single static hatch angle creates severe parallel scan trenches across 3D coin relief.",
        detail: "Load 16-bit heightmap, configure 250 slice layers, set 0.020mm hatch spacing, and enable +33° auto hatch rotation."
      },
      {
        title: "Interleaved Cleaning Pass & Thermal Delay Configuration",
        action: "Configure software to insert a fast low-power cleaning pass (3000 mm/s @ 20% power) every 20 ablation passes, and set a 2-second delay per pass.",
        why: "Cleaning passes burn off accumulated brass slag oxidation; thermal delay prevents brass coin expansion distortion.",
        lookFor: "Cleaning pass rule active in multi-pass layer manager.",
        possibleFailure: "Omitting cleaning passes allows black oxide slag to build up, stopping deep beam penetration.",
        detail: "Set cleaning pass interval to 20 passes and enable 2s inter-pass pause for thermal cooling."
      },
      {
        title: "Precision Galvo Focus Alignment & Deep Execution",
        action: "Align dual red dot focus pointers to top brass face, enable HEPA fume extraction, and execute 250-layer 3D galvo ablation run.",
        why: "Delivers peak 1064nm pulse energy density required to vaporize 5 microns of brass per pass down to 1.25mm total depth.",
        lookFor: "Deep tactile 3D relief forming smoothly with yellow/white plasma spark glow.",
        possibleFailure: "Out-of-focus galvo beam fails to ablate brass, producing dull un-carved surface discoloration.",
        detail: "Converge focus pointers, close galvo enclosure doors, start HEPA exhaust, and press Start."
      },
      {
        title: "Chemical Patina Antiquing & High-Relief Buffing",
        action: "Dip carved brass coin into Liver of Sulfur solution for 30 seconds to turn surface jet black, then buff high-relief highlights with 2000-grit sandpaper and Brasso polish.",
        why: "Chemical oxidation darkens deep carved recesses; buffing reveals gleaming brass highlights, creating dramatic 3D contrast.",
        lookFor: "Vibrant 3D contrast between jet-black carved recesses and polished brass high points.",
        possibleFailure: "Over-sanding removes fine detail from high-relief highlights.",
        detail: "Dip coin in Liver of Sulfur bath, rinse under cold water, dry, and buff high points gently with 2000-grit paper and Brasso."
      }
    ],
    troubleshooting: [
      { issue: "Deep carved 3D relief has visible parallel scan lines or trenching", likelyCause: "Auto Hatch Angle Rotate was disabled in galvo software settings", howToConfirm: "Parallel directional line tracks visible under magnification", fix: "Enable 'Auto Hatch Angle Rotate' and set rotation increment to +33° per pass." },
      { issue: "Ablation stops progressing after 50 passes / dark crust builds up", likelyCause: "Interleaved cleaning passes were omitted, causing slag oxidation buildup", howToConfirm: "Heavy black brass slag crust visible inside carved recesses", fix: "Configure software to run a high-speed cleaning pass (3000 mm/s @ 20% power) every 20 passes." },
      { issue: "Coin blank warps or shifts out of focus during multi-pass run", likelyCause: "Thermal heat accumulation across 250 continuous passes without cooling delays", howToConfirm: "Brass coin feels scalding hot and lifts off jig corners", fix: "Insert a 2-second pause delay between passes or pause job for 30 seconds every 50 passes." }
    ],
    proTips: [
      "Rotate galvo hatch angle by +33° on every pass to eliminate directional line tracks during deep 3D metal ablation.",
      "Schedule a fast low-power cleaning pass every 20 passes to burn off brass slag oxidation.",
      "Dip 3D carved brass coins in Liver of Sulfur solution and buff high points with 2000-grit paper for dramatic antiqued contrast."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. 1064nm galvo beams pose intense specular reflection risks off polished metal. Use active HEPA metal fume extraction. Solvent Safety: Acetone and IPA are flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 16
  {
    id: "ceramic-sub-surface-enamel",
    title: "Sub-Surface Vitrified Enamel Laser Marking on Porcelain & Ceramic Ware",
    category: "Material Guide",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "14 min",
    estimatedTime: "15 min prep/drying, 10 min machine run",
    targetMaterial: "Glazed Porcelain & Stoneware Ceramic Ware",
    materials: [
      "Glazed Porcelain / Stoneware Ceramic Plates, Tiles, or Mugs",
      "Laser Ceramic Marking Compound Paste (CerMark LDM6000 / TherMark LMM14)",
      "95% Ethanol / Denatured Alcohol Solvent",
      "Distilled Water",
      "Lint-Free Microfiber Towel"
    ],
    tools: [
      "CO2 Laser (50W–100W class)",
      "HVLP Precision Airbrush / Foam Applicator Brush",
      "LightBurn Software",
      "Rotary Attachment (for cylindrical mugs)",
      "Digital Vernier Caliper",
      "Soft Non-Abrasive Washing Sponge"
    ],
    summary: "High-temperature laser bonding protocol fusing molybdenum and glass frit marking compounds into high-fired porcelain and stoneware glazes, detailing thermal fusion reaction mechanisms, wet-film spray coating thickness, slow scan speed parameter tuning, and dishwasher-safe vitrification testing.",
    image: IMG.laser_badge,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 50W–100W+ class) or Fiber galvo lasers (1064nm) with CerMark metal oxide paste. CO2 laser light is strongly absorbed by ceramic glaze and thermal compound frits.",
      unsuitableLasers: "Standard diode lasers (<20W) generally lack speed and thermal conduction density to fuse molybdenum-glass frit into high-fired porcelain glaze.",
      minimumSpecs: "Enclosed laser system, active local fume extraction, airbrush spray booth.",
      safetyHazards: "CerMark paste contains metal oxides and organic solvents. Avoid inhalation of spray aerosol or direct skin contact. Flammable ethanol solvent.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Porcelain and stoneware ceramics feature a hard silica glaze ($SiO_2 + Al_2O_3$) fired above $1200^\circ\text{C}$. CerMark LDM6000 ceramic marking paste contains molybdenum and glass frit glass particles suspended in an ethanol carrier. Under focused laser heat ($1100^\circ\text{C}$ localized thermal pulse), the glass frit melts and cross-links molybdenum particles directly into the molten top ceramic glaze layer, creating a microwave-safe, dishwasher-safe, acid-resistant jet-black mark.",
    designPrep: "In LightBurn, prepare vector graphics or high-density text. Set line interval to 0.050mm to 0.065mm (~390 - 500 LPI) using $LPI = 25.4 / lineInterval$. High line density ensures continuous thermal pulse overlap required for full glaze cross-linking. For supported GCode devices, enable Overscanning default.",
    laserSetup: "For flat plates/tiles: Secure ceramic piece flat on bed. For mugs: Mount in rotary attachment and level top apex horizontally with a bubble level. Focus laser precisely on top CerMark dried film plane. Ensure local fume extraction is running.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow (2-5 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist protects optics without blowing un-bonded CerMark powder off the un-engraved ceramic."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed. Capture fumes at the source and follow machine-manufacturer and applicable local safety requirements."
    },
    exactParameters: {
      power: "45% controller setting (CO2 60W reference)",
      speed: "120 mm/s (CO2 slow scan speed reference for thermal transfer)",
      passes: "1",
      lineInterval: "0.050mm (~500 LPI) - verify via Interval Test",
      airAssist: "Low trickle flow (2-5 PSI)",
      focusOffset: "0.0mm (Surface film focus)",
      lightburnMode: "Fill / Image",
      frequency: "Standard CO2 pulse / RF modulation",
      provenance: "REFERENCE_STARTING_POINT",
      sourceName: null,
      sourceReference: null,
      physicallyTested: false,
      lastEditorialReview: "2026-11"
    },
    materialTestGuide: "Dilute CerMark paste 1:1 with ethanol and spray a thin, even coat onto a scrap ceramic tile. Test slow scan speeds (80 to 180 mm/s) against power settings (35% to 60%). Wash the tile after laser processing: the correct setting leaves a jet-black, smooth mark that withstands firm scrubbing with a scotch-brite pad.",
    steps: [
      {
        title: "CerMark Compound Dilution & Airbrush Spray Coating",
        action: "Dilute CerMark LDM6000 paste 1:1 with 95% Ethanol solvent and spray a thin 20-micron wet coat onto clean ceramic glaze using an airbrush at 18 PSI. Solvent Safety: Ethanol is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser.",
        why: "Proper coating thickness is critical: too thin yields light grey marks; too thick absorbs laser heat without fusing to the underlying ceramic glaze.",
        lookFor: "Uniform pale pink/grey powder coat across ceramic glaze after 5 minutes drying.",
        possibleFailure: "Brushing heavy thick coats with a paintbrush causes CerMark film to flake off during laser processing.",
        detail: "Mix CerMark 1:1 with ethanol, spray a 20-micron film with airbrush, and wait 5 minutes until dry to touch."
      },
      {
        title: "Ceramic Fixturing & Focal Plane Alignment",
        action: "Place coated ceramic plate flat on bed (or level mug in rotary attachment) and focus laser height precisely to the top CerMark film plane.",
        why: "Peak focal power density is required to instantly drive localized surface temperature to $1100^\circ\text{C}$.",
        lookFor: "Laser nozzle focused precisely to top CerMark film surface plane.",
        possibleFailure: "Defocusing lowers thermal temperature, causing un-bonded powder that washes off completely under water.",
        detail: "Position ceramic part, drop focal gauge to top dried film plane, and lock Z-axis height."
      },
      {
        title: "Slow Scan Speed Parameter & High LPI Execution",
        action: "In LightBurn: set scan speed to 120 mm/s @ 45% power (CO2 60W), line interval to 0.050mm (~500 LPI), enable local exhaust, and run job.",
        why: "Slow scan speed allows sufficient thermal dwelling time for molybdenum-glass frit fusion into ceramic glaze.",
        lookFor: "Laser pulse creating a glowing orange thermal spot along beam path.",
        possibleFailure: "Running scan speed too fast (>300 mm/s) fails to melt glaze, resulting in grey washable marks.",
        detail: "Configure 120 mm/s speed, 45% power, 0.050mm line interval, start exhaust, and run pass."
      },
      {
        title: "Tap Water Wash-Off & Dishwasher-Safe Quality Audit",
        action: "Rinse ceramic piece under warm tap water with a soft non-abrasive sponge to wash off un-bonded CerMark powder, then dry with microfiber towel.",
        why: "Un-bonded powder washes away cleanly, leaving only the permanently cross-linked molybdenum-silica enamel mark.",
        lookFor: "Deep, lustrous jet-black mark flush with ceramic glaze that withstands dishwasher cleaning.",
        possibleFailure: "If black mark washes off completely, laser scan speed was too fast or coating was applied too thick.",
        detail: "Rinse ceramic piece under warm tap water with sponge, dry with microfiber towel, and inspect black mark."
      }
    ],
    troubleshooting: [
      { issue: "Black mark washes off under tap water or rubs off easily", likelyCause: "Laser scan speed too fast, power too low, or CerMark coating sprayed too thick", howToConfirm: "Powder layer flakes off in chunks leaving raw glaze underneath", fix: "Apply a thinner 20-micron spray coat, lower scan speed to 120 mm/s, and increase laser power by 10%." },
      { issue: "Mark appears light grey or faded instead of jet black", likelyCause: "CerMark coating was applied too thin or laser focus was off-plane", howToConfirm: "Sparse grey powder coverage before laser pass", fix: "Re-spray a uniform pale pink 20-micron film coat and re-verify focal height." },
      { issue: "Ceramic glaze cracking or crazing along mark edges", likelyCause: "Laser power far too high or slow speed over-heated ceramic substrate mass", howToConfirm: "Hairline spiderweb cracks in glaze around black mark", fix: "Increase scan speed by 15% and lower laser power." }
    ],
    proTips: [
      "Spray CerMark paste diluted 1:1 with ethanol using an airbrush; thin 20-micron coats yield far darker marks than thick brushed coats.",
      "Run CO2 lasers at slow scan speeds (100-140 mm/s) to allow sufficient thermal dwell time for $1100^\circ\text{C}$ glaze vitrification.",
      "Vitrified CerMark marks on high-fired porcelain are 100% food-safe, microwave-safe, and dishwasher-safe."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Avoid skin contact and aerosol inhalation during CerMark spray coating. Use effective local exhaust sized for the machine enclosure. Solvent Safety: Ethanol is flammable. Use solvents only in well-ventilated areas away from open flames, electrical sparks, and hot surfaces, allowing complete surface evaporation before operating the laser."
  },

  // 17
  {
    id: "canvas-painting-photo-laser",
    title: "Multi-Layer Paint Vaporization Photo Art on Stretched Canvas",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "14 min",
    estimatedTime: "24-hour curing phase, 20 min laser execution",
    targetMaterial: "Multi-Layer Painted Cotton/Linen Canvas Board",
    materials: [
      "Artist Canvas Board or Stretched Cotton Canvas",
      "Acrylic Spray Paints (Base Coat Jet Black, Mid Coat Crimson Red, Top Coat Flat White Primer)",
      "Clear Satin Acrylic UV Sealant Spray",
      "Lint-Free Microfiber Cloth"
    ],
    tools: [
      "Diode Laser (10W-20W optical output) or CO2 Laser (40W reference)",
      "LightBurn Software",
      "Digital Vernier Caliper",
      "Spray Booth / Well-Ventilated Spraying Area"
    ],
    summary: "Controlled multi-layer paint laser vaporization protocol exposing underlying color coats on stretched cotton canvas, detailing paint viscosity layering, curing intervals, image dithering algorithms, power density threshold calibration, soot-free low air assist settings, and UV protective sealing.",
    image: IMG.wood_action,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength, 10W–20W optical output) or CO2 lasers (10.6µm wavelength, 40W–50W class). Blue diode lasers (450nm) offer high absorption in organic paint pigments.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm, 50W+) reflect off or burn through light canvas backing uncontrollably.",
      minimumSpecs: "Enclosed laser chassis or safety enclosure, active local VOC exhaust extraction, low-pressure air assist system.",
      safetyHazards: "Vaporizing acrylic spray paints produces volatile organic compounds (VOCs), micro-soot aerosols, and pigment fumes. Solvent Flammability: Paint aerosol propellants and solvents are highly flammable. Allow 24 hours for complete solvent evaporation before placing under laser.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select triple-primed 100% cotton canvas boards or stretched canvas frames. Spray paint coats must be applied thinly and uniformly: Base Coat (Jet Black, 2 thin coats, 2-hour dry), Mid Coat (Vibrant Crimson Red, 2 thin coats, 2-hour dry), Top Coat (Flat White Primer, 1 light coat). Allow 24 hours full curing at 20°C. Incomplete curing leaves sticky uncured resin that gums up during laser ablation instead of cleanly sublimating.",
    designPrep: "In LightBurn, import photo artwork. Apply dithering ('Atkinson' or 'Jarvis'). For Stucki dithering, note that Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. Invert image grayscale so high-laser-power output vaporizes top white+red coats down to black in shadow areas, while low-power output melts only top white coat to reveal red in highlights. Set line interval strictly to 0.10mm (254 LPI) calculated via LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default to prevent edge darkening.",
    laserSetup: "Secure painted canvas flat on laser honeycomb bed using hold-down pins. Focus laser beam precisely on top white paint surface. Set air assist to a low trickle flow (2–5 PSI) to prevent blowing paint soot onto sticky laser cuts.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low trickle flow (2-5 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Low air assist prevents soot re-deposition without disturbing heated paint edges."
    },
    exhaust: {
      configuration: "Local enclosure exhaust with activated carbon stage",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed."
    },
    exactParameters: {
      diode20W: {
        sourceType: "20W Optical Output Blue Diode Laser (450nm ref)",
        power: "18% for top layer reveal (Red) / 32% for base layer reveal (Black)",
        speed: "3500 mm/min",
        passes: 1,
        lineInterval: "0.10mm (254 LPI) - verify via Interval Test",
        airAssist: "Low trickle flow (2-5 PSI)",
        focusOffset: "0.0mm (Surface focus)",
        lightburnMode: "Dither / Grayscale",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      co2_40W: {
        sourceType: "CO2 Laser (10.6µm 40W ref)",
        power: "12% for top layer reveal / 22% for base layer reveal",
        speed: "6000 mm/min",
        passes: 1,
        lineInterval: "0.10mm (254 LPI)",
        airAssist: "Low trickle flow (2-5 PSI)",
        focusOffset: "0.0mm (Surface focus)",
        lightburnMode: "Dither / Grayscale",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Prepare a 10-step power test grid on a scrap portion of painted canvas (10% to 40% power at 3500 mm/min). Note exact power thresholds where Top Layer (White) turns into Mid Layer (Red), and where Mid Layer turns into Base Layer (Black).",
    steps: [
      {
        title: "Layering Protocol & Multi-Coat Curing",
        action: "Apply 2 thin coats of Jet Black acrylic base paint, 2 thin coats of Crimson Red mid paint, and 1 light coat of Flat White top primer to canvas. Allow 24 hours curing.",
        why: "Fully cured paint sublimates into clean dry gas under laser exposure rather than melting into tacky resin sludge.",
        lookFor: "Hard, tack-free matte white canvas surface.",
        possibleFailure: "Engraving on tacky, uncured paint causes gummy melt rings and soot entrapment.",
        detail: "Spray paint in light sweeping motions from 25cm distance, allowing 2 hours dry time between color layers and 24 hours final cure."
      },
      {
        title: "Image Processing & Dithering Calibration",
        action: "Import image into LightBurn, select Atkinson or Jarvis dithering, set line interval to 0.10mm (254 LPI), and invert grayscale where appropriate for layer exposure logic.",
        why: "Dithering converts photo gradients into discrete dot densities. 254 LPI matches 0.10mm beam spot overlap without burning through underlying canvas cotton.",
        lookFor: "High-contrast dither preview showing clear dot density variation across shadow and highlight zones.",
        possibleFailure: "Excessive LPI (>300) causes adjacent laser dots to overlap, burning completely through all paint layers down to raw fabric.",
        detail: "Load photo, set 0.10mm interval, select Atkinson dither, enable invert if target background requires white top layer retention."
      },
      {
        title: "Laser Calibration & Alignment",
        action: "Pin canvas flat to honeycomb bed, focus laser beam onto top paint surface, and verify low-pressure air assist (2-5 PSI) and active VOC exhaust.",
        why: "Flat canvas prevents focal drift across large artwork; low air assist prevents soot re-deposition without disturbing molten paint margins.",
        lookFor: "Laser focused sharply; low trickle air flow detectable at nozzle.",
        possibleFailure: "High pressure air assist (30+ PSI) blows black soot particles deep into warm white paint pores.",
        detail: "Level canvas board, adjust z-height focus to top paint surface, turn on exhaust, set air assist to low trickle."
      },
      {
        title: "Raster Vaporization Run",
        action: "Execute dither raster pass at calibrated speed and power (e.g. 3500 mm/min @ 18%-32% power).",
        why: "Controlled energy density vaporizes 15–30 microns of paint per pulse to reveal target color coats.",
        lookFor: "Vibrant red and black colors emerging cleanly behind laser head as white top coat sublimates.",
        possibleFailure: "Setting power too high burns through black base coat, exposing brown raw cotton fabric fibers.",
        detail: "Close enclosure, check safety eyewear, press Start, monitor early passes for correct color exposure depth."
      },
      {
        title: "Microfiber Soot Wipe & Clear Protective Sealing",
        action: "Gently wipe canvas surface with a clean dry microfiber cloth to remove loose paint ash, then apply 2 thin coats of Clear Satin Acrylic Sealer.",
        why: "Microfiber removes loose carbon ash; satin acrylic sealer locks in color vibrancy and protects revealed paint layers against UV fading.",
        lookFor: "Clean, dust-free multi-color photo artwork with uniform satin luster.",
        possibleFailure: "Wiping canvas with wet solvent (alcohol/acetone) dissolves painted layers, destroying fine detail.",
        detail: "Dry-brush ash away with soft microfiber, spray light coat of clear acrylic seal from 30cm, allow 1 hour dry time."
      }
    ],
    troubleshooting: [
      {
        symptom: "Top white coat melts into grey sticky sludge instead of revealing sharp red/black colors",
        probableCause: "Paint was not fully cured (less than 24h dry time) or line interval was set too tight",
        correctiveAction: "Allow canvas to cure for 24 hours at 20°C and increase line interval to 0.10mm (254 LPI)."
      },
      {
        symptom: "Laser burns through all paint layers exposing brown raw cotton fabric",
        probableCause: "Power setting too high or travel speed too slow for 20W diode laser",
        correctiveAction: "Increase raster speed by 20% or lower laser power setting by 5-10%."
      },
      {
        symptom: "Black soot halo rings contaminate light white and red paint areas",
        probableCause: "Air assist pressure set too high or exhaust extraction insufficient",
        correctiveAction: "Reduce air assist to low trickle flow (2-5 PSI) and verify active enclosure exhaust."
      }
    ],
    proTips: [
      "Paint MUST be 100% cured for 24 hours; damp or tacky paint melts into a sticky sludge instead of cleanly sublimating.",
      "Keep laser air assist at low trickle (2-5 PSI) so paint ash isn't blown back into sticky laser tracks.",
      "Apply clear satin acrylic sealer after wiping away dry soot to protect revealed paint layers from oxidation and UV light."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Vaporizing acrylic paint produces organic fumes and VOC aerosols. Active fume extraction with activated carbon media is required. Solvent Safety: Spray paint propellants and alcohol cleaning solvents are flammable. Allow complete solvent evaporation before operating laser."
  },

  // 18
  {
    id: "carbon-fiber-plate-cutting",
    title: "Precision Laser Cutting 1.5mm Carbon Fiber Sheets with Zero Edge Delamination",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "16 min",
    estimatedTime: "15 min setup/fixturing, 12 min multi-pass cut",
    targetMaterial: "3K Twill Weave Carbon Fiber Reinforced Polymer (CFRP) Plate (1.5mm thick)",
    materials: [
      "3K Twill Weave Carbon Fiber Sheet (1.5mm thick, thermoset epoxy resin matrix)",
      "Sacrificial Aluminum Honeycomb Grid or Sacrificial Aluminum Spacers",
      "Nitrile Protective Handling Gloves"
    ],
    tools: [
      "High-Power CO2 Laser (100W+ class) or 1064nm Fiber Laser System",
      "High-Pressure Nitrogen / Air Assist System (30-50 PSI)",
      "Heavy-Duty Industrial HEPA + Carbon Fume Extractor System",
      "20x Optical Jeweler's Loupe / Inspection Microscope",
      "LightBurn Software"
    ],
    summary: "Industrial multi-pass thermal management protocol for cutting 1.5mm carbon fiber reinforced polymers (CFRP) without epoxy matrix thermal degradation or edge delamination, detailing anisotropic thermal conductivity physics, multi-pass low-heat vector strategies, nitrogen gas purging, HEPA dust containment, and micro-edge structural inspection.",
    image: IMG.machine_fiber,
    prerequisites: {
      compatibleLasers: "High-power CO2 lasers (10.6µm wavelength, 100W–150W+ class) or 1064nm pulsed Fiber lasers. 10.6µm beam wavelength is absorbed by both carbon fibers and epoxy resin matrix.",
      unsuitableLasers: "Diode lasers (<20W) and low-power CO2 lasers (<60W) lack power density for CFRP cutting, resulting in extreme thermal matrix destruction and charring.",
      minimumSpecs: "Fully sealed machine enclosure, dedicated HEPA multi-stage fume extraction, high-pressure gas assist regulator (30-50 PSI).",
      safetyHazards: "CRITICAL CONDUCTIVE DUST & TOXIC FUME HAZARD: Carbon fiber laser cutting generates fine airborne carbon micro-dust which is electrically conductive and short-circuits machine electronics, power supplies, and stepper motors. Epoxy pyrolysis releases toxic bisphenol A, aromatic amines, and carbon monoxide. Active sealed HEPA extraction and P3 respiratory protection are mandatory.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use rigid, fully cured 3K twill weave carbon fiber sheets bonded with thermoset epoxy matrix (1.5mm nominal thickness). Inspect sheet for voids or delamination before cutting. Note: Carbon fibers possess ultra-high thermal conductivity along fiber axes (~800 W/mK) while epoxy matrix decomposes at ~300°C. Single slow pass cutting concentrates heat, decomposing epoxy matrix far beyond the cut line (Heat Affected Zone) and causing edge fiber fraying.",
    designPrep: "In LightBurn, import vector cut paths. Lead-in and lead-out vectors (2mm arc) must be used for all internal and external contours to prevent dwell-hole thermal burns at geometry corners. Configure job into a multi-pass strategy (e.g. 6 to 10 fast passes rather than 1 slow pass). For supported GCode devices, enable Overscanning default.",
    laserSetup: "Elevate CFRP sheet on sacrificial aluminum spacers above honeycomb bed to allow high-pressure gas assist stream to clear kerf ejecta freely. Connect high-pressure air or nitrogen gas assist (30-50 PSI). Verify HEPA extraction is fully sealed and operating.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.5 inch or 3.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure nitrogen or air assist (30-50 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High pressure gas stream clears molten epoxy ash and suppresses carbon edge oxidation."
    },
    exhaust: {
      configuration: "Industrial sealed HEPA + activated carbon extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for conductive carbon fiber micro-dust and epoxy VOCs."
    },
    exactParameters: {
      co2_100W: {
        sourceType: "CO2 Laser (10.6µm 100W ref)",
        power: "85% controller setting",
        speed: "35 mm/s (Multi-pass vector cut speed)",
        passes: 8,
        lineInterval: null,
        airAssist: "High pressure gas assist (30-50 PSI)",
        focusOffset: "-0.75mm (Focal point set at mid-thickness of 1.5mm plate)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a multi-pass cut test on scrap 1.5mm carbon fiber. Test pass counts from 4 to 10 at 35 mm/s @ 85% power. Inspect kerf under 20x magnification to identify the minimum pass count that achieves a clean drop-out cut with zero epoxy recession.",
    steps: [
      {
        title: "Substrate Elevating & Conductive Dust Containment Setup",
        action: "Place carbon fiber sheet onto aluminum standoff spacers, check local HEPA extraction enclosure seals, and wear nitrile gloves and P3 mask.",
        why: "Elevating sheet prevents back-reflection kerf burns; sealed HEPA system prevents conductive carbon dust from short-circuiting laser electronics.",
        lookFor: "CFRP sheet held level on standoffs; enclosure sealed; extraction pulling active negative pressure.",
        possibleFailure: "Cutting directly on flat steel bed traps hot gas and carbon dust, scorching bottom plate face.",
        detail: "Position standoffs away from cut path, double check bed level, verify HEPA filter airflow indicator."
      },
      {
        title: "Vector Path Lead-In & Multi-Pass Strategy Setup",
        action: "In LightBurn, add 2mm arc lead-in/lead-outs on vector paths and set 8 passes @ 35 mm/s and 85% power.",
        why: "Lead-ins prevent initial beam piercing burn holes on part contours; fast multi-pass strategy limits epoxy heat buildup.",
        lookFor: "Multi-pass vector layer active with smooth lead-in arcs on geometry edges.",
        possibleFailure: "Single pass at slow speed (4 mm/s) vaporizes epoxy matrix 2mm sideways into part walls.",
        detail: "Configure 8 pass count, set 35 mm/s cut speed, set 85% power, add 2mm lead-in arc."
      },
      {
        title: "High-Pressure Gas Assist & Focal Alignment",
        action: "Set gas regulator to 30-50 PSI (clean dry air or nitrogen) and set laser z-focus offset to -0.75mm (mid-plate depth).",
        why: "Mid-thickness focus balances power density across 1.5mm depth; high pressure gas flushes molten matrix ejecta.",
        lookFor: "Strong gas jet exiting nozzle; focal point positioned 0.75mm below top surface.",
        possibleFailure: "Low pressure air assist (<10 PSI) fails to clear kerf, causing resin re-solidification and flame flare-ups.",
        detail: "Adjust z-bed height to mid-thickness focus, open gas assist valve to 40 PSI, verify nozzle alignment."
      },
      {
        title: "Multi-Pass Cutting Execution",
        action: "Close laser enclosure, verify safety eyewear, start HEPA exhaust, and press Start for the 8-pass cutting cycle.",
        why: "Rapid sequential passes allow thermal dissipation between beam sweeps while progressively deepening kerf.",
        lookFor: "Bright, concentrated blue-white cut spark with zero sustained yellow flame flaring.",
        possibleFailure: "Sustained orange flame indicates epoxy matrix ignition due to insufficient gas assist flow.",
        detail: "Monitor cut progress through laser-safe enclosure window, ensuring part remains stable on standoffs."
      },
      {
        title: "Edge Matrix Microscopy & Delamination Inspection",
        action: "Remove cut carbon part using nitrile gloves, clean edge with IPA wipe, and inspect cut face under 20x loupe.",
        why: "Verifies smooth fiber end-face cuts and confirms epoxy matrix extends cleanly to the cut edge without voids.",
        lookFor: "Sharp 90° edge, tight carbon weave pattern, zero void delamination between epoxy layers.",
        possibleFailure: "Receded white epoxy matrix leaving loose, frayed carbon threads indicates excessive thermal accumulation.",
        detail: "Examine cut edge under 20x magnification, check for matrix recession or fiber splitting."
      }
    ],
    troubleshooting: [
      {
        symptom: "Cut edge exhibits loose carbon fibers and receded epoxy matrix (delamination)",
        probableCause: "Heat accumulation from cutting too slow in a single pass or inadequate cooling between passes",
        correctiveAction: "Switch to multi-pass cutting (8 fast passes at 35 mm/s) and increase nitrogen gas assist pressure to 40-50 PSI."
      },
      {
        symptom: "Part fails to drop out after 8 passes",
        probableCause: "Focal point set to top surface instead of mid-thickness, or beam power drop at lower passes",
        correctiveAction: "Set focal offset -0.75mm into plate body and increase pass count to 10."
      },
      {
        symptom: "Machine electronics experience intermittent resets or stepper motor glitches",
        probableCause: "Conductive carbon fiber micro-dust escaped enclosure and reached machine circuit boards",
        correctiveAction: "Power off machine immediately, vacuum dust with HEPA vacuum, and inspect/seal enclosure extraction ducting."
      }
    ],
    proTips: [
      "Multi-pass cutting (8 fast passes @ 35 mm/s) dissipates heat between sweeps, completely preventing epoxy matrix pyrolysis.",
      "Use nitrogen gas assist (40 PSI) instead of oxygen-bearing air to prevent edge carbon combustion oxidation.",
      "Wear nitrile gloves when handling cut carbon plates to prevent micro-carbon splinter insertion into skin."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. CRITICAL DUST HAZARD: Carbon fiber dust is electrically conductive and a severe lung irritant. HEPA filtration and sealed enclosure extraction are mandatory. Wear P3/FFP3 respirator. Solvent Safety: IPA cleaner is flammable; use in well-ventilated area away from sparks."
  },

  // 19
  {
    id: "mother-of-pearl-inlay",
    title: "Laser Cutting Mother-of-Pearl Nacre Shell Veneers for Guitar Inlays",
    category: "Project",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "15 min",
    estimatedTime: "20 min design/kerf prep, 15 min shell cut & cavity engrave, 30 min glue/sanding",
    targetMaterial: "Natural Mother-of-Pearl (Nacre) Shell Veneer Sheets (0.3mm thick) & Hardwood Fretboard",
    materials: [
      "Natural Mother-of-Pearl / Abalone Nacre Shell Sheets (0.3mm thick with double-sided paper transfer tape backing)",
      "Ebony or Rosewood Fretboard / Hardwood Blank",
      "Black-Dyed Medium CA (Cyanoacrylate) Glue",
      "Silicon Carbide Sandpaper (400, 600, 800, 1200 grit)",
      "Isopropyl Alcohol (IPA)"
    ],
    tools: [
      "CO2 Laser (40W–60W class)",
      "LightBurn Software",
      "Digital Vernier Caliper & Jeweler's Loupe (10x)",
      "P3 / N99 Particulate Respirator",
      "Fine Luthier Sanding Block"
    ],
    summary: "High-precision vector cutting protocol for fragile aragonite mother-of-pearl (nacre) shell veneers and matching hardwood pocket engraving, detailing crystalline thermal shock mitigation, negative kerf offset calculation (-0.05mm to -0.08mm), CA glue bonding, and luthier flush sanding.",
    image: IMG.shell_mother_pearl,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–60W class). 10.6µm light is efficiently absorbed by calcium carbonate shell and organic conchiolin matrix.",
      unsuitableLasers: "Diode lasers (450nm) pass through semi-translucent nacre shell layers, causing heat buildup and shattering.",
      minimumSpecs: "Enclosed CO2 laser, fine z-height adjustment, active local exhaust extraction, clean compressed air assist.",
      safetyHazards: "HIGH DUST RESPIRATORY HAZARD: Calcium carbonate (CaCO3) and conchiolin shell micro-dust generated during laser vaporization and post-sanding causes severe lung damage, silicosis-like symptoms, and toxic organic allergic responses. Wear P3 / N99 respirator and use active exhaust extraction.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use genuine natural mother-of-pearl (nacre) or abalone shell veneer sheets (0.3mm uniform thickness laminated onto paper transfer tape). Shell consists of micro-hexagonal aragonite platelets bound by organic conchiolin proteins. High thermal stress causes shell delamination and cracking. Inspect shell for micro-fractures prior to fixturing.",
    designPrep: "In LightBurn, prepare inlay vector art. Create two path layers: Layer 1 (Shell Vector Cut) with a Kerf Inset of -0.05mm to -0.08mm (shrinking shell outline slightly); Layer 2 (Wood Pocket Engrave) with 0.0mm kerf inset. Pocket engraving resolution: 0.05mm line interval (508 LPI) using LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Affix shell sheet securely onto honeycomb bed using transfer tape to prevent small cut pieces from falling through or blowing away. Focus beam precisely on top shell surface plane. Set clean air assist to medium flow (15-20 PSI).",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) short focal length lens (1.5 inch or 2.0 inch)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Medium clean air assist (15-20 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist clears vaporized shell ash and protects focus lens."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for calcium carbonate dust and organic fumes."
    },
    exactParameters: {
      co2_50W: {
        sourceType: "CO2 Laser (10.6µm 50W ref)",
        power: "28% controller setting (Shell Cut) / 35% controller setting (Wood Pocket Engrave)",
        speed: "18 mm/s (Shell Cut) / 250 mm/s (Wood Pocket Engrave)",
        passes: "2 passes for shell cut (prevents thermal shock) / 1 pass for wood pocket",
        lineInterval: "0.050mm (508 LPI for pocket engrave)",
        airAssist: "Medium air assist (15-20 PSI)",
        focusOffset: "0.0mm (Surface focus)",
        lightburnMode: "Line (Shell) / Fill (Pocket)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a test vector cut on a scrap corner of 0.3mm shell veneer. Test 1-pass vs 2-pass cuts at 18 mm/s @ 25-30% power. Confirm that 2 light passes achieve clean separation without edge cracking or burning.",
    steps: [
      {
        title: "Shell Substrate Mounting & Transfer Tape Fixturing",
        action: "Apply paper transfer tape to both sides of 0.3mm mother-of-pearl sheet, tape sheet down flat to honeycomb bed, and check local exhaust.",
        why: "Transfer tape supports delicate shell pieces during cutting, catching small inlay fragments and preventing thermal scorch.",
        lookFor: "Shell sheet held perfectly flat on bed without buckling.",
        possibleFailure: "Untaped shell pieces get blown around bed by air assist, breaking fragile tips.",
        detail: "Apply transfer tape smoothly, burnish down with squeegee, pin corners flat to laser bed."
      },
      {
        title: "Kerf Offset Calibration & Shell Vector Cut Execution",
        action: "In LightBurn, set -0.06mm Kerf Inset on shell cut vector. Execute 2 light passes at 18 mm/s @ 28% power with 20 PSI air assist.",
        why: "Negative kerf offset compensates for laser beam width, ensuring shell snaps flush into wood pocket; 2 passes prevent thermal shock fractures.",
        lookFor: "Clean, crisp vector cuts through shell without brown scorching or radial micro-cracks.",
        possibleFailure: "Executing 1 high-power pass (60% power) shatters aragonite platelets into fragments.",
        detail: "Apply -0.06mm kerf inset, set 2-pass cut layer, verify 20 PSI air assist, press Start."
      },
      {
        title: "Matching Wood Fretboard Pocket Engraving",
        action: "Place ebony/rosewood fretboard on bed, focus laser to top surface, and engrave pocket cavity at 250 mm/s @ 35% power, 0.05mm line interval (depth ~0.35mm).",
        why: "Creates a flat-bottomed receiving cavity slightly deeper than 0.3mm shell thickness for flush sanding.",
        lookFor: "Clean pocket with crisp vertical walls and flat bottom floor.",
        possibleFailure: "Uneven pocket floor causes shell inlay to sit tilted or crack under sanding pressure.",
        detail: "Focus laser on wood face, run pocket fill at 0.05mm interval, blow pocket clean of wood dust."
      },
      {
        title: "Inlay Press-Fitting & Black CA Bonding",
        action: "Pry shell inlay off transfer tape, dry-fit into wood pocket, apply 1 drop of black-dyed medium CA glue, press flush, and let cure 30 minutes.",
        why: "Black CA glue fills microscopic kerf gaps around shell edges, blending seamlessly with dark ebony wood.",
        lookFor: "Inlay seated fully flat inside pocket with black CA glue weeping around perimeter.",
        possibleFailure: "Trapped air beneath shell holds inlay proud of fretboard surface, risking sand-through.",
        detail: "Dry fit shell with tweezers, apply black CA glue, press firmly for 30s with plastic block, allow 30 min full cure."
      },
      {
        title: "Flush Sanding & Luthier Polish",
        action: "Wearing P3 respirator, sand inlay flush with fretboard using 400 grit through 1200 grit silicon carbide paper on a flat wooden block.",
        why: "Removes excess CA glue and levels shell flush with wood face while restoring deep iridescent nacre luster.",
        lookFor: "Seamless, glass-smooth surface transition between iridescent shell and dark wood.",
        possibleFailure: "Sanding without a flat block rounds off wood edges or wears through thin 0.3mm shell.",
        detail: "Wear P3 mask, wet-sand with flat wooden block from 400 to 1200 grit, wipe clean with IPA."
      }
    ],
    troubleshooting: [
      {
        symptom: "Shell veneer shatters or develops radial cracks during laser vector cut",
        probableCause: "Thermal shock from 1 heavy high-power cut pass instead of 2 light passes",
        correctiveAction: "Lower power setting by 25% and switch to a 2-pass cut strategy with 20 PSI air assist."
      },
      {
        symptom: "Shell inlay will not fit into laser engraved wood pocket (too tight)",
        probableCause: "Kerf Inset was left at 0.0mm instead of applying negative offset (-0.05mm to -0.08mm)",
        correctiveAction: "Apply a -0.06mm Kerf Inset to shell cut path in LightBurn and re-cut."
      },
      {
        symptom: "Gaps visible around inlay perimeter after gluing and sanding",
        probableCause: "Excessive kerf offset applied or clear glue used instead of black-dyed CA glue",
        correctiveAction: "Use black-dyed CA glue to fill kerf margins or reduce negative kerf inset to -0.04mm."
      }
    ],
    proTips: [
      "Stick shell sheet onto double-sided transfer tape before cutting to catch tiny delicate inlay pieces.",
      "Apply a negative kerf inset (-0.05mm to -0.08mm) to shell vectors so inlay pieces snap snugly into engraved wood pockets.",
      "Always wear a P3/N99 respirator during sanding; calcium carbonate and shell protein dust are severe respiratory hazards."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. HIGH RESPIRATORY HAZARD: Calcium carbonate shell dust generated during sanding causes severe lung inflammation. Wear P3/N99 respirator. Solvent Safety: IPA cleaner is flammable. Allow complete evaporation before laser operation."
  },

  // 20
  {
    id: "silicone-wristband-laser",
    title: "Laser Engraving & Paint Filling Custom Medical Silicone Wristbands",
    category: "Project",
    difficulty: "Beginner",
    laserType: "co2",
    readTime: "9 min",
    estimatedTime: "10 min setup/jigging, 5 min laser engrave, 15 min ink infill/cure",
    targetMaterial: "100% Medical-Grade Silicone Rubber (PDMS) Wristbands",
    materials: [
      "100% Silicone Rubber Wristbands (Medical grade, 12mm width)",
      "Oil-Based Paint Marker / Silicone Infilling Ink (Contrast White/Red)",
      "Isopropyl Alcohol 99% / Denatured Alcohol Wipes",
      "Sacrificial Wooden Alignment Jig / Expansion Pin Block"
    ],
    tools: [
      "CO2 Laser (40W–60W+ class)",
      "LightBurn Software",
      "Rubber Squeegee / Plastic Scraper",
      "Soft Microfiber Cloth"
    ],
    summary: "Precision laser ablation and paint-filling protocol for custom silicone rubber medical alert and event wristbands, detailing siloxane thermal decomposition mechanics, white silica residue cleaning, high-contrast ink infilling, and durability testing.",
    image: IMG.silicone_band,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 40W–60W class). 10.6µm laser light is strongly absorbed by polydimethylsiloxane (silicone rubber).",
      unsuitableLasers: "Standard diode lasers (450nm) pass straight through clear, white, or light-colored silicone without thermal absorption.",
      minimumSpecs: "Enclosed laser machine, rotary or flat alignment jig, active local fume extraction system, high-pressure air assist.",
      safetyHazards: "SILICA DUST HAZARD: Laser ablation of silicone rubber decomposes siloxane chains ([-Si-O-]n), producing fine, airborne white silicon dioxide (SiO2) silica micro-dust. Active fume extraction and dust mask during wiping are required. Solvent Flammability: Alcohol cleaning solvents are flammable. Allow complete evaporation before laser operation.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 100% medical-grade silicone rubber wristbands (Polydimethylsiloxane / PDMS). Silicone exhibits high thermal resistance (up to 300°C), requiring concentrated CO2 laser heat to break polymer bonds. Avoid cheap PVC or rubber blends that release toxic chlorine gas when laser cut.",
    designPrep: "In LightBurn, design bold sans-serif text or medical symbol graphics (minimum 1.0mm stroke width for deep ink retention). Set line interval to 0.08mm (318 LPI) using LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Mount silicone wristband onto a wooden alignment jig block to stretch engraving zone flat and level. Focus CO2 laser beam on top silicone surface. Set clean air assist to medium flow (20-25 PSI) to clear white silica dust from channels.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Medium clean air assist (20-25 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Purges fine silica ash from deep engraved vector channels."
    },
    exhaust: {
      configuration: "Local enclosure exhaust with particulate filter stage",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for silica particulate dust and siloxane fumes."
    },
    exactParameters: {
      co2_60W: {
        sourceType: "CO2 Laser (10.6µm 60W ref)",
        power: "35% controller setting",
        speed: "300 mm/s (Raster fill engrave speed)",
        passes: 1,
        lineInterval: "0.080mm (318 LPI)",
        airAssist: "Medium air assist (20-25 PSI)",
        focusOffset: "0.0mm (Surface focus)",
        lightburnMode: "Fill",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Engrave a test line on a scrap silicone band at 300 mm/s @ 25%, 35%, and 45% power. Target a channel depth of 0.3mm to 0.4mm with clean vertical side walls.",
    steps: [
      {
        title: "Jig Alignment & Stretching Silicone Flat",
        action: "Slide silicone wristband onto a wooden jig block, ensuring target engraving surface is stretched level and taut, then check local exhaust.",
        why: "Stretching silicone flat prevents focal variation and laser beam distortion across curved band geometry.",
        lookFor: "Wristband held flat and level without twisting or sagging.",
        possibleFailure: "Engraving on an unstretched round band causes fuzzy, out-of-focus text margins.",
        detail: "Insert wooden jig expansion block into band, level top face with small bubble level, pin jig to bed."
      },
      {
        title: "Vector Graphics & Line Density Setup",
        action: "In LightBurn, load medical graphic or text, set line interval to 0.08mm (318 LPI), and enable raster fill mode.",
        why: "0.08mm interval ensures complete overlap to ablate a clean 0.35mm deep channel for ink retention.",
        lookFor: "Fill preview with 0.08mm line spacing active.",
        possibleFailure: "Sparse interval (>0.15mm) leaves ridge walls inside channels, trapping air and preventing smooth ink fill.",
        detail: "Configure raster fill layer, set 318 LPI, enable overscanning."
      },
      {
        title: "Laser Engraving & Silica Dust Clearance",
        action: "Focus CO2 laser on top band face, enable 20-25 PSI air assist, and run laser ablation pass at 300 mm/s @ 35% power.",
        why: "Ablates siloxane polymer chains into fine white silica dust while cutting crisp 0.4mm channels.",
        lookFor: "Bright laser mark producing fine white silica dust ejected by air assist stream.",
        possibleFailure: "Diode laser passes through silicone without engraving; CO2 power too low fails to achieve target channel depth.",
        detail: "Focus laser, close enclosure, start exhaust, press Start."
      },
      {
        title: "Silica Dust Wipe & Alcohol Solvent Degreasing",
        action: "Wearing dust mask, wipe engraved band thoroughly with an IPA alcohol wipe to remove all white silica ash.",
        why: "Residual silica ash prevents paint/ink from adhering to silicone channel walls, causing ink peeling.",
        lookFor: "Deep, crisp, dark grey silicone channels free of white dust powder.",
        possibleFailure: "Infilling paint directly over un-cleaned silica dust causes paint to flake out within 24 hours.",
        detail: "Scrub channels with IPA-dampened microfiber cloth until no white silica remains."
      },
      {
        title: "Ink Infilling & Squeegee Surface Wipe",
        action: "Smear oil-based paint or silicone ink across engraved channels using a squeegee, allow 15 minutes partial dry, then wipe band surface clean with alcohol wipe.",
        why: "Fills recessed channels with vivid contrast color while cleaning excess ink off un-engraved outer band face.",
        lookFor: "Sharp, vibrant contrast lettering locked inside deep silicone channels with clean band surface.",
        possibleFailure: "Wiping surface with aggressive solvent after full ink cure strips paint out of channels.",
        detail: "Apply paint pen heavily over channels, squeegee excess off, wait 15 min, wipe surface with IPA wipe."
      }
    ],
    troubleshooting: [
      {
        symptom: "Paint infill flakes or peels out of silicone channels after drying",
        probableCause: "Residual white silica (SiO2) dust was not thoroughly scrubbed out with alcohol before paint application",
        correctiveAction: "Scrub channels vigorously with 99% IPA and a stiff microfiber towel before applying paint."
      },
      {
        symptom: "Diode laser fails to leave any mark on silicone band",
        probableCause: "450nm diode laser light passes straight through semi-translucent or white silicone rubber",
        correctiveAction: "Switch to a CO2 laser (10.6µm wavelength) which is strongly absorbed by silicone."
      },
      {
        symptom: "Engraved text edges appear blurry or distorted",
        probableCause: "Wristband was not held stretched flat on a jig, causing z-height defocus",
        correctiveAction: "Use a custom wooden expansion jig block to stretch the engraving zone perfectly flat."
      }
    ],
    proTips: [
      "Diode 455nm lasers pass directly through clear/white silicone without absorption; CO2 10.6µm is mandatory for silicone rubber.",
      "Scrub white silica powder out of engraved channels with 99% IPA before paint filling to ensure 100% ink adhesion.",
      "Use a wooden expansion jig block to hold wristbands stretched flat during laser engraving."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. SILICA DUST HAZARD: Silicone laser ablation generates fine silica particulate dust. Active fume extraction and dust mask are required during cleaning. Solvent Safety: Isopropyl alcohol is flammable. Allow complete surface evaporation before operating laser."
  },

  // 21
  {
    id: "marble-granite-engraving",
    title: "Deep Inscription & Photo Engraving on Polished Black Granite Memorials",
    category: "Material Guide",
    difficulty: "Advanced",
    laserType: "co2",
    readTime: "17 min",
    estimatedTime: "20 min image processing, 25 min laser engrave run, 15 min litho paint infill",
    targetMaterial: "Polished Shanxi/Absolute Black Granite Slab (20mm thick)",
    materials: [
      "Polished Black Shanxi / Absolute Black Granite Slab (20mm thick, mirror finish)",
      "White Monument Litho Highlighter Paint / Acrylic Masonry Filler",
      "Rubber Paint Squeegee & Soft Lint-Free Microfiber Towel",
      "Isopropyl Alcohol (IPA) 99%"
    ],
    tools: [
      "CO2 Laser (80W–150W class)",
      "LightBurn Software",
      "Digital Vernier Caliper & 10x Magnifying Loupe",
      "Heavy-Duty Machine Bed Support / Mechanical Lifting Hoist"
    ],
    summary: "Micro-spalling thermal fracture protocol for laser engraving fine serif typography and photographic portraits onto polished black granite memorials, detailing quartz/feldspar shock fracture dynamics, resolution calibration (200 LPI), air assist suppression logic, and outdoor wet-readability litho paint infilling.",
    image: IMG.granite_monument,
    prerequisites: {
      compatibleLasers: "High-power CO2 lasers (10.6µm wavelength, 80W–150W class). CO2 laser light is absorbed near the surface of quartz and mineral grains in granite.",
      unsuitableLasers: "Diode lasers (<20W) lack optical power density to cause localized mineral micro-spalling.",
      minimumSpecs: "Heavy-duty laser bed capable of supporting 50–100+ kg stone slabs, enclosed chassis, active dust extraction.",
      safetyHazards: "ERGONOMIC & SILICA DUST HAZARD: Heavy stone slabs pose severe pinch, crush, and back injury risks; use mechanical lifting aids. Micro-spalling generates fine crystalline silica (SiO2) mineral dust. Active exhaust extraction and P3 respirator during post-processing are required.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Select high-density polished Shanxi or Absolute Black Granite slabs (20mm uniform thickness). Natural granite consists of quartz, feldspar, and mica mineral grains. Note: Laser pulses heat quartz/feldspar crystals instantly, creating intense localized thermal expansion stress that pops off 10–20 micron stone chips ('spalling'), leaving a frosted white mark against polished mirror-black stone. Avoid porous grey granite or marble with heavy veining.",
    designPrep: "In LightBurn, import high-contrast photo artwork. Apply 'Jarvis' or 'Stucki' dithering algorithm. Note that Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. Set resolution strictly to 200 LPI (0.127mm line interval) using LPI = 25.4 / lineInterval. Higher DPI (>254 LPI) causes overlapping thermal shock zones that melt/fuse micro-cracks into dull grey smudges. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Place heavy granite slab flat on bed support standoffs. Focus CO2 laser beam on top polished stone plane. Turn air assist OFF or set to minimal low trickle flow; air cooling suppresses the localized thermal shock required for clean micro-spalling.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) 2.0 inch or 2.5 inch focal lens",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Off at marking point (or low trickle flow <2 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Air assist is turned off or kept minimal to prevent suppressing thermal shock spalling."
    },
    exhaust: {
      configuration: "Local enclosure exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for stone dust particulates and mineral debris."
    },
    exactParameters: {
      co2_100W: {
        sourceType: "CO2 Laser (10.6µm 100W ref)",
        power: "18% controller setting",
        speed: "400 mm/s (Raster scan speed)",
        passes: 1,
        lineInterval: "0.127mm (200 LPI) - verify via Interval Test",
        airAssist: "Off at marking point (0 PSI)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Dither / Grayscale",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 5-step dither test grid on a scrap corner of black granite at 400 mm/s (12%, 15%, 18%, 22%, 25% power) at 200 LPI. Inspect grid under 10x loupe to identify the lowest power setting that produces bright white micro-spalling without dark melted glazing.",
    steps: [
      {
        title: "Granite Slab Bed Fixturing & Surface Degreasing",
        action: "Using mechanical lifting aids, seat heavy black granite slab flat on bed standoffs, wipe polished face with 99% IPA, and check local exhaust.",
        why: "Flat placement ensures uniform focus across large slabs; removing grease prevents laser beam attenuation.",
        lookFor: "Granite slab level and secure; mirror-black face free of finger oils.",
        possibleFailure: "Engraving over oily fingerprints leaves dark, un-spalled smudges on stone surface.",
        detail: "Lift slab safely, level with bubble indicator, wipe polished top surface thoroughly with IPA."
      },
      {
        title: "Dithering & Resolution (200 LPI) Configuration",
        action: "In LightBurn, load photo art, select Jarvis or Stucki dithering, set line interval to 0.127mm (200 LPI), and invert photo grayscale.",
        why: "200 LPI leaves un-fractured dark polish gaps between micro-spall dots, creating true 8-bit visual photo contrast.",
        lookFor: "Crisp dither preview at 200 LPI without dot overlap.",
        possibleFailure: "Setting resolution to 450 LPI melts adjacent quartz micro-fractures, turning bright white marks dull dark grey.",
        detail: "Load photo, set 0.127mm line interval (200 LPI), select Jarvis/Stucki dither, enable invert."
      },
      {
        title: "Focal Alignment & Air Assist Suppression Setup",
        action: "Focus CO2 laser on top polished granite face, turn air assist OFF, start enclosure exhaust, and verify 100W parameters (400 mm/s @ 18% power).",
        why: "Turning air assist off allows maximum localized thermal shock heat build-up required to chip quartz micro-flakes.",
        lookFor: "Laser focused sharply on stone; air assist solenoid turned off.",
        possibleFailure: "Running high air assist cools stone surface instantly, preventing micro-spalling fractures.",
        detail: "Adjust z-focus to stone surface, turn off air assist line, turn on enclosure exhaust."
      },
      {
        title: "Micro-Spalling Laser Execution",
        action: "Close laser enclosure doors, check safety eyewear, and press Start for single-pass dither engrave.",
        why: "Single laser pulses thermal-shock surface mineral grains, popping off micro-chips to form a bright frosted mark.",
        lookFor: "White frosted photo details emerging instantly on dark polished granite as laser scans.",
        possibleFailure: "Excessive power melts stone into smooth black glass, destroying white contrast.",
        detail: "Close enclosure, check eyewear, press Start, observe frosted mark creation."
      },
      {
        title: "Litho Paint Infill & Outdoor Wet-Readability Coating",
        action: "Rub white Litho Monument Paint across laser etched areas with a soft cloth, squeegee excess off polished surface, and allow 20 minutes dry time.",
        why: "Litho paint locks inside micro-spall cavities, preserving bright white contrast even when memorial stone is wet from rain.",
        lookFor: "Vibrant, high-contrast white photo portrait that remains bright when splashed with water.",
        possibleFailure: "Cleaning granite with oil-based polishes fills micro-fractures with oil, turning white marks dark grey.",
        detail: "Apply Litho paint, squeegee surface clean, wipe excess off polish with IPA-dampened cloth."
      }
    ],
    troubleshooting: [
      {
        symptom: "Engraved granite image looks dull dark grey instead of bright white",
        probableCause: "Line interval set too fine (>300 LPI) or power too high, causing thermal glass melting rather than micro-spalling",
        correctiveAction: "Set line interval strictly to 0.127mm (200 LPI) and lower laser power by 15-20%."
      },
      {
        symptom: "White laser marks turn dark grey when it rains",
        probableCause: "Micro-spall cavities filled with rainwater, altering light refractive index",
        correctiveAction: "Apply white Litho Monument Paint filler into engraved cavities to seal out moisture."
      },
      {
        symptom: "Focus drifts across granite slab causing fading image depth",
        probableCause: "Heavy granite slab was tilted on bed or laser gantry sagged under stone weight",
        correctiveAction: "Use digital caliper or focus gauge at four corners of slab to level stone surface perfectly."
      }
    ],
    proTips: [
      "Set resolution strictly to 200 LPI (0.127mm line interval); higher DPI melts micro-fractures into dull dark grey smudges.",
      "Turn air assist OFF during granite engraving; air cooling suppresses localized thermal shock required for spalling.",
      "Rub white Litho Monument Paint into micro-spall cavities to maintain high contrast when outdoor memorials are wet from rain."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. ERGONOMIC & DUST HAZARD: Heavy stone slabs (50-100+ kg) present severe crush/pinch risks. Micro-spalling generates crystalline silica dust; wear P3 respirator and run active exhaust. Solvent Safety: IPA solvent is flammable."
  },

  // 22
  {
    id: "mirror-glass-back-etching",
    title: "Rear-Surface Silver Coating Laser Vaporization on Decorative Glass Mirrors",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "diode",
    readTime: "11 min",
    estimatedTime: "15 min prep/mirroring, 12 min laser run, 10 min paint/LED backlight",
    targetMaterial: "Glass Wall Mirror (4mm thick float glass with silver/paint backing)",
    materials: [
      "Standard Glass Mirror Sheet (4mm float glass with dark protective backing paint and silver reflective layer)",
      "Black Acrylic Backing Spray Paint / Translucent Stained Glass Paint",
      "Isopropyl Alcohol (IPA) 99% / Glass Cleaner",
      "Sacrificial Dark Sacrificial Wooden / Metal Pass-Through Damper Sheet"
    ],
    tools: [
      "Diode Laser (10W–20W optical output) or CO2 Laser (50W reference)",
      "LightBurn Software",
      "Microfiber Glass Towel & Cut-Resistant Handling Gloves"
    ],
    summary: "Rear-surface laser vaporization protocol removing protective grey backing paint and reflective silver layer from glass mirrors without micro-cracking front float glass, detailing REAR-SIDE UP orientation, software horizontal mirroring, stray light absorption, and LED backlighting integration.",
    image: IMG.glass_mirror,
    prerequisites: {
      compatibleLasers: "Blue Diode lasers (450nm wavelength, 10W–20W optical output) or CO2 lasers (10.6µm). 450nm diode light passes cleanly through front glass and is strongly absorbed by dark rear protective paint.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm, 50W+) reflect off the silver layer when fired from the rear, risking beam back-reflection into optical galvos.",
      minimumSpecs: "Enclosed laser machine, sacrificial damper board beneath mirror, active HEPA + carbon fume extraction.",
      safetyHazards: "TOXIC HEAVY METAL FUME & CUT HAZARD: Vaporizing mirror protective backing paint releases lead/zinc VOC fumes and airborne silver particles. Active HEPA + carbon fume extraction is mandatory. Handling glass sheets poses sharp edge cut hazards; wear cut-resistant gloves. STRAY LASER LIGHT: Stray diode laser light passes through clear etched glass; place a dark wooden/metal damper board under mirror.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use standard 4mm float glass mirrors coated with silver reflective film and dark grey protective backing paint. CRITICAL ORIENTATION RULE: Place mirror REAR-SIDE UP (protective paint facing up toward laser head). Engraving front-side up under CO2 lasers shatters front glass; front-side under diode lasers reflects or scatters light.",
    designPrep: "In LightBurn, import photo or vector artwork. HORIZONTALLY MIRROR artwork so that text and graphics read correctly when viewed from the front glass face. Select Atkinson, Jarvis, or Stucki dithering. Note that Stucki distributes quantization error across 12 neighbouring pixels in the two following rows, using weights normalized by a divisor of 42. Set line interval strictly to 0.08mm to 0.10mm (254–318 LPI) using LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Place a dark sacrificial wood/metal sheet on laser bed, lay mirror REAR-SIDE UP flat on damper, and focus diode laser beam on top dark paint surface. Set air assist to medium flow (15-20 PSI) to clear paint smoke.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Medium clean air assist (15-20 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Blows vaporized paint smoke away from mirror rear surface."
    },
    exhaust: {
      configuration: "Local enclosure HEPA + activated carbon fume extractor",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for heavy metal paint VOCs and organic smoke."
    },
    exactParameters: {
      diode20W: {
        sourceType: "20W Optical Output Blue Diode Laser (450nm ref)",
        power: "45% controller setting",
        speed: "3200 mm/min",
        passes: 1,
        lineInterval: "0.080mm (318 LPI)",
        airAssist: "Medium air assist (15-20 PSI)",
        focusOffset: "0.0mm (Rear paint surface focus)",
        lightburnMode: "Dither / Fill",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      co2_50W: {
        sourceType: "CO2 Laser (10.6µm 50W ref - rear engrave mode)",
        power: "14% controller setting",
        speed: "350 mm/s",
        passes: 1,
        lineInterval: "0.080mm (318 LPI)",
        airAssist: "Medium air assist (15-20 PSI)",
        focusOffset: "0.0mm (Rear paint surface focus)",
        lightburnMode: "Dither / Fill",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 5-step raster test grid on a scrap mirror rear face at 3200 mm/min (30%, 38%, 45%, 55%, 65% power). Check front face under light to identify minimum power that removes 100% of silver backing without micro-cracking front glass.",
    steps: [
      {
        title: "Rear Orientation & Horizontal Mirroring Setup",
        action: "Place sacrificial dark damper board on bed, lay mirror REAR-SIDE UP (paint facing up), wear cut gloves, and horizontally flip artwork in LightBurn.",
        why: "Engraving rear paint side allows 455nm diode light to vaporize paint/silver cleanly; horizontal flip ensures graphics read correctly from front.",
        lookFor: "Mirror positioned rear-paint-side up; software preview horizontally flipped.",
        possibleFailure: "Placing mirror front-side up under CO2 shatters front glass; forgetting to flip artwork produces backwards text.",
        detail: "Place dark board on bed, position mirror paint-side up, click Mirror Horizontal in LightBurn."
      },
      {
        title: "Line Density & Dithering Algorithm Setup",
        action: "In LightBurn, set line interval to 0.08mm (318 LPI), select Atkinson or Jarvis dithering, and enable overscanning.",
        why: "318 LPI ensures 100% paint overlap, creating completely clear translucent glass windows for LED backlighting.",
        lookFor: "Dither fill layer active at 0.08mm line interval.",
        possibleFailure: "Coarse line interval (>0.15mm) leaves dark paint lines across glass windows.",
        detail: "Configure dither settings, set 0.08mm interval, enable overscanning default."
      },
      {
        title: "Focal Alignment & Stray Light Damper Verification",
        action: "Focus diode laser on top dark paint surface, verify dark damper board beneath mirror, turn on HEPA exhaust, set 15-20 PSI air assist.",
        why: "Focusing on paint plane maximizes energy absorption; dark damper board absorbs stray laser light passing through cleared glass.",
        lookFor: "Laser focused sharply on rear paint layer; dark damper board positioned directly beneath cut zone.",
        possibleFailure: "Omitting dark damper allows pass-through laser light to reflect off aluminum bed into machine chassis.",
        detail: "Set Z focus to top paint layer, verify damper board placement, check HEPA exhaust airflow."
      },
      {
        title: "Laser Vaporization Execution",
        action: "Close laser enclosure doors, check safety eyewear, and press Start for single-pass rear vaporization run.",
        why: "Vaporizes dark protective paint layer and reflective silver coating in a single pass.",
        lookFor: "Laser vaporizing paint layer smoothly; light showing translucent glass windows appearing behind beam.",
        possibleFailure: "Setting diode power too high (>80%) creates thermal shock micro-fractures in rear float glass.",
        detail: "Close enclosure, check eyewear, press Start, observe laser vaporizing paint."
      },
      {
        title: "IPA Cleaning & Translucent Backlight Coating",
        action: "Wipe rear mirror glass with IPA-dampened microfiber towel, then spray translucent glass stain or mount RGB LED backlight panel behind etched areas.",
        why: "Cleans loose paint soot from glass windows; LED backlighting illuminates clear etched artwork through front mirror face.",
        lookFor: "Crystal clear glass windows from front face with vibrant RGB illumination when backlit.",
        possibleFailure: "Scratched rear glass windows due to wiping with abrasive paper towels.",
        detail: "Wipe rear face gently with IPA microfiber cloth, apply translucent color stain or mount LED frame."
      }
    ],
    troubleshooting: [
      {
        symptom: "Text and graphics appear backwards when looking at the front mirror face",
        probableCause: "Artwork was not horizontally mirrored in laser software before engraving rear face",
        correctiveAction: "Select artwork in LightBurn and click 'Mirror Horizontal' before running laser."
      },
      {
        symptom: "Laser leaves streaky silver residue in cleared glass windows",
        probableCause: "Diode laser power was too low or speed too fast, failing to vaporize 100% of silver layer",
        correctiveAction: "Increase diode power by 10% or reduce raster speed by 15%."
      },
      {
        symptom: "Micro-cracks or spiderweb fractures appear on front glass face",
        probableCause: "Laser power too high or air assist turned off, causing localized thermal glass shock",
        correctiveAction: "Lower laser power, increase travel speed, and ensure 15-20 PSI air assist stream is active."
      }
    ],
    proTips: [
      "Always place mirrors REAR-SIDE UP (paint side facing laser) and horizontally mirror artwork in software.",
      "Place a dark sacrificial wooden or metal damper board under the mirror to absorb stray diode laser light passing through cleared glass.",
      "Mount an RGB LED frame behind the mirror to create glowing illuminated wall art."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC FUME & CUT HAZARD: Vaporizing mirror backing paint releases lead/zinc VOC fumes. HEPA + carbon extraction required. Wear cut-resistant gloves handling glass. Solvent Safety: IPA cleaner is flammable."
  },

  // 23
  {
    id: "eva-foam-cosplay-bevels",
    title: "Precision Laser Cutting & Angle Bevel Scoring High-Density EVA Foam",
    category: "Project",
    difficulty: "Intermediate",
    laserType: "co2",
    readTime: "12 min",
    estimatedTime: "15 min design/score prep, 10 min laser cut, 15 min heat-seal & bevel bonding",
    targetMaterial: "High-Density Ethylene-Vinyl Acetate (EVA) Cosplay Foam (5mm to 10mm+, 100 kg/m³ density)",
    materials: [
      "High-Density EVA Cosplay Foam Sheets (5mm & 10mm thickness, 100 kg/m³ density, black/dark grey)",
      "Solvent-Based Contact Cement Adhesive (Barge / Neoprene contact adhesive)",
      "Masking Tape / Hold-down pins",
      "Paper Towels"
    ],
    tools: [
      "CO2 Laser (60W–130W class)",
      "LightBurn Software",
      "Long Focal Length Lens (2.5 inch or 3.0 inch ZnSe lens)",
      "Industrial Heat Gun (1500W class)",
      "High-Pressure Air Assist Compressor (30-45 PSI)"
    ],
    summary: "Precision vector cutting and V-groove angle score protocol for thick high-density ethylene-vinyl acetate (EVA) cosplay foam, detailing cellular vaporization physics, long focal beam waists (2.5\"-3.0\"), partial depth score parameters, heat-gun micro-cell sealing, and contact cement bevel assembly.",
    image: IMG.foam_insert,
    prerequisites: {
      compatibleLasers: "CO2 lasers (10.6µm wavelength, 60W–130W class). 10.6µm beam wavelength is rapidly absorbed by ethylene-vinyl acetate polymers.",
      unsuitableLasers: "Diode lasers (450nm) reflect off white/light EVA foam and melt thick foam into wide sticky trenches due to short focus depth.",
      minimumSpecs: "CO2 laser with long focal lens (2.5\" or 3.0\"), high-pressure air assist system (30-45 PSI), active heavy smoke exhaust.",
      safetyHazards: "TOXIC FUMES & FIRE HAZARD: Pyrolysis of EVA foam produces toxic acetic acid vapors, vinyl acetate monomer smoke, and organic VOC gases. Exhaust ducting to active carbon extraction is mandatory. Combustibility: EVA foam is flammable if laser beam dwells; keep fire extinguisher adjacent to laser machine.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 100 kg/m³ high-density EVA foam sheets (5mm to 10mm thickness). Low-density floor mat EVA foam contains uneven blown pockets that melt into ragged edges. Black or dark grey EVA foam absorbs heat uniformly.",
    designPrep: "In LightBurn, separate vector artwork into 3 distinct color layers: Layer 1 (Full Contour Cut - 10mm Foam), Layer 2 (Partial V-Groove Score Line - 15-20% depth for 45° bevel folding), Layer 3 (Inner Cutout Detail). For 10mm thick foam, use a 2.5 inch or 3.0 inch focal length ZnSe lens to provide a long Rayleigh range (beam waist), keeping cut walls perpendicular. For supported GCode devices, enable Overscanning default.",
    laserSetup: "Pin EVA foam flat to laser bed using hold-down pins. Set z-focus offset to -4.0mm (focused inside foam body for 10mm foam). Connect high-pressure air assist (30-45 PSI) to purge molten foam slag.",
    optics: {
      lens: "CO2 Zinc Selenide (ZnSe) long focal length lens (2.5 inch or 3.0 inch)",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "High pressure air assist (30-45 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Blows molten foam slag through kerf and prevents flame ignition."
    },
    exhaust: {
      configuration: "High-capacity local enclosure smoke exhaust system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for acetic acid fumes and heavy vinyl smoke."
    },
    exactParameters: {
      co2_100W: {
        sourceType: "CO2 Laser (10.6µm 100W ref)",
        power: "65% controller setting (Full Contour Cut) / 15% controller setting (Partial V-Groove Score)",
        speed: "18 mm/s (Full Contour Cut 10mm Foam) / 80 mm/s (Partial Score)",
        passes: 1,
        lineInterval: null,
        airAssist: "High pressure air assist (30-45 PSI)",
        focusOffset: "-4.0mm (Focus positioned 4mm inside 10mm foam body)",
        lightburnMode: "Line / Cut",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform score & cut tests on scrap 10mm EVA foam. Test cut speed at 18 mm/s @ 60-70% power. Test score speed at 80 mm/s @ 12-18% power to achieve a precise 2.0mm deep score line that folds cleanly into a 45° bevel without snapping.",
    steps: [
      {
        title: "Foam Pinning & Long Focal Lens Alignment",
        action: "Install 2.5\" or 3.0\" ZnSe lens in CO2 head, pin 10mm EVA foam sheet flat to bed, and check high-capacity exhaust.",
        why: "Long focal lens provides extended beam waist for perpendicular 90° cut walls on thick foam; pinning prevents foam warping.",
        lookFor: "Foam pinned flat; long focal lens mounted; heavy exhaust pulling active draft.",
        possibleFailure: "Using short 1.5\" lens causes wide hourglass beveling on 10mm foam cut walls.",
        detail: "Mount 2.5\" lens, pin foam flat with bed pins, adjust nozzle distance for 2.5\" focus."
      },
      {
        title: "Multi-Layer Vector Score & Cut Configuration",
        action: "In LightBurn, set Layer 1 (Partial Score: 80 mm/s @ 15% power) and Layer 2 (Full Cut: 18 mm/s @ 65% power, 45 PSI air assist).",
        why: "Partial score creates clean folding hinge lines; high air assist on full cut freezes molten foam margins into smooth rubberized walls.",
        lookFor: "Multi-layer vector job preview showing score layer executing BEFORE full cut layer.",
        possibleFailure: "Executing full contour cuts before score lines allows foam parts to shift out of alignment.",
        detail: "Set layer order (Score first, Cut second), set 45 PSI air assist, set -4mm focus offset."
      },
      {
        title: "Mid-Body Focal Offset & High Air Assist Setup",
        action: "Set z-height focal offset -4.0mm inside the 10mm foam body, open air assist valve to 35-45 PSI, start exhaust, press Start.",
        why: "Focusing inside foam body centers power density along 10mm cut thickness; high air assist prevents char flaring.",
        lookFor: "Concentrated laser spark traveling smoothly through foam with heavy air stream purging bottom kerf.",
        possibleFailure: "Low air assist (<10 PSI) allows molten foam to weld back together behind cutting beam.",
        detail: "Lower z-bed by 4mm below top focus, open 40 PSI air assist valve, close enclosure, press Start."
      },
      {
        title: "Heat Gun Surface Cell Sealing",
        action: "Pass a 1500W heat gun (350-400°C setting) rapidly over laser-cut foam edges.",
        why: "Thermal heat collapses open micro-foam cells, transforming porous cut edges into a smooth sealed rubber surface ready for paint primer.",
        lookFor: "Porous, velvety laser edge instantly shrinking into a smooth, shiny sealed surface.",
        possibleFailure: "Holding heat gun in one spot too long warps and deforms foam armor geometry.",
        detail: "Sweep heat gun 10cm away from foam edge in fast continuous passes until micro-cells seal."
      },
      {
        title: "Bevel Folding & Contact Cement Assembly",
        action: "Apply solvent-based contact cement inside laser v-groove score lines, allow to dry 5 minutes until tacky, then press cut edges together to lock rigid 45° armor bevels.",
        why: "Contact cement forms a permanent, flexible structural bond along laser-scored bevel hinges.",
        lookFor: "Rigid 45° or 90° armor seams that hold shape without popping open.",
        possibleFailure: "Pressing edges together while contact cement is still wet results in weak bond failure.",
        detail: "Apply thin coat of contact cement inside score lines, wait 5 min until tacky, align bevel edges, press firmly for 30s."
      }
    ],
    troubleshooting: [
      {
        symptom: "10mm foam cut edges are hourglass-shaped or severely slanted instead of 90° perpendicular",
        probableCause: "Using a short focal length lens (1.5\") with rapid beam divergence or focusing on top surface only",
        correctiveAction: "Install a 2.5 inch or 3.0 inch focal lens and set focal point -4.0mm inside the 10mm foam body."
      },
      {
        symptom: "Molten foam welds back together behind the laser beam as it cuts",
        probableCause: "Air assist pressure set too low (<15 PSI) or cutting speed too slow",
        correctiveAction: "Increase air assist pressure to 35-45 PSI and increase cutting speed slightly."
      },
      {
        symptom: "Partial score line cuts completely through foam instead of forming a hinge",
        probableCause: "Score layer power too high or speed too slow",
        correctiveAction: "Reduce score layer power to 12-15% at 80 mm/s."
      }
    ],
    proTips: [
      "Use a 2.5\" or 3.0\" long focal length ZnSe lens to maintain perpendicular 90° cut walls on 10mm+ foam.",
      "Set high air assist pressure (35-45 PSI) to freeze molten foam margins and prevent kerf re-welding.",
      "Pass a 400°C heat gun quickly over laser-cut foam edges to seal open microscopic cells before applying paint primer."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC FUMES & FIRE HAZARD: EVA foam pyrolysis releases acetic acid and vinyl monomer smoke. Exhaust ducting to active carbon extraction is mandatory. Combustibility: EVA foam is flammable; maintain active air assist and fire extinguisher. Solvent Safety: Contact cement solvents are flammable; use in well-ventilated areas."
  },

  // 24
  {
    id: "cork-coaster-marking",
    title: "High-Speed Vector Scoring & Cutting Natural Cork Beverage Coasters",
    category: "Project",
    difficulty: "Beginner",
    laserType: "diode",
    readTime: "7 min",
    estimatedTime: "10 min setup/masking, 5 min laser engrave/cut",
    targetMaterial: "Natural High-Density Grain Cork Sheets (4mm thick)",
    materials: [
      "100% Natural High-Density Suberin Cork Sheets (4mm thickness)",
      "Low-Tack Paper Transfer Masking Tape (100mm wide)",
      "Damp Microfiber Cloth"
    ],
    tools: [
      "Diode Laser (10W–20W optical output) or CO2 Laser (40W reference)",
      "LightBurn Software",
      "Digital Vernier Caliper",
      "Honeycomb Laser Bed with Hold-Down Pins"
    ],
    summary: "Precision laser marking and burn-free contour cutting protocol for natural suberin-rich cork wood sheets, detailing suberin wax charring photochemistry, masking tape smoke protection, line density tuning (254 LPI), high-pressure air assist cutting, and damp wiping edge cleanup.",
    image: IMG.cork_pad,
    prerequisites: {
      compatibleLasers: "Diode lasers (450nm wavelength, 10W–20W optical output) or CO2 lasers (10.6µm wavelength, 40W–60W class). 450nm diode light is strongly absorbed by natural suberin wax and lignin in cork bark.",
      unsuitableLasers: "High-power IR fiber lasers (1064nm, 50W+) pass through organic cork fibers without controlled thermal absorption, risking localized combustion.",
      minimumSpecs: "Enclosed laser machine or chassis, clean air assist compressor (20-30 PSI), active enclosure exhaust extraction.",
      safetyHazards: "FIRE & SMOKE HAZARD: Natural cork consists of dead oak bark cells (Quercus suber) rich in flammable suberin wax. Loose cork dust and thin cut edges char rapidly if air assist fails; maintain active air flow and keep fire extinguisher nearby.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use 100% natural high-density grain cork sheets (4mm thickness). Avoid cheap rubber-bound or synthetic polyurethane-bonded recycled cork tiles; synthetic binders char heavily into sticky black tar and emit harsh chemical fumes under laser heat.",
    designPrep: "In LightBurn, import vector artwork for coaster design. Set raster engraving layer to 0.10mm line interval (254 LPI) using LPI = 25.4 / lineInterval. For supported GCode devices, enable Overscanning default to eliminate edge burn tracks. Apply low-tack paper masking tape to top cork face before laser processing.",
    laserSetup: "Pin cork sheet flat to honeycomb bed using laser bed pins. Focus laser beam precisely on top masked cork surface. Connect clean air assist (20-30 PSI) for contour cut pass.",
    optics: {
      lens: "Manufacturer-supplied focusing optics",
      focalLength: null,
      measuredSpotSize: null,
      manufacturerSpecifiedSpotSize: null
    },
    airAssist: {
      mode: "Low flow for raster engrave (5 PSI) / High flow for vector cut (25-30 PSI)",
      measuredPressure: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "High air assist during contour cutting blows away flammable suberin ash and prevents edge charring."
    },
    exhaust: {
      configuration: "Local enclosure smoke exhaust duct",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local exhaust sized for organic wood smoke and suberin wax vapors."
    },
    exactParameters: {
      diode20W: {
        sourceType: "20W Optical Output Blue Diode Laser (450nm ref)",
        power: "22% controller setting (Raster Engrave) / 70% controller setting (4mm Vector Cut)",
        speed: "4000 mm/min (Raster Engrave) / 600 mm/min (Vector Cut)",
        passes: 1,
        lineInterval: "0.10mm (254 LPI)",
        airAssist: "Low flow 5 PSI (Engrave) / High flow 30 PSI (Cut)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Fill (Engrave) / Line (Cut)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      },
      co2_40W: {
        sourceType: "CO2 Laser (10.6µm 40W ref)",
        power: "14% controller setting (Engrave) / 45% controller setting (Vector Cut)",
        speed: "350 mm/s (Engrave) / 25 mm/s (Vector Cut)",
        passes: 1,
        lineInterval: "0.10mm (254 LPI)",
        airAssist: "Low flow 5 PSI (Engrave) / High flow 30 PSI (Cut)",
        focusOffset: "0.0mm (Surface focus plane)",
        lightburnMode: "Fill (Engrave) / Line (Cut)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 5-step raster and cut test matrix on a scrap corner of 4mm natural cork. Test raster power from 15% to 30% at 4000 mm/min to find the rich chocolate brown mark threshold without deep cratering.",
    steps: [
      {
        title: "Cork Substrate Selection & Paper Masking",
        action: "Select 100% natural grain suberin cork (4mm thick), apply paper transfer tape to top surface, pin flat to bed, and check local exhaust.",
        why: "Natural suberin cork chars cleanly into dark brown tone; paper masking prevents smoke halo discoloration around engraved vector details.",
        lookFor: "Cork sheet pinned flat to bed; paper masking smooth and bubble-free.",
        possibleFailure: "Using synthetic rubber-recycled cork produces dark sticky tar melt margins and harsh odor.",
        detail: "Burnish paper tape smoothly onto cork, pin 4 corners flat to honeycomb grid."
      },
      {
        title: "Raster Engrave & Line Density Setup",
        action: "In LightBurn, load coaster design, set line interval to 0.10mm (254 LPI), set 4000 mm/min @ 22% power (20W diode), and enable overscanning.",
        why: "254 LPI delivers 100% dot overlap on cork bark cells, creating an even dark chocolate brown raster fill.",
        lookFor: "Raster fill layer active at 254 LPI with overscanning enabled.",
        possibleFailure: "Setting interval too wide (>0.20mm) leaves un-etched light tan cork stripes inside raster logo.",
        detail: "Configure raster fill layer, set 254 LPI, enable low air assist (5 PSI)."
      },
      {
        title: "High-Pressure Air Assist Vector Cut Setup",
        action: "Set vector cut layer (600 mm/min @ 70% power for 20W diode), increase air assist to 30 PSI, focus laser on top cork face.",
        why: "High pressure air assist clears flammable suberin smoke from the 4mm kerf, preventing edge flare-ups.",
        lookFor: "30 PSI air assist jet active at nozzle; beam focused on paper mask plane.",
        possibleFailure: "Vector cutting 4mm cork without air assist causes sustained yellow flame ignition along kerf.",
        detail: "Set vector layer speed/power, open air assist valve to 30 PSI, close enclosure."
      },
      {
        title: "Laser Execution & Coaster Separation",
        action: "Close enclosure, check safety eyewear, press Start, and monitor raster engrave followed by vector contour cut.",
        why: "Executes engrave pass first on masked surface, followed by 1-pass clean vector drop-out cut.",
        lookFor: "Rich brown engrave mark through paper mask, followed by clean drop-out cut without flaming.",
        possibleFailure: "Cutting before engraving allows loose coaster to shift, causing misaligned graphics.",
        detail: "Verify layer execution sequence (Engrave first, Cut second), press Start."
      },
      {
        title: "Masking Peel & Microfiber Wipe",
        action: "Pry off paper masking tape and gently wipe cork surface and cut edges with a slightly damp microfiber cloth.",
        why: "Removes surface smoke residue from paper mask borders; damp cloth removes loose edge carbon ash without soaking cork.",
        lookFor: "Crisp dark brown graphic contrast on clean natural cork coaster with smooth brown cut edges.",
        possibleFailure: "Submerging natural cork in water causes rapid swelling, warping, and cell breakdown.",
        detail: "Peel paper tape, wipe surface with lightly dampened microfiber cloth, allow 5 min air dry."
      }
    ],
    troubleshooting: [
      {
        symptom: "Engraved text edges surrounded by dark yellowish-brown smoke halo rings",
        probableCause: "Paper transfer masking was omitted or air assist pressure was too high during raster fill",
        correctiveAction: "Apply paper transfer masking tape to cork surface before engraving and keep engrave air assist low (5 PSI)."
      },
      {
        symptom: "Cork catches fire or flares up with sustained yellow flame during vector cut",
        probableCause: "Air assist was turned off or vector cut speed was too slow for 4mm thickness",
        correctiveAction: "Increase air assist pressure to 30 PSI and increase cut speed to 600 mm/min @ 70% power (20W diode)."
      },
      {
        symptom: "Coaster cut edges feel sticky and emit strong chemical smell",
        probableCause: "Using recycled synthetic rubber/polyurethane-bonded cork tiles instead of 100% natural grain cork",
        correctiveAction: "Source genuine 100% natural grain suberin cork sheets."
      }
    ],
    proTips: [
      "Always source 100% natural grain suberin cork; synthetic rubber binders char into sticky black tar.",
      "Masking cork with low-tack paper transfer tape prevents dark smoke halo rings around detailed vector graphics.",
      "Wipe cut coasters with a lightly dampened microfiber cloth; never submerge natural cork in water."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. FIRE RISK: Natural suberin cork is flammable. Maintain active air assist (30 PSI) during cutting and keep fire extinguisher nearby. Exhaust extraction required for organic smoke."
  },

  // 25
  {
    id: "pcb-copper-laser-ablation",
    title: "Direct Laser PCB Prototyping via UV / Fiber Laser Copper Vaporization",
    category: "Fiber/Galvo",
    difficulty: "Advanced",
    laserType: "fiber",
    readTime: "22 min",
    estimatedTime: "15 min Gerber prep, 10 min galvo laser ablation, 10 min continuity testing",
    targetMaterial: "Double-Sided FR4 Copper-Clad Laminate PCB (35µm copper / 1oz)",
    materials: [
      "FR4 Double-Sided / Single-Sided Copper-Clad Board (35µm copper thickness / 1 oz copper)",
      "Matte Black Sacrificial Absorber Spray Paint (or Isopropyl Alcohol 99%)",
      "Acetone Solvent & Lint-Free Wipes"
    ],
    tools: [
      "30W–50W Fiber Galvo Laser (1064nm MOPA / short pulse) or 355nm UV Laser System",
      "F-Theta Scan Lens (100mm or 160mm focal length)",
      "LightBurn Galvo or EZCAD3 Software (Gerber Isolation Offset tool)",
      "Digital Multimeter (Resistance Mode / Continuity Tester)",
      "Fine Brass Wire Brush / Ultrasonic Bath"
    ],
    summary: "Chemical-free isolation routing and copper vaporization protocol on FR4 circuit boards using short-pulse MOPA fiber or UV galvo lasers, detailing copper thermal ablation threshold physics, Gerber vector isolation conversion, multi-pass cross-hatch strategies, FR4 substrate preservation, and mega-ohm continuity testing.",
    image: IMG.pcb_etch,
    prerequisites: {
      compatibleLasers: "MOPA Fiber Galvo lasers (1064nm, short pulse widths 4ns-15ns, 30W-50W class) or UV lasers (355nm wavelength). Short pulse widths generate high peak power density to exceed copper ablation threshold before thermal conduction heats underlying FR4 epoxy.",
      unsuitableLasers: "Standard CO2 lasers (10.6µm) reflect off copper completely while burning FR4 substrate; continuous-wave (CW) lasers melt copper into short-circuit bridges.",
      minimumSpecs: "Enclosed galvo laser column, F-Theta scan lens, dual red-dot focus pointer, HEPA metal fume extraction system.",
      safetyHazards: "TOXIC METAL DUST & HEPA EXTRACTION: Copper laser ablation generates fine airborne copper/metal particulates and FR4 fiberglass/epoxy resin vapors. Active HEPA metal fume extraction and P3 respirator are mandatory. Solvent Flammability: Acetone and IPA solvents are highly flammable. Allow complete surface evaporation before operating laser.",
      safetyEyewear: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone."
    },
    materialSelection: "Use standard 1.6mm FR4 single or double-sided copper-clad laminates with 35µm (1 oz) copper layer thickness. Measure copper layer thickness before setting pass counts. Note: Bare copper reflects ~95% of 1064nm NIR light and has high thermal conductivity (400 W/mK). Applying a ultra-thin coat of matte black spray paint onto bare copper increases beam absorption from 5% to 90%, accelerating clean 35µm copper vaporization.",
    designPrep: "Export circuit design from KiCad/Altium in Gerber format. Import into LightBurn Galvo or EZCAD3. Convert traces into vector clearance outlines using 'Offset Isolation Trace' tool with a 0.15mm to 0.20mm clearance width around copper traces. Set cross-hatch fill grid (0.01mm pitch, 0° and 90° cross passes, 4 total passes).",
    laserSetup: "Fixture FR4 copper laminate flat in a precision galvo alignment pocket jig. Converge dual red-dot focus pointers precisely on top copper surface plane. Ensure local HEPA metal fume extraction is active.",
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
      notes: "Air assist turned off for galvo marking; keep enclosure HEPA exhaust running continuously."
    },
    exhaust: {
      configuration: "Industrial HEPA metal particulate & VOC extraction system",
      measuredFlow: null,
      provenance: "REFERENCE_STARTING_POINT",
      notes: "Use effective local galvo HEPA exhaust sized for copper micro-dust and fiberglass VOCs."
    },
    exactParameters: {
      mopa30W: {
        sourceType: "30W MOPA Fiber Galvo (1064nm ref)",
        power: "85% controller setting (Copper Isolation Pass) / 40% controller setting (FR4 Clearance Pass)",
        speed: "450 mm/s (Copper Isolation) / 1500 mm/s (FR4 Clearance)",
        passes: "4 Cross-Hatch Passes (0.01mm hatch pitch, 0°, 90°, 45°, 135°)",
        lineInterval: "0.010mm hatch pitch",
        airAssist: "Off at marking point",
        focusOffset: "0.0mm (Surface focus plane)",
        frequency: "20 kHz (Short pulse peak power)",
        pulseWidth: "8 ns (Short pulse width limits thermal HAZ)",
        provenance: "REFERENCE_STARTING_POINT",
        physicallyTested: false
      }
    },
    materialTestGuide: "Perform a 4-pass cross-hatch ablation box (5mm x 5mm) on scrap 35µm copper clad board at 450 mm/s @ 85% power, 20 kHz, 8ns pulse width. Check with digital multimeter resistance mode to confirm complete isolation (>10 MΩ resistance across boundary).",
    steps: [
      {
        title: "Substrate Preparation & Matte Black Absorber Coating",
        action: "Clean 35µm copper clad board with acetone, spray a thin uniform coat of matte black spray paint onto copper face, and let dry 10 minutes.",
        why: "Matte black coating drops 1064nm laser reflection from 95% down to 10%, maximizing laser energy absorption during initial passes.",
        lookFor: "Uniform matte black coating over copper face without bare metal reflections.",
        possibleFailure: "Attempting to ablate bare shiny copper requires extreme laser power that scorches underlying FR4 fiberglass substrate.",
        detail: "Wipe copper face with acetone, spray light matte black coat from 25cm, allow 10 min dry time."
      },
      {
        title: "Gerber Isolation Trace & Cross-Hatch Configuration",
        action: "Import Gerber file into LightBurn Galvo, generate 0.15mm isolation offset vectors, configure 0.01mm cross-hatch (4 passes @ 0°, 90°, 45°, 135°).",
        why: "4-pass cross-hatching vaporizes 35µm copper layer in micro-steps without leaving standing copper ridge shorts.",
        lookFor: "Isolation outline preview showing 0.15mm trace clearance and 4-pass cross-hatch rotation.",
        possibleFailure: "Single-pass hatching leaves microscopic copper bridges between high-density SMD pads.",
        detail: "Load Gerber, apply 0.15mm offset isolation, set 0.01mm hatch pitch, set 4 cross-angle passes."
      },
      {
        title: "Galvo Focus & MOPA Pulse Parameter Setup",
        action: "Converge dual red-dot focus pointers on top copper face, set 30W MOPA parameters (450 mm/s, 85% power, 20 kHz, 8ns pulse width), enable HEPA exhaust.",
        why: "Short 8ns pulse width delivers gigawatt peak pulse density to vaporize copper while restricting thermal spread into FR4 resin.",
        lookFor: "Dual red dots converged into single sharp point; HEPA extraction active.",
        possibleFailure: "Long pulse widths (>100ns) or continuous wave laser mode char FR4 epoxy into conductive carbon paths.",
        detail: "Focus galvo column, set 8ns pulse width, set 20 kHz frequency, turn on HEPA exhaust."
      },
      {
        title: "Direct Copper Vaporization Execution",
        action: "Close galvo enclosure doors, check safety eyewear, press Start for 4-pass copper isolation ablation.",
        why: "Vaporizes 35µm copper clad along vector isolation channels, exposing non-conductive yellowish FR4 fiberglass beneath.",
        lookFor: "Bright green/orange copper plasma spark; crisp exposed FR4 channel lines forming around circuit traces.",
        possibleFailure: "Out-of-focus galvo beam leaves partial copper layer intact, causing trace short circuits.",
        detail: "Close enclosure, check eyewear, press Start, observe copper vaporization."
      },
      {
        title: "Acetone Paint Stripping & Mega-Ohm Continuity Verification",
        action: "Wipe board with acetone to remove matte black absorber paint, scrub in IPA ultrasonic bath, and test isolation resistance with digital multimeter.",
        why: "Removes black paint to reveal clean copper traces; multimeter testing confirms trace isolation (>10 MΩ resistance).",
        lookFor: "Gleaming copper traces separated by clean FR4 channels; multimeter reading >10 MΩ (Open Circuit).",
        possibleFailure: "Multimeter reading <100 kΩ indicates residual copper dust or charred FR4 carbon shorts inside isolation channels.",
        detail: "Wipe black paint off with acetone cloth, dry board, probe adjacent traces with multimeter in MΩ resistance mode."
      }
    ],
    troubleshooting: [
      {
        symptom: "Digital multimeter measures electrical continuity (<100 kΩ) between adjacent isolated PCB traces",
        probableCause: "Pass count was insufficient to cut through full 35µm copper thickness, or FR4 substrate was charred into carbon",
        correctiveAction: "Increase cross-hatch pass count to 6 or shorten MOPA pulse width to 4ns to prevent FR4 carbonization."
      },
      {
        symptom: "FR4 fiberglass substrate is severely scorched black and blistered beneath traces",
        probableCause: "Galvo scan speed was too slow or pulse frequency too low, dumping excessive thermal energy into resin",
        correctiveAction: "Increase scan speed to 600 mm/s, set pulse width to 8ns, and increase frequency to 30 kHz."
      },
      {
        symptom: "Laser reflects off shiny copper without removing metal",
        probableCause: "Matte black absorber paint coat was omitted or laser beam spot was out of focus",
        correctiveAction: "Coat bare copper face with matte black spray paint and converge dual red-dot focus pointers precisely."
      }
    ],
    proTips: [
      "Apply a thin coat of matte black spray paint onto bare copper before laser ablation; increases 1064nm absorption from 5% to 90%.",
      "Use short MOPA pulse widths (4ns-8ns) at 20 kHz to exceed copper ablation threshold without burning underlying FR4 epoxy resin.",
      "Always test isolation channels with a digital multimeter in resistance mode to verify >10 MΩ isolation before soldering components."
    ],
    safety: "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. TOXIC DUST HAZARD: Copper ablation and FR4 fiberglass processing produce hazardous particulates and resin VOCs; active HEPA extraction required. Wear P3 respirator. Solvent Safety: Acetone and IPA are highly flammable."
  }
];
