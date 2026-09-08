import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";

export const LanguageSelector = ({ mobile = false }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  if (mobile) {
    return (
      <div className="pt-2 border-t border-slate-800/80 mt-3" data-testid="mobile-language-selector">
        <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 px-1 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-cyan-400" /> Language / Taal / Langue
        </p>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((item) => {
            const active = item.code === language;
            return (
              <button
                key={item.code}
                data-testid={`mobile-lang-${item.code}`}
                onClick={() => setLanguage(item.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-medium border transition-all ${
                  active
                    ? "bg-cyan-500/20 border-cyan-500/60 text-cyan-300 font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                }`}
              >
                <span className="text-base leading-none">{item.flag}</span>
                <span>{item.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        data-testid="language-selector-btn"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold tracking-wide transition-all hover:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        title="Change Language / Verander Taal / Changer de Langue"
        aria-label="Language Selector"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="font-mono uppercase">{currentLang.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          data-testid="language-dropdown-menu"
          className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/80 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-800/80 mb-1 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-cyan-400" /> Select Language
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                data-testid={`language-option-${lang.code}`}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                  isSelected
                    ? "bg-cyan-500/15 text-cyan-300 font-bold"
                    : "text-slate-300 hover:bg-slate-850 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span>{lang.label}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{lang.short}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
