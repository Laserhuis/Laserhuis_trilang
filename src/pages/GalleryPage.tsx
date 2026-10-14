import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Image as ImageIcon,
  Flame,
  Wrench,
  Layers,
  ArrowRight,
  Calculator,
  Download,
  X,
  Tag,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  technique: 'laser-cut' | 'cnc-carve' | 'mixed' | 'laser-engrave';
  material: string;
  machine: string;
  settings: string;
  software: string;
  description: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
}

export function GalleryPage() {
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'topo-map',
      title: 'Multi-Layer 3D Alpine Topographical Map',
      technique: 'laser-cut',
      material: 'Baltic Birch Plywood 3mm (6 Stacked Layers)',
      machine: '20W Diode Laser',
      settings: '850 mm/min @ 80% Power, 30 PSI Air Assist',
      software: 'LightBurn + QGIS elevation contour vectors',
      description: 'Precision contour lines vector-cut with 0.15mm kerf compensation. Stained with walnut, oak, and pine dyes to represent alpine altitudinal gradients.',
      difficulty: 'Moderate',
    },
    {
      id: 'acrylic-neon-sign',
      title: 'RGB Edge-Lit Acrylic Cyber Sign',
      technique: 'cnc-carve',
      material: 'Clear Cast Acrylic 5mm + Black Walnut Base',
      machine: 'SainSmart Genmitsu 4030 PROVer (710W Makita)',
      settings: '14,000 RPM (Dial 2), 1,400 mm/min feed, 30° V-Bit',
      software: 'Carveco Maker (Calibrated in Laserhuis Bit Studio)',
      description: 'Clean V-carved vector linework with single-flute edge profiling. No melting or frosted burrs thanks to low spindle RPM and high feed rates.',
      difficulty: 'Moderate',
    },
    {
      id: 'walnut-mountain-relief',
      title: 'Full 3D Mountain Landscape Relief Carving',
      technique: 'cnc-carve',
      material: 'Solid American Walnut (25mm thick slab)',
      machine: 'Desktop CNC Router with 710W Spindle',
      settings: 'Roughing: 6mm Endmill (18k RPM). Finish: 1/8" Tapered Ball Nose (20k RPM, 1,800 mm/min)',
      software: 'Carveco Pro 3D Relief Toolpaths',
      description: 'Machined in 2 hours with zero tool marks. Stepover set to 8% tool diameter for glass-smooth finishing passes without manual hand sanding.',
      difficulty: 'Advanced',
    },
    {
      id: 'brass-wood-tray',
      title: 'Geometric Brass Inlay Charcuterie Board',
      technique: 'mixed',
      material: 'Hard Maple + 1.5mm Mirror Brass Sheet',
      machine: 'Genmitsu CNC + Kintix Laser',
      settings: 'CNC pocket: 1.5mm Downcut (16k RPM). Laser cut brass alignment template.',
      software: 'Carveco (Wood pockets) + LightBurn (Brass vector templates)',
      description: 'Pocket machined with precise 0.05mm adhesive clearance. Brass cut and press-fit flush, then sanded and buffed with food-safe mineral oil.',
      difficulty: 'Advanced',
    },
    {
      id: 'living-hinge-book',
      title: 'Flexible Living Hinge Leather & Wood Journal',
      technique: 'mixed',
      material: 'Baltic Birch 3mm + 2mm Veg-Tanned Leather',
      machine: 'Kintix Precision Laser',
      settings: 'Wood lattice: 600 mm/min @ 90%. Leather cover: 1,400 mm/min @ 50%',
      software: 'LightBurn living hinge parametric generator',
      description: 'Parametric wave lattice cut allows rigid 3mm birch to bend effortlessly around a 20mm journal spine without cracking.',
      difficulty: 'Easy',
    },
    {
      id: 'slate-coaster-pack',
      title: 'Monogram Geometric Slate Coaster Gift Set',
      technique: 'laser-engrave',
      material: 'Natural Black Slate Coasters (100x100mm)',
      machine: 'Diode / CO2 Laser',
      settings: '4,000 mm/min @ 40% Power (Raster & Vector Outline)',
      software: 'LightBurn Fill + Line optimization',
      description: 'Surface minerals fractured by high-speed laser raster. Treated with food-grade mineral oil for rich deep charcoal and brilliant chalk-white contrast.',
      difficulty: 'Easy',
    },
  ];

  const filtered = projects.filter(
    p => selectedTech === 'all' || p.technique === selectedTech
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Community Showcase</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Maker Project Gallery & Cut Recipe Files
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real projects crafted in our workshop and community. Inspect exact feeds, speeds, tool bits, and CAM strategies used for each build.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'laser-cut', label: 'Laser Cut' },
            { id: 'cnc-carve', label: 'CNC Carved' },
            { id: 'mixed', label: 'Mixed CNC + Laser' },
            { id: 'laser-engrave', label: 'Laser Engraved' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedTech(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedTech === f.id
                  ? 'bg-orange-500 text-zinc-950'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(proj => (
            <div
              key={proj.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase font-mono text-[10px] text-orange-400 font-bold">
                    {proj.technique.replace('-', ' ')}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {proj.difficulty}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1.5 text-[11px]">
                  <div>
                    <strong className="text-zinc-300">Material:</strong>{' '}
                    <span className="text-zinc-400">{proj.material}</span>
                  </div>
                  <div>
                    <strong className="text-zinc-300">Machine:</strong>{' '}
                    <span className="text-orange-400/90">{proj.machine}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-orange-500 hover:text-zinc-950 text-zinc-200 font-semibold text-xs transition-colors cursor-pointer"
                >
                  View Cut Parameters
                </button>

                <Link
                  to="/cnc-calculator"
                  className="text-xs text-zinc-400 hover:text-orange-400 flex items-center gap-1"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Bit Studio</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-orange-400">
                  {activeProject.technique} · {activeProject.difficulty}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {activeProject.description}
            </p>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Target Material:</span>
                <span className="font-semibold text-zinc-200">{activeProject.material}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Tool / Machine:</span>
                <span className="font-semibold text-orange-400">{activeProject.machine}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Software Workflow:</span>
                <span className="font-semibold text-zinc-300">{activeProject.software}</span>
              </div>
              <div className="pt-2 border-t border-zinc-800">
                <span className="text-zinc-400 block mb-1">Production Settings:</span>
                <span className="font-mono text-emerald-400 font-semibold">{activeProject.settings}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/cnc-calculator"
                className="text-xs font-semibold text-orange-400 hover:underline flex items-center gap-1.5"
              >
                <Calculator className="w-4 h-4" />
                <span>Calibrate Bits for this Project</span>
              </Link>
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
