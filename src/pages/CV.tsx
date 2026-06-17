import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Star, GitBranch, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const timeline = [
  {
    year: "2007",
    role: "First Professional Code",
    org: "ITUnit",
    location: "Grodno, Belarus",
    desc: "Age 17. Startup environment from day one. Freelance engagements running in parallel.",
    tags: ["freelance", "startup"],
  },
  {
    year: "2011–2014",
    role: "Software Engineer",
    org: "Elmar Reizen",
    location: "Amsterdam, Netherlands",
    desc: "Inherited a 15-year unprofitable travel platform. Built Scala + Spark data pipelines that changed the unit economics. Company turned profitable and was acquired.",
    tags: ["scala", "spark", "big-data"],
  },
  {
    year: "2014–2017",
    role: "Co-creator",
    org: "Clojure Dutch Days",
    location: "Amsterdam",
    desc: "Co-created the Clojure conference in the Netherlands. Three editions.",
    tags: ["clojure", "community"],
  },
  {
    year: "2017–2019",
    role: "Software Engineer → Staff",
    org: "Kira Systems",
    location: "Toronto, Canada",
    desc: "Legal tech ML platform. Rewrote the core ML pipeline in Go: build time 10h → 1h. CPU-only inference at scale. Clojure in production across the stack.",
    tags: ["go", "clojure", "ml", "legal-tech"],
  },
  {
    year: "2018–2019",
    role: "Co-creator",
    org: "gocon.ca",
    location: "Canada",
    desc: "Co-created Canada's Go conference.",
    tags: ["go", "community"],
  },
  {
    year: "2019–2021",
    role: "Senior Engineer",
    org: "Horizon Blockchain Games",
    location: "Toronto, Canada",
    desc: "Built the blockchain indexer and core infrastructure for Skyweaver.",
    tags: ["blockchain", "go", "indexer"],
  },
  {
    year: "2021–2022",
    role: "Co-founder / Engineer",
    org: "funkt.ai",
    location: "Remote",
    desc: "AI copywriting system. Built the LLM pipeline and prompt infrastructure.",
    tags: ["ai", "nlp", "typescript"],
  },
  {
    year: "2022–2023",
    role: "Co-Founder / CTO",
    org: "Agentic Labs",
    location: "Remote",
    desc: "Built autonomous agent systems in 2022.",
    tags: ["agents", "rust", "autonomous"],
  },
  {
    year: "2023",
    role: "Engineer",
    org: "avro.ai",
    location: "Remote",
    desc: "LLM-based structured data extraction from unstructured documents. Production pipelines, enterprise contracts.",
    tags: ["llm", "extraction", "typescript"],
  },
  {
    year: "2023–2024",
    role: "GenAI Tech Lead",
    org: "Northwestern Mutual Venture Studio",
    location: "Milwaukee, WI",
    desc: "$32B AUM context. Led GenAI technical strategy inside the venture arm. Translated frontier AI capabilities into institutional constraints.",
    tags: ["genai", "enterprise", "fintech"],
  },
  {
    year: "2024",
    role: "CTO",
    org: "8LAB",
    location: "Remote",
    desc: "Full technical ownership. Architecture, hiring, roadmap.",
    tags: ["cto", "architecture"],
  },
  {
    year: "2024–March 2026",
    role: "Founder / Architect",
    org: "AMAI Labs",
    location: "Remote",
    desc: "Trust infrastructure for the agentic economy. agent-jail (syscall-level observable sandbox), soul-core (async agentic runtime, 692 tests), id-service, GCG inversion research.",
    tags: ["rust", "agents", "trust-infra"],
  },
];

const repos = [
  {
    name: "cljs-electron",
    stars: 596,
    lang: "ClojureScript",
    desc: "ClojureScript + Electron development stack.",
    url: "https://github.com/gonzih/cljs-electron",
  },
  {
    name: "glue",
    stars: 189,
    lang: "ClojureScript",
    desc: "Vue.js + ClojureScript state management.",
    url: "https://github.com/gonzih/glue",
  },
  {
    name: "agent-jail",
    stars: 152,
    lang: "Rust",
    desc: "Syscall-level observable sandbox for AI agents. 152 tests.",
    url: "https://github.com/gonzih/agent-jail",
    tests: 152,
  },
  {
    name: "crabler",
    stars: 93,
    lang: "Rust",
    desc: "Async web crawler.",
    url: "https://github.com/gonzih/crabler",
  },
  {
    name: "soul-core",
    stars: 0,
    lang: "Rust",
    desc: "Async agentic runtime. 692 tests.",
    url: "https://github.com/gonzih/soul-core",
    tests: 692,
    private: false,
  },
  {
    name: "nexus-souls",
    stars: 0,
    lang: "TypeScript",
    desc: "This site. Multi-model consensus, syscall sandboxing, bitemporal knowledge.",
    url: "https://github.com/gonzih/nexus-souls",
  },
];

const stack = [
  { name: "Rust", level: 95, note: "primary, production — soul-core, agent-jail, crabler" },
  { name: "Go", level: 88, note: "Kira ML rewrite, Skyweaver indexer, gocon.ca" },
  { name: "TypeScript", level: 85, note: "full-stack, Kafka pipelines, cc-suite" },
  { name: "Clojure/CLJS", level: 82, note: "596★ cljs-electron, glue, Kira Systems core" },
  { name: "Scala + Spark", level: 72, note: "Elmar Reizen big-data pipelines" },
  { name: "C++ / Java", level: 65, note: "applying CRF models on NLP problems" },
];

const langColors: Record<string, string> = {
  Rust: "hsl(222 85% 38%)",
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  "Clojure/CLJS": "#5881D8",
  "Scala + Spark": "#DC322F",
  "C++ / Java": "#A97BFF",
};

const stats = [
  { label: "Years building", value: "18+" },
  { label: "Cities", value: "8" },
  { label: "Languages shipped", value: "8+" },
  { label: "Conferences Founded", value: "2" },
  { label: "GitHub Repos", value: "500+" },
  { label: "Public repo stars", value: "900+" },
];

const CVPage = () => {
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
            Curriculum Vitae
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6"
            >
              — Maksim Soltan
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words max-w-4xl"
            >
              Engineer. Founder. Mentor.{" "}
              <span className="text-accent-blue italic">18 years shipping.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              Full-stack systems engineer. 18 years across the stack — Rust, Go, TypeScript, Clojure, Scala. ML infrastructure, distributed systems, agentic runtimes. Currently: trust infrastructure for autonomous agents.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a
                href="https://github.com/gonzih"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow transition-colors"
              >
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:gonzih@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
              >
                gonzih@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-7 gap-x-4 font-mono text-xs">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">{s.label}</dt>
                  <dd className="text-foreground text-lg font-semibold">{s.value}</dd>
                </motion.div>
              ))}
            </dl>
            <div className="mt-8 pt-6 border-t border-foreground/10">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                <MapPin className="w-3 h-3" /> Grodno → Amsterdam → Toronto → Vancouver → NYC → Paris → LA → SF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical stack */}
      <Section
        eyebrow="Technical stack"
        title={
          <>
            Rust to Lisp.
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {stack.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-primary-foreground">{item.name}</span>
                  <span className="font-mono text-[10px] text-primary-foreground/40">{item.level}%</span>
                </div>
                <div className="h-px bg-primary-foreground/10 relative">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.2 }}
                    style={{
                      transformOrigin: "left",
                      width: `${item.level}%`,
                      height: "2px",
                      background: langColors[item.name] ?? "hsl(222 85% 38%)",
                      position: "absolute",
                      top: "-0.5px",
                    }}
                  />
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground/35 mt-1.5">
                  {item.note}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Specialist depth
                </div>
                <ul className="space-y-5 text-sm text-primary-foreground/75">
                  {[
                    {
                      area: "Async Rust",
                      detail: "soul-core async agentic runtime — 692 tests.",
                    },
                    {
                      area: "Go ML infra",
                      detail: "Kira Systems: 10h → 1h build. CPU-only inference pipeline.",
                    },
                    {
                      area: "WASM",
                      detail: "First-class constraint across multiple projects.",
                    },
                    {
                      area: "Hardware I/O",
                      detail: "Raspberry Pi GPIO/PWM/ADC/I2C/SPI in Rust.",
                    },
                    {
                      area: "Clojure ecosystem",
                      detail: "596★ cljs-electron, glue state management, Kira Systems core, conference co-creator.",
                    },
                  ].map((item) => (
                    <li key={item.area} className="flex gap-3 items-start border-b border-primary-foreground/8 pb-4 last:border-0 last:pb-0">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1">
                          {item.area}
                        </div>
                        <span>{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Data */}
      <section className="relative px-6 md:px-10 py-20 border-b border-foreground/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-6">
              — Origin
            </div>
            <pre
              style={{
                background: "#111318",
                color: "#e8e3d5",
                fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', Menlo, monospace",
                fontSize: "0.8rem",
                lineHeight: "1.7",
                padding: "2rem 2.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                overflowX: "auto",
                display: "inline-block",
                minWidth: "min(100%, 520px)",
              }}
            >
              <code>{`{:born        "Grodno, Belarus"
 :degree      {:institution "Yanka Kupala State University of Grodno"
               :field       :computer-science
               :years       [2009 2014]}
 :cities      ["Grodno" "Amsterdam" "Toronto" "Vancouver" "NYC" "Paris" "LA" "SF"]
 :conferences ["clojuredays.org" "gocon.ca"]
 :oss-stars   900
 :repos       500
 :years-exp   18}`}</code>
            </pre>
          </FadeIn>
        </div>
      </section>

      {/* Career Timeline */}
      <Section
        eyebrow="Career arc"
        title={
          <>
            18 years.{" "}
            <span className="italic text-accent-blue">All stacks.</span>
          </>
        }
      >
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px bg-foreground/10" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`relative grid md:grid-cols-[140px_1fr] gap-0 border-b border-foreground/10 py-8 ${item.current ? "bg-primary/5" : ""}`}
              >
                {/* Year column */}
                <div className="md:pr-8 mb-3 md:mb-0 flex md:flex-col md:items-end md:justify-start gap-3 md:gap-1">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {item.year}
                  </div>
                  {item.current && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary/70">
                        Now
                      </span>
                    </div>
                  )}
                </div>

                {/* Content column */}
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[9px] top-1.5 w-[5px] h-[5px] bg-primary rotate-45" />

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="font-serif-display text-xl text-foreground">{item.role}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      {item.org}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/40 mb-3">
                    <MapPin className="w-2.5 h-2.5" /> {item.location}
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4 max-w-2xl">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-1 border border-foreground/15 text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* GitHub repos */}
      <Section
        eyebrow="Open source"
        title={
          <>
            Public{" "}
            <span className="italic text-accent-blue">repositories.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-7 flex flex-col h-full group hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-mono text-xs text-primary font-semibold group-hover:text-primary-glow transition-colors">
                    {repo.name}
                  </div>
                  {repo.stars > 0 && (
                    <div className="flex items-center gap-1 font-mono text-[10px] text-foreground/50">
                      <Star className="w-2.5 h-2.5" /> {repo.stars}
                    </div>
                  )}
                </div>

                <p className="text-sm text-foreground/65 leading-relaxed mb-6 flex-1">
                  {repo.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: langColors[repo.lang] ?? "#888" }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/50">
                      {repo.lang}
                    </span>
                  </div>
                  {repo.tests && (
                    <div className="flex items-center gap-1 font-mono text-[10px] text-foreground/40">
                      <GitBranch className="w-2.5 h-2.5" /> {repo.tests} tests
                    </div>
                  )}
                  <ArrowUpRight className="w-3 h-3 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/gonzih?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary hover:text-primary-glow transition-colors"
          >
            All repositories on GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </Section>

      {/* Current Focus */}
      <Section
        eyebrow="Current focus"
        title={
          <>
            Trust infrastructure for{" "}
            <span className="italic text-accent-blue">the agentic economy.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl space-y-10">
          <FadeIn>
            <p className="text-primary-foreground/75 text-lg leading-relaxed font-light">
              Building meta-harnesses for coordinating cohorts of autonomous agents.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-t border-primary-foreground/15 pt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">
                — cc-suite (active infrastructure)
              </div>
              <div className="space-y-0 border border-primary-foreground/15">
                {[
                  {
                    name: "cc-discord",
                    fact: "Discord-to-Claude bridge. Routes messages, manages sessions, handles cron scheduling.",
                  },
                  {
                    name: "cc-agent",
                    fact: "MCP job runner. Spawns and supervises Claude Code agents against GitHub repos.",
                  },
                  {
                    name: "cc-agent-ui",
                    fact: "Job monitoring UI. Live output, status, cost tracking.",
                  },
                ].map((p, i, arr) => (
                  <div
                    key={p.name}
                    className={`flex gap-6 items-baseline px-6 py-5 bg-[hsl(var(--surface-ink))]${
                      i < arr.length - 1 ? " border-b border-primary-foreground/10" : ""
                    }`}
                  >
                    <code className="font-mono text-xs text-primary shrink-0 w-32">{p.name}</code>
                    <span className="text-sm text-primary-foreground/65 leading-relaxed">{p.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t border-primary-foreground/15 pt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">
                — Trust infrastructure
              </div>
              <div className="space-y-0 border border-primary-foreground/15">
                {[
                  {
                    name: "agent-jail",
                    fact: "Syscall-level observable sandbox. 152 tests.",
                  },
                  {
                    name: "soul-core",
                    fact: "Async agentic runtime. 692 tests.",
                  },
                  {
                    name: "id-service",
                    fact: "Ed25519 soulbound keys, trust scoring, immutable behavioral ledger.",
                  },
                  {
                    name: "GCG inversion",
                    fact: "Adversarial suffix optimization applied to intent alignment.",
                  },
                ].map((p, i, arr) => (
                  <div
                    key={p.name}
                    className={`flex gap-6 items-baseline px-6 py-5 bg-[hsl(var(--surface-ink))]${
                      i < arr.length - 1 ? " border-b border-primary-foreground/10" : ""
                    }`}
                  >
                    <code className="font-mono text-xs text-primary shrink-0 w-32">{p.name}</code>
                    <span className="text-sm text-primary-foreground/65 leading-relaxed">{p.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default CVPage;
