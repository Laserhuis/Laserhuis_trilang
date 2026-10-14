import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Layers,
  BookOpen,
  Scale,
  Flame,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Wrench,
  Search,
  ExternalLink,
  Shield,
  Zap,
} from 'lucide-react';

export function HomePage() {
  const [materialSearch, setMaterialSearch] = useState('');

  const quickMaterials = [
    { name: 'Birch Plywood 3mm', laser10w: '400 mm/min @ 90%', laser20w: '800 mm/min @ 80%', cnc710w: '1800 mm/min, 16k RPM', type: 'Wood' },
    { name: 'Cast Acrylic 3mm', laser10w: '280 mm/min @ 95%', laser20w: '600 mm/min @ 85%', cnc710w: '1400 mm/min, 14k RPM', type: 'Plastic' },
    { name: 'Vegetable Leather 2mm', laser10w: '1200 mm/min @ 40%', laser20w: '2200 mm/min @ 35%', cnc710w: 'Not Recommended', type: 'Leather' },
    { name: 'MDF 6mm', laser10w: '180 mm/min @ 100% (2x)', laser20w: '450 mm/min @ 90%', cnc710w: '1600 mm/min, 18k RPM', type: 'Wood' },
    { name: 'Black Slate Coaster', laser10w: '2500 mm/min @ 50%', laser20w: '4000 mm/min @ 40%', cnc710w: 'Diamond drag bit only', type: 'Stone' },
  ];

  const filteredMaterials = quickMaterials.filter(m =>
    m.name.toLowerCase().includes(materialSearch.toLowerCase()) ||
    m.type.toLowerCase().includes(materialSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>Version 2026 Maker & Machining Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Master Laser Cutting, Engraving &{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                CNC Routing
              </span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed">
              Tested parameters, CAM tool database calibrators, in-depth hardware reviews, and production-tested cut files for European and worldwide makers.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/cnc-calculator"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-sm shadow-xl shadow-orange-500/25 transition-all hover:scale-[1.02]"
              >
                <Calculator className="w-4 h-4" />
                <span>Open CNC Tool Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/materials"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold text-sm transition-colors"
              >
                <Layers className="w-4 h-4 text-orange-400" />
                <span>Browse Material Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tool Spotlight: CNC Calculator */}
      <section className="py-12 border-b border-zinc-850 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 border border-orange-500/30 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Featured CAM Tool</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Carveco & ArtCAM CNC Tool Database (.tbd / .tdb) Calibrator
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Directly tune router bit libraries for 710W trim routers (Makita RT0700, DeWalt DWP611, Genmitsu 710W). Bulk scale RPM, convert metric/imperial feeds, and export verified binary tool databases ready for Carveco Maker and ArtCAM.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Binary .tdb / .tbd Parsing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>710W Router Dial Clamping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>160+ Brand Presets Included</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                to="/cnc-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-sm shadow-lg shadow-orange-500/20 transition-all text-center"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch CNC Studio App</span>
              </Link>
              <Link
                to="/tutorials"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors text-center"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read 710W Spindle Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Hardware Benchmarks & Reviews Grid */}
      <section className="py-16 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">
                Laboratory & Workshop Testing
              </p>
              <h2 className="text-3xl font-extrabold text-white">
                Featured Machine Reviews & Teardowns
              </h2>
            </div>
            <Link
              to="/reviews"
              className="text-xs font-semibold text-zinc-400 hover:text-orange-400 flex items-center gap-1.5 transition-colors"
            >
              <span>View all hardware reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: SainSmart Genmitsu Router */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col hover:border-zinc-700 transition-all group">
              <div className="h-48 overflow-hidden relative bg-zinc-950">
                <img
                  src="/images/sainsmart_hero_1786084432276.jpg"
                  alt="SainSmart Genmitsu CNC Router Review"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  CNC Router
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-zinc-950 text-[11px] font-black px-2 py-0.5 rounded">
                  Score: 9.0
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors">
                    SainSmart Genmitsu PROVer & 710W Router
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                    In-depth testing with aluminum milling, hardwood relief carving, and the Genmitsu bed extension kit.
                  </p>
                </div>
                <Link
                  to="/reviews"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  <span>Read Full Review</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 2: Kintix Laser Review */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col hover:border-zinc-700 transition-all group">
              <div className="h-48 overflow-hidden relative bg-zinc-950">
                <div className="w-full h-full bg-gradient-to-br from-orange-950/60 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                  <Flame className="w-12 h-12 text-orange-500 mb-2 stroke-[1.5]" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">KINTIX DIODE & FIBER</span>
                </div>
                <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  Laser Engraver
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-zinc-950 text-[11px] font-black px-2 py-0.5 rounded">
                  Score: 9.2
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors">
                    Kintix Precision Laser Engraver
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                    Fast 800mm/s vector engraving, stainless steel color marking, and acrylic cut depth performance.
                  </p>
                </div>
                <Link
                  to="/reviews/kintix"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  <span>Read Kintix Deep Dive</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 3: Nano Blue End Mills */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col hover:border-zinc-700 transition-all group">
              <div className="h-48 overflow-hidden relative bg-zinc-950">
                <img
                  src="/images/nano_blue_bits_1786089602050.jpg"
                  alt="Nano Blue CNC Bits Review"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  Tooling & Bits
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-zinc-950 text-[11px] font-black px-2 py-0.5 rounded">
                  Score: 9.4
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors">
                    Nano Blue Spiral End Mills Guide
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                    Hardness evaluation, heat reduction coating, and longevity comparison versus standard uncoated tungsten.
                  </p>
                </div>
                <Link
                  to="/reviews"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  <span>Read Tooling Test</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 4: Creality Ender 3 V3 */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col hover:border-zinc-700 transition-all group">
              <div className="h-48 overflow-hidden relative bg-zinc-950">
                <img
                  src="/images/ender3_v3_printer_1786089617431.jpg"
                  alt="Creality Ender 3 V3 Review"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  3D & Jigs
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-zinc-950 text-[11px] font-black px-2 py-0.5 rounded">
                  Score: 8.8
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors">
                    Creality Ender-3 V3 Workshop Review
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                    Rapid 3D printing of CNC dust shoes, laser workholding jigs, and alignment brackets.
                  </p>
                </div>
                <Link
                  to="/reviews"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  <span>Read Workshop Setup</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Material Speeds & Feeds Lookup */}
      <section className="py-16 border-b border-zinc-900 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">
                Fast Workshop Reference
              </p>
              <h2 className="text-3xl font-extrabold text-white">
                Material Parameters & Feeds Cheat Sheet
              </h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search plywood, acrylic, slate..."
                value={materialSearch}
                onChange={e => setMaterialSearch(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/80">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-800/80 border-b border-zinc-700 text-zinc-300 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Material</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">10W Diode Cut</th>
                  <th className="py-3 px-4">20W Diode Cut</th>
                  <th className="py-3 px-4">710W CNC Router</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                {filteredMaterials.map((mat, i) => (
                  <tr key={i} className="hover:bg-zinc-800/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{mat.name}</td>
                    <td className="py-3 px-4">
                      <span className="text-[11px] text-zinc-400">{mat.type}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-zinc-300">{mat.laser10w}</td>
                    <td className="py-3 px-4 font-mono text-orange-300">{mat.laser20w}</td>
                    <td className="py-3 px-4 font-mono text-cyan-300">{mat.cnc710w}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        to="/materials"
                        className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>Full Chart</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/materials"
              className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300"
            >
              <span>Explore all 40+ materials with interactive kerf calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Knowledge Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">
              Laserhuis Sections
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              Everything You Need in One Workshop Portal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/tutorials"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Step-by-Step Tutorials</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                From rotary tumbler chuck engraving to kerf compensation and Carveco 3D toolpaths. Clear guides with zero guesswork.
              </p>
              <span className="text-xs font-semibold text-orange-400 flex items-center gap-1">
                <span>View Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/compare"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Interactive Machine Comparison</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Compare Diode vs CO2 vs Fiber lasers and CNC routers head-to-head across optical power, focal length, work envelope, and price.
              </p>
              <span className="text-xs font-semibold text-orange-400 flex items-center gap-1">
                <span>Compare Machines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/gallery"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Project Gallery & Cut Files</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Real community creations with verified laser power, speed, lens distance, and CNC feeds used to produce them.
              </p>
              <span className="text-xs font-semibold text-orange-400 flex items-center gap-1">
                <span>Explore Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
