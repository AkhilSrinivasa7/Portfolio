import Section from "./Section";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "CORE",
    skills: ["Python", "Java", "JavaScript", "Data Structures & Algorithms", "SQL", "Git / GitHub"],
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "Generative AI"],
  },
  {
    title: "WEB",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase"],
  },
  {
    title: "DESIGN",
    skills: ["Figma", "Canva", "UI Design", "Visual Identity"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I build with."
      description="A growing toolkit across software engineering, AI, and visual design."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-white/10 glass p-6 sm:p-8 relative overflow-hidden group magnetic-hover"
          >
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-brand-lime/5 blur-[40px] transition-all group-hover:bg-brand-lime/10" />
            
            <h3 className="mb-6 text-sm font-bold text-white/50 uppercase tracking-widest font-display group-hover:text-brand-lime transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-all hover:border-brand-lime hover:bg-brand-lime/10 hover:text-brand-lime font-medium cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
