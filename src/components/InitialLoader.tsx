import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete?: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + 6;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#050508] text-white cursor-pointer select-none"
        >
          {/* Ambient radial glow */}
          <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-amber-500/10 blur-[130px] animate-pulse" />
          <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo container with tactile glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl bg-white p-3 shadow-[0_0_60px_rgba(255,255,255,0.2)] border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/as-logo.jpg"
                  alt="Akhil Srinivasa Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Pulsing ring */}
              <div className="pointer-events-none absolute -inset-2 rounded-[28px] border border-amber-400/30 animate-ping opacity-30" />
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">
                Akhil Srinivasa
              </h1>
              <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-widest">
                Systems & Visual Architecture
              </p>
            </motion.div>

            {/* Minimal Liquid Progress Indicator */}
            <div className="w-48 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden mt-2 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
