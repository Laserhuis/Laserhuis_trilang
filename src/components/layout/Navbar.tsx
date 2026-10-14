import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  Layers,
  BookOpen,
  Scale,
  Image as ImageIcon,
  Video,
  Building2,
  Info,
  Menu,
  X,
  Calculator,
  Compass,
  Flame,
} from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    {
      name: 'CNC Calculator',
      path: '/cnc-calculator',
      icon: Calculator,
      highlight: true,
      badge: 'Bit Studio',
    },
    { name: 'Materials', path: '/materials', icon: Layers },
    { name: 'Tutorials', path: '/tutorials', icon: BookOpen },
    { name: 'Reviews', path: '/reviews', icon: Flame },
    { name: 'Compare', path: '/compare', icon: Scale },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Videos', path: '/videos', icon: Video },
    { name: 'Brands', path: '/brands', icon: Building2 },
    { name: 'About', path: '/about', icon: Info },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-wider text-white">
                  LASER<span className="text-orange-500">HUIS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                  HUB
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-tight">
                Laser Engraving & CNC Precision
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? link.highlight
                        ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30 font-semibold'
                        : 'bg-zinc-800 text-white border border-zinc-700'
                      : link.highlight
                      ? 'text-orange-400/90 hover:text-orange-300 hover:bg-orange-500/10'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? (link.highlight ? 'text-orange-400' : 'text-zinc-100') : (link.highlight ? 'text-orange-400' : 'text-zinc-400')}`} />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="ml-1 px-1.5 py-0.2 text-[9px] font-bold rounded bg-orange-500 text-zinc-950 leading-tight">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/cnc-calculator"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs shadow-md shadow-orange-500/20 transition-all hover:shadow-orange-500/30"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Launch CNC Calibrator</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/cnc-calculator"
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Bit Studio</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/98 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map(link => {
            const active = isActive(link.path);
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? link.highlight
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-zinc-800 text-white'
                    : 'text-zinc-300 hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${link.highlight ? 'text-orange-400' : 'text-zinc-400'}`} />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-orange-500 text-zinc-950">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
