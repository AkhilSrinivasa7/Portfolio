import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cloudPhotos, type CloudPhoto } from "../data/galleryData";

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"3d-cloud" | "sky-grid">("3d-cloud");
  const [horizonMood, setHorizonMood] = useState<"cyan" | "gold" | "storm">("cyan");
  const [selectedCloud, setSelectedCloud] = useState<CloudPhoto | null>(null);
  const [isDrifting, setIsDrifting] = useState(true);

  const length = cloudPhotos.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setSelectedCloud(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth cloud drift autoplay
  useEffect(() => {
    if (!isDrifting || viewMode !== "3d-cloud") return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isDrifting, currentIndex, viewMode]);

  const getMoodAura = () => {
    switch (horizonMood) {
      case "gold":
        return "from-amber-500/20 via-rose-500/10 to-transparent";
      case "storm":
        return "from-indigo-600/25 via-cyan-900/15 to-transparent";
      case "cyan":
      default:
        return "from-cyan-400/20 via-brand-lime/10 to-transparent";
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 relative z-10 overflow-hidden">
      {/* Drifting Background Cloud Layers */}
      <div className={`pointer-events-none absolute -top-40 left-1/4 w-[750px] h-[550px] rounded-full bg-gradient-to-b ${getMoodAura()} blur-[140px] cloud-layer-1 opacity-70`} />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[650px] h-[480px] rounded-full bg-cyan-500/10 blur-[130px] cloud-layer-2 opacity-60" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="h-px w-8 bg-cyan-300/60" />
              Cloud & Atmospheric Photography
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Skies, Inversions & <span className="text-cyan-300 font-extrabold">Clouds</span>.
            </h1>
            <p className="mt-3 text-base text-white/70 max-w-2xl leading-relaxed">
              Documenting fleeting cloud architectures, high-altitude inversions, and atmospheric light across tropospheric frontiers.
            </p>
          </div>

          {/* Horizon Controls */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {/* Horizon Lighting Mood */}
            <div className="flex items-center rounded-xl bg-white/5 p-1 border border-white/10">
              <button
                onClick={() => setHorizonMood("cyan")}
                title="Ethereal Cyan Sky"
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  horizonMood === "cyan" ? "bg-cyan-400 text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Cyan
              </button>
              <button
                onClick={() => setHorizonMood("gold")}
                title="Golden Hour Atmosphere"
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  horizonMood === "gold" ? "bg-amber-400 text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Amber
              </button>
              <button
                onClick={() => setHorizonMood("storm")}
                title="Storm Twilight"
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  horizonMood === "storm" ? "bg-indigo-400 text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Storm
              </button>
            </div>

            {/* Carousel View Mode Toggle */}
            <div className="flex items-center rounded-xl bg-white/5 p-1 border border-white/10">
              <button
                onClick={() => setViewMode("3d-cloud")}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  viewMode === "3d-cloud"
                    ? "bg-brand-lime text-brand-dark font-bold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                3D Horizon
              </button>
              <button
                onClick={() => setViewMode("sky-grid")}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  viewMode === "sky-grid"
                    ? "bg-brand-lime text-brand-dark font-bold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Sky Grid
              </button>
            </div>
          </div>
        </div>

        {/* 1. DRASTIC 3D HORIZON CLOUD CAROUSEL */}
        {viewMode === "3d-cloud" && (
          <div className="relative">
            {/* 3D Horizon Stage */}
            <div
              className="relative h-[480px] sm:h-[580px] md:h-[640px] w-full flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#040812]/80 backdrop-blur-xl p-4 sm:p-8 select-none"
              style={{ perspective: "1200px" }}
            >
              {/* Slides with 3D Depth & Perspective */}
              {cloudPhotos.map((photo, index) => {
                const diff = (index - currentIndex + length) % length;
                const isCenter = diff === 0;
                const isNext = diff === 1;
                const isPrev = diff === length - 1;

                if (!isCenter && !isNext && !isPrev) return null;

                let translateX = 0;
                let translateZ = -220;
                let rotateY = 0;
                let scale = 0.8;
                let opacity = 0.35;
                let zIndex = 10;

                if (isCenter) {
                  translateX = 0;
                  translateZ = 0;
                  rotateY = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                } else if (isNext) {
                  translateX = 62; // percentage
                  translateZ = -180;
                  rotateY = -24;
                  scale = 0.82;
                  opacity = 0.45;
                  zIndex = 20;
                } else if (isPrev) {
                  translateX = -62; // percentage
                  translateZ = -180;
                  rotateY = 24;
                  scale = 0.82;
                  opacity = 0.45;
                  zIndex = 20;
                }

                return (
                  <motion.div
                    key={photo.id}
                    animate={{
                      x: `${translateX}%`,
                      z: translateZ,
                      rotateY,
                      scale,
                      opacity,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => {
                      if (!isCenter) setCurrentIndex(index);
                      else setSelectedCloud(photo);
                    }}
                    className={`absolute w-[86%] sm:w-[72%] md:w-[64%] max-w-[760px] h-[360px] sm:h-[480px] md:h-[530px] rounded-3xl overflow-hidden cursor-pointer border ${
                      isCenter
                        ? "border-cyan-300/80 shadow-[0_0_35px_rgba(103,232,249,0.25)] bg-[#070d18]"
                        : "border-white/10"
                    } group`}
                    style={{ zIndex }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Atmospheric Lighting Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050b]/95 via-[#02050b]/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                      {/* Telemetry Pills */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="rounded-full bg-cyan-400 px-3 py-0.5 text-xs font-mono font-bold text-black shadow-sm">
                          ☁ {photo.cloudType}
                        </span>
                        <span className="rounded-full bg-white/10 border border-white/20 px-3 py-0.5 text-xs font-mono text-white/80 backdrop-blur-md">
                          Alt: {photo.altitude}
                        </span>
                        <span className="font-mono text-xs text-brand-lime">
                          {photo.lighting}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                        {photo.title}
                      </h3>

                      {isCenter && (
                        <p className="mt-2 text-sm text-white/70 line-clamp-2 max-w-xl font-sans">
                          {photo.caption}
                        </p>
                      )}

                      {/* Optical EXIF Specs */}
                      {isCenter && (
                        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-[11px] font-mono text-white/60">
                          <span>{photo.telemetry.aperture}</span>
                          <span>•</span>
                          <span>{photo.telemetry.shutter}</span>
                          <span>•</span>
                          <span>{photo.telemetry.iso}</span>
                          <span>•</span>
                          <span className="text-cyan-300">{photo.telemetry.focalLength}</span>
                          <span>•</span>
                          <span>{photo.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Viewfinder Frame Indicator on Center */}
                    {isCenter && (
                      <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/60 border border-white/20 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                        CLICK TO EXPAND 🔍
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Prev / Next 3D Horizon Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md text-white hover:border-cyan-300 hover:text-cyan-300 transition-all shadow-xl"
                aria-label="Previous cloud formation"
              >
                ←
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md text-white hover:border-cyan-300 hover:text-cyan-300 transition-all shadow-xl"
                aria-label="Next cloud formation"
              >
                →
              </button>
            </div>

            {/* Cloud Thumbnail Filmstrip */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-x-auto py-2 no-scrollbar">
                {cloudPhotos.map((photo, i) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`relative h-20 w-32 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                      currentIndex === i
                        ? "border-cyan-300 scale-105 shadow-[0_0_20px_rgba(103,232,249,0.5)]"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={photo.src} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                      <span className="text-[9px] font-mono font-bold text-white truncate">
                        {photo.cloudType}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Auto Drift Play/Pause */}
              <button
                onClick={() => setIsDrifting(!isDrifting)}
                className={`rounded-2xl border px-4 py-3 shrink-0 text-xs font-mono font-bold transition-all ${
                  isDrifting
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                    : "border-white/15 bg-white/5 text-white/50"
                }`}
              >
                {isDrifting ? "⏸ DRIFTING" : "▶ PAUSED"}
              </button>
            </div>
          </div>
        )}

        {/* 2. SKY GRID VIEW */}
        {viewMode === "sky-grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedCloud(photo)}
                className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-[#060a12]/80 backdrop-blur-md cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050b] via-[#02050b]/30 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-cyan-400 px-2.5 py-0.5 text-[10px] font-mono font-bold text-black">
                      {photo.cloudType}
                    </span>
                    <span className="font-mono text-xs text-white/50">{photo.altitude}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/70 line-clamp-2">{photo.caption}</p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                    <span>{photo.telemetry.aperture} • {photo.telemetry.shutter}</span>
                    <span className="text-cyan-300">{photo.telemetry.focalLength}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* FULLSCREEN CLOUD VIEWER MODAL */}
        <AnimatePresence>
          {selectedCloud && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCloud(null)}
              className="fixed inset-0 z-[160] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-3xl"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[92vh] max-w-6xl w-full rounded-3xl overflow-hidden bg-[#060a12] border border-cyan-400/30 flex flex-col lg:flex-row shadow-2xl"
              >
                <button
                  onClick={() => setSelectedCloud(null)}
                  className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                >
                  ✕
                </button>

                <div className="lg:w-2/3 bg-black flex items-center justify-center max-h-[75vh] lg:max-h-[90vh]">
                  <img
                    src={selectedCloud.src}
                    alt={selectedCloud.title}
                    className="max-h-[75vh] lg:max-h-[90vh] w-full object-contain"
                  />
                </div>

                <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-cyan-400 px-3 py-0.5 text-xs font-mono font-bold text-black">
                        {selectedCloud.cloudType}
                      </span>
                      <span className="font-mono text-xs text-white/50">{selectedCloud.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-white mb-2">
                      {selectedCloud.title}
                    </h3>

                    <p className="text-xs font-mono text-cyan-300 mb-4">
                      Altitude: {selectedCloud.altitude} • Lighting: {selectedCloud.lighting}
                    </p>

                    <p className="text-sm leading-relaxed text-white/70 mb-6">
                      {selectedCloud.caption}
                    </p>

                    {/* Telemetry card */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-2 font-mono text-xs">
                      <div className="text-cyan-300 text-[10px] uppercase tracking-wider mb-2 font-bold">
                        Atmospheric Shot Telemetry:
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/40">Focal Length:</span>
                        <span>{selectedCloud.telemetry.focalLength}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/40">Aperture:</span>
                        <span className="text-brand-lime">{selectedCloud.telemetry.aperture}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/40">Shutter:</span>
                        <span>{selectedCloud.telemetry.shutter}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span className="text-white/40">Optical Filter:</span>
                        <span className="text-cyan-300">{selectedCloud.telemetry.filter}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                    <span>PRESS ESC TO CLOSE</span>
                    <a
                      href={selectedCloud.src}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:underline"
                    >
                      Raw Horizon ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cloud Photographer Dropzone Note */}
        <div className="mt-16 rounded-3xl border border-dashed border-cyan-400/20 bg-cyan-950/10 p-6 text-center">
          <p className="text-sm text-white/70 font-mono">
            ☁️ <strong className="text-cyan-300">Cloud Photography Note:</strong> Save your personal sky & cloud captures into{" "}
            <code className="text-cyan-300 bg-white/5 px-2 py-0.5 rounded">public/images/gallery/</code> and configure altitude/cloud types in{" "}
            <code className="text-cyan-300 bg-white/5 px-2 py-0.5 rounded">src/data/galleryData.ts</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
