const norm = (s?: string) => (s || "").toLowerCase();

export function filterTutorials(list: any[], { search = "", laserType = "", material = "", difficulty = "", category = "" }: any = {}) {
  const q = norm(search);
  return list.filter((t) => {
    if (laserType && t.laserType !== laserType) return false;
    if (difficulty && t.difficulty !== difficulty) return false;
    if (category && t.category !== category) return false;
    const matStr = t.targetMaterial || (Array.isArray(t.materials) ? t.materials.join(" ") : "");
    if (material && !norm(matStr).includes(norm(material))) return false;
    if (q) {
      const matHay = Array.isArray(t.materials) ? t.materials.join(" ") : (t.targetMaterial || "");
      const hay = [t.title, t.summary, matHay, t.category, ...(t.imageTags || [])].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function filterReviews(list: any[], { search = "", laserType = "", category = "", brand = "" }: any = {}) {
  const q = norm(search);
  return list.filter((r) => {
    if (laserType && r.laserType !== laserType) return false;
    if (category && r.category !== category) return false;
    if (brand && r.brand !== brand) return false;
    if (q) {
      const hay = [r.name, r.summary, r.category, r.controllerType, r.brand].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function filterMaterials(list: any[], { search = "", laserType = "" }: any = {}) {
  const q = norm(search);
  return list.filter((m) => {
    if (laserType && m.laserType !== laserType) return false;
    if (q) {
      const hay = [m.material, m.machineClass, m.notes, ...(m.keywords || [])].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}
