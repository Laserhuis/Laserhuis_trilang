import { useState, useEffect } from "react";

const FAV_KEY = "laserhuis_favourites";

export function getFavourites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavourite(id) {
  const current = getFavourites();
  const exists = current.includes(id);
  const updated = exists ? current.filter((x) => x !== id) : [...current, id];
  localStorage.setItem(FAV_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("favourites_changed"));
  return !exists;
}

export function useFavourites() {
  const [favs, setFavs] = useState(getFavourites);

  useEffect(() => {
    const handleStorage = () => setFavs(getFavourites());
    window.addEventListener("favourites_changed", handleStorage);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("favourites_changed", handleStorage);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return favs;
}
