import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  Flame,
  Mail,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Calculator,
  Send,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'tool_database',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
              <Info className="w-3.5 h-3.5" />
              <span>About Our Workshop</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              About Laserhuis: Precision Maker Engineering
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We build production tools, verified cut parameters, and CAM software utilities for the global maker and machining community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Mission Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why We Created Laserhuis
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              When we started CNC machining with desktop machines and trim routers (like the Makita RT0700C and DeWalt DWP611), we immediately hit a frustrating barrier: almost every manufacturer tool database (Whiteside, Amana, Freud) is configured for massive 3-phase industrial CNC spindles running at low RPM with high single-pass depths.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Running those factory parameters on a 710W trim router inevitably stalls the motor, burns delicate wood veneers, or snaps expensive micro-carbide end mills. There was no easy way to batch-calibrate Carveco or ArtCAM <code>.tdb</code> binary databases for actual physical router dials.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              So we reverse-engineered the binary format, built our interactive <strong>CNC Tool Database Calibrator</strong>, and created <strong>Laserhuis</strong> to document real, measured material parameters, kerf offsets, and hands-on laboratory machine reviews.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                to="/cnc-calculator"
                className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Try the CNC Tool Calibrator</span>
              </Link>
              <Link
                to="/materials"
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
              >
                Browse Materials
              </Link>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Laserhuis Workshop Standards</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200">Zero Sponsored Fluff</h4>
                  <p className="text-zinc-400 mt-0.5 leading-relaxed">
                    We buy machines and tools with workshop funds. If a machine has thermal throttling, an underpowered spindle, or a noisy fan, we document it clearly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200">Verified Physical Benchmarks</h4>
                  <p className="text-zinc-400 mt-0.5 leading-relaxed">
                    Every speed, feed rate, and kerf measurement in our material library is cut on physical stock, verified with Mitutoyo digital calipers and tachometers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 font-bold text-[11px]">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200">Open Maker Tools</h4>
                  <p className="text-zinc-400 mt-0.5 leading-relaxed">
                    Our CNC Tool Studio runs client-side in your browser. Your proprietary tool databases, custom tool bit profiles, and CAM secrets never leave your device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="pt-8 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">Get in Touch with Laserhuis</h2>
              <p className="text-xs text-zinc-400">
                Have a question about a tool database, machine review request, or partnership? Send us a message directly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-zinc-900 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched Successfully</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Maker'}! Your note has been received by our workshop engineering team. We will respond from <strong>support@laserhuis.com</strong> or <strong>info@laserhuis.com</strong> within 1–2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-5 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam de Boer"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Topic / Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-xs text-zinc-200 focus:outline-none focus:border-orange-500"
                  >
                    <option value="tool_database">CNC Tool Database & .tdb Support</option>
                    <option value="machine_review">Machine Review or Benchmark Inquiry</option>
                    <option value="material_settings">Material Speeds & Feeds Suggestion</option>
                    <option value="partnership">Workshop Partnership / Press</option>
                    <option value="privacy">Privacy / GDPR Request (privacy@laserhuis.com)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your machine, router model, or project requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-xs text-zinc-200 focus:outline-none focus:border-orange-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Note to Workshop</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
