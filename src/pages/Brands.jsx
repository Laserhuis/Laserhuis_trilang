import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Package,
  Send,
  Loader2,
  Check,
  Building2,
  ExternalLink,
  Cpu,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  HelpCircle,
  Video,
  FileText
} from "lucide-react";
import { BRANDS_DIRECTORY } from "@/data/brandsData";
import { submitBrandInquiry } from "@/lib/api";

const CATEGORY_FILTERS = [
  { key: "ALL", label: "All Manufacturers" },
  { key: "FIBER", label: "Fiber & MOPA" },
  { key: "CO2", label: "CO2 Lasers" },
  { key: "DIODE", label: "Diode / Hybrid" },
  { key: "INDUSTRIAL", label: "Industrial" },
  { key: "DESKTOP", label: "Desktop / Small Shop" }
];

const MACHINE_TYPES = [
  { label: "Laser Engravers", note: "Diode & desktop" },
  { label: "Fiber & Galvo", note: "Metal marking" },
  { label: "CO2 Lasers", note: "Cutting & photo" },
  { label: "3D Printers", note: "FDM & resin" },
  { label: "CNC Machines", note: "Routers & mills" }
];

export default function Brands() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", machineType: "Laser Engravers", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const filteredBrands = useMemo(() => {
    return BRANDS_DIRECTORY.filter((brand) => {
      // Category filter logic
      let matchesCat = true;
      if (activeCategory === "FIBER") {
        matchesCat = brand.primaryTechnologies.some((t) => t.includes("Fiber") || t.includes("MOPA") || t.includes("Galvo"));
      } else if (activeCategory === "CO2") {
        matchesCat = brand.primaryTechnologies.some((t) => t.includes("CO2"));
      } else if (activeCategory === "DIODE") {
        matchesCat = brand.primaryTechnologies.some((t) => t.includes("Diode") || t.includes("Hybrid"));
      } else if (activeCategory === "INDUSTRIAL") {
        matchesCat = brand.targetUserSegment.toLowerCase().includes("industrial") || brand.targetUserSegment.toLowerCase().includes("commercial") || brand.targetUserSegment.toLowerCase().includes("production");
      } else if (activeCategory === "DESKTOP") {
        matchesCat = brand.targetUserSegment.toLowerCase().includes("hobby") || brand.targetUserSegment.toLowerCase().includes("desktop") || brand.targetUserSegment.toLowerCase().includes("small");
      }

      // Search query filter
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          brand.name.toLowerCase().includes(q) ||
          brand.description.toLowerCase().includes(q) ||
          brand.representativeMachines.toLowerCase().includes(q) ||
          brand.primaryTechnologies.some((t) => t.toLowerCase().includes(q));
      }

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email) {
      toast.error("Please fill in your name, company and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await submitBrandInquiry(form);
      toast.success(res.message || "Thanks! We'll be in touch.");
      setForm({ name: "", company: "", email: "", machineType: "Laser Engravers", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Laser Engraving Manufacturers & Brands Directory",
          "description": "Comprehensive reference directory of diode, CO2, Fiber, and MOPA laser engraving machine manufacturers, brand technical profiles, and machine reviews.",
          "url": "https://laserhuis.com/brands",
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": BRANDS_DIRECTORY.length,
            "itemListElement": BRANDS_DIRECTORY.map((b, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "Brand",
                "name": b.name,
                "url": b.website
              }
            }))
          }
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://laserhuis.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Manufacturers & Brands",
              "item": "https://laserhuis.com/brands"
            }
          ]
        })
      }} />

      {/* Header & Introduction */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-4">
          <Building2 className="w-3.5 h-3.5" /> Technical Directory & Manufacturer Index
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          Laser Engraving Manufacturers & Brands
        </h1>
        <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-3xl">
          Welcome to the Laserhuis directory of premier <strong>laser engraving manufacturers</strong> and <strong>laser engraver brands</strong>.
          Whether you are evaluating <strong>diode laser manufacturers</strong> for small craft workshops, <strong>CO2 laser manufacturers</strong> for acrylic cutting,
          or industrial <strong>Fiber laser manufacturers</strong> and <strong>MOPA laser manufacturers</strong> for permanent metal marking, this directory compiles verified machine profiles, technical specifications, and independent review links.
        </p>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-3xl">
          Laserhuis clearly distinguishes between physical <em>Hands-On Reviews</em> conducted in our lab and <em>Manufacturer Specification Overviews</em> compiled from verified technical documentation.
        </p>
      </div>

      {/* Internal Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-xs font-mono">
        <Link to="/fiber-laser" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-slate-300 hover:text-cyan-300 transition-colors">
          <span>Fiber & MOPA Hub</span> <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link to="/reviews" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-slate-300 hover:text-cyan-300 transition-colors">
          <span>Machine Reviews</span> <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link to="/materials" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-slate-300 hover:text-cyan-300 transition-colors">
          <span>Material Settings</span> <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link to="/compare" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-slate-300 hover:text-cyan-300 transition-colors">
          <span>Compare Specs</span> <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Directory Filters & Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    : "bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search manufacturers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Brand Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-testid="brands-directory-grid">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            data-testid={`brand-card-${brand.slug}`}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between ph-card-hover"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white tracking-tight">
                    {brand.name}
                  </h2>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {brand.headquarters}
                  </p>
                </div>
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
                  title={`Visit official ${brand.name} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {brand.primaryTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {brand.description}
              </p>

              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 mb-4 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="font-mono text-[10px] uppercase">Segment</span>
                  <span className="text-slate-200 font-medium truncate">{brand.targetUserSegment}</span>
                </div>
                <div className="flex justify-between items-start text-slate-400 pt-1 border-t border-slate-800/60">
                  <span className="font-mono text-[10px] uppercase shrink-0">Machines</span>
                  <span className="text-cyan-300 font-mono text-[11px] text-right truncate ml-2">{brand.representativeMachines}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 text-[10px] uppercase">Laserhuis Coverage</span>
                <span className="text-amber-400 text-[11px] font-semibold">{brand.reviewStatus}</span>
              </div>

              {/* Laserhuis Content Links */}
              <div className="space-y-1.5 pt-1">
                {brand.brandHubUrl && (
                  <Link
                    to={brand.brandHubUrl}
                    className="flex items-center justify-between p-2 rounded-lg bg-cyan-950/30 border border-cyan-900/50 hover:bg-cyan-900/40 text-xs text-cyan-300 transition-colors font-mono"
                  >
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Dedicated {brand.name} Hub</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}

                {brand.toolUrl && (
                  <Link
                    to={brand.toolUrl}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition-colors font-mono"
                  >
                    <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> Feeds & Speeds Tool</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}

                {brand.laserhuisReviews.map((rev) => (
                  <Link
                    key={rev.url}
                    to={rev.url}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-200 hover:text-cyan-300 transition-colors font-mono"
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      {rev.type === "HANDS_ON_REVIEW" ? (
                        <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      )}
                      <span className="truncate">{rev.title}</span>
                    </span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Introductory Buyer Guidance */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 mb-16">
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-3">
            <HelpCircle className="w-4 h-4 text-cyan-400" /> Technical Selection Methodology
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            How to Compare Laser Manufacturers
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            When choosing a laser engraving machine manufacturer, technical suitability depends entirely on your specific substrate materials, optical power requirements, production volume, and safety workspace. No single brand or source fits every workshop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 1. Laser Technology & Wavelength
            </h3>
            <p className="leading-relaxed text-slate-300">
              Diode lasers (455nm) excel at wood, dark acrylic, and leather craft. CO2 lasers (10,600nm) cut clear acrylic, wood, and glass effortlessly. Fiber/MOPA lasers (1064nm) are required for raw metal annealing and titanium color marking. Read our <Link to="/fiber-laser" className="text-cyan-400 underline">Fiber Laser Guide</Link>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 2. Optical Power vs Beam Spot
            </h3>
            <p className="leading-relaxed text-slate-300">
              Higher optical output (e.g. 33W diode or 80W CO2) increases single-pass cutting depth, while smaller optical spots (0.01mm galvo or compressed diode) yield higher DPI photo detail.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 3. Motion System & Scan Speed
            </h3>
            <p className="leading-relaxed text-slate-300">
              Gantry-based XY plotters travel at 10,000–30,000 mm/min for wide bed cutting. Galvo mirror scanners achieve 90,000–420,000 mm/min for ultra-fast part marking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 4. Software Platform Compatibility
            </h3>
            <p className="leading-relaxed text-slate-300">
              Industry standard control software includes LightBurn (GRBL, DSP, and Galvo modules) and EZCAD. Verify whether a manufacturer supports native LightBurn control or relies on proprietary cloud software.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 5. Safety Class & Enclosures
            </h3>
            <p className="leading-relaxed text-slate-300">
              Class 1 fully enclosed units feature safety interlocks and integrated smoke extraction for office use. Class 4 open-frame engravers require protective safety hoods, OD6+ wavelength eyewear, and active exhaust ducting.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="font-bold text-white text-sm text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 6. Support & Consumables
            </h3>
            <p className="leading-relaxed text-slate-300">
              Evaluate replacement glass tube availability, mirror optics, swappable diode modules, and warranty response times for long-term commercial reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Disclosures & Trust Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-16 text-xs text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold uppercase tracking-wider text-[11px]">
          <ShieldAlert className="w-4 h-4 text-cyan-400" /> Editorial Disclosure & Independence Notice
        </div>
        <p className="leading-relaxed">
          Laserhuis publishes hands-on reviews, specification-based overviews, and manufacturer reference information. Each content item is labeled according to its source and testing status. A brand listing does not imply an official endorsement or commercial partnership unless explicitly stated.
        </p>
        <p className="leading-relaxed pt-1 border-t border-slate-900 text-slate-500">
          *Affiliate Disclosure: Some external links on Laserhuis are referral affiliate links. Clicking an affiliate link does not alter the price you pay. Commercial or affiliate relationships do not influence review conclusions, benchmark results, or technical testing ratings.
        </p>
      </div>

      {/* Manufacturer Collaboration & Inquiry Form */}
      <div id="inquiry" className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
        <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-900/40 rounded-2xl p-7">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-mono mb-4">
            <Package className="w-3.5 h-3.5" /> For Manufacturers & Brand Representatives
          </span>
          <h2 className="font-heading font-black text-2xl text-white mb-3">Partner with Laserhuis</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Are you a machine manufacturer or hardware brand? Send us a unit for independent bench testing, detailed written documentation, and video coverage.
          </p>
          <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Hands-on lab bench testing & focal optics inspection</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Permanent dedicated review page & parameter inclusion</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Hands-on video testing shared on YouTube & site</li>
          </ul>
        </div>

        <form onSubmit={submit} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 space-y-4" data-testid="brand-inquiry-form">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" testId="brand-name" value={form.name} onChange={(v) => set("name", v)} />
            <Field label="Company / Manufacturer" testId="brand-company" value={form.company} onChange={(v) => set("company", v)} />
          </div>
          <Field label="Business Email" type="email" testId="brand-email" value={form.email} onChange={(v) => set("email", v)} />
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block">Machine Category</label>
            <select data-testid="brand-machine-type" value={form.machineType} onChange={(e) => set("machineType", e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
              {MACHINE_TYPES.map((m) => <option key={m.label}>{m.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block">Inquiry Message</label>
            <textarea data-testid="brand-message" value={form.message} onChange={(e) => set("message", e.target.value)} rows={4} placeholder="Describe the laser engraver or machine model for review collaboration..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" />
          </div>
          <button type="submit" disabled={loading} data-testid="brand-submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors disabled:opacity-60">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Submit Manufacturer Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

const Field = ({ label, value, onChange, type = "text", testId }) => (
  <div>
    <label className="text-xs text-slate-500 mb-1.5 block">{label}</label>
    <input
      type={type}
      value={value}
      data-testid={testId}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
    />
  </div>
);
