import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import { LaserBadge, DifficultyBadge } from "@/components/LaserBadge";
import { FavouriteButton } from "@/components/FavouriteButton";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedTutorialContent } from "@/data/contentTranslator";

export const TutorialCard = ({ tutorial: rawTutorial, index = 0 }) => {
  const { language } = useLanguage();
  const tutorial = getTranslatedTutorialContent(rawTutorial, language) || rawTutorial;

  return (
    <Link
      to={`?tutorial=${tutorial.id}`}
      data-testid={`tutorial-card-${tutorial.id}`}
      className="ph-card-hover group block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ph-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={tutorial.image}
          alt={tutorial.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <LaserBadge type={tutorial.laserType} />
        </div>
        <div className="absolute top-3 right-3">
          <FavouriteButton type="tutorial" id={tutorial.id} />
        </div>
        <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-300">
          {tutorial.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-white text-lg leading-tight tracking-tight group-hover:text-cyan-300 transition-colors">
            {tutorial.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
        </div>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">{tutorial.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <DifficultyBadge level={tutorial.difficulty} />
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-mono">
            <Clock className="w-3 h-3" /> {tutorial.estimatedTime || tutorial.readTime || "10 min"}
          </span>
        </div>
        <div className="mt-3 text-xs text-slate-500 font-mono truncate">
          {tutorial.targetMaterial || (Array.isArray(tutorial.materials) ? tutorial.materials.join(", ") : "Laser Material")}
        </div>
      </div>
    </Link>
  );
};
