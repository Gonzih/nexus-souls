import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "cream" | "ink";
}

export const Section = ({ id, eyebrow, title, children, className = "", variant = "cream" }: SectionProps) => {
  const isInk = variant === "ink";
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 px-6 md:px-10 ${isInk ? "panel-ink" : "bg-background"} ${className}`}
    >
      {isInk && <div className="absolute inset-0 dot-bg-ink opacity-25 pointer-events-none" />}
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className={`font-mono text-[10px] uppercase tracking-[0.24em] mb-5 ${isInk ? "text-primary-glow" : "text-primary"}`}>
              — {eyebrow}
            </div>
          )}
          <h2 className={`font-serif-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] ${isInk ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);
