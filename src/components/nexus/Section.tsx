import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, children, className = "" }: SectionProps) => (
  <section id={id} className={`relative py-28 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        {eyebrow && (
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-[1.1]">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);
