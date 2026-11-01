import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechBadge {
  name: string;
  icon: (color?: string) => React.ReactNode;
  category?: string;
  color?: string;
}

// High quality official colored logo images for all tools
const TECH_ICONS: Record<string, () => React.ReactNode> = {
  JavaScript: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  React: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4 object-contain animate-spin" style={{ animationDuration: "14s" }} loading="lazy" />
  ),
  TypeScript: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  "Tailwind CSS": () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  "Next.js": () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-4 h-4 object-contain invert" loading="lazy" />
  ),
  Sass: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  HTML5: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  CSS3: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Python: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  "Node.js": () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Java: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  SQLite: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  MongoDB: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Supabase: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Firebase: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Vercel: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="w-4 h-4 object-contain invert" loading="lazy" />
  ),
  GitHub: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 object-contain invert" loading="lazy" />
  ),
  Git: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  npm: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Netlify: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Sanity: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg" alt="Sanity" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Photoshop: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="Photoshop" className="w-4 h-4 object-contain" loading="lazy" />
  ),
  Eraser: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF5C5C">
      <path d="M16.24 3.56l4.95 4.94a1.5 1.5 0 0 1 0 2.12l-9.9 9.9H2.5v-8.79l9.9-9.9a1.5 1.5 0 0 1 2.12 0l1.72 1.73zM5.5 18.5h4.38l8.48-8.49-3.53-3.53L6.35 15H5.5v3.5z" />
    </svg>
  ),
  Figma: () => (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-4 h-4 object-contain" loading="lazy" />
  ),
};

// 3 Staggered Rows of Badges
const ROW_1: TechBadge[] = [
  { name: "JavaScript", icon: TECH_ICONS.JavaScript },
  { name: "React", icon: TECH_ICONS.React },
  { name: "TypeScript", icon: TECH_ICONS.TypeScript },
  { name: "Tailwind CSS", icon: TECH_ICONS["Tailwind CSS"] },
  { name: "Next.js", icon: TECH_ICONS["Next.js"] },
  { name: "Sass", icon: TECH_ICONS.Sass },
  { name: "HTML5", icon: TECH_ICONS.HTML5 },
  { name: "CSS3", icon: TECH_ICONS.CSS3 },
];

const ROW_2: TechBadge[] = [
  { name: "Python", icon: TECH_ICONS.Python },
  { name: "Node.js", icon: TECH_ICONS["Node.js"] },
  { name: "Java", icon: TECH_ICONS.Java },
  { name: "SQLite", icon: TECH_ICONS.SQLite },
  { name: "MongoDB", icon: TECH_ICONS.MongoDB },
  { name: "Supabase", icon: TECH_ICONS.Supabase },
  { name: "Firebase", icon: TECH_ICONS.Firebase },
  { name: "Vercel", icon: TECH_ICONS.Vercel },
];

const ROW_3: TechBadge[] = [
  { name: "GitHub", icon: TECH_ICONS.GitHub },
  { name: "Git", icon: TECH_ICONS.Git },
  { name: "npm", icon: TECH_ICONS.npm },
  { name: "Netlify", icon: TECH_ICONS.Netlify },
  { name: "Sanity", icon: TECH_ICONS.Sanity },
  { name: "Photoshop", icon: TECH_ICONS.Photoshop },
  { name: "Eraser", icon: TECH_ICONS.Eraser },
  { name: "Figma", icon: TECH_ICONS.Figma },
];

const ALL_BADGES = [...ROW_1, ...ROW_2, ...ROW_3];

export default function TechArsenal() {
  const [viewMode, setViewMode] = useState<"carousel" | "grid" | "list">("carousel");
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);

  const scrollRows = (direction: "left" | "right") => {
    const delta = direction === "left" ? -280 : 280;
    if (row1Ref.current) row1Ref.current.scrollBy({ left: delta, behavior: "smooth" });
    if (row2Ref.current) row2Ref.current.scrollBy({ left: -delta, behavior: "smooth" });
    if (row3Ref.current) row3Ref.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 bg-[#0d0d0d] border-y border-[#1a1a1f] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* 1. LAYOUT & STRUCTURE: HEADER WITH CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
              Tech Arsenal
            </h2>
            <p className="mt-1.5 text-sm font-sans text-neutral-400">
              Favorite tools that help me bring ideas to life. See my{" "}
              <a
                href="https://github.com/AkhilSrinivasa7"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 underline hover:text-white transition-colors"
              >
                Stackshare
              </a>{" "}
              for more.
            </p>
          </div>

          {/* CONTROL OPTIONS ON TOP RIGHT */}
          <div className="flex items-center gap-2.5">
            {/* Carousel navigation arrows */}
            {viewMode === "carousel" && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollRows("left")}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#222226] bg-[#16161a] text-neutral-300 hover:text-white hover:border-[#383842] transition-all"
                  aria-label="Scroll Carousel Left"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollRows("right")}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#222226] bg-[#16161a] text-neutral-300 hover:text-white hover:border-[#383842] transition-all"
                  aria-label="Scroll Carousel Right"
                >
                  →
                </button>
              </div>
            )}

            {/* View switcher buttons */}
            <div className="flex items-center self-start sm:self-auto rounded-xl border border-[#222226] bg-[#16161a] p-1 shadow-inner">
              <button
                onClick={() => setViewMode("carousel")}
                title="Carousel View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === "carousel"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <path d="M12 7v10" />
                </svg>
                <span className="hidden xs:inline">Carousel</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                title="Grid View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span className="hidden xs:inline">Grid</span>
              </button>

              <button
                onClick={() => setViewMode("list")}
                title="List View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === "list"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                <span className="hidden xs:inline">List</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2 & 3. BADGE STYLING & CAROUSEL INTERACTION */}
        <AnimatePresence mode="wait">
          {viewMode === "carousel" && (
            <motion.div
              key="carousel-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full -mx-4 sm:-mx-6 px-4 sm:px-6"
            >
              {/* GENTLE FADE EFFECT ON LEFT AND RIGHT EDGES VIA LINEAR-GRADIENT MASK */}
              <div className="mask-marquee-edges space-y-3.5 py-2">
                {/* ROW 1: Slides Left with Infinite Carousel Loop + Manual Drag/Scroll */}
                <div
                  ref={row1Ref}
                  className="flex gap-3 overflow-x-auto no-scrollbar scrollbar-none select-none py-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee_42s_linear_infinite] hover:[animation-play-state:paused] [will-change:transform]">
                    {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((badge, idx) => (
                      <div
                        key={`r1-${badge.name}-${idx}`}
                        className="group flex items-center gap-2.5 rounded-full border border-[#222226] bg-[#16161a] px-4 py-2 shadow-sm transition-all duration-200 hover:border-[#383842] hover:bg-[#1d1d22] cursor-pointer"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                          {badge.icon()}
                        </span>
                        <span className="text-xs font-medium text-neutral-200 whitespace-nowrap group-hover:text-white transition-colors">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 2: Staggered, Slides Right with Infinite Carousel Loop + Manual Drag/Scroll */}
                <div
                  ref={row2Ref}
                  className="flex gap-3 overflow-x-auto no-scrollbar scrollbar-none select-none py-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee-reverse_48s_linear_infinite] hover:[animation-play-state:paused] [will-change:transform]">
                    {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((badge, idx) => (
                      <div
                        key={`r2-${badge.name}-${idx}`}
                        className="group flex items-center gap-2.5 rounded-full border border-[#222226] bg-[#16161a] px-4 py-2 shadow-sm transition-all duration-200 hover:border-[#383842] hover:bg-[#1d1d22] cursor-pointer"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                          {badge.icon()}
                        </span>
                        <span className="text-xs font-medium text-neutral-200 whitespace-nowrap group-hover:text-white transition-colors">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 3: Staggered, Slides Left with Infinite Carousel Loop + Manual Drag/Scroll */}
                <div
                  ref={row3Ref}
                  className="flex gap-3 overflow-x-auto no-scrollbar scrollbar-none select-none py-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee_44s_linear_infinite] hover:[animation-play-state:paused] [will-change:transform]">
                    {[...ROW_3, ...ROW_3, ...ROW_3, ...ROW_3].map((badge, idx) => (
                      <div
                        key={`r3-${badge.name}-${idx}`}
                        className="group flex items-center gap-2.5 rounded-full border border-[#222226] bg-[#16161a] px-4 py-2 shadow-sm transition-all duration-200 hover:border-[#383842] hover:bg-[#1d1d22] cursor-pointer"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                          {badge.icon()}
                        </span>
                        <span className="text-xs font-medium text-neutral-200 whitespace-nowrap group-hover:text-white transition-colors">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* GRID VIEW OPTION */}
          {viewMode === "grid" && (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2"
            >
              {ALL_BADGES.map((badge) => (
                <div
                  key={`grid-${badge.name}`}
                  className="group flex items-center gap-2.5 rounded-full border border-[#222226] bg-[#16161a] px-4 py-2.5 shadow-sm transition-all duration-200 hover:border-[#383842] hover:bg-[#1d1d22] cursor-pointer"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
                    {badge.icon()}
                  </span>
                  <span className="text-xs font-medium text-neutral-200 truncate group-hover:text-white transition-colors">
                    {badge.name}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {/* LIST VIEW OPTION */}
          {viewMode === "list" && (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2"
            >
              {ALL_BADGES.map((badge) => (
                <div
                  key={`list-${badge.name}`}
                  className="group flex items-center justify-between rounded-xl border border-[#222226] bg-[#16161a] px-4 py-2.5 shadow-sm hover:border-[#383842] hover:bg-[#1d1d22] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                      {badge.icon()}
                    </span>
                    <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {badge.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400">
                    Active
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
