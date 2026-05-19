import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CROSSHAIR_POSITIONS = [
  [6, 6],
  [94, 6],
  [94, 94],
  [6, 94],
] as const;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative panel-ink min-h-screen flex flex-col overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-bg-ink opacity-30 pointer-events-none" />

      {/* Corner crosshairs */}
      {CROSSHAIR_POSITIONS.map(([x, y], i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" className="text-primary-foreground/40">
            <line x1="0" y1="8" x2="6" y2="8" strokeWidth="0.6" />
            <line x1="10" y1="8" x2="16" y2="8" strokeWidth="0.6" />
            <line x1="8" y1="0" x2="8" y2="6" strokeWidth="0.6" />
            <line x1="8" y1="10" x2="8" y2="16" strokeWidth="0.6" />
          </svg>
        </motion.div>
      ))}

      {/* Logo mark — top left */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center gap-2.5 px-8 md:px-14 py-8"
      >
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
            <div className="w-3 h-3 bg-primary rotate-45" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors">Nexus</span>
        </a>
      </motion.div>

      {/* Center content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm uppercase tracking-[0.24em] text-primary mb-6"
        >
          — Error 404
        </motion.div>

        {/* Large 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif-display font-light leading-none text-[clamp(7rem,22vw,16rem)] text-primary-foreground/10 select-none"
          aria-hidden="true"
        >
          404
        </motion.div>

        {/* Page not found heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-serif-display text-3xl md:text-4xl font-light text-primary-foreground mt-[-2rem] mb-5"
        >
          Page not found.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-mono text-sm text-primary-foreground/50 max-w-xs leading-relaxed mb-10"
        >
          The route <span className="text-primary-foreground/80">{location.pathname}</span> doesn't exist in this system.
        </motion.p>

        {/* Go home button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-foreground hover:text-foreground transition-colors"
          >
            Go home
            <span className="inline-flex items-center justify-center w-5 h-5 bg-primary-foreground/15 group-hover:bg-foreground/10 transition-colors">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative flex items-center justify-between px-8 md:px-14 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/30"
      >
        <span>Nexus · Trust Infrastructure</span>
        <span>404 ·</span>
      </motion.div>
    </div>
  );
};

export default NotFound;
