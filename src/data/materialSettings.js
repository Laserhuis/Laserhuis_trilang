// material, laser, machineClass, speed, power, passes, freqOrInterval, airAssist, notes, keywords, baseWatt
const M = [
  ["Basswood / Plywood (3mm) — Cut", "diode", "Diode", "180 mm/min", "100%", "2-3", "0.10 mm interval", "On (high)", "Slow, multiple passes; keep bed clean to avoid flare.", ["wood", "basswood", "plywood", "cut", "3mm"], 20],
  ["Basswood / Plywood (3mm) — Engrave", "diode", "Diode", "3000 mm/min", "35%", "1", "0.08 mm interval", "On (low)", "Grayscale looks great; increase power for darker tone.", ["wood", "basswood", "plywood", "engrave", "walnut", "maple", "oak"], 20],
  ["Bamboo — Engrave", "diode", "Diode", "3500 mm/min", "40%", "1", "0.08 mm interval", "On (low)", "Naturally high contrast; wipe residue after.", ["bamboo", "engrave"], 20],
  ["MDF (3mm) — Cut", "diode", "Diode", "150 mm/min", "100%", "3", "0.10 mm interval", "On (high)", "Produces heavy smoke; strong extraction required.", ["mdf", "cut"], 20],
  ["Leather (veg-tan) — Engrave", "diode", "Diode", "4000 mm/min", "25%", "1", "0.10 mm interval", "On (low)", "Low power to avoid deep charring; mask for crisp edges.", ["leather", "veg-tan", "engrave"], 20],
  ["Cork — Engrave", "diode", "Diode", "3000 mm/min", "30%", "1", "0.10 mm interval", "On (low)", "Light touch; cork scorches quickly.", ["cork", "engrave"], 10],
  ["Slate — Photo", "diode", "Diode", "3000 mm/min", "60%", "1", "0.08 mm interval", "Off", "Apply mineral oil after for contrast pop.", ["slate", "photo", "stone"], 20],
  ["Cardboard — Cut", "diode", "Diode", "500 mm/min", "70%", "1", "0.10 mm interval", "On (high)", "Fire risk — never leave unattended.", ["cardboard", "card", "cut", "paper"], 10],
  ["Anodized Aluminium — Mark (diode)", "diode", "Diode", "1500 mm/min", "80%", "1", "0.06 mm interval", "Off", "Removes anodizing to reveal bright metal; no true metal engrave.", ["anodized", "aluminium", "aluminum", "mark", "metal"], 20],

  ["Cast Acrylic (3mm) — Cut", "co2", "CO2", "12 mm/s", "75%", "1", "—", "On (high)", "Cast acrylic gives flame-polished edges; extruded frosts.", ["acrylic", "cast", "cut", "perspex", "3mm"], 50],
  ["Cast Acrylic — Engrave", "co2", "CO2", "300 mm/s", "20%", "1", "0.06 mm interval", "Off (or low)", "Air assist off can give a frostier engrave; test both.", ["acrylic", "engrave", "perspex"], 50],
  ["Plywood (6mm) — Cut", "co2", "CO2", "8 mm/s", "80%", "1-2", "—", "On (high)", "Thicker stock benefits from lower speed over more power.", ["wood", "plywood", "6mm", "cut"], 70],
  ["Hardwood — Engrave (photo)", "co2", "CO2", "400 mm/s", "18%", "1", "0.05 mm interval", "Off", "CO2 excels at photo-grade grayscale on wood.", ["wood", "hardwood", "walnut", "oak", "maple", "photo", "engrave"], 50],
  ["Leather — Cut", "co2", "CO2", "20 mm/s", "60%", "1", "—", "On (high)", "Fast pass keeps edges from over-charring.", ["leather", "cut"], 40],
  ["Ceramic Tile (Norton method) — Photo", "co2", "CO2", "300 mm/s", "25%", "1", "0.06 mm interval", "Off", "Coat tile with white TiO2 paint first; wipe after.", ["ceramic", "tile", "photo", "norton"], 45],
  ["Glass — Engrave", "co2", "CO2", "300 mm/s", "20%", "1", "0.08 mm interval", "Off", "Cover with wet paper towel to reduce chipping and frost evenly.", ["glass", "engrave", "jar"], 40],
  ["Paper / Card — Cut", "co2", "CO2", "30 mm/s", "15%", "1", "—", "On (high)", "Very low power; watch for scorching on edges.", ["paper", "card", "cut"], 40],
  ["Felt / Fabric — Cut", "co2", "CO2", "25 mm/s", "45%", "1", "—", "On (high)", "Strong extraction; some fabrics melt rather than cut.", ["felt", "fabric", "cloth", "cut"], 40],
  ["Mylar Stencil — Cut", "co2", "CO2", "20 mm/s", "40%", "1", "—", "On (high)", "Thin plastics only; never cut PVC (toxic chlorine gas).", ["mylar", "stencil", "plastic", "cut"], 40],

  ["Stainless Steel — Anneal Mark", "fiber", "Fiber", "500 mm/s", "80%", "3-5", "40 kHz", "Off", "Low speed builds dark oxide; no material removed.", ["stainless", "steel", "anneal", "mark", "metal"], 30],
  ["Stainless Steel — Deep Engrave", "fiber", "Fiber", "300 mm/s", "100%", "20+", "60 kHz", "Off", "Many passes for depth; clear debris periodically.", ["stainless", "steel", "deep", "engrave", "metal"], 50],
  ["Anodized Aluminium — White Mark", "fiber", "Fiber", "1500 mm/s", "40%", "1", "60 kHz", "Off", "Fast single pass bleaches anodizing to white.", ["anodized", "aluminium", "aluminum", "white", "mark", "metal"], 30],
  ["Bare Aluminium — Engrave", "fiber", "Fiber", "400 mm/s", "90%", "3", "45 kHz", "Off", "Reflective; ensure proper focus for consistent depth.", ["aluminium", "aluminum", "bare", "engrave", "metal"], 30],
  ["Brass — Deep Mark", "fiber", "Fiber", "350 mm/s", "95%", "6", "50 kHz", "Off", "Brass marks bright; multiple passes for engraving depth.", ["brass", "deep", "mark", "metal"], 50],
  ["Titanium — Colour Mark (MOPA)", "fiber", "MOPA Fiber", "800 mm/s", "35%", "1", "200 kHz", "Off", "MOPA pulse tuning controls oxide colour; tiny changes matter.", ["titanium", "colour", "color", "mopa", "mark", "metal"], 50],
  ["Mild Steel — Relief Engrave", "fiber", "Fiber", "250 mm/s", "100%", "30+", "60 kHz", "Off", "Depth stacking; use a grayscale heightmap for relief.", ["mild", "steel", "relief", "engrave", "metal"], 50],
  ["Gold-Plated / Jewellery — Fine Mark", "fiber", "Fiber", "1000 mm/s", "30%", "1", "80 kHz", "Off", "Very light settings to avoid burning through plating.", ["gold", "jewellery", "jewelry", "ring", "fine", "mark"], 20],
  ["Painted / Coated Metal — Mark", "fiber", "Fiber", "1200 mm/s", "50%", "1", "60 kHz", "Off", "Ablate the coating to reveal substrate contrast.", ["painted", "coated", "metal", "mark"], 30],
  ["PCB — Solder Mask Mark", "fiber", "Fiber", "900 mm/s", "45%", "1", "80 kHz", "Off", "Fixture flat; a light pass removes mask without cutting traces.", ["pcb", "circuit", "solder", "mark", "electronics"], 20],
];

export const MATERIAL_SETTINGS = M.map((m, idx) => {
  const [material, laserType, machineClass, speed, power, passes, frequencyOrInterval, airAssist, notes, keywords, baseWatt] = m;
  return {
    id: `mat-${String(idx + 1).padStart(3, "0")}`,
    material, laserType, machineClass, speed, power, passes,
    frequencyOrInterval, airAssist, notes, keywords, baseWatt,
  };
});

export const MATERIALS = MATERIAL_SETTINGS;

// Common machine wattages offered in the Settings Finder, per laser type.
export const LASER_WATTS = {
  diode: [5, 10, 20, 33, 40],
  co2: [40, 50, 60, 80, 100],
  fiber: [20, 30, 50, 60],
};
