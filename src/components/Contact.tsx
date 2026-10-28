import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Open to internships, collaborations, and interesting problems. If you're building something ambitious, let's talk."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main CTA Card */}
        <div className="lg:col-span-2 flex flex-col justify-center overflow-hidden rounded-xl border border-white/10 glass p-8 sm:p-12 relative">
          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-brand-lime/10 blur-[80px] pointer-events-none" />
          
          <h3 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-wide mb-8">
            Ready to start a <span className="text-brand-lime">project</span>?
          </h3>
          
          <div>
            <a
              href="https://www.linkedin.com/in/srinivasa-shanmukha-akhil-c-763399349"
              target="_blank"
              rel="noreferrer"
              className="magnetic-hover inline-flex items-center justify-center gap-2 rounded bg-brand-lime px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white"
            >
              Let's talk →
            </a>
          </div>
        </div>

        {/* Links Card */}
        <div className="rounded-xl border border-white/10 glass p-8 flex flex-col justify-center gap-6">
          <a
            href="mailto:akhilintrovert1@gmail.com"
            className="group flex items-center gap-4 transition-all"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 group-hover:bg-brand-lime/20 group-hover:text-brand-lime transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 font-bold mb-1">Email</div>
              <div className="text-sm font-medium text-white group-hover:text-brand-lime transition-colors truncate">
                akhilintrovert1@gmail.com
              </div>
            </div>
          </a>

          <div className="h-px w-full bg-white/10" />

          <a
            href="https://www.linkedin.com/in/srinivasa-shanmukha-akhil-c-763399349"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 transition-all"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 group-hover:bg-brand-lime/20 group-hover:text-brand-lime transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 font-bold mb-1">LinkedIn</div>
              <div className="text-sm font-medium text-white group-hover:text-brand-lime transition-colors truncate">
                Connect with me
              </div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
