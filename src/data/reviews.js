import { IMG } from "./images.js";
import { KINTIX_VIDEOS } from "./videos.js";

export const REVIEWS = [
  // ---------------- FEATURED: Genmitsu Kintix (hybrid galvo) ----------------
  {
    id: "rev-011",
    slug: "kintix",
    featured: true,
    name: "Genmitsu Kintix 10W Galvo",
    brand: "Genmitsu",
    category: "Hybrid Galvo Laser",
    laserType: "fiber",
    wattage: "10W optical output (455nm blue diode)",
    spotSize: "0.01 mm galvo precision spot",
    lineIntervalMin: "0.01 mm (2540 DPI)",
    workArea: "200 x 100 mm field",
    controllerType: "GRBL galvo + Wi-Fi / CutLab / LightBurn",
    compatibility: ["LightBurn 1.6+", "CutLab", "LaserGRBL", "Kintix App"],
    rating: 4.8,
    priceRange: "$$ (~$549)",
    image: IMG.machine_purple,
    videos: KINTIX_VIDEOS,
    benchmarks: {
      maxSpeed: "90,000 mm/min (1,500 mm/sec galvo)",
      woodEngrave: "100% power @ 45,000 mm/min (1 Pass)",
      stainlessSteelMark: "100% power @ 12,000 mm/min (2 Passes, dark oxide)",
      plywoodCut3mm: "100% power @ 400 mm/min (3 Passes with Air Assist)",
      acrylicCut3mm: "Dark opaque acrylic cut @ 300 mm/min (4 Passes)"
    },
    hardwareSpecs: {
      frame: "Class 1 Fully Enclosed Anodized Frame with Red Filter Shield",
      motionSystem: "Galvo mirrors on Y-axis with high-torque step motor X-gantry",
      focusSystem: "Electric Lifting Motorized Z-Axis Focus with dual red-dot framing",
      safetyRating: "Class 1 Laser Safety, lid interlock sensor, tilt & flame detectors"
    },
    pros: [
      "Blazing galvo speed — up to 90,000 mm/min for ultra-fast batch marking",
      "Fully enclosed Class 1 eye-safe enclosure with built-in smoke extraction fan",
      "Electric motorized Z-axis lifting for effortless auto-focus on variable height parts",
      "Native LightBurn & CutLab App integration over Wi-Fi, Ethernet, or USB-C",
      "Crisp 0.01 mm detail on wood, leather, coated metal, stainless steel & stone"
    ],
    cons: [
      "200 x 100 mm marking field is suited for small-to-medium parts, not large signs",
      "455nm blue diode source cannot pass through clear acrylic or clear glass without coating",
      "Cutting speed on thick 6mm+ hardwood is limited compared to high-power CO2"
    ],
    summary: "Genmitsu's Kintix is a revolutionary hybrid galvo laser: it fires a 455nm blue diode through high-speed galvo mirrors mounted on a motorized axis, achieving up to 90,000 mm/min marking speeds. It is our top pick for small shops and creators who need Class 1 safety, motorized auto-focus, and ultra-fast detailed marking on wood, leather, stainless steel, slate, and ceramics."
  },

  {
    id: "rev-012",
    name: "Genmitsu Kintix 5W Galvo",
    brand: "Genmitsu",
    category: "Hybrid Galvo Laser",
    laserType: "fiber",
    wattage: "5W optical output (455nm blue diode)",
    spotSize: "0.01 mm galvo precision spot",
    lineIntervalMin: "0.01 mm (2540 DPI)",
    workArea: "200 x 100 mm field",
    controllerType: "GRBL galvo + Wi-Fi / CutLab / LightBurn",
    compatibility: ["LightBurn 1.6+", "CutLab", "LaserGRBL", "Kintix App"],
    rating: 4.6,
    priceRange: "$$ (~$429)",
    image: IMG.machine_blue,
    benchmarks: {
      maxSpeed: "90,000 mm/min",
      woodEngrave: "100% power @ 30,000 mm/min",
      stainlessSteelMark: "100% power @ 8,000 mm/min (3 Passes)",
      plywoodCut3mm: "100% power @ 200 mm/min (5 Passes)"
    },
    hardwareSpecs: {
      frame: "Class 1 Fully Enclosed Anodized Frame",
      motionSystem: "Galvo mirrors + Y-gantry",
      focusSystem: "Electric Lifting Z-Axis Focus",
      safetyRating: "Class 1 Laser Safety with Interlock"
    },
    pros: [
      "Same ultra-fast 90,000 mm/min galvo motion engine as the 10W model",
      "Fine 0.01 mm optical spot for micro-text, barcodes, and detailed graphic artwork",
      "Class 1 enclosed safety enclosure makes it ideal for home studios and craft fairs",
      "Substantially lower price point into the galvo laser workflow"
    ],
    cons: [
      "5W optical output is slower when engraving dark hardwoods or thick leather",
      "Not recommended for vector cutting stock thicker than 2mm",
      "200 x 100 mm field requires repositioning for long items"
    ],
    summary: "The 5W Kintix delivers the same hybrid-galvo speed, motorized focus, and Class 1 safety enclosure as its 10W sibling at a more accessible price. It is ideal for jewellers, hobbyists, and customizers working on small metal, leather, and wooden blanks."
  },

  {
    id: "rev-001",
    name: "xTool D1 Pro 20W",
    brand: "xTool",
    category: "Desktop Diode",
    laserType: "diode",
    wattage: "20W optical (Quad-diode module)",
    spotSize: "0.08 x 0.10 mm compressed spot",
    lineIntervalMin: "0.05 mm (508 DPI)",
    workArea: "430 x 400 mm",
    controllerType: "32-bit Custom Controller",
    compatibility: ["LightBurn", "XCS (xTool Creative Space)", "LaserGRBL"],
    rating: 4.6,
    priceRange: "$$",
    image: IMG.machine_diode,
    benchmarks: {
      maxSpeed: "24,000 mm/min (400 mm/sec)",
      woodEngrave: "35% power @ 12,000 mm/min",
      plywoodCut3mm: "100% power @ 360 mm/min (1 Pass)",
      acrylicCut3mm: "100% power @ 180 mm/min (1 Pass, Black/Dark Acrylic)"
    },
    hardwareSpecs: {
      frame: "All-Steel Wheels and Aluminum Extrusion Frame",
      motionSystem: "Steel synchronous belts with stainless steel rollers",
      focusSystem: "Manual drop-down focal lever",
      safetyRating: "Class 4 open frame (Enclosure optional)"
    },
    pros: [
      "Exceptionally rigid frame structure minimizes high-speed vector wobble",
      "Quad-diode compression delivers clean 1-pass cuts on 3mm-6mm plywood",
      "Full LightBurn compatibility alongside beginner-friendly XCS software",
      "Rich accessory ecosystem including rotary, riser feet, and extension kits"
    ],
    cons: [
      "Class 4 open frame requires purchasing an optional enclosure for smoke containment",
      "Air assist pump is sold separately in base configuration",
      "Cannot cut clear or white acrylic due to 455nm diode wavelength"
    ],
    summary: "The xTool D1 Pro 20W is a benchmark desktop diode engraver. Its quad-diode laser head and solid steel-wheeled frame deliver clean, 1-pass cutting on 3mm plywood and reliable LightBurn control for serious maker workshops."
  },

  {
    id: "rev-002",
    name: "Sculpfun S30 Ultra 33W",
    brand: "Sculpfun",
    category: "Desktop Diode",
    laserType: "diode",
    wattage: "33W optical (6-diode beam combination)",
    spotSize: "0.08 x 0.08 mm square spot",
    lineIntervalMin: "0.05 mm",
    workArea: "600 x 600 mm (Massive Format)",
    controllerType: "32-bit GRBL Mainboard with Auto Air Assist Valve",
    compatibility: ["LightBurn 1.6+", "LaserGRBL"],
    rating: 4.5,
    priceRange: "$$",
    image: IMG.machine_blue,
    benchmarks: {
      maxSpeed: "18,000 mm/min",
      woodEngrave: "25% power @ 10,000 mm/min",
      plywoodCut6mm: "100% power @ 200 mm/min (1 Pass with Auto Air Assist)",
      pineWoodCut10mm: "100% power @ 100 mm/min (1 Pass)"
    },
    hardwareSpecs: {
      frame: "High-precision Linear Guide Rail on X-axis",
      motionSystem: "Industrial-grade linear rail + heavy timing belts",
      focusSystem: "Replaceable protective lens module with fixed focus block",
      safetyRating: "Class 4 Open Frame"
    },
    pros: [
      "Huge 600 x 600 mm default work area out of the box without extension kits",
      "Automatic software-controlled air assist pump included in the box",
      "33W optical output cuts up to 10mm pine in a single pass",
      "Includes replaceable protective glass lens to prevent smoke damage"
    ],
    cons: [
      "Open frame takes up a massive workbench footprint (approx. 900x850mm)",
      "High power diode generates heavy smoke that demands an external duct fan",
      "Assembly takes 45-60 minutes out of the box"
    ],
    summary: "Sculpfun's S30 Ultra 33W combines an industrial linear X-rail, automatic LightBurn-controlled air assist, and a massive 600x600mm bed. It is an absolute workhorse for cutting large signs, furniture parts, and thick plywood."
  },

  {
    id: "rev-004",
    name: "OMTech Polar 50W CO2",
    brand: "OMTech",
    category: "CO2 Laser",
    laserType: "co2",
    wattage: "50W Glass CO2 Tube (10.6 µm)",
    spotSize: "0.10 - 0.12 mm beam waist",
    lineIntervalMin: "0.025 mm (1000 DPI)",
    workArea: "300 x 500 mm (12 x 20 in)",
    controllerType: "Ruida-based Enclosed DSP Controller",
    compatibility: ["LightBurn (Ruida DSP License)"],
    rating: 4.6,
    priceRange: "$$$",
    image: IMG.machine_co2,
    benchmarks: {
      maxSpeed: "30,000 mm/min (500 mm/sec)",
      castAcrylicCut6mm: "60% power @ 12 mm/sec (1 Pass, Flame-polished edge)",
      birchPlyCut6mm: "65% power @ 15 mm/sec (1 Pass)",
      glassEngrave: "18% power @ 300 mm/sec (1 Pass)"
    },
    hardwareSpecs: {
      frame: "Class 1 Fully Enclosed Compact Chassis",
      motionSystem: "Linear guide rails on X & Y axes",
      focusSystem: "Integrated Wide-Angle Lid Camera with Auto Focus Pin",
      safetyRating: "Class 1 Laser Safety with Emergency E-Stop and Chiller Interlock"
    },
    pros: [
      "Cuts clear, colored, and mirrored acrylic effortlessly with flame-polished edges",
      "Integrated 5MP lid camera provides real-time drag-and-drop alignment in LightBurn",
      "Includes internal water chiller, exhaust fan, and air compressor built-in",
      "Fully enclosed Class 1 desktop unit ideal for home studios and office settings"
    ],
    cons: [
      "CO2 glass tube requires eventual replacement after 2,000 - 4,000 hours of use",
      "Heavy unit weighing 42 kg (92 lbs) requiring a sturdy desk",
      "Requires LightBurn DSP license module for full control"
    ],
    summary: "The OMTech Polar 50W is the ultimate turnkey enclosed CO2 laser for creators. With an integrated camera for instant material alignment, built-in cooling, and full 10.6µm CO2 versatility, it cuts clear acrylic and wood up to 8mm thick with ease."
  },

  {
    id: "rev-006",
    name: "Thunder Laser Nova 35",
    brand: "Thunder Laser",
    category: "CO2 Laser",
    laserType: "co2",
    wattage: "80W RECI W2 CO2 Glass Tube",
    spotSize: "0.08 - 0.10 mm high-resolution beam",
    lineIntervalMin: "0.025 mm",
    workArea: "900 x 600 mm (35.4 x 23.6 in)",
    controllerType: "Ruida RDC6445G Industrial DSP",
    compatibility: ["LightBurn DSP", "RDWorks V8"],
    rating: 4.9,
    priceRange: "$$$$",
    image: IMG.cnc2,
    benchmarks: {
      maxSpeed: "60,000 mm/min (1,000 mm/sec Hybrid Servo)",
      plywoodCut12mm: "70% power @ 12 mm/sec (1 Pass)",
      acrylicCut10mm: "75% power @ 8 mm/sec (1 Pass)",
      woodEngrave: "20% power @ 600 mm/sec"
    },
    hardwareSpecs: {
      frame: "Heavy Duty Welded Steel Industrial Chassis",
      motionSystem: "Hybrid Servo Motors on linear guide rails",
      focusSystem: "Auto-Focus Touch Probe + Motorized Z-Table",
      safetyRating: "Class 1 Enclosed with Key Switch, Interlocks, and Alarm Warning"
    },
    pros: [
      "Commercial-grade production speed and 24/7 reliability for businesses",
      "Front and rear pass-through doors allow processing unlimited length sheets",
      "Hybrid servo motor drive delivers smooth vector motion with zero missed steps",
      "Backed by industry-renowned technical support and comprehensive documentation"
    ],
    cons: [
      "Requires dedicated workshop space (Dimensions: 1500 x 1100 x 1050 mm, Weight: 280 kg)",
      "High capital investment suited for production businesses rather than casual hobbyists",
      "Requires external water chiller (CW-5200) and heavy exhaust ducting"
    ],
    summary: "The Thunder Laser Nova 35 (80W) is an industrial benchmark. Featuring hybrid servo drives, a genuine RECI W2 glass tube, Ruida DSP control, and front/rear pass-through doors, it is the gold standard for full-time fabrication shops."
  },

  {
    id: "rev-007",
    name: "OMTech 30W Fiber Galvo",
    brand: "OMTech",
    category: "Fiber / Galvo",
    laserType: "fiber",
    wattage: "30W Raycus Fiber Source (1064nm)",
    spotSize: "0.02 mm ultra-fine galvo spot",
    lineIntervalMin: "0.005 mm (5080 DPI)",
    workArea: "110 x 110 mm Field (F160 Theta Lens)",
    controllerType: "BJJCZ EzCad2 / LightBurn Galvo",
    compatibility: ["EZCAD2", "LightBurn Galvo 1.6+"],
    rating: 4.7,
    priceRange: "$$$",
    image: IMG.machine_fiber,
    benchmarks: {
      maxSpeed: "420,000 mm/min (7,000 mm/sec Galvo)",
      brassDeepEngrave: "80% power @ 1,200 mm/sec (20 Passes, 0.5mm depth)",
      stainlessSteelMark: "45% power @ 500 mm/sec (1 Pass, High-contrast black)",
      anodizedAluminium: "30% power @ 3,000 mm/sec (1 Pass, Bright white)"
    },
    hardwareSpecs: {
      frame: "Compact Tower Galvo Workstation",
      motionSystem: "Dual-Axis Sino-Galvo High Speed Scanners",
      focusSystem: "Manual Z-Axis Column with Dual Red-Dot Focus Convergence",
      safetyRating: "Class 4 Open Galvo Tower (Enclosure recommended)"
    },
    pros: [
      "Instantaneous marking speeds up to 7,000 mm/sec on stainless steel, brass & titanium",
      "100,000+ hour fiber laser source lifespan with zero tube or mirror maintenance",
      "Capable of deep coin/die relief engraving into raw metals with multi-pass hatch",
      "Full LightBurn Galvo license support eliminates clunky legacy software"
    ],
    cons: [
      "1064nm fiber wavelength cannot engrave raw wood, acrylic, glass, or organic leather",
      "110 x 110 mm field size requires swapping lenses for larger objects",
      "Generates metal dust fumes requiring dedicated fume extraction with HEPA filter"
    ],
    summary: "OMTech's 30W Raycus Fiber Galvo is a high-speed powerhouse for metal marking, serialization, firearm engraving, and coin minting. With 7,000 mm/sec galvo scanners and 100,000-hour diode life, it is the go-to machine for metal fabricators."
  },

  {
    id: "rev-019",
    name: "Acmer P2 33W",
    brand: "Acmer",
    category: "Desktop Diode",
    laserType: "diode",
    wattage: "33W optical (445nm 6-diode module)",
    spotSize: "0.08 x 0.10 mm compressed spot",
    lineIntervalMin: "0.05 mm",
    workArea: "420 x 400 mm (Expandable to 420 x 800 mm)",
    controllerType: "32-bit ESP32 Mainboard with 30 L/min Auto Air Pump",
    compatibility: ["LightBurn 1.6+", "LaserGRBL", "Acmer App"],
    rating: 4.6,
    priceRange: "$$",
    image: IMG.machine_purple,
    benchmarks: {
      maxSpeed: "30,000 mm/min (500 mm/sec)",
      plywoodCut12mm: "100% power @ 180 mm/min (1 Pass)",
      acrylicCut10mm: "100% power @ 120 mm/min (1 Pass, Opaque)",
      woodEngrave: "20% power @ 15,000 mm/min"
    },
    hardwareSpecs: {
      frame: "Industrial Dual Linear Guide Rails on X & Y Axes",
      motionSystem: "Precision steel linear rails + high-resolution stepper motors",
      focusSystem: "Fixed focus lever with quick-adjust Z-thumb screw",
      safetyRating: "Class 4 Open Frame with Flame Sensor and Gyro Tilt Lock"
    },
    pros: [
      "Industrial linear rails on BOTH X and Y axes for silky smooth, wobble-free motion",
      "Includes a genuinely quiet 30 L/min automatic air assist pump in the package",
      "Massive 33W optical punch slices through 12mm plywood in a single clean pass",
      "Swappable laser module architecture supports 10W, 20W, 33W, and 1064nm IR heads"
    ],
    cons: [
      "Open frame generates heavy smoke demanding a protective hood or window vent",
      "Honeycomb bed is an optional add-on",
      "Heavy laser head module requires proper belt tensioning out of the box"
    ],
    summary: "Acmer's flagship P2 33W is an outstanding desktop diode laser. Built on dual linear guide rails with a quiet 30 L/min automatic air assist pump included, it delivers incredible cutting power and rock-solid motion stability for demanding creators."
  }
];

export const getReview = (id) => REVIEWS.find((r) => r.id === id || r.slug === id);
export const BRANDS = [...new Set(REVIEWS.map((r) => r.brand))].sort();
