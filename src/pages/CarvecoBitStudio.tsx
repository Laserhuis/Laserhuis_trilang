import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Sparkles, ChevronRight, Cpu, ArrowLeft, Layers, Database } from "lucide-react";
import { CarvecoToolManager } from "@/components/CarvecoToolManager";
import { useLanguage } from "@/context/LanguageContext";

export default function CarvecoBitStudio() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-12 px-2 sm:px-4 lg:px-6 max-w-[1700px] mx-auto space-y-4">
      {/* Top Header & Breadcrumbs under SainSmart */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-6 backdrop-blur-md shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/sainsmart" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              SainSmart Hub
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-medium flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5" />
              Carveco Bit Studio
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Wrench className="w-6 h-6" />
            </span>
            Carveco CNC Bit Studio & Tool Database Manager
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
            Native Carveco / ArtCAM binary tool database (.tdb / .tbd) parser & editor with VFD spindle speed tuner, 
            chipload feeds & speeds calculator, unit conversion, and preloaded brand presets for Whiteside, Amana & Genmitsu.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
          <Link
            to="/sainsmart"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to SainSmart Hub
          </Link>
        </div>
      </div>

      {/* Main Full Native Carveco CNC Workbench */}
      <div className="w-full">
        <CarvecoToolManager />
      </div>
    </div>
  );
}
