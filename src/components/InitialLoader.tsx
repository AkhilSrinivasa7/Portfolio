import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete?: () => void;
}

const steps = [
  "Calibrating Cloud & Atmospheric Telemetry...",
  "Loading Optical Vision & Neural Models...",
  "Syncing GitHub Repositories (@AkhilSrinivasa7)...",
  "Synthesizing Experiences That Feel...",
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
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const s = Math.min(
      steps.length - 1,
      Math.floor((progress / 100) * steps.length)
    );
    setStepIndex(s);
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#03060d] text-white selection:bg-brand-lime"
        >
          {/* Ambient Ethereal Cloud Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-lime/10 blur-[130px] animate-pulse" />

          {/* Central Chamber */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-8 py-10 rounded-3xl border border-white/10 bg-[#060a12]/90 backdrop-blur-2xl text-center mx-4 shadow-2xl">
            {/* Monogram Badge */}
            <div className="relative mb-6">
              <div className="h-16 w-16 rounded-2xl bg-brand-lime/10 border border-brand-lime/40 flex items-center justify-center text-brand-lime font-display font-bold text-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                SA
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-lime"></span>
              </span>
            </div>

            {/* Creator Title */}
            <h2 className="text-xl font-bold font-display text-white tracking-wide">
              Ch Srinivasa Shanmukha Akhil
            </h2>
            <p className="text-xs font-mono text-cyan-300/80 mt-1 uppercase tracking-widest">
              Cloud & Atmospheric Photographer · CS Engineer
            </p>

            {/* Live Changing Meaningful Step */}
            <div className="mt-8 mb-4 h-6 flex items-center justify-center">
              <motion.span
                key={stepIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs font-mono text-white/70"
              >
                {steps[stepIndex]}
              </motion.span>
            </div>

            {/* Progress Bar with Liquid Sheen */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-brand-lime to-white rounded-full shadow-[0_0_12px_#ccff00]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Counter and Status */}
            <div className="mt-3 w-full flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>SYSTEM BOOT</span>
              <span className="text-brand-lime font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
