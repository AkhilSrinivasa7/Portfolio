import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cloudPhotos, type CloudPhoto } from "../data/cloudData";

export default function CloudPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"3d-cloud" | "sky-grid">("3d-cloud");
  const [horizonMood, setHorizonMood] = useState<"cyan" | "gold" | "storm">("cyan");
  const [selectedCloud, setSelectedCloud] = useState<CloudPhoto | null>(null);
  const [isDrifting, setIsDrifting] = useState(true);
  const [filterType, setFilterType] = useState<string>("all");

  const filteredPhotos = filterType === "all" 
    ? cloudPhotos 
    : cloudPhotos.filter((p) => p.cloudType === filterType);

  const length = filteredPhotos.length;

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
  }, [length]);

  // Smooth cloud drift autoplay
  useEffect(() => {
    if (!isDrifting || viewMode !== "3d-cloud" || length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isDrifting, currentIndex, viewMode, length]);

  const getMoodAura = () => {
    switch (horizonMood) {
      case "gold":
        return "from-amber-500/20 via-rose-500/10 to-transparent";
      case "storm":
        return "from-indigo-600/25 via-cyan-900/15 to-transparent";
      case "cyan":
      default:
        return "from-cyan-400/20 via-sky-500/10 to-transparent";
    }
  };

  const cloudTypes = ["all", "Cloud Inversion", "Cumulonimbus", "Cirrus", "Altocumulus", "Storm Shelf"];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 relative z-10 overflow-hidden">
      {/* Drifting Background Cloud Layers */}
      <div className={`pointer-events-none absolute -top-40 left-1/4 w-[750px] h-[550px] rounded-full bg-gradient-to-b ${getMoodAura()} blur-[140px] cloud-layer-1 opacity-70`} />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[650px] h-[480px] rounded-full bg-cyan-500/10 blur-[130px] cloud-layer-2 opacity-60" />

      <div className="mx-auto max-w-6xl relative z-10 space-y-16">
        {/* 1. HERO SECTION WITH SCROLL REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="h-px w-8 bg-cyan-300/60" />
              Cloud Theme & Atmospheric Optics
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white leading-[1.08]">
              Skies, Inversions & <span className="text-cyan-300 font-extrabold">Clouds</span>.
            </h1>
            <p className="mt-3 text-base text-white/70 max-w-2xl leading-relaxed">
              Documenting fleeting cloud architectures, high-altitude temperature inversions, and changing tropospheric light across mountain summits and plains.
            </p>
          </div>

          {/* Horizon & View Controls */}
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

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-xl bg-white/5 p-1 border border-white/10">
              <button
                onClick={() => setViewMode("3d-cloud")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "3d-cloud" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Float
              </button>
              <button
                onClick={() => setViewMode("sky-grid")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "sky-grid" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. CLOUD CATEGORY FILTER PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4"
        >
          <span className="text-xs font-mono text-white/40 uppercase mr-2">Filter Clouds:</span>
          {cloudTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilterType(type);
                setCurrentIndex(0);
              }}
              className={`rounded-full px-3.5 py-1 text-xs font-mono transition-all ${
                filterType === type
                  ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  : "bg-white/5 text-white/60 border border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              {type === "all" ? "All Formations" : type}
            </button>
          ))}
        </motion.div>

        {/* 3. SHOWCASE VIEW */}
        {viewMode === "3d-cloud" ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {filteredPhotos.length > 0 && (
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl p-4 sm:p-8 shadow-2xl">
                <div className="relative aspect-[16/9] max-h-[580px] w-full overflow-hidden rounded-2xl group cursor-pointer"
                  onClick={() => setSelectedCloud(filteredPhotos[currentIndex])}
                >
                  <img
                    src={filteredPhotos[currentIndex].src}
                    alt={filteredPhotos[currentIndex].title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Overlay Meta */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-1 text-[11px] font-mono font-bold text-cyan-300 uppercase mb-2">
                        <span>☁️ {filteredPhotos[currentIndex].cloudType}</span>
                        <span>•</span>
                        <span>{filteredPhotos[currentIndex].altitude}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
                        {filteredPhotos[currentIndex].title}
                      </h2>
                      <p className="mt-1 text-sm text-white/70 max-w-xl line-clamp-2">
                        {filteredPhotos[currentIndex].caption}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCloud(filteredPhotos[currentIndex]);
                      }}
                      className="self-start sm:self-auto rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs font-mono font-bold text-white transition-all backdrop-blur-md"
                    >
                      View Optics & Telemetry ↗
                    </button>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="mt-6 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsDrifting((v) => !v)}
                      className={`px-3 py-1.5 rounded-lg border transition-all ${
                        isDrifting
                          ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                          : "border-white/10 bg-white/5 text-white/50"
                      }`}
                    >
                      {isDrifting ? "● Auto-Drifting" : "○ Drift Paused"}
                    </button>
                    <span className="text-white/40">
                      {currentIndex + 1} / {length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-300 transition-all"
                      aria-label="Previous cloud"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-300 transition-all"
                      aria-label="Next cloud"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          /* GRID VIEW WITH SCROLL REVEAL */
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCloud(photo)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-cyan-300/50 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 uppercase mb-2">
                    <span>{photo.cloudType}</span>
                    <span>{photo.altitude}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 4. CLOUD SCIENCE & FORMATION EXPLAINER WITH SCROLL REVEAL */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 relative overflow-hidden backdrop-blur-md"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 mb-2 block">
              Behind The Lens
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Understanding Atmospheric Cloud Inversions
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              A temperature inversion occurs when warm air settles above a layer of cooler air near the surface, acting like a lid that traps stratus and stratocumulus clouds in valleys. Standing on a summit above the inversion creates the surreal feeling of standing over an endless, rolling ocean of white vapor.
            </p>
          </div>
        </motion.section>
      </div>

      {/* MODAL: CLOUD OPTICS & TELEMETRY */}
      <AnimatePresence>
        {selectedCloud && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCloud(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#0e0e12] p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedCloud(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white font-mono text-sm"
              >
                ✕ Close
              </button>

              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs font-mono text-cyan-300 uppercase mb-3">
                ☁️ {selectedCloud.cloudType} • {selectedCloud.altitude}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                {selectedCloud.title}
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {selectedCloud.caption}
              </p>

              {/* Telemetry Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                  <div className="text-white/40 uppercase">Aperture</div>
                  <div className="text-white font-bold mt-1">{selectedCloud.telemetry.aperture}</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                  <div className="text-white/40 uppercase">Shutter</div>
                  <div className="text-white font-bold mt-1">{selectedCloud.telemetry.shutter}</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                  <div className="text-white/40 uppercase">Sensitivity</div>
                  <div className="text-white font-bold mt-1">{selectedCloud.telemetry.iso}</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                  <div className="text-white/40 uppercase">Focal Length</div>
                  <div className="text-white font-bold mt-1">{selectedCloud.telemetry.focalLength}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-mono text-white/50 pt-3 border-t border-white/5">
                <span>Location: {selectedCloud.location}</span>
                <span>Lighting: {selectedCloud.lighting}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
