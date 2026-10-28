import Section from "./Section";

const experiences = [
  {
    role: "Freelance Designer",
    company: "Self-Employed",
    period: "2024 — present",
    detail: "Crafted comprehensive visual brand identities and high-impact marketing creatives for diverse businesses from concept to final delivery.",
  }
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10 sm:left-6" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 sm:pl-16 group magnetic-hover" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-brand-dark sm:left-2 group-hover:border-brand-lime transition-colors">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-lime transition-all group-hover:scale-150 group-hover:shadow-[0_0_10px_#ccff00]" />
              </div>
              <div className="rounded-xl border border-white/10 glass p-6 sm:p-8 transition-all hover:border-brand-lime">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white font-display tracking-wide">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-brand-lime/30 bg-brand-lime/5 px-3 py-1 text-xs font-bold text-brand-lime transition-colors">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-4 text-base font-bold text-white/80 uppercase tracking-wide font-display">
                  {exp.company}
                </p>
                <p className="text-sm text-white/60 leading-relaxed font-medium">{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
