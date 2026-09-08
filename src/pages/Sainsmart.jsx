import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  Check, 
  X, 
  ExternalLink, 
  Zap, 
  Crosshair, 
  Gauge, 
  Maximize, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight, 
  Award, 
  Compass, 
  Sparkles, 
  Flame, 
  Wrench, 
  Settings, 
  Package, 
  DollarSign, 
  Heart,
  ShoppingCart,
  Layers,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { getReview } from "@/data/reviews";
import { IMG } from "@/data/images";
import { FavouriteButton } from "@/components/FavouriteButton";
import { useLanguage } from "@/context/LanguageContext";

const sainsmartHero = "/images/sainsmart_hero_1786084432276.jpg";
const sainsmartExtension = "/images/sainsmart_extension_1786084445556.jpg";

export default function Sainsmart() {
  const { t } = useLanguage();
  const kintixReview = getReview("kintix");
  
  // Affiliate URLs
  const generalAffiliateUrl = "https://tidd.ly/457ZlDN";
  const awinAffiliateUrl = "https://www.awin1.com/awclick.php?gid=524031&mid=59085&awinaffid=2827540&linkid=4011291&clickref=";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      q: "How do I minimize Z-axis wobble on the Genmitsu 3018-PROVer V2?",
      a: "The 3018-PROVer V2 features a redesigned rigid aluminum carriage. To eliminate any remaining Z-axis vibration, ensure the dual linear guide rods are lubricated with high-viscosity silicone grease and verify that the coupler holding the lead screw to the stepper motor is tight with zero vertical slop."
    },
    {
      q: "What spindle upgrades are available for the PROVerXL 4030S?",
      a: "The PROVerXL 4030S comes standard with a powerful 710W trim-router-style spindle (a significant upgrade over the 300W/400W spindles of earlier models). To take this machine to its absolute peak performance, you can upgrade to a 1.5kW or 2.2kW Water-Cooled or Air-Cooled VFD (Variable Frequency Drive) brushless spindle. These industrial-grade spindles run extremely quiet, provide precise speed control, and deliver constant torque. Upgrading requires an 80mm aluminum spindle motor mount, designed to fit the PROVerXL series Z-axis carriage perfectly."
    },
    {
      q: "What materials can the Genmitsu 3020-PRO MAX machine?",
      a: "With its rigid steel guide rails and 200W high-speed DC spindle, the 3020-PRO MAX is purpose-built to mill soft metals like brass, 6061 aluminum, copper, and bronze, in addition to hardwoods, acrylics, carbon fiber sheets, and PCB blanks."
    },
    {
      q: "Why is air assist crucial for CNC laser engraving and cutting?",
      a: "Air assist shoots a high-velocity stream of compressed air directly at the focal point. This keeps the cut site clean of dust, prevents yellowing/charring on woods and plastics, and blows away smoke so the laser beam doesn't lose focus, increasing cutting speed and depth."
    },
    {
      q: "How does the Creality Ender-3 V3 SE handle bed leveling?",
      a: "The Ender-3 V3 SE utilizes a dual-probing system. It uses a CR-Touch optical sensor to map a 16-point bed mesh to compensate for any physical warp, and a built-in strain gauge sensor near the nozzle to calculate the precise Z-offset, eliminating the need for manual paper tests."
    }
  ];

  useEffect(() => {
    // Schema.org Structured Data (JSON-LD) with Multi-Type Support
    const schemaId = "sainsmart-seo-schema";
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": "SainSmart Genmitsu CNC Routers & Accessories Collection",
          "image": [
            "https://laserhuis.nl/images/sainsmart_hero_1786084432276.jpg"
          ],
          "description": "Expert hands-on review and comparison guide for SainSmart Genmitsu CNC machines, including the PROVerXL 4030S, 3018-PROVer, and professional bits.",
          "brand": {
            "@type": "Brand",
            "name": "SainSmart"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8",
              "bestRating": "5"
            },
            "author": {
              "@type": "Organization",
              "name": "Laserhuis"
            },
            "reviewBody": "SainSmart continues to dominate the maker landscape with their Genmitsu series. The modularity of the PROVerXL 4030S combined with high-precision tungsten bits makes it our top choice for desktop carving."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I minimize Z-axis wobble on the Genmitsu 3018-PROVer V2?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The 3018-PROVer V2 features a redesigned rigid aluminum carriage. To eliminate any remaining Z-axis vibration, ensure the dual linear guide rods are lubricated with high-viscosity silicone grease and verify that the coupler holding the lead screw to the stepper motor is tight with zero vertical slop."
              }
            },
            {
              "@type": "Question",
              "name": "What spindle upgrades are available for the PROVerXL 4030S?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The PROVerXL 4030S comes standard with a powerful 710W trim-router-style spindle (a significant upgrade over the 300W/400W spindles of earlier models). To take this machine to its absolute peak performance, you can upgrade to a 1.5kW or 2.2kW Water-Cooled or Air-Cooled VFD (Variable Frequency Drive) brushless spindle. These industrial-grade spindles run extremely quiet, provide precise speed control, and deliver constant torque. Upgrading requires an 80mm aluminum spindle motor mount, designed to fit the PROVerXL series Z-axis carriage perfectly."
              }
            },
            {
              "@type": "Question",
              "name": "What materials can the Genmitsu 3020-PRO MAX machine?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "With its rigid steel guide rails and 200W high-speed DC spindle, the 3020-PRO MAX is purpose-built to mill soft metals like brass, 6061 aluminum, copper, and bronze, in addition to hardwoods, acrylics, carbon fiber sheets, and PCB blanks."
              }
            },
            {
              "@type": "Question",
              "name": "Why is air assist crucial for CNC laser engraving and cutting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Air assist shoots a high-velocity stream of compressed air directly at the focal point. This keeps the cut site clean of dust, prevents yellowing/charring on woods and plastics, and blows away smoke so the laser beam doesn't lose focus, increasing cutting speed and depth."
              }
            },
            {
              "@type": "Question",
              "name": "How does the Creality Ender-3 V3 SE handle bed leveling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Ender-3 V3 SE utilizes a dual-probing system. It uses a CR-Touch optical sensor to map a 16-point bed mesh to compensate for any physical warp, and a built-in strain gauge sensor near the nozzle to calculate the precise Z-offset, eliminating the need for manual paper tests."
              }
            }
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData);

    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const categories = [
    { id: "All", label: "All Gear" },
    { id: "CNC Routers", label: "CNC Routers" },
    { id: "CNC Bits", label: "CNC Bits" },
    { id: "CNC Accessories", label: "CNC Accessories" },
    { id: "Laser Accessories", label: "Laser Accessories" },
    { id: "3D Printers", label: "3D Printers" },
  ];
  
  // Specific products list for our featured showcase
  const topProducts = [
    {
      id: "pro-3018",
      name: "Genmitsu 3018-PROVer V2 CNC Router",
      category: "CNC Routers",
      tag: "Best for Beginners",
      price: "$349.00",
      rating: 4.7,
      image: IMG.cnc1,
      specs: [
        { label: "Working Area", value: "300 x 180 x 45 mm" },
        { label: "Spindle", value: "775 Spindle (up to 10,000 RPM)" },
        { label: "Frame", value: "Rigid Aluminum & Acrylic" },
        { label: "Control", value: "Offline Controller / GRBL" }
      ],
      pros: [
        "Pre-assembled out of the box — start engraving in under 30 minutes",
        "Optocoupler isolation protects mainboard from electrostatic damage",
        "Redesigned aluminum frame is more robust and minimizes z-axis wobble",
        "Includes emergency stop button and limit switches on all axes"
      ],
      description: "The Genmitsu 3018-PROVer V2 is the gold standard for CNC engraving beginners. Redesigned with a more robust aluminum frame that minimizes Z-axis wobble.",
      link: generalAffiliateUrl
    },
    {
      id: "pro-3020",
      name: "Genmitsu 3020-PRO MAX Metal CNC Router",
      category: "CNC Routers",
      tag: "Best Metal Carver",
      price: "$649.00",
      rating: 4.8,
      image: IMG.cnc2,
      specs: [
        { label: "Working Area", value: "300 x 200 x 78 mm" },
        { label: "Spindle", value: "200W DC Spindle (up to 12,000 RPM)" },
        { label: "Frame", value: "All-Metal Heavy Duty Aluminum" },
        { label: "Linear Rails", value: "Dual Steel Linear Guide Rails" }
      ],
      pros: [
        "Extremely heavy all-metal build for rock-solid stability during operation",
        "Comes with powerful 200W spindle for deeper carving on raw brass, aluminum & copper",
        "Silky-smooth dual steel linear rails on X & Y axes prevent vector slop",
        "Easily upgradeable with higher wattage spindles or laser modules"
      ],
      description: "An absolute powerhouse. Built entirely from precision aluminum and steel, the 3020-PRO MAX is designed specifically to chew through soft metals, hardwoods, and high-density resins with zero flex and industrial-grade accuracy.",
      link: generalAffiliateUrl
    },
    {
      id: "proverxl-4030s",
      name: "Genmitsu PROVerXL 4030S CNC Router",
      category: "CNC Routers",
      tag: "Best Professional Value",
      price: "$999.00",
      rating: 4.9,
      image: sainsmartHero,
      specs: [
        { label: "Working Area", value: "400 x 300 x 130 mm" },
        { label: "Spindle", value: "710W Router Spindle (Upgradeable to 1.5/2.2kW VFD)" },
        { label: "Frame", value: "All-Aluminum Heavy-Duty Profile" },
        { label: "Drive System", value: "Dual-Y Lead Screws + Drag Chains" }
      ],
      pros: [
        "Excellent rigid heavy-duty platform with a true 130 mm Z-Axis travel depth",
        "Fully upgradeable to 6060 (600x600mm) or 1010 (1000x1000mm) working sizes",
        "Includes drag chains, emergency stop, and limit switches pre-wired out of the box",
        "Solid precision frame ensures outstanding accuracy on hardwoods and aluminum"
      ],
      description: "Engineered for power and expandability. The PROVerXL 4030S features a massive 130mm of vertical Z-axis clearance, precision lead screws, and drag chains for industrial-grade wood and aluminum machining.",
      link: generalAffiliateUrl
    },
    {
      id: "mc40a-bits",
      name: "Genmitsu MC40A 40Pcs CNC End Mill Set",
      category: "CNC Bits",
      tag: "Overall Best Value",
      price: "$55.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Shank Diameter", value: "1/8\" (3.175mm)" },
        { label: "Coating", value: "Nano Blue & Titanium Coat" },
        { label: "Material", value: "0.2μm Tungsten Carbide Alloy" },
        { label: "Quantity", value: "40 Pieces Complete Assortment" }
      ],
      pros: [
        "Includes flat nose, ball nose, and multiple micro end-mills for all carving types",
        "Nano Blue and Titanium coatings dramatically improve wear resistance and service life",
        "Continuous machining capacity of up to 800 minutes on industrial hardwoods",
        "Perfectly compatible with Genmitsu 3018, 3020, and 4030S series CNC machines"
      ],
      description: "The ultimate starter pack for CNC makers. Features 40 distinct tungsten carbide end mills covering everything from detailed 3D relief carving to clean pocketing and profile cuts.",
      link: awinAffiliateUrl
    },
    {
      id: "nanoblue-10pc",
      name: "Genmitsu 10Pcs Nano Blue Coat End Mills",
      category: "CNC Bits",
      tag: "High Wear Resistance",
      price: "$16.99",
      rating: 4.8,
      image: "/images/nano_blue_bits_1786089602050.jpg",
      specs: [
        { label: "Shank Diameter", value: "1/8\" (3.175mm)" },
        { label: "Cutting Dia", value: "0.8 mm to 3.0 mm (Mixed)" },
        { label: "Coating", value: "Nano Blue Silica Coating" },
        { label: "Material", value: "Solid Tungsten Carbide" }
      ],
      pros: [
        "Incredible heat dissipation allows higher spindle RPMs and feed rates",
        "High hardness rating of HRC65 prolongs tool life by up to 3x",
        "Extremely sharp cutting edges minimize tearout on delicate woods and plastics",
        "Saves money by offering a premium coating at an entry-level price point"
      ],
      description: "A high-performance set of 10 micro-milling bits. Ideal for precise PCB carving, acrylic engraving, and fine detail cutting on soft metals or high-density plastic sheets.",
      link: awinAffiliateUrl
    },
    {
      id: "vgroove-10pc",
      name: "Genmitsu V-Groove Carbide Engraving Bits (10Pcs)",
      category: "CNC Bits",
      tag: "Best for Detail Work",
      price: "$14.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Degrees", value: "20 / 30 / 45 / 60 / 90 (Assorted)" },
        { label: "Shank Diameter", value: "1/8\" (3.175mm)" },
        { label: "Edge Angle", value: "V-shape single flute" },
        { label: "Coating", value: "Titanium Coated" }
      ],
      pros: [
        "Razor-sharp cutting edge produces clean, burr-free chamfered lines",
        "Perfect for text carving, signmaking, and detailed vector line scoring",
        "Constructed from high-grade tungsten steel for long-lasting wear limits",
        "Assorted angles let you adapt cut width and slope to any font size"
      ],
      description: "High-precision V-groove carving bits. Essential for fine calligraphy, detailed logos, PCB trace isolation, and chamfering edges on wood, plastics, and aluminum blanks.",
      link: awinAffiliateUrl
    },
    {
      id: "kag01-honeycomb",
      name: "Genmitsu KAG01 Aluminum Honeycomb Grid",
      category: "CNC Accessories",
      tag: "Best for Laser/CNC",
      price: "$39.99",
      rating: 4.8,
      image: sainsmartExtension,
      specs: [
        { label: "Grid Size", value: "400 x 400 x 22 mm" },
        { label: "Frame", value: "Heavy-Duty Aluminum Extrusion" },
        { label: "Grid Material", value: "Steel Honeycomb Core" },
        { label: "Compatibility", value: "Universal Laser & CNC" }
      ],
      pros: [
        "Honeycomb structure accelerates smoke venting and protects workbench surface",
        "Durable steel core supports magnetic pins for holding down light materials",
        "Double-metal trim prevents warping under heavy laser exposure",
        "Includes a lightweight aluminum plate to catch fallen cutting debris"
      ],
      description: "This versatile honeycomb working bed is an absolute essential for clean laser engraving and CNC hobbyists alike. Provides fast heat dissipation to prevent yellowing or charring.",
      link: awinAffiliateUrl
    },
    {
      id: "dust-shoe",
      name: "Genmitsu CNC Dust Shoe Spindle Cover",
      category: "CNC Accessories",
      tag: "Workshop Cleanliness",
      price: "$21.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Spindle Dia", value: "52 mm / 65 mm (Split Option)" },
        { label: "Connection", value: "Vacuum hose inlet (32mm/40mm)" },
        { label: "Seal Material", value: "Dense Nylon Bristle Brush" },
        { label: "Design", value: "Magnetic Quick-Release Split" }
      ],
      pros: [
        "Magnetic separation lets you change CNC bits in seconds without removing the shoe",
        "Ultra-dense nylon bristles contain all carving chips and fine dust particles",
        "Extremely lightweight structure doesn't burden the Z-axis carriage during quick steps",
        "Fits securely on 775, 300W, and aftermarket Sukin/DeWalt spindle models"
      ],
      description: "Keep your workshop pristine. The Genmitsu Dust Shoe uses a premium magnetic quick-release design to capture 99% of wood chips and airborne dust directly at the spindle tip.",
      link: awinAffiliateUrl
    },
    {
      id: "holddown-clamps",
      name: "Genmitsu T-Track Hold Down Clamps (4-Pack)",
      category: "CNC Accessories",
      tag: "Heavy Duty Clamping",
      price: "$14.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Quantity", value: "4 Clamps with T-Bolts" },
        { label: "Compatibility", value: "Fits 3018, 4030S, and Standard T-tracks" },
        { label: "Material", value: "Premium CNC Anodized Aluminum" },
        { label: "Padding", value: "Rubber Coated Protective Feet" }
      ],
      pros: [
        "Sturdy anodized aluminum bars distribute pressure without crushing wood or soft metals",
        "Quick-turn wing knobs enable lightning-fast blank loading and unloading",
        "Extended reach arms allow secure clamping on oversized or awkwardly shaped carvings",
        "Heavy-duty brass thread inserts resist wearing over hundreds of setups"
      ],
      description: "Heavy-duty workholding clamps designed for standard aluminum T-track spoilboards. Delivers incredibly secure vertical down-force to eliminate vibration or material shifting.",
      link: awinAffiliateUrl
    },
    {
      id: "air-assist",
      name: "Genmitsu Laser Air Assist Pump",
      category: "Laser Accessories",
      tag: "Best for Deep Cuts",
      price: "$69.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Air Flow Rate", value: "Adjustable 0 - 16 Liters/Min (LPM)" },
        { label: "Noise Level", value: "Ultra-Quiet (< 60dB)" },
        { label: "Power Input", value: "DC 12V 2A Adapter" },
        { label: "Hose Length", value: "1.5 Meters Protective Tubing" }
      ],
      pros: [
        "Instantly increases laser cutting depth and speed while preventing scorch marks",
        "Adjustable flow knob lets you fine-tune air pressure for engraving vs. cutting",
        "Rugged metal housing dampens internal motor vibrations for incredibly quiet use",
        "Universal fit for 99% of desktop laser engravers and fixed-focus modules"
      ],
      description: "The ultimate accessory for laser engravers. Delivers a continuous, focused stream of air that pushes away smoke and carbon debris, resulting in flawless, pristine cut edges.",
      link: generalAffiliateUrl
    },
    {
      id: "laser-enclosure",
      name: "Genmitsu Laser Protective Enclosure V2",
      category: "Laser Accessories",
      tag: "Essential Safety",
      price: "$89.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Overall Size", value: "700 x 700 x 460 mm" },
        { label: "Window", value: "OD4+ Protective Viewport Window" },
        { label: "Structure", value: "Steel tubing + fire-retardant fabric" },
        { label: "Exhaust Fan", value: "Integrated 12V High-Velocity Fan" }
      ],
      pros: [
        "Filters out dangerous laser radiation and smoke with active fume extraction",
        "Foldable design makes it highly portable and easy to pack away when not in use",
        "Waterproof and dustproof protective cover keeps your lasers pristine and dry",
        "Thick layered fiberglass build prevents smoke escape for odorless home indoor crafting"
      ],
      description: "A high-security, fire-retardant laser box equipped with an active ventilation exhaust and a heavy-duty laser-filtering viewing pane. Safely vents fumes out of your home workshop.",
      link: generalAffiliateUrl
    },
    {
      id: "rotary-roller",
      name: "Genmitsu V2 Laser Rotary Roller Module",
      category: "Laser Accessories",
      tag: "Most Versatile",
      price: "$57.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Cylinder Dia", value: "5 mm to 160 mm supported" },
        { label: "Motor Type", value: "NEMA 17 High-Torque Stepper" },
        { label: "Roller Spacing", value: "16 distinct adjustments (19-76mm)" },
        { label: "Connection", value: "Plug-and-play 4-pin connector" }
      ],
      pros: [
        "Tool-free spacing adjustments make swapping between pens and mugs incredibly simple",
        "Polyurethane coated rollers grip glassware perfectly to prevent slipping/layer shifts",
        "Rigid steel and aluminum frame design sits flat under any open-gantry laser frame",
        "Fully pre-assembled — just plug in your axis cable and start engraving immediately"
      ],
      description: "Unlock a whole new dimension of laser engraving. This pre-assembled, plug-and-play rotary roller lets you engrave mugs, tumblers, wine glasses, and cylindrical rods with incredible accuracy.",
      link: generalAffiliateUrl
    },
    {
      id: "ender3-v3-se",
      name: "SainSmart x Creality Ender-3 V3 SE",
      category: "3D Printers",
      tag: "Best Entry-Level FDM",
      price: "$199.00",
      rating: 4.7,
      image: "/images/ender3_v3_printer_1786089617431.jpg",
      specs: [
        { label: "Print Speed", value: "Up to 250 mm/s (Typical: 180 mm/s)" },
        { label: "Leveling", value: "CR Touch Hands-Free Auto Leveling" },
        { label: "Extruder", value: "Sprite Direct Drive Extruder" },
        { label: "Build Volume", value: "220 x 220 x 250 mm" }
      ],
      pros: [
        "Direct drive extruder feeds PLA, PETG, and flexible TPU materials flawlessly",
        "CR Touch and strain sensor guarantee a perfectly calibrated first layer every single time",
        "Sleek and slim body structure makes it ideal for dense home maker workspaces",
        "Pre-built modular sub-assemblies take under 20 minutes to assemble and turn on"
      ],
      description: "An incredible value collaboration. The Ender-3 V3 SE combines high-speed kinetics with a dual Z-axis, automatic bed leveling, and a Sprite direct drive for simple, reliable out-of-the-box 3D printing.",
      link: awinAffiliateUrl
    },
    {
      id: "wondermaker-zr",
      name: "SainSmart WonderMaker ZR 3D Printer",
      category: "3D Printers",
      tag: "Best Multicolor CoreXY",
      price: "$599.00",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
      specs: [
        { label: "Kinematics", value: "High-Velocity CoreXY Structure" },
        { label: "Multicolor", value: "Up to 4-Color Simultaneous Extrusion" },
        { label: "Max Nozzle Temp", value: "300°C (All-Metal Hotend)" },
        { label: "Build Volume", value: "300 x 300 x 300 mm" }
      ],
      pros: [
        "Active multicolor blending unit handles up to 4 distinct filaments effortlessly",
        "Massive enclosed 300mm build space and ultra-rigid CoreXY frame allow high-speed printing",
        "Double-walled heat insulated panel maintains air temperatures for ABS and Nylon feeds",
        "7-inch touch panel preloaded with Klipper features for intuitive remote control"
      ],
      description: "The flagship 3D printer for makers. The WonderMaker ZR features a high-temp all-metal hotend, high-velocity CoreXY frame, auto leveling, and advanced multi-material handling for outstanding multicolor parts.",
      link: awinAffiliateUrl
    },
    {
      id: "maker-filaments",
      name: "SainSmart Premium 3D Printer Filaments",
      category: "3D Printers",
      tag: "Maker's Favourite",
      price: "$22.00",
      rating: 4.9,
      image: IMG.leather_engrave,
      specs: [
        { label: "Materials", value: "PLA, TPU, Wood-Filled, Carbon Fiber" },
        { label: "Diameter", value: "1.75 mm (+/- 0.02 mm tolerance)" },
        { label: "Spool Size", value: "1.0 kg (2.2 lbs) standard spool" },
        { label: "Compatibility", value: "Creality, Prusa, Bambu Lab, Any FDM" }
      ],
      pros: [
        "SainSmart TPU is world-renowned for perfect flexibility and smooth feeds",
        "Ultra-strict diameter tolerance prevents clogs and layer extrusion lines",
        "Tangle-free mechanical winding ensures unattended overnight printing",
        "Vibrant colour profiles and specialized wood/carbon textures available"
      ],
      description: "Whether you need flexible gaskets with high-performance TPU, or elegant composite wooden prototypes, SainSmart's premium materials range offers highly reliable extrusion, exceptional layer adhesion, and beautiful matte finishes.",
      link: awinAffiliateUrl
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      {/* Page Header */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-900/40 mb-12 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="p-8 sm:p-14 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-5">
            <Award className="w-3.5 h-3.5" /> {t("sainsmart.eyebrow", "Preferred Engineering Partner")}
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter leading-[1.03]">
            SainSmart <span className="text-cyan-400">{t("sainsmart.title_hub", "Hub")}</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
            {t("sainsmart.hero_desc", "As our preferred partner for desktop manufacturing and maker tools, SainSmart equips creators, makers, and engineering workshops with professional precision. Check out our detailed reviews, upcoming testing line-ups, and exclusive affiliate deals.")}
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a 
              href={generalAffiliateUrl} 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-[0_0_18px_rgba(6,182,212,0.4)] transition-colors text-sm"
            >
              {t("sainsmart.btn_store", "Visit SainSmart Store")} <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href={awinAffiliateUrl} 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              {t("sainsmart.btn_cnc", "CNC, 3D Printer & DIY Tools ↗")}
            </a>
          </div>
          
          <p className="text-[11px] text-slate-500 font-mono mt-4 italic">
            {t("sainsmart.disclosure", "*Affiliate Disclosure: Clicking these links supports Laserhuis reviews and guides at no extra cost to you.")}
          </p>
        </div>
      </div>

      {/* Quick Jump SEO Anchor Links */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 mb-10 py-3.5 px-4 sm:px-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mr-1 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-cyan-400" /> {t("sainsmart.nav_title", "Navigation:")}
        </span>
        <a href="#flagship-laser" className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-cyan-500/5">
          {t("sainsmart.nav_flagship", "# Flagship Laser")}
        </a>
        <a href="#cnc-preview" className="text-xs font-mono text-slate-400 hover:text-orange-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-orange-500/5">
          {t("sainsmart.nav_cnc", "# Heavy-Duty CNC")}
        </a>
        <a href="#curated-gear" className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-cyan-500/5">
          {t("sainsmart.nav_gear", "# Recommended Gear")}
        </a>
        <a href="#maker-faqs" className="text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-emerald-500/5">
          {t("sainsmart.nav_faq", "# Calibration & FAQs")}
        </a>
      </div>

      {/* #1: Genmitsu Kintix featured on top */}
      <div className="mb-16" id="flagship-laser">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">{t("sainsmart.flagship_eyebrow", "Flagship Review")}</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">{t("sainsmart.flagship_title", "Our #1 Rated Desktop Laser")}</h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
            {t("sainsmart.editor_pick", "★ Editor's Pick")}
          </span>
        </div>

        {kintixReview && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-900/50 bg-slate-900/40 hover:border-cyan-800/60 transition-all">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 p-6 sm:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Genmitsu Kintix Series
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    Galvo Technology
                  </span>
                </div>
                
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
                  {kintixReview.name}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {kintixReview.summary}
                </p>

                {/* Specs inline */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Optical output
                    </p>
                    <p className="font-mono text-xs text-cyan-300 truncate">{kintixReview.wattage}</p>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">
                      <Gauge className="w-3.5 h-3.5 text-cyan-400" /> Engraving Speed
                    </p>
                    <p className="font-mono text-xs text-cyan-300">90,000 mm/min</p>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">
                      <Crosshair className="w-3.5 h-3.5 text-cyan-400" /> Precision Spot
                    </p>
                    <p className="font-mono text-xs text-cyan-300">{kintixReview.spotSize}</p>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">
                      <Maximize className="w-3.5 h-3.5 text-cyan-400" /> Marking Area
                    </p>
                    <p className="font-mono text-xs text-cyan-300">{kintixReview.workArea}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={generalAffiliateUrl} 
                    target="_blank" 
                    rel="sponsored noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors"
                  >
                    View 10W Galvo at SainSmart <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link 
                    to="/reviews/kintix" 
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm transition-all"
                  >
                    Read Full Laserhuis Review <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <FavouriteButton type="review" id={kintixReview.id} />
                </div>
              </div>

              {/* Pros & Image side */}
              <div className="flex flex-col justify-between bg-slate-950/40 rounded-2xl border border-slate-800/50 p-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Laserhuis Verdict Pros
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6">
                    {kintixReview.pros.slice(0, 3).map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative overflow-hidden rounded-xl h-44 border border-slate-800">
                  <img 
                    src={kintixReview.image} 
                    alt={kintixReview.name} 
                    className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] text-slate-300 font-bold ml-1">4.8 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* #2: Upcoming Review of Genmitsu PROVerXL 4030S */}
      <div className="mb-16" id="cnc-preview">
        <div className="p-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl shadow-[0_0_30px_rgba(249,115,22,0.15)]">
          <div className="bg-slate-950 rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
                  <Compass className="w-3.5 h-3.5 animate-spin-slow" /> Under Calibration / Coming Soon
                </span>
                
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  SainSmart Genmitsu <span className="text-orange-400">PROVerXL 4030S</span> CNC Router
                </h3>
                
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  We are putting this absolute heavy-duty desktop CNC through intensive test runs! From dialing in speeds and feeds on cast acrylic sheets, to deep 3D carving in European walnut, and profiling raw brass faceplates. 
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Built on highly rigid aluminum profiles, lead screws, and pre-wired with drag chains and limit switches out of the box, the PROVerXL 4030S is designed to provide professional workshop output at home.
                </p>

                {/* Expected specs preview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 mb-6">
                  <div className="border border-slate-800 rounded-xl p-3 bg-slate-900/40 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-500">Working Bed</p>
                    <p className="font-heading font-bold text-slate-200 mt-1">400 x 300 mm</p>
                  </div>
                  <div className="border border-slate-800 rounded-xl p-3 bg-slate-900/40 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-500">Z-Axis Travel</p>
                    <p className="font-heading font-bold text-slate-200 mt-1">130 mm depth</p>
                  </div>
                  <div className="border border-slate-800 rounded-xl p-3 bg-slate-900/40 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-500">Max Spindle</p>
                    <p className="font-heading font-bold text-slate-200 mt-1">Upgradeable</p>
                  </div>
                  <div className="border border-slate-800 rounded-xl p-3 bg-slate-900/40 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-500">Drive System</p>
                    <p className="font-heading font-bold text-slate-200 mt-1">T12 Lead Screws</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="https://www.sainsmart.com/products/proverxl-4030s" 
                    target="_blank" 
                    rel="sponsored noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-colors"
                  >
                    Explore PROVerXL 4030S CNC <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={generalAffiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-sm font-semibold transition-all"
                  >
                    View CNC Parts & Accessories ↗
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-80">
                <img 
                  src={sainsmartHero} 
                  alt="SainSmart Genmitsu PROVerXL 4030S CNC Router" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 border border-slate-800/80 rounded-xl p-3 backdrop-blur-md">
                  <p className="text-xs font-mono text-orange-400 font-bold">🛠️ Genmitsu PROVerXL 4030S Benchmarks</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Tested with 710W spindle, rigid ball screws, and high-precision calibration runs.</p>
                </div>
              </div>
            </div>

            {/* Expansion Section showcasing the second image */}
            <div className="mt-10 pt-10 border-t border-slate-900 grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-80 order-2 lg:order-1">
                <img 
                  src={sainsmartExtension} 
                  alt="SainSmart Genmitsu Upgrade & Extension Kits" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 border border-slate-800/80 rounded-xl p-3 backdrop-blur-md">
                  <p className="text-xs font-mono text-amber-400 font-bold">🚀 Modular Scale & Expandability</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Easily upgrade the XY-axis work area using 6060 and 1010 extension kits.</p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                  Modular Framework
                </span>
                <h4 className="font-heading font-black text-2xl text-white tracking-tight">
                  Grow With Your Projects
                </h4>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  One of the most impressive design choices of the PROVerXL framework is its modular upgrade path. Instead of forcing you to invest in an entirely new machine as your ambitions grow, SainSmart offers drop-in axis extension bundles.
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-300">6060 Extension Kit:</strong> Increases your cutting bed to a generous 600 x 600 mm — ideal for medium signs, customized furniture panels, and larger templates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-300">1010 Extension Kit:</strong> Expands your carving area to a massive 1000 x 1000 mm space — fully capable of engraving complete electric guitars, long mantelpieces, and batch parts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-300">Unyielding Rigidity:</strong> The dual steel linear rails on X & Y and the T12 lead screws maintain professional tolerances regardless of workspace dimensions.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* #3: Curated Product Showcases / Advertisements */}
      <div className="mb-12" id="curated-gear">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">Curated Showcase</p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mt-1">Our Recommended SainSmart Gear</h2>
          <p className="text-sm text-slate-400 mt-2">
            Highly vetted CNC machines, material packages, and accessories we use, recommend, and trust in the workshop.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 max-w-4xl mx-auto px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Products Grid */}
        {(() => {
          const filteredProducts = selectedCategory === "All"
            ? topProducts
            : topProducts.filter((p) => p.category === selectedCategory);

          return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-slate-900/60 border border-slate-800 hover:border-cyan-900/50 rounded-2xl overflow-hidden transition-all flex flex-col justify-between group">
                  <div>
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-600 text-white uppercase tracking-wider">
                          {p.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs">
                        <span className="text-slate-400">{p.category}</span>
                        <span className="font-mono text-cyan-300 font-semibold">{p.price}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-white text-base sm:text-lg leading-snug group-hover:text-cyan-300 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {p.description}
                      </p>

                      {/* Specs list */}
                      <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5 text-xs font-mono">
                        {p.specs.map((s, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-slate-500">{s.label}:</span>
                            <span className="text-slate-300 font-bold">{s.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Top Pros */}
                      <div className="mt-4 pt-4 border-t border-slate-800">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-2">Why we recommend it</p>
                        <ul className="space-y-1.5 text-[11px] text-slate-300">
                          {p.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx} className="flex gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Purchase button at bottom */}
                  <div className="p-5 pt-0">
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="sponsored noopener noreferrer" 
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-slate-950 border border-slate-800 hover:bg-cyan-950/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 font-semibold text-xs transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-cyan-400" /> Buy on SainSmart <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>

      {/* #4: Maker FAQ & Calibration Knowledgebase */}
      <div className="mb-16 border-t border-slate-800 pt-16" id="maker-faqs">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">{t("sainsmart.knowledgebase", "Knowledgebase")}</p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mt-1">{t("sainsmart.faq_title", "Maker Setup & Calibration FAQs")}</h2>
          <p className="text-sm text-slate-400 mt-2">
            {t("sainsmart.faq_desc", "Get the absolute most out of your SainSmart Genmitsu equipment with expert-curated answers on calibration, materials, and troubleshooting.")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-heading font-bold text-white text-sm sm:text-base hover:text-cyan-300 transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <span className={`w-6 h-6 rounded-lg border border-slate-700 flex items-center justify-center transition-all shrink-0 text-[10px] ${openFaq === idx ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 rotate-180' : 'bg-slate-950 text-slate-400'}`}>
                  ▼
                </span>
              </button>
              
              {openFaq === idx && (
                <div className="p-5 pt-0 border-t border-slate-800/40 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 bg-slate-950/20">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Preferred Partner Callout / Badge */}
      <div className="bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 border border-cyan-900/30 rounded-2xl p-6 sm:p-10 text-center">
        <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-pulse" />
        <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">{t("sainsmart.partner_title", "SainSmart is Our Preferred Manufacturing Partner")}</h3>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
          {t("sainsmart.partner_desc", "Through close collaboration, we are able to benchmark top CNC, laser, and 3D printing equipment. Every review is supported by extensive real-world workshop runs to supply honest data for our fellow makers.")}
        </p>
        <div className="mt-5 flex justify-center gap-4">
          <a 
            href={generalAffiliateUrl} 
            target="_blank" 
            rel="sponsored noopener noreferrer" 
            className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold font-mono uppercase bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg transition-colors"
          >
            SainSmart Main Store ↗
          </a>
          <a 
            href={awinAffiliateUrl} 
            target="_blank" 
            rel="sponsored noopener noreferrer" 
            className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold font-mono uppercase bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white rounded-lg transition-all"
          >
            Maker & DIY Deals ↗
          </a>
        </div>
      </div>
    </div>
  );
}
