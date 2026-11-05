import { TUTORIALS } from "./tutorials";
import { MATERIAL_SETTINGS } from "./materialSettings";
import { REVIEWS } from "./reviews";
import { VIDEOS } from "./videos";

export const STATS = {
  tutorialsCount: TUTORIALS.length,
  diodeTutorialsCount: TUTORIALS.filter((t) => t.laserType === "diode").length,
  co2TutorialsCount: TUTORIALS.filter((t) => t.laserType === "co2").length,
  fiberTutorialsCount: TUTORIALS.filter((t) => t.laserType === "fiber").length,
  materialProfilesCount: MATERIAL_SETTINGS.length,
  machineReviewsCount: REVIEWS.length,
  videosCount: VIDEOS.length,
  brandsCount: [...new Set(REVIEWS.map((r) => r.brand))].length,
};
