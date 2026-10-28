import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-12 md:py-20 lg:py-28 relative z-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-lime">
            <span className="h-px w-12 bg-brand-lime/60" />
            {eyebrow}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display mb-2">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-base text-white/70">{description}</p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
