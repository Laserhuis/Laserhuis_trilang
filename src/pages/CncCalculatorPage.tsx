import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CncCalculatorWorkbench } from '../components/cnc/CncCalculatorWorkbench';
import {
  Calculator,
  ChevronRight,
  Info,
  Sliders,
  Download,
  Upload,
  Zap,
  HelpCircle,
  FileCode,
  ShieldAlert,
} from 'lucide-react';

export function CncCalculatorPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Why do I need to calibrate .tdb databases for 710W trim routers?',
      a: 'Default tool databases from manufacturers like Whiteside, Amana, and Freud are calibrated for 3HP–5HP industrial VFD CNC spindles running at high torque at low RPMs (e.g. 12,000–18,000 RPM with deep single-pass cuts). 710W trim routers (Makita RT0700C, DeWalt DWP611, Genmitsu 710W) operate with universal brushed motors that lose significant torque below 10,000 RPM and are optimized for 14,000–24,000 RPM with lighter stepdowns and higher feed rates.',
    },
    {
      q: 'How does the binary export work with Carveco Maker and ArtCAM?',
      a: 'Carveco and ArtCAM save tool databases in a proprietary MFC CArchive binary format with the .tdb or .tbd extension. When you upload your file, our parser extracts the exact byte offsets for names, diameters, RPM, feed rates, plunge rates, and stepdowns. When exporting as .tdb, the editor preserves the original header, group hierarchy, and object serialization, patching the parameters at their precise byte locations so Carveco loads it seamlessly without syntax or CRC errors.',
    },
    {
      q: 'What is Dial Snapping on the Spindle Tuner Bar?',
      a: 'Popular routers do not have digital RPM inputs — they use indexed speed dials numbered 1 to 6 (Makita) or 1 to 6 (DeWalt). Dial Snapping rounds any calculated spindle speed to the nearest physical dial position on your router so you always set the exact speed notch in your workshop.',
    },
    {
      q: 'Can I upload files from Vectric Aspire or Fusion 360?',
      a: 'Yes! The tool supports standard .tdb/.tbd binary formats, as well as CSV, JSON, and G-Code tool tables. You can also import brand presets (Whiteside, Genmitsu, Amana Tool, Bits & Bits, Yonico, Freud) and convert them to any format.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Breadcrumb & Page Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                <Link to="/" className="hover:text-white transition-colors">
                  Laserhuis Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <span className="text-zinc-300 font-medium">Tools & Calibrators</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <span className="text-orange-400 font-semibold">CNC Tool Database Calibrator</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <Calculator className="w-6 h-6" />
                </span>
                <span>Carveco & ArtCAM CNC Tool Database (.tbd / .tdb) Calibrator</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-3xl leading-relaxed">
                Calibrate router bit libraries, feeds & speeds for 710W trim routers (Makita RT0700, DeWalt DWP611, Genmitsu 710W). Bulk modify spindle speeds, convert metric/imperial values, and export clean binary files for Carveco Maker, Pro & ArtCAM.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-300 font-medium flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-orange-400" />
                <span>Carveco .tdb & ArtCAM .tbd</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-300 font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>710W Spindle Presets</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Workbench Section */}
      <section className="py-6 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CncCalculatorWorkbench initialIsFullScreen={false} />
      </section>

      {/* Guide & Documentation Below Workbench */}
      <section className="py-12 border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 3 Step Workflow */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-orange-400" />
              <span>How to Calibrate Your CNC Tool Database in 3 Steps</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/20">
                  1
                </div>
                <h3 className="font-bold text-sm text-white">Load or Upload Database</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Click <strong>Load Preset</strong> to choose manufacturer bit libraries (Whiteside, Genmitsu, Amana, Freud), or click <strong>Upload File</strong> to drag-and-drop your existing Carveco <code>.tdb</code> or ArtCAM <code>.tbd</code> file.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/20">
                  2
                </div>
                <h3 className="font-bold text-sm text-white">Tune for Your Spindle (710W)</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Use the <strong>Spindle Tuner Bar</strong> to select your router profile (Makita RT0700C, DeWalt DWP611, Genmitsu 710W). Enable <strong>Snap to Router Dial</strong> and click <strong>Apply 710W Tuning</strong> to re-calibrate RPM and feed rates safely.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/20">
                  3
                </div>
                <h3 className="font-bold text-sm text-white">Export & Load into Carveco</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Click <strong>Export Database</strong> to save the calibrated file as <code>.tdb</code> or <code>.tbd</code>. Open Carveco Maker / ArtCAM, choose <em>Tool Database &gt; Import</em>, and select your file. All bit parameters are instantly updated.
                </p>
              </div>
            </div>
          </div>

          {/* Technical FAQs Accordion */}
          <div className="pt-6 border-t border-zinc-800">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-400" />
              <span>Frequently Asked Questions & Technical Specifications</span>
            </h2>

            <div className="space-y-3 max-w-4xl">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 flex items-center justify-between text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
