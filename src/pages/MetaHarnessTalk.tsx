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
          Meta-Harness<br />
          <span className="text-primary italic">Engineering</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/70 font-light max-w-xl leading-relaxed">
          Building autonomous infrastructure with Claude Code.
        </p>
        <div className="mt-12 font-mono text-xs text-primary-foreground/40 uppercase tracking-[0.22em]">
          Maks Soltan · gonzih@gmail.com
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "The Problem",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Problem
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] mb-10">
          Orchestration hell.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "YAML pipelines",
              body: "Every workflow is hand-coded. Failures need human diagnosis. Changing requirements = rewriting pipelines.",
            },
            {
              title: "Credential sprawl",
              body: "API keys in environment variables, secrets in CI config, tokens in build artifacts.",
            },
            {
              title: "Human in the loop",
              body: "Every deployment needs someone to watch it. Every PR needs a reviewer. Scale breaks human bandwidth.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-l-2 border-primary/30 pl-5">
              <div className="font-mono text-sm text-primary font-semibold mb-2">{title}</div>
              <p className="text-sm text-foreground/65 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "The Insight",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-8">
          — The Insight
        </div>
        <p className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-primary-foreground mb-8">
          Claude Code is not just a coding assistant.
        </p>
        <p className="text-xl md:text-2xl text-primary-foreground/65 font-light max-w-2xl leading-relaxed">
          It is a general-purpose intelligence substrate that can be wrapped, orchestrated,
          and composed into autonomous infrastructure.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    label: "3-Tier Architecture",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Architecture · 3 Tiers
        </div>
        <h2 className="font-serif-display text-3xl md:text-5xl font-light mb-10">
          Three tiers. Each with a distinct role.
        </h2>
        <LightCode>{`launchd (KeepAlive: true)
  └── cc-tg  ← coordinator / Telegram bridge
        └── Claude Code (--continue, project context)
              └── cc-agent MCP  ← worker spawner
                    └── claude subprocess  ← ephemeral task agent
                          └── more subagents...`}</LightCode>
      </div>
    ),
  },
  {
    id: 5,
    label: "Tier 1: Coordinator",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Tier 1 · cc-tg
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8">
          The Coordinator
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-primary-foreground/75 leading-relaxed">
            <p>
              A Node.js process managed by launchd with{" "}
              <code className="font-mono text-primary">KeepAlive: true</code>.
            </p>
            <p>
              Bridges Telegram messages to a persistent{" "}
              <code className="font-mono text-primary">claude --continue</code> session in the target
              project directory.
            </p>
            <p>Holds all project context statefully across days and restarts.</p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Persistence", value: "launchd KeepAlive: true" },
              { label: "Context", value: "claude --continue" },
              { label: "Restart rule", value: "pkill, never launchctl unload" },
              { label: "Input", value: "Telegram messages" },
              { label: "Output", value: "Redis pub/sub + Telegram" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between font-mono text-xs border-b border-primary-foreground/10 pb-2">
                <span className="text-primary-foreground/50 uppercase tracking-[0.15em]">{label}</span>
                <span className="text-primary">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Tier 2: Worker Spawner",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Tier 2 · cc-agent MCP
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8">
          The Worker Spawner
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              An MCP server that exposes tool calls to the coordinator's Claude session.
            </p>
            <LightCode>{`spawn_agent(repo_url, task, branch)
  → job_id

list_jobs()
  → [{job_id, status, repo}]

get_job_output(job_id)
  → stdout/stderr log

cancel_job(job_id) → bool`}</LightCode>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50 mb-4">
              Job lifecycle
            </p>
            <div className="space-y-2 font-mono text-sm">
              {["PENDING", "RUNNING", "COMPLETED", "FAILED", "INTERRUPTED"].map((s, i) => (
                <div
                  key={s}
                  className={`px-4 py-2 border-l-2 ${
                    s === "COMPLETED"
                      ? "border-primary text-primary"
                      : s === "FAILED" || s === "INTERRUPTED"
                      ? "border-destructive text-destructive"
                      : "border-foreground/20 text-foreground/60"
                  }`}
                >
                  {i > 0 && <span className="text-foreground/30 mr-2">↘</span>}{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    label: "Tier 3: Task Agents",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Tier 3 · Ephemeral Agents
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8">
          Task Agents
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-primary-foreground/75 leading-relaxed">
            <p>
              Isolated Claude Code sessions spawned into a fresh worktree of the target repo.
              Ephemeral by design — they run, ship, and exit.
            </p>
            <p>Every agent prompt ends with terminal steps. Agents that don't ship are not done.</p>
          </div>
          <Code>{`gh pr create \\
  --title "<verb>: <what>" \\
  --body "<why>" \\
  --base main

gh pr merge --squash --auto

npm version patch && \\
npm publish --access public`}</Code>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    label: "The Prompt Trick",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Prompt Trick
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4">
          Zero credentials in code. Ever.
        </h2>
        <p className="text-foreground/65 leading-relaxed mb-6 max-w-xl">
          Spawn a Claude subprocess with <code className="font-mono text-primary">cwd</code> set to
          the project that has the MCP configured. Claude inherits the credential chain.
        </p>
        <LightCode>{`spawnSync('claude', [
  '--print',
  '--dangerously-skip-permissions',
  '-p', prompt
], {
  cwd: '/Users/feral/money-brain',  // inherits gmail-personal MCP
  env: { ...process.env, CLAUDE_CODE_OAUTH_TOKEN: token },
  timeout: 60_000,
})`}</LightCode>
        <p className="mt-6 text-sm text-foreground/55 font-light">
          No SMTP passwords. No API keys baked into artifacts. The Claude OAuth token is the only
          secret — it lives in the environment.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    label: "Redis Nervous System",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Communication
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-10">
          Redis as the nervous system.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-3">
            {[
              { key: "cca:notify:<project>", purpose: "Agent completion → Telegram" },
              { key: "cca:chat:log:<project>", purpose: "Full conversation log" },
              { key: "whiteh:auto_send_queue", purpose: "Email disclosure queue" },
              { key: "whiteh:disclosures", purpose: "Vuln discovery log" },
            ].map(({ key, purpose }) => (
              <div key={key} className="border-b border-primary-foreground/10 pb-3">
                <code className="font-mono text-xs text-primary block mb-1 break-all">{key}</code>
                <p className="text-xs text-primary-foreground/55">{purpose}</p>
              </div>
            ))}
          </div>
          <Code>{`agent task completes
  → cc-agent publishes to
    cca:notify:money-brain
  → cc-tg subscribes
  → flushes to Telegram
  → appends to chat log

# No polling. Push only.`}</Code>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    label: "Design Principles",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Design Philosophy
        </div>
        <h2 className="font-serif-display text-3xl md:text-5xl font-light mb-8">
          Seven principles. No exceptions.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { n: "1", title: "Intelligence over orchestration", body: "Natural language, not YAML" },
            { n: "2", title: "Self-healing by default", body: "KeepAlive: true, always on" },
            { n: "3", title: "Zero credentials in code", body: "Prompt trick, always" },
            { n: "4", title: "Ship as definition of done", body: "PR merged + published" },
            { n: "5", title: "Composability through MCP", body: "New capability = new MCP" },
            { n: "6", title: "Ephemerality with persistence", body: "Agents die, coordinator lives" },
            { n: "7", title: "Constraints as architecture", body: "Rules are the shape, not the words" },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-4 items-start py-3 border-b border-foreground/8">
              <span className="font-mono text-xs text-primary shrink-0 w-5">{n}</span>
              <div>
                <div className="font-mono text-sm text-foreground font-medium mb-0.5">{title}</div>
                <div className="text-xs text-foreground/55">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 11,
    label: "Constraints: Wrong Way",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Design Principle · 7
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-10">
          The traditional approach.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40 mb-4">
              Language-layer constraints
            </div>
            <LightCode>{`# CLAUDE.md
Never push to main.
Only use approved tools.
Stay under $10 per task.
Don't merge without review.
Check the gate before proceeding.`}</LightCode>
            <p className="mt-4 text-sm text-foreground/55 leading-relaxed">
              These are instructions. They can be argued with, misinterpreted, overridden in an
              emergency, or ignored in a sufficiently creative framing.
            </p>
          </div>
          <div className="space-y-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40 mb-4">
              What can go wrong
            </div>
            {[
              "Agent is told it's an emergency — overrides the rule",
              "Ambiguous framing causes misinterpretation",
              "Rule is present but silently ignored under pressure",
              "No mechanism to verify compliance after the fact",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start border-l-2 border-destructive/30 pl-4">
                <p className="text-sm text-foreground/60 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    label: "Constraints: Right Way",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Design Principle · 7 · Meta-harness approach
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8">
          The rules don't exist as words.
          <br />
          <span className="text-primary italic">They are the shape of the space.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {[
              { soft: '"Don\'t push to main"', hard: "Branch protection (mechanical block)" },
              { soft: '"Only approved tools"', hard: "MCP config omission (tool doesn't exist)" },
              { soft: '"Stay under budget"', hard: "max_budget_usd in spawn_agent" },
              { soft: '"Check the gate"', hard: "Redis gate key — MCP rejects without it" },
            ].map(({ soft, hard }) => (
              <div key={soft} className="grid grid-cols-2 gap-3 border-b border-primary-foreground/10 pb-3">
                <span className="font-mono text-xs text-primary-foreground/40 leading-snug">{soft}</span>
                <span className="font-mono text-xs text-primary leading-snug">{hard}</span>
              </div>
            ))}
          </div>
          <div className="bg-black/20 border border-primary-foreground/15 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow mb-4">
              — The key insight
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              The intelligence operates freely inside a shaped space. It doesn't know the walls exist
              because the walls aren't instructions — they're the shape of the environment.
            </p>
            <p className="mt-4 text-primary-foreground/55 text-xs leading-relaxed">
              Safety-critical logic has no business being in natural language.
              All of it belongs in the orchestration layer.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    label: "The Full Cycle",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — The Full Cycle
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-8">
          One message. Full stack.
        </h2>
        <Code>{`Telegram message
  → cc-tg coordinator (persistent Claude session)
  → spawn_agent via cc-agent MCP
  → task agent: clone → branch → implement → test
  → PR opened, merged
  → npm publish, service restart
  → launchd respawns with latest package
  → Redis notification
  → Telegram reply`}</Code>
        <p className="mt-6 text-primary-foreground/55 text-sm font-light">
          No human in the loop. One message. Complete stack.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    label: "Live Demo",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Live Demo
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light mb-8">
          Watching it run.
        </h2>
        <div className="space-y-6">
          <p className="text-foreground/70 leading-relaxed text-lg">
            Sending a Telegram message: <em>"Add a /status endpoint to the API. Tests, PR, merge, publish."</em>
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "T+0s", event: "Message received by cc-tg" },
              { step: "T+5s", event: "spawn_agent called, job PENDING → RUNNING" },
              { step: "T+90s", event: "Agent: endpoint implemented, tests passing" },
              { step: "T+120s", event: "PR opened, auto-merged by gh" },
              { step: "T+140s", event: "npm publish v1.0.3 complete" },
              { step: "T+145s", event: "Telegram: 'Done. PR #38 merged.'" },
            ].map(({ step, event }) => (
              <div key={step} className="border border-foreground/10 px-4 py-3">
                <div className="font-mono text-xs text-primary mb-1">{step}</div>
                <div className="text-xs text-foreground/70 leading-snug">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    label: "What it replaces",
    variant: "ink",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — What it replaces
        </div>
        <h2 className="font-serif-display text-4xl md:text-6xl font-light text-primary-foreground mb-10">
          What you no longer need.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {[
            "Custom GitHub Actions workflows",
            "CI/CD orchestration layers",
            "Credential management services",
            "Deployment approval workflows",
            "Status polling scripts",
            "On-call humans for routine deploys",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-center border-b border-primary-foreground/10 pb-4">
              <span className="text-primary text-lg">—</span>
              <span className="text-primary-foreground/75 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 16,
    label: "Getting Started",
    variant: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
          — Getting Started
        </div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-8">
          Start with the reference. Build with the course.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-foreground/10 p-6">
            <div className="font-mono text-xs text-primary mb-3">Technical Reference</div>
            <p className="text-foreground/65 text-sm leading-relaxed mb-4">
              Full architecture docs, code samples, and design principles.
            </p>
            <p className="font-mono text-sm text-foreground">gonzih.github.io/meta-harness</p>
          </div>
          <div className="border border-primary/30 p-6 bg-primary/5">
            <div className="font-mono text-xs text-primary mb-3">Interactive Course</div>
            <p className="text-foreground/65 text-sm leading-relaxed mb-4">
              7 steps, hands-on. From prerequisites to end-to-end autonomous deploy.
            </p>
            <p className="font-mono text-sm text-foreground">gonzih.github.io/meta-harness-course</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 17,
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
          The infrastructure pattern, not the product. <br />The product is whatever the agents build.
        </p>
        <div className="space-y-2 font-mono text-sm text-primary-foreground/60">
          <p>Maks Soltan</p>
          <a href="mailto:gonzih@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
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
              className={`w-6 h-6 ${slide.variant === "ink" ? "text-primary-foreground" : "text-foreground"}`}
            />
          </div>
        )}
        {current < slides.length - 1 && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <ArrowRight
              className={`w-6 h-6 ${slide.variant === "ink" ? "text-primary-foreground" : "text-foreground"}`}
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
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current
                  ? slide.variant === "ink"
                    ? "bg-primary w-4"
                    : "bg-primary w-4"
                  : slide.variant === "ink"
                  ? "bg-primary-foreground/20"
                  : "bg-foreground/20"
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
