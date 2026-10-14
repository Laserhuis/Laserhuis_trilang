import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Check,
  X,
  Zap,
  Flame,
  Wrench,
  Calculator,
  ArrowRight,
  Sliders,
} from 'lucide-react';

interface Machine {
  id: string;
  name: string;
  type: 'diode' | 'co2' | 'cnc' | 'fiber';
  tag: string;
  power: string;
  workArea: string;
  maxSpeed: string;
  woodCutMax: string;
  acrylicCut: string;
  metalCapability: string;
  relief3d: string;
  software: string;
  enclosure: string;
  price: string;
  score: number;
}

export function ComparePage() {
  const allMachines: Machine[] = [
    {
      id: 'kintix-laser',
      name: 'Kintix Precision Laser',
      type: 'diode',
      tag: 'Dual Diode & Fiber Hybrid',
      power: '20W 450nm + 2W 1064nm',
      workArea: '400 x 400 mm',
      maxSpeed: '600 mm/s (36,000 mm/min)',
      woodCutMax: '8 mm Birch (single pass)',
      acrylicCut: 'Black & dark cast only (no clear)',
      metalCapability: 'Color marking & vector etch',
      relief3d: '2.5D grayscale depth only',
      software: 'LightBurn, LaserGRBL',
      enclosure: 'Optional acrylic safety enclosure',
      price: '€899 – €1,299',
      score: 9.2,
    },
    {
      id: 'genmitsu-710w',
      name: 'SainSmart Genmitsu 4030 PROVer',
      type: 'cnc',
      tag: 'Desktop 710W CNC Router',
      power: '710W Spindle (Makita/Genmitsu)',
      workArea: '300 x 400 x 45 mm',
      maxSpeed: '50 mm/s (3,000 mm/min)',
      woodCutMax: '50 mm (multi-pass 2-3mm)',
      acrylicCut: 'Clear & colored cast (mirror polish)',
      metalCapability: 'Milling brass & aluminum plates',
      relief3d: 'Full 3D curved topographical relief',
      software: 'Carveco, ArtCAM, Fusion 360',
      enclosure: 'Open frame or custom box',
      price: '€599 – €849',
      score: 9.0,
    },
    {
      id: 'xtool-p2',
      name: 'xTool P2 CO2 Laser',
      type: 'co2',
      tag: 'Enclosed 55W CO2 Laser',
      power: '55W Glass CO2 Tube',
      workArea: '600 x 305 mm',
      maxSpeed: '600 mm/s',
      woodCutMax: '18 mm Walnut / Plywood',
      acrylicCut: 'Clear, translucent & all colors (20mm)',
      metalCapability: 'Requires laser marking spray',
      relief3d: '2.5D vector engraving only',
      software: 'LightBurn, xTool Creative Space',
      enclosure: 'Full Class 1 sealed enclosure',
      price: '€4,299 – €4,899',
      score: 9.4,
    },
    {
      id: 'creality-falcon2',
      name: 'Creality Falcon 2 40W',
      type: 'diode',
      tag: 'High-Power Diode Cutter',
      power: '40W Optical Diode',
      workArea: '400 x 415 mm',
      maxSpeed: '416 mm/s (25,000 mm/min)',
      woodCutMax: '15 mm Softwood / 10mm Birch',
      acrylicCut: 'Dark cast acrylic only',
      metalCapability: 'Surface oxide marking',
      relief3d: 'Raster engraving only',
      software: 'LightBurn, LaserGRBL',
      enclosure: 'Open frame with protective shield',
      price: '€999 – €1,199',
      score: 8.8,
    },
    {
      id: 'omtech-polar',
      name: 'OMTech Polar 50W Desktop CO2',
      type: 'co2',
      tag: 'Compact Desktop CO2',
      power: '50W CO2 Laser Tube',
      workArea: '510 x 300 mm',
      maxSpeed: '500 mm/s',
      woodCutMax: '12 mm Birch Plywood',
      acrylicCut: 'All acrylic types including clear',
      metalCapability: 'Coated metals & marking compound',
      relief3d: 'High-resolution grayscale engraving',
      software: 'LightBurn native',
      enclosure: 'Built-in internal chiller & enclosure',
      price: '€2,499 – €2,799',
      score: 9.1,
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>([
    'kintix-laser',
    'genmitsu-710w',
    'xtool-p2',
  ]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter(x => x !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([selectedIds[1], selectedIds[2], id]);
      }
    }
  };

  const selectedMachines = allMachines.filter(m => selectedIds.includes(m.id));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>Head-to-Head Benchmarks</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Laser Engraver vs CNC Router Comparison Matrix
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Compare diode lasers, enclosed CO2 systems, and 710W desktop CNC routers. Select up to 3 machines to evaluate work area, material capabilities, and workshop suitability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Machine Picker */}
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-zinc-200">
              Select Machines to Compare (2 or 3 selected):
            </span>
            <span className="text-zinc-500">
              Currently comparing {selectedIds.length} machines
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {allMachines.map(m => {
              const isSelected = selectedIds.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggleSelect(m.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500 text-zinc-950 shadow-md shadow-orange-500/20'
                      : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  <span>{m.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-zinc-850 border-b border-zinc-700 divide-x divide-zinc-800">
                <th className="p-4 w-44 font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                  Specification
                </th>
                {selectedMachines.map(m => (
                  <th key={m.id} className="p-4 min-w-[240px]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-orange-400 font-bold">
                        {m.tag}
                      </span>
                      <h3 className="text-base font-extrabold text-white">{m.name}</h3>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-mono text-zinc-300 font-semibold">{m.price}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-black">
                          ★ {m.score}
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              {[
                { label: 'Optical Power / Spindle', key: 'power' },
                { label: 'Work Envelope', key: 'workArea' },
                { label: 'Max Traverse Speed', key: 'maxSpeed' },
                { label: 'Max Wood Cut Thickness', key: 'woodCutMax' },
                { label: 'Acrylic Capability', key: 'acrylicCut' },
                { label: 'Metal Engraving / Milling', key: 'metalCapability' },
                { label: '3D Relief Carving', key: 'relief3d' },
                { label: 'Compatible Software', key: 'software' },
                { label: 'Safety Enclosure', key: 'enclosure' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/40 transition-colors divide-x divide-zinc-800">
                  <td className="p-4 font-semibold text-zinc-300 bg-zinc-900/90">
                    {row.label}
                  </td>
                  {selectedMachines.map(m => (
                    <td key={m.id} className="p-4 font-mono text-xs">
                      {m[row.key as keyof Machine]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Integration Callout */}
        <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              Running a CNC router like the SainSmart Genmitsu?
            </h4>
            <p className="text-xs text-zinc-400">
              Calibrate and bulk edit router bits for your 710W spindle using the Laserhuis Bit Studio tool.
            </p>
          </div>
          <Link
            to="/cnc-calculator"
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Calculator className="w-4 h-4" />
            <span>Open CNC Tool Calibrator</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
