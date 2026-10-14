/**
 * Global search index for Laserhuis tutorials, reviews, materials, and CNC calculator tools.
 */

export const TUTORIALS_INDEX = [
  {
    id: 'calibrating-710w-spindle',
    title: 'Calibrating 710W Spindle Speeds & Feeds for Carveco & ArtCAM',
    category: 'cnc',
    tags: ['spindle', 'carveco', 'artcam', '710w', 'makita', 'dewalt', 'feeds', 'speeds', 'tdb']
  },
  {
    id: 'air-assist-optimization',
    title: 'Air Assist Optimization: Eliminating Smoke Charring and Soot',
    category: 'laser',
    tags: ['air assist', 'charring', 'soot', 'plywood', 'acrylic', 'psi', 'compressor']
  },
  {
    id: 'rotary-chuck-engraving',
    title: 'Rotary Chuck vs Roller: Perfect 360° Tumbler Engraving',
    category: 'laser',
    tags: ['rotary', 'chuck', 'roller', 'tumbler', 'mug', 'lightburn', 'tapered']
  },
  {
    id: 'kerf-compensation-inlays',
    title: 'Kerf Compensation 101: Designing Snug Push-Fit Wood & Acrylic Inlays',
    category: 'software',
    tags: ['kerf', 'offset', 'inlay', 'acrylic', 'wood', 'lightburn', 'tight fit']
  },
  {
    id: 'cnc-bit-selection-guide',
    title: 'Selecting the Right CNC Bits: Up-Cut, Down-Cut, Compression, and Ball Nose',
    category: 'cnc',
    tags: ['bits', 'end mill', 'compression', 'upcut', 'downcut', 'ball nose', 'v-bit', 'chip load']
  }
];

export const REVIEWS_INDEX = [
  {
    id: 'kintix',
    name: 'Kintix Precision Laser Engraver (Diode & Fiber Hybrid)',
    slug: 'kintix',
    category: 'laser',
    tags: ['kintix', 'fiber', 'diode', 'laser', 'galvo', 'metal', 'marking']
  },
  {
    id: 'sainsmart-genmitsu-prover',
    name: 'SainSmart Genmitsu PROVer & 710W Trim Router Setup',
    slug: '',
    category: 'cnc',
    tags: ['sainsmart', 'genmitsu', 'prover', '3018', 'router', '710w', 'cnc']
  },
  {
    id: 'sainsmart-bed-extension',
    name: 'SainSmart Genmitsu 3040 Bed Extension Kit',
    slug: '',
    category: 'cnc',
    tags: ['sainsmart', 'extension', 'bed', '3040', 'upgrade', 'spoilboard']
  },
  {
    id: 'creality-falcon2-40w',
    name: 'Creality Falcon2 40W High-Power Diode Laser',
    slug: '',
    category: 'laser',
    tags: ['creality', 'falcon', '40w', 'diode', 'cutting', 'thick wood']
  },
  {
    id: 'xtool-f1-ultra',
    name: 'xTool F1 Ultra 20W Fiber & 20W Diode Dual Laser',
    slug: '',
    category: 'laser',
    tags: ['xtool', 'f1', 'ultra', 'fiber', 'portable', 'fast']
  }
];

export const MATERIALS_INDEX = [
  { id: 'birch-3mm', material: 'Baltic Birch Plywood 3mm', category: 'wood', tags: ['plywood', 'wood', 'birch', '3mm'] },
  { id: 'birch-6mm', material: 'Baltic Birch Plywood 6mm', category: 'wood', tags: ['plywood', 'wood', 'birch', '6mm'] },
  { id: 'cast-acrylic-3mm', material: 'Cast Clear Acrylic 3mm (Plexiglass)', category: 'acrylic', tags: ['acrylic', 'plexiglass', 'clear', 'plastic'] },
  { id: 'cast-acrylic-black-3mm', material: 'Cast Opaque Black Acrylic 3mm', category: 'acrylic', tags: ['acrylic', 'black', 'glossy'] },
  { id: 'mdf-3mm', material: 'MDF Medium Density Fiberboard 3mm', category: 'wood', tags: ['mdf', 'fiberboard', 'wasteboard'] },
  { id: 'mdf-6mm', material: 'MDF Medium Density Fiberboard 6mm', category: 'wood', tags: ['mdf', 'spoilboard', 'jigs'] },
  { id: 'anodized-aluminum', material: 'Anodized Aluminum Business Cards & Tags', category: 'metal', tags: ['aluminum', 'anodized', 'metal', 'cards'] },
  { id: 'veg-tan-leather-2mm', material: 'Natural Veg-Tan Leather 2mm (5-6 oz)', category: 'organic', tags: ['leather', 'veg-tan', 'crafts'] },
  { id: 'slate-coaster', material: 'Natural Slate Coasters 5mm', category: 'stone', tags: ['slate', 'stone', 'coasters'] },
  { id: 'basswood-2mm', material: 'Basswood Craft Plywood 2mm', category: 'wood', tags: ['basswood', 'craft', 'thin wood'] },
  { id: 'stainless-steel-304', material: 'Stainless Steel 304 Marking', category: 'metal', tags: ['steel', 'stainless', 'metal', 'fiber'] },
  { id: 'two-tone-acrylic', material: 'Two-Tone Rowmark Laserable Signage Acrylic', category: 'acrylic', tags: ['signage', 'rowmark', 'badge'] }
];

/**
 * Searches across tutorials, reviews, and materials by query keyword.
 */
export function searchAll(query, currentLang = 'en') {
  if (!query || typeof query !== 'string') {
    return { tutorials: [], reviews: [], materials: [] };
  }

  const q = query.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);

  const matchItem = (item, fields) => {
    return terms.every(term =>
      fields.some(field => field && String(field).toLowerCase().includes(term))
    );
  };

  const tutorials = TUTORIALS_INDEX.filter(item =>
    matchItem(item, [item.title, item.category, ...(item.tags || [])])
  ).map(item => ({
    id: item.id,
    title: item.title,
    category: item.category
  }));

  const reviews = REVIEWS_INDEX.filter(item =>
    matchItem(item, [item.name, item.category, ...(item.tags || [])])
  ).map(item => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    category: item.category
  }));

  const materials = MATERIALS_INDEX.filter(item =>
    matchItem(item, [item.material, item.category, ...(item.tags || [])])
  ).map(item => ({
    id: item.id,
    material: item.material,
    name: item.material,
    category: item.category
  }));

  return { tutorials, reviews, materials };
}

export default searchAll;
