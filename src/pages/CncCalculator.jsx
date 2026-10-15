import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Wrench } from "lucide-react";
import CncCalculatorApp from "@/cnc-calculator/CncCalculatorApp";

export default function CncCalculator() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 pt-20 pb-12 px-2 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1700px] mx-auto mb-4 flex flex-wrap items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3">
          <Link
            to="/sainsmart"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" /> Back to SainSmart Hub
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" /> Laserhuis - Genmitsu Bit Studio & Feeds Calculator
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1700px] mx-auto bg-slate-950 border border-slate-800/80 rounded-2xl p-1 sm:p-3 shadow-2xl shadow-black/80 overflow-x-auto">
        <CncCalculatorApp />
      </div>
    </div>
  );
}
