import { Zap, Flame, Sun, Sparkles } from "lucide-react";

export const LASER_META = {
  diode: {
    label: "Diode Laser",
    icon: Zap,
    bg: "bg-blue-500/10",
    color: "text-blue-400",
    border: "border-blue-500/30",
  },
  co2: {
    label: "CO2 Laser",
    icon: Flame,
    bg: "bg-amber-500/10",
    color: "text-amber-400",
    border: "border-amber-500/30",
  },
  fiber: {
    label: "Fiber Galvo",
    icon: Sun,
    bg: "bg-purple-500/10",
    color: "text-purple-400",
    border: "border-purple-500/30",
  },
  uv: {
    label: "UV Laser",
    icon: Sparkles,
    bg: "bg-cyan-500/10",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
  },
};

export const DIFFICULTY_META = {
  beginner: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  intermediate: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  advanced: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  expert: "text-purple-400 border-purple-500/30 bg-purple-500/10",
};
