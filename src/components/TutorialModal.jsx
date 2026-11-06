import { useState } from "react";
import { Clock, PenTool, ListChecks, Tag, AlertTriangle, Lightbulb, Wrench, Shield, CheckCircle2, AlertCircle, Settings, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Modal } from "@/components/Modal";
import { LaserBadge, DifficultyBadge } from "@/components/LaserBadge";
import { FavouriteButton } from "@/components/FavouriteButton";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslatedTutorialContent } from "@/data/contentTranslator";

export const TutorialModal = ({ tutorial: rawTutorial, onClose }) => {
  const { language, t } = useLanguage();
  const tutorial = getTranslatedTutorialContent(rawTutorial, language) || rawTutorial;
  const [completedSteps, setCompletedSteps] = useState({});
  const [copied, setCopied] = useState(false);

  if (!tutorial) return null;
  const p = tutorial.exactParameters || {};

  const toggleStep = (index) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const copyParameters = () => {
    if (!p) return;
    const lines = [
      `Tutorial: ${tutorial.title}`,
      `Laser: ${tutorial.laserType || "Standard"}`,
      `Material: ${tutorial.targetMaterial || "Tested Material"}`,
      `Power: ${p.power || "-"}`,
      `Speed: ${p.speed || "-"}`,
      `Passes: ${p.passes || "1"}`,
      `Interval/DPI: ${p.lineInterval || "-"}`,
      `Air Assist: ${p.airAssist || "-"}`,
      `Focus: ${p.focusOffset || "-"}`,
      `Mode: ${p.lightburnMode || "-"}`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    toast.success(t("tutorial.copied_toast", "Copied LightBurn parameters to clipboard!"));
    setTimeout(() => setCopied(false), 2000);
  };

  const totalSteps = tutorial.steps ? tutorial.steps.length : 0;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  return (
    <Modal onClose={onClose} testId="tutorial-modal">
      {/* Hero Banner */}
      <div className="relative h-60 sm:h-72">
        <img
          src={tutorial.image || "/images/tutorials/fallback.jpg"}
          alt={tutorial.title}
          onError={(e) => {
            e.currentTarget.src = "/images/tutorials/fallback.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <FavouriteButton type="tutorial" id={tutorial.id} />
        </div>
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <LaserBadge type={tutorial.laserType} />
            <DifficultyBadge level={tutorial.difficulty} />
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              {tutorial.category}
            </span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {tutorial.title}
          </h2>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-8">
        {/* Summary & Quick Info */}
        <p className="text-slate-300 text-base leading-relaxed">{tutorial.summary}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <InfoTile 
            icon={Clock} 
            label={t("tutorial.est_time", "Est. Time")} 
            value={tutorial.estimatedTime || tutorial.readTime || "10 min"} 
          />
          <InfoTile 
            icon={Tag} 
            label={t("tutorial.material", "Target Material")} 
            value={tutorial.targetMaterial || (Array.isArray(tutorial.materials) ? tutorial.materials[0] : "Various Materials")} 
          />
          <InfoTile 
            icon={PenTool} 
            label={t("tutorial.walkthrough", "Walkthrough")} 
            value={`${totalSteps} ${t("tutorial.steps_count", "steps")}`} 
          />
          <InfoTile 
            icon={Shield} 
            label={t("tutorial.safety_rating", "Laser Safety")} 
            value="Certified Eyewear" 
          />
        </div>

        {/* Parameter Matrix (Profile or Single) */}
        {p && (p.parameterProfiles ? (
          <div className="space-y-4">
            {p.parameterProfiles.mopa && (
              <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                    <Settings className="w-4 h-4 text-cyan-400" /> MOPA Fiber Laser Profile
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {p.parameterProfiles.mopa.provenance || "REFERENCE_STARTING_POINT"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <ParamBox label="Power Setting" value={p.parameterProfiles.mopa.power} highlight />
                  <ParamBox label="Scan Speed" value={p.parameterProfiles.mopa.speed} highlight />
                  <ParamBox label="Passes" value={p.parameterProfiles.mopa.passes} />
                  <ParamBox label="Hatch Spacing" value={p.parameterProfiles.mopa.lineInterval} />
                  <ParamBox label="Air Assist" value={p.parameterProfiles.mopa.airAssist} />
                  <ParamBox label="Focus Offset" value={p.parameterProfiles.mopa.focusOffset} />
                  <ParamBox label="Frequency" value={p.parameterProfiles.mopa.frequency} />
                  <ParamBox label="Pulse Width (Adjustable)" value={p.parameterProfiles.mopa.pulseWidth} highlight />
                </div>
              </div>
            )}

            {p.parameterProfiles.qSwitched && (
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
                    <Settings className="w-4 h-4 text-slate-400" /> Conventional Q-Switched Fiber Laser Profile
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700">
                      {p.parameterProfiles.qSwitched.provenance || "REFERENCE_STARTING_POINT"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <ParamBox label="Power Setting" value={p.parameterProfiles.qSwitched.power} highlight />
                  <ParamBox label="Scan Speed" value={p.parameterProfiles.qSwitched.speed} highlight />
                  <ParamBox label="Passes" value={p.parameterProfiles.qSwitched.passes} />
                  <ParamBox label="Hatch Spacing" value={p.parameterProfiles.qSwitched.lineInterval} />
                  <ParamBox label="Air Assist" value={p.parameterProfiles.qSwitched.airAssist} />
                  <ParamBox label="Focus Offset" value={p.parameterProfiles.qSwitched.focusOffset} />
                  <ParamBox label="Frequency" value={p.parameterProfiles.qSwitched.frequency} />
                  <ParamBox label="Pulse Width" value="N/A (Fixed hardware pulse)" />
                </div>
              </div>
            )}

            <p className="text-[11px] font-mono text-amber-300/90 leading-relaxed pt-1">
              ⚠️ These values are reference starting points. Results vary by machine, optical configuration, focus, material composition and surface condition. Run a material test before processing the final workpiece.
            </p>
          </div>
        ) : (p.power || p.speed) && (
          <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-lg relative overflow-hidden space-y-3">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                <Settings className="w-4 h-4 text-cyan-400" /> {t("tutorial.tested_params", "Software & Laser Settings")}
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {p.provenance || "REFERENCE_STARTING_POINT"}
                </span>
              </div>
              <button
                type="button"
                onClick={copyParameters}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 transition-colors"
                title="Copy parameters"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : t("tutorial.copy_params", "Copy Parameters")}</span>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <ParamBox label={t("tutorial.power", "Power Setting")} value={p.power || "Reference"} highlight />
              <ParamBox label={t("tutorial.speed", "Speed")} value={p.speed || "Reference"} highlight />
              <ParamBox label={t("tutorial.passes", "Passes")} value={p.passes || "1"} />
              <ParamBox label={t("tutorial.line_interval", "Line Interval / LPI")} value={p.lineInterval || "0.10mm (~254 LPI)"} />
              <ParamBox label={t("tutorial.air_assist", "Air Assist")} value={p.airAssist || "Reference"} />
              <ParamBox label={t("tutorial.focus_offset", "Focus Offset")} value={p.focusOffset || "Surface Focus"} />
              <ParamBox label={t("tutorial.software_mode", "Software Mode")} value={p.lightburnMode || "Fill / Cut"} />
              <ParamBox label={t("tutorial.frequency", "Frequency / Pulse")} value={p.frequency || p.pulseWidth || "Standard"} />
            </div>
            {p.sourceName && (
              <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-x-4 gap-y-1 pt-1 border-t border-slate-800/80">
                <span><strong>Source:</strong> {p.sourceName}</span>
                {p.machineModel && <span><strong>Machine Class:</strong> {p.machineModel}</span>}
                {p.lastVerified && <span><strong>Verified:</strong> {p.lastVerified}</span>}
              </div>
            )}
            <p className="text-[11px] font-mono text-amber-300/90 leading-relaxed pt-1">
              ⚠️ These values are reference starting points unless explicitly marked as Laserhuis-tested. Results vary by machine, optical configuration, focus, material composition and surface condition. Run a material test before processing the final workpiece.
            </p>
          </div>
        ))}

        {/* Prerequisites */}
        {tutorial.prerequisites && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2 text-xs">
            <p className="font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-cyan-400" /> {t("tutorial.prerequisites", "Prerequisites & Equipment Compatibility")}
            </p>
            {tutorial.prerequisites.compatibleLasers && (
              <p className="text-slate-300"><strong className="text-emerald-400 font-mono">{t("tutorial.compatible_lasers", "Compatible Lasers:")}</strong> {tutorial.prerequisites.compatibleLasers}</p>
            )}
            {tutorial.prerequisites.unsuitableLasers && (
              <p className="text-slate-300"><strong className="text-orange-400 font-mono">{t("tutorial.unsuitable_lasers", "Unsuitable Lasers:")}</strong> {tutorial.prerequisites.unsuitableLasers}</p>
            )}
            {tutorial.prerequisites.minimumSpecs && (
              <p className="text-slate-300"><strong className="text-cyan-300 font-mono">{t("tutorial.min_specs", "Min Machine Specs:")}</strong> {tutorial.prerequisites.minimumSpecs}</p>
            )}
            {tutorial.prerequisites.safetyHazards && (
              <p className="text-slate-300"><strong className="text-red-400 font-mono">{t("tutorial.safety_hazards", "Safety Hazards:")}</strong> {tutorial.prerequisites.safetyHazards}</p>
            )}
          </div>
        )}

        {/* Material Selection Guidance */}
        {tutorial.materialSelection && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <Tag className="w-4 h-4" /> {t("tutorial.substrate_selection", "Substrate Selection & Buying Guidance")}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{tutorial.materialSelection}</p>
          </div>
        )}

        {/* Design Preparation */}
        {tutorial.designPrep && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <PenTool className="w-4 h-4" /> {t("tutorial.design_prep", "Design & Software Preparation (LightBurn / EZCAD)")}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{tutorial.designPrep}</p>
          </div>
        )}

        {/* Laser Setup */}
        {tutorial.laserSetup && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <Wrench className="w-4 h-4" /> {t("tutorial.machine_setup", "Machine Setup & Bed Focus Protocol")}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{tutorial.laserSetup}</p>
          </div>
        )}

        {/* Material Test Guidance */}
        {tutorial.materialTestGuide && (
          <div className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" /> {t("tutorial.test_matrix_guide", "How to Conduct the Material Test Matrix")}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{tutorial.materialTestGuide}</p>
          </div>
        )}

        {/* Material Preparation Protocol */}
        {tutorial.materialPrep && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <Wrench className="w-4 h-4" /> {t("tutorial.prep_protocol", "Material Preparation Protocol")}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{tutorial.materialPrep}</p>
          </div>
        )}

        {/* Tools Needed */}
        {(tutorial.toolsNeeded || tutorial.tools) && (
          <div>
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">
              <PenTool className="w-3.5 h-3.5 text-cyan-400" /> {t("tutorial.equipment_needed", "Equipment & Accessories Needed")}
            </p>
            <div className="flex flex-wrap gap-2">
              {(tutorial.toolsNeeded || tutorial.tools || []).map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Step-By-Step Walkthrough with Progress Tracking */}
        {tutorial.steps && tutorial.steps.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                <ListChecks className="w-4 h-4 text-cyan-400" /> {t("tutorial.step_walkthrough", "Step-by-Step Practical Walkthrough")}
              </p>
              {totalSteps > 0 && (
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
                  {completedCount}/{totalSteps} {t("tutorial.step_completed", "Completed")}
                </span>
              )}
            </div>
            <ol className="space-y-4">
              {tutorial.steps.map((s, i) => {
                const title = typeof s === "string" ? `Step ${i + 1}` : s.title;
                const detail = typeof s === "string" ? s : s.detail;
                const isDone = !!completedSteps[i];

                return (
                  <li
                    key={i}
                    data-testid={`tutorial-step-${i + 1}`}
                    onClick={() => toggleStep(i)}
                    className={`cursor-pointer group flex gap-4 border rounded-2xl p-5 transition-all ${
                      isDone
                        ? "bg-slate-950/40 border-emerald-500/30 opacity-80"
                        : "bg-slate-950 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <span
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-xl font-mono text-sm font-bold transition-colors ${
                        isDone
                          ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                          : "bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 group-hover:bg-cyan-500/25"
                      }`}
                    >
                      {isDone ? <Check className="w-4 h-4 text-emerald-400" /> : i + 1}
                    </span>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <p className={`font-heading font-bold text-base transition-colors ${isDone ? "text-emerald-300 line-through decoration-emerald-500/50" : "text-white"}`}>
                          {title}
                        </p>
                        <span className="text-[11px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {isDone ? "Click to uncheck" : "Click to mark done"}
                        </span>
                      </div>

                      {s.action && (
                        <p className="text-xs text-slate-300 font-medium">
                          <strong className="text-cyan-400 font-mono">ACTION:</strong> {s.action}
                        </p>
                      )}
                      {s.why && (
                        <p className="text-xs text-slate-400 italic">
                          <strong className="text-cyan-300/80 font-mono not-italic">WHY:</strong> {s.why}
                        </p>
                      )}
                      {detail && (
                        <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
                      )}
                      {s.lookFor && (
                        <p className="text-xs text-emerald-300/90 font-mono bg-emerald-950/30 border border-emerald-900/40 rounded-lg p-2">
                          <strong>WHAT TO LOOK FOR:</strong> {s.lookFor}
                        </p>
                      )}
                      {s.possibleFailure && (
                        <p className="text-xs text-orange-300/90 font-mono bg-orange-950/30 border border-orange-900/40 rounded-lg p-2">
                          <strong>POSSIBLE FAILURE:</strong> {s.possibleFailure}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        {/* Quality Control & Troubleshooting Matrix */}
        {tutorial.troubleshooting && tutorial.troubleshooting.length > 0 && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-400 mb-4">
              <AlertCircle className="w-4 h-4" /> {t("tutorial.troubleshooting", "Quality Tuning & Troubleshooting Matrix")}
            </p>
            <div className="space-y-3">
              {tutorial.troubleshooting.map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 space-y-1 text-xs">
                  <p className="font-bold text-orange-300 font-mono uppercase tracking-wider">
                    {t("tutorial.symptom", "Symptom")}: {item.issue}
                  </p>
                  {item.likelyCause && (
                    <p className="text-slate-400"><strong className="text-amber-300 font-mono">Likely Cause:</strong> {item.likelyCause}</p>
                  )}
                  {item.howToConfirm && (
                    <p className="text-slate-400"><strong className="text-cyan-300 font-mono">How to Confirm:</strong> {item.howToConfirm}</p>
                  )}
                  <p className="text-slate-300 flex items-start gap-2 pt-1 border-t border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">{t("tutorial.real_fix", "Real-world Fix")}:</strong> {item.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pro Tips */}
        <div className="bg-slate-950 border border-cyan-900/40 rounded-2xl p-5">
          <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-3">
            <Lightbulb className="w-4 h-4" /> {t("tutorial.pro_tips", "Pro Secrets & Techniques")}
          </p>
          <ul className="space-y-2.5">
            {(tutorial.proTips || []).map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-cyan-400 font-bold font-mono">›</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Warning */}
        <div className="flex items-start gap-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 p-4">
          <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-xs uppercase font-mono tracking-wider text-orange-300 mb-1">
              {t("tutorial.safety_protocol", "Safety & Exhaust Protocol")}
            </p>
            <p className="text-xs text-orange-200/90 leading-relaxed">
              {tutorial.prerequisites?.safetyEyewear || tutorial.safetyNote || tutorial.safety || t("tutorial.safety_default", "Use the machine fully enclosed with functional interlocks wherever designed to do so. If laser-protective eyewear is required for the operating mode, use certified eyewear suitable for the actual wavelength(s), laser operating mode and required protection level specified by the machine manufacturer or a competent laser-safety assessment. Never select eyewear from lens colour or wavelength alone. Use effective local exhaust sized for the machine enclosure, duct geometry, pressure losses and material being processed.")}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const InfoTile = ({ icon: Icon, label, value }) => (
  <div className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3">
    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500 mb-1">
      <Icon className="w-3 h-3 text-cyan-400" /> {label}
    </p>
    <p className="font-mono text-xs font-semibold text-cyan-300 truncate">{value}</p>
  </div>
);

const ParamBox = ({ label, value, highlight }) => (
  <div className={`p-3 rounded-xl border ${highlight ? "bg-cyan-950/40 border-cyan-500/40" : "bg-slate-900 border-slate-800"}`}>
    <p className="text-[10px] font-mono uppercase text-slate-400 mb-1">{label}</p>
    <p className={`font-mono text-xs font-bold ${highlight ? "text-cyan-300" : "text-white"}`}>{value}</p>
  </div>
);
