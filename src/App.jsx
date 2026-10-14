import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailModals } from "@/components/DetailModals";
import { PageSEO } from "@/components/PageSEO";
import Home from "@/pages/Home.jsx";
import Tutorials from "@/pages/Tutorials.jsx";
import Reviews from "@/pages/Reviews.jsx";
import Materials from "@/pages/Materials.jsx";
import Compare from "@/pages/Compare.jsx";
import Favourites from "@/pages/Favourites.jsx";
import Videos from "@/pages/Videos.jsx";
import About from "@/pages/About.jsx";
import Brands from "@/pages/Brands.jsx";
import Gallery from "@/pages/Gallery.jsx";
import KintixReview from "@/pages/KintixReview.jsx";
import Sainsmart from "@/pages/Sainsmart.jsx";
import CarvecoBitStudio from "@/pages/CarvecoBitStudio.jsx";
import SainsmartCncCalculator from "@/pages/SainsmartCncCalculator.jsx";

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
          <ScrollToTop />
          <PageSEO />
          <Header />
          <main className="min-h-[70vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/kintix" element={<KintixReview />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/sainsmart" element={<Sainsmart />} />
              <Route path="/sainsmart/carveco-bit-studio" element={<CarvecoBitStudio />} />
              <Route path="/sainsmart/cnc-calculator" element={<CarvecoBitStudio />} />
              <Route path="/carveco-bit-studio" element={<CarvecoBitStudio />} />
              <Route path="/cnc-calculator" element={<SainsmartCncCalculator />} />
              <Route path="/about" element={<About />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<Home />} />
            </Routes>
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
