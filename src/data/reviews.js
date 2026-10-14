export const REVIEWS = [
  {
    id: "kintix",
    title: "Kintix 50W Fiber Galvo Workstation Hands-On Review",
    subtitle: "Industrial marking performance, MOPA frequency control, and LightBurn galvo setup",
    laserType: "fiber",
    rating: 4.9,
    author: "Laserhuis Hardware Bench",
    date: "2024-10-12",
    summary: "The Kintix 50W delivers incredible speed and crisp metal engraving. Here is our full benchmark testing.",
    pros: ["Blazing fast galvo speed", "Deep metal engraving capability", "Full LightBurn Galvo support"],
    cons: ["Requires dedicated enclosure for safety", "Higher initial investment"],
  },
];

export function getReview(id) {
  return REVIEWS.find((r) => r.id === id) || REVIEWS[0];
}
