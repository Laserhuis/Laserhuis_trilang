import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { getTutorial } from "@/data/tutorials";
import { getReview } from "@/data/reviews";
import { TutorialModal } from "@/components/TutorialModal";
import { ReviewModal } from "@/components/ReviewModal";

export const DetailModals = () => {
  const [params, setParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const tutorialId = params.get("tutorial");
  const reviewId = params.get("review");

  let routeReview = null;
  let routeTutorial = null;

  if (pathname.startsWith("/reviews/") && pathname !== "/reviews/kintix") {
    const slug = pathname.replace("/reviews/", "").trim();
    if (slug) routeReview = getReview(slug);
  } else if (pathname.startsWith("/tutorials/")) {
    const slug = pathname.replace("/tutorials/", "").trim();
    if (slug) routeTutorial = getTutorial(slug);
  }

  const closeParam = (key) => {
    const next = new URLSearchParams(params);
    next.delete(key);
    setParams(next, { replace: false });
  };

  const closeRoute = (parentPath) => {
    navigate(parentPath, { replace: false });
  };

  const tutorial = routeTutorial || (tutorialId ? getTutorial(tutorialId) : null);
  const review = routeReview || (reviewId ? getReview(reviewId) : null);

  return (
    <>
      {tutorial && (
        <TutorialModal
          tutorial={tutorial}
          onClose={() => (routeTutorial ? closeRoute("/tutorials") : closeParam("tutorial"))}
        />
      )}
      {review && (
        <ReviewModal
          review={review}
          onClose={() => (routeReview ? closeRoute("/reviews") : closeParam("review"))}
        />
      )}
    </>
  );
};
