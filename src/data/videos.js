export const CHANNEL_URL = "https://www.youtube.com/@laserhuis";

export const PROVERXL_VIDEO_DATA = {
  id: "_K587zM8LBg",
  title: "Genmitsu PROVerXL 4030S CNC Router Kit — Unboxing, Assembly & 3D Carving Test",
  tag: "PROVerXL 4030S",
  intro: "Welcome to our comprehensive unboxing and assembly of the Genmitsu PROVerXL 4030S CNC Router Kit! 🛠️ In this video, we take you through the entire process step-by-step: from the heavy, securely packed box to the impressive first test where we carve a beautiful 3D chameleon out of wood.",
  body: "The PROVerXL 4030S immediately stands out with its robust blue anodized aluminum parts and the convenient, partly pre-assembled base. Whether you are a beginner in the CNC world or an experienced maker, this machine offers unprecedented precision and stability for all your woodworking and DIY projects. Watch how easy the installation is and be amazed by the fantastic details of the final result! 🦎✨",
  officialUrl: "https://www.sainsmart.com/products/proverxl-4030s?_gl=1*1qkeulm*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw8JPVBhD-ARIsAO691sHZmy_BU4FLAEubmUWX9Vzqy7klcQY-MiHMArAIM4Z5BdNGpU_98TYaAip1EALw_wcB&gbraid=0AAAAADMWa4LtDZAS1VVmK1aPlphllf_WX",
  laserhuisUrl: "https://www.laserhuis.com",
  chapters: [
    { time: "0:00", seconds: 0, title: "Introduction & Unboxing of the PROVerXL 4030S" },
    { time: "0:38", seconds: 38, title: "What's in the box? (Parts & Accessories)" },
    { time: "0:54", seconds: 54, title: "Assembly: Frame, Stepper Motors & Drag Chains" },
    { time: "2:01", seconds: 121, title: "The Fully Assembled CNC Machine" },
    { time: "2:13", seconds: 133, title: "First Carving Test: 3D Chameleon in Wood!" },
    { time: "2:41", seconds: 161, title: "Conclusion & Outro" },
  ],
  callToAction: "Did you find this video helpful? Please give it a 👍 Thumbs up, leave a comment with your questions about this CNC machine, and don't forget to Subscribe to our channel (hit the bell icon!) so you never miss a new unboxing or tutorial.",
  tags: [
    "Genmitsu", "PROVerXL 4030S", "Genmitsu PROVerXL 4030S", "SainSmart CNC",
    "CNC Router", "CNC Machine", "CNC Milling", "Unboxing CNC", "CNC Setup",
    "Woodworking", "3D Carving", "Laserhuis", "DIY Woodworking", "MakerSpace",
    "CNC for beginners", "Desktop CNC", "Wood Carving"
  ],
  hashtags: [
    "#Genmitsu", "#PROVerXL4030S", "#CNCRouter", "#SainSmart", "#CNC",
    "#Woodworking", "#Laserhuis", "#Unboxing", "#DIY", "#MakerSpace", "#CNCCarving"
  ]
};

// Videos featured on the site (from the Laserhuis YouTube channel).
export const VIDEOS = [
  {
    id: "_K587zM8LBg",
    featured: true,
    title: "Genmitsu PROVerXL 4030S CNC Router Kit — Unboxing, Assembly & 3D Carving Test",
    tag: "PROVerXL 4030S",
    description: "Comprehensive unboxing, step-by-step assembly, and the impressive first 3D chameleon carving test in wood.",
    ...PROVERXL_VIDEO_DATA
  },
  { id: "oKftJAbjwFQ", short: true, title: "Unboxing the Genmitsu Kintix: Gantry Power + Galvo Speed!", tag: "Kintix" },
  { id: "5LhNnLmwZzo", title: "Genmitsu Kintix — First Engraving Tests", tag: "Kintix" },
  { id: "Es1NtSMaOe8", title: "Kintix Galvo Speed Demonstration", tag: "Kintix" },
  { id: "cZrtD-DyzjY", title: "Engraving Metal & Wood with the Kintix", tag: "Kintix" },
  { id: "u19fFi_0rz0", title: "Kintix Setup & LightBurn Walkthrough", tag: "Kintix" },
];

// Just the Kintix review videos.
export const KINTIX_VIDEOS = VIDEOS.filter((v) => v.tag === "Kintix");

export const embedUrl = (id) => `https://www.youtube.com/embed/${id}`;
export const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
