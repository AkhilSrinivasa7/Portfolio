import Section from "./Section";

const certs = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    logo: "/images/oracle.png",
    link: "#",
  },
  {
    name: "Engineer AI Agents with Agent Development Kit (ADK)",
    issuer: "Google",
    date: "2024",
    logo: "/images/google.png",
    link: "#",
  },
  {
    name: "AI Fundamentals Certification",
    issuer: "DataCamp",
    date: "Feb 2026",
    logo: "/images/datacamp.png",
    link: "#",
  },
  {
    name: "GEN AI BOOTCAMP",
    issuer: "Outskill",
    date: "May 2026",
    logo: "/images/outskill.png",
    link: "#",
  },
  {
    name: "Preliminary English Test (PET)",
    issuer: "Cambridge Assessment",
    date: "",
    logo: "/images/cambridge.png",
    link: "#",
  }
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning."
      description="Certifications and credentials supporting my technical foundation."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <div
            key={c.name}
            className="group flex flex-col justify-between rounded-xl border border-white/10 glass p-5 transition-all hover:-translate-y-1 hover:border-brand-lime magnetic-hover"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-white/5 border border-white/10 group-hover:border-brand-lime group-hover:bg-brand-lime/10 transition-colors">
                <img 
                  src={c.logo} 
                  alt={c.issuer} 
                  className="h-8 w-8 object-contain brightness-110 contrast-125 transition-all group-hover:scale-110" 
                />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-snug text-white/90 group-hover:text-white transition-colors">
                  {c.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                  <span>{c.issuer}</span>
                  {c.date && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-white/20"></span>
                      <span>{c.date}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-brand-lime transition-colors mt-auto pt-4 border-t border-white/5"
            >
              View Credential
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
