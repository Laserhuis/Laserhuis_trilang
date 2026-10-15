import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Zap, Menu, X, Layers, BookOpen, Cpu, Image, Youtube, Package, Info, Heart, Wand2, GitCompare, Sparkles } from "lucide-react";
import { searchAll } from "@/lib/search";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

const NAV_BASE = [
  { to: "/reviews", key: "nav.reviews", defaultLabel: "Reviews", icon: Cpu },
  { to: "/tutorials", key: "nav.tutorials", defaultLabel: "Tutorials", icon: BookOpen },
  { to: "/materials", key: "nav.materials", defaultLabel: "Materials", icon: Layers },
  { to: "/gallery", key: "nav.gallery", defaultLabel: "Gallery", icon: Image },
  { to: "/videos", key: "nav.videos", defaultLabel: "Videos", icon: Youtube },
  { to: "/brands", key: "nav.brands", defaultLabel: "Brands", icon: Package },
  { to: "/sainsmart", key: "nav.sainsmart", defaultLabel: "SainSmart", icon: Sparkles },
  { to: "/about", key: "nav.about", defaultLabel: "About", icon: Info },
];

const DITHERING_URL = "https://dithering.laserhuis.com";

export const Header = () => {
  const { t } = useLanguage();
  const [q, setQ] = useState("");
  const [results, setResults] = useState(null);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const boxRef = useRef(null);

  useEffect(() => { setMobileOpen(false); setOpen(false); setQ(""); }, [location.pathname]);

  useEffect(() => {
    if (!q.trim()) { setResults(null); return; }
    setResults(searchAll(q.trim()));
    setOpen(true);
  }, [q]);

  useEffect(() => {
    const onClick = (e) => { if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (to) => location.pathname.startsWith(to);
  const totalResults = results ? results.tutorials.length + results.reviews.length + results.materials.length : 0;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 h-16">
          <Link to="/" data-testid="brand-logo" className="flex items-center gap-2 shrink-0 group">
            <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_16px_rgba(6,182,212,0.35)]">
              <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </span>
            <span className="font-heading font-black text-lg tracking-tight text-white">
              Laser<span className="text-cyan-400">huis</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 ml-1">
            {NAV_BASE.map((n) => {
              const label = t(n.key, n.defaultLabel);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  data-testid={`nav-${n.defaultLabel.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-2.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(n.to) ? "text-cyan-400 bg-cyan-500/10" : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div ref={boxRef} className="relative flex-1 max-w-[200px] ml-auto hidden xl:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              data-testid="global-search-input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onFocus={() => results && setOpen(true)}
              placeholder={t("header.search_placeholder", "Search…")}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {open && results && (
              <div data-testid="search-results-dropdown" className="absolute top-full mt-2 w-72 right-0 max-h-[70vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-xl shadow-2xl shadow-black/60 p-2">
                {totalResults === 0 && <p className="px-3 py-4 text-sm text-slate-500">{t("header.no_matches", "No matches for")} "{q}".</p>}
                <SearchGroup title={t("header.group_tutorials", "Tutorials")} items={results.tutorials} getKey={(i) => i.id} render={(i) => i.title} onPick={(i) => navigate(`/tutorials?tutorial=${i.id}`)} />
                <SearchGroup title={t("header.group_reviews", "Reviews")} items={results.reviews} getKey={(i) => i.id} render={(i) => i.name} onPick={(i) => navigate(i.slug ? `/reviews/${i.slug}` : `/reviews?review=${i.id}`)} />
                <SearchGroup title={t("header.group_materials", "Materials")} items={results.materials} getKey={(i) => i.id} render={(i) => i.material} onPick={() => navigate(`/materials`)} />
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2 ml-auto xl:ml-2">
            <LanguageSelector />
            <Link to="/favourites" data-testid="nav-saved" aria-label={t("nav.favourites", "Saved")} className={`p-2 rounded-md transition-colors ${isActive("/favourites") ? "text-rose-400 bg-rose-500/10" : "text-slate-300 hover:text-rose-300 hover:bg-slate-800/60"}`}>
              <Heart className="w-5 h-5" />
            </Link>
            <a href={DITHERING_URL} target="_blank" rel="noopener noreferrer" data-testid="nav-dithering" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-colors">
              <Wand2 className="w-4 h-4" /> {t("nav.dithering", "Dithering")}
            </a>
          </div>

          <button data-testid="mobile-menu-toggle" className="lg:hidden ml-auto p-2 text-slate-300" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {NAV_BASE.map((n) => {
              const label = t(n.key, n.defaultLabel);
              return (
                <Link key={n.to} to={n.to} data-testid={`mobile-nav-${n.defaultLabel.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800">
                  <n.icon className="w-4 h-4 text-cyan-400" /> {label}
                </Link>
              );
            })}
            <Link to="/compare" className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"><GitCompare className="w-4 h-4 text-cyan-400" /> {t("nav.compare", "Compare")}</Link>
            <Link to="/favourites" className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800"><Heart className="w-4 h-4 text-rose-400" /> {t("nav.favourites", "Saved")}</Link>
            <a href={DITHERING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold text-cyan-300 hover:bg-slate-800"><Wand2 className="w-4 h-4" /> {t("nav.dithering", "Dithering")} Studio ↗</a>
            <LanguageSelector mobile />
          </div>
        )}
      </div>
    </header>
  );
};

const SearchGroup = ({ title, items, render, onPick, getKey }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-1">
      <p className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">{title}</p>
      {items.map((i) => (
        <button key={getKey(i)} data-testid={`search-result-${getKey(i)}`} onClick={() => onPick(i)} className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors truncate">
          {render(i)}
        </button>
      ))}
    </div>
  );
};
