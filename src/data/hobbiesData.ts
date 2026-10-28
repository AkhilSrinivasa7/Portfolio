export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  watermark: "camera" | "code" | "puzzle" | "ai" | "audio" | "design" | "movie";
  tag: string;
  description: string;
  theme?: "gryffindor" | "default";
}

export const hobbiesList: HobbyItem[] = [
  {
    id: "cinema-movies",
    title: "Watching Movies & Harry Potter Universe",
    category: "Cinema & Lore",
    icon: "🎬",
    watermark: "movie",
    tag: "Gryffindor & Potterhead ⚡",
    description: "Devoted cinema enthusiast enchanted by the Harry Potter wizarding world, Gryffindor courage, Christopher Nolan non-linear time architectures, and epic John Williams & Hans Zimmer orchestral scores.",
    theme: "gryffindor",
  },
  {
    id: "nature-photography",
    title: "Nature & Cloud Photography",
    category: "Visual Arts",
    icon: "☁️",
    watermark: "camera",
    tag: "Skies & Landscapes",
    description: "Venturing into high-altitude ridges and horizon lines to document fleeting tropospheric cloud formations, golden hour light, and raw natural mist.",
  },
  {
    id: "creative-code",
    title: "Core Engineering & Creative Code",
    category: "Software & Design",
    icon: "⚡",
    watermark: "code",
    tag: "Canvas / Framer",
    description: "Writing expressive algorithms, tactile web physics, micro-interactions, and high-performance frontend architectures with sensory feedback.",
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
    description: "Architecting multi-agent tool loops, local LLM pipelines, multimodal reasoning workflows, and emergent machine intelligence.",
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
];
