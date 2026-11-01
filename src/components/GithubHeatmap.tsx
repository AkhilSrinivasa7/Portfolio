import GitHubCalendar from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <div className="github-section py-12 px-4 sm:px-6 relative z-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-brand-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-lime animate-pulse" />
              GitHub Activity
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
              My Contributions
            </h2>
          </div>

          <a
            href="https://github.com/AkhilSrinivasa7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold text-white hover:border-brand-lime hover:text-brand-lime transition-all shadow-sm"
          >
            <span>@AkhilSrinivasa7 ↗</span>
          </a>
        </div>

        <div className="rounded-2xl shadow-2xl">
          <GitHubCalendar username="AkhilSrinivasa7" />
        </div>
      </div>
    </div>
  );
}