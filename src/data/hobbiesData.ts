export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  watermark: "camera" | "code" | "puzzle" | "ai" | "audio" | "design";
  tag: string;
  description: string;
}

export const hobbiesList: HobbyItem[] = [
  {
    id: "nature-photography",
    title: "Nature & Wildlife Photography",
    category: "Visual Arts",
    icon: "🌲",
    watermark: "camera",
    tag: "Aperture & Landscapes",
    description: "Venturing into wilderness and mountain horizons with high-speed glass to capture wildlife, raw mist, and natural light.",
  },
  {
    id: "creative-code",
    title: "Core Engineering & Creative Code",
    category: "Software & Design",
    icon: "⚡",
    watermark: "code",
    tag: "Canvas / Framer",
    description: "Writing expressive algorithms, tactile web physics, micro-interactions, and high-performance frontend architectures.",
  },
  {
    id: "algorithms",
    title: "Algorithmic Problem Solving",
    category: "Computer Science",
    icon: "🧩",
    watermark: "puzzle",
    tag: "LeetCode / DSA",
    description: "Tackling graph traversals, dynamic programming, and computational geometry to keep analytical problem-solving razor sharp.",
  },
  {
    id: "ai-systems",
    title: "Autonomous Agents & GenAI",
    category: "AI & Research",
    icon: "🤖",
    watermark: "ai",
    tag: "Agents & ADK",
    description: "Architecting multi-agent tool loops, local LLM pipelines, multimodal reasoning workflows, and emergent intelligence.",
  },
  {
    id: "ambient-audio",
    title: "Ambient Soundscapes & Focus",
    category: "Sound Design",
    icon: "🎧",
    watermark: "audio",
    tag: "Lo-Fi & Synthesizers",
    description: "Curating binaural frequencies, atmospheric synthesizer pads, and lo-fi textures that induce deep technical flow states.",
  },
  {
    id: "design-systems",
    title: "Product Design & Typography",
    category: "Design",
    icon: "📐",
    watermark: "design",
    tag: "Figma & Brutalism",
    description: "Studying Swiss grid systems, high-contrast dark aesthetics, intentional visual hierarchies, and responsive design systems.",
  },
];
