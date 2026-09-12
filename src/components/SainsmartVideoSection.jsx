import { useState } from "react";
import { 
  Youtube, 
  Play, 
  Clock, 
  ExternalLink, 
  Sparkles, 
  ThumbsUp, 
  MessageSquare, 
  Bell, 
  Copy, 
  Check, 
  Hash, 
  Tag, 
  Share2,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import { PROVERXL_VIDEO_DATA, watchUrl, embedUrl, CHANNEL_URL } from "@/data/videos";

export function SainsmartVideoSection() {
  const [currentStartSeconds, setCurrentStartSeconds] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [tagsCopied, setTagsCopied] = useState(false);
  const [hashtagsCopied, setHashtagsCopied] = useState(false);
  const [showFullTags, setShowFullTags] = useState(false);

  const video = PROVERXL_VIDEO_DATA;

  const handleSelectChapter = (chapter, index) => {
    setCurrentStartSeconds(chapter.seconds);
    setActiveChapterIndex(index);
    toast.success(`Jumped to ${chapter.time}: ${chapter.title}`);
  };

  const copyTagsToClipboard = () => {
    const text = video.tags.join(", ");
    navigator.clipboard.writeText(text);
    setTagsCopied(true);
    toast.success("Tags copied to clipboard!");
    setTimeout(() => setTagsCopied(false), 2500);
  };

  const copyHashtagsToClipboard = () => {
    const text = video.hashtags.join(" ");
    navigator.clipboard.writeText(text);
    setHashtagsCopied(true);
    toast.success("Hashtags copied to clipboard!");
    setTimeout(() => setHashtagsCopied(false), 2500);
  };

  // YouTube embed URL with timestamp
  const iframeSrc = currentStartSeconds > 0
    ? `https://www.youtube.com/embed/${video.id}?start=${currentStartSeconds}&autoplay=1`
    : `https://www.youtube.com/embed/${video.id}`;

  return (
    <section 
      id="proverxl-video-spotlight" 
      className="mb-16 relative overflow-hidden rounded-3xl border border-red-900/40 bg-gradient-to-b from-slate-950 via-[#070d19] to-slate-950 p-6 sm:p-10 shadow-[0_0_50px_rgba(239,68,68,0.08)]"
      aria-label="Genmitsu PROVerXL 4030S Video Walkthrough"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Youtube className="w-3.5 h-3.5 text-red-500" /> Hands-On Video Guide
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-mono">
              <Sparkles className="w-3 h-3 text-orange-400" /> 4K Unboxing & Test
            </span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            Genmitsu PROVerXL 4030S: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">Unboxing & 3D Chameleon Carving</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={watchUrl(video.id)}
            target="_blank"
            rel="noopener noreferrer"
            id="watch-youtube-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(239,68,68,0.35)]"
          >
            <Youtube className="w-4 h-4" /> Open on YouTube <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Grid: Video Player + Chapter Navigator */}
      <div className="grid lg:grid-cols-12 gap-8 mb-10 items-start">
        {/* Left / Center: Cinema Video Player (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-[0_10px_35px_rgba(0,0,0,0.6)] aspect-video group">
            <iframe
              id="sainsmart-proverxl-iframe"
              key={iframeSrc}
              className="absolute inset-0 w-full h-full"
              src={iframeSrc}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Quick Player Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Current Chapter:</span>
              <span className="text-white font-semibold">{video.chapters[activeChapterIndex]?.title}</span>
            </div>
            <span className="text-orange-400 font-mono font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
              {video.chapters[activeChapterIndex]?.time}
            </span>
          </div>
        </div>

        {/* Right: Interactive Chapters & Navigation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col h-full bg-slate-900/40 border border-slate-800/90 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" /> Video Chapters (Timestamps)
            </h3>
            <span className="text-[11px] font-mono text-slate-500">Click to jump</span>
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto max-h-[340px] pr-1 scrollbar-thin scrollbar-thumb-slate-800">
            {video.chapters.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.time}
                  id={`chapter-btn-${idx}`}
                  onClick={() => handleSelectChapter(ch, idx)}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-red-500/15 border-red-500/50 text-white shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                      : "bg-slate-950/50 border-slate-800/70 text-slate-300 hover:bg-slate-800/60 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-lg font-mono text-[11px] font-bold shrink-0 ${
                      isActive 
                        ? "bg-red-500 text-white" 
                        : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200"
                    }`}>
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </span>
                    <span className="truncate font-medium">{ch.title}</span>
                  </div>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ml-2 shrink-0 ${
                    isActive ? "bg-red-500/20 text-red-300 font-bold" : "text-slate-500 group-hover:text-slate-400"
                  }`}>
                    {ch.time}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Full assembly tested in workshop
            </span>
            <a 
              href={watchUrl(video.id)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-mono hover:underline flex items-center gap-1"
            >
              Watch in 4K ↗
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Text Breakdown: The Unboxing & Assembly Narrative */}
      <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 mb-8 leading-relaxed">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <span>Part 1: The Machine & Assembly</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base">
            {video.intro}
          </p>
        </div>

        <div className="space-y-4 md:border-l md:border-slate-800/80 md:pl-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400">
            <span>Part 2: Precision & 3D Carving</span>
          </div>
          <p className="text-slate-300 text-sm sm:text-base">
            {video.body}
          </p>
        </div>
      </div>

      {/* Useful Links & Partner Showcase */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <a
          href={video.officialUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          id="official-genmitsu-link"
          className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all flex items-start gap-4 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
            <ExternalLink className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-mono text-orange-400 uppercase tracking-wider font-semibold">Official Partner Store</p>
            <h4 className="font-heading font-bold text-white text-base group-hover:text-orange-300 transition-colors mt-0.5">
              Official Genmitsu PROVerXL 4030S Website
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">Direct from SainSmart with official warranty & bundle options</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
        </a>

        <a
          href={video.laserhuisUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="laserhuis-hub-link"
          className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-start gap-4 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Laser & CNC Knowledge Base</p>
            <h4 className="font-heading font-bold text-white text-base group-hover:text-cyan-300 transition-colors mt-0.5">
              Visit Laserhuis.com
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">More tools, lasers, material cut charts & maker inspiration</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
        </a>
      </div>

      {/* Call To Action & Community Support */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-slate-900/60 to-slate-950 border border-red-900/30 flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Did you find this video helpful?
            </p>
            <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
              Please give it a 👍 Thumbs up, leave a comment with your questions about this CNC machine, and subscribe so you never miss a new unboxing or maker tutorial!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={watchUrl(video.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Comment
          </a>
          <a
            href={`${CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
          >
            <Bell className="w-3.5 h-3.5" /> Subscribe <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Copyable Tags & Hashtags Drawer for Makers and Creators */}
      <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-cyan-400" />
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Tags & Description Keywords
            </span>
            <span className="text-[11px] text-slate-500">(Copy to YouTube for maximum reach)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTagsToClipboard}
              id="copy-tags-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-medium transition-colors"
            >
              {tagsCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {tagsCopied ? "Tags Copied!" : "Copy Tags"}
            </button>
            <button
              onClick={copyHashtagsToClipboard}
              id="copy-hashtags-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-medium transition-colors"
            >
              {hashtagsCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Hash className="w-3.5 h-3.5" />}
              {hashtagsCopied ? "Hashtags Copied!" : "Copy Hashtags"}
            </button>
            <button
              onClick={() => setShowFullTags(!showFullTags)}
              className="text-xs text-slate-400 hover:text-slate-200 underline ml-1"
            >
              {showFullTags ? "Collapse" : "Show All"}
            </button>
          </div>
        </div>

        {/* Tags pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {(showFullTags ? video.tags : video.tags.slice(0, 8)).map((t, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
            >
              {t}
            </span>
          ))}
          {!showFullTags && (
            <span className="text-[11px] font-mono px-2 py-0.5 text-slate-500">
              +{video.tags.length - 8} more...
            </span>
          )}
        </div>

        {/* Hashtags bar */}
        <div className="pt-2 border-t border-slate-900 flex flex-wrap items-center gap-2 text-xs font-mono text-purple-400">
          <span className="text-slate-500 text-[11px]">Hashtags:</span>
          {video.hashtags.map((h, idx) => (
            <span key={idx} className="hover:text-purple-300 transition-colors">
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
