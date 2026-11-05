import { useState } from "react";
import { toast } from "sonner";
import { Package, Video, FileText, Youtube, Zap, Flame, Crosshair, Box, Wrench, Check, Send, Loader2, TrendingUp } from "lucide-react";
import { submitBrandInquiry } from "@/lib/api";

const MACHINE_TYPES = [
  { icon: Zap, label: "Laser Engravers", note: "Diode & desktop" },
  { icon: Crosshair, label: "Fiber & Galvo", note: "Metal marking" },
  { icon: Flame, label: "CO2 Lasers", note: "Cutting & photo" },
  { icon: Box, label: "3D Printers", note: "FDM & resin" },
  { icon: Wrench, label: "CNC Machines", note: "Routers & mills" },
];

const OFFERS = [
  { icon: FileText, title: "In-depth written review", text: "A dedicated, SEO-optimised review page with real test results, specs and honest pros/cons." },
  { icon: Video, title: "Professional videos", text: "Unboxing, setup and hands-on engraving videos published to our growing YouTube channel." },
  { icon: TrendingUp, title: "Reach & credibility", text: "Exposure to 10,000+ makers across our site, channel and free software tools." },
];

const STEPS = [
  { n: 1, title: "Send your machine", text: "Ship us a unit to test. No cost to us, no strings — we cover the review." },
  { n: 2, title: "We test it properly", text: "Weeks of real projects across materials, documenting settings and results." },
  { n: 3, title: "You get a page + videos", text: "A permanent review page and video content you can share and link to." },
];

export default function Brands() {
  const [form, setForm] = useState({ name: "", company: "", email: "", machineType: "Laser Engravers", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email) {
      toast.error("Please fill in your name, company and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await submitBrandInquiry(form);
      toast.success(res.message || "Thanks! We'll be in touch.");
      setForm({ name: "", company: "", email: "", machineType: "Laser Engravers", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-orange-900/40 mb-12 bg-gradient-to-br from-orange-950/50 via-slate-950 to-slate-950">
        <div className="p-8 sm:p-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-mono mb-5">
            <Package className="w-3.5 h-3.5" /> For Brands & Manufacturers
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter leading-[1.03]">
            Send a machine.<br /><span className="text-orange-400">Get a review + videos.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Want your machine in front of thousands of makers? Send us a unit and we'll put it through real-world
            testing, then publish an honest review page and video content on Laserhuis and YouTube.
          </p>
          <a href="#inquiry" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold shadow-[0_0_18px_rgba(249,115,22,0.4)] transition-colors">
            Start a partnership <Send className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* What you get */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-6">What you get</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {OFFERS.map((o) => (
          <div key={o.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 ph-card-hover">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/40 mb-4">
              <o.icon className="w-5 h-5 text-orange-400" />
            </span>
            <h3 className="font-heading font-bold text-white">{o.title}</h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{o.text}</p>
          </div>
        ))}
      </div>

      {/* Categories we review */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-6">Machines we review</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-14">
        {MACHINE_TYPES.map((m) => (
          <div key={m.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center ph-card-hover">
            <m.icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
            <p className="font-heading font-semibold text-white text-sm">{m.label}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{m.note}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-6">How it works</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {STEPS.map((s) => (
          <div key={s.n} className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 font-mono font-bold mb-4">{s.n}</span>
            <h3 className="font-heading font-bold text-white">{s.title}</h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      {/* Inquiry form */}
      <div id="inquiry" className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
        <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-900/40 rounded-2xl p-7">
          <h2 className="font-heading font-black text-2xl text-white mb-3">Let's work together</h2>
          <p className="text-slate-300 leading-relaxed">
            Tell us about your machine and we'll get back to you about a review and video collaboration.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Honest, hands-on testing</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Written review + video content</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Shared to site + YouTube</li>
          </ul>
        </div>

        <form onSubmit={submit} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 space-y-4" data-testid="brand-inquiry-form">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" testId="brand-name" value={form.name} onChange={(v) => set("name", v)} />
            <Field label="Company" testId="brand-company" value={form.company} onChange={(v) => set("company", v)} />
          </div>
          <Field label="Email" type="email" testId="brand-email" value={form.email} onChange={(v) => set("email", v)} />
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block">Machine type</label>
            <select data-testid="brand-machine-type" value={form.machineType} onChange={(e) => set("machineType", e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
              {MACHINE_TYPES.map((m) => <option key={m.label}>{m.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-500 mb-1.5 block">Message</label>
            <textarea data-testid="brand-message" value={form.message} onChange={(e) => set("message", e.target.value)} rows={4} placeholder="Tell us about the machine you'd like reviewed…" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" />
          </div>
          <button type="submit" disabled={loading} data-testid="brand-submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors disabled:opacity-60">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Send inquiry
          </button>
          <p className="flex items-center gap-1.5 justify-center text-xs text-slate-500"><Youtube className="w-3.5 h-3.5 text-red-400" /> Reviews shared to our channel & site</p>
        </form>
      </div>
    </div>
  );
}

const Field = ({ label, value, onChange, type = "text", testId }) => (
  <div>
    <label className="text-xs text-slate-500 mb-1.5 block">{label}</label>
    <input
      type={type}
      value={value}
      data-testid={testId}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
    />
  </div>
);
