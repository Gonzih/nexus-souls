import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Counter } from "./Counter";

const stats = [
  { value: 1415, label: "tests written" },
  { value: 13, label: "microservices" },
  { value: 24, label: "open source repos" },
  { value: 1, label: "person" },
];

export const Hero = () => {
  const scrollToArch = () => {
    document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 glass rounded-full text-xs font-mono text-muted-foreground"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          NEXUS · INFRASTRUCTURE FOR AGENT TRUST
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="text-gradient-hero">
            The world is deploying AI agents with no identity, no history, no accountability.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We built the infrastructure layer that fixes that. Cryptographic identity. Behavioral ledger.
          Trust scoring. Open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-20"
        >
          <button
            onClick={scrollToArch}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
          >
            Explore the Architecture
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="https://github.com/Gonzih"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass text-foreground hover:bg-white/[0.06] transition-all"
          >
            <Github className="w-4 h-4" />
            View on GitHub →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden glass"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background/60 px-4 py-5 text-center">
              <div className="font-mono text-2xl md:text-3xl font-semibold text-foreground">
                <Counter to={s.value} delay={1} duration={1.5} />
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
