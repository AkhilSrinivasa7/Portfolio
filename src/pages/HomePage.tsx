import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        className="relative flex min-h-[82vh] items-center px-6 py-12"
      >
        <div className="mx-auto max-w-4xl w-full">
          <div>
            {/* ANIMATED NAME PILL */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <AnimatedName variant="pill" />
            </div>

            {/* USER'S SIGNATURE LINE WITH HOLLOW ANIMATION */}
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-bold leading-[1.08] tracking-tight font-display mb-6">
              <span className="text-white block">
                I build systems that think.
              </span>
              {/* HOLLOW ANIMATION WITH BOLD ON CURSOR HOVER */}
              <span className="animate-hollow-glow hollow-interactive-bold block mt-2 text-outline origin-left select-none">
                And experiences that feel.
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-white/70">
              Computer Science student and Designer engineering intelligent systems at the intersection of AI, robust software, visual design, and sensory digital architecture.
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
                    <img
                      src={item.logoUrl}
                      alt={item.name}
                      className={`w-4 h-4 object-contain ${
                        item.id === "github" ? "invert" : ""
                      }`}
                    />
                    <span>{item.name}</span>
                    <span className="text-white/40 group-hover:text-amber-300 text-[10px]">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons: Beside Explore Work, directly contact link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_15px_rgba(238,186,48,0.35)]"
              >
                Explore Work →
              </Link>

              <Link
                to="/contact"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-brand-lime px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                Contact Me Directly ✉
              </Link>

              <Link
                to="/about"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl border border-white/20 glass px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors hover:border-amber-400 hover:text-amber-300"
              >
                About Akhil
              </Link>

              <Link
                to="/gallery"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-brand-lime hover:text-brand-lime shadow-[0_0_15px_rgba(204,255,0,0.1)]"
              >
                Some Moments ✦
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. TECH ARSENAL */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
      >
        <TechArsenal />
      </motion.div>

      {/* 3. GITHUB CALENDAR (My Contributions) */}
      <GithubHeatmap />

      {/* 4. PROFESSIONAL EXPERIENCE (Kept at the down) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="px-6 py-12"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-brand-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime animate-pulse" />
            Professional Experience
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d0d12]/90 backdrop-blur-xl p-6 sm:p-8 hover:border-brand-lime/50 transition-all shadow-xl group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/30 inline-block mb-2">
                  Active Role
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Designer
                </h3>
                <p className="text-base text-white/90 font-medium font-sans mt-0.5">
                  Visu Technologies
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl sm:text-right shrink-0">
                <span className="text-brand-lime font-bold">2025</span> — Present
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/70 max-w-2xl font-sans">
              Leading visual design, interactive product user interfaces, and brand design architecture at Visu Technologies. Crafting design systems that marry tactile digital aesthetics with intuitive computational experiences.
            </p>

            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono text-white/60">
              <span className="rounded-lg bg-white/5 px-2.5 py-1 border border-white/10 text-white/80">UI/UX Design</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1 border border-white/10 text-white/80">Design Systems</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1 border border-white/10 text-white/80">Visual Architecture</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1 border border-white/10 text-white/80">Figma & Prototyping</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
