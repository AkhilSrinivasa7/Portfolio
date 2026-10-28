import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MagicalItem {
  id: string;
  name: string;
  latinSpell: string;
  icon: string;
  description: string;
  color: string;
  glowColor: string;
  initX: number;
  initY: number;
  rotation: number;
}

const MAGICAL_OBJECTS: MagicalItem[] = [
  {
    id: "feather",
    name: "Enchanted Feather",
    latinSpell: "Wingardium Leviosa!",
    icon: "🪶",
    description: "The classic charms class feather. Swish and flick!",
    color: "from-amber-200 to-amber-500",
    glowColor: "#ffd700",
    initX: -90,
    initY: 40,
    rotation: -18,
  },
  {
    id: "snitch",
    name: "Golden Snitch",
    latinSpell: "Aresto Momentum!",
    icon: "✨",
    description: "Golden Quidditch sphere enchanted with elusive flight.",
    color: "from-yellow-300 to-amber-600",
    glowColor: "#eeba30",
    initX: 90,
    initY: -40,
    rotation: 14,
  },
  {
    id: "potion",
    name: "Felix Felicis Vial",
    latinSpell: "Liquid Luck",
    icon: "🧪",
    description: "Golden molten potion that brings extraordinary fortune.",
    color: "from-emerald-300 to-amber-400",
    glowColor: "#34d399",
    initX: 0,
    initY: 60,
    rotation: -8,
  },
  {
    id: "grimoire",
    name: "Ancient Spellbook",
    latinSpell: "Standard Book of Spells",
    icon: "📖",
    description: "Leatherbound tome containing grade 1 charms and counter-curses.",
    color: "from-red-900 to-amber-800",
    glowColor: "#ef4444",
    initX: -110,
    initY: -60,
    rotation: 12,
  },
  {
    id: "medallion",
    name: "Gryffindor Lion Galleon",
    latinSpell: "Courage & Bravery",
    icon: "🦁",
    description: "Solid gold goblin-wrought coin stamped with the Gryffindor crest.",
    color: "from-amber-400 to-yellow-600",
    glowColor: "#f59e0b",
    initX: 110,
    initY: 50,
    rotation: -12,
  },
  {
    id: "wand",
    name: "Elder Wand",
    latinSpell: "Lumos & Levitation",
    icon: "🪄",
    description: "Legendary 15-inch elder wood wand with thestral tail-hair core.",
    color: "from-stone-700 to-amber-900",
    glowColor: "#ffffff",
    initX: 0,
    initY: -80,
    rotation: 45,
  },
];

export default function InteractiveStackToy() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [levitatingId, setLevitatingId] = useState<string | null>(null);
  const [levitateAll, setLevitateAll] = useState(false);
  const [activeSpellName, setActiveSpellName] = useState<string>("Swish and flick to levitate!");

  const handleLevitate = (item: MagicalItem) => {
    setLevitatingId(item.id);
    setActiveSpellName(`✨ Wingardium Leviosa! Floating: ${item.name}`);
  };

  const handleRelease = (id: string) => {
    if (levitatingId === id && !levitateAll) {
      setLevitatingId(null);
      setActiveSpellName("Swish and flick! Touch an object to lift it.");
    }
  };

  const toggleLevitateAll = () => {
    const nextState = !levitateAll;
    setLevitateAll(nextState);
    if (nextState) {
      setActiveSpellName("⚡ WINGARDIUM LEVIOSA MAXIMA! All objects levitating!");
    } else {
      setLevitatingId(null);
      setActiveSpellName("Objects resting gently.");
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-between w-full max-w-lg h-[460px] sm:h-[500px] rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#14080a]/90 via-[#0a0507]/95 to-[#050204]/95 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden select-none shadow-[0_0_50px_rgba(116,0,1,0.3)] group"
    >
      {/* Hogwarts Astronomy & Runic Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(238, 186, 48, 0.25) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Gryffindor Golden Core Glow */}
      <div className="pointer-events-none absolute w-80 h-80 rounded-full bg-amber-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute w-64 h-64 rounded-full bg-red-700/10 blur-[90px] translate-y-20" />

      {/* Chamber Header */}
      <div className="relative z-20 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/40 text-sm shadow-[0_0_12px_#eeba30]">
            🪶
          </span>
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
              Wingardium Leviosa
            </h3>
            <span className="text-[10px] font-mono text-white/50">
              Interactive Levitation Chamber
            </span>
          </div>
        </div>

        {/* Levitate All Button */}
        <button
          onClick={toggleLevitateAll}
          className={`rounded-xl border px-3 py-1.5 text-[11px] font-mono font-bold transition-all ${
            levitateAll
              ? "bg-amber-400 text-black border-amber-300 shadow-[0_0_15px_#eeba30]"
              : "bg-white/5 border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400"
          }`}
        >
          {levitateAll ? "Drop All ✕" : "Levitate All ✨"}
        </button>
      </div>

      {/* ACTIVE SPELL INCANTATION BANNER */}
      <div className="relative z-20 my-2">
        <div className="rounded-full border border-amber-400/40 bg-black/60 backdrop-blur-md px-4 py-1 text-xs font-mono text-amber-300 shadow-[0_0_15px_rgba(238,186,48,0.2)]">
          {activeSpellName}
        </div>
      </div>

      {/* LEVITATION STAGE: Interactive floating objects */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {/* Enchanted Zero-Gravity Levitation Pedestal / Runes Circle */}
        <div className="absolute w-56 h-56 rounded-full border border-amber-400/20 border-dashed animate-[spin_45s_linear_infinite] pointer-events-none" />
        <div className="absolute w-40 h-40 rounded-full border border-red-500/15 pointer-events-none" />

        {/* THE 6 MAGICAL ARTIFACTS */}
        {MAGICAL_OBJECTS.map((item) => {
          const isFloating = levitateAll || levitatingId === item.id;

          return (
            <motion.div
              key={item.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              onHoverStart={() => handleLevitate(item)}
              onHoverEnd={() => handleRelease(item.id)}
              onTapStart={() => handleLevitate(item)}
              onTap={() => handleLevitate(item)}
              animate={{
                x: isFloating ? item.initX : item.initX,
                // When touched/hovered: FLOATS HIGH IN THE AIR with anti-gravity bob!
                y: isFloating
                  ? [item.initY - 70, item.initY - 85, item.initY - 70]
                  : item.initY,
                rotate: isFloating
                  ? [item.rotation - 8, item.rotation + 8, item.rotation - 8]
                  : item.rotation,
                scale: isFloating ? 1.25 : 1,
              }}
              transition={
                isFloating
                  ? {
                      y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                      scale: { type: "spring", stiffness: 350, damping: 20 },
                    }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              className={`absolute cursor-grab active:cursor-grabbing p-3 rounded-2xl border backdrop-blur-xl transition-shadow ${
                isFloating
                  ? "border-amber-300 bg-amber-950/70 shadow-[0_0_35px_rgba(238,186,48,0.7)] z-30"
                  : "border-white/10 bg-black/60 shadow-lg hover:border-amber-400/60 z-10"
              }`}
              style={{
                touchAction: "none",
              }}
              title={`${item.name} - Touch to levitate in air!`}
            >
              {/* Item Core Graphic */}
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  {item.icon}
                </span>

                {/* Floating label pill */}
                <span
                  className={`mt-1 rounded-full px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                    isFloating
                      ? "bg-amber-400 text-black shadow-[0_0_10px_#eeba30]"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* Levitation Aura Rings when floating in air */}
              {isFloating && (
                <div className="pointer-events-none absolute -inset-2 rounded-2xl border border-amber-300/40 animate-ping opacity-30" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Chamber Footer Tip */}
      <div className="relative z-20 w-full flex items-center justify-between text-[10px] font-mono text-white/40 pt-2 border-t border-white/10">
        <span>Touch, hover, or drag artifacts</span>
        <span className="text-amber-300 font-bold">Anti-Gravity Physics Active 🪶</span>
      </div>
    </div>
  );
}
