import { Link } from "react-router-dom";
import { Zap, BookOpen, Cpu, Layers, Sparkles, Youtube, ArrowRight, Wand2, Facebook, CheckCircle2, Users, MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";
import { TUTORIALS } from "@/data/tutorials";
import { REVIEWS } from "@/data/reviews";
import { CHANNEL_URL } from "@/data/videos";
import { IMG } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const PILLARS = [
    { icon: BookOpen, title: t("about.pillar1_title", "Step-by-Step Tutorials"), text: t("about.pillar1_desc", "Over 100+ deep technical guides spanning Diode, CO2, and Fiber/Galvo workflows with precise physics, chemistry, and power settings.") },
    { icon: Cpu, title: t("about.pillar2_title", "Unbiased Machine Reviews"), text: t("about.pillar2_desc", "Hands-on benchmark testing across leading diode engravers, CO2 glass-tube cutters, and industrial fiber galvo workstations.") },
    { icon: Layers, title: t("about.pillar3_title", "Dynamic Settings Library"), text: t("about.pillar3_desc", "A comprehensive material parameter database scaled automatically to your specific laser source wattage.") },
    { icon: Wand2, title: t("about.pillar4_title", "Browser-Based Tools"), text: t("about.pillar4_desc", "Instant web utilities like our 20+ algorithm Dithering Studio, rotary step calculators, and jig layout tools.") },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 mb-12 ph-bg-grid">
        <img src={IMG.wood_action} alt="Laser engraving action" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        <div className="relative p-8 sm:p-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" /> {t("about.eyebrow", "Precision Laser Crafting & Engineering")}
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter leading-[1.03]">
            {t("about.welcome", "Welcome to")} <span className="text-cyan-400">Laserhuis</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            {t("about.hero_desc", "Laserhuis is the definitive digital hub for laser engraving, cutting, and industrial marking. Designed for hobbyists, makers, and production workshops, we eliminate trial-and-error material scorching with tested parameters, expert technical documentation, and smart browser software.")}
          </p>
        </div>
      </div>

      {/* Story & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-14">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <h2 className="font-heading font-bold text-2xl text-white">{t("about.mission_title", "Our Mission")}</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t("about.mission_p1", "We started Laserhuis with a simple goal: to make laser technology accessible, predictable, and remarkably precise. Whether you are operating a 10W desktop diode, a 50W CO2 tube cutter, or a 60W MOPA fiber galvo system, getting clean cuts and crisp engravings shouldn't mean wasting expensive raw materials on endless test grids.")}
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              {t("about.mission_p2", "Every tutorial, review, and material parameter on Laserhuis is rigorously verified by master artisans and material scientists. We break down focal optics, air assist dynamics, gas extraction, and wavelength absorption so you achieve Grade-A output every time.")}
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t("about.mission_suite", "Active hardware test suite covering Diode, CO2, and Fiber/Galvo sources.")}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat value={`${TUTORIALS.length}+`} label={t("about.stat_tutorials", "Technical Tutorials")} sub={t("about.stat_tutorials_sub", "Grade A++++ Guides")} />
          <Stat value={`${REVIEWS.length}`} label={t("about.stat_reviews", "In-Depth Reviews")} sub={t("about.stat_reviews_sub", "Hands-on Hardware Tests")} />
          <Stat value="25,000+" label={t("about.stat_makers", "Makers Helped")} sub={t("about.stat_makers_sub", "Global Community")} />
          <Stat value="20+" label={t("about.stat_dither", "Dither Algorithms")} sub={t("about.stat_dither_sub", "Photo-to-Laser Studio")} />
        </div>
      </div>

      {/* Pillars Grid */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-6">
        {t("about.what_you_find", "What You'll Find On Laserhuis")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {PILLARS.map((p) => (
          <div key={p.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 ph-card-hover flex flex-col justify-between">
            <div>
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/40 mb-4">
                <p.icon className="w-5 h-5 text-cyan-400" />
              </span>
              <h3 className="font-heading font-bold text-white text-lg">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FEATURED FACEBOOK ADVERT BANNER */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80 p-8 sm:p-12 mb-16 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-300 text-xs font-mono mb-4">
              <Facebook className="w-4 h-4 text-blue-400 fill-blue-400" /> {t("about.fb_eyebrow", "OFFICIAL LASERHUIS COMMUNITY")}
            </div>
            
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              {t("about.fb_title_pre", "Join the")} <span className="text-blue-400">{t("about.fb_title_highlight", "Laserhuis")}</span> {t("about.fb_title_post", "Facebook Community!")}
            </h2>
            
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              {t("about.fb_desc1", "Connect with over ")}<strong className="text-white">{t("about.fb_desc_strong", "15,000+ laser engravers, makers, and workshop owners")}</strong>{t("about.fb_desc2", ". Get daily setting cheat sheets, free LightBurn vector file drops, and instant peer troubleshooting support for all diode, CO2, and galvo systems.")}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("about.fb_bullet1", "<strong>Daily Setting Cheat Sheets</strong> dropped weekly") }}></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("about.fb_bullet2", "<strong>Free SVG / LightBurn Files</strong> for members") }}></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("about.fb_bullet3", "<strong>Project Showcases</strong> & feedback") }}></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("about.fb_bullet4", "<strong>Instant Q&A</strong> with master artisans") }}></span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://facebook.com/laserhuis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]"
              >
                <Facebook className="w-5 h-5 fill-white" /> {t("about.fb_cta", "Follow @laserhuis on Facebook")} <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-slate-400">
                {t("about.fb_cta_sub", "15K+ Followers • Daily Updates")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white font-heading">
                L
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">Laserhuis Official</p>
                <p className="text-xs text-blue-400 font-mono">@laserhuis • Facebook Page & Community</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <p className="text-cyan-400 font-mono text-[11px] mb-1">🔥 Latest Post Highlight:</p>
                <p className="italic">"Free LightBurn 3D Relief Heightmap file uploaded for all members! Optimized for 20W Fiber & 50W CO2 lasers. Grab it now in our files section!"</p>
              </div>
              <div className="flex justify-between items-center text-slate-400 font-mono pt-2">
                <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5 text-blue-400" /> 1,240 Likes</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-blue-400" /> 188 Comments</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-blue-400" /> 15.2K Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Tools */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <a href="https://dithering.laserhuis.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-900/50 rounded-2xl p-6 ph-card-hover">
          <div>
            <p className="flex items-center gap-2 text-cyan-300 font-heading font-bold text-lg"><Sparkles className="w-5 h-5 text-cyan-400" /> Dithering Studio</p>
            <p className="text-sm text-slate-400 mt-1">Convert photos into laser-ready 1-bit dithering matrices in seconds.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-gradient-to-r from-red-950/50 to-slate-900 border border-red-900/40 rounded-2xl p-6 ph-card-hover">
          <div>
            <p className="flex items-center gap-2 text-red-300 font-heading font-bold text-lg"><Youtube className="w-5 h-5 text-red-400" /> YouTube Channel</p>
            <p className="text-sm text-slate-400 mt-1">Watch live machine tests, focus calibrations, and project walkthroughs.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="text-center pt-4">
        <Link to="/brands" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
          Are you a machine manufacturer or tool brand? Partner with Laserhuis <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export { About as AboutPage };

const Stat = ({ value, label, sub }: { value: string; label: string; sub?: string }) => (
  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center flex flex-col justify-center">
    <p className="font-heading font-black text-3xl sm:text-4xl text-cyan-400 tracking-tight">{value}</p>
    <p className="text-xs font-heading font-bold text-slate-200 uppercase tracking-wider mt-1">{label}</p>
    {sub && <p className="text-[10px] font-mono text-slate-500 mt-0.5">{sub}</p>}
  </div>
);
