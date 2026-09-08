import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Cpu, Frown, Star, ArrowRight, Gauge } from "lucide-react";
import { REVIEWS, BRANDS, getReview } from "@/data/reviews";
import { filterReviews } from "@/lib/filters";
import { FilterBar } from "@/components/FilterBar";
import { ReviewCard } from "@/components/ReviewCard";
import { LaserBadge } from "@/components/LaserBadge";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedReview } from "@/data/contentTranslator";

function FeaturedReview() {
  const { language, t } = useLanguage();
  const rawFeatured = REVIEWS.find((r) => r.featured) || REVIEWS[0];
  if (!rawFeatured) return null;
  const featured = getTranslatedReview(rawFeatured, language);

  return (
    <div className="mb-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 p-6 sm:p-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        <div className="w-full lg:w-1/2 relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-800">
          <img
            src={featured.image}
            alt={featured.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500 text-slate-950">
              {t("reviews.featured_badge", "Featured Review")}
            </span>
            <LaserBadge type={featured.laserType} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-mono text-sm text-amber-300 font-bold">{featured.rating.toFixed(1)}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">{featured.category}</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {featured.name}
          </h2>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed line-clamp-3">
            {featured.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to={featured.slug ? `/reviews/${featured.slug}` : `?review=${featured.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
            >
              {t("reviews.read_full", "Read full in-depth review")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t, translateLaserType } = useLanguage();
  const [params] = useSearchParams();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ laserType: "", category: "", brand: "" });

  useEffect(() => {
    const laser = params.get("laser");
    if (laser) setFilters((f) => ({ ...f, laserType: laser }));
  }, [params]);

  const laserOptions = useMemo(() => [
    { value: "diode", label: translateLaserType("diode") },
    { value: "co2", label: translateLaserType("co2") },
    { value: "fiber", label: translateLaserType("fiber") },
  ], [translateLaserType]);

  const categoryOptions = useMemo(() => {
    const cats = [...new Set(REVIEWS.map((r) => r.category))].sort();
    return cats.map((c) => ({ value: c, label: c }));
  }, []);
  const brandOptions = useMemo(() => BRANDS.map((b) => ({ value: b, label: b })), []);

  const results = useMemo(() => filterReviews(REVIEWS, { search, ...filters }), [search, filters]);

  const onChange = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const onReset = () => { setFilters({ laserType: "", category: "", brand: "" }); setSearch(""); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
          <Cpu className="w-3.5 h-3.5" /> {t("reviews.eyebrow", "Machine lab")}
        </p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          {t("reviews.title", "Laser reviews")}
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t("reviews.subtitle", "Hands-on bench testing, real cutting speeds, focal optics inspection and software compatibility across top laser brands.")}
        </p>
      </div>

      <FeaturedReview />

      <div className="relative mb-6 max-w-xl">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          data-testid="reviews-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("reviews.search_placeholder", "Search reviews, brands or models…")}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
        <div className="lg:sticky lg:top-20">
          <FilterBar
            groups={[
              { key: "brand", label: t("reviews.filter_brand", "Brand"), options: brandOptions },
              { key: "laserType", label: t("tutorials.filter_laser", "Laser type"), options: laserOptions },
              { key: "category", label: t("tutorials.filter_project_type", "Category"), options: categoryOptions },
            ]}
            values={filters}
            onChange={onChange}
            onReset={onReset}
            resultCount={results.length}
          />
        </div>

        <div>
          {results.length === 0 ? (
            <div data-testid="reviews-empty" className="flex flex-col items-center justify-center text-center py-24 bg-slate-900 border border-slate-800 rounded-2xl">
              <Frown className="w-10 h-10 text-slate-600 mb-4" />
              <p className="text-slate-300 font-heading font-bold text-lg">{t("tutorials.no_matches", "No machines match your filters")}</p>
              <button onClick={onReset} className="mt-5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors">
                {t("tutorials.reset_filters", "Reset filters")}
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {results.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
