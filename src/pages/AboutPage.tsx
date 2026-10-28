import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hobbiesList } from "../data/hobbiesData";
import HobbyCardSpotlight from "../components/HobbyCardSpotlight";
import AnimatedName from "../components/AnimatedName";

// Strictly the two requested skill sections
const skillSections = [
  {
    title: "CORE ENGINEERING SKILLS",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "Data Structures & Algorithms",
      "SQL & Database Architecture",
      "Git & GitHub Workflows",
      "Object-Oriented Design",
      "RESTful API Architecture",
    ],
  },
  {
    title: "PRODUCT & VISUAL DESIGN",
    skills: [
      "Figma",
      "UI/UX Architecture",
      "Design Systems & Tokens",
      "Visual Brand Identity",
      "Prototyping & Micro-Interactions",
      "Brutalist & Minimalist Design",
      "Canva",
      "Motion Design & Keyframing",
    ],
  },
];

const education = [
  {
    school: "Vignan's Foundation for Science, Technology and Research",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2024 — Present",
    detail: "Focus areas: Software Engineering · AI/ML · Data Structures & Algorithms · Web Technologies · Database Management",
    highlight: "Active contributor in developer clubs and technical hackathons.",
  },
  {
    school: "Tapasya Junior College",
    degree: "Board of Intermediate Education (MPC)",
    period: "2022 — 2024",
    detail: "Core Focus: Mathematics, Physics, and Chemistry. Developed foundational problem-solving and mathematical modeling skills.",
    highlight: "Academic excellence in Mathematics & Physical Sciences.",
  },
  {
    school: "Bhashyam High School",
    degree: "Board of Secondary Education",
    period: "2019 — 2022",
    detail: "Rigorous secondary education with leadership activities, science exhibitions, and technology symposiums.",
    highlight: "Distinction in science and logical reasoning.",
  },
];

const certs = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    logo: "/images/oracle.png",
  },
  {
    name: "Engineer AI Agents with Agent Development Kit (ADK)",
    issuer: "Google",
    date: "2024",
    logo: "/images/google.png",
  },
  {
    name: "AI Fundamentals Certification",
    issuer: "DataCamp",
    date: "Feb 2026",
    logo: "/images/datacamp.png",
  },
  {
    name: "GEN AI BOOTCAMP",
    issuer: "Outskill",
    date: "May 2026",
    logo: "/images/outskill.png",
  },
  {
    name: "Preliminary English Test (PET)",
    issuer: "Cambridge Assessment",
    date: "Certified",
    logo: "/images/cambridge.png",
  },
];

function renderWatermarkIcon(type: string) {
  switch (type) {
    case "camera":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "puzzle":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M19.5 12c0-1.4-1.1-2.5-2.5-2.5V5.5A1.5 1.5 0 0 0 15.5 4h-4a2.5 2.5 0 0 0-5 0h-2A1.5 1.5 0 0 0 3 5.5v4a2.5 2.5 0 0 0 0 5v4A1.5 1.5 0 0 0 4.5 20h4a2.5 2.5 0 0 0 5 0h2a1.5 1.5 0 0 0 1.5-1.5v-4c1.4 0 2.5-1.1 2.5-2.5z" />
        </svg>
      );
    case "ai":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      );
    case "audio":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "design":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "movie":
      return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="mx-auto max-w-6xl space-y-24">
        {/* 1. INTRO & PHOTO HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Photo & Resume Actions Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-brand-lime/20 blur-2xl group-hover:bg-brand-lime/30 transition-all duration-700" />

              <div className="relative rounded-2xl overflow-hidden border border-white/20 glass p-2.5 backdrop-blur-xl">
                <img
                  src="/images/profile.jpg"
                  alt="Ch Srinivasa Shanmukha Akhil"
                  className="w-full h-[430px] sm:h-[460px] object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-white/10" />

                {/* Floating Status Pill */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-brand-dark/80 backdrop-blur-md p-3 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-lime"></span>
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Available for Roles
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-lime font-bold">2026</span>
                </div>
              </div>
            </div>

            {/* RESUME OPTIONS DIRECTLY BELOW PHOTOGRAPH (User requested!) */}
            <div className="mt-6 w-full max-w-sm flex items-center gap-3">
              <button
                onClick={() => setShowResumeModal(true)}
                className="flex-1 rounded-xl bg-brand-lime px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <span>👁</span>
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Ch_Srinivasa_Shanmukha_Akhil_Resume.pdf"
                className="flex-1 rounded-xl border border-white/20 glass px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all hover:border-brand-lime hover:text-brand-lime hover:bg-brand-lime/10 flex items-center justify-center gap-2 text-center"
              >
                <span>📥</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Intro Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              About Myself
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <AnimatedName variant="hero" className="inline-block" />
              </h1>
            </div>

            <p className="text-xl text-white/90 font-medium leading-relaxed font-display">
              Computer Science student, systems builder, and atmospheric cloud photographer engineering at the intersection of AI, robust software, and sensory digital design.
            </p>

            <div className="space-y-4 text-base leading-relaxed text-white/70">
              <p>
                My philosophy is simple: <strong className="text-white">I build systems that think, and experiences that feel.</strong> I believe that the future of technology belongs to products that not only run on powerful computational models, but also respect human attention through intuitive usability and tactile aesthetics.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science and Engineering at Vignan's Foundation for Science, Technology and Research. When I'm not writing fullstack architectures or exploring computer vision, you will find me capturing misty forests and wilderness with my camera lenses, solving algorithmic puzzles, or studying brutalist design systems.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="mailto:akhilintrovert1@gmail.com"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-brand-lime px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white"
              >
                Send Direct Email ✉
              </a>
              <a
                href="https://www.linkedin.com/in/srinivasa-shanmukha-akhil-c-763399349"
                target="_blank"
                rel="noreferrer"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl border border-white/20 glass px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all hover:border-brand-lime hover:text-brand-lime"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </section>

        {/* 2. SKILLS AND PROFICIENCIES */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Skills & Proficiencies
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Focus areas across software engineering foundations and visual product design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillSections.map((sec, idx) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 glass p-6 sm:p-8 relative overflow-hidden group hover:border-brand-lime/60 transition-all backdrop-blur-xl"
              >
                <div className="absolute -right-12 -bottom-12 h-36 w-36 rounded-full bg-brand-lime/5 blur-2xl group-hover:bg-brand-lime/15 transition-all" />

                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-lime mb-6">
                  {sec.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {sec.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 font-medium hover:border-brand-lime hover:bg-brand-lime/10 hover:text-brand-lime transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. EDUCATION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Education
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Milestones that shaped my technical and analytical foundation.
            </p>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-4 space-y-10">
            {education.map((edu) => (
              <div key={edu.school} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-brand-dark group-hover:border-brand-lime transition-colors">
                  <div className="h-2 w-2 rounded-full bg-brand-lime group-hover:scale-125 transition-transform" />
                </div>

                <div className="rounded-3xl border border-white/10 glass p-6 sm:p-8 hover:border-brand-lime/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-2xl font-bold font-display text-white">
                      {edu.school}
                    </h3>
                    <span className="rounded-full border border-brand-lime/30 bg-brand-lime/10 px-3 py-1 text-xs font-mono font-bold text-brand-lime">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-base font-bold text-white/80 uppercase tracking-wide font-display mb-3">
                    {edu.degree}
                  </p>

                  <p className="text-sm leading-relaxed text-white/60 mb-3">
                    {edu.detail}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime/80 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5">
                    <span>★</span>
                    <span>{edu.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. VERIFIED CERTIFICATIONS */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="h-px w-8 bg-brand-lime/60" />
              Credentials & Industry Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 glass p-6 hover:border-brand-lime/60 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-lime group-hover:bg-brand-lime/10 transition-colors p-2">
                    <img
                      src={c.logo}
                      alt={c.issuer}
                      className="h-8 w-8 object-contain brightness-110 contrast-125"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors leading-snug">
                      {c.name}
                    </h4>
                    <p className="mt-1 text-xs font-mono text-white/50 uppercase tracking-wider">
                      {c.issuer} • {c.date}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-brand-lime">
                  <span>Verified Credential</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. HOBBIES WITH WATERMARK BACKGROUND ICONS */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span className="h-px w-8 bg-amber-400/60" />
              Beyond The Terminal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Hobbies & Passions
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Exploring cinema & Harry Potter lore, capturing clouds, and writing expressive code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbiesList.map((hobby) => (
              <HobbyCardSpotlight
                key={hobby.id}
                hobby={hobby}
                renderWatermark={renderWatermarkIcon}
              />
            ))}
          </div>
        </motion.section>
      </div>

      {/* RESUME VIEWER MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl w-full rounded-3xl overflow-hidden border border-white/20 glass bg-brand-dark p-6 sm:p-8 flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Resume — Ch Srinivasa Shanmukha Akhil
                  </h3>
                  <p className="text-xs font-mono text-brand-lime mt-1">
                    B.Tech Computer Science & Engineering
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Ch_Srinivasa_Shanmukha_Akhil_Resume.pdf"
                    className="rounded-xl bg-brand-lime px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark hover:bg-white transition-colors"
                  >
                    Download PDF 📥
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Digital Resume Preview Content */}
              <div className="overflow-y-auto space-y-6 pr-2 text-sm text-white/80 max-h-[65vh]">
                <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                  <h4 className="text-lg font-bold font-display text-white mb-2">Summary</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    Computer Science undergraduate passionate about building systems that think and experiences that feel. Experienced in Python, Java, JavaScript, TypeScript, Deep Learning architectures (CNNs, Vision Transformers), fullstack web engineering (React, Node, Tailwind), and sensory product design. Active nature photographer with sharp attention to aesthetics.
                  </p>
                </div>

                <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                  <h4 className="text-lg font-bold font-display text-white mb-3">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-white">Vignan's Foundation for Science, Technology and Research</div>
                      <div className="text-brand-lime text-xs font-mono">B.Tech — Computer Science & Engineering | 2024 — Present</div>
                      <div className="text-xs text-white/60 mt-1">Focus: Software Engineering, Machine Learning, Data Structures, Web Systems</div>
                    </div>
                    <div>
                      <div className="font-bold text-white">Tapasya Junior College</div>
                      <div className="text-brand-lime text-xs font-mono">Board of Intermediate Education (MPC) | 2022 — 2024</div>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                  <h4 className="text-lg font-bold font-display text-white mb-3">Key Projects</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-white text-sm">SynapseFlow</span> — AI-powered knowledge synthesis and second brain application.
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm">ConsistencyOS</span> — Modern personal wellness and daily habit analytics tracker.
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm">Diabetic Retinopathy Classification</span> — Clinical deep learning CNN model for retinal photograph evaluation.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
