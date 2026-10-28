import { useState } from "react";
import { socialLinks } from "../data/socialLinks";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("akhilintrovert1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
            <span className="h-px w-8 bg-brand-lime/60" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white">
            Let's build something together.
          </h1>
          <p className="mt-3 text-base text-white/60 max-w-2xl">
            Whether you have an ambitious AI project, software engineering opportunity, freelance inquiry, or just want to discuss ideas, my inbox is always open.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Message Card */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 glass p-8 sm:p-12 relative overflow-hidden backdrop-blur-2xl flex flex-col justify-between">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-lime/10 blur-[80px]" />

            <div>
              <span className="rounded-full bg-brand-lime/10 border border-brand-lime/30 px-3.5 py-1 text-xs font-mono font-bold text-brand-lime uppercase tracking-wider">
                Direct Communication
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-6 mb-4">
                Have an idea, project, or role in mind?
              </h2>

              <p className="text-base text-white/70 leading-relaxed max-w-xl">
                I am currently open to software engineering internships, collaborative AI research, and innovative client work. I typically respond within 24 hours.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:akhilintrovert1@gmail.com"
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white"
              >
                Send Direct Email ✉
              </a>

              <button
                onClick={copyEmail}
                className="rounded-xl border border-white/20 glass px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all hover:border-brand-lime hover:text-brand-lime hover:bg-brand-lime/10"
              >
                {copied ? "✓ Copied to Clipboard!" : "Copy Email Address 📋"}
              </button>
            </div>
          </div>

          {/* Connected Profiles List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2 pl-2">
              Verified Profiles & Channels:
            </div>

            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 glass p-5 transition-all hover:border-brand-lime hover:bg-white/[0.04] backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-lime group-hover:bg-brand-lime/10 transition-colors text-white group-hover:text-brand-lime">
                    {link.id === "linkedin" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    )}
                    {link.id === "github" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    )}
                    {link.id === "leetcode" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .383-.347l3.967-4.246 4.922-5.26a1.388 1.388 0 0 0 0-1.917A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-.977.406l-4.5 4.5a1.38 1.38 0 0 0 0 1.952 1.38 1.38 0 0 0 1.953 0l4.5-4.5a1.38 1.38 0 0 0-.976-2.358z" />
                      </svg>
                    )}
                    {link.id === "mail" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-bold font-display text-white group-hover:text-brand-lime transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs font-mono text-white/50">
                      {link.handle}
                    </div>
                  </div>
                </div>

                <span className="text-white/40 group-hover:text-brand-lime group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
