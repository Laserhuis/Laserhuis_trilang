import { Link } from "react-router-dom";
import { Heart, BookOpen, Cpu, Layers } from "lucide-react";
import { useFavourites } from "@/lib/favourites";
import { TUTORIALS } from "@/data/tutorials";
import { REVIEWS } from "@/data/reviews";
import { MATERIAL_SETTINGS } from "@/data/materialSettings";
import { TutorialCard } from "@/components/TutorialCard";
import { ReviewCard } from "@/components/ReviewCard";
import { MaterialSettingsTable } from "@/components/MaterialSettingsTable";
import { useLanguage } from "@/context/LanguageContext";

export default function Favourites() {
  const { t } = useLanguage();
  const fav = useFavourites();
  const tutorials = TUTORIALS.filter((t) => fav.tutorial.includes(t.id));
  const reviews = REVIEWS.filter((r) => fav.review.includes(r.id));
  const materials = MATERIAL_SETTINGS.filter((m) => fav.material.includes(m.id));
  const total = tutorials.length + reviews.length + materials.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-rose-400 mb-2">
          <Heart className="w-3.5 h-3.5" /> {t("favourites.eyebrow", "Saved")}
        </p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
          {t("favourites.title", "Favourites")}
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t("favourites.subtitle", "Everything you've bookmarked, saved in your browser for quick access.")}
        </p>
      </div>

      {total === 0 ? (
        <div data-testid="favourites-empty" className="flex flex-col items-center justify-center text-center py-24 bg-slate-900 border border-slate-800 rounded-2xl">
          <Heart className="w-10 h-10 text-slate-600 mb-4" />
          <p className="text-slate-300 font-heading font-bold text-lg">{t("favourites.empty_title", "No favourites yet")}</p>
          <p className="text-slate-500 text-sm mt-1">{t("favourites.empty_sub", "Tap the heart on any tutorial, machine or settings profile to save it here.")}</p>
          <Link to="/tutorials" className="mt-5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors">
            {t("favourites.browse_btn", "Browse tutorials")}
          </Link>
        </div>
      ) : (
        <div className="space-y-14">
          {tutorials.length > 0 && (
            <Section icon={BookOpen} title={t("nav.tutorials", "Tutorials")} count={tutorials.length}>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {tutorials.map((t, i) => <TutorialCard key={t.id} tutorial={t} index={i} />)}
              </div>
            </Section>
          )}
          {reviews.length > 0 && (
            <Section icon={Cpu} title={t("nav.reviews", "Machines")} count={reviews.length}>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {reviews.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
              </div>
            </Section>
          )}
          {materials.length > 0 && (
            <Section icon={Layers} title={t("home.stat_profiles", "Settings profiles")} count={materials.length}>
              <MaterialSettingsTable rows={materials} />
            </Section>
          )}
        </div>
      )}
    </div>
  );
}

const Section = ({ icon: Icon, title, count, children }) => (
  <section>
    <div className="flex items-center gap-2 mb-5">
      <Icon className="w-4 h-4 text-cyan-400" />
      <h2 className="font-heading font-bold text-xl text-white">{title}</h2>
      <span className="text-xs font-mono text-slate-500">({count})</span>
    </div>
    {children}
  </section>
);
