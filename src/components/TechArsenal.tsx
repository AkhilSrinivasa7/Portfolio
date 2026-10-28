import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechBadge {
  name: string;
  icon: (color?: string) => React.ReactNode;
  category?: string;
  color?: string;
}

// Crisp inline SVGs for all requested tools
const TECH_ICONS: Record<string, (color?: string) => React.ReactNode> = {
  JavaScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F7DF1E">
      <path d="M3 3h18v18H3V3zm15.42 12.38c-.37-.87-.8-1.1-1.63-1.1-.55 0-.96.28-.96.72 0 .58.55.8 1.45 1.19 1.56.66 2.44 1.34 2.44 2.94 0 1.95-1.5 3.03-3.79 3.03-2.14 0-3.37-.96-3.89-2.31l1.7-.99c.34.66.75 1.16 1.78 1.16.7 0 1.17-.33 1.17-.83 0-.58-.45-.8-1.45-1.22-1.4-.6-2.42-1.3-2.42-2.88 0-1.8 1.39-2.94 3.52-2.94 1.75 0 2.98.67 3.6 2.05l-1.52 1.18zm-7.66-2.52v7.16h-1.99v-5.26c-.46.33-1.08.6-1.54.77l-.54-1.53c1.07-.48 2.04-1.39 2.58-2.14h1.49v1z" />
    </svg>
  ),
  React: () => (
    <svg className="w-4 h-4 animate-spin" style={{ animationDuration: "14s" }} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.8">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#3178C6">
      <path d="M1.5 0h21l1.5 1.5v21l-1.5 1.5h-21L0 22.5v-21L1.5 0zm9.4 12.8h-3v7.7H5.6v-7.7h-3V11h8.3v1.8zm10.2 3.1c-.2-1.2-1-2.1-2.7-2.6-.9-.3-1.6-.6-1.6-1.2 0-.6.5-.9 1.3-.9.9 0 1.5.3 2 .9l1.6-1.2c-.8-1.1-1.9-1.6-3.6-1.6-2.4 0-3.8 1.3-3.8 3.1 0 1.5.9 2.4 2.7 2.9 1.1.4 1.7.7 1.7 1.4 0 .7-.7 1-1.6 1-1.2 0-2-.5-2.6-1.4l-1.7 1.1c.8 1.5 2.2 2.3 4.2 2.3 2.7 0 4.2-1.4 4.2-3.3 0-.2-.1-.4-.1-.5z" />
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  "Next.js": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.88 18.33l-5.63-7.29v7.29H10.5V8.17h1.75l5.63 7.29V8.17h1.75v10.16h-1.75z" />
    </svg>
  ),
  Sass: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#CD6799">
      <path d="M11.996 0a12 12 0 00-6.97 21.758c.453-.787.973-1.597 1.592-2.392-.122-.387-.206-.795-.206-1.22 0-1.808 1.488-3.275 3.324-3.275.467 0 .907.1 1.306.275a5.556 5.556 0 001.994-3.568c.032-.232.064-.467.064-.707 0-3.69-3.045-6.68-6.8-6.68-3.07 0-5.65 2.002-6.52 4.79C.887 10.33.5 11.666.5 13.064c0 3.792 2.748 7.02 6.544 8.243A12.004 12.004 0 0111.996 0z" />
    </svg>
  ),
  HTML5: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.5 6.5H6.2l.3 3.3h10.9l-.7 7.7-4.7 1.3-4.7-1.3-.3-3.6h2.5l.2 1.8 2.3.6 2.3-.6.3-3H6.8l-.8-9.2h12.3l-.3 3.2z" />
    </svg>
  ),
  CSS3: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1572B6">
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.7 6.4H5.8l.8 9.3 5.4 1.5 5.4-1.5.7-7.8h-2.5l-.4 5.3-3.2.9-3.2-.9-.2-2.8h7.9l.3-4.5z" />
    </svg>
  ),
  Python: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#3776AB">
      <path d="M11.91 2c-4.94 0-4.63 2.14-4.63 2.14l.01 2.22h4.72v.67H5.32S2 6.64 2 11.62c0 4.97 2.89 4.8 2.89 4.8h1.72v-2.42s-.09-2.89 2.85-2.89h4.86s2.73.04 2.73-2.65V4.65S17.43 2 11.91 2zm-2.58 1.48a.86.86 0 110 1.72.86.86 0 010-1.72zm5.35 6.43v2.42s.09 2.89-2.85 2.89H6.97s-2.73-.04-2.73 2.65v3.81s-.38 2.65 5.14 2.65c4.94 0 4.63-2.14 4.63-2.14l-.01-2.22H9.28v-.67h6.69s3.32.39 3.32-4.59c0-4.98-2.89-4.8-2.89-4.8h-1.72zm-2.09 10.37a.86.86 0 110-1.72.86.86 0 010 1.72z" />
    </svg>
  ),
  "Node.js": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#5FA04E">
      <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.6v8.8L12 21.7l7.5-4.3V8.6L12 4.3zm-.2 4.7c1.7 0 2.8 1 2.8 2.5 0 1.2-.7 2-1.8 2.3l1.9 3.2h-1.8l-1.6-2.8h-.7v2.8H9V9h2.8zm-.2 1.5h-1v2.3h1c.8 0 1.3-.4 1.3-1.1 0-.8-.5-1.2-1.3-1.2z" />
    </svg>
  ),
  Java: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F89820">
      <path d="M8.86 16.51s-.68.42.43.58c1.37.2 2.18.19 3.76-.2 0 0 .54.34 1.15.63-4.52 1.83-8.83-.24-5.34-1.01zm.77-2.34s-.85.57.34.72c1.55.2 2.74.24 4.97-.28 0 0 .38.36.83.58-5.35 1.79-10.45-.16-6.14-1.02zm3.32-5.45c.67.75.14 1.42-.82 2.29-1.29 1.16-1.5 1.83-.34 2.92.51.48.97.98.92 1.45-.1.88-1.5 1.57-2.93 1.62-.23.01-.45 0-.67-.03.74-.47 1.39-1.02 1.25-1.57-.26-.97-2.07-1.59-1.39-3.23.63-1.5 2.47-2.29 3.98-3.45z" />
    </svg>
  ),
  SQLite: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#003B57">
      <path d="M12 3c-4.97 0-9 1.34-9 3v12c0 1.66 4.03 3 9 3s9-1.34 9-3V6c0-1.66-4.03-3-9-3zm0 2c3.87 0 7 1.01 7 2s-3.13 2-7 2-7-1.01-7-2 3.13-2 7-2zm7 5.1c-.85.54-2.12.98-3.66 1.25-1.01.18-2.14.28-3.34.28-1.2 0-2.33-.1-3.34-.28C7.12 11.08 5.85 10.64 5 10.1V8.65c1.82.9 4.26 1.45 7 1.45s5.18-.55 7-1.45v1.45zm0 4c-.85.54-2.12.98-3.66 1.25-1.01.18-2.14.28-3.34.28-1.2 0-2.33-.1-3.34-.28C7.12 15.08 5.85 14.64 5 14.1V12.65c1.82.9 4.26 1.45 7 1.45s5.18-.55 7-1.45v1.45z" />
    </svg>
  ),
  MongoDB: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#47A248">
      <path d="M12 0s-5.63 7.82-5.63 13.5c0 4.15 3.37 7.5 7.5 7.5 4.14 0 7.5-3.35 7.5-7.5C21.37 7.82 12 0 12 0zm-.37 23.47c-.55 0-.98-.44-.98-1 0-.25.09-.49.25-.67l.73-.8v2.47zm.74 0v-2.47l.73.8c.16.18.25.42.25.67 0 .56-.44 1-.98 1z" />
    </svg>
  ),
  Supabase: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#3ECF8E">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.638 14.25a.396.396 0 0 0 .316.642H12v8.712a.396.396 0 0 0 .716.233l10.646-14.087a.396.396 0 0 0-.316-.642z" />
    </svg>
  ),
  Firebase: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFCA28">
      <path d="M3.89 15.67L6.82.7a.82.82 0 0 1 1.54-.15l3.22 6.04-7.69 9.08zm16.22 0l-1.92-12a.82.82 0 0 0-1.42-.42L3.89 15.67l7.52 4.22a1.32 1.32 0 0 0 1.18 0l7.52-4.22zM12.92 7.88L15.4 3.2a.82.82 0 0 1 1.48.24l2.42 12.23-6.38-7.79z" />
    </svg>
  ),
  Vercel: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  GitHub: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  Git: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F05032">
      <path d="M23.54 11.5L12.5.46a1.44 1.44 0 0 0-2.03 0L8.43 2.5 11 5.07a1.72 1.72 0 0 1 1.72 2.87l2.5 2.5a1.72 1.72 0 1 1-1.03 1L11.75 8.97a1.72 1.72 0 0 1-2.27-2.2L6.96 4.25.46 10.75a1.44 1.44 0 0 0 0 2.03l11.04 11.04a1.44 1.44 0 0 0 2.03 0l10.01-10.01a1.44 1.44 0 0 0 0-2.31z" />
    </svg>
  ),
  npm: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#CB3837">
      <path d="M0 7.334v9.332h7.997V9.333h4.004v7.333H24V7.334H0zm4 6.666H2.667v-4H4v4zm5.333 0H8v-4h1.333v4zm4-4h1.333v4h-1.333v-4z" />
    </svg>
  ),
  Netlify: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#00C7B7">
      <path d="M18.88 9.53l-2.73-2.73a.58.58 0 0 0-.82 0l-5.8 5.8a.58.58 0 0 0 0 .82l2.73 2.73a.58.58 0 0 0 .82 0l5.8-5.8a.58.58 0 0 0 0-.82zM6.9 12.06L3.43 8.59a.58.58 0 0 1 0-.82L5.8 5.4a.58.58 0 0 1 .82 0l3.47 3.47a.58.58 0 0 1 0 .82l-2.37 2.37a.58.58 0 0 1-.82 0zm10.2 6.54l-2.37 2.37a.58.58 0 0 1-.82 0l-3.47-3.47a.58.58 0 0 1 0-.82l2.37-2.37a.58.58 0 0 1 .82 0l3.47 3.47a.58.58 0 0 1 0 .82z" />
    </svg>
  ),
  Sanity: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F03E2F">
      <path d="M15.48 4.22C13.88 2.68 11.75 1.7 9.4 1.7 4.2 1.7 0 5.92 0 11.12c0 2.37.88 4.54 2.35 6.2l13.13-13.1zm6.17 3.66L8.52 20.98c1.6 1.54 3.73 2.52 6.08 2.52 5.2 0 9.4-4.22 9.4-9.42 0-2.37-.88-4.54-2.35-6.2z" />
    </svg>
  ),
  Photoshop: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#31A8FF">
      <path d="M0 0v24h24V0H0zm3.38 3.38h17.24v17.24H3.38V3.38zm3.3 3.3v10.6h2.52v-3.7h1.75c2.6 0 4.14-1.34 4.14-3.46 0-2.22-1.63-3.44-4.23-3.44H6.68zm2.52 2.12h1.56c1.23 0 1.95.53 1.95 1.34 0 .83-.72 1.34-1.95 1.34H9.2v-2.68z" />
    </svg>
  ),
  Eraser: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF5C5C">
      <path d="M16.24 3.56l4.95 4.94a1.5 1.5 0 0 1 0 2.12l-9.9 9.9H2.5v-8.79l9.9-9.9a1.5 1.5 0 0 1 2.12 0l1.72 1.73zM5.5 18.5h4.38l8.48-8.49-3.53-3.53L6.35 15H5.5v3.5z" />
    </svg>
  ),
  Figma: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F24E1E">
      <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 1 1 0 6h-3V3z" />
    </svg>
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
  const [viewMode, setViewMode] = useState<"marquee" | "grid" | "list">("marquee");

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

          {/* CONTROL OPTIONS ON TOP RIGHT: Grouped button panel with icons */}
          <div className="flex items-center self-start sm:self-auto rounded-xl border border-[#222226] bg-[#16161a] p-1 shadow-inner">
            <button
              onClick={() => setViewMode("marquee")}
              title="Carousel / Infinite Marquee View"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === "marquee"
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

        {/* 2 & 3. BADGE STYLING & INTERACTION */}
        <AnimatePresence mode="wait">
          {viewMode === "marquee" && (
            <motion.div
              key="marquee-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full -mx-4 sm:-mx-6 px-4 sm:px-6"
            >
              {/* GENTLE FADE EFFECT ON LEFT AND RIGHT EDGES VIA LINEAR-GRADIENT MASK */}
              <div className="mask-marquee-edges space-y-3.5 py-2">
                {/* ROW 1: Slides Slowly Left */}
                <div className="flex gap-3 overflow-hidden select-none">
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...ROW_1, ...ROW_1, ...ROW_1].map((badge, idx) => (
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

                {/* ROW 2: Staggered, Slides Slowly Right (Reverse) */}
                <div className="flex gap-3 overflow-hidden select-none">
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee-reverse_44s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...ROW_2, ...ROW_2, ...ROW_2].map((badge, idx) => (
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

                {/* ROW 3: Staggered, Slides Slowly Left */}
                <div className="flex gap-3 overflow-hidden select-none">
                  <div className="flex shrink-0 items-center gap-3 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...ROW_3, ...ROW_3, ...ROW_3].map((badge, idx) => (
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
