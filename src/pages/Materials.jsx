import { useState, useMemo } from "react";
import { Search, Layers } from "lucide-react";
import { MATERIAL_SETTINGS } from "@/data/materialSettings";
import { filterMaterials } from "@/lib/filters";
import { SettingsFinder } from "@/components/SettingsFinder";
import { AiAssistant } from "@/components/AiAssistant";
import { MaterialSettingsTable } from "@/components/MaterialSettingsTable";
import { LASER_META } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Materials() {
  const { t, translateLaserType } = useLanguage();
  const [search, setSearch] = useState("");
  const [laserType, setLaserType] = useState("");

  const rows = useMemo(
    () => filterMaterials(MATERIAL_SETTINGS, { search, laserType }),
    [search, laserType]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
          <Layers className="w-3.5 h-3.5" /> {t("materials.eyebrow", "Material settings")}
        </p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          {t("materials.title", "Settings library")}
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t("materials.subtitle", "Structured starting settings by laser type and substrate. Use the finder or ask the AI assistant, then browse the full matrix below.")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <SettingsFinder rows={MATERIAL_SETTINGS} />
        <AiAssistant />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            data-testid="materials-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("materials.search_placeholder", "Search materials or notes…")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterPill active={!laserType} onClick={() => setLaserType("")} testId="materials-filter-all">
            {t("materials.filter_all", "All")}
          </FilterPill>
          {Object.entries(LASER_META).map(([key]) => (
            <FilterPill key={key} active={laserType === key} onClick={() => setLaserType(key)} testId={`materials-filter-${key}`}>
              {translateLaserType(key)}
            </FilterPill>
          ))}
        </div>
      </div>

      <MaterialSettingsTable rows={rows} />
    </div>
  );
}

const FilterPill = ({ active, onClick, children, testId }) => (
  <button
    onClick={onClick}
    data-testid={testId}
    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
      active
        ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.25)]"
        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
    }`}
  >
    {children}
  </button>
);
