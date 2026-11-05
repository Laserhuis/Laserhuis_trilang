import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Zap, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Star, 
  Award, 
  HelpCircle, 
  ShoppingBag, 
  Flame, 
  Box, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Maximize2,
  Wrench,
  Sliders,
  DollarSign
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FavouriteButton } from "@/components/FavouriteButton";

const EMSMART_AFFILIATE_MAIN = "https://em-smart.com/?ref=Laserhuis";

const PRODUCTS = [
  {
    id: "em-smart-basic",
    name: "EM-Smart Basic (20W / 30W Fiber Laser Engraver)",
    tagline: "Ultra-Portable Desktop Galvo Fiber Laser for All Metals & Hard Plastics",
    url: "https://em-smart.com/products/em-smart-basic-20w-30w-fiber-laser-engraver?ref=Laserhuis",
    badge: "Most Popular Desktop Fiber",
    power: "20W / 30W Raycus Fiber",
    speed: "7,000 mm/s Galvo",
    area: "110 x 110 mm (Opt. 150x150 mm)",
    wavelength: "1064 nm Fiber Laser",
    weight: "8.5 kg Portable Chassis",
    materials: ["Stainless Steel", "Brass & Copper", "Gold & Silver", "Titanium", "Anodized Aluminum", "Dark ABS Plastics"],
    highlights: [
      "Plug & play setup out of the box in under 2 minutes",
      "Foldable vertical column for effortless storage & transport",
      "Dual red-dot laser pointer for ultra-precise manual focus",
      "Full LightBurn Galvo & EZCAD software compatibility",
      "Ideal for customized jewelry, EDC knives, gun parts & metal tags"
    ],
    rating: 4.9,
    reviewsCount: 142,
    description: "The EM-Smart Basic is the original compact desktop fiber laser that revolutionized workshop metal marking. Combining a 20W or 30W Raycus fiber laser source with a high-speed galvo head, it delivers razor-sharp permanent metal engraving in seconds."
  },
  {
    id: "em-smart-dualse",
    name: "EM-Smart DualSE (Fiber + Diode Desktop Laser)",
    tagline: "Dual Wavelength Technology — Engrave Metals, Plastics, Wood, Leather & Acrylic",
    url: "https://em-smart.com/products/em-smart-dualse-fiber-diode-desktop-laser-engraver-archive?ref=Laserhuis",
    badge: "Dual Light Source • All-Material",
    power: "20W Fiber (1064nm) + 10W Diode (450nm)",
    speed: "7,000 mm/s Galvo",
    area: "110 x 110 mm",
    wavelength: "1064 nm + 450 nm Dual Source",
    weight: "10.2 kg Portable",
    materials: ["Metals (All)", "Plastics & Acrylic", "Hardwood & Plywood", "Leather & Slate", "Glass & Ceramics"],
    highlights: [
      "Dual laser heads in one compact desktop galvo enclosure",
      "Switch instantly between 1064nm Fiber and 450nm Diode in software",
      "Engrave metals, jewelry, leather, wood, and acrylic without buying two machines",
      "Built-in rotary attachment port for tumblers, rings, and cylinders",
      "LightBurn Galvo supported for multi-material automation"
    ],
    rating: 4.95,
    reviewsCount: 88,
    description: "The EM-Smart DualSE solves the ultimate maker dilemma: engraving both metals and organic materials. By integrating both a 1064nm Fiber source and a 450nm Diode laser in a single galvo system, you can process every material in your workshop."
  },
  {
    id: "em-smart-axi",
    name: "EM-Smart AXI (True 3D Desktop Laser Engraver Machine)",
    tagline: "Dynamic Z-Axis Auto-Focus for Deep Relief Metal Carving & Curved Surfaces",
    url: "https://em-smart.com/products/em-smart-axi-true-3d-desktop-laser-engraver-machine?ref=Laserhuis",
    badge: "Flagship 3D Relief & Curved Surface",
    power: "20W / 30W / 50W Fiber Options",
    speed: "7,000 mm/s Dynamic Galvo",
    area: "110 x 110 mm / 150 x 150 mm",
    wavelength: "1064 nm Dynamic Fiber",
    weight: "12.5 kg Industrial Precision",
    materials: ["Deep Coin Minting", "3D Mold Steel", "Curved Metal Flasks", "Rings & Spheres", "Textured Titanium"],
    highlights: [
      "Dynamic motorized Z-axis galvo head for true 3D surface tracking",
      "Carve multi-layer 3D reliefs and deep coin minting with zero manual height adjustment",
      "Engrave sloped, curved, and stepped metal objects with crisp focal consistency",
      "High peak power density for deep metal removal and textured micro-machining",
      "EZCAD3 & LightBurn 3D slice import support"
    ],
    rating: 5.0,
    reviewsCount: 64,
    description: "The EM-Smart AXI is engineered for master craftspeople and jewelers who demand true 3D dynamic relief carving. Its motorized dynamic focus lens automatically adjusts focus on the fly across curved, spherical, or stepped surfaces."
  }
];

const FAQS = [
  {
    q: "Why buy EM-Smart via the official Laserhuis affiliate link?",
    a: "When you purchase via our official affiliate link (with ?ref=Laserhuis), you get direct access to official EM-Smart factory warranties, fast worldwide shipping, and special promotional pricing, while directly supporting Laserhuis so we can produce more free tutorials and material databases."
  },
  {
    q: "Is LightBurn compatible with EM-Smart Fiber Lasers?",
    a: "Yes! All EM-Smart Fiber and Dual-source lasers feature standard BJJCZ galvo control boards, making them 100% compatible with LightBurn Galvo license, as well as EZCAD2 and EZCAD3 software."
  },
  {
    q: "What is the main difference between EM-Smart Basic and DualSE?",
    a: "The EM-Smart Basic is a dedicated 1064nm Fiber laser optimized specifically for metals and dark plastics. The DualSE includes both a 1064nm Fiber laser and a 450nm Diode laser in one unit, allowing you to engrave metals AS WELL AS wood, leather, acrylic, and glass."
  },
  {
    q: "What does 'True 3D' dynamic focus mean on the EM-Smart AXI?",
    a: "Standard galvo lasers have a fixed focal plane (flat surface). The EM-Smart AXI features a dynamic Z-axis motor inside the galvo head that continuously shifts focus up and down during execution, enabling deep 3D relief carving in metal coins or marking curved surfaces like rings, tumblers, and rounded metal parts."
  }
];

export default function EmSmart() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Inject Schema.org JSON-LD Structured Data
    const schemaId = "emsmart-jsonld-schema";
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Brand",
      "name": "EM-Smart",
      "url": "https://em-smart.com/?ref=Laserhuis",
      "description": "EM-Smart produces compact, high-precision desktop Fiber, Dual-source, and 3D relief Galvo laser engravers for metals, jewelry, EDC, and custom crafting.",
      "sameAs": [
        "https://em-smart.com/?ref=Laserhuis"
      ],
      "offers": PRODUCTS.map(p => ({
        "@type": "Offer",
        "name": p.name,
        "url": p.url,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "EM-Smart Official Store"
        }
      }))
    };

    script.textContent = JSON.stringify(schemaData);
  }, []);

  const filteredProducts = selectedProduct === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.id === selectedProduct);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-8 sm:p-12 mb-12 shadow-2xl shadow-cyan-950/50">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Official Partner • EM-Smart Lasers
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Direct Ref Link: ?ref=Laserhuis
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            EM-Smart Desktop Fiber & Dual Lasers
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Ultra-compact galvo laser engravers designed for makers, jewelers, and industrial metal marking. From the ultra-portable <strong className="text-cyan-300">EM-Smart Basic</strong> to the all-material <strong className="text-cyan-300">DualSE</strong> and true 3D relief <strong className="text-cyan-300">AXI 3D</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={EMSMART_AFFILIATE_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02]"
            >
              <ShoppingBag className="w-5 h-5" /> Bezoek Officiële EM-Smart Shop ↗
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              Bekijk Modellen & Specs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Value Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center">
          <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
          <h4 className="font-heading font-bold text-white text-sm">7,000 mm/s Speed</h4>
          <p className="text-xs text-slate-400 mt-1">High-speed galvo scan head for instant metal marking</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center">
          <Box className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
          <h4 className="font-heading font-bold text-white text-sm">Ultra-Portable Design</h4>
          <p className="text-xs text-slate-400 mt-1">Lightweight desktop footprint under 10kg</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center">
          <Cpu className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
          <h4 className="font-heading font-bold text-white text-sm">LightBurn & EZCAD</h4>
          <p className="text-xs text-slate-400 mt-1">100% Galvo BJJCZ controller compatibility</p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center">
          <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
          <h4 className="font-heading font-bold text-white text-sm">Official EU Warranty</h4>
          <p className="text-xs text-slate-400 mt-1">Direct support & genuine manufacturer deal</p>
        </div>
      </div>

      {/* Filter / Selector Tabs */}
      <div id="products" className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            EM-Smart Products & Lineup
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Klik op een model voor specificaties, aanbevolen toepassingen en de officiële bestellink.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
          <button
            onClick={() => setSelectedProduct("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedProduct === "all" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            Alle Modellen ({PRODUCTS.length})
          </button>
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedProduct === p.id ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              {p.name.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="space-y-10 mb-20">
        {filteredProducts.map((p) => (
          <div 
            key={p.id}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 hover:border-cyan-500/40 transition-all p-6 sm:p-8 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Info Left */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> {p.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{p.rating}</span>
                    <span className="text-slate-500">({p.reviewsCount} reviews)</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    {p.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Vermogen & Bron</p>
                    <p className="text-xs font-bold text-white mt-0.5">{p.power}</p>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Markeersnelheid</p>
                    <p className="text-xs font-bold text-white mt-0.5">{p.speed}</p>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Werkbereik</p>
                    <p className="text-xs font-bold text-white mt-0.5">{p.area}</p>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Golflengte</p>
                    <p className="text-xs font-bold text-white mt-0.5">{p.wavelength}</p>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Gewicht & Formaat</p>
                    <p className="text-xs font-bold text-white mt-0.5">{p.weight}</p>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Software</p>
                    <p className="text-xs font-bold text-white mt-0.5">LightBurn & EZCAD</p>
                  </div>
                </div>

                {/* Material Pills */}
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 mb-2">Geschikte Materialen:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.materials.map(m => (
                      <span key={m} className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info Right CTA Box */}
              <div className="w-full lg:w-80 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between gap-6 shrink-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>In Stock • Fast Shipping</span>
                  </div>

                  <h4 className="font-heading font-bold text-white text-sm border-b border-slate-800 pb-2">
                    Belangrijkste Voordelen
                  </h4>

                  <ul className="space-y-2">
                    {p.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 text-center">
                    Officiële Affiliate Deal via Laserhuis
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02]"
                  >
                    <span>Bekijk bij EM-Smart</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-slate-500 text-center leading-tight">
                    Inclusief fabrieksgarantie, LightBurn galvo profiel & Laserhuis referral korting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-20">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Specificaties Vergelijken</span>
          <h3 className="font-heading font-black text-2xl text-white mt-1">
            EM-Smart Modellen Matrix
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs">
                <th className="py-3 px-4">Eigenschap</th>
                <th className="py-3 px-4 text-cyan-400">EM-Smart Basic</th>
                <th className="py-3 px-4 text-cyan-400">EM-Smart DualSE</th>
                <th className="py-3 px-4 text-cyan-400">EM-Smart AXI 3D</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Laser Type</td>
                <td className="py-3 px-4">Raycus Fiber (1064nm)</td>
                <td className="py-3 px-4">Fiber (1064nm) + Diode (450nm)</td>
                <td className="py-3 px-4">Dynamic Fiber (1064nm)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Vermogen Options</td>
                <td className="py-3 px-4">20W / 30W</td>
                <td className="py-3 px-4">20W Fiber + 10W Diode</td>
                <td className="py-3 px-4">20W / 30W / 50W</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Galvo Snelheid</td>
                <td className="py-3 px-4">7,000 mm/s</td>
                <td className="py-3 px-4">7,000 mm/s</td>
                <td className="py-3 px-4">7,000 mm/s Dynamic</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">3D Dynamic Focus</td>
                <td className="py-3 px-4 text-slate-500">Nee (Vlak)</td>
                <td className="py-3 px-4 text-slate-500">Nee (Vlak)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">Ja (True 3D Relief)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Geschikt voor Hout/Leer/Acrylaat</td>
                <td className="py-3 px-4 text-slate-500">Beperkt (Alleen donker)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">Ja (Via Diode source)</td>
                <td className="py-3 px-4 text-slate-500">Beperkt (Metaal focus)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">LightBurn Galvo Support</td>
                <td className="py-3 px-4 text-emerald-400">Ja (100%)</td>
                <td className="py-3 px-4 text-emerald-400">Ja (100%)</td>
                <td className="py-3 px-4 text-emerald-400">Ja (100%)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Directe Winkel Link</td>
                <td className="py-3 px-4">
                  <a href={PRODUCTS[0].url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Bekijk Basic ↗
                  </a>
                </td>
                <td className="py-3 px-4">
                  <a href={PRODUCTS[1].url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Bekijk DualSE ↗
                  </a>
                </td>
                <td className="py-3 px-4">
                  <a href={PRODUCTS[2].url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Bekijk AXI 3D ↗
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Veelgestelde Vragen</span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
            FAQ over EM-Smart Lasers
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-white hover:text-cyan-300 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
