import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  label: string;
  variant: "ink" | "light";
  content: React.ReactNode;
}

const Code = ({ children }: { children: string }) => (
  <pre className="font-mono text-sm md:text-base bg-black/30 border border-primary-foreground/20 p-5 md:p-6 overflow-x-auto max-w-full rounded-sm leading-relaxed text-left">
    <code className="text-primary-foreground">{children}</code>
  </pre>
);

const LightCode = ({ children }: { children: string }) => (
  <pre className="font-mono text-sm md:text-base bg-[hsl(var(--surface-ink))] text-primary-foreground border border-foreground/10 p-5 md:p-6 overflow-x-auto max-w-full rounded-sm leading-relaxed text-left">
    <code>{children}</code>
  </pre>
);

const slides: Slide[] = [
  // ── Slide 1: Title ──────────────────────────────────────────────────────────
  {
    id: 1,
    label: "Title",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary mb-8">
          — SF AI Meetup · 2026
        </div>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] text-primary-foreground mb-8">
          The Orchestration<br />
          <span className="text-primary italic">Gap</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/70 font-light max-w-2xl leading-relaxed">
          You have the agents.<br />
          You don't have the harness.
        </p>
        <div className="mt-12 font-mono text-xs text-primary-foreground/40 uppercase tracking-[0.22em]">
          Maksim Soltan · gonzih@gmail.com
        </div>
      </div>
    ),
  },

  // ── Slide: 2018 — Ensemble ──────────────────────────────────────────────────
  {
    id: 19,
    label: "2018 — Ensemble",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Journey · 2018
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8 leading-[1.05]">
          Ensemble Models.
        </h2>
        <p className="text-primary-foreground/65 leading-relaxed mb-8 max-w-2xl text-lg font-light">
          Building ML ensemble systems: multiple specialized models combined for better predictions
          than any single model. Run N in parallel, aggregate outputs, weight by domain confidence.
        </p>
        <div className="mb-8">
          <Code>{`model_A (specialized) ─┐
model_B (specialized) ─┤→ aggregator → output
model_C (specialized) ─┘`}</Code>
        </div>
        <div className="border-l-4 border-primary pl-6 max-w-xl">
          <p className="text-primary italic font-serif-display text-xl">
            No one model is best at everything.
          </p>
          <p className="text-primary-foreground/55 text-sm mt-1">
            Combination beats individual. The architecture matters more than any single model.
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide: 2021 → Agentic ────────────────────────────────────────────────────
  {
    id: 20,
    label: "2021 → Agentic",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Journey · 2021
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8 leading-[1.1]">
          The models can act.<br />
          <span className="text-foreground/35">The human is still the ops layer.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <div className="font-mono text-xs text-foreground/40 uppercase tracking-[0.18em] mb-4">
              2021 — Agentic
            </div>
            <div className="space-y-2 text-sm text-foreground/60">
              {[
                "Chains of actions, tool use, early agents",
                "Models write code, call APIs, browse",
                "Orchestration still manual",
                "Human remains the coordination layer",
              ].map((item) => (
                <div key={item} className="border-l-2 border-foreground/15 pl-3">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-[0.18em] mb-4">
              2024–2025 — Oracle + Team
            </div>
            <div className="space-y-2 text-sm">
              {[
                { text: "Apply the ensemble insight to agents", highlight: false },
                { text: "One oracle with full context at the center", highlight: false },
                { text: "Each agent: one role, one task, one scope", highlight: false },
                { text: "Star topology — zero cross-agent coordination overhead", highlight: true },
              ].map(({ text, highlight }) => (
                <div
                  key={text}
                  className={`border-l-2 pl-3 ${highlight ? "border-primary text-foreground" : "border-primary/30 text-foreground/70"}`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── Slide: Now — Meta-Harness culmination ────────────────────────────────────
  {
    id: 21,
    label: "Now — Meta-Harness",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Journey · Now
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-10 leading-[1.05]">
          The pinnacle<br />
          <span className="text-primary italic">of the progression.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mb-8">
          {[
            { year: "2018", label: "Ensemble", desc: "N specialized models → aggregator → output" },
            { year: "2021–25", label: "Agentic + Oracle", desc: "Ensemble insight applied to agents" },
            { year: "Now", label: "Meta-Harness", desc: "Infrastructure-layer coordination" },
          ].map(({ year, label, desc }) => (
            <div key={year} className="border-t-2 border-primary/40 pt-4">
              <div className="font-mono text-xs text-primary mb-1">{year}</div>
              <div className="font-mono text-sm text-primary-foreground font-medium mb-1">{label}</div>
              <p className="text-xs text-primary-foreground/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-primary pl-6 max-w-xl">
          <p className="font-mono text-sm text-primary-foreground/75 leading-relaxed">
            Ensemble insight + agentic execution + oracle coordination{" "}
            <span className="text-primary">= meta-harness</span>
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2 leading-relaxed">
            Persistent oracle (cc-tg + Claude --continue) · ephemeral task agents · self-healing infrastructure
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide 2: The Human Problem ───────────────────────────────────────────────
  {
    id: 2,
    label: "The Human Problem",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — The Problem
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-10">
          You are still the<br />
          <span className="text-primary italic">operations layer.</span>
        </h2>
        <div className="space-y-4 max-w-2xl">
          {[
            "5 active projects → 5 Claude sessions open",
            "Manually context-switching between them",
            "Checking if tasks finished. Re-explaining context.",
            "Watching terminals.",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <span className="text-primary mt-1 shrink-0">—</span>
              <p className="text-lg text-primary-foreground/70">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-serif-display text-2xl text-primary-foreground/60 italic">
          This is the wrong architecture.
        </p>
      </div>
    ),
  },

  // ── Slide 3: The Commodity Insight ──────────────────────────────────────────
  {
    id: 3,
    label: "The Commodity Insight",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — The Insight
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] mb-10">
          The coding agent is solved.<br />
          <span className="text-foreground/35">Or rapidly commoditizing.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl">
          <div>
            <div className="font-mono text-xs text-foreground/40 uppercase tracking-[0.18em] mb-3">
              Agents (commoditizing)
            </div>
            <div className="space-y-2 font-mono text-sm text-foreground/55">
              {["Claude Code", "Codex", "Cursor", "OpenClaw"].map((a) => (
                <div key={a} className="border-l-2 border-foreground/15 pl-3">
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-[0.18em] mb-3">
              The actual bottleneck
            </div>
            <div className="space-y-3">
              {[
                "Who decides WHAT to run?",
                "And WHEN? And WHERE?",
                "Who knows when it's DONE?",
              ].map((q) => (
                <p
                  key={q}
                  className="text-sm text-foreground/70 border-l-2 border-primary/30 pl-3"
                >
                  {q}
                </p>
              ))}
            </div>
            <p className="mt-8 font-serif-display text-xl text-foreground italic">
              That's the orchestration gap.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // ── Slide 4: What's Actually Missing ────────────────────────────────────────
  {
    id: 4,
    label: "What's Missing",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — What's Actually Missing
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8 leading-[1.1]">
          Most frameworks solve<br />the wrong problem.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { name: "LangChain", problem: "Chains prompts, not work" },
            { name: "CrewAI", problem: "Coordinates agents in a single process" },
            { name: "AutoGPT", problem: "No real human-in-the-loop" },
          ].map(({ name, problem }) => (
            <div key={name} className="border border-foreground/10 p-5">
              <div className="font-mono text-sm text-primary mb-2">{name}</div>
              <p className="text-sm text-foreground/55 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-primary pl-6 max-w-2xl">
          <p className="text-foreground/80 leading-relaxed">
            Nobody has:{" "}
            <span className="text-foreground">persistent coordinator</span> +{" "}
            <span className="text-foreground">async task fleet</span> +{" "}
            <span className="text-foreground">project grid</span> +{" "}
            <span className="text-foreground">human-in-the-loop via messaging</span>
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide 5: The Mental Model ────────────────────────────────────────────────
  {
    id: 5,
    label: "Mental Model",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Mental Model
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-10 leading-[1.05]">
          A grid.<br />
          <span className="text-primary/80">Projects × Tasks in flight.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Code>{`              tasks →
            ┌─────────────────────
projects ↓  │  ●  ●  ·  ·  ·
            │  ·  ●  ●  ·  ·
            │  ·  ·  ·  ●  ·`}</Code>
          <div className="space-y-4">
            {[
              "One entry point: Telegram message",
              "Coordinator parses intent → branches into tasks",
              "Each branch runs independently to completion",
              "You just get notified. No status checks. No re-explaining.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-mono text-primary text-sm shrink-0">{i + 1}.</span>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── Slide 6: Architecture: 3 Tiers ──────────────────────────────────────────
  {
    id: 6,
    label: "Architecture",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Architecture · 3 Tiers
        </div>
        <h2 className="font-serif-display text-3xl md:text-5xl font-light mb-8">
          Three tiers. Each with a distinct role.
        </h2>
        <LightCode>{`launchd (KeepAlive: true)
  └── cc-tg  ← coordinator / entry point / Telegram bridge
        └── Claude Code --continue  ← persistent project context
              └── cc-agent MCP  ← task spawner
                    └── ephemeral task agents  ← do the actual work`}</LightCode>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            { tier: "Tier 1", name: "Coordinator", desc: "Persistent, stateful, always-on" },
            { tier: "Tier 2", name: "Spawner", desc: "Manages job lifecycle + notifications" },
            { tier: "Tier 3", name: "Task Agents", desc: "Ephemeral, powerful, run to completion" },
          ].map(({ tier, name, desc }) => (
            <div key={tier} className="border-t-2 border-primary/30 pt-4">
              <div className="font-mono text-xs text-primary mb-1">{tier}</div>
              <div className="font-mono text-sm text-foreground font-medium mb-1">{name}</div>
              <p className="text-xs text-foreground/55">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ── Slide 7: One Entry Point, Multiple Branches ──────────────────────────────
  {
    id: 7,
    label: "Multiple Branches",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — One Message → Many Agents
        </div>
        <div className="bg-black/30 border border-primary/20 p-5 mb-8 font-mono text-sm text-primary-foreground/80 italic max-w-2xl">
          "Add auth to the API, fix the mobile overflow bug,<br />
          and write the ISOC grant proposal"
        </div>
        <Code>{`coordinator parses intent
  → spawn_agent(api-repo, "add auth")         → agent #1 RUNNING
  → spawn_agent(mobile-repo, "fix overflow")  → agent #2 RUNNING
  → spawn_agent(docs-repo, "write grant")     → agent #3 RUNNING

# Wide parallel work? Use swarm_task instead:
  → swarm_task(goal="research 40 repos", max_agents=8)
      decompose → N sub-tasks (cc:coordinator:tasks)
      N agents claim + execute in parallel
      results → cc:swarm:<id>:results
      synthesis agent → single deliverable`}</Code>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
          {[
            "1 message sent",
            "N instances working",
            "1 deliverable back",
          ].map((item) => (
            <div key={item} className="text-center border-t border-primary/20 pt-4">
              <p className="text-primary-foreground/65 text-xs">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-serif-display text-lg text-primary-foreground/50 italic">
          No context switching. No terminal watching. No manual coordination.
        </p>
      </div>
    ),
  },

  // ── Slide 8: Cron — The Second Entry Point ──────────────────────────────────
  {
    id: 8,
    label: "Cron: Second Entry Point",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Cron · The Second Entry Point
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4 leading-[1.1]">
          Cron: The Second Entry Point.
        </h2>
        <p className="text-foreground/55 font-light mb-6 text-base max-w-xl leading-relaxed">
          Two entry points. Telegram is human-triggered. Cron is time-triggered.
          The coordinator doesn't know the difference — same pipeline, same intelligence.
        </p>
        <LightCode>{`cc-agent cron create "every 30s" "check inbox and respond"`}</LightCode>
        <div className="mt-6 space-y-3 max-w-2xl">
          {[
            { schedule: "Every 30s", task: "Poll fan inbox → read 4 files → respond → append to brain.md" },
            { schedule: "Every Monday 9am", task: "Competitor group sweep → multi-model pipeline → Slack brief" },
            { schedule: "Every day 9/12/6", task: "Clip today's video → schedule to 4 platforms" },
            { schedule: "Every 30min", task: "Check email for important messages → notify if found" },
          ].map(({ schedule, task }) => (
            <div
              key={schedule}
              className="grid grid-cols-[160px_1fr] gap-4 border-b border-foreground/8 pb-3"
            >
              <span className="font-mono text-xs text-primary">{schedule}</span>
              <span className="text-sm text-foreground/70">{task}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-l-4 border-primary pl-6 max-w-xl">
          <p className="text-foreground/80 text-sm leading-relaxed">
            Cron + Telegram ={" "}
            <span className="text-foreground font-medium">fully autonomous operation</span>
            {" "}with optional human override.
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide 9: Constraints as Architecture ────────────────────────────────────
  {
    id: 9,
    label: "Constraints as Architecture",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Constraints as Architecture
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light text-primary-foreground mb-8 leading-[1.05]">
          Don't put constraints in prompts.<br />
          <span className="text-primary italic">Encode them in the infrastructure.</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-2 max-w-2xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/30">
            Words (arguable)
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Infrastructure (mechanical)
          </div>
        </div>
        <div className="space-y-3 max-w-2xl">
          {[
            { soft: '"Never push to main" in CLAUDE.md', hard: "Branch protection → push mechanically rejected" },
            { soft: '"Don\'t exceed $50 budget" in prompt', hard: "max_budget_usd in spawn_agent" },
            { soft: '"Check the gate first"', hard: "Redis gate key — MCP rejects without it" },
          ].map(({ soft, hard }) => (
            <div
              key={soft}
              className="grid grid-cols-2 gap-6 border-b border-primary-foreground/10 pb-3"
            >
              <span className="font-mono text-xs text-primary-foreground/40 leading-snug">{soft}</span>
              <span className="font-mono text-xs text-primary leading-snug">{hard}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-primary-foreground/55 text-sm max-w-xl leading-relaxed">
          The intelligence operates freely inside a shaped space. The walls aren't words —
          they're the environment.
        </p>
      </div>
    ),
  },

  // ── Slide: Plan as Team Structure ───────────────────────────────────────────
  {
    id: 22,
    label: "Plan as Team",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Plan as Team Structure
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-3 leading-[1.1]">
          Why no "teams" feature?
        </h2>
        <p className="font-serif-display text-2xl text-foreground/40 italic mb-8">
          The plan IS the team structure.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mb-6">
          <div>
            <div className="font-mono text-xs text-foreground/40 uppercase tracking-[0.18em] mb-4">
              Traditional frameworks
            </div>
            <div className="space-y-2 text-sm text-foreground/55">
              {[
                "Explicit persistent roles",
                "Cross-agent communication channels",
                "Coordination overhead at runtime",
                "Emergent chaos from agent negotiation",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <span>×</span> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-[0.18em] mb-4">
              Meta-harness plan
            </div>
            <div className="space-y-2 text-sm text-foreground/70">
              {[
                "Oracle decomposes → plan defines task graph",
                "Each subagent gets exactly one node",
                "Runs independently to completion",
                "Oracle integrates results",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="text-primary shrink-0">→</span> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-foreground/50 max-w-xl leading-relaxed">
          No cross-agent communication needed. Coordination happened in the planning phase —
          not in real-time inter-agent chat.
        </p>
      </div>
    ),
  },

  // ── Slide: The Oracle Decomposes ─────────────────────────────────────────────
  {
    id: 23,
    label: "The Oracle Decomposes",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Oracle Decomposes
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light text-primary-foreground mb-8 leading-[1.05]">
          The plan is also<br />
          <span className="text-primary italic">an infrastructure constraint.</span>
        </h2>
        <Code>{`oracle creates plan
  → task_1: { agent, cwd, context, scope }   ← role defined
  → task_2: { agent, cwd, context, scope }   ← role defined
  → task_3: { agent, cwd, context, scope }   ← role defined

agent_1 ···  agent_2 ···  agent_3   ← no lateral communication
              ↓
          oracle integrates results`}</Code>
        <div className="mt-8 border-l-4 border-primary pl-6 max-w-xl">
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Subagents can't go off-script because their task{" "}
            <span className="text-primary italic">is</span> their script.
            The oracle's plan is not a suggestion — it is the shape of the space.
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide 10: Information Flow is Directional ───────────────────────────────
  {
    id: 10,
    label: "Information Flow",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Information Flow
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8 leading-[1.1]">
          This is not a mesh.<br />
          <span className="text-foreground/35">It's a tree.</span>
        </h2>
        <LightCode>{`Telegram  →  coordinator  →  spawner  →  task agents
                                                    ↓
coordinator  ←  Telegram  ←  spawner  ←  notifications`}</LightCode>
        <div className="mt-8 space-y-4 max-w-xl">
          {[
            "No lateral cross-agent communication",
            "The shape of the pipes determines what's possible — not the instructions inside them",
            "Rigid information flow = predictable, debuggable, trustworthy",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start border-l-2 border-primary/30 pl-4">
              <p className="text-sm text-foreground/70 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ── Slide 11: Self-Healing by Default ───────────────────────────────────────
  {
    id: 11,
    label: "Self-Healing",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Self-Healing by Default
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8 leading-[1.05]">
          Crashes are events.<br />
          <span className="text-primary italic">Not incidents.</span>
        </h2>
        <Code>{`# launchd plist — every service is always-on
<key>KeepAlive</key>
<true/>

# deploy cycle
agent builds → npm publish
pkill node   → launchd respawns immediately
             → running version = latest published`}</Code>
        <p className="mt-8 text-primary-foreground/55 text-sm leading-relaxed max-w-xl">
          No on-call engineer for the harness itself. Atomic: the running version is always
          the latest published version.
        </p>
      </div>
    ),
  },

  // ── Slide 12: The Compound Effect ───────────────────────────────────────────
  {
    id: 12,
    label: "The Compound Effect",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Compound Effect
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8 leading-[1.1]">
          The harness gets smarter<br />
          <span className="text-foreground/35">without you rewriting it.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
          {[
            {
              title: "CLAUDE.md",
              body: "Accumulates institutional knowledge across every task run",
            },
            {
              title: "MCP composition",
              body: "New capability = new MCP server, not a rewrite of the harness",
            },
            {
              title: "Forum routing",
              body: "Topic name → repo → persistent meta-agent (FORUM_META_AGENT_ROUTING=true). Each domain gets an agent that reads commits and builds institutional memory over time.",
            },
            {
              title: "1000 tasks later",
              body: "The coordinator knows your codebase better than any new hire — design decisions, fragile areas, evolving constraints",
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-l-2 border-primary/30 pl-5 py-1">
              <div className="font-mono text-sm text-primary mb-1">{title}</div>
              <p className="text-sm text-foreground/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-serif-display text-2xl text-foreground/80 italic">
          This is the moat. Not the agents — anyone can get agents.
        </p>
      </div>
    ),
  },

  // ── Slide 13: What You Can Build On This ────────────────────────────────────
  {
    id: 13,
    label: "What You Can Build",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — What You Can Build On This
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-2xl">
          {[
            "Autonomous PR review → merge pipeline",
            "Email monitoring → task dispatch",
            "Cron-triggered research → report generation",
            "Multi-repo dependency update coordination",
            "Customer request → code → deploy → notify",
            "OF stack: 7 services built by agents, zero lines by hand",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 items-center py-3 border-b border-primary-foreground/10"
            >
              <span className="text-primary text-sm shrink-0">→</span>
              <span className="text-primary-foreground/75 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-primary-foreground/45 text-sm">
          All from a Telegram message, or scheduled, or triggered by an event.
        </p>
      </div>
    ),
  },

  // ── Slide 14: Live Example ───────────────────────────────────────────────────
  {
    id: 14,
    label: "Live Example",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Live Example
        </div>
        <div className="bg-foreground/5 border border-foreground/10 p-4 font-mono text-sm text-foreground/70 mb-8 italic max-w-xl">
          "Fix the mobile overflow bug across 3 repos"
        </div>
        <div className="space-y-3 max-w-xl">
          {[
            { t: "T+0s", e: "Message → coordinator" },
            { t: "T+5s", e: "3 agents spawn, each with repo-specific context" },
            { t: "T+6m", e: "Agents: fix applied, tests passing in all 3" },
            { t: "T+7m", e: "3 PRs opened, auto-merged by gh" },
            { t: "T+8m", e: "3 Telegram notifications: 'PR #47 merged — overflow fixed'" },
          ].map(({ t, e }) => (
            <div
              key={t}
              className="grid grid-cols-[80px_1fr] gap-4 border-b border-foreground/8 pb-3"
            >
              <span className="font-mono text-xs text-primary">{t}</span>
              <span className="text-sm text-foreground/70">{e}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-10 font-mono">
          <div>
            <div className="text-foreground/40 text-xs uppercase tracking-[0.18em] mb-1">
              Human involvement
            </div>
            <div className="text-foreground text-2xl font-semibold">1 message</div>
          </div>
          <div>
            <div className="text-foreground/40 text-xs uppercase tracking-[0.18em] mb-1">
              Total time
            </div>
            <div className="text-foreground text-2xl font-semibold">~8 minutes</div>
          </div>
        </div>
      </div>
    ),
  },

  // ── Slide 15: vs. The Alternative ───────────────────────────────────────────
  {
    id: 15,
    label: "vs. The Alternative",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — vs. The Alternative
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-primary-foreground/15 p-6">
            <div className="font-mono text-xs text-primary-foreground/40 uppercase tracking-[0.15em] mb-5">
              Manual
            </div>
            <div className="space-y-3">
              {[
                "Open 3 terminals",
                "Clone 3 repos",
                "Context-switch 6+ times",
                "Manually PR each",
                "Remember to check back",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-center text-sm text-primary-foreground/55">
                  <span className="text-primary-foreground/30">×</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-primary-foreground/10 pt-4 space-y-1 font-mono text-xs">
              <div>
                <span className="text-primary-foreground/35">Time: </span>
                <span className="text-primary-foreground/65">45 minutes</span>
              </div>
              <div>
                <span className="text-primary-foreground/35">Cognitive load: </span>
                <span className="text-primary-foreground/65">High</span>
              </div>
            </div>
          </div>
          <div className="border border-primary/30 p-6 bg-primary/5">
            <div className="font-mono text-xs text-primary uppercase tracking-[0.15em] mb-5">
              Meta-harness
            </div>
            <div className="space-y-3">
              {[
                "Send one message",
                "Do something else entirely",
                "Get 3 notifications",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-center text-sm text-primary-foreground/80">
                  <span className="text-primary">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-primary/20 pt-4 space-y-1 font-mono text-xs">
              <div>
                <span className="text-primary/50">Time: </span>
                <span className="text-primary font-semibold">8 minutes</span>
              </div>
              <div>
                <span className="text-primary/50">Cognitive load: </span>
                <span className="text-primary font-semibold">Zero</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── Slide 16: The Harness Is the Leverage ───────────────────────────────────
  {
    id: 16,
    label: "The Leverage",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-10">
          — The Leverage
        </div>
        <p className="font-serif-display text-2xl md:text-3xl font-light text-primary-foreground/40 mb-3">
          You are not 10× more productive
        </p>
        <p className="font-serif-display text-2xl md:text-3xl font-light text-primary-foreground/40 mb-10">
          because Claude Code is better.
        </p>
        <p className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-10 leading-[1.1]">
          You are 10× more productive because you stopped being the ops layer.
        </p>
        <div className="border-t border-primary/30 pt-6 max-w-xl">
          <p className="text-lg font-mono">
            <span className="text-primary">The intelligence is the commodity.</span>
            <br />
            <span className="text-primary-foreground/70">The orchestration is the leverage.</span>
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide: Live System ──────────────────────────────────────────────────────
  {
    id: 25,
    label: "Live System",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-4">
          — This Is What It Looks Like
        </div>
        <h2 className="font-serif-display text-3xl md:text-5xl font-light mb-6 leading-[1.1]">
          The Grid — Live.
        </h2>
        <div className="flex-1 min-h-0 flex flex-col justify-center">
          <img
            src="/assets/cc-agent-ui-screenshot.png"
            alt="cc-agent-ui kanban board showing jobs across multiple repos"
            className="w-full max-h-[52vh] object-contain rounded border border-foreground/10 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 font-mono text-xs text-foreground/50 leading-relaxed">
            gonzih/cc-agent-ui — 1 running, 37 done, 0 failed.{" "}
            <span className="text-foreground/70">4 repos in flight simultaneously. One person.</span>
          </p>
        </div>
      </div>
    ),
  },

  // ── Slide 17: Getting Started ────────────────────────────────────────────────
  {
    id: 17,
    label: "Getting Started",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Getting Started
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-10">
          Start today.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Open source · MIT",
              title: "cc-agent",
              detail: "npm install -g @gonzih/cc-agent",
              sub: "github.com/gonzih/cc-agent",
            },
            {
              label: "Architecture reference",
              title: "gonzih.github.io/meta-harness",
              detail: "Full docs, code samples, design principles",
              sub: "Free",
            },
            {
              label: "Interactive course",
              title: "gonzih.github.io/meta-harness-course",
              detail: "7 steps, hands-on build",
              sub: "Access code: HARNESS2026",
            },
          ].map(({ label, title, detail, sub }) => (
            <div key={label} className="border border-foreground/10 p-6">
              <div className="font-mono text-xs text-primary mb-2 uppercase tracking-[0.15em]">
                {label}
              </div>
              <div className="font-mono text-sm text-foreground mb-3 break-all">{title}</div>
              <p className="text-xs text-foreground/50 mb-1 leading-relaxed">{detail}</p>
              <p className="text-xs text-foreground/40 font-mono mt-2">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ── Slide: Open Source Stack ────────────────────────────────────────────────
  {
    id: 24,
    label: "Open Source Stack",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Stack
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-2 leading-[1.1]">
          The Stack — All Open Source.
        </h2>
        <p className="text-foreground/45 font-light mb-8 text-sm">
          MIT · Published on npm · One command deploy
        </p>
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-3 bg-foreground/5 border-b border-foreground/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
            <span>Repo</span>
            <span>npm</span>
            <span>What it does</span>
          </div>
          {[
            {
              repo: "gonzih/cc-agent",
              npm: "@gonzih/cc-agent",
              desc: "Worker spawner — MCP server: spawn_agent, job lifecycle, notifications",
              url: "https://github.com/gonzih/cc-agent",
            },
            {
              repo: "gonzih/cc-tg",
              npm: "@gonzih/cc-tg",
              desc: "Telegram coordinator bridge — persistent Claude session, routes messages, flushes to Redis",
              url: "https://github.com/gonzih/cc-tg",
            },
            {
              repo: "gonzih/cc-agent-ui",
              npm: "@gonzih/cc-agent-ui",
              desc: "Web UI — monitor active jobs, view output, score results",
              url: "https://github.com/gonzih/cc-agent-ui",
            },
          ].map(({ repo, npm, desc, url }, i, arr) => (
            <div
              key={repo}
              className={`grid grid-cols-3 gap-4 px-4 py-4 border-b border-foreground/8 ${
                i === arr.length - 1 ? "border-0" : ""
              }`}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs text-primary hover:text-primary-glow transition-colors"
              >
                {repo}
              </a>
              <span className="font-mono text-xs text-foreground/60">{npm}</span>
              <span className="text-xs text-foreground/55 leading-snug">{desc}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <LightCode>{`npx --prefer-online @gonzih/cc-tg    # coordinator
npx --prefer-online @gonzih/cc-agent # spawner`}</LightCode>
        </div>
      </div>
    ),
  },

  // ── Slide 18: Q&A ───────────────────────────────────────────────────────────
  {
    id: 18,
    label: "Q&A",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — Q&A
        </div>
        <h2 className="font-serif-display text-6xl md:text-8xl font-light text-primary-foreground mb-6">
          Questions?
        </h2>
        <p className="text-xl text-primary-foreground/55 font-light mb-12">
          Want to go deeper? Let's build your harness.
        </p>
        <div className="space-y-2 font-mono text-sm text-primary-foreground/60">
          <p>Maksim Soltan</p>
          <a
            href="mailto:gonzih@gmail.com"
            className="text-primary hover:text-primary-glow transition-colors"
          >
            gonzih@gmail.com
          </a>
          <p className="text-primary-foreground/40 text-xs mt-4">gonzih.github.io</p>
        </div>
      </div>
    ),
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const MetaHarnessTalk = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const slide = slides[current];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const w = window.innerWidth;
    if (x > w / 2) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden select-none">
      {/* Slide area */}
      <div
        className={`relative flex-1 overflow-hidden cursor-pointer ${
          slide.variant === "ink" ? "panel-ink" : "bg-background"
        }`}
        onClick={handleClick}
      >
        {slide.variant === "ink" && (
          <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        )}
        {slide.variant === "light" && (
          <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            {slide.content}
          </motion.div>
        </AnimatePresence>

        {/* Click hint arrows */}
        {current > 0 && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <ArrowLeft
              className={`w-6 h-6 ${
                slide.variant === "ink" ? "text-primary-foreground" : "text-foreground"
              }`}
            />
          </div>
        )}
        {current < slides.length - 1 && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <ArrowRight
              className={`w-6 h-6 ${
                slide.variant === "ink" ? "text-primary-foreground" : "text-foreground"
              }`}
            />
          </div>
        )}
      </div>

      {/* Controls bar */}
      <div
        className={`flex items-center justify-between px-6 py-3 border-t text-xs font-mono z-10 ${
          slide.variant === "ink"
            ? "bg-[hsl(var(--surface-ink))] border-primary-foreground/15 text-primary-foreground/50"
            : "bg-background border-foreground/10 text-foreground/40"
        }`}
      >
        <Link
          to="/meta-harness"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors uppercase tracking-[0.18em]"
        >
          <ArrowLeft className="w-3 h-3" /> Reference
        </Link>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-4"
                  : slide.variant === "ink"
                  ? "bg-primary-foreground/20 w-1.5"
                  : "bg-foreground/20 w-1.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4 uppercase tracking-[0.18em]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            disabled={current === 0}
            className="disabled:opacity-30 hover:text-primary transition-colors"
          >
            ←
          </button>
          <span>
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            disabled={current === slides.length - 1}
            className="disabled:opacity-30 hover:text-primary transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetaHarnessTalk;
