import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, Sparkles, ArrowRight } from "lucide-react";
import { useFavourites } from "@/lib/favourites";
import { useLanguage } from "@/context/LanguageContext";

export function FavouritesPage() {
  const favs = useFavourites();
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Bookmark className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Saved Favourites
          </h1>
          <p className="text-xs text-slate-400 mt-0.5 font-mono">
            Quick access to your bookmarked tutorials, material settings & machine reviews.
          </p>
        </div>
      </div>

      {favs.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-3 opacity-60" />
          <h2 className="text-lg font-bold text-white mb-1">No Favourites Saved Yet</h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
            Click the bookmark icon on any tutorial card or material setting to save it here for offline reference during your job setups.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              to="/tutorials"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
            >
              Browse Tutorials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/materials"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all"
            >
              Material Database
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favs.map((id: string) => (
            <div
              key={id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200"
            >
              <div className="text-xs font-mono text-cyan-400 mb-1">Saved Item ID: {id}</div>
              <h3 className="font-bold text-sm text-white">{id}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
