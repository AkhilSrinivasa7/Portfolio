import { useState } from "react";
import { motion } from "framer-motion";
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
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="h-px w-8 bg-amber-400/60" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white">
            Let's build something together.
          </h1>
          <p className="mt-3 text-base text-white/60 max-w-2xl">
            Whether you have an ambitious AI project, software engineering opportunity, freelance inquiry, or want to discuss cinema & Harry Potter lore, my owl inbox is always open.
          </p>
        </motion.div>

        {/* Content Grid with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 glass p-8 sm:p-12 relative overflow-hidden backdrop-blur-2xl flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />

            <div>
              <span className="rounded-full bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                Direct Communication ⚡
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
                className="magnetic-hover inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_20px_rgba(238,186,48,0.3)]"
              >
                Send Direct Email ✉
              </a>

              <button
                onClick={copyEmail}
                className="rounded-xl border border-white/20 glass px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all hover:border-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
              >
                {copied ? "✓ Copied to Clipboard!" : "Copy Email Address 📋"}
              </button>
            </div>
          </motion.div>

          {/* Connected Profiles List */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2 pl-2">
              Verified Profiles & Channels:
            </div>

            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 glass p-5 transition-all hover:border-amber-400 hover:bg-white/[0.04] backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-colors p-2.5">
                    <img
                      src={link.logoUrl}
                      alt={link.name}
                      className={`h-6 w-6 object-contain ${
                        link.id === "github" ? "invert" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-xs font-mono text-white/50">{link.handle}</p>
                  </div>
                </div>
                <span className="text-white/40 group-hover:text-amber-300 text-sm transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
