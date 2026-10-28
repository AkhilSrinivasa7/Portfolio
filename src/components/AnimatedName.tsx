import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNameProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: "hero" | "header" | "pill";
}

const FULL_NAME = "Ch Srinivasa Shanmukha Akhil";

export default function AnimatedName({
  className = "",
  showSubtitle = false,
  variant = "hero",
}: AnimatedNameProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const letters = FULL_NAME.split("");

  if (variant === "pill") {
    return (
      <div
        className={`group relative inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-red-950/60 via-black/80 to-amber-950/60 px-4 py-2 text-xs font-mono font-bold tracking-wider text-amber-300 shadow-[0_0_20px_rgba(238,186,48,0.25)] select-none hover:border-amber-300 transition-all ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#eeba30]"></span>
        </span>

        {/* Continuous Fluid Kinetic Wave Through Letters */}
        <div className="flex items-center">
          {letters.map((char, i) => (
            <motion.span
              key={`pill-${i}-${char}`}
              animate={{
                y: [0, -3, 0, 3, 0],
                color: [
                  "#fef08a",
                  "#ffffff",
                  "#eeba30",
                  "#fbbf24",
                  "#fef08a",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
              className="inline-block whitespace-pre font-harry text-base sm:text-lg tracking-wider"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <span className="text-xs text-amber-400 animate-pulse">⚡</span>
      </div>
    );
  }

  // HERO / FULL HEADING VARIANT: Continuous Enchanted Kinetic Wave
  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Continuous Kinetic Letter Wave */}
      <div className="flex flex-wrap items-center">
        {letters.map((char, index) => {
          const isSpace = char === " ";
          const isHovered = hoveredIndex === index;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

          return (
            <motion.span
              key={`letter-${index}-${char}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                // Continuous subtle fluid levitation wave
                y: isHovered
                  ? -12
                  : isNeighbor
                  ? -6
                  : [0, -4, 0, 4, 0],
                scale: isHovered ? 1.25 : isNeighbor ? 1.1 : 1,
              }}
              transition={
                isHovered || isNeighbor
                  ? { type: "spring", stiffness: 500, damping: 15 }
                  : {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.06,
                    }
              }
              className={`inline-block font-harry text-3xl sm:text-5xl lg:text-6xl tracking-wider cursor-pointer transition-colors duration-200 ${
                isSpace ? "w-3 sm:w-4" : ""
              }`}
              style={{
                textShadow: isHovered
                  ? "0 0 35px #ffd700, 0 0 60px #eeba30"
                  : "0 0 20px rgba(238, 186, 48, 0.4)",
              }}
            >
              <span className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent hover:from-white hover:to-amber-200 transition-all">
                {char}
              </span>
            </motion.span>
          );
        })}
      </div>

      {/* Ambient Luminescent Glow Underline */}
      <div className="relative mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-[1px]"
        />
      </div>

      {showSubtitle && (
        <div className="mt-2 flex items-center gap-2 text-xs font-mono text-amber-300/80">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span>🦁 Gryffindor Bravery</span>
          <span>•</span>
          <span>AI & Systems Engineer</span>
        </div>
      )}
    </div>
  );
}
