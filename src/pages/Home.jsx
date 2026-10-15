import { Link } from "react-router-dom";
import { ArrowRight, Zap, BookOpen, Cpu, Layers, Sparkles, ShieldCheck } from "lucide-react";
import { TUTORIALS } from "@/data/tutorials";
import { REVIEWS } from "@/data/reviews";
import { MATERIAL_SETTINGS } from "@/data/materialSettings";
import { IMG } from "@/data/images";
import { LASER_META } from "@/lib/constants";
import { TutorialCard } from "@/components/TutorialCard";
import { ReviewCard } from "@/components/ReviewCard";
import { SettingsFinder } from "@/components/SettingsFinder";
import { AiAssistant } from "@/components/AiAssistant";
import { useLanguage } from "@/context/LanguageContext";

const SectionHead = ({ eyebrow, title, to, linkLabel }) => (
  <div className="flex items-end justify-between mb-6">
    <div>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1">{eyebrow}</p>
      <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">{title}</h2>
    </div>
    {to && (
      <Link to={to} className="hidden sm:inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
        {linkLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    )}
  </div>
);

export default function Home() {
  const { t, translateLaserType } = useLanguage();
  const featured = TUTORIALS.slice(0, 3);
  const topReviews = [...REVIEWS].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden ph-bg-grid border-b border-slate-800">
        <img src={IMG.machine_purple} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl ph-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-6">
              <Zap className="w-3.5 h-3.5" /> Diode · CO2 · Fiber / Galvo
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.05]">
              {t("hero.title_start", "The knowledge hub for")} <span className="text-cyan-400">{t("hero.title_highlight", "laser makers.")}</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-xl">
              {t("hero.subtitle", "50+ real-world tutorials, honest machine reviews and a live material settings finder — plus an AI assistant that dials in power, speed and passes for any material.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tutorials"
                data-testid="hero-cta-tutorials"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors"
              >
                {t("hero.cta_tutorials", "Browse tutorials")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/materials"
                data-testid="hero-cta-materials"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-cyan-500/50 hover:text-white transition-colors font-semibold"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" /> {t("hero.cta_materials", "Settings finder")}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 font-mono">
              <Stat value={`${TUTORIALS.length}+`} label={t("hero.stat_tutorials", "Tutorials")} />
              <Stat value={`${REVIEWS.length}`} label={t("hero.stat_reviews", "Machine reviews")} />
              <Stat value={`${MATERIAL_SETTINGS.length}`} label={t("hero.stat_materials", "Settings profiles")} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        {/* Laser type cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-20">
          {Object.entries(LASER_META).map(([key, meta]) => {
            const Icon = meta.icon;
            const count = TUTORIALS.filter((t) => t.laserType === key).length;
            const translatedLabel = translateLaserType(key);
            return (
              <Link
                key={key}
                to={`/tutorials?laser=${key}`}
                data-testid={`home-laser-card-${key}`}
                className="ph-card-hover group bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <span className={`flex items-center justify-center w-11 h-11 rounded-xl border ${meta.bg} ${meta.border} mb-4`}>
                  <Icon className={`w-5 h-5 ${meta.color}`} />
                </span>
                <h3 className="font-heading font-bold text-lg text-white">{translatedLabel}</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">{t(`laser.${key}.blurb`, meta.blurb)}</p>
                <p className="mt-4 text-xs font-mono text-cyan-400">{count} {t("laser.tutorials_link", "tutorials →")}</p>
              </Link>
            );
          })}
        </div>

        {/* Featured tutorials */}
        <section className="mb-20">
          <SectionHead 
            eyebrow={t("home.learn_eyebrow", "Learn")} 
            title={t("home.learn_title", "Featured tutorials")} 
            to="/tutorials" 
            linkLabel={t("home.learn_all", "All tutorials")} 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((t, i) => <TutorialCard key={t.id} tutorial={t} index={i} />)}
          </div>
        </section>

        {/* Tools: finder + AI */}
        <section className="mb-20">
          <SectionHead 
            eyebrow={t("home.tools_eyebrow", "Tools")} 
            title={t("home.tools_title", "Dial in your settings")} 
            to="/materials" 
            linkLabel={t("home.tools_all", "Full library")} 
          />
          <div className="grid lg:grid-cols-2 gap-6">
            <SettingsFinder rows={MATERIAL_SETTINGS} />
            <AiAssistant />
          </div>
        </section>

        {/* Top reviews */}
        <section className="mb-8">
          <SectionHead 
            eyebrow={t("home.compare_eyebrow", "Compare")} 
            title={t("home.compare_title", "Top-rated machines")} 
            to="/reviews" 
            linkLabel={t("home.compare_all", "All reviews")} 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topReviews.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
          </div>
        </section>

        <div className="flex items-center gap-2 justify-center text-xs text-slate-600 font-mono py-4">
          <ShieldCheck className="w-4 h-4 text-cyan-500" />
          {t("home.disclaimer", "Reference data — always test on scrap and follow your machine's safety guidance.")}
        </div>
      </div>
    </div>
  );
}

const Stat = ({ value, label }) => (
  <div>
    <p className="text-2xl font-black text-white">{value}</p>
    <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
  </div>
);
