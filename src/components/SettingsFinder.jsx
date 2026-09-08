import { useState, useMemo, useEffect } from "react";
import { LASER_META } from "@/lib/constants";
import { LASER_WATTS } from "@/data/materialSettings";
import { scaleSetting } from "@/lib/settingsScaler";
import { FavouriteButton } from "@/components/FavouriteButton";
import { Terminal, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SettingsFinder = ({ rows }) => {
  const { t, translateLaserType } = useLanguage();
  const [laserType, setLaserType] = useState("diode");
  const [materialId, setMaterialId] = useState("");
  const [watt, setWatt] = useState(null);

  const materialsForLaser = useMemo(
    () => rows.filter((r) => r.laserType === laserType),
    [rows, laserType]
  );

  const base = rows.find((r) => r.id === materialId && r.laserType === laserType);

  // Default the wattage to the material's baseline when a material is chosen.
  useEffect(() => {
    if (base) setWatt(base.baseWatt);
  }, [materialId]); // eslint-disable-line react-hooks/exhaustive-deps

  const selected = base && watt ? scaleSetting(base, watt) : base;

  const pickLaser = (tType) => {
    setLaserType(tType);
    setMaterialId("");
    setWatt(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8" data-testid="settings-finder">
      <div className="flex items-center gap-2 mb-6">
        <Terminal className="w-5 h-5 text-cyan-400" />
        <h3 className="font-heading font-bold text-xl text-white tracking-tight">
          {t("finder.title", "Settings Finder")}
        </h3>
      </div>

      <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-3">
        {t("finder.step_laser", "1 — Laser type")}
      </p>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        {Object.entries(LASER_META).map(([key, meta]) => {
          const Icon = meta.icon;
          const active = laserType === key;
          return (
            <button
              key={key}
              data-testid={`finder-laser-${key}`}
              onClick={() => pickLaser(key)}
              className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all ${
                active
                  ? `${meta.bg} ${meta.border} ${meta.color} ring-1 ${meta.ring}`
                  : "border-slate-800 text-slate-400 hover:border-slate-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{translateLaserType(key)}</span>
            </button>
          );
        })}
      </div>

      <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-3">
        {t("finder.step_material", "2 — Material / operation")}
      </p>
      <select
        data-testid="finder-material-select"
        value={materialId}
        onChange={(e) => setMaterialId(e.target.value)}
        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 mb-6"
      >
        <option value="">{t("finder.select_placeholder", "Select a material…")}</option>
        {materialsForLaser.map((m) => (
          <option key={m.id} value={m.id}>{m.material}</option>
        ))}
      </select>

      <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-3">
        {t("finder.step_power", "3 — Machine power")}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {(LASER_WATTS[laserType] || []).map((w) => (
          <button
            key={w}
            data-testid={`finder-watt-${w}`}
            onClick={() => setWatt(w)}
            disabled={!base}
            className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all disabled:opacity-40 ${
              watt === w && base
                ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.25)]"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"
            }`}
          >
            {w}W
          </button>
        ))}
      </div>

      {selected ? (
        <div data-testid="finder-result" className="bg-[#020617] border border-cyan-900/60 rounded-xl p-5 font-mono shadow-inner">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs min-w-0">
              <ChevronRight className="w-4 h-4 shrink-0" />
              <span className="truncate">{selected.material}</span>
            </div>
            <FavouriteButton type="material" id={selected.id} size="sm" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Stat label={t("finder.speed", "Speed")} value={selected.speed} />
            <Stat label={t("finder.power", "Power")} value={selected.power} />
            <Stat label={t("finder.passes", "Passes")} value={selected.passes} />
            <Stat label={t("finder.freq_interval", "Freq / Interval")} value={selected.frequencyOrInterval} />
            <Stat label={t("finder.air_assist", "Air Assist")} value={selected.airAssist} />
            <Stat label={t("finder.machine", "Machine")} value={selected.machineClass} />
          </div>
          {selected.isEstimate && (
            <p data-testid="finder-estimate-note" className="mt-4 flex items-start gap-1.5 text-[11px] text-amber-300/90">
              <Info className="w-3 h-3 mt-0.5 shrink-0" />
              {t("finder.estimate_note", `Estimated for ${selected.userWatt}W (baseline tuned at ${selected.scaledFrom}W). Always confirm with a scrap test.`)
                .replace("{watt}", selected.userWatt)
                .replace("{baseline}", selected.scaledFrom)}
            </p>
          )}
          <p className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
            <span className="text-cyan-500"># </span>{selected.notes}
          </p>
        </div>
      ) : (
        <div className="bg-[#020617] border border-slate-800 rounded-xl p-8 text-center text-slate-600 text-sm font-mono">
          {materialsForLaser.length === 0
            ? t("finder.empty_laser", "No settings recorded for this laser type yet.")
            : t("finder.pick_prompt", "Pick a material to reveal recommended settings.")}
        </div>
      )}
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider text-slate-500">{label}</p>
    <p className="text-cyan-300 text-sm mt-0.5 break-words">{value}</p>
  </div>
);
