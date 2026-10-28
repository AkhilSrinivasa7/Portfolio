import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function InteractiveStackToy() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 220, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full max-w-lg h-[440px] sm:h-[480px] rounded-3xl border border-white/10 bg-[#060a12]/70 backdrop-blur-xl overflow-hidden select-none group"
    >
      {/* Blueprint Grid Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient Lighting Behind Stack */}
      <div className="pointer-events-none absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute w-60 h-60 rounded-full bg-brand-lime/10 blur-[90px] translate-y-12" />

      {/* Floating Philosophy Pill: TOP RIGHT */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-6 z-30 flex items-center gap-2 rounded-xl border border-white/15 bg-black/70 px-4 py-2.5 backdrop-blur-md shadow-xl"
      >
        <div className="h-4 w-1 rounded-full bg-cyan-400" />
        <span className="font-mono text-xs sm:text-[13px] text-white/90 font-medium">
          The building is how I learn.
        </span>
      </motion.div>

      {/* Floating Philosophy Pill: BOTTOM LEFT */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 left-6 z-30 flex items-center gap-2 rounded-xl border border-white/15 bg-black/70 px-4 py-2.5 backdrop-blur-md shadow-xl"
      >
        <div className="h-4 w-1 rounded-full bg-brand-lime" />
        <span className="font-mono text-xs sm:text-[13px] text-white/90 font-medium">
          The learning is why I keep building.
        </span>
      </motion.div>

      {/* 3D TILT CONTAINER FOR CARD STACK */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex items-center justify-center w-64 h-80 cursor-grab active:cursor-grabbing"
      >
        {/* Layer 4: Deepest Background Card */}
        <motion.div
          animate={{
            x: [48, 54, 48],
            y: [-36, -42, -36],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-36 sm:w-44 h-60 sm:h-72 rounded-3xl border border-white/10 bg-indigo-950/20 backdrop-blur-sm -rotate-[22deg]"
          style={{ transformOrigin: "center center" }}
        />

        {/* Layer 3: Mid-Back Card */}
        <motion.div
          animate={{
            x: [32, 36, 32],
            y: [-24, -28, -24],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-36 sm:w-44 h-60 sm:h-72 rounded-3xl border border-white/15 bg-blue-900/25 backdrop-blur-md -rotate-[22deg]"
          style={{ transformOrigin: "center center" }}
        />

        {/* Layer 2: Mid-Front Card */}
        <motion.div
          animate={{
            x: [16, 18, 16],
            y: [-12, -14, -12],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-36 sm:w-44 h-60 sm:h-72 rounded-3xl border border-cyan-400/30 bg-cyan-900/30 backdrop-blur-md -rotate-[22deg]"
          style={{ transformOrigin: "center center" }}
        />

        {/* Layer 1: Front Primary Card (Vibrant Cyan/Blue Gradient Glass) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-36 sm:w-44 h-60 sm:h-72 rounded-3xl -rotate-[22deg] p-4 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,180,255,0.3)] border border-cyan-300/60"
          style={{
            background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #0061ff 100%)",
            transformOrigin: "center center",
          }}
        >
          {/* Glass Gloss Sheen on top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            <span className="font-mono text-[9px] font-bold text-white/90 uppercase tracking-widest">
              AKHIL.DEV
            </span>
          </div>

          <div className="relative z-10 font-mono text-[10px] text-white/90 font-bold leading-tight">
            <div>AI & CODE</div>
            <div className="text-white/70 text-[9px] font-normal">SENSORY WEB</div>
          </div>
        </motion.div>
      </motion.div>

      {/* ORBITING / FLOATING TECH BADGES */}
      {/* 1. React Badge (Top Left) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-10 sm:left-14 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0f18]/80 text-cyan-400 backdrop-blur-md shadow-lg hover:border-cyan-400 hover:scale-110 transition-all cursor-pointer"
        title="React"
      >
        <svg className="w-6 h-6 animate-spin" style={{ animationDuration: "12s" }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(150 12 12)" />
        </svg>
      </motion.div>

      {/* 2. TypeScript Badge (Far Left) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0f18]/80 text-blue-400 font-mono font-bold text-xs backdrop-blur-md shadow-lg hover:border-blue-400 hover:scale-110 transition-all cursor-pointer"
        title="TypeScript"
      >
        TS
      </motion.div>

      {/* 3. Next.js / Node Badge (Far Right) */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0f18]/80 text-white font-mono font-bold text-xs backdrop-blur-md shadow-lg hover:border-white hover:scale-110 transition-all cursor-pointer"
        title="Next.js / Node"
      >
        N
      </motion.div>

      {/* 4. Tailwind / Wave Badge (Bottom Right) */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-16 right-10 sm:right-16 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0f18]/80 text-teal-300 backdrop-blur-md shadow-lg hover:border-teal-300 hover:scale-110 transition-all cursor-pointer"
        title="Tailwind CSS"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      </motion.div>
    </div>
  );
}
