export function scaleSetting(baseSetting, targetWattage) {
  if (!baseSetting || !targetWattage) return baseSetting;
  const ratio = targetWattage / (baseSetting.baseWatt || 10);
  const adjustedSpeed = Math.round((baseSetting.speed || 1000) * Math.sqrt(ratio));
  const adjustedPower = Math.min(100, Math.max(10, Math.round((baseSetting.power || 80) * (1 / Math.sqrt(ratio)))));
  return {
    ...baseSetting,
    targetWatt: targetWattage,
    scaledSpeed: adjustedSpeed,
    scaledPower: adjustedPower,
  };
}
