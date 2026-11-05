import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Zap, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  BookOpen, 
  Flame, 
  Sliders, 
  FileCode, 
  Compass, 
  Info,
  ChevronRight,
  AlertTriangle,
  RotateCw,
  Eye
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MATERIAL_SETTINGS } from '../data/materialSettings';
import { REVIEWS } from '../data/reviews';

export default function FiberLaserHub() {
  const { language } = useLanguage();
  const isNl = language === 'nl';
  const isFr = language === 'fr';
  const location = useLocation();

  // Active section or tab derived from URL subpath or local state
  const subPath = location.pathname.split('/fiber-laser/')[1] || 'overview';
  const [activeSection, setActiveSection] = useState(subPath);

  useEffect(() => {
    if (subPath) {
      setActiveSection(subPath);
    }
  }, [subPath]);

  // Filter fiber settings from database
  const fiberMaterials = MATERIAL_SETTINGS.filter(m => m.laserType === 'fiber');
  const fiberReviews = REVIEWS.filter(r => r.laserType === 'fiber');

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Complete Fiber Laser Engraving Guide: MOPA Settings, Metal Speed & Power Parameters",
    "description": "Technical reference guide for 1064nm Fiber and MOPA galvo lasers. Speed, power, frequency, and pulse-width parameters for stainless steel, brass, titanium, and aluminum.",
    "author": {
      "@type": "Organization",
      "name": "Laserhuis Technical Lab",
      "url": "https://laserhuis.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Laserhuis",
      "url": "https://laserhuis.com",
      "logo": "https://laserhuis.com/logo.png"
    },
    "mainEntityOfPage": "https://laserhuis.com/fiber-laser",
    "about": [
      { "@type": "Thing", "name": "Fiber Laser Engraving" },
      { "@type": "Thing", "name": "MOPA Laser Color Marking" },
      { "@type": "Thing", "name": "Galvo Laser Scanner" },
      { "@type": "Thing", "name": "Metal Marking Parameters" }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://laserhuis.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fiber Laser Hub",
        "item": "https://laserhuis.com/fiber-laser"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-950/40 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-slate-400 mb-6 space-x-2 font-mono">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-medium">Fiber Laser Hub</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide font-mono">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>1064nm Fiber & MOPA Galvo Technical Reference</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {isNl ? (
                  <>
                    Fiber Laser Gids: <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                      Machines, MOPA Instellingen & Metaalbewerking
                    </span>
                  </>
                ) : (
                  <>
                    Fiber Laser Engraving Guide: <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                      Machines, MOPA Parameters & Metal Settings
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {isNl
                  ? 'Het complete naslagwerk voor 1064nm Fiber- en MOPA galvo lasergraveermachines. Ontdek geteste snelheden, vermogens, frequenties (kHz) en pulsbreedtes (ns) voor roestvrij staal, aluminium, messing, koper en titanium.'
                  : 'The authoritative technical reference for 1064nm Fiber and MOPA galvo laser engravers. Master speed, power, frequency (kHz), and pulse-width (ns) parameters for stainless steel, brass, titanium, and aluminum.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#settings-matrix"
                  className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-950 transition-all flex items-center space-x-2"
                >
                  <Sliders className="w-4 h-4" />
                  <span>{isNl ? 'Bekijk Metaal Parameters' : 'Explore Metal Parameters'}</span>
                </a>
                <Link
                  to="/compare"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs transition-all flex items-center space-x-2"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>{isNl ? 'Vergelijk Fiber Machines' : 'Compare Fiber Lasers'}</span>
                </Link>
              </div>
            </div>

            {/* Quick Spec Highlights Widget */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{isNl ? 'Fiber Core Specificaties' : 'Fiber Core Specifications'}</span>
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Wavelength:</span>
                  <span className="text-cyan-300 font-mono font-bold">1064 nm Ytterbium</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Scanner Engine:</span>
                  <span className="text-slate-200 font-semibold">High-Speed Galvo Mirrors</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Marking Speeds:</span>
                  <span className="text-emerald-400 font-mono font-bold">Up to 15,000 mm/s</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Pulse Control (MOPA):</span>
                  <span className="text-amber-300 font-mono font-bold">1ns – 500ns</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Diode Source Lifespan:</span>
                  <span className="text-slate-200 font-mono">100,000+ Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Topic Navigation Bar */}
          <div className="mt-10 pt-6 border-t border-slate-800 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'mopa', label: 'MOPA vs Q-Switched', icon: Zap },
                { id: 'settings', label: 'Settings Matrix', icon: Sliders },
                { id: 'color-marking', label: 'Color Marking', icon: Sparkles },
                { id: 'deep-engraving', label: 'Deep Engraving', icon: Flame },
                { id: 'lenses', label: 'Lens Selection', icon: Compass },
                { id: 'lightburn', label: 'LightBurn / EZCAD', icon: FileCode },
                { id: 'safety', label: 'Safety & Eyewear', icon: ShieldCheck },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeSection === tab.id
                      ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-md'
                      : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">

        {/* Section: Overview & Technology */}
        <section id="overview" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl font-black text-white flex items-center space-x-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span>How 1064nm Fiber Galvo Lasers Work</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fiber lasers utilize optical fiber cables doped with rare-earth elements (typically Ytterbium) to amplify light at a 1064nm wavelength. Unlike gantry-driven diode or CO2 lasers that move a heavy laser head on X/Y belts, fiber galvo systems direct the laser beam using ultra-light, high-speed motorized mirrors inside a galvanometer scanning head.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold block mb-1">Ultra-Fast Galvo</span>
                <p className="text-xs text-slate-300">Moves mirrors up to 15,000 mm/sec for lightning-fast serial marking and vector hatching.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">1064nm Wavelength</span>
                <p className="text-xs text-slate-300">Readily absorbed by raw metals, steel, titanium, brass, silver, gold, and dark opaque polymers.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold block mb-1">Zero Alignment</span>
                <p className="text-xs text-slate-300">Solid-state fiber optics eliminate mirror alignment wheels and delicate glass tubes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: MOPA vs Q-Switched Comparison */}
        <section id="mopa" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Technology Comparison</span>
            <h2 className="text-2xl font-black text-white mt-1">MOPA (Master Oscillator Power Amplifier) vs Q-Switched Fiber</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-cyan-400">MOPA Fiber Laser</h3>
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded text-[10px] font-mono">1ns - 500ns Variable Pulse</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                MOPA lasers allow independent tuning of pulse frequency AND pulse duration (width). This granular control allows delicate thermal management, enabling vibrant color marking on stainless steel and titanium, crisp black annealing without surface damage, and clean dark marking on delicate plastics.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Vibrant color spectrum on stainless steel & titanium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>High contrast black marking on anodized aluminum</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Minimal heat-affected zone (HAZ) on thin sheet metal</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-slate-200">Q-Switched Fiber Laser</h3>
                <span className="px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-[10px] font-mono">Fixed ~100ns Pulse</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Q-switched fiber sources (Raycus, Max Photonics, IPG) fire pulses at a fixed pulse duration (~90-120ns). You can adjust frequency (typically 20kHz - 80kHz) and power, making them ideal for high-speed deep engraving, metal serial numbers, coin minting, and heavy metal removal.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Excellent deep relief carving and metal removal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Highly cost-effective entry point for metal marking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Robust, reliable for industrial serial numbers & barcodes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Material Settings Matrix */}
        <section id="settings-matrix" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Tested Parameters</span>
              <h2 className="text-2xl font-black text-white">Fiber Laser Metal Speed & Power Chart</h2>
            </div>
            <Link
              to="/materials"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <span>Full Materials Database</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-slate-950 font-mono">
                  <th className="py-3 px-3 font-bold uppercase">Material & Process</th>
                  <th className="py-3 px-3 font-bold uppercase">Recommended Speed</th>
                  <th className="py-3 px-3 font-bold uppercase">Power</th>
                  <th className="py-3 px-3 font-bold uppercase">Frequency / Pulse</th>
                  <th className="py-3 px-3 font-bold uppercase">Passes / Hatch</th>
                  <th className="py-3 px-3 font-bold uppercase">Key Pro Tip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {fiberMaterials.map(m => (
                  <tr key={m.id} className="hover:bg-slate-800/40">
                    <td className="py-3.5 px-3 font-bold text-white">{m.material}</td>
                    <td className="py-3.5 px-3 font-mono text-cyan-300">{m.speed}</td>
                    <td className="py-3.5 px-3 font-mono text-amber-400">{m.power}</td>
                    <td className="py-3.5 px-3 font-mono text-emerald-400">{m.frequencyOrInterval}</td>
                    <td className="py-3.5 px-3 font-mono">{m.passes} pass(es)</td>
                    <td className="py-3.5 px-3 text-slate-400">{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Lens Selection Guide */}
        <section id="lenses" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Optics & Field Sizes</span>
            <h2 className="text-2xl font-black text-white mt-1">F-Theta Field Lens Guide</h2>
            <p className="text-xs text-slate-400 mt-1">Choosing the right focal length determines your working area, energy density, and depth of field.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-white text-sm">F160 Lens (110x110 mm)</span>
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-mono">Highest Power Density</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Small focal spot size (~20μm). Maximum optical power concentration. Ideal for deep engraving, coin relief minting, cutting thin metal shim, and fine jewelry details.
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-900">
                <p>Working Distance: ~180 mm</p>
                <p>Spot Size: ~0.02 mm</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-white text-sm">F254 Lens (175x175 mm)</span>
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-[10px] font-mono">Best All-Rounder</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Balanced work area and energy density. Perfect for firearm parts, tumblers, nameplates, and larger general workshop marking.
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-900">
                <p>Working Distance: ~290 mm</p>
                <p>Spot Size: ~0.035 mm</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-white text-sm">F430 Lens (300x300 mm)</span>
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px] font-mono">Large Format</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Maximum work envelope. Lower power density per square millimeter; recommended primarily for 50W, 60W or 100W fiber sources marking surface graphics.
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-900">
                <p>Working Distance: ~480 mm</p>
                <p>Spot Size: ~0.06 mm</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Software & Galvo Controls */}
        <section id="lightburn" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Control Systems</span>
              <h2 className="text-2xl font-black text-white">LightBurn Galvo vs EZCAD Configuration</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern fiber galvo engravers run either EZCAD (via JCZ controller boards) or native LightBurn Galvo license. LightBurn Galvo provides intuitive 3D hatch controls, cross-hatching, variable frequency pass stacks, and seamless SVG vector import.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300"><strong className="text-white">Corfile / MarkCfg Setup:</strong> Always back up your galvo calibration file (`markcfg7` or `corfile`) before changing lenses.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300"><strong className="text-white">Hatch Angle Rotation:</strong> Rotate hatch angles by 15° to 45° between passes to prevent visible directional striping during deep metal carving.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>Recommended LightBurn Galvo Hatch Protocol</span>
              </h3>
              <div className="space-y-2 text-xs font-mono bg-slate-900 p-4 rounded-lg border border-slate-800 text-slate-300">
                <p className="text-cyan-400">// Deep Relief Carving Preset</p>
                <p>Line Interval: 0.030 mm (846 DPI)</p>
                <p>Hatch 1: Angle 0° (Unidirectional)</p>
                <p>Hatch 2: Angle 90° (Cross-Hatch)</p>
                <p>Loop Count: 10 - 25 Passes</p>
                <p>Cleaning Pass: 3000 mm/s @ 20% Power (Frequency 80kHz)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Safety & Eyewear Protocol */}
        <section id="safety" className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Laser Safety & Fume Extraction Standard</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                1064nm Fiber laser radiation is invisible to the human eye and easily penetrates cornea tissue to cause permanent retinal damage. Always wear OD6+ certified laser safety glasses specifically rated for 1064nm wavelength when operating open galvo towers.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OD6+ @ 1064nm Eye Protection Mandatory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>HEPA + Active Carbon Metal Dust Fume Extraction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Featured Fiber Machines in Database */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Tested Models</span>
              <h2 className="text-2xl font-black text-white">Reviewed Fiber & Hybrid Galvo Lasers</h2>
            </div>
            <Link to="/reviews" className="text-xs font-bold text-cyan-400 hover:underline">View All Reviews →</Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {fiberReviews.map(r => (
              <div key={r.id} className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">{r.brand}</span>
                  <h3 className="font-extrabold text-white text-base mt-1 mb-2">{r.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4">{r.summary}</p>
                </div>
                <Link
                  to={r.slug ? `/reviews/${r.slug}` : `/reviews?review=${r.id}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Read Full Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
