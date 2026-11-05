import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('prerender.js: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

const ROUTES = [
  {
    path: '/',
    title: 'Laserhuis — Premium Laser Engraving & Cutting Hub, Material Settings & Tutorials',
    description: 'Master your laser machine with tested speed & power settings, LightBurn & EZCAD tutorials, honest machine reviews, and a curated project gallery.',
    h1: 'The knowledge hub for laser makers.',
    content: `
      <header><h1>The knowledge hub for laser makers.</h1></header>
      <main>
        <p>Laserhuis is the definitive reference database for diode, CO2, and fiber/galvo laser engraving. Discover 30+ step-by-step LightBurn and EZCAD tutorials, 28+ tested material speed and power settings, and unbiased hardware benchmark reviews.</p>
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
        <section>
          <h2>MOPA vs Q-Switched Fiber Lasers</h2>
          <p>MOPA lasers allow independent tuning of pulse frequency and pulse duration (1ns–500ns), enabling vibrant color marking on stainless steel and titanium, crisp black annealing without surface damage, and clean dark marking on plastics.</p>
        </section>
        <section>
          <h2>F-Theta Optic Lens Guide</h2>
          <ul>
            <li><strong>F160 Lens (110x110 mm):</strong> Highest power density for deep relief carving and coin minting.</li>
            <li><strong>F254 Lens (175x175 mm):</strong> Balanced all-rounder for firearm parts, tumblers, and general marking.</li>
            <li><strong>F430 Lens (300x300 mm):</strong> Large format surface marking for high wattage (50W+) sources.</li>
          </ul>
        </section>
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
        <p>32+ practical laser projects across diode, CO2 and fiber workflows. Filter live and open any card for full step-by-step instructions.</p>
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
        <p>Access 28+ structured starting parameters by laser type and substrate. Tested LightBurn and EZCAD settings for wood, acrylic, slate, leather, stainless steel, and titanium.</p>
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
    content: `
      <header><h1>Genmitsu Kintix 10W Galvo Laser Detailed Review</h1></header>
      <main>
        <p>Genmitsu Kintix is a revolutionary hybrid galvo laser firing a 455nm blue diode through high-speed galvo mirrors mounted on a motorized Z-axis, achieving up to 90,000 mm/min marking speeds.</p>
      </main>
    `
  },
  {
    path: '/reviews/genmitsu-kintix-5w',
    title: 'Genmitsu Kintix 5W Galvo Laser Overview & Benchmarks | Laserhuis',
    description: 'Technical overview and spec review of the Genmitsu Kintix 5W hybrid galvo laser.',
    h1: 'Genmitsu Kintix 5W Galvo Laser Overview',
    content: `<header><h1>Genmitsu Kintix 5W Galvo Laser Overview</h1></header><main><p>The 5W Kintix delivers hybrid-galvo speed, motorized focus, and Class 1 safety enclosure at an accessible price point.</p></main>`
  },
  {
    path: '/reviews/xtool-d1-pro-20w',
    title: 'xTool D1 Pro 20W Desktop Diode Laser Review & Specs | Laserhuis',
    description: 'Hardware specification review of the xTool D1 Pro 20W quad-diode laser engraver and cutter.',
    h1: 'xTool D1 Pro 20W Laser Review',
    content: `<header><h1>xTool D1 Pro 20W Laser Review</h1></header><main><p>Quad-diode optical laser head with solid steel-wheeled frame for 1-pass cutting on 3mm plywood.</p></main>`
  },
  {
    path: '/reviews/sculpfun-s30-ultra-33w',
    title: 'Sculpfun S30 Ultra 33W Diode Laser Review & Benchmarks | Laserhuis',
    description: 'Benchmark overview of the Sculpfun S30 Ultra 33W desktop diode laser with 600x600mm work bed.',
    h1: 'Sculpfun S30 Ultra 33W Laser Review',
    content: `<header><h1>Sculpfun S30 Ultra 33W Laser Review</h1></header><main><p>33W optical diode laser with industrial linear X-rail and automated air assist valve.</p></main>`
  },
  {
    path: '/reviews/omtech-polar-50w-co2',
    title: 'OMTech Polar 50W Desktop CO2 Laser Review | Laserhuis',
    description: 'Review and specifications of the OMTech Polar 50W enclosed desktop CO2 laser cutter.',
    h1: 'OMTech Polar 50W CO2 Laser Review',
    content: `<header><h1>OMTech Polar 50W CO2 Laser Review</h1></header><main><p>Turnkey enclosed CO2 laser with integrated 5MP lid camera and built-in water chiller.</p></main>`
  },
  {
    path: '/reviews/thunder-laser-nova-35',
    title: 'Thunder Laser Nova 35 80W CO2 Laser Overview | Laserhuis',
    description: 'Industrial specification review of the Thunder Laser Nova 35 (80W RECI tube) CO2 cutter.',
    h1: 'Thunder Laser Nova 35 CO2 Laser Review',
    content: `<header><h1>Thunder Laser Nova 35 CO2 Laser Review</h1></header><main><p>Industrial benchmark featuring hybrid servo drives and front/rear pass-through doors.</p></main>`
  },
  {
    path: '/reviews/omtech-30w-fiber-galvo',
    title: 'OMTech 30W Fiber Galvo Marking Laser Review | Laserhuis',
    description: 'Technical spec overview of OMTech 30W Raycus Fiber Galvo laser engraver.',
    h1: 'OMTech 30W Fiber Galvo Marking Laser Review',
    content: `<header><h1>OMTech 30W Fiber Galvo Marking Laser Review</h1></header><main><p>7,000 mm/sec galvo scanners for high-speed metal marking, serialization, and deep coin relief.</p></main>`
  },
  {
    path: '/reviews/acmer-p2-33w',
    title: 'Acmer P2 33W Dual Linear Rail Diode Laser Review | Laserhuis',
    description: 'Review of the Acmer P2 33W desktop diode laser built on dual linear guide rails.',
    h1: 'Acmer P2 33W Diode Laser Review',
    content: `<header><h1>Acmer P2 33W Diode Laser Review</h1></header><main><p>Dual linear guide rails with a quiet 30 L/min automatic air assist pump included.</p></main>`
  },
  {
    path: '/em-smart',
    title: 'EM-Smart Fiber & Dual-Source Desktop Laser Machines | Laserhuis',
    description: 'Discover EM-Smart 20W/30W Fiber Lasers, DualSE Fiber+Diode, and AXI True 3D Desktop engravers. Compact galvo laser engraving systems for metals.',
    h1: 'EM-Smart Fiber & Dual-Source Desktop Laser Machines',
    content: `
      <header><h1>EM-Smart Fiber & Dual-Source Desktop Laser Machines</h1></header>
      <main>
        <p>Explore EM-Smart Basic 20W/30W Fiber engravers, DualSE Fiber+Diode systems, and AXI True 3D Desktop lasers engineered for jewelry, watchmaking, and metal serialization.</p>
      </main>
    `
  },
  {
    path: '/gweike',
    title: 'Gweike Cloud Lasers — G2 Max 50W Fiber, G3 CO2 & G6 Split | Laserhuis',
    description: 'Explore Gweike Cloud laser machines including G2 Max 50W Fiber Galvo, G3 Basic 55W CO2 cutter, M-Core, and G6 Split MOPA Fiber engravers.',
    h1: 'Gweike Cloud Laser Machines Showcase',
    content: `
      <header><h1>Gweike Cloud Laser Machines Showcase</h1></header>
      <main>
        <p>Full lineup overview of Gweike Cloud: G2 Max 50W Galvo Fiber, G3 Basic 55W CO2 cutter with 5MP vision, M-Core modular unit, and G6 Split MOPA industrial tower.</p>
      </main>
    `
  },
  {
    path: '/sainsmart',
    title: 'SainSmart Genmitsu CNC Routers, Bits & 3D Printers Review | Laserhuis',
    description: 'Expert hands-on review of SainSmart Genmitsu CNC routers (including PROVerXL 4030S with 710W spindle), carbide bits, and 3D printers like Ender-3 V3 SE.',
    h1: 'SainSmart Genmitsu CNC Routers, Bits & 3D Printers',
    content: `
      <header><h1>SainSmart Genmitsu CNC Routers, Bits & 3D Printers</h1></header>
      <main>
        <p>In-depth hardware testing and reviews of SainSmart Genmitsu PROVerXL 4030S CNC router kit, 3018-PROVer, laser assist pumps, carbide endmills, and Ender-3 V3 SE 3D printers.</p>
      </main>
    `
  },
  {
    path: '/sainsmart/cnc-calculator',
    title: 'SainSmart Genmitsu CNC Feeds & Speeds Calculator | Laserhuis',
    description: 'Calculate optimal CNC feed rates, spindle RPM, chip load, stepover, and depth of cut for Genmitsu CNC routers and carbide endmills.',
    h1: 'SainSmart Genmitsu CNC Feeds & Speeds Calculator',
    content: `
      <header><h1>SainSmart Genmitsu CNC Feeds & Speeds Calculator</h1></header>
      <main>
        <p>Interactive tool to calculate spindle RPM, feed rates (mm/min), chip load (mm/tooth), and stepover percentage for woodworking and aluminum milling on Genmitsu CNC machines.</p>
      </main>
    `
  },
  {
    path: '/brands',
    title: 'Laser Engraving Manufacturers & Brands | Laserhuis',
    description: 'Explore leading laser engraving manufacturers across Diode, CO2, Fiber, and MOPA technologies. Compare brand specs, hands-on reviews, and machine guides.',
    h1: 'Laser Engraving Manufacturers & Brands',
    content: `
      <header><h1>Laser Engraving Manufacturers & Brands</h1></header>
      <main>
        <p>Welcome to the Laserhuis reference directory of laser engraving manufacturers and laser engraver brands. Explore diode laser manufacturers, CO2 laser manufacturers, Fiber laser manufacturers, and MOPA laser manufacturers with verified brand specs, review links, and technical machine resources.</p>

        <section>
          <h2>Fiber and MOPA Laser Manufacturers</h2>
          <ul>
            <li><strong>Genmitsu (SainSmart):</strong> Hybrid galvo systems (Kintix 10W) and desktop engravers. <a href="/sainsmart">View SainSmart Hub</a> | <a href="/reviews/kintix">Kintix 10W Review</a></li>
            <li><strong>EM-Smart:</strong> Portable desktop fiber galvo engravers and dual-source systems. <a href="/em-smart">View EM-Smart Hub</a></li>
            <li><strong>Gweike Cloud:</strong> High-speed galvo fiber (G2 Max 50W) and MOPA fiber split systems. <a href="/gweike">View Gweike Hub</a></li>
            <li><strong>OMTech Laser:</strong> Raycus fiber galvo workstations (30W Fiber Galvo). <a href="/reviews/omtech-30w-fiber-galvo">OMTech 30W Fiber Review</a></li>
            <li><strong>ComMarker:</strong> MOPA and fiber galvo lasers for deep metal relief and color marking.</li>
            <li><strong>Cloudray:</strong> Turnkey LiteMarker fiber galvo machines and laser optics.</li>
            <li><strong>Monport Laser:</strong> Entry-level galvo fiber marking systems.</li>
            <li><strong>Epilog Laser & Trotec Laser:</strong> Industrial commercial CO2 and fiber laser systems.</li>
          </ul>
        </section>

        <section>
          <h2>CO2 Laser Manufacturers</h2>
          <ul>
            <li><strong>OMTech Laser:</strong> Enclosed desktop CO2 lasers (Polar 50W) with Ruida DSP control. <a href="/reviews/omtech-polar-50w-co2">Polar 50W Review</a></li>
            <li><strong>Thunder Laser:</strong> Industrial-grade RECI glass tube CO2 laser cutters (Nova 35). <a href="/reviews/thunder-laser-nova-35">Nova 35 Review</a></li>
            <li><strong>Gweike Cloud:</strong> 55W desktop CO2 laser cutters with 5MP lid vision camera. <a href="/gweike">View Gweike Hub</a></li>
            <li><strong>xTool:</strong> Enclosed desktop CO2 lasers (xTool P2 55W). <a href="/reviews/xtool-d1-pro-20w">xTool D1 Pro Review</a></li>
            <li><strong>Glowforge:</strong> Consumer cloud-connected CO2 desktop lasers.</li>
          </ul>
        </section>

        <section>
          <h2>Diode and Hybrid Laser Manufacturers</h2>
          <ul>
            <li><strong>Genmitsu (SainSmart):</strong> Desktop diode lasers and hybrid galvo machines. <a href="/sainsmart">View SainSmart Hub</a></li>
            <li><strong>Sculpfun:</strong> Large-format desktop diode engravers with linear guide rails. <a href="/reviews/sculpfun-s30-ultra-33w">Sculpfun S30 Ultra Review</a></li>
            <li><strong>Acmer:</strong> Dual linear rail desktop diode engravers. <a href="/reviews/acmer-p2-33w">Acmer P2 33W Review</a></li>
            <li><strong>Ortur:</strong> Desktop GRBL diode engravers and craft lasers.</li>
            <li><strong>LaserPecker:</strong> Portable dual-wavelength galvo engravers.</li>
          </ul>
        </section>

        <section>
          <h2>How to Compare Laser Manufacturers</h2>
          <p>Choosing a laser engraver manufacturer depends on substrate requirements (wood vs acrylic vs raw metals), optical power density, scan speed, software platform (LightBurn vs EZCAD vs proprietary), safety enclosures, and European availability. Read our <a href="/fiber-laser">Fiber Laser Guide</a> or browse <a href="/reviews">Laserhuis Machine Reviews</a>.</p>
        </section>

        <section>
          <h2>Editorial Disclosure</h2>
          <p>Laserhuis publishes hands-on reviews, specification-based overviews, and manufacturer reference information. Each item is labeled according to its source and testing status. A listing does not imply an official endorsement or commercial partnership unless explicitly stated.</p>
        </section>
      </main>
    `
  },
  {
    path: '/about',
    title: 'About Laserhuis — Editorial Approach & Technical Testing Methodology',
    description: 'Meet the engineering team behind Laserhuis. Read our editorial policy, review methodology, affiliate disclosures, and laser safety rules.',
    h1: 'About Laserhuis — Editorial Approach & Testing Standards',
    content: `
      <header><h1>About Laserhuis — Editorial Approach & Testing Standards</h1></header>
      <main>
        <p>Laserhuis is the definitive digital reference hub for laser engraving, cutting, and industrial marking. Learn about our bench testing methodology, affiliate disclosures, and laser safety rules.</p>
      </main>
    `
  },
  {
    path: '/compare',
    title: 'Interactive Laser Machine Comparison Tool | Laserhuis',
    description: 'Side-by-side technical comparison of modern laser engravers. Filter and compare power outputs, engraving area, laser type, and prices before you buy.',
    h1: 'Interactive Laser Machine Comparison Tool',
    content: `
      <header><h1>Interactive Laser Machine Comparison Tool</h1></header>
      <main>
        <p>Side-by-side spec comparison tool for diode, CO2, and fiber lasers. Compare wattage, working area, spot size, software compatibility, and price tiers.</p>
      </main>
    `
  },
  {
    path: '/gallery',
    title: 'Stunning Laser Engraving Project Inspiration Gallery | Laserhuis',
    description: 'Browse premium, high-resolution photos of finished laser projects. Get design inspiration for custom woodworking, slate coasters, leather gifts, and acrylic signage.',
    h1: 'Laser Project Inspiration Gallery',
    content: `
      <header><h1>Laser Project Inspiration Gallery</h1></header>
      <main>
        <p>Explore community project photos: custom slate coasters, 3D relief wood carvings, flame-polished acrylic signs, and color-marked titanium tags.</p>
      </main>
    `
  },
  {
    path: '/videos',
    title: 'Masterclass Laser Engraving Video Guides | Laserhuis',
    description: 'Watch expert video tutorials covering alignment, deep metal engraving, material testing, rotary jigs, and LightBurn file preparation.',
    h1: 'Masterclass Laser Engraving Video Guides',
    content: `
      <header><h1>Masterclass Laser Engraving Video Guides</h1></header>
      <main>
        <p>Watch YouTube video guides from the official Laserhuis channel covering Genmitsu PROVerXL assembly, Kintix galvo marking, focus alignment, and LightBurn setup.</p>
      </main>
    `
  }
];

let generatedCount = 0;

for (const route of ROUTES) {
  const canonicalUrl = `https://laserhuis.com${route.path === '/' ? '' : route.path}`;

  let html = templateHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

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
