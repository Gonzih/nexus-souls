export const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10 px-6 mt-10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center text-sm">
      <div className="font-mono text-muted-foreground text-xs md:text-sm">
        Nexus Infrastructure — Open Source
      </div>
      <nav className="flex justify-center gap-6 text-muted-foreground">
        <a href="https://github.com/Gonzih" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://github.com/Gonzih/nexus-protocols" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Protocols</a>
        <a href="https://github.com/Gonzih?tab=repositories&q=research" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Research</a>
      </nav>
      <div className="md:text-right text-muted-foreground text-xs md:text-sm">
        Built by Max Gonzih ·{" "}
        <a href="mailto:gonzih@gmail.com" className="hover:text-primary transition-colors">gonzih@gmail.com</a>
      </div>
    </div>
  </footer>
);
