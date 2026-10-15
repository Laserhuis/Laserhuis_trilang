import { Zap, Flame, Cpu, Crosshair } from "lucide-react";

export const LASER_META = {
  diode: {
    label: "Diode",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/40",
    ring: "ring-blue-500/30",
    icon: Zap,
    blurb: "Compact GRBL machines for wood, leather, acrylic and light cutting.",
  },
  co2: {
    label: "CO2",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/40",
    ring: "ring-cyan-500/30",
    icon: Flame,
    blurb: "Glass-tube powerhouses for cutting acrylic and photo-grade engraving.",
  },
  fiber: {
    label: "Fiber / Galvo",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/40",
    ring: "ring-fuchsia-500/30",
    icon: Cpu,
    blurb: "High-speed galvo sources for permanent metal marking and deep engraving.",
  },
};

export const DIFFICULTY_META = {
  Beginner: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
  Intermediate: "text-amber-400 border-amber-500/40 bg-amber-500/10",
  Advanced: "text-rose-400 border-rose-500/40 bg-rose-500/10",
};
