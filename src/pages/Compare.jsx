import { useState, useMemo } from "react";
import { GitCompare, Star, X } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { LASER_META } from "@/lib/constants";
import { FavouriteButton } from "@/components/FavouriteButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Compare() {
  const { t, translateLaserType } = useLanguage();
  const [aId, setAId] = useState(REVIEWS[0].id);
  const [bId, setBId] = useState(REVIEWS[6].id);

  const a = REVIEWS.find((r) => r.id === aId);
  const b = REVIEWS.find((r) => r.id === bId);

  const specRows = useMemo(() => [
    { key: "brand", label: t("reviews.filter_brand", "Brand") },
    { key: "category", label: t("tutorials.filter_project_type", "Category") },
    { key: "laserType", label: t("tutorials.filter_laser", "Laser type"), render: (v) => translateLaserType(v) },
    { key: "wattage", label: "Optical power" },
    { key: "spotSize", label: "Spot size" },
    { key: "workArea", label: "Work area" },
    { key: "lineIntervalMin", label: "Min line interval" },
    { key: "controllerType", label: "Controller" },
    { key: "compatibility", label: "Software", render: (v) => (Array.isArray(v) ? v.join(", ") : v) },
    { key: "priceRange", label: "Price" },
    { key: "rating", label: "Rating", render: (v) => `${v.toFixed(1)} / 5` },
  ], [t, translateLaserType]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
          <GitCompare className="w-3.5 h-3.5" /> {t("compare.eyebrow", "Compare machines")}
        </p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          {t("compare.title", "Compare")}
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t("compare.subtitle", "Pick two engravers to see their specs side by side and decide which fits your workflow.")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-2">
        <MachinePicker value={aId} onChange={setAId} label={t("compare.machine_a", "Machine A")} testId="compare-select-a" />
        <MachinePicker value={bId} onChange={setBId} label={t("compare.machine_b", "Machine B")} testId="compare-select-b" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6">
        <MachineHead review={a} />
        <MachineHead review={b} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900" data-testid="compare-table">
        {specRows.map((row, i) => {
          const av = row.render ? row.render(a[row.key]) : a[row.key];
          const bv = row.render ? row.render(b[row.key]) : b[row.key];
          const diff = String(av) !== String(bv);
          return (
            <div key={row.key} className={`grid grid-cols-[1fr_1.2fr_1.2fr] ${i % 2 ? "bg-slate-950/40" : ""}`}>
              <div className="px-4 py-3 text-[11px] uppercase tracking-wider text-slate-500 font-mono flex items-center">{row.label}</div>
              <div className={`px-4 py-3 text-sm font-mono ${diff ? "text-cyan-300" : "text-slate-300"}`}>{av}</div>
              <div className={`px-4 py-3 text-sm font-mono ${diff ? "text-cyan-300" : "text-slate-300"}`}>{bv}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6">
        <ProsCons review={a} prosLabel={t("compare.pros", "Pros")} consLabel={t("compare.cons", "Cons")} />
        <ProsCons review={b} prosLabel={t("compare.pros", "Pros")} consLabel={t("compare.cons", "Cons")} />
      </div>
    </div>
  );
}

const MachinePicker = ({ value, onChange, label, testId }) => (
  <div>
    <p className="text-xs text-slate-500 mb-2">{label}</p>
    <select
      data-testid={testId}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
    >
      {REVIEWS.map((r) => (
        <option key={r.id} value={r.id}>{r.name}</option>
      ))}
    </select>
  </div>
);

const MachineHead = ({ review }) => (
  <div className="relative rounded-xl overflow-hidden border border-slate-800">
    <img
      src={review.image || "/images/tutorials/fallback.jpg"}
      alt={review.name}
      onError={(e) => {
        e.currentTarget.src = "/images/tutorials/fallback.jpg";
      }}
      className="w-full h-28 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
    <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
      <div>
        <p className="font-heading font-bold text-white text-sm leading-tight">{review.name}</p>
        <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-mono">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {review.rating.toFixed(1)}
        </span>
      </div>
      <FavouriteButton type="review" id={review.id} size="sm" />
    </div>
  </div>
);

const ProsCons = ({ review, prosLabel = "Pros", consLabel = "Cons" }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
    <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono mb-2">{prosLabel}</p>
    <ul className="space-y-1.5 mb-4">
      {review.pros.map((p) => (
        <li key={p} className="flex gap-2 text-xs text-slate-300"><Star className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {p}</li>
      ))}
    </ul>
    <p className="text-[11px] uppercase tracking-wider text-orange-400 font-mono mb-2">{consLabel}</p>
    <ul className="space-y-1.5">
      {review.cons.map((c) => (
        <li key={c} className="flex gap-2 text-xs text-slate-300"><X className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" /> {c}</li>
      ))}
    </ul>
  </div>
);
