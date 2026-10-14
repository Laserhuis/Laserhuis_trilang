import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Wrench,
  Flame,
  Calculator,
  ChevronRight,
  Search,
  CheckCircle2,
  X,
} from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  category: 'cnc' | 'laser' | 'software' | 'safety';
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  steps: string[];
  tips: string[];
}

export function TutorialsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  const tutorials: Tutorial[] = [
    {
      id: 'calibrating-710w-spindle',
      title: 'Calibrating 710W Spindle Speeds & Feeds for Carveco & ArtCAM',
      category: 'cnc',
      readTime: '6 min read',
      difficulty: 'Intermediate',
      summary: 'Why default Whiteside and Amana feeds burn router bits on 710W trim routers, and how to dial in RPM notches and feed rates using the CNC Tool Database Calibrator.',
      steps: [
        'Understand Spindle Power Curves: Brushed universal motors (Makita RT0700, DeWalt DWP611, Genmitsu 710W) lose torque below 12,000 RPM. Target 16,000–22,000 RPM (Dial 3 to 5) rather than low industrial RPMs.',
        'Load Your .tdb Database in Laserhuis CNC Tool Studio: Open the CNC Calculator page and upload your Carveco .tdb or ArtCAM .tbd bit library.',
        'Apply 710W Router Profiling: Select Makita or DeWalt in the Spindle Tuner bar. Enable "Snap to Router Dial" to quantize speeds to physical dial clicks.',
        'Re-balance Chip Load: Use the formula Feed = RPM x Flutes x Target Chip Load (e.g. 0.04mm for birch plywood). For 18,000 RPM on a 2-flute 1/8" bit, set feed rate to 1,440 mm/min.',
        'Export and Test: Export the calibrated .tdb binary and import it into Carveco. Run test pocket passes and check chip temperature (chips should be warm, not powdery or charred).',
      ],
      tips: [
        'If cutting sound is high-pitched scream, increase feed rate or decrease RPM to prevent bit rubbing.',
        'Never exceed 50% bit diameter in a single stepdown on hobby CNC frames.',
      ],
    },
    {
      id: 'air-assist-optimization',
      title: 'Air Assist Optimization: Eliminating Smoke Charring and Soot',
      category: 'laser',
      readTime: '5 min read',
      difficulty: 'Beginner',
      summary: 'A step-by-step guide to dialing in air assist pressure (10–30 PSI) for crystal-clean plywood cuts and mirror-smooth acrylic edges.',
      steps: [
        'Differentiate Cutting vs Engraving: Use High Air Assist (25–35 PSI) for deep vector cutting to blow away vaporized wood tar. Turn air assist OFF or to Low (5 PSI) for surface raster engraving to avoid spreading soot across the engrave.',
        'Nozzle Clearance & Cone Alignment: Ensure the air assist cone is 2–4mm from the workpiece. Verify the laser beam exits dead center of the brass nozzle without clipping the edge.',
        'Moisture Trap Installation: Always install an inline water/oil filter between your compressor and laser head to prevent oil mist from degrading your focusing lens.',
        'Test on Baltic Birch: Cut a 20mm test square with air assist at 10, 20, and 30 PSI. Compare underside charring and top veneer scorching.',
      ],
      tips: [
        'Aquarium air pumps (30–60 L/min) are sufficient for 3mm wood; 6mm+ hardwood benefits from a silent diaphragm compressor at 30 PSI.',
        'Clean the protective lens with 99% isopropyl alcohol after every 10 hours of air-assisted cutting.',
      ],
    },
    {
      id: 'rotary-chuck-engraving',
      title: 'Rotary Chuck vs Roller: Perfect 360° Tumbler Engraving',
      category: 'laser',
      readTime: '8 min read',
      difficulty: 'Advanced',
      summary: 'Master full wrap vector engraving on tapered yeti-style tumblers, coated mugs, and wine glasses without slippage or distorted circles.',
      steps: [
        'Choose Chuck vs Roller: Use a 3-jaw rotary chuck for tapered tumblers with handles; use a roller rotary for uniform cylindrical objects (water bottles, rolling pins).',
        'Measure Diameter & Circumference: Use digital calipers to measure exact top and bottom diameters. In LightBurn Rotary Setup, enter the measured diameter and step-per-rotation count.',
        'Leveling the Surface: Tilt your rotary cradle until the top engraving surface of a tapered mug is completely parallel to the X-axis gantry.',
        'Focal Point Verification: Set focus to the highest point of the mug. For tumblers with dramatic taper, use a 2.5" or 4" long-focus lens for larger depth of field.',
        'Run Frame Check: Frame the design 360 degrees in LightBurn to confirm it does not collide with the chuck jaws or rotary motor.',
      ],
      tips: [
        'Apply painters tape and run a low-power framing pass to verify wrap alignment before lasering expensive powder-coated tumblers.',
        'Clean powder coat residue with Magic Eraser and denatured alcohol post-engraving.',
      ],
    },
    {
      id: 'kerf-compensation-inlays',
      title: 'Kerf Compensation 101: Designing Snug Push-Fit Wood & Acrylic Inlays',
      category: 'software',
      readTime: '7 min read',
      difficulty: 'Intermediate',
      summary: 'Learn how laser spot width removes material (kerf) and how to configure vector offsets in LightBurn and Illustrator for zero-gap inlays.',
      steps: [
        'Cut a 10-Line Kerf Gauge: Cut 10 parallel rectangles in your material (e.g. 50mm total width). Push all cut pieces together with calipers and measure total loss divided by 10 to determine true kerf.',
        'Calculate Offset: For a measured 0.16mm kerf, offset the female pocket vector inward by 0.08mm or the male inlay vector outward by 0.08mm.',
        'Corner Radii Matching: Because laser beams have a round focal spot (~0.08mm diameter), inside corners are slightly radiused. Match CAD corner radii accordingly.',
        'Grain Direction & Glue Allowance: Align wood grain on both base and inlay. Leave 0.02mm extra clearance if using PVA wood glue to prevent hydraulic pressure splitting.',
      ],
      tips: [
        'Cast acrylic has more consistent thickness than extruded acrylic, making it vastly superior for two-color signage inlays.',
      ],
    },
    {
      id: 'cnc-bit-selection-guide',
      title: 'Selecting the Right CNC Bits: Up-Cut, Down-Cut, Compression, and Ball Nose',
      category: 'cnc',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      summary: 'Prevent tear-out, chipped veneers, and melted plastics by selecting the optimal spiral flute geometry for your CNC project.',
      steps: [
        'Upcut Bits: Pull chips upward toward the dust shoe. Best for deep pocketing, aluminum, and slotting where chip packing causes tool breakage. Caution: May fray the top surface of veneered plywood.',
        'Downcut Bits: Push chips downward against the table. Delivers razor-sharp top edges on delicate plywood and laminates. Caution: Requires slower feeds in deep slots to avoid chip packing.',
        'Compression Bits: Upcut at the tip, downcut at the shank. Delivers splinter-free cuts on BOTH the top and bottom faces of double-sided veneered sheet goods.',
        'O-Flute (Single Flute): Large single chip pocket designed specifically for plastics (acrylic, polycarbonate, HDPE) and aluminum. Prevents plastic from re-melting onto the cutter.',
        'Tapered Ball Nose: High-detail 3D carving and topographical reliefs. Strong conical shank prevents flex while micro-radiused tip captures tiny contours.',
      ],
      tips: [
        'Always check the CNC Tool Calculator on Laserhuis to confirm feeds & speeds for each bit geometry before running CAM.',
      ],
    },
    {
      id: 'fume-extraction-filtration',
      title: 'Fume Extraction & Filtration Setup for Safe Home Workshops',
      category: 'safety',
      readTime: '6 min read',
      difficulty: 'Beginner',
      summary: 'Essential ventilation calculations, inline fan selection, activated carbon filters, and static pressure ducting for laser engravers.',
      steps: [
        'Calculate Required CFM: Measure enclosure volume in cubic feet and multiply by 30 to ensure 30 complete air changes per minute.',
        'Inline Fan Selection: Avoid cheap 12V axial booster fans. Use mixed-flow inline fans (e.g. AC Infinity Cloudline 4" or 6") capable of overcoming filter static pressure.',
        'Three-Stage Filtration: Pre-filter (G4 for dust) &gt; HEPA filter (H13 for sub-micron particulate) &gt; Deep-bed Activated Carbon (for VOC gas absorption).',
        'Ducting Best Practices: Use rigid metal or smooth semi-rigid ducting. Every 90-degree corrugated bend reduces airflow by approximately 15–20%.',
      ],
      tips: [
        'Never vent laser fumes into shared HVAC return vents or near open household windows.',
      ],
    },
  ];

  const filteredTutorials = tutorials.filter(t => {
    const matchesFilter = activeFilter === 'all' || t.category === activeFilter;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Laserhuis Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Laser & CNC Machining Guides & Tutorials
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real workshop techniques tested on production machines. Master 710W trim router feeds, LightBurn CAM, rotary tumblers, and fine-tolerance inlay design.
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
              { id: 'all', label: 'All Guides' },
              { id: 'cnc', label: 'CNC Routing' },
              { id: 'laser', label: 'Laser Cutting' },
              { id: 'software', label: 'CAM & Software' },
              { id: 'safety', label: 'Workshop Safety' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeFilter === f.id
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
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map(tut => (
            <div
              key={tut.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="uppercase font-mono text-[10px] tracking-wider text-orange-400 font-bold">
                    {tut.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>{tut.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {tut.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {tut.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-medium text-zinc-400">
                  {tut.difficulty}
                </span>

                <button
                  onClick={() => setSelectedTutorial(tut)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-orange-500 hover:text-zinc-950 text-zinc-200 font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CNC Calculator Integration Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-950/30 via-zinc-900 to-zinc-900 border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-orange-400" />
              <span>Ready to calibrate your tool database?</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Use our interactive Carveco & ArtCAM .tdb / .tbd editor to apply 710W trim router speeds and feeds directly to your CNC bits.
            </p>
          </div>
          <Link
            to="/cnc-calculator"
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs shadow-lg shadow-orange-500/20 transition-all shrink-0"
          >
            Open CNC Tool Calibrator
          </Link>
        </div>
      </section>

      {/* Tutorial Reader Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-orange-400">
                  {selectedTutorial.category} · {selectedTutorial.readTime}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedTutorial.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedTutorial(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed border-l-2 border-orange-500 pl-3 italic">
              {selectedTutorial.summary}
            </p>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                Step-by-Step Instructions
              </h4>
              <div className="space-y-3">
                {selectedTutorial.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 font-bold flex items-center justify-center shrink-0 border border-orange-500/20 text-[10px]">
                      {i + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedTutorial.tips.length > 0 && (
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <h4 className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Workshop Pro Tips</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400">
                  {selectedTutorial.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedTutorial(null)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold cursor-pointer"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
