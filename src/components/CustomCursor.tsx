import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  glyph: string;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);
  const activeBtnRef = useRef<HTMLElement | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring physics for outer magnetic follower
  const springX = useSpring(mouseX, { stiffness: 480, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 480, damping: 28 });

  useEffect(() => {
    // Only run custom cursor on devices with fine pointer (mouse / trackpad)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Distance moved since last particle
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Subtle wand stardust sparks on cursor movement
      if (dist > 30) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        const glyphs = ["✦", "✧", "•", "✨", "⚡"];
        const colors = ["#ccff00", "#eeba30", "#ffd700", "#38bdf8", "#f59e0b"];
        const newParticle: Particle = {
          id: particleId.current++,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          color: colors[Math.floor(Math.random() * colors.length)],
          glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        };

        setParticles((prev) => [...prev.slice(-14), newParticle]);
      }

      // ── UNIVERSAL BUTTON CURSOR ANIMATION (MAGNETIC TRACKING) ──
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        "button, a, [role='button'], input[type='button'], input[type='submit'], .cursor-animated, .magnetic-btn"
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovering(true);
        activeBtnRef.current = interactiveEl;

        const rect = interactiveEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate magnetic displacement proportional to mouse distance from element center
        const pullFactor = 0.22;
        const pullX = (e.clientX - centerX) * pullFactor;
        const pullY = (e.clientY - centerY) * pullFactor;

        // Apply smooth magnetic translation
        interactiveEl.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale(1.025)`;
        interactiveEl.style.transition = "transform 0.12s ease-out";

        // Feed mouse coordinates to CSS variables for dynamic radial hover sheen
        interactiveEl.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        interactiveEl.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      } else {
        setIsHovering(false);
        if (activeBtnRef.current) {
          activeBtnRef.current.style.transform = "translate3d(0px, 0px, 0) scale(1)";
          activeBtnRef.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
          activeBtnRef.current = null;
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (activeBtnRef.current) {
        activeBtnRef.current.style.transform = "translate3d(0px, 0px, 0) scale(1)";
        activeBtnRef.current = null;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);

      // Micro spark explosion on button click
      const glyphs = ["✨", "⚡", "✦", "✧"];
      const clickSparks: Particle[] = Array.from({ length: 6 }).map(() => ({
        id: particleId.current++,
        x: e.clientX + (Math.random() * 24 - 12),
        y: e.clientY + (Math.random() * 24 - 12),
        color: "#ccff00",
        glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      }));
      setParticles((prev) => [...prev.slice(-10), ...clickSparks]);

      if (activeBtnRef.current) {
        activeBtnRef.current.style.transform += " scale(0.95)";
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      if (activeBtnRef.current) {
        activeBtnRef.current.style.transform = activeBtnRef.current.style.transform.replace(
          " scale(0.95)",
          ""
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (activeBtnRef.current) {
        activeBtnRef.current.style.transform = "translate3d(0px, 0px, 0) scale(1)";
      }
    };
  }, [mouseX, mouseY, isVisible]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 450);
    return () => clearTimeout(timer);
  }, [particles]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Wand Stardust Sparks Trail */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.9, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 0.25, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-none fixed z-[9996] hidden md:block select-none"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            fontSize: "11px",
            textShadow: `0 0 10px ${p.color}`,
          }}
        >
          {p.glyph}
        </motion.div>
      ))}

      {/* 2. Precision Core Lumos Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          width: isClicking ? 14 : isHovering ? 6 : 8,
          height: isClicking ? 14 : isHovering ? 6 : 8,
          backgroundColor: isClicking ? "#ffd700" : isHovering ? "#ccff00" : "#ffffff",
          boxShadow: isClicking
            ? "0 0 25px #ffd700, 0 0 45px #ccff00"
            : isHovering
            ? "0 0 18px #ccff00"
            : "0 0 10px #ffffff",
        }}
        transition={{ duration: 0.12 }}
      />

      {/* 3. Outer Fluid Trailing Ring: Magnetizes & Expands on Button Hover */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border hidden md:flex items-center justify-center backdrop-blur-[0.5px]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isClicking ? 64 : isHovering ? 54 : 34,
          height: isClicking ? 64 : isHovering ? 54 : 34,
          backgroundColor: isClicking
            ? "rgba(204, 255, 0, 0.28)"
            : isHovering
            ? "rgba(204, 255, 0, 0.14)"
            : "rgba(255, 255, 255, 0.03)",
          borderColor: isClicking
            ? "#ccff00"
            : isHovering
            ? "rgba(204, 255, 0, 0.75)"
            : "rgba(255, 255, 255, 0.35)",
          boxShadow: isClicking
            ? "0 0 35px rgba(204, 255, 0, 0.7), inset 0 0 18px rgba(204, 255, 0, 0.35)"
            : isHovering
            ? "0 0 24px rgba(204, 255, 0, 0.45)"
            : "0 0 10px rgba(255, 255, 255, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 26 }}
      />
    </>
  );
}