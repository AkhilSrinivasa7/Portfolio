import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InitialLoader from "./components/InitialLoader";
import HarryPotterMagic from "./components/HarryPotterMagic";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CloudPage from "./pages/CloudPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      <ReactLenis root>
        <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-amber-400 selection:text-red-950">
          <CustomCursor />

          {/* Real-time Hardware-Accelerated Top Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Harry Potter Gryffindor Series Magic, Evasive Snitch & Lumos Maxima */}
          <HarryPotterMagic />

          {/* Sensory Noise Background */}
          <div className="bg-noise" aria-hidden="true" />

          {/* Meaningful Initializing & Boot Sequence */}
          {loading && <InitialLoader onComplete={() => setLoading(false)} />}

          <Navbar />

          <main className="relative z-10 min-h-[85vh]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/cloud" element={<CloudPage />} />
              <Route path="/gallery" element={<Navigate to="/cloud" replace />} />
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
