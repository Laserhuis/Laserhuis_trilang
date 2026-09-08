import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO_MAP = {
  "/": {
    title: "Laserhuis — Premium Laser Engraving & Cutting Hub, Material Settings & Tutorials",
    description: "Master your laser machine with tested speed & power settings, 50+ step-by-step LightBurn & EZCAD tutorials, honest machine reviews, and a curated project gallery.",
    keywords: "laser engraving, laser cutting, LightBurn settings, diode laser, CO2 laser, fiber laser, EZCAD, laserhuis, material speed power database, laser tutorials"
  },
  "/tutorials": {
    title: "Step-by-Step Laser Engraving & Cutting Tutorials | Laserhuis",
    description: "Learn professional laser engraving and cutting techniques. Over 50+ masterclass guides for LightBurn, EZCAD, diode, CO2, and fiber laser systems.",
    keywords: "laser tutorials, LightBurn guides, laser engraving how-to, laser calibration, CO2 laser cutting"
  },
  "/reviews": {
    title: "Honest Laser Machine Reviews & Hardware Guides | Laserhuis",
    description: "Looking for a new diode, CO2, or fiber laser? Read our exhaustive, unbiased real-world reviews of the latest laser cutters and engraving machines.",
    keywords: "laser reviews, diode laser review, fiber laser engraver, best laser cutter, xTool review, Creality laser"
  },
  "/reviews/kintix": {
    title: "Kintix Laser Engraver Detailed Expert Review | Laserhuis",
    description: "Our deep-dive review of the Kintix laser engraver. We test speed, power accuracy, build quality, rotary capabilities, and LightBurn compatibility.",
    keywords: "Kintix review, Kintix laser engraver, fiber laser engraving, budget fiber laser, LightBurn rotary setup"
  },
  "/materials": {
    title: "Laser Speed & Power Settings Library | Laserhuis",
    description: "Access the ultimate parameter database for wood, acrylic, slate, leather, metal, and glass. High-quality LightBurn and EZCAD cutting & engraving settings.",
    keywords: "laser speed and power settings, LightBurn material settings, cutting charts, wood engraving settings, acrylic cutting"
  },
  "/gallery": {
    title: "Stunning Laser Engraving Project Inspiration Gallery | Laserhuis",
    description: "Browse premium, high-resolution photos of finished laser projects. Get design inspiration for custom woodworking, slate coasters, leather gifts, and acrylic signage.",
    keywords: "laser project ideas, laser engraving gallery, laser cut designs, custom wood gifts, slate coaster engraving"
  },
  "/videos": {
    title: "Masterclass Laser Engraving Video Guides | Laserhuis",
    description: "Watch expert video tutorials covering alignment, deep metal engraving, material testing, rotary jigs, and LightBurn file preparation.",
    keywords: "laser engraving video, LightBurn tutorial video, laser alignment guide, rotary laser setup"
  },
  "/brands": {
    title: "Top Laser Engraver Brands & Comparison | Laserhuis",
    description: "Compare the leading manufacturers of diode, CO2, and fiber lasers. See how xTool, Ortur, Sculptfun, Creality, and OMTech stack up.",
    keywords: "laser brands, best laser companies, xTool vs Ortur, OMTech CO2, laser cutter manufacturers"
  },
  "/about": {
    title: "About Laserhuis — The Laser Engraving Reference Hub",
    description: "Meet the makers and experts behind Laserhuis. Our mission is to democratize high-precision laser crafting knowledge and make setup parameters accessible to all.",
    keywords: "about laserhuis, laser engineering team, laser engraving experts"
  },
  "/compare": {
    title: "Interactive Laser Machine Comparison Tool | Laserhuis",
    description: "Side-by-side technical comparison of modern laser engravers. Filter and compare power outputs, engraving area, laser type, and prices before you buy.",
    keywords: "compare laser engravers, laser cutter comparison tool, laser machine specs"
  },
  "/favourites": {
    title: "Your Saved Laser Settings & Tutorials | Laserhuis",
    description: "Quickly access your personalized favorites list of material speed/power charts, step-by-step tutorials, and hardware reviews.",
    keywords: "saved settings, favorite laser tutorials, custom materials database"
  },
  "/sainsmart": {
    title: "SainSmart Genmitsu CNC Routers, Bits & 3D Printers Review | Laserhuis",
    description: "Expert hands-on review of SainSmart Genmitsu CNC routers (including the PROVerXL 4030S with 710W spindle), premium carbide bits, and 3D printers like the Ender-3 V3 SE. Discover setup guides, calibration tips, and direct deals.",
    keywords: "SainSmart Genmitsu, CNC Router, Genmitsu 4030S review, 3018-PROVer, CNC bits, laser assist pump, 3D printers, Ender-3 V3 SE"
  }
};

export function PageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Exact or fallback matching
    const currentConfig = SEO_MAP[pathname] || SEO_MAP["/"];
    const pageTitle = currentConfig.title;
    const pageDescription = currentConfig.description;
    const pageKeywords = currentConfig.keywords;
    const canonicalUrl = `https://laserhuis.com${pathname === "/" ? "" : pathname}`;

    // 1. Title
    document.title = pageTitle;

    // 2. Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = pageDescription;
      document.head.appendChild(meta);
    }

    // 3. Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", pageKeywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = pageKeywords;
      document.head.appendChild(meta);
    }

    // 4. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    // 5. Open Graph url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    // 6. Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    // 7. Open Graph description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDescription);

    // 8. Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);

    // 9. Twitter description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", pageDescription);

  }, [pathname]);

  return null;
}
