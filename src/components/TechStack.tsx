import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { techStackList } from "../data/techStackData";

function renderTechLogo(iconType: string, color: string) {
  switch (iconType) {
    case "python":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 2c-4.94 0-4.63 2.14-4.63 2.14l.01 2.22h4.72v.67H5.32S2 6.64 2 11.62c0 4.97 2.89 4.8 2.89 4.8h1.72v-2.42s-.09-2.89 2.85-2.89h4.86s2.73.04 2.73-2.65V4.65S17.43 2 11.91 2zm-2.58 1.48a.86.86 0 110 1.72.86.86 0 010-1.72zm5.35 6.43v2.42s.09 2.89-2.85 2.89H6.97s-2.73-.04-2.73 2.65v3.81s-.38 2.65 5.14 2.65c4.94 0 4.63-2.14 4.63-2.14l-.01-2.22H9.28v-.67h6.69s3.32.39 3.32-4.59c0-4.98-2.89-4.8-2.89-4.8h-1.72zm-2.09 10.37a.86.86 0 110-1.72.86.86 0 010 1.72z" />
        </svg>
      );
    case "java":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.86 16.51s-.68.42.43.58c1.37.2 2.18.19 3.76-.2 0 0 .54.34 1.15.63-4.52 1.83-8.83-.24-5.34-1.01zm.77-2.34s-.85.57.34.72c1.55.2 2.74.24 4.97-.28 0 0 .38.36.83.58-5.35 1.79-10.45-.16-6.14-1.02zm3.32-5.45c.67.75.14 1.42-.82 2.29-1.29 1.16-1.5 1.83-.34 2.92.51.48.97.98.92 1.45-.1.88-1.5 1.57-2.93 1.62-.23.01-.45 0-.67-.03.74-.47 1.39-1.02 1.25-1.57-.26-.97-2.07-1.59-1.39-3.23.63-1.5 2.47-2.29 3.98-3.45zm5.17 9.87c.22-.16.4-.33.56-.51.49-.57.81-1.31.81-2.17 0-1.44-.88-2.75-2.21-3.26.17.47.24.97.18 1.48-.12.98-.67 1.82-1.47 2.37 1.05.57 1.83 1.29 2.13 2.09z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm15.42 12.38c-.37-.87-.8-1.1-1.63-1.1-.55 0-.96.28-.96.72 0 .58.55.8 1.45 1.19 1.56.66 2.44 1.34 2.44 2.94 0 1.95-1.5 3.03-3.79 3.03-2.14 0-3.37-.96-3.89-2.31l1.7-.99c.34.66.75 1.16 1.78 1.16.7 0 1.17-.33 1.17-.83 0-.58-.45-.8-1.45-1.22-1.4-.6-2.42-1.3-2.42-2.88 0-1.8 1.39-2.94 3.52-2.94 1.75 0 2.98.67 3.6 2.05l-1.52 1.18zm-7.66-2.52v7.16h-1.99v-5.26c-.46.33-1.08.6-1.54.77l-.54-1.53c1.07-.48 2.04-1.39 2.58-2.14h1.49v1z" />
        </svg>
      );
    case "typescript":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l1.5 1.5v21l-1.5 1.5h-21L0 22.5v-21L1.5 0zm9.4 12.8h-3v7.7H5.6v-7.7h-3V11h8.3v1.8zm10.2 3.1c-.2-1.2-1-2.1-2.7-2.6-.9-.3-1.6-.6-1.6-1.2 0-.6.5-.9 1.3-.9.9 0 1.5.3 2 .9l1.6-1.2c-.8-1.1-1.9-1.6-3.6-1.6-2.4 0-3.8 1.3-3.8 3.1 0 1.5.9 2.4 2.7 2.9 1.1.4 1.7.7 1.7 1.4 0 .7-.7 1-1.6 1-1.2 0-2-.5-2.6-1.4l-1.7 1.1c.8 1.5 2.2 2.3 4.2 2.3 2.7 0 4.2-1.4 4.2-3.3 0-.2-.1-.4-.1-.5z" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-8 h-8 animate-spin" style={{ animationDuration: "14s" }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.4" fill={color} />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke={color} strokeWidth="1.2" transform="rotate(150 12 12)" />
        </svg>
      );
    case "tensorflow":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.2L3.5 7.1v9.8l3.4 2 5.1-2.9V2.2zm0 4.1l3.5 2v7.7l-3.5 2V6.3zm5.1 1.1l3.4 2v5.6l-3.4-2V7.4z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.6v8.8L12 21.7l7.5-4.3V8.6L12 4.3zm-.2 4.7c1.7 0 2.8 1 2.8 2.5 0 1.2-.7 2-1.8 2.3l1.9 3.2h-1.8l-1.6-2.8h-.7v2.8H9V9h2.8zm-.2 1.5h-1v2.3h1c.8 0 1.3-.4 1.3-1.1 0-.8-.5-1.2-1.3-1.2z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "figma":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 1 1 0 6h-3V3z" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.25 19.5 7 12 10.5zm-8 4L12 18l8-3.5V17l-8 4-8-4v-2.5zm0-4L12 14l8-3.5V13l-8 4-8-4v-2.5z" />
        </svg>
      );
  }
}

export default function TechStack() {
  const [layoutMode, setLayoutMode] = useState<"carousel" | "grid" | "list">("carousel");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const carouselItems = [...techStackList, ...techStackList];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header with View Mode Switchers (Carousel, Grid, List) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="mb-2 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              Stack & Foundations
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              What powers my code.
            </h2>
          </div>

          {/* VIEW SWITCHER BUTTONS (User requested!) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 p-1 text-xs font-mono">
              <button
                onClick={() => setLayoutMode("carousel")}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  layoutMode === "carousel"
                    ? "bg-brand-lime text-brand-dark font-bold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Carousel
              </button>
              <button
                onClick={() => setLayoutMode("grid")}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  layoutMode === "grid"
                    ? "bg-brand-lime text-brand-dark font-bold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setLayoutMode("list")}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  layoutMode === "list"
                    ? "bg-brand-lime text-brand-dark font-bold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                List
              </button>
            </div>

            {/* Navigation arrows for carousel view */}
            {layoutMode === "carousel" && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={scrollLeft}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:border-brand-lime hover:text-brand-lime transition-all"
                  aria-label="Scroll left"
                >
                  ←
                </button>
                <button
                  onClick={scrollRight}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:border-brand-lime hover:text-brand-lime transition-all"
                  aria-label="Scroll right"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 1. CAROUSEL VIEW */}
        {layoutMode === "carousel" && (
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10" />

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto py-4 px-2 no-scrollbar scrollbar-none cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: "none" }}
            >
              {carouselItems.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="group relative flex flex-col items-center justify-center shrink-0 w-44 sm:w-48 h-48 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:border-brand-lime hover:bg-white/[0.05] hover:-translate-y-1.5"
                >
                  <div
                    className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  >
                    {renderTechLogo(tech.iconType, tech.color)}
                  </div>
                  <span className="text-sm font-bold text-white font-display text-center group-hover:text-brand-lime transition-colors">
                    {tech.name}
                  </span>
                  <span className="mt-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/50 uppercase">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. GRID VIEW */}
        {layoutMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
          >
            {techStackList.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md hover:border-brand-lime hover:bg-white/[0.05] transition-all hover:-translate-y-1"
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                >
                  {renderTechLogo(tech.iconType, tech.color)}
                </div>
                <span className="text-sm font-bold text-white font-display text-center group-hover:text-brand-lime transition-colors">
                  {tech.name}
                </span>
                <span className="mt-1 text-[10px] font-mono text-white/50 uppercase">
                  {tech.level}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* 3. LIST VIEW */}
        {layoutMode === "list" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {techStackList.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-brand-lime hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10"
                    style={{ color: tech.color }}
                  >
                    {renderTechLogo(tech.iconType, tech.color)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-1">{tech.description}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-mono text-white/50 uppercase shrink-0">
                  {tech.level}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
