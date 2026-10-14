import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header.jsx";
import { Footer } from "@/components/Footer.jsx";
import { DetailModals } from "@/components/DetailModals.jsx";
import { PageSEO } from "@/components/PageSEO.jsx";
import Home from "@/pages/Home.tsx";
import Tutorials from "@/pages/Tutorials.tsx";
import Reviews from "@/pages/Reviews.tsx";
import Materials from "@/pages/Materials.tsx";
import Compare from "@/pages/Compare.tsx";
import Favourites from "@/pages/Favourites.tsx";
import Videos from "@/pages/Videos.tsx";
import About from "@/pages/About.tsx";
import Brands from "@/pages/Brands.tsx";
import Gallery from "@/pages/Gallery.tsx";
import KintixReview from "@/pages/KintixReview.tsx";
import Sainsmart from "@/pages/Sainsmart.tsx";
import CarvecoBitStudio from "@/pages/CarvecoBitStudio.tsx";
import SainsmartCncCalculator from "@/pages/SainsmartCncCalculator.tsx";

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
