import { useEffect, lazy, Suspense } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Loader2 } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailModals } from "@/components/DetailModals";
import { PageSEO } from "@/components/PageSEO";

// Lazy-loaded routes for code-splitting
const Home = lazy(() => import("@/pages/Home"));
const Tutorials = lazy(() => import("@/pages/Tutorials"));
const Reviews = lazy(() => import("@/pages/Reviews"));
const Materials = lazy(() => import("@/pages/Materials"));
const Compare = lazy(() => import("@/pages/Compare"));
const Favourites = lazy(() => import("@/pages/Favourites"));
const Videos = lazy(() => import("@/pages/Videos"));
const About = lazy(() => import("@/pages/About"));
const Brands = lazy(() => import("@/pages/Brands"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const KintixReview = lazy(() => import("@/pages/KintixReview"));
const Sainsmart = lazy(() => import("@/pages/Sainsmart"));
const CncCalculator = lazy(() => import("@/pages/CncCalculator"));
const EmSmart = lazy(() => import("@/pages/EmSmart"));
const Gweike = lazy(() => import("@/pages/Gweike"));
const FiberLaserHub = lazy(() => import("@/pages/FiberLaser"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-400">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mb-2" />
      <span className="text-xs font-mono">Loading Laserhuis module…</span>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <div className="App dark min-h-screen bg-[#020617] text-slate-100">
        <BrowserRouter>
          <Analytics />
          <ScrollToTop />
          <PageSEO />
          <Header />
          <main className="min-h-[70vh]">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiber-laser" element={<FiberLaserHub />} />
                <Route path="/fiber-laser/*" element={<FiberLaserHub />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reviews/kintix" element={<KintixReview />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/sainsmart" element={<Sainsmart />} />
                <Route path="/sainsmart/cnc-calculator" element={<CncCalculator />} />
                <Route path="/cnc-calculator" element={<CncCalculator />} />
                <Route path="/em-smart" element={<EmSmart />} />
                <Route path="/gweike" element={<Gweike />} />
                <Route path="/about" element={<About />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <DetailModals />
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#0f172a",
                border: "1px solid #1e293b",
                color: "#f8fafc",
              },
            }}
          />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
