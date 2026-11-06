import { BATCH_1 } from "./tutorials/batch1";
import { BATCH_2 } from "./tutorials/batch2";
import { BATCH_3 } from "./tutorials/batch3";
import { BATCH_4 } from "./tutorials/batch4";

const RAW_TUTORIALS = [
  ...BATCH_1,
  ...BATCH_2,
  ...BATCH_3,
  ...BATCH_4,
];

// Enrich each tutorial with standardized parameters, troubleshooting, and preparation notes
function enrichTutorial(t) {
  const targetMaterial = t.targetMaterial || (t.materials && t.materials[0]) || "Laser Substrate";
  
  let exactParameters = t.exactParameters;
  if (!exactParameters) {
    if (t.laserType === "diode") {
      exactParameters = {
        power: "28% - 65%",
        speed: "3500 - 4500 mm/min",
        passes: "1",
        lineInterval: "0.08mm (317.5 DPI)",
        airAssist: "10 - 15 PSI",
        focusOffset: "0.0mm (Surface)",
        lightburnMode: "Fill / Image",
        frequency: "N/A (Diode)"
      };
    } else if (t.laserType === "co2") {
      exactParameters = {
        power: "15% - 50%",
        speed: "250 - 400 mm/s",
        passes: "1",
        lineInterval: "0.065mm (390 DPI)",
        airAssist: "15 - 25 PSI",
        focusOffset: "Surface 0.0mm",
        lightburnMode: "Fill + Line",
        frequency: "Standard RF/Glass"
      };
    } else {
      exactParameters = {
        power: "35% - 65%",
        speed: "1200 - 2200 mm/s",
        passes: "1 - 2",
        lineInterval: "0.035mm (725 DPI)",
        airAssist: "Optional",
        focusOffset: "+0.2mm Defocus",
        lightburnMode: "Galvo Hatch",
        frequency: "35 - 55 kHz"
      };
    }
  }

  let troubleshooting = t.troubleshooting;
  if (!troubleshooting || troubleshooting.length === 0) {
    const matLower = targetMaterial.toLowerCase();
    if (matLower.includes("slate") || matLower.includes("stone")) {
      troubleshooting = [
        {
          issue: "Faint grey engraving instead of brilliant white pop",
          fix: "Invert your image in software and slightly defocus (+1.0mm) to micro-fracture the silica layer without digging into the rock."
        },
        {
          issue: "Chipped or fractured edges around perimeter",
          fix: "Lower laser power by 10% and increase speed to prevent excessive localized thermal stress."
        }
      ];
    } else if (matLower.includes("acrylic") || matLower.includes("pmma")) {
      troubleshooting = [
        {
          issue: "Micro-crazing / tiny hairline cracks along cut edges",
          fix: "Never wipe cut acrylic with Isopropyl Alcohol. Clean only with deionized water and mild dish soap."
        },
        {
          issue: "Frosted or wavy edge instead of clear glass finish",
          fix: "Ensure you are using cell-cast acrylic, reduce cutting speed by 15%, and maximize high-pressure air assist."
        }
      ];
    } else if (matLower.includes("metal") || matLower.includes("steel") || t.laserType === "fiber") {
      troubleshooting = [
        {
          issue: "Brownish discolored mark instead of deep jet black",
          fix: "Increase pulse width (120-200ns) and decrease travel speed to allow chromium oxide passivation layer to form."
        },
        {
          issue: "Uneven contrast across wide flat parts",
          fix: "Verify dual-dot red focus across the entire working plane and wipe with acetone to eliminate finger oils."
        }
      ];
    } else {
      troubleshooting = [
        {
          issue: "Dark smoke stains or yellow halos around engravings",
          fix: "Apply 3M paper masking tape prior to processing and run minimum 12 PSI air assist to direct fumes to exhaust."
        },
        {
          issue: "Uneven engraving depth across the workpiece",
          fix: "Use honeycomb bed hold-down pins to ensure the material lies perfectly flat within 0.2mm tolerance."
        }
      ];
    }
  }

  let materialPrep = t.materialPrep;
  if (!materialPrep) {
    const matLower = targetMaterial.toLowerCase();
    if (matLower.includes("slate")) {
      materialPrep = "Wash slate thoroughly with warm soapy water to purge rock dust, dry completely, and apply a drop of mineral oil on unengraved areas for deep contrast.";
    } else if (matLower.includes("acrylic")) {
      materialPrep = "Leave protective paper masking intact on the underside to prevent metal honeycomb flashback; peel top film and wipe static dust with a microfiber cloth.";
    } else if (matLower.includes("wood") || matLower.includes("plywood")) {
      materialPrep = "Sand the top face lightly with 320-grit paper along the grain. Mask with blue painter's tape or transfer paper using a squeegee to eliminate trapped air bubbles.";
    } else {
      materialPrep = "Degrease surface with 99% Isopropyl Alcohol or Acetone to eliminate finger oils and guarantee uniform laser optical absorption.";
    }
  }

  return {
    ...t,
    targetMaterial,
    exactParameters,
    troubleshooting,
    materialPrep,
    readTime: t.readTime || t.estimatedTime || "12 min",
  };
}

export const TUTORIALS = RAW_TUTORIALS.map(enrichTutorial);

export const getTutorials = () => TUTORIALS;
export const getTutorial = (id) => TUTORIALS.find((t) => String(t.id) === String(id));
