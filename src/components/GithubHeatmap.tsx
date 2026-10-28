import { useState } from "react";
import { motion } from "framer-motion";

const AKHIL_REPOS = [
  {
    name: "ConsistencyOS",
    url: "https://github.com/AkhilSrinivasa7/ConsistencyOS",
    desc: "A modern personal habit and wellness tracker for managing daily streaks, weight, sleep, steps, and progress analytics.",
    lang: "TypeScript",
    langColor: "#3178c6",
  },
  {
    name: "SynapseFlow",
    url: "https://github.com/AkhilSrinivasa7/SynapseFlow",
    desc: "AI-powered second brain for learners to capture notes, organize knowledge, generate AI summaries, and query saved notes.",
    lang: "AI / Python",
    langColor: "#3776ab",
  },
  {
    name: "firstwebapp",
    url: "https://github.com/AkhilSrinivasa7/firstwebapp",
    desc: "MERN Stack Development architecture exploration for scalable web interfaces.",
    lang: "JavaScript",
    langColor: "#f7df1e",
  },
  {
    name: "secure_storage",
    url: "https://github.com/AkhilSrinivasa7/secure_storage",
    desc: "Encrypted file and data security utility pipeline.",
    lang: "Security / Systems",
    langColor: "#10b981",
  },
];

export default function GithubHeatmap() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 py-16 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="mb-2 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="h-px w-8 bg-amber-400/60" />
              Open Source & Contributions
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              GitHub Calendar
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Real-time activity and contribution timeline for <span className="text-amber-300 font-mono font-bold">@AkhilSrinivasa7</span>.
            </p>
          </div>

          <a
            href="https://github.com/AkhilSrinivasa7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-white/5 px-4 py-2 text-xs font-mono font-bold text-white hover:border-amber-400 hover:text-amber-300 transition-all shadow-[0_0_15px_rgba(238,186,48,0.15)]"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <span>@AkhilSrinivasa7</span>
            <span className="text-amber-400">↗</span>
          </a>
        </div>

        {/* GITHUB CONTRIBUTION CALENDAR (User requested: replaced metrics with actual calendar) */}
        <div className="rounded-3xl border border-white/10 bg-[#0e0e11] p-6 sm:p-8 backdrop-blur-xl mb-10 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Live GitHub Contributions
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span>Less</span>
              <span className="h-3 w-3 rounded-sm bg-[#161b22]" />
              <span className="h-3 w-3 rounded-sm bg-[#0e4429]" />
              <span className="h-3 w-3 rounded-sm bg-[#006d32]" />
              <span className="h-3 w-3 rounded-sm bg-[#26a641]" />
              <span className="h-3 w-3 rounded-sm bg-[#39d353]" />
              <span>More</span>
            </div>
          </div>

          {/* Real-time GitHub Contribution Calendar Chart */}
          <div className="overflow-x-auto py-2">
            <div className="min-w-[700px] flex justify-center">
              <img
                src="https://ghchart.rshah.org/39d353/AkhilSrinivasa7"
                alt="Akhil's GitHub Contribution Calendar"
                className={`w-full max-w-4xl rounded-xl transition-all duration-700 filter drop-shadow-[0_0_15px_rgba(57,211,83,0.15)] ${
                  imageLoaded ? "opacity-100" : "opacity-90"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-white/40">
            <span>Profile: github.com/AkhilSrinivasa7</span>
            <span>Synced automatically with GitHub public graph</span>
          </div>
        </div>

        {/* FEATURED REPOSITORIES GRID */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 pl-1">
            Featured Public Repositories:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AKHIL_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md hover:border-amber-400/60 hover:bg-white/[0.04] transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {repo.name}
                    </h3>
                    <span className="text-amber-400 text-xs font-mono group-hover:translate-x-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-2">
                    {repo.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span className="text-white/80">{repo.lang}</span>
                  </div>
                  <span className="text-white/40 group-hover:text-amber-300 transition-colors">
                    View on GitHub
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
