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
  const [hoverLabel, setHoverLabel] = useState("LUMOS");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring physics with low damping for magical fluidity
  const springX = useSpring(mouseX, { stiffness: 450, damping: 26 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 26 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Distance moved since last particle
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Spawn magical stardust trail every 24px of movement
      if (dist > 24) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        const glyphs = ["✦", "✧", "•", "✨", "⚡"];
        const colors = ["#eeba30", "#ffd700", "#ccff00", "#ff6b6b", "#f59e0b"];
        const newParticle: Particle = {
          id: particleId.current++,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          color: colors[Math.floor(Math.random() * colors.length)],
          glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        };

        setParticles((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".hollow-interactive-bold")) {
        setIsHovering(true);
        setHoverLabel("MAGIC");
      } else if (target.closest("[data-cursor-label]")) {
        setIsHovering(true);
        setHoverLabel(target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label") || "EXPLORE");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
        setHoverLabel("LUMOS");
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
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
          animate={{ opacity: 0, scale: 0.3, y: 15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-none fixed z-[9996] hidden md:block select-none"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            fontSize: "10px",
            textShadow: `0 0 8px ${p.color}`,
          }}
        >
          {p.glyph}
        </motion.div>
      ))}

      {/* 2. Precision Core Lumos Dot with Golden Sparkle Aura */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          width: isClicking ? 14 : isHovering ? 6 : 8,
          height: isClicking ? 14 : isHovering ? 6 : 8,
          backgroundColor: isClicking ? "#ffd700" : isHovering ? "#eeba30" : "#ccff00",
          boxShadow: isClicking
            ? "0 0 25px #ffd700, 0 0 45px #eeba30"
            : isHovering
            ? "0 0 15px #eeba30"
            : "0 0 10px #ccff00",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 3. Outer Fluid Magical Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border hidden md:flex items-center justify-center backdrop-blur-[0.5px]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isHovering ? 64 : isClicking ? 24 : 38,
          height: isHovering ? 64 : isClicking ? 24 : 38,
          backgroundColor: isHovering
            ? "rgba(238, 186, 48, 0.14)"
            : isClicking
            ? "rgba(255, 215, 0, 0.25)"
            : "rgba(204, 255, 0, 0.04)",
          borderColor: isHovering
            ? "#eeba30"
            : isClicking
            ? "#ffd700"
            : "rgba(204, 255, 0, 0.45)",
          boxShadow: isHovering
            ? "0 0 25px rgba(238, 186, 48, 0.4), inset 0 0 12px rgba(238, 186, 48, 0.2)"
            : "0 0 12px rgba(204, 255, 0, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
      >
        {isHovering && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text-[9px] font-mono font-black tracking-widest text-amber-300 uppercase select-none drop-shadow-[0_0_6px_#eeba30]"
          >
            {hoverLabel}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
