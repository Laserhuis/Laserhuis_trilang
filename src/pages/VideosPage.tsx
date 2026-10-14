import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Play,
  Clock,
  Calculator,
  Layers,
  ArrowRight,
  X,
} from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  category: 'cnc' | 'laser' | 'maintenance';
  summary: string;
  keyPoints: string[];
}

export function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'v1',
      title: '710W Makita Spindle Feeds & Speeds Deep Dive on SainSmart CNC',
      duration: '14:22',
      category: 'cnc',
      summary: 'Watch test cuts at Dial 1 through Dial 6 on Baltic birch and aluminum plate. Learn how chip load and sound pitch tell you if your bit is dulling or overheating.',
      keyPoints: [
        'RPM measurements using laser tachometer on Makita RT0700C',
        'How 18,000 RPM at 1,800 mm/min yields clean, cool wood chips',
        'Demonstration of the Laserhuis Bit Studio tool database calibrator',
      ],
    },
    {
      id: 'v2',
      title: 'Kintix Diode + Fiber Dual Laser Unboxing, Alignment & First Light',
      duration: '18:45',
      category: 'laser',
      summary: 'Complete setup walkthrough: assembling the gantry, connecting the quiet air assist compressor, LightBurn setup over USB, and 24-color stainless steel etching test.',
      keyPoints: [
        'Focal gauge calibration for 20W diode and 1064nm infrared module',
        'Air assist pressure adjustment from 10 PSI to 30 PSI',
        'Vector engraving vs bitmap dithering benchmarks',
      ],
    },
    {
      id: 'v3',
      title: 'SainSmart Genmitsu Bed Extension Kit: 45-Minute Installation & Testing',
      duration: '12:05',
      category: 'cnc',
      summary: 'Step-by-step installation of longer aluminum extrusions and T8 lead screws. Calibration of GRBL travel parameters and large sign machining run.',
      keyPoints: [
        'Aligning dual lead screws to prevent binding on long Y-axis travels',
        'Tensioning anti-backlash spring nuts',
        'Milling a 380mm wide topographic terrain map',
      ],
    },
    {
      id: 'v4',
      title: 'Laser Mirror & Lens Maintenance: How to Prevent Burn-In',
      duration: '09:30',
      category: 'maintenance',
      summary: 'Crucial preventive maintenance for diode and CO2 optics. Using optical lens tissue and 99% IPA to remove smoke deposits before they cause thermal cracking.',
      keyPoints: [
        'Inspection under 10x jeweler loupe',
        'Safe cleaning motion (drop and drag method)',
        'Checking air assist brass cone alignment',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Video className="w-3.5 h-3.5" />
              <span>Workshop Video Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Video Tutorials, Benchmarks & Spindle Dials
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Visual walkthroughs demonstrating real cutting sounds, chip formation, optical alignment, and tool database exports.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map(v => (
            <div
              key={v.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group"
            >
              <div>
                {/* Video Card Player Graphic */}
                <div
                  onClick={() => setSelectedVideo(v)}
                  className="h-56 bg-zinc-950 relative overflow-hidden flex items-center justify-center cursor-pointer group-hover:brightness-110 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                  <div className="w-14 h-14 rounded-full bg-orange-500 text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="uppercase font-mono text-[10px] bg-zinc-900/90 text-orange-400 font-bold px-2 py-0.5 rounded border border-zinc-700">
                      {v.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-700">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      <span>{v.duration}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => setSelectedVideo(v)}
                    className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {v.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {v.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-800/80 mt-4">
                <button
                  onClick={() => setSelectedVideo(v)}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View Key Takeaways & Timestamps</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-orange-400">
                  Video Workshop · {selectedVideo.duration}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {selectedVideo.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mock Player Screen */}
            <div className="h-48 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-2">
              <Play className="w-10 h-10 text-orange-500 fill-orange-500/30" />
              <p className="text-xs text-zinc-300 font-semibold">
                Workshop Demonstration Stream
              </p>
              <p className="text-[11px] text-zinc-500">
                Resolution: 4K 60fps high-bitrate macro cutting footage
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Key Technical Takeaways
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {selectedVideo.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/cnc-calculator"
                className="text-xs font-bold text-orange-400 hover:underline flex items-center gap-1.5"
              >
                <Calculator className="w-4 h-4" />
                <span>Open CNC Bit Studio Tool</span>
              </Link>
              <button
                onClick={() => setSelectedVideo(null)}
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
