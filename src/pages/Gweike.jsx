import React, { useState } from 'react';
import { 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Cpu, 
  Info, 
  ChevronRight,
  HelpCircle,
  Truck,
  Award,
  Box
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GweikePage() {
  const { language } = useLanguage();
  const isNl = language === 'nl';
  const isFr = language === 'fr';

  const [activeTab, setActiveTab] = useState('all');

  // Exact user affiliate links
  const BRAND_LINK = "https://eu.gweikecloud.com/?ref=laserhuis";
  
  const PRODUCTS = [
    {
      id: 'g2-max',
      name: 'Gweike Cloud G2 Max 50W Fiber Laser',
      category: 'fiber',
      badge: isNl ? 'Populair Premium' : isFr ? 'Populaire Premium' : 'Most Popular Premium',
      power: '50W Fiber Laser',
      speed: 'Up to 15,000 mm/s',
      workArea: '110 x 110 mm (Expandable)',
      type: 'Galvo Fiber (20kHz-80kHz)',
      materials: isNl ? 'Alle metalen, RVS, goud, zilver, aluminium, harde plastics' : isFr ? 'Tous métaux, inox, or, argent, aluminium, plastics dur' : 'All metals, stainless steel, gold, silver, brass, dark plastics',
      description: isNl 
        ? 'Ultrasnelle 50W fiber laser graveermachine met galvo technology. Inclusief elektrisch verstelbare z-as, dual red-light focus en krachtige software ondersteuning voor diep graveren en snijden in metaal.'
        : isFr
        ? 'Graveur laser fibre 50W ultra-rapide avec technologie galvo. Axé sur la gravure profonde et le marquage précis du métal.'
        : 'Ultra-fast 50W fiber laser engraver featuring high-speed galvo head, motorized Z-axis, dual red dot preview, and deep metal engraving capabilities.',
      features: isNl ? [
        '50W MOPA/Fiber Optische Bron',
        'Galvo Scansnelheid tot 15.000 mm/s',
        'Inclusief Roterende As (Rotary Attachment)',
        'Compact & Draagbaar Design',
        'LightBurn & EZCad3 Compatible'
      ] : [
        '50W Fiber Optical Laser Source',
        'Galvo Scanning speeds up to 15,000 mm/s',
        'Includes Rotary Axis attachment support',
        'Compact Enclosed/Portable Desktop Form Factor',
        'Full LightBurn & EZCad Compatible'
      ],
      priceRange: '€ 1.799 - € 2.499',
      link: 'https://eu.gweikecloud.com/products/g2-max-50w-fiber-laser-engraver?ref=laserhuis'
    },
    {
      id: 'g3-basic',
      name: 'Gweike Cloud G3 Basic CO2 Laser',
      category: 'co2',
      badge: isNl ? 'Beste voor Hout & Acryl' : isFr ? 'Meilleur pour bois & acrylique' : 'Best for Wood & Acrylic',
      power: '55W CO2 Glass Tube',
      speed: 'Up to 600 mm/s',
      workArea: '510 x 300 mm (Pass-through slot)',
      type: 'Enclosed Desktop CO2',
      materials: isNl ? 'Hout, acryl, leder, glas, gecoat metaal, karton, textiel' : isFr ? 'Bois, acrylique, cuir, verre, métal revêtu, carton' : 'Wood, acrylic, leather, glass, anodized aluminum, paper, textiles',
      description: isNl
        ? 'Slimme desktop CO2 lasersnijder met ingebouwde 5MP HD camera, automatische autofocus, interne waterkoeling en rookafzuiging. Ideaal voor creatieve workshops en ambachtelijke bedrijven.'
        : isFr
        ? 'Coupeur laser CO2 de bureau intelligent avec caméra HD 5MP, autofocus automatique et système de refroidissement d’eau intégré.'
        : 'Smart desktop CO2 laser cutter with 5MP HD wide-angle camera, auto-focus, internal water chiller, and inline extraction fan for seamless workspace integration.',
      features: isNl ? [
        '55W CO2 Glasbuis met hoge precisie',
        '5MP HD Live Visual Camera in de klep',
        'Auto-Focus & Materiaal Herkenning',
        'Ingebouwde Waterkoeler & Luchtpomp',
        'Inclusief Pass-Through Sleuf voor lange platen'
      ] : [
        '55W High-Precision CO2 Glass Tube',
        '5MP HD Live Visual Camera System',
        'Automated Live Focus & Material Detection',
        'Built-in Industrial Water Chiller & Air Assist',
        'Pass-Through Slots for extended material lengths'
      ],
      priceRange: '€ 2.699 - € 3.299',
      link: 'https://eu.gweikecloud.com/products/g3-basic?ref=laserhuis'
    },
    {
      id: 'm-core',
      name: 'Gweike Cloud M-Core Fiber Module System',
      category: 'fiber',
      badge: isNl ? 'Innovatieve Uitbreiding' : isFr ? 'Extension Innovante' : 'Innovative Modular Tech',
      power: '20W / 30W / 50W Fiber Module',
      speed: 'Galvo Speed Integrated',
      workArea: 'Modular Attachment',
      type: 'Modular Fiber Unit',
      materials: isNl ? 'Metalen, sieraden, horloges, RVS tag platen' : isFr ? 'Métaux, bijoux, montres, plaques signalétiques' : 'Metals, jewelry, knives, industrial tags, brass plates',
      description: isNl
        ? 'Flexibele en modulaire fiber lasereenheid ontworpen voor naadloze integratie met werkstations en aangepaste opstellingen voor snelle metaalmarkering.'
        : isFr
        ? 'Unité laser fibre modulaire conçue pour une intégration facile dans des stations de travail personnalisées.'
        : 'Flexible modular fiber laser core unit designed for seamlessly adding high-speed fiber metal engraving to customized industrial or workshop setups.',
      features: isNl ? [
        'Hoge precisie fiber lasermodule',
        'Geschikt voor industrieel markeerwerk',
        'Laag stroomverbruik & lange levensduur (100.000 uur)',
        'Compacte behuizing met eenvoudige montage'
      ] : [
        'High precision fiber laser optical engine',
        'Engineered for industrial serial marking',
        'Long laser lifespan up to 100,000 working hours',
        'Compact footprint for streamlined custom integration'
      ],
      priceRange: '€ 1.299 - € 1.999',
      link: 'https://eu.gweikecloud.com/products/m-core?ref=laserhuis'
    },
    {
      id: 'g6-split',
      name: 'Gweike Cloud G6 Split Fiber Laser (30W / 60W / 100W)',
      category: 'fiber',
      badge: isNl ? 'Industriële Krachtpatser' : isFr ? 'Puissance Industrielle' : 'Heavy-Duty Industrial',
      power: '30W / 60W / 100W MOPA Fiber',
      speed: 'Up to 12,000 mm/s',
      workArea: '150 x 150 mm / 200 x 200 mm',
      type: 'Split Galvo Industrial Tower',
      materials: isNl ? 'Inox kleurengraveren, titanium, aluminium, koper, goud, snijden van dun metaal' : isFr ? 'Gravure couleur inox, titane, aluminium, cuivre, or' : 'Stainless color engraving, titanium, aluminum, copper, gold, thin metal sheet cutting',
      description: isNl
        ? 'Vrijstaande of split-type industriële MOPA fiber laser. Biedt uitmuntende controle over frequentie en pulsbreedte voor prachtige kleurengravures op roestvrij staal en diep graveren op zware metalen.'
        : isFr
        ? 'Laser fibre MOPA industriel de type split avec contrôle de fréquence pour la gravure couleur sur acier inoxydable et la coupe métaux.'
        : 'Heavy-duty split-tower MOPA fiber laser machine providing pulse-width adjustment for rich color marking on stainless steel and deep relief metal engraving.',
      features: isNl ? [
        'Instelbare MOPA Pulsbreedte (1ns - 500ns)',
        'Opties van 30W tot 100W optisch vermogen',
        'Split design voor makkelijk verplaatsen & grote werkstukken',
        'Ondersteunt 2D/3D galvo lasergraveren',
        'Inclusief voetpedaal & industriële kolom'
      ] : [
        'Adjustable MOPA pulse width control (1ns - 500ns)',
        'Options ranging from 30W up to 100W optical power',
        'Split design for handling large objects & portable operation',
        'Supports high-detail 2D/3D galvo engraving',
        'Includes industrial motorized tower & foot switch pedal'
      ],
      priceRange: '€ 2.899 - € 5.999',
      link: 'https://eu.gweikecloud.com/products/g6-split-30w-60w-100w-fiber-laser-marking-engraving-machine-1?ref=laserhuis'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Gweike Cloud Lasers",
    "url": BRAND_LINK,
    "logo": "https://eu.gweikecloud.com/cdn/shop/files/logo.png",
    "description": "Gweike Cloud laser cutting and metal fiber engraving machines, featuring G2 Max, G3 CO2 Desktop, M-Core, and G6 Split MOPA fiber lasers.",
    "sameAs": [
      BRAND_LINK
    ],
    "offers": PRODUCTS.map(p => ({
      "@type": "Offer",
      "name": p.name,
      "category": p.category,
      "url": p.link,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Gweike Cloud Official Store (via Laserhuis)"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-slate-400 mb-6 space-x-2">
            <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <a href="/brands" className="hover:text-amber-400 transition-colors">{isNl ? 'Merken' : 'Brands'}</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-indigo-400 font-medium">Gweike Cloud</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>{isNl ? 'Officiële Partner & Reviews' : 'Official Partner & Tech Overview'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {isNl ? (
                  <>
                    Gweike Cloud Lasers: <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Snijd & Graveer Metaal, Hout & Acryl
                    </span>
                  </>
                ) : (
                  <>
                    Gweike Cloud Lasers: <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      High-Precision CO2 & Fiber Laser Systems
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {isNl 
                  ? 'Ontdek het complete gamma van Gweike Cloud: van de razendsnelle G2 Max 50W Fiber galvo laser tot de slimme G3 CO2 desktop lasersnijder met 5MP camera en de industriële G6 MOPA Split serie. Laserhuis biedt deskundig advies en directe affiliate voordelen.'
                  : 'Explore the complete Gweike Cloud lineup: from high-speed G2 Max 50W Fiber galvo engravers to the smart G3 CO2 desktop cutter with 5MP vision, and heavy-duty G6 Split MOPA fiber systems.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={BRAND_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-900/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{isNl ? 'Bezoek Gweike EU Store' : 'Visit Official Gweike EU Store'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="#products-section"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
                >
                  <span>{isNl ? 'Bekijk Modellen' : 'Explore Models'}</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </a>
              </div>

              {/* Value Props Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{isNl ? 'Gratis EU Verzending' : 'Free EU Shipping'}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isNl ? '2 Jaar EU Garantie' : '2-Year Warranty'}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{isNl ? 'LightBurn Compatible' : 'LightBurn Ready'}</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full" />
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Top Recommended</span>
                    <h3 className="text-lg font-bold text-white">Gweike Cloud G2 Max 50W</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">50W Galvo Fiber</span>
                </div>

                <div className="my-6 py-8 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center relative">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-indigo-950">
                    <Zap className="w-10 h-10 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-400 font-mono">15,000 mm/s GALVO SPEED</p>
                  <p className="text-xl font-extrabold text-white mt-1">Deep Metal Engraving & Color Marking</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{isNl ? 'Graveer rvs, goud, zilver, koper & aluminium' : 'Engrave stainless steel, brass, gold, titanium'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{isNl ? 'Inclusief roterende askit voor bekers & ringen' : 'Includes rotary axis for rings, tumblers & cylinders'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{isNl ? 'Direct klaar met EZCad3 of LightBurn' : 'Out-of-the-box LightBurn & EZCad3 workflow'}</span>
                  </li>
                </ul>

                <a
                  href="https://eu.gweikecloud.com/products/g2-max-50w-fiber-laser-engraver?ref=laserhuis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-colors"
                >
                  <span>{isNl ? 'Bekijk G2 Max Details' : 'View G2 Max Deal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Product Showcase Section */}
      <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isNl ? 'Gweike Cloud Productcatalogus' : 'Gweike Cloud Product Lineup'}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {isNl 
                ? 'Selecteer het type laser dat past bij jouw werkplaats: Fiber voor metaal of CO2 voor organische materialen.'
                : 'Choose the ideal machine technology for your specific workpiece material.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isNl ? 'Alle Modellen' : 'All Models'}
            </button>
            <button
              onClick={() => setActiveTab('fiber')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'fiber' 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Fiber Lasers (Metaal)
            </button>
            <button
              onClick={() => setActiveTab('co2')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'co2' 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              CO2 Lasers (Hout/Acryl)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((p) => (
            <div 
              key={p.id}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 p-6 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {p.power}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-400 transition-colors mb-2">
                  {p.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-6 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">{isNl ? 'Werkgebied' : 'Work Area'}</span>
                    <span className="text-slate-200 font-medium">{p.workArea}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">{isNl ? 'Snelheid' : 'Speed'}</span>
                    <span className="text-slate-200 font-medium">{p.speed}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-900">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">{isNl ? 'Materialen' : 'Materials'}</span>
                    <span className="text-indigo-300 font-medium">{p.materials}</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">{isNl ? 'Belangrijkste Kenmerken:' : 'Key Highlights:'}</h4>
                  <ul className="space-y-1.5">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">{isNl ? 'Indicatieve Prijs' : 'Est. Price'}</span>
                  <span className="text-sm font-bold text-white">{p.priceRange}</span>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all transform hover:scale-[1.02]"
                >
                  <span>{isNl ? 'Bekijk op Gweike EU' : 'Order on Gweike EU'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isNl ? 'Vergelijkingstabel: Welke Gweike Laser Past Bij Jou?' : 'Comparison Table: Which Gweike Fits Your Workflow?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {isNl 
                ? 'Vergelijk de specificaties van de G2 Max, G3 Basic CO2, M-Core en G6 Split in één overzicht.'
                : 'Direct feature breakdown to help you make an informed investment.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-slate-950">
                  <th className="py-3.5 px-4 font-bold uppercase">{isNl ? 'Model' : 'Model'}</th>
                  <th className="py-3.5 px-4 font-bold uppercase">{isNl ? 'Type Laser' : 'Laser Type'}</th>
                  <th className="py-3.5 px-4 font-bold uppercase">{isNl ? 'Vermogen' : 'Optical Power'}</th>
                  <th className="py-3.5 px-4 font-bold uppercase">{isNl ? 'Hoofdtoepassing' : 'Primary Use Case'}</th>
                  <th className="py-3.5 px-4 font-bold uppercase text-right">{isNl ? 'Link' : 'Link'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-white">G2 Max 50W</td>
                  <td className="py-4 px-4">Galvo Fiber</td>
                  <td className="py-4 px-4 text-indigo-400 font-semibold">50W</td>
                  <td className="py-4 px-4">{isNl ? 'Snel graveren op metalen, sieraden, rvs' : 'Fast metal marking, jewelry, tools'}</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://eu.gweikecloud.com/products/g2-max-50w-fiber-laser-engraver?ref=laserhuis" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center space-x-1">
                      <span>Store</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-white">G3 Basic</td>
                  <td className="py-4 px-4">CO2 Desktop</td>
                  <td className="py-4 px-4 text-indigo-400 font-semibold">55W</td>
                  <td className="py-4 px-4">{isNl ? 'Hout snijden tot 10mm, acryl, leder, glas' : 'Wood cutting up to 10mm, acrylic, glass'}</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://eu.gweikecloud.com/products/g3-basic?ref=laserhuis" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center space-x-1">
                      <span>Store</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-white">M-Core Module</td>
                  <td className="py-4 px-4">Modular Fiber</td>
                  <td className="py-4 px-4 text-indigo-400 font-semibold">20W / 30W / 50W</td>
                  <td className="py-4 px-4">{isNl ? 'Inbouw op aangepaste productielijnen' : 'Custom workstation production lines'}</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://eu.gweikecloud.com/products/m-core?ref=laserhuis" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center space-x-1">
                      <span>Store</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-white">G6 Split Series</td>
                  <td className="py-4 px-4">MOPA Fiber Galvo</td>
                  <td className="py-4 px-4 text-indigo-400 font-semibold">30W - 100W</td>
                  <td className="py-4 px-4">{isNl ? 'Industrieel kleurengraveren RVS & diep graveren' : 'Industrial color engraving & deep carving'}</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://eu.gweikecloud.com/products/g6-split-30w-60w-100w-fiber-laser-marking-engraving-machine-1?ref=laserhuis" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center space-x-1">
                      <span>Store</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isNl ? 'Alles over Gweike Cloud Lasers' : 'Everything About Gweike Cloud'}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
            <h3 className="font-bold text-white text-sm mb-2">
              {isNl 
                ? 'Wat is het verschil tussen Gweike G2 Max (Fiber) en G3 Basic (CO2)?' 
                : 'What is the main difference between G2 Max Fiber and G3 CO2?'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isNl
                ? 'De G2 Max gebruikt een 1064nm Fiber laserbron met galvo spiegelkop. Dit is speciaal gemaakt voor het vliegensvlug graveren van alle metalen (RVS, messing, zilver, goud) en harde kunststoffen. De G3 Basic gebruikt een 10.600nm CO2 lasertube die uitblinkt in het snijden van hout (tot 10mm) en transparant acryl, leder en glas.'
                : 'The G2 Max uses a 1064nm Fiber laser source with galvo mirrors for high-speed metal engraving. The G3 Basic features a 10.6um CO2 tube suited for cutting organic materials like wood, leather, glass, and acrylic.'}
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
            <h3 className="font-bold text-white text-sm mb-2">
              {isNl 
                ? 'Werkt Gweike Cloud met LightBurn software?' 
                : 'Is LightBurn software supported on Gweike machines?'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isNl
                ? 'Ja, alle moderne Gweike Cloud modellen (G2 Max, G3 CO2, G6 Split) bieden volledige ondersteuning voor LightBurn. Voor de Fiber galvo modellen is een LightBurn Galvo licentie vereist.'
                : 'Yes! Both G2 Max Galvo Fiber and G3 CO2 support LightBurn. For Galvo Fiber machines, a LightBurn Galvo license tier is required.'}
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
            <h3 className="font-bold text-white text-sm mb-2">
              {isNl 
                ? 'Hoe zit het met verzending, douane en garantie in Europa?' 
                : 'What about EU shipping, taxes, and warranty?'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isNl
                ? 'Wanneer je via de officiële EU winkel van Gweike Cloud koopt (via onze affiliate links), worden de machines vanuit een Europees magazijn verzonden. Dit betekent dat er geen extra douanekosten of invoerrechten bij komen, en je recht hebt op 2 jaar garantie.'
                : 'Orders placed via the official Gweike EU store ship directly from European warehouses with zero import tariffs and include full 2-year warranty coverage.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-cyan-950 border border-indigo-500/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {isNl ? 'Klaar om jouw laserwerkplaats te upgraden?' : 'Ready to Upgrade Your Laser Studio?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
            {isNl
              ? 'Bezoek de officiële Gweike EU webshop via Laserhuis voor de scherpste prijzen, bundels en snelle EU levering.'
              : 'Visit the official Gweike EU store via Laserhuis for exclusive bundles, fast delivery, and direct support.'}
          </p>

          <a
            href={BRAND_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-indigo-950 transition-all transform hover:scale-105"
          >
            <span>{isNl ? 'Naar Gweike Cloud EU Shop' : 'Go to Gweike Cloud EU Store'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
