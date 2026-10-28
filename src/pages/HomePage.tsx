import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InteractiveStackToy from "../components/InteractiveStackToy";
import TechArsenal from "../components/TechArsenal";
import GithubHeatmap from "../components/GithubHeatmap";
import AnimatedName from "../components/AnimatedName";
import { socialLinks } from "../data/socialLinks";

export default function HomePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      {/* 1. HERO SECTION WITH SCROLL / MOUNT ANIMATION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex min-h-[88vh] items-center px-6 py-12"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 relative z-10">
            <div>
              {/* ANIMATED NAME PILL & DECODER (User requested: fix name animation!) */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <AnimatedName variant="pill" />
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-red-900/40 bg-red-950/20 px-3 py-1 text-[11px] font-mono text-amber-300">
                  <span>🦁 Gryffindor</span>
                  <span>•</span>
                  <span>Cinephile 🎬</span>
                </span>
              </div>

              {/* USER'S SIGNATURE LINE WITH HOLLOW ANIMATION */}
              <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold leading-[1.08] tracking-tight font-display mb-6">
                <span className="text-white block font-harry tracking-wide">
                  I build systems that think.
                </span>
                {/* HOLLOW ANIMATION WITH BOLD ON CURSOR HOVER */}
                <span className="animate-hollow-glow hollow-interactive-bold block mt-2 text-outline origin-left select-none font-harry tracking-wide">
                  And experiences that feel.
                </span>
              </h1>

              <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-white/70">
                Computer Science student engineering intelligent systems at the intersection of AI, robust software, cloud photography, and Harry Potter lore.
              </p>

              {/* PRIMARY PROFILES & LINKS (LinkedIn, GitHub, LeetCode, Mail) */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-3">
                  Verified Channels:
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {socialLinks.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-mono font-bold text-white transition-all hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300 backdrop-blur-md"
                    >
                      {item.id === "linkedin" && (
                        <svg className="w-4 h-4 text-[#0a66c2] group-hover:text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                        </svg>
                      )}
                      {item.id === "github" && (
                        <svg className="w-4 h-4 text-white group-hover:text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                        </svg>
                      )}
                      {item.id === "leetcode" && (
                        <svg className="w-4 h-4 text-[#ffa116] group-hover:text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .383-.347l3.967-4.246 4.922-5.26a1.388 1.388 0 0 0 0-1.917A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-.977.406l-4.5 4.5a1.38 1.38 0 0 0 0 1.952 1.38 1.38 0 0 0 1.953 0l4.5-4.5a1.38 1.38 0 0 0-.976-2.358z" />
                        </svg>
                      )}
                      {item.id === "mail" && (
                        <svg className="w-4 h-4 text-emerald-400 group-hover:text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      )}
                      <span>{item.name}</span>
                      <span className="text-white/40 group-hover:text-amber-300 text-[10px]">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_15px_rgba(238,186,48,0.35)]"
                >
                  Explore Work →
                </Link>

                <Link
                  to="/about"
                  className="magnetic-hover inline-flex items-center gap-2 rounded-xl border border-white/20 glass px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors hover:border-amber-400 hover:text-amber-300"
                >
                  About Akhil
                </Link>

                <Link
                  to="/cloud"
                  className="magnetic-hover inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 transition-colors hover:border-cyan-300 hover:bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                >
                  Cloud Photography ☁️
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: INTERACTIVE 3D CARD STACK TOY */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full max-w-lg"
            >
              <InteractiveStackToy />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. TECH ARSENAL (MODERN COMPONENT WITH 3 STAGGERED MARQUEE TRACKS & CONTROLS) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
      >
        <TechArsenal />
      </motion.div>

      {/* 3. GITHUB CALENDAR (SYNCED TO AKHIL'S REAL GITHUB PROFILE @AkhilSrinivasa7) */}
      <GithubHeatmap />

      {/* 4. EXPLORE CLOUD & ATMOSPHERE BANNER WITH SCROLL REVEAL */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="px-6 py-12"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 sm:p-12 relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -inset-10 bg-cyan-400/10 blur-3xl" />
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Fascinated by Clouds, Inversions & Changing Skies?
          </h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-6">
            Explore high-altitude mountain inversions, giant convective thunderheads, and atmospheric twilight captures framed with optical glass.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/cloud"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-white transition-colors shadow-[0_0_20px_rgba(103,232,249,0.35)]"
            >
              Enter Cloud Horizon ☁️
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-white/20 glass px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-amber-400 hover:text-amber-300 transition-colors"
            >
              About & View Resume ↗
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
