import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AudioToggle from "./AudioToggle";

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/cloud", label: "Clouds" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-dark/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-wide"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-lime text-brand-dark font-display font-bold text-sm shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-transform group-hover:scale-105">
            SA
          </span>
          <div className="flex flex-col">
            <span className="text-white font-harry tracking-wider text-base group-hover:text-amber-300 transition-colors">
              Ch S S Akhil
            </span>
            <span className="text-[10px] font-mono text-amber-300/80 uppercase tracking-widest hidden sm:inline">
              Gryffindor & Code ⚡
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1.5 md:flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "text-brand-dark bg-brand-lime shadow-[0_0_12px_rgba(204,255,0,0.4)]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {link.path === "/cloud" && (
                    <span className="ml-1 text-[9px] text-cyan-300">☁️</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Audio Toggle & Contact CTA */}
        <div className="flex items-center gap-3">
          <AudioToggle />

          <Link
            to="/contact"
            className="magnetic-hover hidden rounded-xl bg-brand-lime px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white md:inline-block shadow-[0_0_15px_rgba(204,255,0,0.25)]"
          >
            Get In Touch ↗
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="rounded-xl border border-white/10 p-2 text-white/80 hover:text-brand-lime hover:border-brand-lime md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-white/10 bg-brand-dark/95 backdrop-blur-2xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-brand-lime text-brand-dark"
                        : "text-white/80 hover:bg-white/5 hover:text-brand-lime"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span>→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
