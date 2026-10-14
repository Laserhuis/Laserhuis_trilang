export const TUTORIALS = [
  {
    id: "calibrating-710w-spindle",
    title: "Calibrating 710W Spindle Speeds & Feeds for Carveco & ArtCAM",
    subtitle: "Complete guide for Makita RT0700, DeWalt DWP611, and Genmitsu 710W routers",
    laserType: "fiber",
    difficulty: "intermediate",
    author: "Laserhuis Engineering Team",
    date: "2024-10-10",
    readTime: "8 min read",
    summary: "Learn how to dial in router bit RPM, stepdowns, and feed rates to avoid burning bits and achieve smooth finishes.",
    content: "Detailed technical guide for 710W trim routers...",
  },
  {
    id: "air-assist-optimization",
    title: "Air Assist Pressure & Flow Rate Tuning for Clean Cuts",
    subtitle: "Eliminate charring and smoke residue on wood and acrylic",
    laserType: "co2",
    difficulty: "beginner",
    author: "Laserhuis Lab",
    date: "2024-09-28",
    readTime: "6 min read",
    summary: "Proper air assist flow prevents flare-ups, blows away debris, and gives razor-sharp edges.",
    content: "Complete guide to inline pumps and compressors...",
  },
];

export function getTutorial(id) {
  return TUTORIALS.find((t) => t.id === id) || TUTORIALS[0];
}
