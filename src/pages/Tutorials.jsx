import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, BookOpen, Frown } from "lucide-react";
import { TUTORIALS } from "@/data/tutorials";
import { filterTutorials } from "@/lib/filters";
import { FilterBar } from "@/components/FilterBar";
import { TutorialCard } from "@/components/TutorialCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Tutorials() {
  const { t, translateLaserType, translateDifficulty } = useLanguage();
  const [params] = useSearchParams();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ laserType: "", difficulty: "", category: "" });

  useEffect(() => {
    const laser = params.get("laser");
    if (laser) setFilters((f) => ({ ...f, laserType: laser }));
  }, [params]);

  const laserOptions = useMemo(() => [
    { value: "diode", label: translateLaserType("diode") },
    { value: "co2", label: translateLaserType("co2") },
    { value: "fiber", label: translateLaserType("fiber") },
  ], [translateLaserType]);

  const difficultyOptions = useMemo(() => [
    { value: "Beginner", label: translateDifficulty("Beginner") },
    { value: "Intermediate", label: translateDifficulty("Intermediate") },
    { value: "Advanced", label: translateDifficulty("Advanced") },
  ], [translateDifficulty]);

  const categoryOptions = useMemo(() => {
    const cats = [...new Set(TUTORIALS.map((t) => t.category))].sort();
    return cats.map((c) => ({ value: c, label: c }));
  }, []);

  const results = useMemo(
    () => filterTutorials(TUTORIALS, { search, ...filters }),
    [search, filters]
  );

  const onChange = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const onReset = () => { setFilters({ laserType: "", difficulty: "", category: "" }); setSearch(""); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
          <BookOpen className="w-3.5 h-3.5" /> {t("tutorials.library", "Tutorial library")}
        </p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          {t("tutorials.title", "Tutorials")}
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t("tutorials.subtitle", `${TUTORIALS.length}+ practical laser projects across diode, CO2 and fiber workflows. Filter live and open any card for full step-by-step instructions.`)}
        </p>
      </div>

      <div className="relative mb-6 max-w-xl">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          data-testid="tutorials-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("tutorials.search_placeholder", "Search by title, material or tag…")}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
        <div className="lg:sticky lg:top-20">
          <FilterBar
            groups={[
              { key: "laserType", label: t("tutorials.filter_laser", "Laser type"), options: laserOptions },
              { key: "difficulty", label: t("tutorials.filter_difficulty", "Difficulty"), options: difficultyOptions },
              { key: "category", label: t("tutorials.filter_project_type", "Project type"), options: categoryOptions },
            ]}
            values={filters}
            onChange={onChange}
            onReset={onReset}
            resultCount={results.length}
          />
        </div>

        <div>
          {results.length === 0 ? (
            <EmptyState onReset={onReset} t={t} />
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {results.map((t, i) => <TutorialCard key={t.id} tutorial={t} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const EmptyState = ({ onReset, t }) => (
  <div data-testid="tutorials-empty" className="flex flex-col items-center justify-center text-center py-24 bg-slate-900 border border-slate-800 rounded-2xl">
    <Frown className="w-10 h-10 text-slate-600 mb-4" />
    <p className="text-slate-300 font-heading font-bold text-lg">{t ? t("tutorials.no_matches", "No tutorials match your filters") : "No tutorials match your filters"}</p>
    <p className="text-slate-500 text-sm mt-1">{t ? t("tutorials.try_widening", "Try widening your search or clearing filters.") : "Try widening your search or clearing filters."}</p>
    <button onClick={onReset} className="mt-5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors">
      {t ? t("tutorials.reset_filters", "Reset filters") : "Reset filters"}
    </button>
  </div>
);
