import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ExternalLink,
  Search,
  CheckCircle2,
  Wrench,
  Flame,
  Calculator,
  ArrowRight,
} from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  category: 'cnc' | 'laser' | 'tooling' | 'software';
  country: string;
  established: string;
  overview: string;
  popularProducts: string[];
  laserhuisIntegration: string;
}

export function BrandsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const brands: Brand[] = [
    {
      id: 'sainsmart',
      name: 'SainSmart / Genmitsu',
      category: 'cnc',
      country: 'USA / Global',
      established: '2011',
      overview: 'Pioneers of affordable desktop CNC routers, aluminum extrusions, and accessories for hobbyists and small craft businesses.',
      popularProducts: ['PROVerXL 4030', '3018-PROVer V2', 'Bed Extension Kits', '710W Router Clamp'],
      laserhuisIntegration: 'Full preset database available in CNC Tool Calibrator; in-depth laboratory reviews on Laserhuis.',
    },
    {
      id: 'whiteside',
      name: 'Whiteside Machine Company',
      category: 'tooling',
      country: 'USA (North Carolina)',
      established: '1970',
      overview: 'Consistently voted top router bit manufacturer by woodworking publications. Precision-ground solid carbide spirals, compression bits, and bowl cutters.',
      popularProducts: ['RU1800 / RU2075 Spiral Bits', 'SC64 60° V-Groove', 'Compression End Mills'],
      laserhuisIntegration: 'Our CNC Tool Studio includes the complete verified 160-bit Whiteside Carveco .tdb preset library.',
    },
    {
      id: 'kintix',
      name: 'Kintix Precision',
      category: 'laser',
      country: 'Global',
      established: '2021',
      overview: 'Specializes in high-speed dual-wavelength lasers combining 450nm blue cutting diodes with 1064nm infrared fiber modules for deep metal marking.',
      popularProducts: ['Kintix Dual Precision 20W+2W', 'Quiet Diaphragm Air Assist', 'Rotary Chuck Pro'],
      laserhuisIntegration: 'Exclusive Laserhuis benchmark review (Score 9.2) and verified material speeds/feeds chart.',
    },
    {
      id: 'xtool',
      name: 'xTool (Makeblock)',
      category: 'laser',
      country: 'USA / China',
      established: '2013',
      overview: 'Market leader in consumer-friendly enclosed desktop CO2 and diode laser cutting machines with integrated dual cameras and air assist.',
      popularProducts: ['xTool P2 (55W CO2)', 'F1 Ultra (Galvo Diode/Fiber)', 'D1 Pro (Diode)'],
      laserhuisIntegration: 'Full comparison in our Laserhuis comparison matrix.',
    },
    {
      id: 'carveco',
      name: 'Carveco',
      category: 'software',
      country: 'United Kingdom',
      established: '2019 (Successor to Delcam ArtCAM)',
      overview: 'The leading artistic CAD/CAM software for CNC routers, relief signmakers, jewelers, and woodworkers.',
      popularProducts: ['Carveco Maker', 'Carveco Maker Plus', 'Carveco Pro'],
      laserhuisIntegration: 'Laserhuis Bit Studio is specifically designed to parse, bulk edit, and export native Carveco .tdb binary tool databases.',
    },
    {
      id: 'lightburn',
      name: 'LightBurn Software',
      category: 'software',
      country: 'USA',
      established: '2018',
      overview: 'The undisputed industry standard layout, editing, and control software for diode, CO2, and fiber laser cutters.',
      popularProducts: ['LightBurn DSP License', 'LightBurn GCode License', 'Galvo Laser License'],
      laserhuisIntegration: 'Our tutorials and material parameters directly reference LightBurn speed, power, and kerf settings.',
    },
    {
      id: 'amana-tool',
      name: 'Amana Tool',
      category: 'tooling',
      country: 'USA / Israel',
      established: '1972',
      overview: 'Industrial cutting tools featuring the proprietary Spektra nACo nanocomposite coating for 2.5x longer tool life in abrasive materials.',
      popularProducts: ['Spektra Extreme Coated End Mills', 'In-Groove CNC Insert System'],
      laserhuisIntegration: 'Preset database available in our CNC Tool Calibrator tool selector.',
    },
    {
      id: 'creality',
      name: 'Creality',
      category: 'laser',
      country: 'China / Global',
      established: '2014',
      overview: 'Massive manufacturer of 3D printers and Falcon laser engravers. Outstanding workshop utility for rapid jig fabrication.',
      popularProducts: ['Falcon 2 (40W Diode)', 'Ender-3 V3 (600mm/s 3D Printer)'],
      laserhuisIntegration: 'Workshop companion review and laser comparison benchmark.',
    },
  ];

  const filtered = brands.filter(b => {
    const matchCat = filter === 'all' || b.category === filter;
    const matchSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.overview.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Manufacturer Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Laser & CNC Brands & Tooling Manufacturers
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Explore the engineering behind top hardware, software, and router bit manufacturers. Check compatibility with Laserhuis tools and presets.
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
              { id: 'all', label: 'All Brands' },
              { id: 'cnc', label: 'CNC Machinery' },
              { id: 'laser', label: 'Laser Cutters' },
              { id: 'tooling', label: 'Carbide Tooling' },
              { id: 'software', label: 'CAM Software' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filter === f.id
                    ? 'bg-orange-500 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-300 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search manufacturers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(brand => (
            <div
              key={brand.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-orange-400">
                      {brand.category.toUpperCase()} · EST. {brand.established}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{brand.name}</h3>
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">{brand.country}</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {brand.overview}
                </p>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Flagship Products & Tool Lines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.popularProducts.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300 font-mono"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-orange-400 font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Laserhuis Integration</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    {brand.laserhuisIntegration}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <Link
                  to="/cnc-calculator"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Load Preset in Tool Studio</span>
                </Link>

                <Link
                  to="/reviews"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                >
                  <span>Read Reviews</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
