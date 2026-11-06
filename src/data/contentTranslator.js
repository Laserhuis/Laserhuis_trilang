import translations from "./translationsData.json";
import { getTranslatedTutorial } from "./tutorialTranslations.js";

export function getTranslatedReview(review, lang) {
  if (lang === "en" || !review || !translations[lang] || !translations[lang].reviews || !translations[lang].reviews[review.id]) return review;
  const t = translations[lang].reviews[review.id];
  return {
    ...review,
    summary: t.summary || review.summary,
    pros: t.pros || review.pros,
    cons: t.cons || review.cons,
    hardwareSpecs: t.hardwareSpecs || review.hardwareSpecs,
    benchmarks: t.benchmarks || review.benchmarks
  };
}

export function getTranslatedTutorialContent(tutorial, lang) {
  if (lang === "en" || !tutorial) return tutorial;
  const tt = getTranslatedTutorial(tutorial, lang) || tutorial;
  if (translations[lang] && translations[lang].tutorials && translations[lang].tutorials[tutorial.id]) {
    const t = translations[lang].tutorials[tutorial.id];
    return {
      ...tt,
      title: t.title || tt.title || tutorial.title,
      summary: t.summary || tt.summary || tutorial.summary,
      steps: t.steps || tt.steps || tutorial.steps,
      troubleshooting: t.troubleshooting || tt.troubleshooting
    };
  }
  return tt;
}
