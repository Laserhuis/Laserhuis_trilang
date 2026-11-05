import { LASER_META } from "@/lib/constants";
import { Wind, Ban, ShieldAlert } from "lucide-react";

const Air = ({ value }) => {
  const off = /^off/i.test(value);
  return (
    <span className={`inline-flex items-center gap-1 font-mono text-xs ${off ? "text-slate-500" : "text-cyan-300"}`}>
      {off ? <Ban className="w-3 h-3" /> : <Wind className="w-3 h-3" />}
      {value}
    </span>
  );
};

const ProvenanceBadge = ({ type }) => {
  switch (type) {
    case "LASERHUIS_TESTED":
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Lab Tested</span>;
    case "MANUFACTURER_REFERENCE":
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">Mfg Spec</span>;
    case "COMMUNITY_CONTRIBUTED":
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">Community</span>;
    default:
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700">Starting Point</span>;
  }
};

export const MaterialSettingsTable = ({ rows }) => {
  if (!rows || rows.length === 0) {
    return (
      <div data-testid="materials-empty" className="text-center py-16 text-slate-500">
        No settings match your filters.
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
        <table className="w-full text-sm" data-testid="materials-table">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-[0.15em] text-slate-500 font-mono border-b border-slate-800 bg-slate-950/50">
              <th className="px-4 py-3 min-w-[220px]">Material / Operation</th>
              <th className="px-4 py-3">Provenance</th>
              <th className="px-4 py-3">Laser</th>
              <th className="px-4 py-3">Speed</th>
              <th className="px-4 py-3">Power</th>
              <th className="px-4 py-3">Passes</th>
              <th className="px-4 py-3 min-w-[130px]">Freq / Interval</th>
              <th className="px-4 py-3">Air Assist</th>
              <th className="px-4 py-3 min-w-[240px]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const meta = LASER_META[r.laserType];
              return (
                <tr
                  key={r.id}
                  data-testid={`material-row-${r.id}`}
                  className="border-b border-slate-800/70 hover:bg-cyan-500/[0.04] transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="text-slate-100 font-medium">{r.material}</span>
                    <span className="block text-[11px] text-slate-500 font-mono mt-0.5">{r.machineClass}</span>
                  </td>
                  <td className="px-4 py-3"><ProvenanceBadge type={r.provenance} /></td>
                  <td className="px-4 py-3">
                    <span className={`font-mono text-xs ${meta?.color}`}>{meta?.label}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-cyan-300">{r.speed}</td>
                  <td className="px-4 py-3 font-mono text-cyan-300">{r.power}</td>
                  <td className="px-4 py-3 font-mono text-slate-300">{r.passes}</td>
                  <td className="px-4 py-3 font-mono text-slate-300">{r.frequencyOrInterval}</td>
                  <td className="px-4 py-3"><Air value={r.airAssist} /></td>
                  <td className="px-4 py-3 text-slate-400 text-xs leading-relaxed">{r.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-amber-300/90 font-mono bg-amber-950/30 border border-amber-900/50 rounded-xl p-3.5 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
        <span>Material parameters are reference starting points. Always run test matrices on scrap material before production runs.</span>
      </div>
    </div>
  );
};
