import { SlidersHorizontal, RotateCcw } from "lucide-react";

export const FilterBar = ({ groups, values, onChange, onReset, resultCount }) => {
  const hasActive = Object.values(values).some((v) => v);
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5" data-testid="filter-bar">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
          <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
        </span>
        <div className="flex items-center gap-3">
          {typeof resultCount === "number" && (
            <span className="text-xs font-mono text-cyan-400" data-testid="filter-result-count">
              {resultCount} result{resultCount === 1 ? "" : "s"}
            </span>
          )}
          {hasActive && (
            <button
              onClick={onReset}
              data-testid="filter-reset"
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {groups.map((g) => (
          <div key={g.key}>
            <p className="text-[11px] text-slate-500 mb-2">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              <Pill
                active={!values[g.key]}
                onClick={() => onChange(g.key, "")}
                testId={`filter-${g.key}-all`}
              >
                All
              </Pill>
              {g.options.map((o) => (
                <Pill
                  key={o.value}
                  active={values[g.key] === o.value}
                  onClick={() => onChange(g.key, o.value)}
                  testId={`filter-${g.key}-${String(o.value).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  {o.label}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pill = ({ active, onClick, children, testId }) => (
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
