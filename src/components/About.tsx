import Section from "./Section";

const highlights = [
  {
    icon: "01",
    title: "Engineering & AI",
    desc: "Building practical software and exploring AI/ML through projects, experiments, and continuous learning.",
  },
  {
    icon: "02",
    title: "Product Thinking",
    desc: "Turning ideas into useful digital products by combining technology, usability, and visual clarity.",
  },
  {
    icon: "03",
    title: "Design & Visuals",
    desc: "Creating interfaces, identities, and visual systems that communicate clearly and feel intentional.",
  },
  {
    icon: "04",
    title: "Always Exploring",
    desc: "Learning new technologies, experimenting with ideas, and constantly expanding what I can build.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A curious mind at the intersection of AI, software, and design."
      description="I'm building my foundation in computer science, AI, and product development while developing a strong eye for design. I enjoy turning technical problems into simple, thoughtful experiences."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, index) => (
          <div
            key={h.title}
            className={`group relative overflow-hidden rounded-xl border border-white/10 glass p-6 transition-all hover:border-brand-lime magnetic-hover`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-lime/10 blur-2xl transition-opacity group-hover:opacity-100 group-hover:bg-brand-lime/30" />
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-lime group-hover:bg-brand-lime/10 transition-colors font-display font-bold text-white/70 group-hover:text-brand-lime">
              {h.icon}
            </div>
            <h3 className="mb-2 text-base font-bold text-white font-display tracking-wide">
              {h.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">{h.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
