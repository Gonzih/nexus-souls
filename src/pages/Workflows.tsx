import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/nexus/Footer";

const workflows = [
  {
    slug: "competitor-intelligence",
    name: "Competitor Intelligence Pipeline",
    description:
      "A browser harness sweeps competitor Facebook groups weekly. Multi-model pipeline categorizes posts, finds patterns, and auto-builds features or publishes blog posts from competitor complaints.",
    result: "$1.2M → $5.5M ARR",
    period: "1 year",
    tags: ["intelligence", "automation", "content", "saas"],
  },
  {
    slug: "photo-to-listing",
    name: "Photo to Live Listing",
    description:
      "Physical inventory → published Squarespace store in under 2 hours. Florence-2 reads brand tags and fabric labels from photos. Claude writes polished listing copy. GitHub Pages hosts images. CSV import publishes everything.",
    result: "4h → <2h",
    period: "per 50-item batch",
    tags: ["ecommerce", "vision", "automation", "content"],
  },
  {
    slug: "ai-creator-persona",
    name: "AI Creator Persona System",
    description:
      "Four markdown files. One persistent identity. Runs while you sleep. persona.md locks consistency. brain.md tracks every subscriber's name, dog, and tip triggers. Cron schedules voice notes at 11pm and morning catch-ups at 7am. Flux generates images. ElevenLabs clones voice.",
    result: "$43k",
    period: "30 days (case study)",
    tags: ["creator-economy", "automation", "personalization", "ai-persona"],
  },
];

const Workflows = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Nexus
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            Workflow Library
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6"
          >
            — Claude Code Workflows
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words max-w-4xl"
          >
            Real AI workflows.{" "}
            <span className="text-accent-blue italic">Documented architecturally.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
          >
            Not tutorials. Not demos. Actual pipelines that generated revenue, displaced headcount, or
            compounded over time. Architecture-first documentation.
          </motion.p>
        </div>
      </section>

      {/* Workflow grid */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/50 mb-10">
            — {workflows.length} workflow{workflows.length !== 1 ? "s" : ""} documented
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {workflows.map((wf, i) => (
              <motion.div
                key={wf.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/workflows/${wf.slug}`}
                  className="bg-background p-7 flex flex-col h-full group hover:bg-secondary/50 transition-colors"
                >
                  {/* Result badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                      — Result
                    </div>
                    <div className="font-mono text-[10px] text-foreground/40">
                      {wf.period}
                    </div>
                  </div>

                  <div className="font-serif-display text-2xl text-foreground mb-1 leading-tight">
                    {wf.result}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45 mb-6">
                    ARR growth
                  </div>

                  <h2 className="font-serif-display text-xl leading-snug text-foreground mb-4">
                    {wf.name}
                  </h2>

                  <p className="text-sm text-foreground/65 leading-relaxed mb-8 flex-1">
                    {wf.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {wf.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-1 border border-foreground/15 text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
                    Read workflow{" "}
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Workflows;
