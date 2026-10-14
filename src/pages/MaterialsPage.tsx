import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Search,
  Filter,
  AlertTriangle,
  Zap,
  Calculator,
  Flame,
  ArrowRight,
  CheckCircle2,
  Sliders,
} from 'lucide-react';

interface MaterialEntry {
  id: string;
  name: string;
  category: 'wood' | 'acrylic' | 'leather' | 'stone' | 'metal' | 'glass';
  thickness: string;
  diode10w: { speed: string; power: string; passes: number; airAssist: string };
  diode20w: { speed: string; power: string; passes: number; airAssist: string };
  co250w: { speed: string; power: string; passes: number; airAssist: string };
  cnc710w: { rpm: string; feedRate: string; plungeRate: string; stepdown: string; bit: string };
  kerfMm: number;
  notes: string;
  safetyTier: 'safe' | 'caution' | 'danger';
}

export function MaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [machineMode, setMachineMode] = useState<'laser' | 'cnc'>('laser');
  const [kerfInput, setKerfInput] = useState<number>(3.0);
  const [kerfOffset, setKerfOffset] = useState<number>(0.15);

  const materials: MaterialEntry[] = [
    {
      id: 'birch-3mm',
      name: 'Baltic Birch Plywood 3mm',
      category: 'wood',
      thickness: '3.0 mm (1/8")',
      diode10w: { speed: '420 mm/min', power: '90%', passes: 1, airAssist: 'High (30 PSI)' },
      diode20w: { speed: '850 mm/min', power: '80%', passes: 1, airAssist: 'High (30 PSI)' },
      co250w: { speed: '25 mm/s', power: '55%', passes: 1, airAssist: 'High' },
      cnc710w: { rpm: '18,000 RPM (Dial 3.5)', feedRate: '1,800 mm/min', plungeRate: '600 mm/min', stepdown: '1.5 mm', bit: '3.175mm Downcut Spiral' },
      kerfMm: 0.16,
      notes: 'Ensure flat stock with honeycomb hold-down pins. Downcut CNC bit prevents surface veneer splintering.',
      safetyTier: 'safe',
    },
    {
      id: 'birch-6mm',
      name: 'Baltic Birch Plywood 6mm',
      category: 'wood',
      thickness: '6.0 mm (1/4")',
      diode10w: { speed: '200 mm/min', power: '100%', passes: 2, airAssist: 'High' },
      diode20w: { speed: '420 mm/min', power: '90%', passes: 1, airAssist: 'High' },
      co250w: { speed: '14 mm/s', power: '70%', passes: 1, airAssist: 'High' },
      cnc710w: { rpm: '17,000 RPM (Dial 3)', feedRate: '1,600 mm/min', plungeRate: '500 mm/min', stepdown: '2.0 mm', bit: '6.0mm Compression Bit' },
      kerfMm: 0.22,
      notes: 'Exterior glues require 15% more power or an extra pass. Clean honeycombs regularly.',
      safetyTier: 'safe',
    },
    {
      id: 'mdf-3mm',
      name: 'Standard MDF 3mm',
      category: 'wood',
      thickness: '3.0 mm',
      diode10w: { speed: '380 mm/min', power: '95%', passes: 1, airAssist: 'High' },
      diode20w: { speed: '750 mm/min', power: '85%', passes: 1, airAssist: 'High' },
      co250w: { speed: '22 mm/s', power: '60%', passes: 1, airAssist: 'High' },
      cnc710w: { rpm: '19,000 RPM (Dial 4)', feedRate: '2,000 mm/min', plungeRate: '600 mm/min', stepdown: '1.5 mm', bit: '3.175mm Straight 2-Flute' },
      kerfMm: 0.18,
      notes: 'High resin content generates fine particulate. Vacuum extraction mandatory.',
      safetyTier: 'caution',
    },
    {
      id: 'cast-acrylic-clear-3mm',
      name: 'Cast Acrylic (Clear) 3mm',
      category: 'acrylic',
      thickness: '3.0 mm',
      diode10w: { speed: 'Cannot Cut (Diode 450nm)', power: 'N/A', passes: 0, airAssist: 'N/A' },
      diode20w: { speed: 'Cannot Cut Clear (Transmits blue light)', power: 'N/A', passes: 0, airAssist: 'N/A' },
      co250w: { speed: '18 mm/s', power: '65%', passes: 1, airAssist: 'Low (prevent frosted edge)' },
      cnc710w: { rpm: '14,000 RPM (Dial 2)', feedRate: '1,400 mm/min', plungeRate: '400 mm/min', stepdown: '1.5 mm', bit: '3.175mm Single Flute (O-Flute)' },
      kerfMm: 0.19,
      notes: 'Clear acrylic requires CO2 laser (10.6um wavelength) or single-flute O-flute CNC milling with chip evacuation.',
      safetyTier: 'caution',
    },
    {
      id: 'cast-acrylic-opaque-3mm',
      name: 'Cast Acrylic (Black / Dark) 3mm',
      category: 'acrylic',
      thickness: '3.0 mm',
      diode10w: { speed: '260 mm/min', power: '100%', passes: 1, airAssist: 'Medium' },
      diode20w: { speed: '550 mm/min', power: '90%', passes: 1, airAssist: 'Medium' },
      co250w: { speed: '20 mm/s', power: '60%', passes: 1, airAssist: 'Low' },
      cnc710w: { rpm: '14,000 RPM (Dial 2)', feedRate: '1,500 mm/min', plungeRate: '400 mm/min', stepdown: '1.5 mm', bit: 'Single Flute O-Flute' },
      kerfMm: 0.18,
      notes: 'Pigmented acrylic absorbs blue diode light effectively. Flame-polished edge achieved with lower air assist on CO2.',
      safetyTier: 'safe',
    },
    {
      id: 'veg-leather-2mm',
      name: 'Vegetable Tanned Leather 2mm',
      category: 'leather',
      thickness: '2.0 mm (5 oz)',
      diode10w: { speed: '900 mm/min', power: '65%', passes: 1, airAssist: 'High' },
      diode20w: { speed: '1,600 mm/min', power: '55%', passes: 1, airAssist: 'High' },
      co250w: { speed: '35 mm/s', power: '35%', passes: 1, airAssist: 'High' },
      cnc710w: { rpm: 'N/A', feedRate: 'N/A', plungeRate: 'N/A', stepdown: 'N/A', bit: 'Drag knife or punch only' },
      kerfMm: 0.12,
      notes: 'Never laser cut chrome-tanned leather (releases chromium gas). Vegetable tanned smells like burnt hair but is completely safe.',
      safetyTier: 'safe',
    },
    {
      id: 'black-slate',
      name: 'Black Natural Slate Coaster',
      category: 'stone',
      thickness: '4.0–6.0 mm',
      diode10w: { speed: '3,000 mm/min (Etch)', power: '45%', passes: 1, airAssist: 'Low' },
      diode20w: { speed: '5,000 mm/min (Etch)', power: '35%', passes: 1, airAssist: 'Low' },
      co250w: { speed: '350 mm/s', power: '20%', passes: 1, airAssist: 'Low' },
      cnc710w: { rpm: '0 RPM (Spindle OFF)', feedRate: '800 mm/min', plungeRate: '300 mm/min', stepdown: '0.1 mm', bit: 'Diamond Drag Bit (Spring Loaded)' },
      kerfMm: 0.08,
      notes: 'Wipe with mineral oil or clear coat post-engraving for ultra-high contrast chalk-white vectors.',
      safetyTier: 'safe',
    },
    {
      id: 'anodized-aluminum',
      name: 'Anodized Aluminum (Black)',
      category: 'metal',
      thickness: '1.0 mm sheet',
      diode10w: { speed: '2,500 mm/min (Mark)', power: '70%', passes: 1, airAssist: 'Off' },
      diode20w: { speed: '4,000 mm/min (Mark)', power: '50%', passes: 1, airAssist: 'Off' },
      co250w: { speed: '300 mm/s', power: '25%', passes: 1, airAssist: 'Off' },
      cnc710w: { rpm: '22,000 RPM (Dial 5)', feedRate: '900 mm/min', plungeRate: '250 mm/min', stepdown: '0.25 mm', bit: '1-Flute Carbide Endmill + WD-40 lube' },
      kerfMm: 0.05,
      notes: 'Bleaches dye layer to pure white. For CNC routing aluminum, mist lubrication or WD-40 is mandatory to prevent chip welding.',
      safetyTier: 'caution',
    },
    {
      id: 'pvc-vinyl-warning',
      name: 'PVC & Vinyl Sheets (NEVER CUT)',
      category: 'acrylic',
      thickness: 'Any',
      diode10w: { speed: 'PROHIBITED', power: 'N/A', passes: 0, airAssist: 'N/A' },
      diode20w: { speed: 'PROHIBITED', power: 'N/A', passes: 0, airAssist: 'N/A' },
      co250w: { speed: 'PROHIBITED', power: 'N/A', passes: 0, airAssist: 'N/A' },
      cnc710w: { rpm: '16,000 RPM', feedRate: '1,800 mm/min', plungeRate: '400 mm/min', stepdown: '1.5 mm', bit: 'CNC Routing is Safe' },
      kerfMm: 0.0,
      notes: 'DANGER: Laser cutting PVC emits chlorine gas and hydrochloric acid, which destroys laser optics and causes lung damage. Safe only on CNC routers.',
      safetyTier: 'danger',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'wood', label: 'Wood & MDF' },
    { id: 'acrylic', label: 'Acrylic & Plastics' },
    { id: 'leather', label: 'Leather' },
    { id: 'stone', label: 'Slate & Stone' },
    { id: 'metal', label: 'Anodized Metals' },
  ];

  const filteredMaterials = materials.filter(m => {
    const matchesCat = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.notes.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Laserhuis Verified Database</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Material Parameters, Speeds & Feeds Guide
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real workshop benchmark parameters for Diode lasers (10W / 20W), CO2 lasers (50W), and 710W CNC routers. Includes kerf allowances, air assist requirements, and essential safety warnings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Bar & Machine Mode */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-orange-500 text-zinc-950 shadow-sm'
                    : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Machine Mode Switch & Search */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs font-semibold">
              <button
                onClick={() => setMachineMode('laser')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  machineMode === 'laser'
                    ? 'bg-orange-500 text-zinc-950'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Laser View (10W / 20W / CO2)
              </button>
              <button
                onClick={() => setMachineMode('cnc')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  machineMode === 'cnc'
                    ? 'bg-orange-500 text-zinc-950'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                CNC 710W Spindle View
              </button>
            </div>

            <div className="relative w-48 sm:w-60">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter materials..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Materials Table */}
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-800/90 border-b border-zinc-700 text-zinc-300 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Material & Thickness</th>
                {machineMode === 'laser' ? (
                  <>
                    <th className="py-3 px-4">10W Diode Settings</th>
                    <th className="py-3 px-4">20W Diode Settings</th>
                    <th className="py-3 px-4">50W CO2 Settings</th>
                    <th className="py-3 px-4">Est. Kerf</th>
                  </>
                ) : (
                  <>
                    <th className="py-3 px-4">710W RPM & Dial</th>
                    <th className="py-3 px-4">Feed Rate</th>
                    <th className="py-3 px-4">Stepdown</th>
                    <th className="py-3 px-4">Recommended Bit</th>
                  </>
                )}
                <th className="py-3 px-4">Workshop Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              {filteredMaterials.map(mat => (
                <tr
                  key={mat.id}
                  className={`hover:bg-zinc-800/40 transition-colors ${
                    mat.safetyTier === 'danger' ? 'bg-red-950/20 text-red-200' : ''
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white flex items-center gap-2">
                      {mat.safetyTier === 'danger' && (
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <span>{mat.name}</span>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono">{mat.thickness}</span>
                  </td>

                  {machineMode === 'laser' ? (
                    <>
                      <td className="py-3.5 px-4 font-mono">
                        {mat.diode10w.speed === 'PROHIBITED' ? (
                          <span className="text-red-400 font-bold">NEVER LASER</span>
                        ) : (
                          <>
                            <div className="text-zinc-200">{mat.diode10w.speed}</div>
                            <div className="text-[10px] text-zinc-400">
                              {mat.diode10w.power} · {mat.diode10w.passes} pass
                            </div>
                          </>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono">
                        {mat.diode20w.speed === 'PROHIBITED' ? (
                          <span className="text-red-400 font-bold">NEVER LASER</span>
                        ) : (
                          <>
                            <div className="text-orange-300">{mat.diode20w.speed}</div>
                            <div className="text-[10px] text-zinc-400">
                              {mat.diode20w.power} · {mat.diode20w.passes} pass
                            </div>
                          </>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono">
                        {mat.co250w.speed === 'PROHIBITED' ? (
                          <span className="text-red-400 font-bold">NEVER LASER</span>
                        ) : (
                          <>
                            <div className="text-amber-300">{mat.co250w.speed}</div>
                            <div className="text-[10px] text-zinc-400">{mat.co250w.power}</div>
                          </>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-zinc-400">
                        {mat.kerfMm > 0 ? `${mat.kerfMm.toFixed(2)} mm` : '—'}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3.5 px-4 font-mono text-cyan-300">
                        {mat.cnc710w.rpm}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-zinc-200">
                        {mat.cnc710w.feedRate}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-zinc-300">
                        {mat.cnc710w.stepdown}
                      </td>
                      <td className="py-3.5 px-4 text-orange-300 font-medium">
                        {mat.cnc710w.bit}
                      </td>
                    </>
                  )}

                  <td className="py-3.5 px-4 text-xs text-zinc-400 max-w-xs">
                    {mat.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Interactive Kerf Calculator Tool */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-orange-950/20 border border-zinc-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>Interactive Inlay Calculator</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Laser Kerf Offset & Tight-Fit Compensation
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                When laser cutting box joints, marquetry, or acrylic inlays, the laser beam vaporizes an average kerf of 0.12–0.22mm. Offset your male inlay vectors outward by half the measured kerf for a snug push-fit.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div>
                <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">
                  Target Dimension (mm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={kerfInput}
                  onChange={e => setKerfInput(parseFloat(e.target.value) || 0)}
                  className="w-24 bg-zinc-900 border border-zinc-700 rounded px-2.5 py-1 text-xs font-mono text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">
                  Laser Kerf (mm)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={kerfOffset}
                  onChange={e => setKerfOffset(parseFloat(e.target.value) || 0)}
                  className="w-24 bg-zinc-900 border border-zinc-700 rounded px-2.5 py-1 text-xs font-mono text-orange-400"
                />
              </div>

              <div className="pl-2 border-l border-zinc-800">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">
                  Inlay Cut Size:
                </div>
                <div className="text-base font-extrabold font-mono text-emerald-400">
                  {(kerfInput + kerfOffset / 2).toFixed(3)} mm
                </div>
                <div className="text-[9px] text-zinc-500">Outer Vector Offset: +{(kerfOffset / 2).toFixed(3)}mm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Link back to CNC Tool database */}
        <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need to calibrate router bit toolpaths?</h4>
              <p className="text-xs text-zinc-400">
                Bulk tune and export Carveco .tdb & ArtCAM .tbd tool databases for your 710W spindle.
              </p>
            </div>
          </div>
          <Link
            to="/cnc-calculator"
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Open CNC Tool Calibrator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
