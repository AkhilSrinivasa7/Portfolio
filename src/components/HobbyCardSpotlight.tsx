import { useState, useRef } from "react";
import type { HobbyItem } from "../data/hobbiesData";

interface HobbyCardProps {
  hobby: HobbyItem;
  renderWatermark: (type: string) => React.ReactNode;
}

export default function HobbyCardSpotlight({
  hobby,
  renderWatermark,
}: HobbyCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isGryffindor = hobby.theme === "gryffindor";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -200, y: -200 });
      }}
      className={`group relative rounded-3xl border p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md select-none ${
        isGryffindor
          ? "border-amber-500/40 bg-gradient-to-br from-red-950/30 via-[#0e0e11] to-amber-950/20 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(238,186,48,0.25)]"
          : "border-white/10 bg-white/[0.02] hover:border-brand-lime/70"
      }`}
    >
      {/* CURSOR MOTION SPOTLIGHT GRADIENT */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isGryffindor
            ? `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(238, 186, 48, 0.28), rgba(153, 0, 0, 0.2), transparent 75%)`
            : `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.22), rgba(103, 232, 249, 0.12), transparent 75%)`,
        }}
      />

      {/* Glossy Specular Border follow */}
      {isHovered && (
        <div
          className={`pointer-events-none absolute inset-0 rounded-3xl border ${
            isGryffindor ? "border-amber-400/50" : "border-brand-lime/40"
          }`}
          style={{
            maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
      )}

      {/* Relative Watermark Icon in Block Background */}
      <div
        className={`pointer-events-none absolute -right-3 -bottom-3 w-32 h-32 opacity-10 group-hover:opacity-25 group-hover:scale-115 group-hover:rotate-6 transition-all duration-500 ${
          isGryffindor ? "text-amber-400" : "text-brand-lime"
        }`}
      >
        {renderWatermark(hobby.watermark)}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl group-hover:scale-110 transition-all ${
              isGryffindor
                ? "bg-amber-500/10 border-amber-500/30 group-hover:shadow-[0_0_15px_rgba(238,186,48,0.4)]"
                : "bg-white/5 border-white/10 group-hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]"
            }`}
          >
            {hobby.icon}
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-mono transition-colors ${
              isGryffindor
                ? "bg-amber-400/10 border-amber-400/30 text-amber-300 group-hover:border-amber-400"
                : "bg-white/5 border-white/10 text-white/60 group-hover:text-brand-lime group-hover:border-brand-lime/30"
            }`}
          >
            {hobby.tag}
          </span>
        </div>

        <h3
          className={`text-xl font-bold font-display mb-2 transition-colors ${
            isGryffindor
              ? "text-white group-hover:text-amber-300"
              : "text-white group-hover:text-brand-lime"
          }`}
        >
          {hobby.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">
          {hobby.description}
        </p>

        {isGryffindor && (
          <div className="mt-4 pt-3 border-t border-amber-400/20 flex items-center gap-2 text-xs font-mono text-amber-400/80">
            <span>⚡ "It is our choices that show what we truly are."</span>
          </div>
        )}
      </div>
    </div>
  );
}
