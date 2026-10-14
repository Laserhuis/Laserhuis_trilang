export const CHANNEL_URL = "https://www.youtube.com/@laserhuis";

export const PROVERXL_VIDEO_DATA = {
  id: "proverxl_4030s",
  title: "SainSmart PROVerXL 4030S Complete Setup & 710W Spindle Calibration",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  watchUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  thumbUrl: "/images/sainsmart_hero_1786084432276.jpg",
};

export function embedUrl(id) {
  return `https://www.youtube.com/embed/${id}`;
}

export function watchUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbUrl(id) {
  return `/images/sainsmart_hero_1786084432276.jpg`;
}
