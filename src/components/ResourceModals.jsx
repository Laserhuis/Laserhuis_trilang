import { useState } from "react";
import { Modal } from "./Modal";
import { 
  Sparkles, 
  Keyboard, 
  ShieldAlert, 
  ExternalLink, 
  Copy, 
  Check, 
  AlertTriangle, 
  Zap, 
  Search,
  Eye,
  Flame,
  CheckCircle2,
  Sliders,
  Maximize2,
  DollarSign,
  Calculator,
  Disc,
  Ruler,
  Clock,
  Percent,
  Layers
} from "lucide-react";
import { toast } from "sonner";

// ----------------------------------------------------
// 1. DITHERING GUIDE MODAL
// ----------------------------------------------------
export function DitheringGuideModal({ onClose }) {
  const [selectedMaterial, setSelectedMaterial] = useState("slate");
  const [copiedSetting, setCopiedSetting] = useState(false);

  const MATERIAL_PRESETS = {
    slate: {
      name: "Natural Black Slate",
      dpi: 318,
      interval: "0.08 mm",
      algorithm: "Atkinson / Stucki",
      invert: "YES (Invert photo - white = burn)",
      contrast: "+15% High Contrast, Unsharp Mask 120%",
      notes: "Slate turns bright white when laser-etched. High contrast algorithms like Atkinson yield stunning 3D pop."
    },
    wood: {
      name: "Birch / Maple Hardwood",
      dpi: 254,
      interval: "0.10 mm",
      algorithm: "Jarvis, Judice & Ninke (JJN)",
      invert: "NO (Standard - black = burn)",
      contrast: "Balanced contrast, midtone boost +10%",
      notes: "Wood chars dark brown. JJN provides ultra-smooth tonal transitions without heavy burning."
    },
    acrylic: {
      name: "Black Cast Acrylic",
      dpi: 354,
      interval: "0.072 mm",
      algorithm: "Stucki / Dither 1-Bit",
      invert: "YES (White = frosted mark)",
      contrast: "High contrast, sharp edge enhancement",
      notes: "Acrylic frosts white when hit by laser energy. Ultra-fine DPI produces glass-smooth photographic output."
    },
    anodized: {
      name: "Black Anodized Aluminum",
      dpi: 400,
      interval: "0.063 mm",
      algorithm: "Atkinson or Floyd-Steinberg",
      invert: "YES (White = vaporized silver mark)",
      contrast: "Extreme contrast, sharp edges",
      notes: "Vaporizes black dye layer to reveal bright silver aluminum underneath. Zero bleeding."
    }
  };

  const preset = MATERIAL_PRESETS[selectedMaterial];

  const copyPreset = () => {
    const text = `Laserhuis Dithering Preset - ${preset.name}:\nDPI: ${preset.dpi} | Line Interval: ${preset.interval}\nAlgorithm: ${preset.algorithm}\nInvert: ${preset.invert}\nPrep Notes: ${preset.contrast}`;
    navigator.clipboard.writeText(text);
    setCopiedSetting(true);
    toast.success("Dithering settings copied to clipboard!");
    setTimeout(() => setCopiedSetting(false), 2000);
  };

  return (
    <Modal onClose={onClose} testId="dithering-guide-modal">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl text-white">
              Mastering Laser Image Dithering
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Complete guide to converting photos into precision 1-bit laser dots
            </p>
          </div>
        </div>

        {/* Intro Concept */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 leading-relaxed">
          Laser engravers are <strong>1-bit machines</strong> — the laser beam can only turn <span className="text-cyan-400 font-bold">ON</span> or <span className="text-slate-500 font-bold">OFF</span> at any pixel location. Dithering algorithms simulate continuous grayscales by strategically arranging black and white dot densities.
        </div>

        {/* Algorithm Breakdown */}
        <div>
          <h3 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" /> Popular Dithering Algorithms Compared
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-cyan-400 text-sm">Jarvis, Judice & Ninke (JJN)</span>
              <p className="text-slate-300">Spreads error across 12 neighboring pixels. Produces soft, smooth gradients with zero harsh grid lines. <strong>Best for photos on wood and leather.</strong></p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-cyan-400 text-sm">Stucki</span>
              <p className="text-slate-300">Similar to JJN but with sharper edge transitions and faster processing. Excellent for high-resolution portraits with fine hair details.</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-cyan-400 text-sm">Atkinson</span>
              <p className="text-slate-300">Preserves extreme contrast and clean white highlights by discarding 25% of quantization error. <strong>Number 1 choice for slate and anodized aluminum.</strong></p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-cyan-400 text-sm">Floyd-Steinberg</span>
              <p className="text-slate-300">Classic 4-pixel error diffusion algorithm. Great general-purpose algorithm for medium contrast materials and line graphics.</p>
            </div>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-white text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" /> Material Dithering Preset Lookup
            </h3>
            <div className="flex gap-1.5 flex-wrap">
              {Object.keys(MATERIAL_PRESETS).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedMaterial(key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                    selectedMaterial === key
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div>
              <p className="text-slate-400">Target Material:</p>
              <p className="text-white font-bold text-sm mb-2">{preset.name}</p>
              <p className="text-slate-400">Recommended DPI / Interval:</p>
              <p className="text-cyan-400 font-bold mb-2">{preset.dpi} DPI ({preset.interval})</p>
            </div>
            <div>
              <p className="text-slate-400">Recommended Algorithm:</p>
              <p className="text-emerald-400 font-bold mb-2">{preset.algorithm}</p>
              <p className="text-slate-400">Invert Image?</p>
              <p className="text-amber-400 font-bold">{preset.invert}</p>
            </div>
            <div className="sm:col-span-2 pt-2 border-t border-slate-800/80 text-slate-300 font-sans text-xs">
              <strong>Prep Advice:</strong> {preset.notes}
            </div>
          </div>

          <button
            onClick={copyPreset}
            className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copiedSetting ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            {copiedSetting ? "Preset Copied!" : "Copy Preset to Clipboard"}
          </button>
        </div>

        {/* Footer Link to Dithering Tool */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            Want to dither your photos right in your browser?
          </p>
          <a
            href="https://dithering.laserhuis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
          >
            Open Dithering Studio App <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
}

// ----------------------------------------------------
// 2. LIGHTBURN CHEAT SHEET MODAL
// ----------------------------------------------------
export function LightBurnCheatSheetModal({ onClose }) {
  const [filter, setFilter] = useState("");

  const SHORTCUTS = [
    { key: "Space + Left Click Drag", cat: "Workspace", desc: "Pan canvas view smoothly" },
    { key: "Shift + Frame Button", cat: "Hardware", desc: "Run rubber-band framing box at low power" },
    { key: "Alt + G", cat: "Vector", desc: "Group selected elements together" },
    { key: "Alt + U", cat: "Vector", desc: "Ungroup selected elements" },
    { key: "Ctrl + Shift + C", cat: "Alignment", desc: "Center selected shape to page origin (0,0)" },
    { key: "Ctrl + D", cat: "Vector", desc: "Duplicate selection in place" },
    { key: "S (Node Edit)", cat: "Node Edit", desc: "Smooth node into bezier curve point" },
    { key: "D (Node Edit)", cat: "Node Edit", desc: "Delete node under cursor" },
    { key: "I (Node Edit)", cat: "Node Edit", desc: "Insert new node along line segment" },
    { key: "C (Node Edit)", cat: "Node Edit", desc: "Cut path at cursor location" },
    { key: "B (Node Edit)", cat: "Node Edit", desc: "Break shape open at cursor point" },
    { key: "L (Node Edit)", cat: "Node Edit", desc: "Convert curve segment to straight line" },
    { key: "Tab", cat: "Node Edit", desc: "Cycle focus to next node point" },
    { key: "Ctrl + R", cat: "Grid", desc: "Open Grid Array / Matrix duplicator tool" },
    { key: "Ctrl + O", cat: "File", desc: "Import vector / bitmap asset" },
    { key: "Alt + R", cat: "Grid", desc: "Open Radial Circle Array tool" },
  ];

  const filteredShortcuts = SHORTCUTS.filter(
    (s) =>
      s.key.toLowerCase().includes(filter.toLowerCase()) ||
      s.desc.toLowerCase().includes(filter.toLowerCase()) ||
      s.cat.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Modal onClose={onClose} testId="lightburn-cheatsheet-modal">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Keyboard className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl text-white">
              LightBurn Software Quick Cheat Sheet
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Essential hotkeys, standard layer color conventions & optimization rules
            </p>
          </div>
        </div>

        {/* Standard Layer Color-Coding */}
        <div>
          <h3 className="font-heading font-bold text-white text-sm mb-3 flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-cyan-400" /> Industry Standard Cut Layer Conventions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl border-l-4 border-l-slate-400">
              <span className="text-slate-200 font-bold block">C00 (Black)</span>
              <span className="text-slate-400 text-[11px]">Rasters / Detailed Engraving</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl border-l-4 border-l-blue-500">
              <span className="text-blue-400 font-bold block">C01 (Blue)</span>
              <span className="text-slate-400 text-[11px]">Fast Score Lines / Marking</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl border-l-4 border-l-red-500">
              <span className="text-red-400 font-bold block">C02 (Red)</span>
              <span className="text-slate-400 text-[11px]">Outer Vector Cut Through</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl border-l-4 border-l-amber-500">
              <span className="text-amber-400 font-bold block">T1 / T2 (Orange)</span>
              <span className="text-slate-400 text-[11px]">Tool Alignment Guides (No-Print)</span>
            </div>
          </div>
        </div>

        {/* Search Bar for Hotkeys */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-bold text-white text-sm">
              Essential Keyboard Shortcuts
            </h3>
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search hotkey..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1 text-xs">
            {filteredShortcuts.length === 0 ? (
              <p className="text-slate-500 italic p-4 text-center">No matching shortcuts found.</p>
            ) : (
              filteredShortcuts.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-950 border border-slate-800/80 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-slate-900 border border-slate-700 text-cyan-300 rounded font-mono text-[11px] font-bold shadow-sm">
                      {s.key}
                    </kbd>
                    <span className="text-slate-300 font-medium">{s.desc}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-500">
                    {s.cat}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pro Optimization Rules */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
          <p className="font-bold text-cyan-400 uppercase font-mono tracking-wider">💡 Production Efficiency Tips:</p>
          <ul className="space-y-1 text-slate-300 list-disc list-inside">
            <li><strong>Always cut inner holes before outer outlines</strong>: Prevents parts from dropping through the bed grid and losing focus before inner cuts finish.</li>
            <li><strong>Enable Overscan (10% - 15%)</strong>: Prevents burnt dark edges on raster fills by letting the laser head accelerate/decelerate outside shape boundaries.</li>
            <li><strong>Line Interval Formula</strong>: Interval (mm) = 25.4 / DPI. (e.g. 300 DPI = 0.0847 mm interval).</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

// ----------------------------------------------------
// 3. LASER SAFETY BASICS MODAL
// ----------------------------------------------------
export function LaserSafetyModal({ onClose }) {
  return (
    <Modal onClose={onClose} testId="laser-safety-modal">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-orange-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl text-white">
              Laser Safety & Toxic Material Protocol
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Wavelength protection, optical density (OD), and strict material ban list
            </p>
          </div>
        </div>

        {/* Eye Protection & Wavelength Chart */}
        <div>
          <h3 className="font-heading font-bold text-white text-sm mb-3 flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" /> Wavelength & Optical Density (OD) Requirements
          </h3>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl space-y-1">
              <span className="font-bold text-blue-400 text-sm block">Diode (450 - 455nm)</span>
              <span className="text-slate-200 font-mono block">Target OD: OD6+</span>
              <p className="text-slate-400 text-[11px]">Intense visible blue light reflected off surfaces can cause instant permanent retinal burns. Never rely on cheap green plastic shields without OD6+ rating certification.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl space-y-1">
              <span className="font-bold text-cyan-400 text-sm block">Fiber / MOPA (1064nm)</span>
              <span className="text-slate-200 font-mono block">Target OD: OD6+</span>
              <p className="text-slate-400 text-[11px]">NIR (Near Infrared) light is 100% invisible to human eyes. Your blink reflex will not trigger! Always wear 1064nm NIR safety goggles during galvo operation.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl space-y-1">
              <span className="font-bold text-amber-400 text-sm block">CO2 Laser (10,600nm)</span>
              <span className="text-slate-200 font-mono block">Target OD: OD5+</span>
              <p className="text-slate-400 text-[11px]">Far infrared beam absorbed by water molecules in the cornea. Clear acrylic or polycarbonate enclosure safety windows absorb 10,600nm completely.</p>
            </div>
          </div>
        </div>

        {/* STRICT BAN LIST - TOXIC MATERIALS */}
        <div className="bg-red-950/30 border border-red-500/40 rounded-2xl p-5 space-y-3">
          <h3 className="font-heading font-bold text-red-400 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" /> 🛑 STRICT BANNED MATERIALS (DO NOT LASER)
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/90 border border-red-900/50 p-3 rounded-xl">
              <p className="font-bold text-red-300">PVC / Vinyl (Polyvinyl Chloride)</p>
              <p className="text-slate-300 text-[11px] mt-0.5">Emits lethal <strong>Hydrogen Chloride (HCl) gas</strong>. HCI destroys human lung tissue instantly and completely corrodes stainless steel rails and linear bearings within 24 hours.</p>
            </div>
            <div className="bg-slate-950/90 border border-red-900/50 p-3 rounded-xl">
              <p className="font-bold text-red-300">PTFE / Teflon</p>
              <p className="text-slate-300 text-[11px] mt-0.5">Releases corrosive <strong>Fluorine gas / Hydrogen Fluoride (HF)</strong> when vaporized, triggering severe acute lung injury.</p>
            </div>
            <div className="bg-slate-950/90 border border-red-900/50 p-3 rounded-xl">
              <p className="font-bold text-red-300">Polycarbonate / Lexan (CO2 Laser)</p>
              <p className="text-slate-300 text-[11px] mt-0.5">Absorbs CO2 light poorly, producing thick black soot, toxic fumes, and catches fire readily under sustained beam focus.</p>
            </div>
            <div className="bg-slate-950/90 border border-red-900/50 p-3 rounded-xl">
              <p className="font-bold text-red-300">ABS Plastic (Laser Cut)</p>
              <p className="text-slate-300 text-[11px] mt-0.5">Releases trace Cyanide gas, melts into sticky flammable tar, and leaves heavy soot deposit across laser mirrors.</p>
            </div>
          </div>
        </div>

        {/* Fire Safety & Exhaust Checklist */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
          <p className="font-bold text-orange-400 uppercase font-mono tracking-wider flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" /> Fire Prevention & Active Exhaust Rules:
          </p>
          <ul className="space-y-1.5 text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Never leave an operating laser unattended</strong>. Over 95% of catastrophic laser fires occur when operator steps away.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Keep a CO2 or Halotron Fire Extinguisher nearby</strong>. Avoid ABC dry chemical powder extinguishers near optical mirrors as powder ruins lenses.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Always use active Air Assist (15 - 35 PSI)</strong> when cutting combustible materials like acrylic, MDF, or plywood to snuff out flare-ups in the cut kerf.</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

// ----------------------------------------------------
// 4. LASER JOB COST & PRICING CALCULATOR MODAL
// ----------------------------------------------------
export function LaserCostCalculatorModal({ onClose }) {
  const [blankCost, setBlankCost] = useState(4.50);
  const [wasteFactor, setWasteFactor] = useState(10); // %
  const [runTimeMin, setRunTimeMin] = useState(20); // min
  const [wattageDraw, setWattageDraw] = useState(300); // W
  const [elecRate, setElecRate] = useState(0.18); // $/kWh
  const [tubeDepreciation, setTubeDepreciation] = useState(3.00); // $/hr machine wear
  const [laborTimeMin, setLaborTimeMin] = useState(15); // min design/prep
  const [hourlyRate, setHourlyRate] = useState(40.00); // $/hr
  const [markupPercent, setMarkupPercent] = useState(60); // %
  const [copied, setCopied] = useState(false);

  // Math
  const totalBlankWithWaste = blankCost * (1 + wasteFactor / 100);
  const electricityCost = (runTimeMin / 60) * (wattageDraw / 1000) * elecRate;
  const wearCost = (runTimeMin / 60) * tubeDepreciation;
  const laborCost = (laborTimeMin / 60) * hourlyRate;
  const baseCost = totalBlankWithWaste + electricityCost + wearCost + laborCost;
  
  const retailPrice = baseCost * (1 + markupPercent / 100);
  const wholesalePrice = baseCost * 1.5;
  const profitMargin = retailPrice - baseCost;

  const copyBreakdown = () => {
    const text = `LASERHUIS JOB QUOTE BREAKDOWN:
• Blank Material (+${wasteFactor}% waste): $${totalBlankWithWaste.toFixed(2)}
• Machine Time (${runTimeMin}m power+wear): $${(electricityCost + wearCost).toFixed(2)}
• Labor & Prep (${laborTimeMin}m @ $${hourlyRate}/hr): $${laborCost.toFixed(2)}
----------------------------------------
Base Production Cost: $${baseCost.toFixed(2)}
Suggested Wholesale Price: $${wholesalePrice.toFixed(2)}
SUGGESTED RETAIL PRICE (${markupPercent}% markup): $${retailPrice.toFixed(2)}
Estimated Profit per Item: $${profitMargin.toFixed(2)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Quote breakdown copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal onClose={onClose} testId="laser-cost-calculator-modal">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl text-white">
              Laser Job Cost & Pricing Calculator
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Calculate exact material, power, tube wear, labor & profitable retail pricing
            </p>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          {/* Material & Waste */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
            <h3 className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
              <Layers className="w-4 h-4" /> Material & Blank
            </h3>
            <div className="space-y-2">
              <div>
                <label className="text-slate-400 block mb-1">Raw Blank Unit Cost ($)</label>
                <input
                  type="number"
                  step="0.5"
                  value={blankCost}
                  onChange={(e) => setBlankCost(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Scrap / Waste Allowance (%)</label>
                <input
                  type="number"
                  value={wasteFactor}
                  onChange={(e) => setWasteFactor(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Machine Operation */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
            <h3 className="font-bold text-cyan-400 flex items-center gap-1.5 text-sm">
              <Clock className="w-4 h-4" /> Machine Runtime & Wear
            </h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-400 block mb-1">Runtime (min)</label>
                  <input
                    type="number"
                    value={runTimeMin}
                    onChange={(e) => setRunTimeMin(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Power (Watts)</label>
                  <input
                    type="number"
                    value={wattageDraw}
                    onChange={(e) => setWattageDraw(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Tube / Laser Wear Rate ($/runtime hour)</label>
                <input
                  type="number"
                  step="0.5"
                  value={tubeDepreciation}
                  onChange={(e) => setTubeDepreciation(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Labor & Setup */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
            <h3 className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <Calculator className="w-4 h-4" /> Design & Prep Labor
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-400 block mb-1">Setup Time (min)</label>
                <input
                  type="number"
                  value={laborTimeMin}
                  onChange={(e) => setLaborTimeMin(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Labor Rate ($/hr)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Target Markup */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
            <h3 className="font-bold text-rose-400 flex items-center gap-1.5 text-sm">
              <Percent className="w-4 h-4" /> Retail Markup
            </h3>
            <div>
              <label className="text-slate-400 block mb-1">Target Profit Markup (%)</label>
              <input
                type="number"
                value={markupPercent}
                onChange={(e) => setMarkupPercent(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-mono text-base font-bold text-emerald-400"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Standard maker benchmark: 50%-70% for custom gift items, 100%+ for premium awards.
              </p>
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Base Unit Cost</span>
              <span className="text-lg font-black font-mono text-slate-200">${baseCost.toFixed(2)}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Wholesale Price</span>
              <span className="text-lg font-black font-mono text-cyan-400">${wholesalePrice.toFixed(2)}</span>
            </div>
            <div className="bg-slate-900 border border-emerald-500/40 p-3 rounded-xl bg-emerald-950/20">
              <span className="text-[11px] text-emerald-400 block uppercase font-mono font-bold">Suggested Retail</span>
              <span className="text-2xl font-black font-mono text-emerald-400">${retailPrice.toFixed(2)}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">Profit / Piece</span>
              <span className="text-lg font-black font-mono text-amber-400">+${profitMargin.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={copyBreakdown}
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Quote Copied to Clipboard!" : "Copy Professional Price Breakdown Quote"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ----------------------------------------------------
// 5. ROTARY & KERF PRESS-FIT CALCULATOR MODAL
// ----------------------------------------------------
export function RotaryAndKerfModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("kerf"); // 'kerf' | 'rotary'

  // Kerf State
  const [laserType, setLaserType] = useState("co2"); // 'diode' | 'co2' | 'fiber'
  const [thickness, setThickness] = useState(3.0); // mm
  const [customKerf, setCustomKerf] = useState(0.12); // mm

  // Rotary State
  const [diameter, setDiameter] = useState(80); // mm
  const [stepsPerRev, setStepsPerRev] = useState(3200); // steps
  const [gearRatio, setGearRatio] = useState(1.0); // ratio

  // Kerf Math
  const beamKerf = customKerf;
  const slotWidthNeed = thickness - beamKerf;
  const tabWidthNeed = thickness + beamKerf;
  const inwardOffset = beamKerf / 2;

  // Rotary Math
  const circumference = Math.PI * diameter; // mm
  const mmPerRotation = circumference * gearRatio;
  const stepsPerMM = stepsPerRev / mmPerRotation;

  return (
    <Modal onClose={onClose} testId="rotary-kerf-modal">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-black text-2xl text-white">
              Kerf Joint & Rotary Setup Calculator
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Precision beam offset compensation & cylindrical rotary pulse math
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("kerf")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === "kerf"
                ? "bg-cyan-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Ruler className="w-4 h-4" /> Press-Fit Kerf Compensation
          </button>
          <button
            onClick={() => setActiveTab("rotary")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === "rotary"
                ? "bg-cyan-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Disc className="w-4 h-4" /> LightBurn Rotary Cylinder Calculator
          </button>
        </div>

        {activeTab === "kerf" ? (
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-xs space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Laser Source Beam Profile</label>
                  <select
                    value={laserType}
                    onChange={(e) => {
                      const t = e.target.value;
                      setLaserType(t);
                      if (t === "diode") setCustomKerf(0.08);
                      else if (t === "co2") setCustomKerf(0.14);
                      else if (t === "fiber") setCustomKerf(0.03);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono"
                  >
                    <option value="diode">Blue Diode (0.08 mm spot)</option>
                    <option value="co2">CO2 2.0" Lens (0.14 mm spot)</option>
                    <option value="fiber">Galvo Fiber (0.03 mm spot)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Material Nominal Thickness (mm)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={thickness}
                    onChange={(e) => setThickness(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Measured Kerf Width (mm)</label>
                <input
                  type="number"
                  step="0.01"
                  value={customKerf}
                  onChange={(e) => setCustomKerf(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-cyan-400 font-mono font-bold"
                />
              </div>
            </div>

            <div className="bg-slate-950 border border-cyan-500/40 p-5 rounded-2xl space-y-3 font-mono text-xs">
              <h3 className="font-bold text-cyan-400 text-sm">🎯 LightBurn Vector Kerf Adjustment:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Outward Offset (For Male Tabs):</span>
                  <span className="text-lg font-bold text-emerald-400">+{inwardOffset.toFixed(3)} mm</span>
                  <p className="text-[10px] text-slate-500 mt-1">Expands tab outline so laser cuts right along outer kerf line.</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Inward Offset (For Female Slots):</span>
                  <span className="text-lg font-bold text-amber-400">-{inwardOffset.toFixed(3)} mm</span>
                  <p className="text-[10px] text-slate-500 mt-1">Shrinks slot boundary to produce a zero-play tight click fit.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-xs space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">Cylinder Diameter (mm)</label>
                  <input
                    type="number"
                    step="1"
                    value={diameter}
                    onChange={(e) => setDiameter(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Motor Steps per Rev (Default 3200)</label>
                  <input
                    type="number"
                    value={stepsPerRev}
                    onChange={(e) => setStepsPerRev(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-cyan-500/40 p-5 rounded-2xl space-y-3 font-mono text-xs">
              <h3 className="font-bold text-cyan-400 text-sm">🔄 LightBurn Rotary Setup Values:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Object Circumference / Perimeter:</span>
                  <span className="text-lg font-bold text-cyan-300">{circumference.toFixed(2)} mm</span>
                  <span className="text-[10px] text-slate-500 block">({(circumference / 25.4).toFixed(2)} inches)</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Calculated Steps per mm:</span>
                  <span className="text-lg font-bold text-emerald-400">{stepsPerMM.toFixed(3)} steps/mm</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

