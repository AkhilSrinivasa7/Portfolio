import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPhotos, type GalleryItem } from "../data/galleryData";

type ViewMode = "auto" | "flow" | "grid";

export default function GalleryPage() {
  // Monotonic virtualIndex guarantees continuous unidirectional flow without backward flipping
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("auto");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryItem | null>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const photos = galleryPhotos;
  const count = photos.length;
  const autoFlowTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setVirtualIndex((prev) => prev - 1);
  }, []);

  // Auto Flow Timer (Active only in "auto" mode)
  useEffect(() => {
    if (viewMode !== "auto") {
      if (autoFlowTimer.current) clearInterval(autoFlowTimer.current);
      return;
    }
    autoFlowTimer.current = window.setInterval(handleNext, 1800);
    return () => {
      if (autoFlowTimer.current) clearInterval(autoFlowTimer.current);
    };
  }, [viewMode, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setLightboxPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Active photo derived from monotonic index
  const currentPhotoIndex = ((virtualIndex % count) + count) % count;
  const activePhoto = photos[currentPhotoIndex];

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  // Responsive card sizing
  const cardWidth = isMobile ? 240 : isTablet ? 310 : 360;
  const cardHeight = isMobile ? 330 : isTablet ? 420 : 470;
  const spacing = isMobile ? 140 : isTablet ? 200 : 240;

  // Render continuous window of visible slots centered on virtualIndex
  // Each slot has an absolute coordinate: no card ever flips across the front!
  const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];
  const visibleCards = visibleOffsets.map((offset) => {
    const slot = virtualIndex + offset;
    const photoIdx = ((slot % count) + count) % count;
    return {
      slot,
      offset,
      photo: photos[photoIdx],
      photoIdx,
    };
  });

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 relative z-10 overflow-hidden select-none">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-cyan-500/10 blur-[160px] opacity-60"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl space-y-8 relative z-10">
        {/* Top Header & View Controls */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm font-sans text-neutral-400">
            Explore atmospheric perspectives, mountain summits, and changing skies in my visual archive.
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            Some <span className="text-brand-lime">Moments</span>
          </h1>

          {/* THREE-OPTION CONTROL: Auto Flow | Flow | Grid (No 1.5s mentioned) */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-black/65 p-1 backdrop-blur-xl shadow-2xl">
              <button
                onClick={() => setViewMode("auto")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === "auto"
                    ? "bg-brand-lime text-brand-dark shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    viewMode === "auto" ? "bg-brand-dark animate-ping" : "bg-white/40"
                  }`}
                />
                <span>Auto Flow</span>
              </button>

              <button
                onClick={() => setViewMode("flow")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === "flow"
                    ? "bg-brand-lime text-brand-dark shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20M17 5l5 7-5 7" />
                </svg>
                <span>Flow</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-brand-lime text-brand-dark shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 1. CONTINUOUS FLOW CAROUSEL (Auto Flow & Flow Modes) ── */}
        {(viewMode === "auto" || viewMode === "flow") && (
          <div className="relative w-full py-4 overflow-hidden">
            {/* Smooth Edge Fade Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-brand-dark via-brand-dark/80 to-transparent z-40" />

            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime hover:scale-110 shadow-2xl active:scale-95 cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime hover:scale-110 shadow-2xl active:scale-95 cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Fanned 3D Curved Continuous Track Stage */}
            <div
              className="relative h-[380px] sm:h-[470px] md:h-[510px] w-full flex items-center justify-center"
              style={{ perspective: "1200px" }}
            >
              {/* Touch Drag / Swipe Wrapper for Mobile */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 || info.velocity.x < -400) {
                    handleNext();
                  } else if (info.offset.x > 40 || info.velocity.x > 400) {
                    handlePrev();
                  }
                }}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
              >
                {visibleCards.map(({ slot, offset, photo }) => {
                  const absOffset = Math.abs(offset);

                  // Unidirectional position: cards glide smoothly in one consistent horizontal path
                  const x = offset * spacing;
                  const rotateY = offset * -14; // Soft natural perspective fan tilt
                  const z = -Math.pow(absOffset, 1.35) * 50; // Curves gently backward
                  const scale = Math.max(0.72, 1 - absOffset * 0.12);
                  const opacity = offset === 0 ? 1 : Math.max(0.3, 0.85 - absOffset * 0.25);
                  const zIndex = 30 - Math.round(absOffset * 5);

                  return (
                    <motion.div
                      key={slot}
                      animate={{
                        x,
                        rotateY,
                        z,
                        scale,
                        opacity,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (offset === 0) {
                          setLightboxPhoto(photo);
                        } else {
                          // Glide directly to this slot
                          setVirtualIndex((prev) => prev + offset);
                        }
                      }}
                      style={{
                        position: "absolute",
                        width: `${cardWidth}px`,
                        height: `${cardHeight}px`,
                        zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      className={`rounded-[26px] sm:rounded-[34px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 ${
                        offset === 0
                          ? "ring-2 ring-brand-lime shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(204,255,0,0.25)]"
                          : "ring-1 ring-white/10 hover:ring-white/40 hover:opacity-90"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="h-full w-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
                        loading="eager"
                      />

                      {/* Subtle dark shade */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      {/* Center active inspect icon */}
                      {offset === 0 && (
                        <div className="absolute top-3.5 right-3.5 z-10 rounded-xl bg-black/60 backdrop-blur-md p-2 text-white/90 border border-white/20">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Caption Under Center Card (Cross-fades smoothly without moving backwards) */}
            <div className="text-center mt-6 min-h-[75px] px-4 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1.5"
                >
                  <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
                    {activePhoto.category} — {activePhoto.location}
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                    {activePhoto.title}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Quick-Jump Category Indicator Pills */}
            <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
              {photos.map((photo, idx) => {
                const isActive = idx === currentPhotoIndex;
                return (
                  <button
                    key={photo.id}
                    onClick={() => {
                      let delta = idx - currentPhotoIndex;
                      if (delta > count / 2) delta -= count;
                      if (delta < -count / 2) delta += count;
                      setVirtualIndex((prev) => prev + delta);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? "border-brand-lime bg-brand-lime/15 text-brand-lime font-bold shadow-[0_0_12px_rgba(204,255,0,0.25)] scale-105"
                        : "border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/25"
                    }`}
                  >
                    <span>#{String(idx + 1).padStart(2, "0")}</span>
                    <span className="hidden sm:inline font-sans">{photo.category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 2. RESPONSIVE GRID VIEW (Grid Mode) ── */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4"
          >
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d12] shadow-2xl cursor-pointer hover:border-brand-lime/60 transition-all hover:-translate-y-1.5"
              >
                <div className="aspect-[16/11] w-full overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-bold text-brand-lime border border-brand-lime/30">
                      #{String(index + 1).padStart(2, "0")} • {photo.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-10 rounded-xl bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-mono text-white/80 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    Inspect ↗
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-brand-lime transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs font-mono text-white/50 mt-0.5">
                      {photo.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-brand-lime font-bold">
                    {photo.year}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl sm:rounded-3xl object-contain border border-white/10 shadow-2xl"
              />

              <div className="mt-4 flex items-center justify-between gap-4 w-full px-2">
                <div>
                  <h4 className="text-base font-bold font-display text-white">
                    {lightboxPhoto.title}
                  </h4>
                  <p className="text-xs text-brand-lime font-mono">
                    {lightboxPhoto.category} • {lightboxPhoto.location} • {lightboxPhoto.year}
                  </p>
                </div>

                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-brand-lime hover:text-brand-dark transition-all cursor-pointer"
                >
                  Close [Esc]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}