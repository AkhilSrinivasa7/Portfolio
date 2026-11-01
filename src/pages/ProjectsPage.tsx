import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const softwareProjects = [
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

interface EventPosterItem {
  title: string;
  image: string;
  tag: string;
  type: string;
}

interface EventDesignBlock {
  id: string;
  eventName: string;
  category: string;
  role: string;
  year: string;
  tools: string[];
  description: string;
  posters: EventPosterItem[];
}

const eventDesignBlocks: EventDesignBlock[] = [
  {
    id: "event-01",
    eventName: "Convergence 2026: Annual Tech Symposium",
    category: "Event Visual Identity & Posters",
    role: "Lead Visual Designer",
    year: "2026",
    tools: ["Figma", "Photoshop", "Swiss Typography", "Brutalist Grid"],
    description: "Complete visual identity and multi-format poster design suite created for the flagship annual tech symposium. Architected key visual posters, event schedule wall graphics, speaker introduction posters, and social announcement banners.",
    posters: [
      {
        title: "Main Stage Keynote Poster",
        tag: "Official Key Visual (A2 Print)",
        type: "Print & Display",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cybernetic Track & Schedule Poster",
        tag: "Agenda & Schedule Infographic",
        type: "Venue Poster",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Speaker & Keynote Announcement Poster",
        tag: "Social Campaign Poster",
        type: "Digital Banner",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "event-02",
    eventName: "HackNova: 36-Hour National Hackathon",
    category: "Hackathon Brand & Poster Suite",
    role: "Brand & Poster Designer",
    year: "2025",
    tools: ["Illustrator", "Figma", "Print Production", "Vector Geometry"],
    description: "Designed the official identity posters for a 36-hour hackathon, uniting over 400 collegiate builders. Delivered large-scale roll-up banners, track challenge posters, and sponsor wall branding.",
    posters: [
      {
        title: "Official Hackathon Announcement Poster",
        tag: "Flagship Event Poster",
        type: "Campus Print",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Prizes & Challenge Tracks Poster",
        tag: "Track Breakdown Graphic",
        type: "Display Poster",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

// Single Event Block with Minimal Poster Carousel Component
function EventPosterCarouselBlock({
  event,
  onZoom,
}: {
  event: EventDesignBlock;
  onZoom: (img: string, title: string) => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = event.posters.length;
  const activePoster = event.posters[currentIdx];

  const handleNext = () => setCurrentIdx((p) => (p + 1) % total);
  const handlePrev = () => setCurrentIdx((p) => (p - 1 + total) % total);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0c0c12]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-brand-lime/50 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Event Details & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="rounded-full bg-brand-lime/10 border border-brand-lime/30 px-3 py-1 text-xs font-mono font-bold text-brand-lime">
                {event.category}
              </span>
              <span className="text-xs font-mono text-white/50">{event.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
              {event.eventName}
            </h3>

            <p className="mt-1 text-xs font-mono text-brand-lime/90 font-bold uppercase tracking-wider">
              {event.role}
            </p>

            <p className="mt-4 text-sm text-white/70 font-sans leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Minimal Carousel Controls & Active Poster Tag */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-white/50">Current Poster:</span>
                <div className="text-xs sm:text-sm font-sans font-bold text-white mt-0.5">
                  {activePoster.title}
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous poster"
                  className="h-9 w-9 rounded-xl border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-all"
                >
                  ←
                </button>
                <span className="text-xs font-mono text-brand-lime font-bold px-1">
                  {currentIdx + 1}/{total}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next poster"
                  className="h-9 w-9 rounded-xl border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-all"
                >
                  →
                </button>
              </div>
            </div>

            {/* Design Tool Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {event.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Minimal Poster Image Carousel */}
        <div className="lg:col-span-7 relative">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 cursor-pointer shadow-xl group/card"
            onClick={() => onZoom(activePoster.image, `${event.eventName} - ${activePoster.title}`)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activePoster.image}
                src={activePoster.image}
                alt={activePoster.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
            </AnimatePresence>

            {/* Overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
              <span className="rounded-lg bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-brand-lime font-bold border border-brand-lime/30">
                {activePoster.tag}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-mono text-white/90 border border-white/20 flex items-center gap-1.5 opacity-90 group-hover/card:opacity-100">
              <span>Inspect Fullscreen</span>
              <span>↗</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {event.posters.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIdx
                    ? "w-8 bg-brand-lime shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to poster ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "software" | "design">("all");
  const [zoomPoster, setZoomPoster] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              Selected Portfolio & Creative Works
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white">
              Projects & <span className="text-brand-lime">Design</span>.
            </h1>
            <p className="mt-3 text-base text-white/60 max-w-2xl">
              Software engineering systems, deep learning pipelines, and minimal event poster carousels I've designed.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center rounded-2xl bg-white/5 p-1.5 border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "all"
                  ? "bg-brand-lime text-brand-dark font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "software"
                  ? "bg-brand-lime text-brand-dark font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Software & Systems
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "design"
                  ? "bg-brand-lime text-brand-dark font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              🎨 Event Posters Carousel
            </button>
          </div>
        </motion.div>

        {/* 1. SOFTWARE PROJECTS SECTION */}
        {(activeTab === "all" || activeTab === "software") && (
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 pl-1">
              <span>Code & Software Systems</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {softwareProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-[#0c0c12]/80 p-6 sm:p-10 relative overflow-hidden hover:border-brand-lime/60 transition-all backdrop-blur-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
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

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-brand-lime px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                          alt="GitHub"
                          className="w-4 h-4 object-contain brightness-0"
                        />
                        <span>Redirect to Project ↗</span>
                      </a>

                      <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-white/60">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <p className="text-base text-white/70 leading-relaxed font-sans">
                      {proj.desc}
                    </p>

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
        )}

        {/* 2. EVENT POSTERS IN ONE BLOCK WITH MINIMAL CAROUSEL */}
        {(activeTab === "all" || activeTab === "design") && (
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-lime pl-1">
              <span>🎨 Specific Event Posters — Showcase in One Block</span>
              <span className="h-px flex-1 bg-brand-lime/20" />
            </div>

            <div className="space-y-8">
              {eventDesignBlocks.map((event) => (
                <EventPosterCarouselBlock
                  key={event.id}
                  event={event}
                  onZoom={(img, title) => setZoomPoster({ image: img, title })}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Poster Zoom Modal */}
      <AnimatePresence>
        {zoomPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomPoster(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomPoster.image}
                alt={zoomPoster.title}
                className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl"
              />

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-2">
                <h4 className="text-base font-bold font-display text-white">
                  {zoomPoster.title}
                </h4>

                <button
                  onClick={() => setZoomPoster(null)}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-mono font-bold text-white transition-all hover:bg-brand-lime hover:text-brand-dark"
                >
                  Close [Esc]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
