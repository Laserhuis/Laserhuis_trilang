export function getTranslatedTutorialContent(tutorial, lang) {
  if (!tutorial) return {};
  return {
    title: tutorial.title,
    subtitle: tutorial.subtitle,
    summary: tutorial.summary,
    content: tutorial.content,
  };
}

export function getTranslatedReview(review, lang) {
  if (!review) return {};
  return {
    title: review.title,
    subtitle: review.subtitle,
    summary: review.summary,
    pros: review.pros || [],
    cons: review.cons || [],
  };
}
