import { Github, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="panel-ink py-8 px-8 md:px-10">
    <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-center justify-between text-sm">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 border border-primary-foreground/40 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-primary-glow rotate-45" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/80">Nexus</span>
      </div>

      <nav className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
        <a href="https://github.com/Gonzih" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">GitHub</a>
        <a href="https://github.com/Gonzih/nexus-protocols" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">Protocols</a>
        <a href="https://github.com/Gonzih?tab=repositories&q=research" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">Research</a>
      </nav>

      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
        <span>Open source · trust at scale</span>
        <a href="https://x.com/Gonzih" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow" aria-label="X"><Twitter className="w-3.5 h-3.5" /></a>
        <a href="https://github.com/Gonzih" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow" aria-label="GitHub"><Github className="w-3.5 h-3.5" /></a>
      </div>
    </div>
  </footer>
);
