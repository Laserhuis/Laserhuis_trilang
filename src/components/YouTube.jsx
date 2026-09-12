import { Play, ExternalLink } from "lucide-react";
import { embedUrl, watchUrl, thumbUrl } from "@/data/videos";

export const YouTubeEmbed = ({ id, title }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black" style={{ aspectRatio: "16 / 9" }}>
    <iframe
      className="absolute inset-0 w-full h-full"
      src={embedUrl(id)}
      title={title || "Laserhuis video"}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

export const VideoCard = ({ video }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ph-card-hover flex flex-col" data-testid={`video-card-${video.id}`}>
    <YouTubeEmbed id={video.id} title={video.title} />
    <div className="p-4 flex items-start gap-3 flex-1">
      <a
        href={watchUrl(video.id)}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 hover:scale-105 transition-transform"
      >
        <Play className="w-4 h-4 fill-orange-300" />
      </a>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          {video.tag && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
              {video.tag}
            </span>
          )}
          {video.featured && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 font-semibold">
              ★ New
            </span>
          )}
        </div>
        <p className="font-heading font-semibold text-white text-sm leading-snug">{video.title}</p>
        {video.description && (
          <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">{video.description}</p>
        )}
        {video.officialUrl && (
          <a
            href={video.officialUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors bg-orange-500/10 hover:bg-orange-500/20 px-2.5 py-1 rounded-lg border border-orange-500/30"
          >
            <span>👉 Official Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  </div>
);

// Lightweight thumbnail (used where iframes would be too heavy).
export const VideoThumb = ({ video }) => (
  <a href={watchUrl(video.id)} target="_blank" rel="noopener noreferrer" className="group relative block rounded-xl overflow-hidden border border-slate-800">
    <img src={thumbUrl(video.id)} alt={video.title} className="w-full aspect-video object-cover transition-transform group-hover:scale-105" />
    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600/90 shadow-lg">
        <Play className="w-5 h-5 text-white fill-white" />
      </span>
    </div>
  </a>
);
