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
    desc: "Age 17. Startup environment from day one. Freelance engagements running in parallel. The compulsion had a budget.",
    tags: ["freelance", "startup"],
  },
  {
    year: "2011–2014",
    role: "Software Engineer",
    org: "Elmar Reizen",
    location: "Amsterdam, Netherlands",
    desc: "Inherited a 15-year unprofitable travel platform. Built Scala + Spark data pipelines that changed the unit economics. Company turned profitable and was acquired. First time code moved a P&L.",
    tags: ["scala", "spark", "big-data"],
  },
  {
    year: "2014–2017",
    role: "Co-creator",
    org: "Clojure Dutch Days",
    location: "Amsterdam",
    desc: "Built the Clojure community in the Netherlands from scratch. Three editions. Real practitioners. Not a meetup — a conference.",
    tags: ["clojure", "community"],
  },
  {
    year: "2017–2019",
    role: "Software Engineer → Staff",
    org: "Kira Systems",
    location: "Toronto, Canada",
    desc: "Legal tech ML platform serving the US market. Rewrote the core ML pipeline in Go: build time collapsed from 10 hours to 1 hour. CPU-only inference at scale. Also ran Clojure in production across the stack.",
    tags: ["go", "clojure", "ml", "legal-tech"],
  },
  {
    year: "2018–2019",
    role: "Co-creator",
    org: "gocon.ca",
    location: "Canada",
    desc: "Canada's Go conference. Because communities don't build themselves.",
    tags: ["go", "community"],
  },
  {
    year: "2019–2021",
    role: "Senior Engineer",
    org: "Horizon Blockchain Games",
    location: "Toronto, Canada",
    desc: "Built the blockchain indexer and core infrastructure for Skyweaver. High-throughput event processing at the intersection of gaming and on-chain state.",
    tags: ["blockchain", "go", "indexer"],
  },
  {
    year: "2021–2022",
    role: "Co-founder / Engineer",
    org: "funkt.ai",
    location: "Remote",
    desc: "Pre-GPT AI copywriting system. Built the pipeline before the word 'prompt engineering' existed. Learned what the crowd would figure out two years later.",
    tags: ["ai", "nlp", "typescript"],
  },
  {
    year: "2022–2023",
    role: "Co-Founder / CTO",
    org: "Agentic Labs",
    location: "Remote",
    desc: "Built autonomous agents in 2022 — before the word existed in the mainstream. Laid the conceptual and technical groundwork for what the industry now calls 'agentic AI.'",
    tags: ["agents", "rust", "autonomous"],
  },
  {
    year: "2023",
    role: "Engineer",
    org: "avro.ai",
    location: "Remote",
    desc: "LLM-based structured data extraction from unstructured documents. Production pipelines, real accuracy requirements, enterprise contracts.",
    tags: ["llm", "extraction", "typescript"],
  },
  {
    year: "2023–2024",
    role: "GenAI Tech Lead",
    org: "Northwestern Mutual Venture Studio",
    location: "Milwaukee, WI",
    desc: "$32B AUM context. Led GenAI technical strategy inside the venture arm of one of the largest financial institutions in the US. Translated frontier AI capabilities into institutional constraints.",
    tags: ["genai", "enterprise", "fintech"],
  },
  {
    year: "2024",
    role: "CTO",
    org: "8LAB",
    location: "Remote",
    desc: "Full technical ownership. Architecture, hiring signal, roadmap. Built for speed.",
    tags: ["cto", "architecture"],
  },
  {
    year: "2024–March 2026",
    role: "Founder / Architect",
    org: "AMAI Labs",
    location: "Remote",
    desc: "Trust infrastructure for the agentic economy. agent-jail (eBPF observable sandbox), soul-core (async agentic runtime, 692 tests), id-service, GCG inversion research. The question driving everything: how do you make intelligent systems verifiable, not just trusted?",
    tags: ["rust", "ebpf", "agents", "trust-infra"],
  },
];

const repos = [
  {
    name: "cljs-electron",
    stars: 596,
    lang: "ClojureScript",
    desc: "ClojureScript + Electron development stack. The community reference implementation.",
    url: "https://github.com/gonzih/cljs-electron",
  },
  {
    name: "glue",
    stars: 189,
    lang: "ClojureScript",
    desc: "Vue.js + ClojureScript state management. Zero-boilerplate reactive bindings.",
    url: "https://github.com/gonzih/glue",
  },
  {
    name: "agent-jail",
    stars: 152,
    lang: "Rust",
    desc: "eBPF observable sandbox for AI agents. Syscall tracing, Aya framework, 152 tests. Production-grade containment.",
    url: "https://github.com/gonzih/agent-jail",
    tests: 152,
  },
  {
    name: "crabler",
    stars: 93,
    lang: "Rust",
    desc: "Async web crawler built on Rust's async ecosystem. Clean API, real-world performance.",
    url: "https://github.com/gonzih/crabler",
  },
  {
    name: "soul-core",
    stars: 0,
    lang: "Rust",
    desc: "Async agentic runtime. The substrate. 692 tests. Built for correctness, not demos.",
    url: "https://github.com/gonzih/soul-core",
    tests: 692,
    private: false,
  },
  {
    name: "nexus-souls",
    stars: 0,
    lang: "TypeScript",
    desc: "This site. Trust infrastructure research hub. Multi-model consensus, eBPF sandboxing, bitemporal knowledge.",
    url: "https://github.com/gonzih/nexus-souls",
  },
];

const stack = [
  { name: "Rust", level: 95, note: "primary, production — soul-core, agent-jail, crabler" },
  { name: "Go", level: 88, note: "Kira ML rewrite, Skyweaver indexer, gocon.ca" },
  { name: "TypeScript", level: 85, note: "full-stack, Kafka pipelines, cc-suite" },
  { name: "Clojure/CLJS", level: 82, note: "596★ cljs-electron, glue, Kira Systems core" },
  { name: "Scala + Spark", level: 72, note: "Elmar Reizen big-data pipelines" },
  { name: "eBPF / Aya", level: 70, note: "agent-jail syscall tracing layer" },
  { name: "C++ / Java", level: 65, note: "prior ML stack at Kira" },
  { name: "Assembly", level: 55, note: "microcontrollers in college" },
];

const langColors: Record<string, string> = {
  Rust: "hsl(222 85% 38%)",
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  "Clojure/CLJS": "#5881D8",
  "Scala + Spark": "#DC322F",
  "eBPF / Aya": "hsl(222 90% 55%)",
  "C++ / Java": "#A97BFF",
  Assembly: "#888",
};

const stats = [
  { label: "Years building", value: "18+" },
  { label: "Coding since", value: "Grade 2" },
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
              <span className="text-accent-blue italic">Still shipping.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              Born in Belarus with no resources and a secondhand computer. Wrote assembly on
              microcontrollers in college. Turned a 15-year unprofitable company profitable.
              Rewrote ML pipelines in Go. Built autonomous agents before the word existed.
              Now: trust infrastructure for the agentic economy.
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
                <MapPin className="w-3 h-3" /> Grodno, Belarus → Amsterdam → Toronto → Remote
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
            Assembly to eBPF.{" "}
            <span className="italic text-accent-blue">All layers.</span>
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
                      detail: "soul-core async agentic runtime — correctness-first design, 692 tests. Not a hobby project.",
                    },
                    {
                      area: "eBPF / Aya",
                      detail: "agent-jail: syscall-level observable sandbox. Real containment, not toy isolation.",
                    },
                    {
                      area: "Go ML infra",
                      detail: "Kira Systems: 10h → 1h build. CPU-only inference pipeline. No GPU requirement at scale.",
                    },
                    {
                      area: "WASM",
                      detail: "First-class constraint across multiple projects. Portable execution where it counts.",
                    },
                    {
                      area: "Hardware I/O",
                      detail: "Raspberry Pi GPIO/PWM/ADC/I2C/SPI — still hacking hardware, in Rust, today.",
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

      {/* The arc — brief narrative */}
      <section className="relative px-6 md:px-10 py-20 border-b border-foreground/10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
                — The through-line
              </div>
              <blockquote className="border-l-2 border-primary pl-7 mb-8">
                <p className="font-serif-display text-2xl md:text-3xl leading-snug text-foreground font-light">
                  "How do you make intelligent systems verifiable, not just trusted?"
                </p>
              </blockquote>
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  The question has been there since the beginning — under different names, at
                  different scales. As a competition math kid in Belarus, it was: does the proof
                  hold? At Elmar Reizen, it was: does the pipeline produce numbers you can act on?
                  At Kira Systems: does the legal NLP classify reliably enough to survive a court?
                </p>
                <p>
                  At AMAI Labs, the question has its final form: in a world where autonomous agents
                  act on your behalf, accountability must be infrastructure — not policy, not
                  promises, not vibes. Built into the execution substrate. Auditable at the syscall
                  level. Tested with 692 tests because trust is not optional.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <aside className="panel p-8 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                  — Education
                </div>
                <div>
                  <div className="font-serif-display text-lg text-foreground mb-1">
                    Yanka Kupala State University of Grodno
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50 mb-3">
                    Computer Science · Master's equivalent · 2009–2014
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    Math and programming competition background. Assembly on microcontrollers before
                    web frameworks existed in the curriculum.
                  </p>
                </div>
                <div className="pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
                    — Community
                  </div>
                  <ul className="space-y-3 text-sm text-foreground/70">
                    <li className="flex gap-3">
                      <span className="text-primary shrink-0 mt-0.5">—</span>
                      <span><strong className="text-foreground">Clojure Dutch Days</strong> — Amsterdam, 2014–2017. Co-creator.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary shrink-0 mt-0.5">—</span>
                      <span><strong className="text-foreground">gocon.ca</strong> — Canada's Go conference, 2018–2019. Co-creator.</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <Section
        eyebrow="Career arc"
        title={
          <>
            18 years.{" "}
            <span className="italic text-accent-blue">One compulsion.</span>
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
            Code that{" "}
            <span className="italic text-accent-blue">people star.</span>
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

      {/* Current work — AMAI */}
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
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <p className="text-primary-foreground/75 text-lg leading-relaxed font-light">
                The agentic shift is not a product cycle. It's an accountability gap opening up in
                real time. Autonomous systems act on behalf of humans at scale — and the tooling to
                verify, contain, and audit that behavior does not exist yet.
              </p>
              <p className="text-primary-foreground/75 leading-relaxed">
                Building that tooling from the substrate up: eBPF-level syscall tracing in
                agent-jail, a 692-test async agentic runtime in soul-core, GCG inversion research
                to understand how adversarial inputs rewrite agent behavior. The question is not
                "can the agent complete the task?" — it's "can you verify what it did?"
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border-t border-primary-foreground/15 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Active projects
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10">
                  {[
                    {
                      name: "agent-jail",
                      role: "eBPF observable sandbox",
                      detail: "Syscall-level tracing via Aya. 152 tests. Containment that's auditable.",
                    },
                    {
                      name: "soul-core",
                      role: "Async agentic runtime",
                      detail: "The execution substrate. 692 tests. Correctness over cleverness.",
                    },
                    {
                      name: "id-service",
                      role: "Agent identity layer",
                      detail: "Cryptographic identity for autonomous actors. Who signed this action?",
                    },
                    {
                      name: "GCG inversion",
                      role: "Adversarial research",
                      detail: "Greedy Coordinate Gradient attacks on agent instruction layers. Defense requires understanding the attack.",
                    },
                  ].map((p) => (
                    <div key={p.name} className="bg-[hsl(var(--surface-ink))] p-5">
                      <code className="font-mono text-xs text-primary">{p.name}</code>
                      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/40 mt-1 mb-2">
                        {p.role}
                      </div>
                      <p className="text-xs text-primary-foreground/60 leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <aside className="panel-ink border border-primary-foreground/15 p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">
                  — What I'm looking for
                </div>
                <ul className="space-y-5 text-sm text-primary-foreground/75">
                  {[
                    "Teams building at the frontier of agentic systems — runtime, safety, or infra",
                    "Problems that require correctness, not just velocity",
                    "Work where Rust is the right tool, not a novelty",
                    "Orgs that understand the accountability gap is real and needs technical solutions",
                    "Founding or senior engineering roles with architectural ownership",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-primary-foreground/15">
                  <a
                    href="mailto:gonzih@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow transition-colors w-full justify-center"
                  >
                    Get in touch
                  </a>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Origin story — closing */}
      <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
              — Origin
            </div>
            <blockquote className="border-l-2 border-primary pl-7 mb-8">
              <p className="font-serif-display text-3xl md:text-4xl leading-snug text-foreground font-light">
                Grodno, Belarus. Second grade. A computer, a BASIC interpreter, and the realization
                that you could tell a machine what to do — and it would do it.
              </p>
            </blockquote>
            <p className="text-foreground/65 text-lg leading-relaxed max-w-2xl">
              That was not a hobby. That was a discovery about the nature of leverage. Everything
              since — the competition math, the assembly code, the distributed systems, the ML
              rewrites, the agentic runtimes — has been the same bet, placed bigger each time.
              Code is the only tool that compounds indefinitely without asking permission.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CVPage;
