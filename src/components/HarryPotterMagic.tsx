import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function HarryPotterMagic() {
  const [snitchPos, setSnitchPos] = useState({ x: 120, y: 160 });
  const [caught, setCaught] = useState(false);
  const [points, setPoints] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [lumosMaxima, setLumosMaxima] = useState(false);
  const [flashScreen, setFlashScreen] = useState(false);
  const [spellMessage, setSpellMessage] = useState<string | null>(null);
  
  const snitchRef = useRef<HTMLDivElement | null>(null);
  const isDodging = useRef(false);

  // 1. ULTRA-FAST PROXIMITY EVASION: When cursor gets close, Snitch darts away instantly!
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (caught || isDodging.current) return;

      const dx = e.clientX - snitchPos.x;
      const dy = e.clientY - snitchPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // If cursor is within 180px, DODGE IMMEDIATELY!
      if (dist < 180) {
        isDodging.current = true;

        const margin = 80;
        const screenW = window.innerWidth - margin * 2;
        const screenH = window.innerHeight - margin * 2;

        // Dart in the opposite direction of cursor or across to a new quadrant
        let targetX = snitchPos.x - (dx / (dist || 1)) * (250 + Math.random() * 200);
        let targetY = snitchPos.y - (dy / (dist || 1)) * (250 + Math.random() * 200);

        if (targetX < margin || targetX > screenW) {
          targetX = margin + Math.random() * (screenW - margin);
        }
        if (targetY < margin || targetY > screenH) {
          targetY = margin + Math.random() * (screenH - margin);
        }

        setSnitchPos({ x: Math.round(targetX), y: Math.round(targetY) });

        setTimeout(() => {
          isDodging.current = false;
        }, 180);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [snitchPos, caught]);

  // 2. HIGH FREQUENCY RAPID FLIGHT: Snitch naturally darts every 900ms - 1500ms
  useEffect(() => {
    if (caught) return;

    const interval = setInterval(() => {
      if (isDodging.current) return;

      const margin = 70;
      const maxX = Math.max(window.innerWidth - margin, 320);
      const maxY = Math.max(window.innerHeight - margin, 380);

      const nextX = Math.floor(Math.random() * (maxX - margin)) + margin;
      const nextY = Math.floor(Math.random() * (maxY - margin)) + margin;

      setSnitchPos({ x: nextX, y: nextY });
    }, 1100);

    return () => clearInterval(interval);
  }, [caught]);

  // Catching the Snitch (Extreme Seeker Reflexes!)
  const handleCatchSnitch = () => {
    setCaught(true);
    setPoints((prev) => prev + 150);
    setSpellMessage("UNBELIEVABLE! Caught the Golden Snitch! +150 Points for Gryffindor! 🏆");

    const newSparkles: Sparkle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      x: snitchPos.x + (Math.random() * 100 - 50),
      y: snitchPos.y + (Math.random() * 100 - 50),
      size: Math.random() * 10 + 6,
    }));
    setSparkles(newSparkles);

    setTimeout(() => {
      setCaught(false);
      setSparkles([]);
      setSpellMessage(null);
    }, 4500);
  };

  // 3. CAST LUMOS MAXIMA SPELL!
  const castLumosMaxima = () => {
    if (!lumosMaxima) {
      setFlashScreen(true);
      setLumosMaxima(true);
      setSpellMessage("✨ LUMOS MAXIMA! The magical light blazes forth!");
      setTimeout(() => setFlashScreen(false), 350);
      setTimeout(() => setSpellMessage(null), 4000);
    } else {
      setLumosMaxima(false);
      setSpellMessage("🌑 NOX! The shadows return to Hogwarts.");
      setTimeout(() => setSpellMessage(null), 3000);
    }
  };

  return (
    <>
      {/* LUMOS MAXIMA FLASH EFFECT */}
      {flashScreen && (
        <div className="fixed inset-0 z-[99999] pointer-events-none bg-white transition-opacity duration-300 animate-out fade-out" />
      )}

      {/* LUMOS MAXIMA ENCHANTED AMBIENT RADIANCE OVER THE PAGE */}
      {lumosMaxima && (
        <div
          className="fixed inset-0 z-[15] pointer-events-none transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 30%, rgba(255, 235, 180, 0.16) 0%, rgba(238, 186, 48, 0.08) 45%, transparent 75%)`,
          }}
        >
          {/* Shimmering magical constellations in Lumos Maxima mode */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:32px_32px] opacity-25 animate-pulse" />
        </div>
      )}

      {/* 1. ULTRA-FAST & EVASIVE GOLDEN SNITCH */}
      <motion.div
        ref={snitchRef}
        animate={{
          x: snitchPos.x,
          y: snitchPos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 22,
          mass: 0.6,
        }}
        onClick={handleCatchSnitch}
        className="fixed z-[9992] cursor-pointer pointer-events-auto select-none"
        title="Golden Snitch: Near-impossible to catch! Dart away!"
      >
        <div className="relative flex items-center justify-center group">
          {/* Left Frenzy Fluttering Wing */}
          <div
            className="w-8 h-2.5 bg-gradient-to-l from-white via-amber-200 to-transparent rounded-full origin-right shadow-[0_0_12px_rgba(255,255,255,0.95)]"
            style={{
              animation: "wing 0.06s ease-in-out infinite alternate",
            }}
          />

          {/* Golden Core Sphere with High Velocity Glow */}
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 via-amber-300 to-amber-600 shadow-[0_0_24px_#ffd700] ring-2 ring-amber-300 animate-pulse">
            <span className="text-[9px] text-amber-950 font-black">✦</span>
          </div>

          {/* Right Frenzy Fluttering Wing */}
          <div
            className="w-8 h-2.5 bg-gradient-to-r from-white via-amber-200 to-transparent rounded-full origin-left shadow-[0_0_12px_rgba(255,255,255,0.95)]"
            style={{
              animation: "wing 0.06s ease-in-out infinite alternate-reverse",
            }}
          />

          {/* Golden Flight Trail Spark */}
          <div className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-amber-300 bg-black/90 px-2 py-0.5 rounded-full border border-amber-400/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Too Fast! ⚡
          </div>
        </div>
      </motion.div>

      {/* Sparkles burst if caught */}
      {sparkles.map((sp) => (
        <motion.div
          key={sp.id}
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2.2, y: sp.y - 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9994] text-amber-300 font-bold"
          style={{ left: sp.x, top: sp.y, fontSize: `${sp.size}px` }}
        >
          ✨
        </motion.div>
      ))}

      {/* 2. LUMOS MAXIMA & GRYFFINDOR FLOATING WAND CONTROL (Bottom Right of screen) */}
      <div className="fixed bottom-6 right-6 z-[9990] flex items-center gap-3">
        {/* Spell Message Toast */}
        <AnimatePresence>
          {spellMessage && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="rounded-2xl border-2 border-amber-400/60 bg-gradient-to-r from-red-950/95 via-black/95 to-amber-950/95 p-3.5 shadow-[0_0_30px_rgba(238,186,48,0.4)] backdrop-blur-xl text-white max-w-xs text-xs font-mono"
            >
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <span>🦁 Gryffindor Magic:</span>
              </div>
              <div className="mt-1 text-white/90">{spellMessage}</div>
              {points > 0 && (
                <div className="mt-1 text-amber-400 text-[10px]">
                  House Cup Points: +{points}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* LUMOS MAXIMA SPELL CAST BUTTON */}
        <button
          onClick={castLumosMaxima}
          className={`group relative flex items-center gap-2 rounded-2xl border px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-all ${
            lumosMaxima
              ? "border-amber-300 bg-amber-400 text-black font-bold shadow-[0_0_25px_#ffd700]"
              : "border-amber-500/40 bg-gradient-to-r from-red-950/80 via-black/80 to-amber-950/80 text-amber-300 hover:border-amber-300 hover:shadow-[0_0_20px_rgba(238,186,48,0.35)]"
          }`}
          title={lumosMaxima ? "Cast Nox (Turn off light)" : "Cast Lumos Maxima! (Illuminates the realm)"}
        >
          <span className="text-base group-hover:rotate-12 transition-transform">
            {lumosMaxima ? "🪄" : "⚡"}
          </span>
          <div className="flex flex-col text-left font-mono">
            <span className="text-xs font-black uppercase tracking-wider">
              {lumosMaxima ? "NOX" : "LUMOS MAXIMA"}
            </span>
            <span className={`text-[9px] ${lumosMaxima ? "text-neutral-900" : "text-white/50"}`}>
              {lumosMaxima ? "Light Active ✨" : "Cast Spell 🪄"}
            </span>
          </div>
        </button>
      </div>

      {/* 3. GRYFFINDOR HOUSE CREST (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block pointer-events-auto">
        <div className="group relative flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-black/70 backdrop-blur-md px-3.5 py-1.5 shadow-[0_0_20px_rgba(116,0,1,0.4)] transition-all hover:border-amber-400 hover:shadow-[0_0_25px_rgba(238,186,48,0.4)]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-amber-600 text-xs shadow-[0_0_8px_#eeba30]">
            🦁
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 group-hover:text-amber-200 transition-colors">
              Gryffindor
            </span>
            <span className="text-[9px] font-mono text-white/50">
              Brave at Heart • Potterhead ⚡
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
