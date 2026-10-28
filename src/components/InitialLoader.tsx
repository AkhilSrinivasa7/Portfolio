import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete?: () => void;
}

const HOGWARTS_INCANTATIONS = [
  "Alohomora: Unlocking Hogwarts Gates...",
  "Accio Portfolios: Gathering Repositories (@AkhilSrinivasa7)...",
  "Wingardium Leviosa: Activating Anti-Gravity Physics...",
  "Lumos Maxima: Illuminating Cloud Horizons...",
  "Expecto Patronum: Shielding Core Systems...",
  "Mischief Managed! Welcome to Akhil's Realm ✨",
];

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        // Smooth progression
        const increment = Math.floor(Math.random() * 6) + 3;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const s = Math.min(
      HOGWARTS_INCANTATIONS.length - 1,
      Math.floor((progress / 100) * HOGWARTS_INCANTATIONS.length)
    );
    setStepIndex(s);
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070204] text-white selection:bg-amber-400 selection:text-black overflow-hidden"
        >
          {/* Ambient Gryffindor Scarlet & Gold Magic Auroras */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-b from-red-900/25 via-amber-600/15 to-transparent blur-[140px] animate-pulse" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-t from-amber-500/20 via-red-950/20 to-transparent blur-[140px] animate-pulse" />

          {/* Floating Stardust Embers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />

          {/* Central Hogwarts Initializing Chamber */}
          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-8 py-10 sm:py-12 rounded-3xl border border-amber-500/30 bg-[#0e0407]/90 backdrop-blur-2xl text-center mx-4 shadow-[0_0_60px_rgba(116,0,1,0.5)]">
            
            {/* Marauder's Map Opening Line */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/50 px-4 py-1 text-[11px] font-mono text-amber-300 shadow-[0_0_15px_rgba(238,186,48,0.2)]"
            >
              <span>⚡</span>
              <span className="italic">"I solemnly swear that I am up to no good..."</span>
            </motion.div>

            {/* Gryffindor Lion Crest & Golden Glow */}
            <div className="relative mb-4 group">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-red-900 via-amber-950 to-black border-2 border-amber-400/50 flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(238,186,48,0.4)] transition-transform group-hover:scale-105">
                🦁
              </div>
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-80"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_12px_#ffd700]"></span>
              </span>
            </div>

            {/* USER'S NAME IN HARRY POTTER FONT (User requested!) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-1 mb-2"
            >
              <h1 className="font-harry text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 via-50% to-yellow-500 drop-shadow-[0_0_30px_rgba(238,186,48,0.6)] tracking-wide">
                Ch Srinivasa Shanmukha Akhil
              </h1>
              <p className="font-mono text-xs text-amber-300/80 uppercase tracking-widest">
                Gryffindor House • Software & AI Engineer
              </p>
            </motion.div>

            {/* Live Hogwarts Incantation Step */}
            <div className="mt-6 mb-3 h-7 flex items-center justify-center">
              <motion.span
                key={stepIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-xs font-mono text-white/80 font-medium"
              >
                {HOGWARTS_INCANTATIONS[stepIndex]}
              </motion.span>
            </div>

            {/* Golden Snitch & Wand Enchanted Progress Bar */}
            <div className="relative w-full mt-2">
              <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden p-0.5 border border-amber-500/25 relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-700 via-amber-400 to-yellow-200 rounded-full shadow-[0_0_18px_#ffd700]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Floating Mini Golden Snitch Tracking the Progress */}
              <motion.div
                className="absolute -top-3 text-sm pointer-events-none"
                style={{
                  left: `calc(${progress}% - 10px)`,
                  transition: "left 0.1s ease-out",
                }}
              >
                <span className="inline-block animate-bounce text-xs">✨</span>
              </motion.div>
            </div>

            {/* Counter and Hogwarts House Cup Status */}
            <div className="mt-4 w-full flex items-center justify-between text-[11px] font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                HOGWARTS PORTAL
              </span>
              <span className="text-amber-300 font-bold font-mono tracking-wider">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
