export interface TechItem {
  name: string;
  category: "all" | "languages" | "ai-ml" | "web" | "tools";
  level: string;
  iconType: string;
  color: string;
  description: string;
}

export const techStackList: TechItem[] = [
  // Languages
  {
    name: "Python",
    category: "languages",
    level: "Advanced",
    iconType: "python",
    color: "#3776ab",
    description: "Core language for AI/ML modeling, script automation, and backend systems.",
  },
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    iconType: "java",
    color: "#f89820",
    description: "Object-oriented software development and robust enterprise architecture.",
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Advanced",
    iconType: "javascript",
    color: "#f7df1e",
    description: "Interactive frontends, modern asynchronous systems, and Node runtimes.",
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "Proficient",
    iconType: "typescript",
    color: "#3178c6",
    description: "Type-safe modern web applications and large-scale frontend engineering.",
  },
  {
    name: "C++",
    category: "languages",
    level: "Intermediate",
    iconType: "cpp",
    color: "#00599c",
    description: "High-performance data structures, algorithms, and system programming.",
  },
  {
    name: "SQL",
    category: "languages",
    level: "Proficient",
    iconType: "sql",
    color: "#00758f",
    description: "Relational schema design, complex analytical queries, and indexing.",
  },

  // AI & ML
  {
    name: "TensorFlow",
    category: "ai-ml",
    level: "Proficient",
    iconType: "tensorflow",
    color: "#ff6f00",
    description: "Deep learning models, CNN image classification, and neural training.",
  },
  {
    name: "PyTorch",
    category: "ai-ml",
    level: "Intermediate",
    iconType: "pytorch",
    color: "#ee4c2c",
    description: "Dynamic deep learning research, tensors, and neural networks.",
  },
  {
    name: "OpenCV",
    category: "ai-ml",
    level: "Intermediate",
    iconType: "opencv",
    color: "#5c3ee8",
    description: "Real-time computer vision, image preprocessing, and feature detection.",
  },
  {
    name: "Generative AI",
    category: "ai-ml",
    level: "Advanced",
    iconType: "genai",
    color: "#ccff00",
    description: "LLM agent design, prompt architecture, and multimodal reasoning.",
  },

  // Web & Frameworks
  {
    name: "React",
    category: "web",
    level: "Advanced",
    iconType: "react",
    color: "#61dafb",
    description: "Component-driven modern web apps, reactive state, and dynamic UIs.",
  },
  {
    name: "Next.js",
    category: "web",
    level: "Intermediate",
    iconType: "nextjs",
    color: "#ffffff",
    description: "Server-side rendering, API routes, and fullstack React architecture.",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    level: "Advanced",
    iconType: "tailwind",
    color: "#38bdf8",
    description: "Utility-first modern responsive styling and custom aesthetic design tokens.",
  },
  {
    name: "Node.js",
    category: "web",
    level: "Proficient",
    iconType: "nodejs",
    color: "#5fa04e",
    description: "Backend REST APIs, serverless handlers, and server-side automation.",
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    iconType: "github",
    color: "#f05032",
    description: "Version control workflows, branching, pull requests, and CI/CD pipelines.",
  },
  {
    name: "Firebase",
    category: "tools",
    level: "Proficient",
    iconType: "firebase",
    color: "#ffca28",
    description: "Realtime databases, authentication, hosting, and cloud functions.",
  },
  {
    name: "Supabase",
    category: "tools",
    level: "Proficient",
    iconType: "supabase",
    color: "#3ecf8e",
    description: "Postgres-backed backend services, auth flows, and edge functions.",
  },
  {
    name: "Figma",
    category: "tools",
    level: "Advanced",
    iconType: "figma",
    color: "#f24e1e",
    description: "UI/UX wireframing, high-fidelity prototypes, and design systems.",
  },
];
