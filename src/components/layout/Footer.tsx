import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Calculator, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-zinc-950 shadow-md">
                <Flame className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                LASER<span className="text-orange-500">HUIS</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The premier European maker and precision machining portal. Providing real-world tested feeds, speeds, cut files, material matrices, and CAM tool database calibrators.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Updated for 2026 Machine Lineups & 710W Spindle Setups</span>
            </div>
          </div>

          {/* Column 1: Tools & Apps */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Tools & Software
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cnc-calculator" className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-medium text-orange-400/90">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>CNC Tool Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-white transition-colors">
                  Material Speeds & Feeds
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors">
                  Compare Laser & CNC
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Cut Files & Inlay Gallery
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-white transition-colors">
                  Video Benchmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Content Hub */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Knowledge Base
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tutorials" className="hover:text-white transition-colors">
                  Laser Tutorials
                </Link>
              </li>
              <li>
                <Link to="/reviews/kintix" className="hover:text-white transition-colors">
                  Kintix Laser Review
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  SainSmart 4030 PROVer
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-white transition-colors">
                  Brand Directory
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-white transition-colors">
                  Air Assist & Fume Extraction
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Laserhuis Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Workshop
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>support@laserhuis.com</span>
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>XML Sitemap</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GDPR Compliant · Privacy First</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom separator and unboxed quiet metadata */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Laserhuis (laserhuis.com). All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Precision Maker Craft</span>
            <span aria-hidden="true">·</span>
            <span>Laserhuis CNC Studio</span>
            <span aria-hidden="true">·</span>
            <Link to="/cnc-calculator" className="text-orange-400 hover:underline">
              Bit Studio App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
