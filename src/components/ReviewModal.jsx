import { Star, Check, X as XIcon, Cpu, Maximize, Crosshair, Ruler, Gauge, Shield, Wrench, Zap } from "lucide-react";
import { Modal } from "@/components/Modal";
import { LaserBadge } from "@/components/LaserBadge";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedReview } from "@/data/contentTranslator";

export const ReviewModal = ({ review: rawReview, onClose }) => {
  const { language, t } = useLanguage();
  if (!rawReview) return null;
  const review = getTranslatedReview(rawReview, language);
  
  const b = review.benchmarks || {};
  const hw = review.hardwareSpecs || {};

  const specs = [
    { icon: Zap, label: t("review.optical_power", "Optical Power"), value: review.wattage },
    { icon: Cpu, label: t("review.controller", "Controller"), value: review.controllerType },
    { icon: Crosshair, label: t("review.spot_size", "Spot Size"), value: review.spotSize },
    { icon: Ruler, label: t("review.min_resolution", "Min Resolution"), value: review.lineIntervalMin },
    { icon: Maximize, label: t("review.work_envelope", "Work Envelope"), value: review.workArea },
    { icon: Star, label: t("review.price_class", "Price Class"), value: review.priceRange },
  ];

  return (
    <Modal onClose={onClose} testId="review-modal">
      <div className="relative h-60 sm:h-72">
        <img
          src={review.image || "/images/tutorials/fallback.jpg"}
          alt={review.name}
          onError={(e) => {
            e.currentTarget.src = "/images/tutorials/fallback.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <LaserBadge type={review.laserType} />
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-700">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-mono text-sm text-amber-300 font-bold">{review.rating.toFixed(1)}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">{review.category}</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            {review.name}
          </h2>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        <p className="text-slate-300 text-base leading-relaxed">{review.summary}</p>

        {/* Specifications Table */}
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-3">
            {t("review.hardware_specs", "Hardware & Controller Specs")}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3">
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <s.icon className="w-3.5 h-3.5 text-cyan-400" /> {s.label}
                </span>
                <span className="font-mono text-xs text-cyan-300 font-semibold text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Benchmarks Card */}
        {b.maxSpeed && (
          <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 relative overflow-hidden">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-3">
              <Gauge className="w-4 h-4" /> {t("review.lab_benchmarks", "Lab Tested Benchmarks & Speeds")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {b.maxSpeed && <BenchRow label="Tested Max Speed" value={b.maxSpeed} highlight />}
              {b.woodEngrave && <BenchRow label="Wood Engrave" value={b.woodEngrave} />}
              {b.plywoodCut3mm && <BenchRow label="3mm Plywood Cut" value={b.plywoodCut3mm} />}
              {b.plywoodCut6mm && <BenchRow label="6mm Plywood Cut" value={b.plywoodCut6mm} />}
              {b.plywoodCut12mm && <BenchRow label="12mm Plywood Cut" value={b.plywoodCut12mm} />}
              {b.acrylicCut3mm && <BenchRow label="3mm Acrylic Cut" value={b.acrylicCut3mm} />}
              {b.castAcrylicCut6mm && <BenchRow label="6mm Cast Acrylic Cut" value={b.castAcrylicCut6mm} />}
              {b.stainlessSteelMark && <BenchRow label="Stainless Steel Mark" value={b.stainlessSteelMark} />}
              {b.brassDeepEngrave && <BenchRow label="Brass Deep Engrave" value={b.brassDeepEngrave} />}
            </div>
          </div>
        )}

        {/* Hardware Build & Safety */}
        {hw.frame && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-2">
              <Wrench className="w-4 h-4 text-cyan-400" /> {t("review.build_safety", "Build Quality & Safety Features")}
            </p>
            <p className="text-xs text-slate-300"><strong className="text-cyan-300 font-mono">Frame & Rails:</strong> {hw.frame}</p>
            <p className="text-xs text-slate-300"><strong className="text-cyan-300 font-mono">Motion Drive:</strong> {hw.motionSystem}</p>
            <p className="text-xs text-slate-300"><strong className="text-cyan-300 font-mono">Focus Mechanism:</strong> {hw.focusSystem}</p>
            <p className="text-xs text-slate-300"><strong className="text-cyan-300 font-mono">Safety Class:</strong> {hw.safetyRating}</p>
          </div>
        )}

        {/* Software Compatibility */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            {t("review.supported_software", "Supported Software Platforms")}
          </p>
          <div className="flex flex-wrap gap-2">
            {(review.compatibility || []).map((c) => (
              <span key={c} className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-3">
              <Check className="w-4 h-4" /> {t("review.pros", "Lab Certified Pros")}
            </p>
            <ul className="space-y-2.5">
              {(review.pros || []).map((p) => (
                <li key={p} className="flex gap-2 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 mb-3">
              <XIcon className="w-4 h-4" /> {t("review.limitations", "Real-World Limitations")}
            </p>
            <ul className="space-y-2.5">
              {(review.cons || []).map((c) => (
                <li key={c} className="flex gap-2 text-xs sm:text-sm text-slate-300">
                  <XIcon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const BenchRow = ({ label, value, highlight }) => (
  <div className={`flex items-center justify-between p-2.5 rounded-lg border ${highlight ? "bg-cyan-950/50 border-cyan-500/40" : "bg-slate-900 border-slate-800"}`}>
    <span className="text-xs text-slate-400 font-medium">{label}</span>
    <span className={`font-mono text-xs font-bold ${highlight ? "text-cyan-300" : "text-slate-200"}`}>{value}</span>
  </div>
);
