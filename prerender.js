import fs from 'fs';
import path from 'path';
import { TUTORIALS } from './src/data/tutorials.js';
import { MATERIAL_SETTINGS } from './src/data/materialSettings.js';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('prerender.js: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

const BASE_ROUTES = [
  {
    path: '/',
    title: 'Laserhuis — Premium Laser Engraving & Cutting Hub, Material Settings & Tutorials',
    description: 'Master your laser machine with tested speed & power settings, LightBurn & EZCAD tutorials, honest machine reviews, and a curated project gallery.',
    h1: 'The knowledge hub for laser makers.',
    content: `
      <header><h1>The knowledge hub for laser makers.</h1></header>
      <main>
        <p>Laserhuis is the definitive reference database for diode, CO2, and fiber/galvo laser engraving. Discover ${TUTORIALS.length}+ step-by-step LightBurn and EZCAD tutorials, ${MATERIAL_SETTINGS.length}+ tested material speed and power settings, and unbiased hardware benchmark reviews.</p>
        <nav>
          <a href="/fiber-laser">Fiber Laser Hub</a> |
          <a href="/tutorials">Tutorials</a> |
          <a href="/materials">Material Settings</a> |
          <a href="/reviews">Machine Reviews</a> |
          <a href="/sainsmart">SainSmart</a> |
          <a href="/em-smart">EM-Smart</a> |
          <a href="/gweike">Gweike</a>
        </nav>
      </main>
    `
  },
  {
    path: '/fiber-laser',
    title: 'Fiber Laser Engraving Guide: MOPA Settings, Metal Parameters & Lenses | Laserhuis',
    description: 'Complete technical reference for 1064nm Fiber and MOPA galvo lasers. Tested speed, power, frequency (kHz) and pulse-width (ns) parameters for metals.',
    h1: 'Fiber Laser Engraving Guide: Machines, MOPA Settings & Metal Parameters',
    content: `
      <header>
        <p>1064nm Fiber & MOPA Galvo Technical Reference</p>
        <h1>Fiber Laser Engraving Guide: Machines, MOPA Settings & Metal Parameters</h1>
      </header>
      <main>
        <p>The authoritative technical reference for 1064nm Fiber and MOPA galvo laser engravers. Master speed, power, frequency (kHz), and pulse-width (ns) parameters for stainless steel, brass, titanium, and aluminum.</p>
      </main>
    `
  },
  {
    path: '/tutorials',
    title: 'Step-by-Step Laser Engraving & Cutting Tutorials | Laserhuis',
    description: 'Learn professional laser engraving and cutting techniques. Masterclass guides for LightBurn, EZCAD, diode, CO2, and fiber laser systems.',
    h1: 'Step-by-Step Laser Engraving & Cutting Tutorials',
    content: `
      <header><h1>Step-by-Step Laser Engraving & Cutting Tutorials</h1></header>
      <main>
        <p>${TUTORIALS.length}+ practical laser projects across diode, CO2 and fiber workflows. Filter live and open any card for full step-by-step instructions.</p>
      </main>
    `
  },
  {
    path: '/materials',
    title: 'Laser Speed & Power Settings Library | Laserhuis',
    description: 'Access the ultimate parameter database for wood, acrylic, slate, leather, metal, and glass. High-quality LightBurn and EZCAD cutting & engraving settings.',
    h1: 'Laser Speed & Power Settings Library',
    content: `
      <header><h1>Laser Speed & Power Settings Library</h1></header>
      <main>
        <p>Access ${MATERIAL_SETTINGS.length}+ structured starting parameters by laser type and substrate. Tested LightBurn and EZCAD settings for wood, acrylic, slate, leather, stainless steel, and titanium.</p>
      </main>
    `
  },
  {
    path: '/reviews',
    title: 'Honest Laser Machine Reviews & Hardware Guides | Laserhuis',
    description: 'Looking for a new diode, CO2, or fiber laser? Read our exhaustive, unbiased real-world reviews of the latest laser cutters and engraving machines.',
    h1: 'Honest Laser Machine Reviews & Hardware Guides',
    content: `
      <header><h1>Honest Laser Machine Reviews & Hardware Guides</h1></header>
      <main>
        <p>Hands-on bench testing, real cutting speeds, focal optics inspection, and software compatibility across top laser brands including xTool, OMTech, Sculpfun, Genmitsu, Gweike, and EM-Smart.</p>
      </main>
    `
  },
  {
    path: '/reviews/kintix',
    title: 'Genmitsu Kintix Hybrid Galvo Laser Detailed Review | Laserhuis',
    description: 'Our deep-dive review of the Genmitsu Kintix galvo laser. We test speed, power accuracy, build quality, rotary capabilities, and LightBurn compatibility.',
    h1: 'Genmitsu Kintix 10W Galvo Laser Review',
    content: `<header><h1>Genmitsu Kintix 10W Galvo Laser Detailed Review</h1></header><main><p>Genmitsu Kintix is a revolutionary hybrid galvo laser firing a 455nm blue diode through high-speed galvo mirrors mounted on a motorized Z-axis, achieving up to 90,000 mm/min marking speeds.</p></main>`
  },
  {
    path: '/em-smart',
    title: 'EM-Smart Fiber & Dual-Source Desktop Laser Machines | Laserhuis',
    description: 'Discover EM-Smart 20W/30W Fiber Lasers, DualSE Fiber+Diode, and AXI True 3D Desktop engravers. Compact galvo laser engraving systems for metals.',
    h1: 'EM-Smart Fiber & Dual-Source Desktop Laser Machines',
    content: `<header><h1>EM-Smart Fiber & Dual-Source Desktop Laser Machines</h1></header><main><p>Explore EM-Smart Basic 20W/30W Fiber engravers, DualSE Fiber+Diode systems, and AXI True 3D Desktop lasers engineered for jewelry, watchmaking, and metal serialization.</p></main>`
  },
  {
    path: '/gweike',
    title: 'Gweike Cloud Lasers — G2 Max 50W Fiber, G3 CO2 & G6 Split | Laserhuis',
    description: 'Explore Gweike Cloud laser machines including G2 Max 50W Fiber Galvo, G3 Basic 55W CO2 cutter, M-Core, and G6 Split MOPA Fiber engravers.',
    h1: 'Gweike Cloud Laser Machines Showcase',
    content: `<header><h1>Gweike Cloud Laser Machines Showcase</h1></header><main><p>Full lineup overview of Gweike Cloud: G2 Max 50W Galvo Fiber, G3 Basic 55W CO2 cutter with 5MP vision, M-Core modular unit, and G6 Split MOPA industrial tower.</p></main>`
  },
  {
    path: '/sainsmart',
    title: 'SainSmart Genmitsu CNC Routers, Bits & 3D Printers Review | Laserhuis',
    description: 'Expert hands-on review of SainSmart Genmitsu CNC routers (including PROVerXL 4030S with 710W spindle), carbide bits, and 3D printers like Ender-3 V3 SE.',
    h1: 'SainSmart Genmitsu CNC Routers, Bits & 3D Printers',
    content: `<header><h1>SainSmart Genmitsu CNC Routers, Bits & 3D Printers</h1></header><main><p>In-depth hardware testing and reviews of SainSmart Genmitsu PROVerXL 4030S CNC router kit, 3018-PROVer, laser assist pumps, carbide endmills, and Ender-3 V3 SE 3D printers.</p></main>`
  },
  {
    path: '/brands',
    title: 'Laser Engraving Manufacturers & Brands | Laserhuis',
    description: 'Explore leading laser engraving manufacturers across Diode, CO2, Fiber, and MOPA technologies. Compare brand specs, hands-on reviews, and machine guides.',
    h1: 'Laser Engraving Manufacturers & Brands',
    content: `<header><h1>Laser Engraving Manufacturers & Brands</h1></header><main><p>Welcome to the Laserhuis reference directory of laser engraving manufacturers and laser engraver brands.</p></main>`
  },
  {
    path: '/about',
    title: 'About Laserhuis — Editorial Approach & Technical Testing Methodology',
    description: 'Meet the engineering team behind Laserhuis. Read our editorial policy, review methodology, affiliate disclosures, and laser safety rules.',
    h1: 'About Laserhuis — Editorial Approach & Testing Standards',
    content: `<header><h1>About Laserhuis — Editorial Approach & Testing Standards</h1></header><main><p>Laserhuis is the definitive digital reference hub for laser engraving, cutting, and industrial marking.</p></main>`
  }
];

// Dynamically generate individual tutorial routes for published dataset
const TUTORIAL_ROUTES = (TUTORIALS || []).map((t) => {
  const canonicalUrl = `https://laserhuis.com/tutorials/${t.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": t.title,
    "description": t.summary,
    "supply": (t.materials || []).map((m) => ({ "@type": "HowToSupply", "name": m })),
    "tool": (t.tools || []).map((tool) => ({ "@type": "HowToTool", "name": tool })),
    "step": (t.steps || []).map((s, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": typeof s === 'string' ? `Step ${idx + 1}` : s.title,
      "text": typeof s === 'string' ? s : (s.detail || s.action || s.title)
    }))
  };

  const stepsHtml = (t.steps || []).map((s, i) => {
    const title = typeof s === 'string' ? `Step ${i + 1}` : s.title;
    const detail = typeof s === 'string' ? s : (s.detail || '');
    return `
      <section>
        <h3>Step ${i + 1}: ${title}</h3>
        ${s.action ? `<p><strong>ACTION:</strong> ${s.action}</p>` : ''}
        ${s.why ? `<p><strong>WHY:</strong> ${s.why}</p>` : ''}
        ${detail ? `<p>${detail}</p>` : ''}
        ${s.lookFor ? `<p><strong>LOOK FOR:</strong> ${s.lookFor}</p>` : ''}
        ${s.possibleFailure ? `<p><strong>FAILURE MODE:</strong> ${s.possibleFailure}</p>` : ''}
      </section>
    `;
  }).join('');

  let paramsHtml = '';
  if (t.exactParameters?.parameterProfiles) {
    const mopa = t.exactParameters.parameterProfiles.mopa;
    const qSwitched = t.exactParameters.parameterProfiles.qSwitched;
    paramsHtml = `
      <section>
        <h2>Software & Laser Settings</h2>
        ${mopa ? `<article><h3>MOPA Fiber Source Profile</h3><p><strong>Power:</strong> ${mopa.power} | <strong>Speed:</strong> ${mopa.speed} | <strong>Frequency:</strong> ${mopa.frequency} | <strong>Pulse Width:</strong> ${mopa.pulseWidth}</p></article>` : ''}
        ${qSwitched ? `<article><h3>Conventional Q-Switched Fiber Source Profile</h3><p><strong>Power:</strong> ${qSwitched.power} | <strong>Speed:</strong> ${qSwitched.speed} | <strong>Frequency:</strong> ${qSwitched.frequency} | <strong>Pulse Width:</strong> N/A (Fixed hardware pulse)</p></article>` : ''}
      </section>
    `;
  } else if (t.exactParameters) {
    paramsHtml = `
      <section>
        <h2>Software & Laser Settings</h2>
        <p><strong>Power:</strong> ${t.exactParameters.power || 'Reference'}</p>
        <p><strong>Speed:</strong> ${t.exactParameters.speed || 'Reference'}</p>
        <p><strong>Passes:</strong> ${t.exactParameters.passes || '1'}</p>
        <p><strong>Line Interval:</strong> ${t.exactParameters.lineInterval || '0.10mm (~254 LPI)'}</p>
        <p><strong>Provenance:</strong> ${t.exactParameters.provenance || 'REFERENCE_STARTING_POINT'}</p>
      </section>
    `;
  }

  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;

  return {
    path: `/tutorials/${t.id}`,
    title: `${t.title} | Laserhuis Tutorial`,
    description: t.summary || `Step-by-step technical tutorial for ${t.title} on Laserhuis.`,
    h1: t.title,
    jsonLdScript,
    content: `
      <header>
        <p>Laserhuis Technical Tutorial Library — ${t.category || 'Laser Project'}</p>
        <h1>${t.title}</h1>
      </header>
      <main>
        <p>${t.summary || ''}</p>
        ${paramsHtml}
        ${t.materialSelection ? `<section><h2>Material Selection & Preparation</h2><p>${t.materialSelection}</p></section>` : ''}
        ${t.designPrep ? `<section><h2>Design & Software Preparation</h2><p>${t.designPrep}</p></section>` : ''}
        ${t.laserSetup ? `<section><h2>Laser Machine Setup</h2><p>${t.laserSetup}</p></section>` : ''}
        <section>
          <h2>Step-by-Step Walkthrough</h2>
          ${stepsHtml}
        </section>
        ${t.safety ? `<section><h2>Safety & Exhaust Protocol</h2><p>${t.safety}</p></section>` : ''}
      </main>
    `
  };
});

const ALL_ROUTES = [...BASE_ROUTES, ...TUTORIAL_ROUTES];
let generatedCount = 0;

for (const route of ALL_ROUTES) {
  const canonicalUrl = `https://laserhuis.com${route.path === '/' ? '' : route.path}`;

  let html = templateHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);

  if (route.jsonLdScript) {
    html = html.replace('</head>', `${route.jsonLdScript}\n</head>`);
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${route.content}</div>`);

  if (route.path === '/') {
    fs.writeFileSync(TEMPLATE_PATH, html, 'utf-8');
    generatedCount++;
  } else {
    const routeDir = path.join(DIST_DIR, route.path.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
    generatedCount++;
  }
}

console.log(`prerender.js: Successfully pre-rendered static HTML for ${generatedCount} canonical routes into /dist!`);
