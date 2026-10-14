export const EXAMPLE_PROMPTS = [
  "Engraving 3mm Baltic Birch plywood with 10W Diode",
  "Cutting 6mm Clear Acrylic with 50W CO2",
  "Deep marking 304 Stainless Steel with 30W Fiber Galvo",
];

export function generateAISettings(prompt) {
  const p = prompt.toLowerCase();
  let laserType = "diode";
  let power = 80;
  let speed = 1200;
  let passes = 1;

  if (p.includes("co2") || p.includes("acrylic")) {
    laserType = "co2";
    speed = 15;
    power = 65;
  } else if (p.includes("fiber") || p.includes("steel") || p.includes("metal")) {
    laserType = "fiber";
    speed = 2000;
    power = 90;
  }

  if (p.includes("cut")) {
    passes = 2;
    speed = Math.round(speed * 0.4);
    power = 95;
  }

  return {
    prompt,
    recommendedLaser: laserType,
    power: `${power}%`,
    speed: `${speed} mm/min`,
    passes,
    airAssist: true,
    advice: "Perform a 10x10mm test grid before running full production batch.",
  };
}
