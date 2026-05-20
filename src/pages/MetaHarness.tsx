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

const tiers = [
  {
    n: "01",
    name: "Coordinator",
    package: "cc-tg",
    role: "Persistent Claude session + Telegram bridge",
    detail:
      "A Node.js process managed by launchd with KeepAlive: true. It bridges Telegram messages to a persistent Claude Code session running --continue in the target project directory. Holds all project context statefully across days.",
    restart: "Never launchctl unload. Kill with pkill — launchd respawns cleanly.",
  },
  {
    n: "02",
    name: "Worker Spawner",
    package: "cc-agent (MCP)",
    role: "Spawn, monitor, retrieve ephemeral task agents",
    detail:
      "An MCP server exposing spawn_agent, list_jobs, get_job_output, cancel_job tool calls to the coordinator's Claude session. Each job lifecycle: PENDING → RUNNING → COMPLETED / FAILED / INTERRUPTED.",
    restart: "Job cancellation via Redis SET, not SIGTERM.",
  },
  {
    n: "03",
    name: "Task Agents",
    package: "Ephemeral subagents",
    role: "Isolated Claude sessions that implement, test, ship",
    detail:
      "Spawned into a fresh worktree of the target repo. Each implements the task, runs tests, commits, opens a PR via gh pr create, merges, and optionally publishes. Agents that don't ship are not done.",
    restart: "Ephemeral by design — they exit after shipping.",
  },
];

const principles = [
  {
    n: "1",
    title: "Intelligence over orchestration",
    body: "The coordinator is not a workflow engine. It is a Claude session. Tasks are described in natural language, not YAML pipelines. The intelligence adapts to failure, ambiguity, and changing requirements without reconfiguration.",
  },
  {
    n: "2",
    title: "Self-healing by default",
    body: "KeepAlive: true in launchd means every service is always on. Crashes are events, not incidents. The system restores itself without human intervention.",
  },
  {
    n: "3",
    title: "Zero credentials in code",
    body: "The prompt trick means tools are accessed through Claude's credential chain, not the service's. npm publish is safe. The codebase is publishable by default.",
  },
  {
    n: "4",
    title: "Ship as the definition of done",
    body: "An agent that researches but doesn't commit, commits but doesn't PR, or PRs but doesn't merge — is not done. Terminal steps are part of every task definition.",
  },
  {
    n: "5",
    title: "Composability through MCP",
    body: "Services expose capabilities as MCP tools. Other services consume them. The harness grows by adding MCPs, not by rewriting orchestration code. New capability = new MCP server.",
  },
  {
    n: "6",
    title: "Ephemerality with persistence",
    body: "Task agents are ephemeral — they run, ship, and exit. The coordinator is persistent — it holds state, routes work, and remembers context. The separation keeps agents cheap and stateless while keeping the coordinator deep and contextual.",
  },
  {
    n: "7",
    title: "Constraints as architecture",
    body: "Safety-critical constraints live at the infrastructure layer, not in prompts. Branch protection, MCP omission, budget caps, Redis gate keys — the intelligence operates freely inside a shaped space. It doesn't know the walls exist because the walls aren't instructions; they're the shape of the environment.",
  },
];

const redisChannels = [
  { key: "cca:notify:<project>", purpose: "pub/sub — agent completion notifications to Telegram" },
  { key: "cca:chat:log:<project>", purpose: "append-only log of all Telegram ↔ Claude exchanges" },
  { key: "whiteh:auto_send_queue", purpose: "disclosure email queue (white-hat scanner)" },
  { key: "whiteh:disclosures", purpose: "rolling list of discovered vulnerabilities" },
  { key: "whiteh:sent_emails", purpose: "sent email log (capped at 500)" },
  { key: "whiteh:dead_letter_emails", purpose: "failed sends after MAX_REQUEUE_ATTEMPTS" },
];

const MetaHarness = () => {
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
            Technical Reference
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
              — Meta-Harness Architecture
            </div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
              Claude Code as{" "}
              <span className="text-accent-blue italic">autonomous</span>{" "}
              infrastructure.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              The meta-harness turns a local development tool into an always-on autonomous workforce.
              Persistent, self-healing, multi-agent, zero-credential. Three tiers, one message, full stack.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Tiers</dt>
                <dd className="text-foreground">3</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Credentials in code</dt>
                <dd className="text-foreground">0</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Design principles</dt>
                <dd className="text-foreground">7</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Human in the loop</dt>
                <dd className="text-foreground">Optional</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <Section
        eyebrow="Architecture overview"
        title={
          <>
            Three tiers.{" "}
            <span className="italic text-accent-blue">One message.</span> Full stack.
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Code>{`launchd (KeepAlive: true)
  └── cc-tg  ← coordinator / Telegram bridge
        └── Claude Code (--continue, project context)
              └── cc-agent MCP  ← worker spawner
                    └── claude subprocess  ← ephemeral task agent
                          └── more subagents...`}</Code>
            <p className="text-foreground/70 leading-relaxed mt-4">
              Each tier has a distinct responsibility. The coordinator is persistent and stateful.
              Task agents are ephemeral and disposable. The MCP layer is the clean seam between them —
              tool calls, not function imports.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel-ink p-8 relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — The core idea
                </div>
                <p className="font-serif-display text-2xl leading-snug text-primary-foreground">
                  Claude Code is not just a coding assistant. It is a general-purpose intelligence
                  substrate.
                </p>
                <div className="mt-6 pt-6 border-t border-primary-foreground/15">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    Wrap it, orchestrate it, compose it. The harness is the architecture for doing
                    that at production scale.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Three tiers */}
      <Section
        eyebrow="The three tiers"
        title={
          <>
            Each tier has a{" "}
            <span className="italic text-accent-blue">distinct responsibility.</span>
          </>
        }
        variant="ink"
      >
        <div className="space-y-0 border-t border-primary-foreground/15">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-12 gap-6 py-10 border-b border-primary-foreground/10"
            >
              <div className="md:col-span-1 font-mono text-xs text-primary-glow/60 pt-1">
                {tier.n}
              </div>
              <div className="md:col-span-3">
                <div className="font-mono text-sm text-primary font-semibold mb-1">
                  {tier.package}
                </div>
                <div className="font-serif-display text-xl text-primary-foreground leading-snug">
                  {tier.name}
                </div>
              </div>
              <div className="md:col-span-4 text-primary-foreground/75 leading-relaxed text-sm">
                {tier.detail}
              </div>
              <div className="md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow mb-2">
                  — Ops note
                </div>
                <p className="text-xs text-primary-foreground/60 leading-relaxed">{tier.restart}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Prompt Trick */}
      <Section
        eyebrow="The Prompt Trick"
        title={
          <>
            Zero credentials in code.{" "}
            <span className="italic text-accent-blue">Ever.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Services need to call tools — send emails, write to Slack, hit APIs — without storing
              credentials in the service code. The prompt trick solves this completely.
            </p>
            <p>
              The service spawns a Claude Code subprocess with <code className="font-mono text-primary text-sm">cwd</code> set
              to the project directory that has the relevant MCPs configured. Claude inherits the MCP
              session and can call the tool. The service only passes the prompt.
            </p>
            <Code>{`spawnSync('claude', [
  '--print',
  '--dangerously-skip-permissions',
  '-p', prompt
], {
  cwd: '/Users/feral/money-brain',  // inherits gmail-personal MCP
  env: { ...process.env, CLAUDE_CODE_OAUTH_TOKEN: token },
  timeout: 60_000,
})`}</Code>
            <p>
              <code className="font-mono text-primary text-sm">~/.claude.json</code> holds
              project-scoped MCP configs:
            </p>
            <Code>{`{
  "projects": {
    "/Users/feral/money-brain": {
      "mcpServers": {
        "gmail-personal": {
          "command": "npx",
          "args": ["-y", "gmail-mcp-imap"]
        }
      }
    }
  }
}`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                  — What this eliminates
                </div>
                <ul className="space-y-4 text-sm text-foreground/75">
                  {[
                    "SMTP passwords in environment variables",
                    "API keys baked into build artifacts",
                    "Credentials in npm packages",
                    "Service-level secret management",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-foreground/10">
                  <p className="text-xs text-foreground/55 leading-relaxed">
                    The Claude OAuth token is the only secret, and it lives in the environment.
                    The codebase is publishable by default.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Redis nervous system */}
      <Section
        eyebrow="Communication protocol"
        title={
          <>
            Redis as the{" "}
            <span className="italic text-accent-blue">nervous system.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="border-t border-primary-foreground/20">
                {redisChannels.map((ch, i) => (
                  <motion.div
                    key={ch.key}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="grid md:grid-cols-2 gap-4 py-4 border-b border-primary-foreground/10"
                  >
                    <code className="font-mono text-xs text-primary break-all">{ch.key}</code>
                    <span className="text-xs text-primary-foreground/65 leading-relaxed">
                      {ch.purpose}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — Notification flow
                </div>
                <Code>{`agent task completes
  → cc-agent publishes to
    cca:notify:money-brain
  → cc-tg receives notification
  → flushes to Telegram
  → appends to Redis log`}</Code>
                <p className="text-xs text-primary-foreground/60 leading-relaxed mt-4">
                  The coordinator never polls. It subscribes. Every state change is a push.
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Service deployment */}
      <Section
        eyebrow="Service deployment"
        title={
          <>
            Every deploy is{" "}
            <span className="italic text-accent-blue">atomic.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              All services deploy as npm packages pulled via{" "}
              <code className="font-mono text-primary text-sm">npx --prefer-online</code>. Never from
              local artifacts. The deploy cycle is atomic: launchd always runs the latest published
              version on next spawn.
            </p>
            <Code>{`agent builds
  → tests pass
  → npm version patch
  → npm publish
  → pkill service
  → launchd respawns
  → npx --prefer-online pulls latest`}</Code>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                  — Why npx, not git
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  npm is the deployment transport. The registry is the artifact store. You get
                  versioning, rollback, and audit trails for free. Git is for source; npm is for
                  running.
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Constraints as Architecture */}
      <Section
        eyebrow="Critical design principle"
        title={
          <>
            Constraints as{" "}
            <span className="italic text-accent-blue">architecture.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Do not encode safety-critical constraints in natural language prompts or CLAUDE.md.
              Language-layer constraints can be argued with. Infrastructure-layer constraints cannot.
            </p>
            <p>
              The intelligence operates freely inside a shaped space — it doesn't know the walls
              exist because the walls aren't instructions, they're the shape of the environment.
            </p>

            {/* Comparison table */}
            <div className="border border-foreground/10 overflow-hidden mt-8">
              <div className="grid grid-cols-2 bg-foreground/5 border-b border-foreground/10">
                <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  Language layer — soft, arguable
                </div>
                <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-l border-foreground/10">
                  Infrastructure layer — hard, mechanical
                </div>
              </div>
              {[
                ['"Please don\'t push to main"', "Branch protection rules"],
                ['"Only use approved tools"', "MCP config omission"],
                ['"Stay under budget"', "max_budget_usd in spawn_agent"],
                ['"Check the gate before proceeding"', "Redis gate key rejection at MCP layer"],
                ['"Only work on listed repos"', "Allowed-repo set schema validation"],
                ['"Don\'t merge without review"', "GitHub required reviews (mechanical block)"],
              ].map(([soft, hard]) => (
                <div
                  key={soft}
                  className="grid grid-cols-2 border-b border-foreground/8 last:border-0"
                >
                  <div className="px-5 py-3.5 text-xs text-foreground/50 font-mono leading-snug">
                    {soft}
                  </div>
                  <div className="px-5 py-3.5 text-xs text-primary font-mono leading-snug border-l border-foreground/10">
                    {hard}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — The rule
                </div>
                <p className="font-serif-display text-2xl leading-snug text-primary-foreground">
                  If violating a constraint has real consequences, it belongs in the infrastructure —
                  not in the language.
                </p>
                <div className="pt-6 border-t border-primary-foreground/15 space-y-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow">
                    — Information flow is also architectural
                  </div>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    Telegram → coordinator → spawner → task agent. Notifications flow back up.
                    No cross-tier lateral communication. The shape of the pipes determines what is
                    possible — not the instructions inside them.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Design principles */}
      <Section
        eyebrow="Design philosophy"
        title={
          <>
            Seven principles.{" "}
            <span className="italic text-accent-blue">No exceptions.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {principles.map((p) => (
            <FadeIn key={p.n}>
              <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                <div className="font-mono text-xs text-primary mb-4">0{p.n}</div>
                <h3 className="font-serif-display text-xl leading-tight mb-3 text-primary-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Full cycle */}
      <Section
        eyebrow="The full cycle"
        title={
          <>
            One message.{" "}
            <span className="italic text-accent-blue">No human in the loop.</span>
          </>
        }
      >
        <div className="max-w-3xl">
          <Code>{`Telegram message
  → cc-tg coordinator (persistent Claude session)
  → spawn_agent via cc-agent MCP
  → task agent clones repo, creates branch
  → implements, tests, commits
  → PR opened, merged
  → npm publish, service restart
  → launchd spawns new process with latest package
  → Redis notification
  → Telegram reply`}</Code>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed font-light">
            This is the infrastructure pattern, not the product. The product is whatever the agents
            build.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
            — Want to deploy this?
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-8">
            Autonomous infrastructure,{" "}
            <span className="italic text-primary-glow">for your stack.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mx-auto mb-12 font-light">
            Get in touch to talk about deploying the meta-harness pattern in your infrastructure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:gonzih@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> gonzih@gmail.com
            </a>
            <Link
              to="/meta-harness-course"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              Take the course <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MetaHarness;
