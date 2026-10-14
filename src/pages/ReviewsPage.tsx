import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Star,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Filter,
  Cpu,
  Layers,
  Wrench,
  Search,
} from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  category: 'laser' | 'cnc' | '3d' | 'tooling';
  score: number;
  image: string;
  isPlaceholderImage?: boolean;
  priceRange: string;
  verdict: string;
  pros: string[];
  cons: string[];
  link?: string;
  specs: { [key: string]: string };
}

export function ReviewsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [search, setSearch] = useState('');

  const reviews: ReviewItem[] = [
    {
      id: 'kintix',
      name: 'Kintix Precision Laser Engraver (Diode & Fiber Hybrid)',
      category: 'laser',
      score: 9.2,
      image: '',
      isPlaceholderImage: true,
      priceRange: '€899 – €1,299',
      verdict: 'An exceptional high-speed laser engraver engineered for tight workshop spaces. Outstanding galvo-grade speed on metal marking combined with clean acrylic and wood vector cutting.',
      pros: [
        'Superb metal marking contrast with dual-wavelength optical path',
        'Built-in honeycomb baseplate with integrated dowel alignment holes',
        'Direct LightBurn native GRBL/DSP profile support',
        'Integrated air assist nozzle with quiet diaphragm pump',
      ],
      cons: [
        'Rotary chuck attachment sold separately',
        'Exhaust hose could be longer for external workshop ducting',
      ],
      link: '/reviews/kintix',
      specs: {
        'Laser Power': '20W Diode + 2W 1064nm Infrared',
        'Working Area': '400 x 400 mm',
        'Max Engraving Speed': '600 mm/s (36,000 mm/min)',
        'Spot Size': '0.06 x 0.08 mm',
        'Software': 'LightBurn, LaserGRBL',
      },
    },
    {
      id: 'sainsmart-genmitsu-prover',
      name: 'SainSmart Genmitsu PROVer & 710W Trim Router Setup',
      category: 'cnc',
      score: 9.0,
      image: '/images/sainsmart_hero_1786084432276.jpg',
      priceRange: '€499 – €749',
      verdict: 'The gold standard entry-to-intermediate CNC router when paired with a 710W Makita/Genmitsu router and our calibrated tool database.',
      pros: [
        'Rigid all-aluminum gantry with dual Y-axis lead screws',
        'Pre-assembled Z-axis carriage saves 2+ hours of assembly',
        'Drop-in 65mm router bracket fits Makita RT0700C perfectly',
        'Emergency stop switch and hardware limit switches pre-wired',
      ],
      cons: [
        'Stock 775 spindle is underpowered (710W upgrade strongly recommended)',
        'MDF spoilboard needs surfacing before precision milling',
      ],
      specs: {
        'Work Envelope': '300 x 180 x 45 mm (Expandable to 300x400mm)',
        'Spindle Mount': '65 mm & 52 mm dual clamps',
        'Controller': '32-bit GRBL with offline controller',
        'Drive System': 'T8 Lead Screws with anti-backlash nuts',
      },
    },
    {
      id: 'sainsmart-bed-extension',
      name: 'SainSmart Genmitsu Bed Extension Kit (4030 / 3040 Upgrade)',
      category: 'cnc',
      score: 8.9,
      image: '/images/sainsmart_extension_1786084445556.jpg',
      priceRange: '€119 – €159',
      verdict: 'Doubles the Y-axis work area of standard desktop CNC routers. A must-have for machining guitar bodies, large topographical relief maps, and cabinetry inlays.',
      pros: [
        'Includes longer T8 lead screws, reinforced aluminum extrusions, and cables',
        'Maintains factory rigidity without gantry sag',
        'Full compatibility with existing homing switches',
      ],
      cons: [
        'Requires recalibrating GRBL $131 (Y max travel) setting',
      ],
      specs: {
        'Extended Y-Travel': 'Adds +220 mm Y-axis travel',
        'Compatible Models': 'PROVerXL, 3018-PROVer, 3020',
        'Installation Time': '45 minutes',
      },
    },
    {
      id: 'nano-blue-endmills',
      name: 'Nano Blue Tungsten Carbide Spiral End Mills Review',
      category: 'tooling',
      score: 9.4,
      image: '/images/nano_blue_bits_1786089602050.jpg',
      priceRange: '€22 – €45 (10-pc set)',
      verdict: 'Nano-coating significantly reduces friction and heat buildup during 18,000+ RPM runs on 710W routers, delivering 2.5x longer tool life than bare carbide.',
      pros: [
        'Exceptional edge retention cutting abrasive MDF and hardwood plywood',
        'Nano Blue titanium aluminum nitride coating dissipates heat',
        'Standard 1/8" (3.175mm) shank fits common router collets',
        'Full preset database available in Laserhuis CNC Tool Studio',
      ],
      cons: [
        'Micro-carbide tips are brittle if dropped on concrete workshop floors',
      ],
      specs: {
        'Material': 'Ultra-fine tungsten carbide + Nano Blue coating',
        'Cutting Diameters': '0.8mm to 3.175mm',
        'Flute Style': '2-Flute Upcut & Downcut spirals',
        'Hardness': 'HRC 65',
      },
    },
    {
      id: 'creality-ender-3-v3',
      name: 'Creality Ender-3 V3 (Workshop Companion 3D Printer)',
      category: '3d',
      score: 8.8,
      image: '/images/ender3_v3_printer_1786089617431.jpg',
      priceRange: '€379 – €429',
      verdict: 'CoreXZ kinematics and 600mm/s speeds make this the ideal workshop machine for printing CNC dust shoes, laser honeycomb hold-down clips, and custom jigs in under an hour.',
      pros: [
        '600mm/s rapid printing with high-flow ceramic heater hotend',
        'CoreXZ belt drive replaces slow lead screws on Z-axis',
        'Direct drive handles tough PETG and TPU workshop fixtures easily',
      ],
      cons: [
        'Cooling fan noise noticeable in quiet home offices',
      ],
      specs: {
        'Build Volume': '220 x 220 x 250 mm',
        'Max Speed': '600 mm/s (Acceleration: 20,000 mm/s²)',
        'Extruder': 'Direct Drive with hardened steel nozzle',
      },
    },
  ];

  const filtered = reviews.filter(r => {
    const matchCat = selectedCat === 'all' || r.category === selectedCat;
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.verdict.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>Independent Laboratory Testing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Laser Cutters, CNC Routers & Tooling Reviews
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real workshop evaluations with cut benchmarks, dimensional accuracy checks, noise measurements, and tear-down inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'laser', label: 'Laser Cutters' },
              { id: 'cnc', label: 'CNC Routers' },
              { id: 'tooling', label: 'Bits & Tooling' },
              { id: '3d', label: '3D Workshop Printers' },
            ].map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-orange-500 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-300 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reviews & machines..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="space-y-6">
          {filtered.map(rev => (
            <div
              key={rev.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col lg:flex-row hover:border-zinc-700 transition-all shadow-xl"
            >
              {/* Image side */}
              <div className="lg:w-80 h-56 lg:h-auto bg-zinc-950 relative overflow-hidden shrink-0 flex items-center justify-center">
                {rev.image ? (
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-950/40 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                    <Flame className="w-12 h-12 text-orange-500 mb-2 stroke-[1.5]" />
                    <span className="text-xs font-mono text-zinc-400 font-bold uppercase">
                      {rev.name}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  {rev.category.toUpperCase()}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500 text-zinc-950 text-xs font-black px-2.5 py-0.5 rounded shadow">
                  ★ {rev.score} / 10
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
                      {rev.link ? (
                        <Link to={rev.link}>{rev.name}</Link>
                      ) : (
                        <span>{rev.name}</span>
                      )}
                    </h3>
                    <span className="text-xs font-mono text-orange-400 font-semibold shrink-0">
                      {rev.priceRange}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    {rev.verdict}
                  </p>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">
                        Key Strengths
                      </span>
                      {rev.pros.map((p, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase text-rose-400 tracking-wider">
                        Things to Consider
                      </span>
                      {rev.cons.map((c, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-zinc-400">
                          <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specs bar & action */}
                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-400">
                    {Object.entries(rev.specs).slice(0, 3).map(([k, v]) => (
                      <span key={k}>
                        <strong className="text-zinc-300">{k}:</strong> {v}
                      </span>
                    ))}
                  </div>

                  {rev.link ? (
                    <Link
                      to={rev.link}
                      className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                    >
                      <span>Read Dedicated Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      to="/compare"
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                    >
                      <span>Compare in Matrix</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
