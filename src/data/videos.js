export const CHANNEL_URL = "https://www.youtube.com/@laserhuis";

// Videos featured on the site (from the Laserhuis YouTube channel).
export const VIDEOS = [
  { id: "oKftJAbjwFQ", short: true, title: "Unboxing the Genmitsu Kintix: Gantry Power + Galvo Speed!", tag: "Kintix" },
  { id: "5LhNnLmwZzo", title: "Genmitsu Kintix — First Engraving Tests", tag: "Kintix" },
  { id: "Es1NtSMaOe8", title: "Kintix Galvo Speed Demonstration", tag: "Kintix" },
  { id: "cZrtD-DyzjY", title: "Engraving Metal & Wood with the Kintix", tag: "Kintix" },
  { id: "u19fFi_0rz0", title: "Kintix Setup & LightBurn Walkthrough", tag: "Kintix" },
];

// Just the Kintix review videos (same set for now).
export const KINTIX_VIDEOS = VIDEOS;

export const embedUrl = (id) => `https://www.youtube.com/embed/${id}`;
export const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
