const AKHIL_REPOS = [
  {
    name: "ConsistencyOS",
    url: "https://github.com/AkhilSrinivasa7/ConsistencyOS",
    desc: "A modern personal habit and wellness tracker for managing daily streaks, weight, sleep, steps, and progress analytics.",
    stars: 0,
    forks: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
  },
  {
    name: "SynapseFlow",
    url: "https://github.com/AkhilSrinivasa7/SynapseFlow",
    desc: "AI-powered second brain for learners to capture notes, organize knowledge, generate AI summaries, and query saved notes.",
    stars: 0,
    forks: 0,
    lang: "AI / Python",
    langColor: "#3776ab",
  },
  {
    name: "firstwebapp",
    url: "https://github.com/AkhilSrinivasa7/firstwebapp",
    desc: "MERN Stack Development architecture exploration for scalable web interfaces.",
    stars: 0,
    forks: 0,
    lang: "JavaScript",
    langColor: "#f7df1e",
  },
  {
    name: "secure_storage",
    url: "https://github.com/AkhilSrinivasa7/secure_storage",
    desc: "Encrypted file and data security utility pipeline.",
    stars: 0,
    forks: 0,
    lang: "Security / Systems",
    langColor: "#10b981",
  },
];

export default function GithubHeatmap() {
  return (
    <section className="relative z-10 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="mb-2 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              GitHub Metrics & Repositories
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              GitHub Metrics
            </h2>
          </div>

          <a
            href="https://github.com/AkhilSrinivasa7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold text-white hover:border-brand-lime hover:text-brand-lime transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <span>@AkhilSrinivasa7</span>
            <span className="text-brand-lime">↗</span>
          </a>
        </div>

        {/* METRICS CARDS ROW (User requested: make it look as metrics) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
            <div className="text-3xl sm:text-4xl font-bold font-display text-brand-lime">20</div>
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Recorded Commits</div>
            <div className="text-[11px] font-mono text-white/40 mt-2">19 in 2026 · 1 in 2025</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
            <div className="text-3xl sm:text-4xl font-bold font-display text-white">4</div>
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Public Repos</div>
            <div className="text-[11px] font-mono text-cyan-300 mt-2">All Open Source</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
            <div className="text-3xl sm:text-4xl font-bold font-display text-white">1</div>
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Follower</div>
            <div className="text-[11px] font-mono text-white/40 mt-2">GitHub Network</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">Active</div>
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">Account Status</div>
            <div className="text-[11px] font-mono text-white/40 mt-2">Since Jan 26, 2025</div>
          </div>
        </div>

        {/* REPOSITORIES GRID */}
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
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md hover:border-brand-lime hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-brand-lime transition-colors">
                      {repo.name}
                    </h3>
                    <span className="text-brand-lime text-xs font-mono group-hover:translate-x-0.5 transition-transform">
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
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    View on GitHub
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
