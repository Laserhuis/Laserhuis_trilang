import { useState, useEffect } from "react";

const KEY = "pf_favourites";
const EMPTY = { tutorial: [], review: [], material: [] };
const EVT = "pf-fav-change";

function read(): Record<string, string[]> {
  try {
    return { ...EMPTY, ...(JSON.parse(localStorage.getItem(KEY) || "{}")) };
  } catch {
    return { ...EMPTY };
  }
}

function write(value: any) {
  localStorage.setItem(KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(EVT));
}

export function isFavourite(type: string, id: string) {
  return (read()[type] || []).includes(id);
}

export function toggleFavourite(type: string, id: string) {
  const v = read();
  const arr = v[type] || [];
  v[type] = arr.includes(id) ? arr.filter((x: string) => x !== id) : [...arr, id];
  write(v);
}

export function useFavourites() {
  const [fav, setFav] = useState<Record<string, string[]>>(read);
  useEffect(() => {
    const handler = () => setFav(read());
    window.addEventListener(EVT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return fav;
}
