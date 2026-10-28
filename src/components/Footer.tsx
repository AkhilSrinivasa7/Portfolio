import { Link } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02050b]/80 px-6 py-12 relative z-10 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-lime text-brand-dark font-display font-bold text-xs">
                SA
              </span>
              <span className="text-white font-display font-bold text-base">
                Ch Srinivasa Shanmukha Akhil
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-300/70 max-w-md">
              Building systems that think, and experiences that feel. Focused on cloud horizons.
            </p>
          </div>

          {/* Page Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono font-bold uppercase tracking-wider text-white/70">
            <Link to="/about" className="hover:text-brand-lime transition-colors">About</Link>
            <Link to="/projects" className="hover:text-brand-lime transition-colors">Projects</Link>
            <Link to="/cloud" className="hover:text-cyan-300 transition-colors">Clouds ☁️</Link>
            <Link to="/contact" className="hover:text-brand-lime transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Social Bar & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} Ch Srinivasa Shanmukha Akhil. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hover:text-brand-lime transition-colors capitalize font-bold"
              >
                {s.name}
              </a>
            ))}

            <span className="h-3 w-px bg-white/20" />

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors uppercase font-bold flex items-center gap-1"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
