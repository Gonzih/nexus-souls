import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Counter } from "./Counter";

const stats = [
  { value: 1415, label: "tests written" },
  { value: 16, label: "microservices" },
  { value: 29, label: "open source repos" },
  { value: 1, label: "person" },
];

// Decorative orbital diagram (line-art, like the reference)
const Orbits = () => (
  <svg viewBox="0 0 600 600" className="w-full h-full" fill="none" stroke="currentColor">
    <g className="text-primary-foreground/30">
      {[80, 130, 190, 260, 340].map((r, i) => (
        <ellipse key={r} cx="300" cy="300" rx={r} ry={r * 0.55}
          transform={`rotate(${i * 18} 300 300)`}
          strokeWidth="0.6" strokeDasharray={i % 2 ? "2 4" : "0"} />
      ))}
    </g>
    {/* dotted spiral arms */}
    {Array.from({ length: 220 }).map((_, i) => {
      const t = i / 220;
      const a = t * Math.PI * 6;
      const r = 30 + t * 230;
      const x = 300 + Math.cos(a) * r;
      const y = 300 + Math.sin(a) * r * 0.55;
      return <circle key={i} cx={x} cy={y} r={1 - t * 0.5} className="fill-primary-foreground/70" />;
    })}
    {Array.from({ length: 220 }).map((_, i) => {
      const t = i / 220;
      const a = Math.PI + t * Math.PI * 6;
      const r = 30 + t * 230;
      const x = 300 + Math.cos(a) * r;
      const y = 300 + Math.sin(a) * r * 0.55;
      return <circle key={`b${i}`} cx={x} cy={y} r={1 - t * 0.5} className="fill-primary-glow/80" />;
    })}
    <circle cx="300" cy="300" r="14" className="fill-primary-glow" />
    <circle cx="300" cy="300" r="34" className="fill-primary-glow/20" />
    {/* tiny stars */}
    {[[80,80],[520,90],[540,520],[60,500]].map(([x,y],i) => (
      <g key={i} className="text-primary-foreground/40">
        <line x1={x-6} y1={y} x2={x+6} y2={y} strokeWidth="0.6" />
        <line x1={x} y1={y-6} x2={x} y2={y+6} strokeWidth="0.6" />
      </g>
    ))}
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative">
      {/* Split hero: left cream (text) / right navy (orbital diagram) */}
      <div className="grid lg:grid-cols-2 min-h-[88vh]">
        {/* LEFT — cream panel */}
        <div className="relative bg-background px-8 md:px-14 py-16 lg:py-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-foreground/10">
          <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-12"
            >
              <div className="w-8 h-8 border border-foreground/40 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rotate-45" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80">Nexus</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] text-foreground"
            >
              Identity <span className="text-accent-blue italic">for</span><br />
              autonomous <span className="text-accent-blue italic">agents.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-md text-base text-foreground/70 leading-relaxed"
            >
              Cryptographic identity, behavioral ledger, and trust scoring
              for AI agents. Open source infrastructure for what should
              have existed from the start.
            </motion.p>
          </div>

          <div className="relative mt-14">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#architecture"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground transition-colors"
              >
                Learn more
                <span className="inline-flex items-center justify-center w-5 h-5 bg-primary-foreground/15 group-hover:bg-primary-foreground/25 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
              <a
                href="https://github.com/Gonzih"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-foreground/20 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-foreground/15">
              {stats.map((s) => (
                <div key={s.label} className="py-5 pl-4 pr-4 border-r last:border-r-0 border-foreground/10">
                  <div className="font-serif-display text-3xl md:text-4xl text-foreground">
                    <Counter to={s.value} delay={1} duration={1.5} />
                  </div>
                  <div className="text-[10px] mt-1 uppercase tracking-[0.16em] text-foreground/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — navy panel */}
        <div className="relative panel-ink flex flex-col px-8 md:px-12 py-12 overflow-hidden">
          <div className="absolute inset-0 dot-bg-ink opacity-30" />
          <div className="relative flex items-start justify-between mb-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/70 leading-relaxed">
              Trust at the center.<br />
              Accountability at scale.
            </div>
            <div className="text-primary-foreground/40 font-mono text-[10px]">— 001</div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-full max-w-[560px] aspect-square">
              <Orbits />
            </div>
          </motion.div>
          <div className="relative flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50 mt-4">
            <span>Ed25519 · soulchain · ledger</span>
            <span>2026 ·</span>
          </div>
        </div>
      </div>
    </section>
  );
};
