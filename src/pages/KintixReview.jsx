import { Link, useNavigate } from "react-router-dom";
import { Star, Check, X, ArrowLeft, ExternalLink, Zap, Crosshair, Gauge, Maximize, ShieldCheck, Cpu } from "lucide-react";
import { getReview } from "@/data/reviews";
import { YouTubeEmbed } from "@/components/YouTube";
import { FavouriteButton } from "@/components/FavouriteButton";
import { LaserBadge } from "@/components/LaserBadge";

export default function KintixReview() {
  const navigate = useNavigate();
  const review = getReview("kintix");
  if (!review) return null;

  const specs = [
    { icon: Zap, label: "Laser", value: review.wattage },
    { icon: Gauge, label: "Max speed", value: "90,000 mm/min" },
    { icon: Crosshair, label: "Accuracy", value: review.spotSize },
    { icon: Maximize, label: "Field", value: review.workArea },
    { icon: Cpu, label: "Control", value: review.controllerType },
    { icon: ShieldCheck, label: "Safety", value: "Class 1 enclosed" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      <button onClick={() => navigate("/reviews")} data-testid="kintix-back" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> All reviews
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-900/50 mb-10">
        <img src={review.image} alt={review.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/85 to-cyan-950/40" />
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-orange-500/20 text-orange-300 border border-orange-500/50">
              ★ Editor's Choice
            </span>
            <LaserBadge type={review.laserType} />
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter leading-[1.02] max-w-3xl">
            {review.name}
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">{review.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950/80 border border-slate-700">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-mono text-xl text-amber-300 font-bold">{review.rating.toFixed(1)}</span>
              <span className="text-slate-500 text-sm">/ 5</span>
            </span>
            <span className="font-mono text-cyan-300">{review.priceRange}</span>
            <a href="https://www.sainsmart.com/products/kintix-galvo-laser" target="_blank" rel="noopener noreferrer" data-testid="kintix-buy" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-[0_0_18px_rgba(6,182,212,0.4)] transition-colors">
              View at SainSmart <ExternalLink className="w-4 h-4" />
            </a>
            <FavouriteButton type="review" id={review.id} />
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="grid sm:grid-cols-3 gap-3 mb-12">
        {specs.map((s) => (
          <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-4">
            <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-1">
              <s.icon className="w-3.5 h-3.5 text-cyan-400" /> {s.label}
            </p>
            <p className="font-mono text-sm text-cyan-300">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Pros / cons */}
      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-4"><Check className="w-4 h-4" /> What we love</p>
          <ul className="space-y-3">
            {review.pros.map((p) => (
              <li key={p} className="flex gap-2 text-slate-200"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" /> {p}</li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 mb-4"><X className="w-4 h-4" /> Keep in mind</p>
          <ul className="space-y-3">
            {review.cons.map((c) => (
              <li key={c} className="flex gap-2 text-slate-200"><X className="w-4 h-4 text-orange-400 shrink-0 mt-1" /> {c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Videos */}
      <div className="mb-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1">Watch it in action</p>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-6">Kintix on video</h2>
        <div className="grid lg:grid-cols-2 gap-5">
          {(review.videos || []).map((v) => (
            <div key={v.id} data-testid={`kintix-video-${v.id}`}>
              <YouTubeEmbed id={v.id} title={v.title} />
              <p className="mt-2 text-sm text-slate-300 font-medium">{v.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <p className="text-slate-300">Are you a brand with a machine you'd like reviewed like this?</p>
        <Link to="/brands" className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold transition-colors">
          Work with Laserhuis
        </Link>
      </div>
    </div>
  );
}
