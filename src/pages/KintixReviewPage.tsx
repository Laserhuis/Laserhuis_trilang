import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Star,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Layers,
  Cpu,
  Sliders,
} from 'lucide-react';

export function KintixReviewPage() {
  const benchmarks = [
    { material: 'Baltic Birch Plywood 3mm', speed: '850 mm/min', power: '80%', passes: 1, charring: 'Minimal (Clean light brown)', result: 'Pass' },
    { material: 'Black Cast Acrylic 3mm', speed: '550 mm/min', power: '90%', passes: 1, charring: 'None (Flame-polished edge)', result: 'Pass' },
    { material: 'Pine Board 10mm (Softwood)', speed: '180 mm/min', power: '100%', passes: 2, charring: 'Medium (Requires sanding)', result: 'Pass' },
    { material: 'Stainless Steel Sheet', speed: '4,000 mm/min', power: '60% (1064nm)', passes: 1, charring: 'N/A (Multi-color temper anneal)', result: 'Pass' },
    { material: 'Slate Coaster 5mm', speed: '5,000 mm/min', power: '35%', passes: 1, charring: 'Crisp chalk-white vector', result: 'Pass' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header & Breadcrumb */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Laserhuis
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/reviews" className="hover:text-white transition-colors">
              Reviews
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-orange-400 font-semibold">Kintix Laser Review</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
                Lab Review · In-Depth Benchmark
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                Laserhuis Score: 9.2 / 10
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Kintix Precision Laser Engraver Review: The Complete Dual-Wavelength Benchmark
            </h1>

            <p className="text-base text-zinc-300 leading-relaxed">
              We spent 120 hours cutting, vector engraving, and marking with the Kintix Laser in our workshop. Can its dual-wavelength (20W 450nm Blue Diode + 2W 1064nm Infrared) architecture replace both a diode cutter and an expensive fiber galvo laser? Here is our comprehensive verdict.
            </p>
          </div>
        </div>
      </section>

      {/* Main Review Body */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white">The Verdict: Outstanding Workshop Precision</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              The Kintix laser brings a welcome level of industrial precision to the desktop maker space. While many manufacturers simply stack 4 or 8 small diode emitters together to claim higher wattage at the expense of an elongated, blurry laser spot, Kintix engineered an ultra-compact optical combiner that maintains a crisp 0.06 x 0.08mm focal point.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              When switched to the secondary 1064nm infrared laser module, it acts as a dedicated fiber-class marker for stainless steel, brass, titanium, and dark plastics without needing toxic spray chemicals or temper marking tapes.
            </p>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-zinc-900 border border-emerald-500/20 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>What We Loved</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  <li>• Razor-sharp 0.06mm spot size delivers crisp photo engravings</li>
                  <li>• Instant optical switching between 450nm and 1064nm wavelengths</li>
                  <li>• Full native LightBurn compatibility over USB and Wi-Fi</li>
                  <li>• Heavy-gauge extruded aluminum frame with dual linear rails</li>
                  <li>• Quiet high-pressure air assist pump included in the box</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-rose-500/20 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>Where It Could Improve</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400">
                  <li>• Exhaust duct hose is somewhat stiff for tight desktop corners</li>
                  <li>• Rotary chuck attachment requires optional purchase</li>
                  <li>• Protective enclosure lid safety interlock is sensitive to dust</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-6 self-start shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-orange-400" />
              <span>Technical Specifications</span>
            </h3>

            <div className="divide-y divide-zinc-800 text-xs">
              {[
                ['Optical Power', '20W Diode (450nm) + 2W Infrared (1064nm)'],
                ['Working Envelope', '400 x 400 mm (15.75 x 15.75")'],
                ['Maximum Velocity', '600 mm/s (36,000 mm/min)'],
                ['Focal Spot Size', '0.06 x 0.08 mm compressed beam'],
                ['Motion System', 'CoreXY gantry on dual hardened steel rails'],
                ['Air Assist', 'Integrated 30 PSI quiet diaphragm pump'],
                ['Safety Sensors', 'Flame sensor, 15° tilt cutoff, interlocks'],
                ['Supported CAM', 'LightBurn, LaserGRBL, Kintix Studio'],
                ['Price Range', '€899 – €1,299 depending on bundle'],
              ].map(([k, v]) => (
                <div key={k} className="py-2.5 flex items-center justify-between gap-3">
                  <span className="text-zinc-400 font-medium">{k}</span>
                  <span className="text-zinc-200 font-mono text-right">{v}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/compare"
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Compare vs Other Lasers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Cut Benchmarks Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span>Kintix Laboratory Speed & Power Benchmarks</span>
          </h3>

          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-800/80 border-b border-zinc-700 text-zinc-300 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Material Tested</th>
                  <th className="py-3 px-4">Speed</th>
                  <th className="py-3 px-4">Power</th>
                  <th className="py-3 px-4">Passes</th>
                  <th className="py-3 px-4">Edge Quality & Charring</th>
                  <th className="py-3 px-4 text-right">Lab Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                {benchmarks.map((b, i) => (
                  <tr key={i} className="hover:bg-zinc-800/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{b.material}</td>
                    <td className="py-3 px-4 font-mono text-zinc-300">{b.speed}</td>
                    <td className="py-3 px-4 font-mono text-orange-300">{b.power}</td>
                    <td className="py-3 px-4 font-mono">{b.passes}</td>
                    <td className="py-3 px-4 text-zinc-400">{b.charring}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                        {b.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workshop Recommendation */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">
              Pairing Kintix with CNC Routers & 3D Printers
            </h4>
            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
              In our shop, we combine the Kintix laser with our SainSmart 710W CNC router: we CNC route complex relief 3D pockets, and use the Kintix for precision vector inlays, kerf-compensated logos, and stainless nameplate serial numbers.
            </p>
          </div>
          <Link
            to="/cnc-calculator"
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs shadow-md transition-all shrink-0"
          >
            Launch CNC Tool Calibrator
          </Link>
        </div>
      </section>
    </div>
  );
}
