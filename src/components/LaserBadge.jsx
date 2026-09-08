import { LASER_META, DIFFICULTY_META } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export const LaserBadge = ({ type, className = "" }) => {
  const { translateLaserType } = useLanguage();
  const meta = LASER_META[type] || LASER_META.fiber;
  if (!meta) return null;
  const Icon = meta.icon;
  return (
    <span
      data-testid={`laser-badge-${type}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${meta.bg} ${meta.color} ${meta.border} ${className}`}
    >
      <Icon className="w-3 h-3" />
      {translateLaserType ? translateLaserType(type) : meta.label}
    </span>
  );
};

export const DifficultyBadge = ({ level, className = "" }) => {
  const { translateDifficulty } = useLanguage();
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        DIFFICULTY_META[level] || "text-slate-300 border-slate-700 bg-slate-800"
      } ${className}`}
    >
      {translateDifficulty ? translateDifficulty(level) : level}
    </span>
  );
};
