import { Link } from "react-router-dom";
import { Star, Maximize, Cpu, ArrowUpRight } from "lucide-react";
import { LaserBadge } from "@/components/LaserBadge";
import { FavouriteButton } from "@/components/FavouriteButton";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedReview } from "@/data/contentTranslator";

const Stars = ({ rating }) => (
  <span className="inline-flex items-center gap-1" data-testid="review-rating">
    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
    <span className="font-mono text-sm text-amber-300">{rating.toFixed(1)}</span>
  </span>
);

export const ReviewCard = ({ review: rawReview, index = 0 }) => {
  const { language, t } = useLanguage();
  const review = getTranslatedReview(rawReview, language);

  return (
    <Link
      to={review.slug ? `/reviews/${review.slug}` : `?review=${review.id}`}
      data-testid={`review-card-${review.id}`}
      className="ph-card-hover group block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ph-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={review.image || "/images/tutorials/fallback.jpg"}
          alt={review.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/tutorials/fallback.jpg";
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <LaserBadge type={review.laserType} />
          {review.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-orange-500/20 text-orange-300 border border-orange-500/50">
              {t("reviews.featured_short", "Editor's Choice")}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-950/80 border border-slate-700">
          <Stars rating={review.rating} />
        </div>
        <div className="absolute bottom-3 right-3">
          <FavouriteButton type="review" id={review.id} />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading font-bold text-white text-lg leading-tight tracking-tight group-hover:text-cyan-300 transition-colors">
              {review.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{review.category}</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
        </div>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">{review.summary}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5">
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider">{t("review.power", "Power")}</span>
            <span className="font-mono text-cyan-300 truncate block">{review.wattage}</span>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5">
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider flex items-center gap-1">
              <Maximize className="w-2.5 h-2.5" /> {t("review.bed", "Bed")}
            </span>
            <span className="font-mono text-cyan-300 truncate block">{review.workArea}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 font-mono truncate">
          <Cpu className="w-3 h-3 shrink-0" /> {review.controllerType}
        </div>
      </div>
    </Link>
  );
};
