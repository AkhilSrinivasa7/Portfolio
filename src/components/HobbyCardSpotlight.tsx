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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -200, y: -200 });
      }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-lime/70 backdrop-blur-md select-none"
    >
      {/* CURSOR MOTION SPOTLIGHT GRADIENT (User requested!) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.22), rgba(103, 232, 249, 0.12), transparent 75%)`,
        }}
      />

      {/* Glossy Specular Border follow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-lime/40"
          style={{
            maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
      )}

      {/* Relative Watermark Icon in Block Background */}
      <div className="pointer-events-none absolute -right-3 -bottom-3 w-32 h-32 opacity-10 group-hover:opacity-25 group-hover:scale-115 group-hover:rotate-6 text-brand-lime transition-all duration-500">
        {renderWatermark(hobby.watermark)}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all">
            {hobby.icon}
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-mono text-white/60 group-hover:text-brand-lime group-hover:border-brand-lime/30 transition-colors">
            {hobby.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-brand-lime transition-colors">
          {hobby.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">
          {hobby.description}
        </p>
      </div>
    </div>
  );
}
