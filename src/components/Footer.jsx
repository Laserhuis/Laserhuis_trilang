import { useState } from "react";
import { Zap, Send, Sparkles, Keyboard, ShieldAlert, Facebook, HelpCircle, DollarSign, Ruler, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "../lib/api";
import { useLanguage } from "@/context/LanguageContext";
import { 
  DitheringGuideModal, 
  LightBurnCheatSheetModal, 
  LaserSafetyModal,
  LaserCostCalculatorModal,
  RotaryAndKerfModal
} from "./ResourceModals";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'dithering' | 'lightburn' | 'safety' | null
  const valid = EMAIL_RE.test(email.trim());

  const submit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) {
      toast.error(t("footer.newsletter_invalid", "Please enter a valid email address."));
      return;
    }
    
    setSubmitting(true);
    try {
      const res = await subscribeNewsletter(email.trim());
      toast.success(res.message || t("footer.newsletter_success", "Welcome to the list! Check your inbox."));
      setEmail("");
      setTouched(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Failed to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <footer className="border-t border-slate-800 bg-slate-950 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/40">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </span>
                <span className="font-heading font-black text-lg text-white">
                  Laser<span className="text-cyan-400">huis</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                {t("footer.desc", "The ultimate knowledge & asset hub for laser makers — tutorials, machine reviews, material settings database and community gallery.")}
              </p>
              <div className="mt-4 text-xs font-mono text-slate-400 space-y-1">
                <p>General: <a href="mailto:info@laserhuis.com" className="text-cyan-400 hover:underline">info@laserhuis.com</a></p>
                <p>Support: <a href="mailto:support@laserhuis.com" className="text-cyan-400 hover:underline">support@laserhuis.com</a></p>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
                {t("footer.newsletter_title", "Newsletter")}
              </p>
              <p className="text-sm text-slate-400 mb-3">
                {t("footer.newsletter_sub", "Get new tutorials, laser settings drops, and community updates directly to your inbox.")}
              </p>
              <form onSubmit={submit} noValidate className="space-y-2">
                <div className="flex gap-2">
                  <input
                    data-testid="newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder={t("footer.newsletter_placeholder", "you@workshop.com")}
                    disabled={submitting}
                    className={`flex-1 bg-slate-950 border rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      touched && !valid
                        ? "border-orange-500/70 focus:border-orange-500 focus:ring-orange-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                    }`}
                  />
                  <button
                    data-testid="newsletter-submit-button"
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 text-white text-sm font-semibold shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-colors shrink-0"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} {t("footer.newsletter_join", "Join")}
                  </button>
                </div>
                {touched && !valid && (
                  <p data-testid="newsletter-error" className="text-xs text-orange-400 font-mono">
                    {t("footer.newsletter_invalid", "Enter a valid email address.")}
                  </p>
                )}
              </form>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
                {t("footer.resources_title", "Resources & Guides")}
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveModal("dithering")}
                    className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors text-left group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_dithering", "Dithering Guide & Matrix Studio")}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal("pricing")}
                    className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors text-left group"
                  >
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_pricing", "Laser Job Pricing & Cost Calculator")}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal("rotary")}
                    className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors text-left group"
                  >
                    <Ruler className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_rotary", "Kerf Joint & Rotary Setup Calculator")}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal("lightburn")}
                    className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors text-left group"
                  >
                    <Keyboard className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_lightburn", "LightBurn Cheat Sheet")}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal("safety")}
                    className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors text-left group"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_safety", "Laser Safety & Toxic Material Rules")}</span>
                  </button>
                </li>
                <li>
                  <a
                    href="https://facebook.com/laserhuis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>{t("footer.res_facebook", "Facebook Community")}</span>
                  </a>
                </li>
              </ul>
              <a
                href="mailto:support@laserhuis.com"
                className="inline-flex items-center gap-1.5 mt-5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" /> {t("footer.contact_support", "Contact Support")}
              </a>
            </div>
          </div>

          {/* Flashy Orange Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/40 text-orange-400 font-mono text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping shrink-0" />
              <span>{t("footer.copyright", "© 2026 Laserhuis.com — All rights reserved.")}</span>
            </div>
            <p className="text-xs text-orange-400/80 font-mono text-center md:text-right">
              {t("footer.safety_banner", "⚡ High-Voltage Laser Crafting & Engineering • Always test settings on scrap & adhere to laser safety guidance.")}
            </p>
          </div>
        </div>
      </footer>

      {/* Render Active Resource Modal */}
      {activeModal === "dithering" && (
        <DitheringGuideModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "pricing" && (
        <LaserCostCalculatorModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "rotary" && (
        <RotaryAndKerfModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "lightburn" && (
        <LightBurnCheatSheetModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "safety" && (
        <LaserSafetyModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

