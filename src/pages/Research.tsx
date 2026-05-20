import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6 leading-relaxed">
    <code>{children}</code>
  </pre>
);

const questions = [
  {
    n: "01",
    tag: "Failure Mode Taxonomy",
    title: "What are the structural failure modes of autonomous agents?",
    body: "Task misspecification, context overflow, tool call errors, infinite loops, cost blowouts. cc-agent job logs at scale give you a real failure corpus — not synthetic benchmarks.",
  },
  {
    n: "02",
    tag: "Instruction Layer Control",
    title: "How does CLAUDE.md configuration affect agent behavior and success rate?",
    body: "The instruction layer is the experimental variable. Control it, measure outcomes: cost per task, success rate, output quality. Change CLAUDE.md, rerun the task, compare the diff.",
  },
  {
    n: "03",
    tag: "Cost-Complexity Correlation",
    title: "Does task complexity predict cost? At what point does cost become nonlinear?",
    body: "Measure complexity by output lines, duration, spawned subagents. Pull cost data via get_cost_report. Fit a curve. Find the inflection point. Publish it.",
  },
  {
    n: "04",
    tag: "Temporal Knowledge Drift",
    title: "How does factual accuracy change over time without a knowledge management layer?",
    body: "Gravitas quantifies this with bitemporal fact tracking. Every agent write is a timestamped datom. Query what any agent knew at any point in time. Measure drift longitudinally.",
  },
  {
    n: "05",
    tag: "Multi-Agent Coordination",
    title: "What is the coordination overhead of decomposing a task across N agents vs. one?",
    body: "Compare time, tokens, and failure rate: one agent with full context vs. N agents with partial context. The suite makes both patterns runnable. The data is exportable.",
  },
  {
    n: "06",
    tag: "Orchestration Layer Effects",
    title: "How does coordinator context depth affect downstream task agent quality?",
    body: "CLAUDE.md depth, memory system, MCP configuration — each is a dial. Turn one, hold the others fixed. Measure downstream agent output. This is the experimental control most agent research lacks.",
  },
];

const tools = [
  {
    name: "cc-agent",
    gives: "Job lifecycle data — spawn, run, complete/fail. JSONL trace export. Cost per job. Full prompt + output logs.",
  },
  {
    name: "cc-agent-ui",
    gives: "Visual dashboard — job grid, status distribution, score tracking over time.",
  },
  {
    name: "cc-tg",
    gives: "Coordinator session logs — track how a persistent Claude session evolves over hundreds of interactions.",
  },
  {
    name: "nexus-gravitas",
    gives: "Bitemporal knowledge graph — measure factual consistency, temporal accuracy, and manipulation resistance of agent knowledge.",
  },
  {
    name: "export_jobs MCP",
    gives: "Bulk JSONL export for statistical analysis — pull full job traces into your research pipeline.",
  },
  {
    name: "get_cost_report MCP",
    gives: "Longitudinal cost data grouped by repo, day, and status. 90-day window by default.",
  },
  {
    name: "search_jobs MCP",
    gives: "Find all jobs matching a task pattern — filter by type, status, date range.",
  },
];

const why = [
  {
    title: "Real production data",
    body: "Not synthetic. These are actual autonomous tasks running against real codebases with real costs and real failure modes.",
  },
  {
    title: "Open infrastructure",
    body: "MIT license. Instrument it, fork it, publish from it. No IRB approval required.",
  },
  {
    title: "Reproducibility by design",
    body: "Every agent task runs on a branch in an isolated git worktree. Same task, different config — measurable diff.",
  },
  {
    title: "The instruction layer is the independent variable",
    body: "CLAUDE.md is a programmable instruction layer. Change it, measure agent behavior change. This is the experimental control most agent research lacks.",
  },
  {
    title: "Gravitas as the knowledge layer",
    body: "Bitemporal fact storage lets you study how agent knowledge changes over time. Funded by ISOC Foundation 2026 grant — Temporal Semantic Infrastructure for Trustworthy Agentic Systems.",
  },
];

const ResearchPage = () => {
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
            For Researchers
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
              — Agentic Systems Research Infrastructure
            </div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
              Production tools for{" "}
              <span className="text-accent-blue italic">studying autonomous</span>{" "}
              agent behavior.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              Built for independent researchers, not institutional labs. Real jobs, real costs,
              real failure modes, real knowledge graphs — not a toy sandbox.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Research questions</dt>
                <dd className="text-foreground">6</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Tools exposed</dt>
                <dd className="text-foreground">7</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">License</dt>
                <dd className="text-foreground">MIT</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Data export</dt>
                <dd className="text-foreground">JSONL</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Research questions */}
      <Section
        eyebrow="What you can investigate"
        title={
          <>
            Six questions the suite is{" "}
            <span className="italic text-accent-blue">built to answer.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {questions.map((q, i) => (
            <motion.div
              key={q.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-background p-7 h-full flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                {q.n} — {q.tag}
              </div>
              <h3 className="font-serif-display text-xl leading-snug mb-4 text-foreground">
                {q.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{q.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tool suite */}
      <Section
        eyebrow="The tool suite for researchers"
        title={
          <>
            Every layer of the stack{" "}
            <span className="italic text-accent-blue">exposes data.</span>
          </>
        }
        variant="ink"
      >
        <div className="border-t border-primary-foreground/15">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grid md:grid-cols-12 gap-6 py-8 border-b border-primary-foreground/10"
            >
              <div className="md:col-span-3">
                <code className="font-mono text-sm text-primary font-semibold">{tool.name}</code>
              </div>
              <div className="md:col-span-9 text-sm text-primary-foreground/75 leading-relaxed">
                {tool.gives}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why this stack */}
      <Section
        eyebrow="Why this stack for research"
        title={
          <>
            Designed for{" "}
            <span className="italic text-accent-blue">measurement.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-0 border-t border-foreground/10">
            {why.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-7 border-b border-foreground/10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                  — {item.title}
                </div>
                <p className="text-foreground/70 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Gravitas / ISOC 2026
                </div>
                <p className="font-serif-display text-2xl leading-snug text-primary-foreground">
                  Bitemporal semantic infrastructure for trustworthy agentic systems.
                </p>
                <div className="pt-6 border-t border-primary-foreground/15">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    Funded by the ISOC Foundation 2026 grant. Query what any agent knew at any
                    point in time. Track factual consistency across the lifetime of a knowledge graph.
                  </p>
                  <a
                    href="https://github.com/Gonzih/nexus-gravitas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary mt-5 hover:text-primary-glow transition-colors"
                  >
                    nexus-gravitas <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Research data access */}
      <Section
        eyebrow="Research data access"
        title={
          <>
            Pull 90 days of{" "}
            <span className="italic text-accent-blue">production job data.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <p className="text-primary-foreground/75 leading-relaxed mb-2">
              The suite exposes all job data via MCP tools. Compute success rates by repo, task type,
              and model. Study cost distributions. Classify failure modes. Publish.
            </p>
            <Code>{`export_jobs(days=90, format="jsonl")      → full trace dataset
get_cost_report(days=90, group_by="repo") → cost attribution
search_jobs(query="failed to merge")      → failure pattern analysis
list_jobs()                               → current + historical job list
get_job_output(job_id)                    → full stdout/stderr per job`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — What you get
                </div>
                <ul className="space-y-4 text-sm text-primary-foreground/75">
                  {[
                    "Full prompt + output per job",
                    "Token and cost breakdown",
                    "Success / failure status + exit code",
                    "Duration and subagent spawn count",
                    "Repository, branch, task description",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Independence thesis */}
      <Section
        eyebrow="The independence thesis"
        title={
          <>
            Academia is{" "}
            <span className="italic text-accent-blue">2–5 years behind.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <FadeIn>
              <blockquote className="border-l-2 border-primary pl-7 mb-8">
                <p className="font-serif-display text-2xl md:text-3xl leading-snug text-foreground font-light">
                  "Academia is 2–5 years behind on agentic systems. The frontier is people who chose
                  independence."
                </p>
              </blockquote>
            </FadeIn>
            <div className="space-y-5 text-foreground/70 leading-relaxed">
              <p>
                Institutional research requires IRB approval, compute budgets, and permission
                structures that move on a grant cycle. Independent researchers can instrument a
                production agentic system today, collect real behavioral data, and publish findings
                that labs won't touch for years.
              </p>
              <p>
                The meta-harness gives you the infrastructure. You bring the questions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                  — Reference links
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      label: "Meta-harness architecture",
                      url: "https://gonzih.github.io/meta-harness",
                    },
                    {
                      label: "Meta-harness course",
                      url: "https://gonzih.github.io/meta-harness-course",
                    },
                    {
                      label: "nexus-gravitas (ISOC grant)",
                      url: "https://github.com/gonzih/nexus-gravitas",
                    },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary-glow transition-colors"
                      >
                        {link.label} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
            — Contact / Collaboration
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-8 break-words">
            Building on this stack?{" "}
            <span className="italic text-primary-glow">Let's talk.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mx-auto mb-12 font-light">
            Have research questions we should be investigating? Email us. We're interested in
            collaboration, data sharing, and co-authorship.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:gonzih@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> gonzih@gmail.com
            </a>
            <a
              href="https://github.com/gonzih/nexus-gravitas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              nexus-gravitas <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResearchPage;
