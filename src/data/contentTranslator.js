import translations from "./translationsData.json";

export function getTranslatedReview(review, lang) {
  if (lang === "en" || !translations[lang] || !translations[lang].reviews || !translations[lang].reviews[review.id]) return review;
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
  if (lang === "en" || !translations[lang] || !translations[lang].tutorials || !translations[lang].tutorials[tutorial.id]) return tutorial;
  const t = translations[lang].tutorials[tutorial.id];
  return {
    ...tutorial,
    title: t.title || tutorial.title,
    summary: t.summary || tutorial.summary,
    steps: t.steps || tutorial.steps,
    troubleshooting: t.troubleshooting || tutorial.troubleshooting
  };
}
