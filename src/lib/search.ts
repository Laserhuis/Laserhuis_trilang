import { TUTORIALS } from "@/data/tutorials";
import { REVIEWS } from "@/data/reviews";
import { MATERIAL_SETTINGS } from "@/data/materialSettings";

export function searchAll(query: string) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return { tutorials: [], reviews: [], materials: [] };

  const tutorials = TUTORIALS.filter((t: any) =>
    [t.title, t.summary, t.targetMaterial, t.category, ...(t.imageTags || [])]
      .join(" ").toLowerCase().includes(q)
  ).slice(0, 6);

  const reviews = REVIEWS.filter((r: any) =>
    [r.name, r.summary, r.category].join(" ").toLowerCase().includes(q)
  ).slice(0, 6);

  const materials = MATERIAL_SETTINGS.filter((m: any) =>
    [m.material, m.notes, ...(m.keywords || [])].join(" ").toLowerCase().includes(q)
  ).slice(0, 6);

  return { tutorials, reviews, materials };
}
