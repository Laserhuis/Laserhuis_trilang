import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailModals } from "@/components/DetailModals";
import { PageSEO } from "@/components/PageSEO";
import Home from "@/pages/Home";
import Tutorials from "@/pages/Tutorials";
import Reviews from "@/pages/Reviews";
import Materials from "@/pages/Materials";
import Compare from "@/pages/Compare";
import Favourites from "@/pages/Favourites";
import Videos from "@/pages/Videos";
import About from "@/pages/About";
import Brands from "@/pages/Brands";
import Gallery from "@/pages/Gallery";
import KintixReview from "@/pages/KintixReview";
import Sainsmart from "@/pages/Sainsmart";

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
