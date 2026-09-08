import { Heart } from "lucide-react";
import { useFavourites, toggleFavourite } from "@/lib/favourites";

export const FavouriteButton = ({ type, id, className = "", size = "md" }) => {
  const fav = useFavourites();
  const active = (fav[type] || []).includes(id);
  const dims = size === "sm" ? "w-7 h-7" : "w-8 h-8";

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(type, id);
  };

  return (
    <button
      onClick={onClick}
      data-testid={`favourite-${type}-${id}`}
      aria-label={active ? "Remove from favourites" : "Add to favourites"}
      className={`flex items-center justify-center ${dims} rounded-full border transition-all ${
        active
          ? "bg-rose-500/20 border-rose-500/60 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.35)]"
          : "bg-slate-950/70 border-slate-700 text-slate-400 hover:text-rose-300 hover:border-rose-500/50"
      } ${className}`}
    >
      <Heart className={`w-4 h-4 ${active ? "fill-rose-400" : ""}`} />
    </button>
  );
};
