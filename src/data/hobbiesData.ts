export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  iconImage?: string;
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
    icon: "🦁",
    iconImage: "/images/gryffindor-crest.jpg",
    watermark: "movie",
    tag: "Gryffindor House • Potterhead ⚡",
    description: "Devoted cinema enthusiast enchanted by the Harry Potter wizarding world, Gryffindor bravery, Christopher Nolan non-linear time architectures, and epic John Williams & Hans Zimmer orchestral scores.",
    theme: "gryffindor",
  },
  {
    id: "nature-photography",
    title: "Nature & Photography",
    category: "Visual Arts",
    icon: "📷",
    iconImage: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4f8.svg",
    watermark: "camera",
    tag: "Aperture & Landscapes",
    description: "Venturing into high-altitude mountain horizons and forest trails to capture fleeting natural light, raw wilderness, and atmospheric compositions.",
  },
  {
    id: "exploring-design-tools",
    title: "Exploring Design Tools",
    category: "Product & UI Architecture",
    icon: "🎨",
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    watermark: "design",
    tag: "Figma, Spline & Design Systems",
    description: "Deep-diving into next-generation visual design tools, interactive prototyping environments, 3D modeling interfaces, and design systems that bridge aesthetic elegance with engineering precision.",
  },
];