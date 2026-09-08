import { Youtube, ExternalLink } from "lucide-react";
import { VIDEOS, CHANNEL_URL } from "@/data/videos";
import { VideoCard } from "@/components/YouTube";
import { useLanguage } from "@/context/LanguageContext";

export default function Videos() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 mb-10 bg-gradient-to-r from-red-950/40 via-slate-950 to-slate-950">
        <div className="p-8 sm:p-12">
          <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-red-400 mb-3">
            <Youtube className="w-4 h-4" /> {t("videos.eyebrow", "Laserhuis on YouTube")}
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
            {t("videos.title", "Videos")}
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            {t("videos.subtitle", "Hands-on machine tests, tutorials and tool demos from the Laserhuis channel — laser engraving made simple.")}
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="subscribe-cta"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-[0_0_18px_rgba(239,68,68,0.4)] transition-colors"
          >
            <Youtube className="w-5 h-5" /> {t("videos.subscribe", "Subscribe on YouTube")} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="videos-grid">
        {VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
      </div>
    </div>
  );
}
