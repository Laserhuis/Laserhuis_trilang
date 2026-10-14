function parseLeadingNumber(str: string | number) {
  const m = String(str).match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

function parseMaxNumber(str: string | number) {
  const nums = String(str).match(/\d+(\.\d+)?/g);
  if (!nums) return null;
  return Math.max(...nums.map(Number));
}

const isCut = (material: string) => /—\s*cut/i.test(material) || /\bcut\b/i.test(material);

function formatSpeed(value: number, original: string) {
  const unit = String(original).replace(/[\d.\s]+/g, "").trim() || "mm/min";
  const rounded = value >= 100 ? Math.round(value / 10) * 10 : Math.round(value);
  return `${rounded} ${unit}`;
}

export function scaleSetting(setting: any, userWatt: number) {
  const base = setting.baseWatt || userWatt;
  const ratio = userWatt / base;

  if (!userWatt || ratio === 1) {
    return { ...setting, scaledFrom: base, userWatt, isEstimate: false };
  }

  const speedNum = parseLeadingNumber(setting.speed);
  const powerNum = parseLeadingNumber(setting.power);
  const passesNum = parseMaxNumber(setting.passes) || 1;
  const passesOpen = /\+/.test(String(setting.passes));

  let speed = setting.speed;
  let power = setting.power;
  let passes = setting.passes;

  if (isCut(setting.material)) {
    let newPasses = Math.max(1, Math.round(passesNum / ratio));
    passes = passesOpen ? `${newPasses}+` : String(newPasses);
    if (speedNum && ratio > 1.2) speed = formatSpeed(speedNum * Math.min(ratio, 1.6), setting.speed);
  } else {
    if (speedNum) speed = formatSpeed(speedNum * ratio, setting.speed);
    if (powerNum && ratio < 0.75) {
      power = `${Math.min(100, Math.round(powerNum / ratio))}%`;
    }
  }

  return {
    ...setting,
    speed,
    power,
    passes,
    machineClass: `${userWatt}W ${setting.machineClass}`,
    scaledFrom: base,
    userWatt,
    isEstimate: true,
  };
}
