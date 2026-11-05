import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const SEO_MAP = {
  "/": {
    title: "Laserhuis — Premium Laser Engraving & Cutting Hub, Material Settings & Tutorials",
    description: "Master your laser machine with tested speed & power settings, LightBurn & EZCAD tutorials, honest machine reviews, and a curated project gallery.",
    keywords: "laser engraving, laser cutting, LightBurn settings, diode laser, CO2 laser, fiber laser, EZCAD, laserhuis, material speed power database, laser tutorials"
  },
  "/fiber-laser": {
    title: "Fiber Laser Engraving Guide: MOPA Settings, Metal Parameters & Lenses | Laserhuis",
    description: "Complete technical reference for 1064nm Fiber and MOPA galvo lasers. Tested speed, power, frequency (kHz) and pulse-width (ns) parameters for metals.",
    keywords: "fiber laser settings, MOPA laser color marking, fiber laser engraving stainless steel, galvo laser scanner, LightBurn galvo, EZCAD settings"
  },
  "/tutorials": {
    title: "Step-by-Step Laser Engraving & Cutting Tutorials | Laserhuis",
    description: "Learn professional laser engraving and cutting techniques. Masterclass guides for LightBurn, EZCAD, diode, CO2, and fiber laser systems.",
    keywords: "laser tutorials, LightBurn guides, laser engraving how-to, laser calibration, CO2 laser cutting"
  },
  "/reviews": {
    title: "Honest Laser Machine Reviews & Hardware Guides | Laserhuis",
    description: "Looking for a new diode, CO2, or fiber laser? Read our exhaustive, unbiased real-world reviews of the latest laser cutters and engraving machines.",
    keywords: "laser reviews, diode laser review, fiber laser engraver, best laser cutter, xTool review, Creality laser"
  },
  "/reviews/kintix": {
    title: "Genmitsu Kintix Hybrid Galvo Laser Detailed Review | Laserhuis",
    description: "Our deep-dive review of the Genmitsu Kintix galvo laser. We test speed, power accuracy, build quality, rotary capabilities, and LightBurn compatibility.",
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
    title: "Top Laser Engraver Brands & Manufacturer Partnerships | Laserhuis",
    description: "Compare leading manufacturers of diode, CO2, and fiber lasers. See how xTool, Ortur, Sculpfun, OMTech, Gweike, and EM-Smart stack up.",
    keywords: "laser brands, best laser companies, xTool vs Ortur, OMTech CO2, laser cutter manufacturers"
  },
  "/about": {
    title: "About Laserhuis — Editorial Approach & Technical Testing Methodology",
    description: "Meet the engineering team behind Laserhuis. Read our editorial policy, review methodology, affiliate disclosures, and laser safety rules.",
    keywords: "about laserhuis, laser engineering team, editorial policy, review methodology, laser safety guidelines"
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
    description: "Expert hands-on review of SainSmart Genmitsu CNC routers (including PROVerXL 4030S with 710W spindle), carbide bits, and 3D printers like Ender-3 V3 SE.",
    keywords: "SainSmart Genmitsu, CNC Router, Genmitsu 4030S review, 3018-PROVer, CNC bits, laser assist pump, 3D printers"
  },
  "/sainsmart/cnc-calculator": {
    title: "SainSmart Genmitsu CNC Feeds & Speeds Calculator | Laserhuis",
    description: "Calculate optimal CNC feed rates, spindle RPM, chip load, stepover, and depth of cut for Genmitsu CNC routers and carbide endmills.",
    keywords: "CNC feeds and speeds calculator, Genmitsu CNC calculator, chip load calculator, endmill stepover"
  },
  "/em-smart": {
    title: "EM-Smart Fiber & Dual-Source Desktop Laser Machines | Laserhuis",
    description: "Discover EM-Smart 20W/30W Fiber Lasers, DualSE Fiber+Diode, and AXI True 3D Desktop engravers. Compact galvo laser engraving systems for metals.",
    keywords: "EM-Smart laser, EM-Smart Basic 20W, EM-Smart 30W fiber, EM-Smart DualSE, EM-Smart AXI 3D, fiber laser engraver"
  },
  "/gweike": {
    title: "Gweike Cloud Lasers — G2 Max 50W Fiber, G3 CO2 & G6 Split | Laserhuis",
    description: "Explore Gweike Cloud laser machines including G2 Max 50W Fiber Galvo, G3 Basic 55W CO2 cutter, M-Core, and G6 Split MOPA Fiber engravers.",
    keywords: "Gweike Cloud, Gweike G2 Max, Gweike G3 Basic, Gweike M-Core, Gweike G6 Split, CO2 laser cutter, galvo fiber laser"
  }
};

export function PageSEO() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Synchronize HTML Language Attribute
    document.documentElement.lang = language || "en";

    // 2. Base Path Matching
    const basePath = pathname.startsWith("/fiber-laser") ? "/fiber-laser" : pathname;
    const currentConfig = SEO_MAP[basePath] || SEO_MAP[pathname] || SEO_MAP["/"];
    const pageTitle = currentConfig.title;
    const pageDescription = currentConfig.description;
    const pageKeywords = currentConfig.keywords;
    const canonicalUrl = `https://laserhuis.com${pathname === "/" ? "" : pathname}`;

    // 3. Document Title
    document.title = pageTitle;

    // 4. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescription);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = pageDescription;
      document.head.appendChild(metaDescription);
    }

    // 5. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", pageKeywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      metaKeywords.content = pageKeywords;
      document.head.appendChild(metaKeywords);
    }

    // 6. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    // 7. Clean existing redundant hreflang tags if present to prevent Google Search Console duplicate errors
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // 8. Open Graph & Twitter Social Metadata
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDescription);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", pageDescription);

    // 9. Structured Data (JSON-LD)
    let scriptTag = document.getElementById("website-schema-jsonld");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "website-schema-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const websiteSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://laserhuis.com/#website",
          "url": "https://laserhuis.com",
          "name": "Laserhuis",
          "description": "Technical reference and material settings database for laser engraving and cutting.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://laserhuis.com/tutorials?search={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": language || "en"
        },
        {
          "@type": "Organization",
          "@id": "https://laserhuis.com/#organization",
          "name": "Laserhuis",
          "url": "https://laserhuis.com",
          "logo": "https://laserhuis.com/logo.png",
          "sameAs": [
            "https://dithering.laserhuis.com",
            "https://facebook.com/laserhuis",
            "https://youtube.com/@laserhuis"
          ]
        }
      ]
    };

    scriptTag.text = JSON.stringify(websiteSchema);

  }, [pathname, language]);

  return null;
}
