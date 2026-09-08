import { useSearchParams } from "react-router-dom";
import { getTutorial } from "@/data/tutorials";
import { getReview } from "@/data/reviews";
import { TutorialModal } from "@/components/TutorialModal";
import { ReviewModal } from "@/components/ReviewModal";

// Renders detail modals based on URL search params so they are deep-linkable
// from anywhere (?tutorial=id or ?review=id).
export const DetailModals = () => {
  const [params, setParams] = useSearchParams();
  const tutorialId = params.get("tutorial");
  const reviewId = params.get("review");

  const closeParam = (key) => {
    const next = new URLSearchParams(params);
    next.delete(key);
    setParams(next, { replace: false });
  };

  const tutorial = tutorialId ? getTutorial(tutorialId) : null;
  const review = reviewId ? getReview(reviewId) : null;

  return (
    <>
      {tutorial && <TutorialModal tutorial={tutorial} onClose={() => closeParam("tutorial")} />}
      {review && <ReviewModal review={review} onClose={() => closeParam("review")} />}
    </>
  );
};
