import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6 leading-relaxed">
    <code>{children}</code>
  </pre>
);

const BlogDelegatedIntelligence = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Blog
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            2026-05-24
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
              — cc-suite Architecture
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              The Operating System{" "}
              <span className="text-accent-blue italic">for Delegated Intelligence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              One Telegram chat. One human. Fifteen agent jobs running in parallel across four
              repos, all orchestrated by a coordinator that sees everything. Not science fiction.
              Running today on a Mac Mini in a different city.
            </motion.p>
          </div>

          {/* Meta panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Author</dt>
                <dd className="text-foreground">Maksim Soltan</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Date</dt>
                <dd className="text-foreground">2026-05-24</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">cc-agent</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">v0.15.17</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Repos</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">4</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Layers</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">3</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Operator</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">1</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Opening: three-layer stack */}
      <Section
        eyebrow="The three-layer stack"
        title={
          <>
            Execution. Transport.{" "}
            <span className="italic text-accent-blue">Visibility.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The system has three components. They have different jobs. The architecture only
              makes sense if you understand why each layer exists independently.
            </p>
            <p>
              The first is{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                cc-agent
              </code>{" "}
              — the execution substrate. It's a harness that wraps Claude Code and gives it a
              complete autonomous job lifecycle: clone the repo, create a branch, implement the
              task, run tests, commit, push, open a PR, merge it, publish the package. The human
              sends a task description. The agent does everything that follows. A job is not done
              until the PR is merged and the artifact is shipped — that contract is enforced at
              the harness level, not by the model.
            </p>
            <p>
              The second is{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                cc-tg
              </code>{" "}
              — the transport layer. Telegram is the human interface. Not a chat window bolted
              onto an IDE — a proper operator terminal. It handles voice messages (transcribed and
              routed), file drops, image analysis, and plain text. The operator's entire
              interaction surface is a single chat thread. Or several threads, one per domain,
              with automatic routing between them.
            </p>
            <p>
              The third is{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                cc-agent-ui
              </code>{" "}
              — the visibility layer. A live canvas showing every running agent, swarm progress,
              per-job status, log streaming, and the Telegram chat bridge. You can watch fifteen
              jobs run in parallel from a browser tab without touching a terminal. This isn't
              decoration — observability is what makes delegation safe at scale.
            </p>
            <p>
              Three layers. Each can be replaced independently. The executor doesn't care about
              the transport. The UI doesn't care about what agents are running. Redis is the
              connective tissue.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — The three components
                </div>
                <div className="space-y-0 border-t border-primary-foreground/15">
                  {[
                    {
                      name: "cc-agent",
                      repo: "gonzih/cc-agent",
                      role: "Execution substrate",
                      desc: "Autonomous job lifecycle — clone → branch → implement → PR → publish",
                    },
                    {
                      name: "cc-tg",
                      repo: "gonzih/cc-tg",
                      role: "Transport layer",
                      desc: "Telegram as operator terminal — voice, files, images, routing",
                    },
                    {
                      name: "cc-agent-ui",
                      repo: "gonzih/cc-agent-ui",
                      role: "Visibility layer",
                      desc: "Live agent canvas — swarm progress, job status, log streaming",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="py-5 border-b border-primary-foreground/10 last:border-0"
                    >
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-sm text-primary-foreground">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] text-primary-glow/60">
                          {item.role}
                        </span>
                      </div>
                      <p className="text-xs text-primary-foreground/55 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      <span className="font-mono text-[10px] text-primary-glow/40">
                        {item.repo}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Redis nervous system */}
      <Section
        eyebrow="The nervous system"
        title={
          <>
            Every state flows{" "}
            <span className="italic text-accent-blue">through Redis.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The Redis protocol document is the single source of truth for the entire system.
              Not documentation — a contract. All three components are held to it. If something
              isn't in the protocol, it doesn't exist in the system.
            </p>
            <p>
              Jobs are published as hashes under{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                cc:jobs:{"<job_id>"}
              </code>
              . Agent heartbeats write to{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                cc:agents:{"<agent_id>"}:heartbeat
              </code>{" "}
              on a 5s TTL — a missing key means the agent is dead. Chat messages flow
              through{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                cc:chat:{"<session_id>"}
              </code>{" "}
              as a Redis Stream, so the UI and any other subscriber can read the same log
              without coupling to a specific consumer.
            </p>
            <p>
              The timing constants are architectural decisions, not implementation details.
              The 800ms log flush debounce means the UI doesn't thrash on high-frequency
              agent output. The 2s coordinator poll is the heartbeat of swarm orchestration —
              fast enough to respond to failures promptly, slow enough to not hammer Redis
              under load. The 3s dependency resolution tick governs how quickly a task
              waiting on another task's output gets unblocked.
            </p>
            <p>
              These numbers were calibrated against real workloads. The flush debounce came
              from watching the UI lag at 50ms updates when running 10 agents simultaneously.
              The coordinator poll came from watching tasks sit idle for 8–10 seconds waiting
              on dependencies during early swarm tests. The protocol document records not just
              what these values are, but why they're what they are.
            </p>

            <Code>{`# Redis key schema (cc-suite protocol)
cc:jobs:<job_id>              # Hash — job state, progress, output
cc:jobs:<job_id>:log          # Stream — structured log events
cc:agents:<agent_id>:heartbeat # String, 5s TTL — liveness signal
cc:chat:<session_id>          # Stream — chat log (append-only)
cc:swarm:<swarm_id>           # Hash — swarm state + sub-task index
cc:swarm:<swarm_id>:results   # List — completed sub-task outputs
cc:coordinator:tasks          # List — coordinator work queue

# Timing constants
LOG_FLUSH_DEBOUNCE_MS  = 800   # UI update batching
COORDINATOR_POLL_MS    = 2000  # Swarm orchestration heartbeat
DEP_RESOLUTION_TICK_MS = 3000  # Dependency unblock interval`}</Code>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Why Redis
                </div>
                <ul className="space-y-4 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "Streams give ordered, replayable event logs — any subscriber reads the same history",
                    "Pub/sub decouples the UI from the executor — neither knows the other exists",
                    "TTL-based heartbeats are dead-simple liveness detection, no health-check endpoint needed",
                    "Hash fields are atomic — no partial job state reads across concurrent writers",
                    "The protocol document is the interface. Change the implementation, keep the keys.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
            <FadeIn delay={0.1}>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Timing constants
                </div>
                <dl className="space-y-3 font-mono text-xs">
                  {[
                    { key: "Log flush debounce", val: "800ms" },
                    { key: "Coordinator poll", val: "2s" },
                    { key: "Dependency tick", val: "3s" },
                    { key: "Heartbeat TTL", val: "5s" },
                  ].map(({ key, val }) => (
                    <div key={key} className="flex justify-between items-baseline border-b border-primary-foreground/10 pb-2 last:border-0 last:pb-0">
                      <span className="text-primary-foreground/55">{key}</span>
                      <span className="text-primary-foreground font-serif-display text-lg font-light">{val}</span>
                    </div>
                  ))}
                </dl>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Swarm mode */}
      <Section
        eyebrow="Swarm mode"
        title={
          <>
            One goal.{" "}
            <span className="italic text-accent-blue">N agents. One deliverable.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Kimi got one thing exactly right: single-prompt auto-decomposition into parallel
              sub-tasks with synthesis at the end. The "300 agents" ceiling they announced is
              marketing. The architecture is sound.
            </p>
            <p>
              In cc-suite this is{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                swarm_task
              </code>
              . You send one goal to the coordinator. The coordinator runs a decomposer that
              breaks the goal into N parallel sub-tasks and writes them to Redis. N agent
              instances spin up and claim sub-tasks. Each runs a full autonomous job lifecycle.
              When all sub-tasks are complete, the coordinator runs a synthesis agent that reads
              all outputs and produces a single deliverable.
            </p>
            <p>
              The real insight is about task topology. Swarm beats single agent by definition
              for embarrassingly parallel work: research 40 repositories, generate 50 content
              variants, audit every API endpoint in a large codebase, run competitive analysis
              across an entire market. These are problems where work doesn't depend on itself —
              you can parallelize without coordination cost.
            </p>
            <p>
              For depth tasks, single agent wins. Writing a complex feature that requires
              holding the full context of a codebase, debugging a subtle race condition,
              designing a new architecture — these don't parallelize. Splitting them creates
              coordination overhead that exceeds the benefit. The operator's job is to know
              which topology fits the problem.
            </p>

            <Code>{`# swarm_task tool signature (cc-agent v0.15.17)
{
  "name": "swarm_task",
  "description": "Decompose a goal into parallel sub-tasks, run N agents, synthesize",
  "input_schema": {
    "type": "object",
    "properties": {
      "goal": {
        "type": "string",
        "description": "High-level objective to decompose and execute"
      },
      "repo": {
        "type": "string",
        "description": "Target repository (owner/repo)"
      },
      "max_agents": {
        "type": "integer",
        "description": "Max parallel agents (default: 8)",
        "default": 8
      },
      "synthesis_prompt": {
        "type": "string",
        "description": "Instructions for the synthesis agent"
      }
    },
    "required": ["goal"]
  }
}`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                    — Swarm topology
                  </div>
                  <div className="space-y-0 border-t border-primary-foreground/15">
                    {[
                      { step: "01", label: "Goal in", desc: "Single objective sent to coordinator" },
                      { step: "02", label: "Decompose", desc: "Decomposer agent writes N sub-tasks to Redis" },
                      { step: "03", label: "Claim", desc: "N agent instances spin up and claim tasks" },
                      { step: "04", label: "Execute", desc: "Each runs full autonomous job lifecycle in parallel" },
                      { step: "05", label: "Collect", desc: "Results written to cc:swarm:<id>:results" },
                      { step: "06", label: "Synthesize", desc: "Synthesis agent reads all outputs, produces deliverable" },
                    ].map((row) => (
                      <div
                        key={row.step}
                        className="py-3 border-b border-primary-foreground/10 last:border-0"
                      >
                        <div className="flex items-baseline gap-3 mb-0.5">
                          <span className="font-mono text-[10px] text-primary-glow/60">{row.step}</span>
                          <span className="font-mono text-xs text-primary-foreground">{row.label}</span>
                        </div>
                        <p className="text-xs text-primary-foreground/55 leading-relaxed pl-8">
                          {row.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-primary-foreground/15">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-3">
                    — Use swarm for
                  </div>
                  <ul className="space-y-2 text-sm text-primary-foreground/75">
                    {[
                      "Research across N repos simultaneously",
                      "Generating N content variants in parallel",
                      "Auditing a large codebase (per-file agents)",
                      "Competitive analysis across a full market",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Meta-agents and forum routing */}
      <Section
        eyebrow="Meta-agents + forum routing"
        title={
          <>
            Topic name = namespace ={" "}
            <span className="italic text-accent-blue">persistent agent.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The problem with a single chat thread is domain leakage. A message about the
              OF stack ends up in the same context as a message about cc-suite infrastructure,
              which ends up next to a research request for a completely unrelated project.
              Each message reaches an agent that knows everything and nothing — correct full
              context for none of it.
            </p>
            <p>
              The solution: Telegram forum topics as namespaces. A Telegram supergroup can
              have multiple named topics. In cc-suite, the topic name maps directly to a GitHub
              repository and a persistent meta-agent session. Create a topic named{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                of-stack
              </code>{" "}
              and the first message spins up a Claude session with the full context of
              gonzih/of-stack. That session stays alive. It reads commits. It builds
              institutional memory over time. Every subsequent message in that topic reaches
              an agent that already knows the entire history of the codebase.
            </p>
            <p>
              Forum routing is controlled by the{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                FORUM_META_AGENT_ROUTING
              </code>{" "}
              environment variable. With it enabled, cc-tg maps incoming topic IDs to agent
              sessions automatically. The hashtag fallback handles cross-topic references:{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                #of-stack
              </code>{" "}
              or{" "}
              <code className="font-mono text-xs bg-primary-foreground/10 px-1.5 py-0.5 text-primary-foreground/80">
                #gonzih/of-stack
              </code>{" "}
              anywhere in a message routes to the same meta-agent, regardless of which topic
              it came from.
            </p>
            <p>
              The architectural implication is significant. A meta-agent with persistent
              context accumulates knowledge about a domain the way a long-tenured engineer
              accumulates knowledge about a system. It remembers design decisions, tracks
              the evolution of the codebase, knows which parts are fragile. That context
              is not reconstructed on every message — it persists across the session lifetime.
              For complex, long-running projects, this is the difference between an agent
              that needs to be briefed every time and one that already knows.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Routing logic
                </div>
                <div className="space-y-0 border-t border-primary-foreground/15">
                  {[
                    {
                      trigger: "Topic message",
                      route: "topic_name → repo → meta-agent session",
                    },
                    {
                      trigger: "#of-stack hashtag",
                      route: "tag → gonzih/of-stack meta-agent",
                    },
                    {
                      trigger: "#gonzih/of-stack",
                      route: "fully qualified → same meta-agent",
                    },
                    {
                      trigger: "No match",
                      route: "Default agent session (no repo context)",
                    },
                  ].map((row) => (
                    <div
                      key={row.trigger}
                      className="py-3 border-b border-primary-foreground/10 last:border-0"
                    >
                      <div className="font-mono text-xs text-primary-foreground mb-1">
                        {row.trigger}
                      </div>
                      <p className="text-xs text-primary-foreground/55 leading-relaxed">
                        {row.route}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </FadeIn>
            <FadeIn delay={0.1}>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-3">
                  — Env config
                </div>
                <Code>{`# Enable forum topic routing
FORUM_META_AGENT_ROUTING=true

# Each topic maps to a GitHub repo
# Topic "of-stack" → gonzih/of-stack
# Topic "cc-suite" → gonzih/cc-agent`}</Code>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* OF stack as case study */}
      <Section
        eyebrow="Case study — the OF stack"
        title={
          <>
            Seven services.{" "}
            <span className="italic text-accent-blue">Built by agents. Zero lines written by hand.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The most concrete proof of this architecture is gonzih/of-stack: a multi-service
              production system built entirely by autonomous agents across a few hours. The
              operator's role was intent and routing. No lines of code written by hand.
            </p>
            <p>
              The stack has seven components talking to each other through Redis Streams.
              A scraper that pulls data from the platform and publishes to a stream.
              A classifier that reads the scraper output, applies ML scoring, and routes
              results to the appropriate downstream queues. A messenger that composes
              outbound messages using per-account context. A sender that handles rate-limiting
              and delivery. A media service that manages asset storage and transformation.
              A video pipeline for processed media delivery. And a supervisor that observes
              all of them simultaneously — watching heartbeats, tracking pipeline lag,
              alerting on stalls.
            </p>
            <p>
              The soul engine is what makes this non-trivial. Each fan account in the system
              has a persistent psychological state modeled across eight dimensions. The
              messaging system knows where each relationship is in its arc — the hinge
              oscillation between warmth and distance, the tier-based response timing that
              calibrates how available the account appears. These parameters are tuned per
              account by the classifier and fed into the messenger as context.
            </p>
            <p>
              None of this architecture was designed upfront. Each service was scoped as a
              discrete task, implemented by an agent, reviewed, merged. The agents wrote tests.
              They documented their own interfaces. The supervisor was a late addition — three
              sentences of intent sent via Telegram became a running monitoring service in
              under an hour. The entire project is what cc-suite looks like when the operator's
              job is scoping, not implementing.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — The seven services
                </div>
                <div className="space-y-0 border-t border-primary-foreground/15">
                  {[
                    { name: "of-scraper", desc: "Platform data pull → Redis Stream" },
                    { name: "of-classifier", desc: "ML scoring, routing, per-account state" },
                    { name: "of-messenger", desc: "Message composition, soul engine context" },
                    { name: "of-sender", desc: "Rate-limited delivery, queue management" },
                    { name: "of-media", desc: "Asset storage and transformation pipeline" },
                    { name: "of-video", desc: "Processed media delivery service" },
                    { name: "of-supervisor", desc: "Cross-service heartbeat, lag alerts, stall detection" },
                  ].map((svc) => (
                    <div
                      key={svc.name}
                      className="py-3 border-b border-primary-foreground/10 last:border-0"
                    >
                      <div className="font-mono text-xs text-primary-foreground mb-1">
                        {svc.name}
                      </div>
                      <p className="text-xs text-primary-foreground/55 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </FadeIn>
            <FadeIn delay={0.1}>
              <aside className="panel-ink p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-3">
                  — Soul engine parameters
                </div>
                <ul className="space-y-2 text-sm text-primary-foreground/75">
                  {[
                    "8-dimension psychological state per account",
                    "Hinge oscillation: warmth ↔ distance arc",
                    "Tier-based response timing (availability signal)",
                    "Per-fan state persisted across sessions in Redis",
                    "Classifier feeds current state into messenger context",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What this enables */}
      <Section
        eyebrow="What this enables"
        title={
          <>
            The bottleneck shifts{" "}
            <span className="italic text-accent-blue">from execution to judgment.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <p className="text-foreground/75 leading-relaxed mb-6">
            The goal of this architecture is not to replace engineers. It's to change what the
            operator does all day. When execution is fully delegated — when the agent handles
            the entire job lifecycle without supervision — the operator's work becomes intent
            routing and review. That's a fundamentally different cognitive load.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-6">
            One operator can run multiple companies simultaneously because the bottleneck is
            no longer execution capacity. Each domain gets its own meta-agent with deep
            persistent context. Swarm handles the wide tasks. Single agents handle the deep
            ones. The operator decides which tool fits the problem and reviews the output.
            Nothing else.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            The meta-agent pattern matters most for long-horizon domains. An agent that has
            been living inside a complex codebase for weeks develops the kind of contextual
            knowledge that makes it genuinely useful — not just technically correct, but
            aware of the project's history, its constraints, its debt. That's what makes
            the forum routing architecture more than a routing trick. It's the infrastructure
            for institutional memory at agent scale.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Wide tasks: use swarm.
              </p>
              <p className="text-sm text-foreground/60">
                Research N repos, generate N variants, audit N endpoints. Embarrassingly
                parallel work — agents don't need to coordinate, synthesis happens at the end.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Deep tasks: use single agent.
              </p>
              <p className="text-sm text-foreground/60">
                Complex features, subtle bugs, new architecture. Splitting depth tasks creates
                coordination overhead that exceeds the benefit. Single agent, full context.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Domain continuity: use meta-agent.
              </p>
              <p className="text-sm text-foreground/60">
                Long-running projects where context compounds. The forum topic is the
                namespace. The persistent session is the memory.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                The operator's job.
              </p>
              <p className="text-sm text-foreground/60">
                Intent. Routing. Review. The bottleneck is judgment, not execution. That's
                the shift this architecture is designed to force.
              </p>
            </div>
          </div>

          <div className="space-y-0 border-t border-foreground/15">
            {[
              {
                before: "Write a feature",
                after: "Scope the task and review the PR",
                leverage: "10–20x",
              },
              {
                before: "Research a market",
                after: "Define the research brief and read the synthesis",
                leverage: "40x+",
              },
              {
                before: "Monitor services",
                after: "Configure the supervisor and read alerts",
                leverage: "Always-on",
              },
              {
                before: "Maintain context across projects",
                after: "Open the topic thread and ask the meta-agent",
                leverage: "Persistent",
              },
            ].map((row) => (
              <motion.div
                key={row.before}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="py-6 border-b border-foreground/10 last:border-0"
              >
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-4 text-sm text-foreground/40 line-through">
                    {row.before}
                  </div>
                  <div className="md:col-span-6 text-sm text-foreground/80">
                    {row.after}
                  </div>
                  <div className="md:col-span-2 font-mono text-xs text-primary text-right">
                    {row.leverage}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="relative px-6 md:px-10 py-24 border-b border-foreground/10 overflow-hidden bg-[hsl(var(--surface-ink))]">
        <div className="absolute inset-0 dot-bg opacity-10 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary-glow mb-6">
              — Where this goes
            </div>
            <h2 className="font-serif-display text-3xl md:text-5xl font-light text-primary-foreground leading-tight mb-8 max-w-3xl">
              Every project gets a meta-agent. Meta-agents develop institutional knowledge.
              The operator becomes a conductor.
            </h2>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl mb-10">
              The endgame is not more automation. It's a different relationship to work entirely.
              One operator, running multiple complex domains simultaneously, each staffed by
              persistent agents that know the codebase the way a long-tenured engineer knows it.
              The constraint shifts from "can this be built?" to "what should be built and why?"
              That's the only question that was always yours to answer.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/gonzih/cc-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-foreground border border-primary-foreground/25 px-5 py-3 hover:border-primary-foreground/60 transition-colors"
              >
                <span className="text-primary-glow">→</span> gonzih/cc-agent
              </a>
              <a
                href="https://github.com/gonzih/cc-tg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <span className="text-primary-glow/60">→</span> gonzih/cc-tg
              </a>
              <a
                href="https://github.com/gonzih/cc-agent-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <span className="text-primary-glow/60">→</span> gonzih/cc-agent-ui
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tags */}
      <section className="px-6 md:px-10 py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 mr-2">
            Tags
          </span>
          {[
            "architecture",
            "agents",
            "redis",
            "swarm",
            "telegram",
            "meta-agents",
            "ai-pipelines",
            "cc-suite",
            "autonomy",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border border-foreground/15 text-foreground/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogDelegatedIntelligence;
