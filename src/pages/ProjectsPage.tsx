import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "SynapseFlow",
    tagline: "AI-Powered Knowledge Synthesis & Second Brain",
    desc: "An intelligent personal knowledge network designed to ingest documents, generate automated conceptual summaries, visualize relational graph structures, and enable multi-turn semantic query workflows over private corpora.",
    tags: ["Generative AI", "Vector Database", "TypeScript", "React", "Python"],
    category: "AI & Knowledge",
    status: "Active Repository",
    year: "2026",
    link: "https://github.com/AkhilSrinivasa7/SynapseFlow",
    highlights: ["Semantic Chunking & Embedding Pipeline", "Interactive Knowledge Graph", "Direct Multi-turn Agent Chat"],
  },
  {
    id: "02",
    title: "ConsistencyOS",
    tagline: "Personal Habit & Wellness Analytics System",
    desc: "A modern personal habit and wellness tracker for managing daily habits, streaks, weight, sleep, steps, and progress analytics in one centralized dashboard.",
    tags: ["Productivity", "React", "Node.js", "Tailwind CSS", "Analytics"],
    category: "Fullstack Product",
    status: "Public Repository",
    year: "2026",
    link: "https://github.com/AkhilSrinivasa7/ConsistencyOS",
    highlights: ["Daily Streak Maintenance Engine", "Multi-metric Wellness Analytics", "Frictionless Responsive Logging"],
  },
  {
    id: "03",
    title: "Diabetic Retinopathy Classification",
    tagline: "Deep Neural Network for Multi-Class Retinal Diagnostics",
    desc: "A deep learning clinical research pipeline evaluating fundus retinal photography for stage-specific diabetic retinopathy severity classification utilizing convolutional feature extraction.",
    tags: ["TensorFlow", "Deep Learning", "CNN", "Python", "Data Science"],
    category: "AI / Healthcare",
    status: "Research Pipeline",
    year: "2025",
    link: "https://github.com/AkhilSrinivasa7",
    highlights: ["Custom CNN & Transfer Learning", "Extensive Data Augmentation Pipeline", "High Diagnostic Specificity"],
  },
  {
    id: "04",
    title: "CivicPulse",
    tagline: "Public Infrastructure Incident Reporting & Civic Accountability",
    desc: "A location-aware civic technology web platform empowering citizens to document public infrastructure hazards, verify community reports, and track administrative resolutions with transparency.",
    tags: ["Fullstack Web", "Geospatial", "React", "PostgreSQL", "Supabase"],
    category: "Civic Tech",
    status: "Completed",
    year: "2025",
    link: "https://github.com/AkhilSrinivasa7",
    highlights: ["Interactive Geolocation Pinning", "Public Resolution Timeline", "Community Upvote & Verification"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="mx-auto max-w-6xl">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="h-px w-8 bg-amber-400/60" />
            Selected Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white">
            Projects & Research
          </h1>
          <p className="mt-3 text-base text-white/60 max-w-2xl">
            Software systems, deep learning models, and human-centered digital experiences I've developed.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl border border-white/10 glass p-6 sm:p-10 relative overflow-hidden hover:border-brand-lime/60 transition-all backdrop-blur-2xl"
            >
              {/* Corner Ambient Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-lime/5 blur-3xl group-hover:bg-brand-lime/15 transition-all duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                {/* Left Header Info */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl font-bold text-white/30 group-hover:text-brand-lime transition-colors">
                        {proj.id}
                      </span>
                      <span className="h-3 w-px bg-white/20" />
                      <span className="rounded-full bg-brand-lime/10 border border-brand-lime/30 px-3 py-0.5 text-xs font-mono font-bold text-brand-lime">
                        {proj.category}
                      </span>
                      <span className="font-mono text-xs text-white/50">{proj.year}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white group-hover:text-brand-lime transition-colors">
                      {proj.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-brand-lime/90 font-mono">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* DIRECT PROJECT REDIRECT LINK (User requested!) */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-brand-lime px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    >
                      <span>Redirect to Project ↗</span>
                    </a>

                    <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-white/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Right Description & Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <p className="text-base text-white/70 leading-relaxed font-sans">
                    {proj.desc}
                  </p>

                  {/* Highlights Bulleted */}
                  <div className="space-y-2 rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2">
                      Key Highlights & Architecture:
                    </div>
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-white/80 font-mono">
                        <span className="text-brand-lime">▹</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/80 group-hover:border-white/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
