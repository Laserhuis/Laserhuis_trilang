import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Wrench, Sparkles, Maximize2, Minimize2, ArrowLeft } from "lucide-react";
import CncCalculatorApp from "@/cnc-calculator/App";

export default function SainsmartCncCalculator() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.title = "SainSmart Genmitsu CNC Tool Database Calibrator (.tdb / .tbd) — Laserhuis";
  }, []);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 ${isFullScreen ? "fixed inset-0 z-50 pt-0" : "pt-16"}`}>
      {/* Top Breadcrumbs & Context Bar */}
      {!isFullScreen ? (
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-6 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400 truncate">
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <Link to="/sainsmart" className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-medium text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>SainSmart</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="text-cyan-400 font-semibold truncate">
                CNC Tool Database (.tdb / .tbd) Studio
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-2">
              <button
                onClick={() => setIsFullScreen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                title="Expand to Fullscreen Studio Mode"
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Fullscreen Studio</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <button
              onClick={() => setIsFullScreen(false)}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Normal View</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold">SainSmart Genmitsu CNC Studio</span>
          </div>

          <button
            onClick={() => setIsFullScreen(false)}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors cursor-pointer"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Exit Fullscreen</span>
          </button>
        </div>
      )}

      {/* Embedded CNC Calculator Studio App */}
      <div className={`w-full ${isFullScreen ? "h-[calc(100vh-2.5rem)]" : "h-[calc(100vh-6.5rem)]"} overflow-hidden`}>
        <CncCalculatorApp />
      </div>
    </div>
  );
}
