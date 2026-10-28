import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InitialLoader from "./components/InitialLoader";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HashRouter>
      <ReactLenis root>
        <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
          <CustomCursor />

          {/* Sensory Noise Background */}
          <div className="bg-noise" aria-hidden="true" />

          {/* Meaningful Initializing & Boot Sequence (User requested!) */}
          {loading && <InitialLoader onComplete={() => setLoading(false)} />}

          {/* Top Scroll Progress Line */}
          <div
            className="fixed left-0 top-0 z-[60] h-[2px] bg-brand-lime transition-[width] duration-75 shadow-[0_0_8px_#ccff00]"
            style={{ width: `${scrollProgress}%` }}
          />

          <Navbar />

          <main className="relative z-10 min-h-[85vh]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ReactLenis>
    </HashRouter>
  );
}
