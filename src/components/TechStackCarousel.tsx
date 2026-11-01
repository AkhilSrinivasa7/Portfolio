import React from "react";

interface TechLogo {
  name: string;
  iconUrl: string;
}

const TECH_LOGOS: TechLogo[] = [
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "AWS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Docker",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

export default function TechStackCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0d0d0d] py-8 select-none group">
      {/* 1. Gradient fade-out masks on left and right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />

      {/* 2. Infinitely looping track with pause on hover */}
      <div className="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] [will-change:transform]">
        {/* Rendered multiple times to guarantee an unbroken loop */}
        {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="mx-3 flex h-12 items-center gap-3 rounded-full border border-[#222226] bg-[#16161a] px-5 py-2.5 shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#38bdf8] hover:bg-[#1c1c24] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer"
          >
            <img
              src={tech.iconUrl}
              alt={tech.name}
              className={`h-5 w-5 object-contain ${tech.name === "Next.js" ? "invert" : ""}`}
              loading="lazy"
            />
            <span className="text-sm font-medium text-neutral-200 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
