import Section from "./Section";

const projects = [
  {
    id: "01",
    title: "SynapseFlow",
    desc: "An AI-powered second brain designed to help learners capture, organize, summarize, and query their knowledge.",
    tags: ["AI", "Product", "Web"],
    span: "lg:col-span-7",
  },
  {
    id: "02",
    title: "CalSnap",
    desc: "An AI-assisted calorie tracking experience focused on making food logging simple and intuitive.",
    tags: ["AI", "Product", "Web"],
    span: "lg:col-span-5",
  },
  {
    id: "03",
    title: "Diabetic Retinopathy Classification",
    desc: "A deep-learning research project for multi-class diabetic retinopathy classification using retinal images.",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    span: "lg:col-span-5",
  },
  {
    id: "04",
    title: "CivicPulse",
    desc: "A civic issue reporting platform designed to help communities report problems, track progress, and improve accountability.",
    tags: ["Web", "Civic Tech", "Product"],
    span: "lg:col-span-7",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects, experiments, and products I've built across software, AI, and design."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 glass p-6 sm:p-8 transition-all hover:border-brand-lime magnetic-hover col-span-1 ${p.span}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-lime/5 blur-3xl transition-opacity group-hover:bg-brand-lime/20"
            />
            
            <div className="relative z-10 mb-12">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display font-bold text-white/40 text-sm">
                  {p.id}
                </span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 cursor-not-allowed transition-colors group-hover:text-white/50">
                  Case study coming soon
                </span>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-white font-display tracking-wide group-hover:text-brand-lime transition-colors">
                {p.title}
              </h3>
              <p className="text-base leading-relaxed text-white/60 group-hover:text-white/80 transition-colors max-w-md">
                {p.desc}
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 group-hover:border-brand-lime/30 group-hover:text-white transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
