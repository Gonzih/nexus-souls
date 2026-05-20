import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/nexus/Footer";

const UNLOCK_KEY = "metaharness_unlocked";
const ACCESS_CODE = "HARNESS2026";
const GUMROAD_URL = "https://gonzih.gumroad.com/l/meta-harness";

interface Step {
  n: number;
  title: string;
  teaser: string;
  free: boolean;
  content: React.ReactNode;
}

const CodeBlock = ({ children }: { children: string }) => (
  <div className="relative group my-4">
    <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-primary-foreground/15 leading-relaxed rounded-sm">
      <code>{children}</code>
    </pre>
    <button
      onClick={() => navigator.clipboard.writeText(children)}
      className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/40 hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
    >
      copy
    </button>
  </div>
);

const steps: Step[] = [
  {
    n: 0,
    title: "Prerequisites",
    teaser: "What you need before you start.",
    free: true,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          Before you build your own meta-harness, confirm you have these in place. The course assumes
          you can run Claude Code interactively and have basic Node.js experience.
        </p>
        <ul className="space-y-4">
          {[
            {
              item: "Claude Code CLI",
              detail: 'Install: npm install -g @anthropic-ai/claude-code. Run claude --version to confirm.',
            },
            {
              item: "GitHub account + gh CLI",
              detail: "Install gh from cli.github.com. Run gh auth login. PRs and merges go through gh.",
            },
            {
              item: "Node.js 22+",
              detail: "Check: node --version. The harness uses top-level await and modern fetch.",
            },
            {
              item: "Redis (local or cloud)",
              detail: "brew install redis && redis-server, or use Redis Cloud free tier.",
            },
            {
              item: "Basic understanding of Claude",
              detail: "You should know what a system prompt is and have used Claude Code at least once.",
            },
          ].map(({ item, detail }) => (
            <li key={item} className="border-l-2 border-primary/40 pl-5">
              <div className="font-mono text-sm text-primary font-semibold mb-1">{item}</div>
              <p className="text-sm text-foreground/65 leading-relaxed">{detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-6 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
            — Quick smoke test
          </div>
          <CodeBlock>{`# Confirm everything is wired up
claude --version      # should print a version
gh auth status        # should show authenticated
node --version        # should show v22+
redis-cli ping        # should print PONG`}</CodeBlock>
          <p className="text-xs text-foreground/55 leading-relaxed mt-3">
            If all four commands succeed, you are ready for Step 1.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: 1,
    title: "Bootstrap cc-agent",
    teaser: "Install and configure the MCP worker spawner.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          cc-agent is an MCP server that exposes <code className="font-mono text-primary">spawn_agent</code>,{" "}
          <code className="font-mono text-primary">list_jobs</code>,{" "}
          <code className="font-mono text-primary">get_job_output</code>, and{" "}
          <code className="font-mono text-primary">cancel_job</code> as tool calls. It runs as a
          subprocess of your coordinator Claude session.
        </p>
        <CodeBlock>{`# Install cc-agent globally
npm install -g @gonzih/cc-agent

# Verify it starts
cc-agent --version`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          Next, register cc-agent as an MCP server in your project's Claude config. Edit{" "}
          <code className="font-mono text-primary">~/.claude.json</code>:
        </p>
        <CodeBlock>{`{
  "projects": {
    "/path/to/your/project": {
      "mcpServers": {
        "cc-agent": {
          "command": "npx",
          "args": ["-y", "--prefer-online", "@gonzih/cc-agent"]
        }
      }
    }
  }
}`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          Start a Claude session in your project directory. If cc-agent is wired correctly, Claude
          will have <code className="font-mono text-primary">spawn_agent</code> in its tool list. Ask
          it: <em>"What tools do you have available?"</em> — you should see the cc-agent tools.
        </p>
      </div>
    ),
  },
  {
    n: 2,
    title: "Your first spawn",
    teaser: "Spawn an ephemeral task agent against a real repo.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          With cc-agent registered, you can spawn your first task agent. Ask Claude (in your project
          session) to run a trivial task on a test repo.
        </p>
        <CodeBlock>{`# In your Claude Code session, say:
"Use spawn_agent to clone https://github.com/you/test-repo,
create a branch feat/hello-world, add a README.md with the text
'Hello from meta-harness', commit, push, open a PR, and merge it."`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          The coordinator will call <code className="font-mono text-primary">spawn_agent</code> with
          the repo URL and task. cc-agent starts a Claude subprocess in a fresh worktree. You can
          track it:
        </p>
        <CodeBlock>{`# Ask Claude: list current jobs
"What's the status of all running jobs?"

# Or directly:
cc-agent list-jobs`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          When the job completes, Claude will receive the output and confirm the PR was merged. Check
          GitHub — you should see the PR, merged, with a squash commit.
        </p>
        <div className="p-5 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
            — What just happened
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            A Claude session (coordinator) used a tool call to spawn another Claude session (agent).
            The agent implemented a task end-to-end. You wrote zero deployment code.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: 3,
    title: "cc-tg coordinator",
    teaser: "Set up the persistent Telegram bridge and coordinator session.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          The coordinator is a Node.js process that bridges Telegram messages to a persistent{" "}
          <code className="font-mono text-primary">claude --continue</code> session. It runs forever
          under launchd.
        </p>
        <CodeBlock>{`# Install cc-tg
npm install -g @gonzih/cc-tg

# Create your .env
TELEGRAM_BOT_TOKEN=<your-bot-token>
CLAUDE_CODE_OAUTH_TOKEN=<your-claude-token>
REDIS_URL=redis://localhost:6379
PROJECT_DIR=/path/to/your/project`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          Create a launchd plist at{" "}
          <code className="font-mono text-primary">~/Library/LaunchAgents/cc-tg.plist</code>:
        </p>
        <CodeBlock>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>cc-tg</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/npx</string>
    <string>--prefer-online</string>
    <string>-y</string>
    <string>@gonzih/cc-tg</string>
  </array>
  <key>KeepAlive</key>
  <true/>
  <key>WorkingDirectory</key>
  <string>/path/to/your/project</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>CLAUDE_CODE_OAUTH_TOKEN</key>
    <string>your-token-here</string>
  </dict>
</dict>
</plist>`}</CodeBlock>
        <CodeBlock>{`# Load the service
launchctl load ~/Library/LaunchAgents/cc-tg.plist

# Restart after changes: kill, launchd respawns
pkill -f cc-tg`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          Send a message to your Telegram bot. The coordinator receives it, routes it to Claude, and
          flushes the response back. The conversation persists across restarts via{" "}
          <code className="font-mono text-primary">--continue</code>.
        </p>
      </div>
    ),
  },
  {
    n: 4,
    title: "The Prompt Trick",
    teaser: "Call MCPs without credentials in code using cwd inheritance.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          The prompt trick is the architecture's most important insight: you can call any MCP tool
          (send email, post to Slack, hit an API) without putting credentials in your service code.
          The credential chain lives in <code className="font-mono text-primary">~/.claude.json</code>.
        </p>
        <CodeBlock>{`import { spawnSync } from "node:child_process";

function callToolViaPrompt(prompt: string, projectDir: string) {
  return spawnSync(
    "claude",
    ["--print", "--dangerously-skip-permissions", "-p", prompt],
    {
      cwd: projectDir,           // inherits all project MCPs
      env: {
        ...process.env,
        CLAUDE_CODE_OAUTH_TOKEN: process.env.CLAUDE_CODE_OAUTH_TOKEN!,
      },
      timeout: 60_000,
      encoding: "utf-8",
    }
  );
}`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          To send an email without storing SMTP credentials:
        </p>
        <CodeBlock>{`const result = callToolViaPrompt(
  "Use the gmail-personal MCP to send an email to " +
  "user@example.com with subject 'Task complete' and " +
  "body 'The deployment finished successfully.'",
  "/path/to/your/project"  // this dir has gmail-personal in ~/.claude.json
);`}</CodeBlock>
        <div className="p-5 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
            — The rule
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            If you find yourself storing a credential in a service's environment, ask: could Claude
            call this tool directly from the right cwd? If yes, use the prompt trick instead.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: 5,
    title: "CLAUDE.md design",
    teaser: "Writing the instruction layer for autonomous loops.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          <code className="font-mono text-primary">CLAUDE.md</code> is the instruction layer. Every
          agent inherits it. It defines what "done" means, how to handle errors, and what the PR
          contract looks like. Writing it well is the difference between agents that ship and agents
          that stall.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
          Structure your CLAUDE.md:
        </p>
        <CodeBlock>{`# Project: <name>

## What "done" means
Every task ends with:
- Tests passing
- A merged PR
- npm published (if applicable)
- A Redis notification sent

## Branch naming
feat/, fix/, mvp/ — never push to main directly.

## PR contract
gh pr create --title "<verb>: <what>" --body "<why>"
gh pr merge --squash --auto

## Error handling
If a test fails, fix it. Do not open a PR with red CI.
If gh pr create fails, check remote tracking and retry.

## Tools available
- cc-agent: spawn_agent, list_jobs, get_job_output
- redis: publish to cca:notify:<project> on task completion`}</CodeBlock>
        <p className="text-foreground/75 leading-relaxed">
          Keep CLAUDE.md project-scoped: one per repo. The coordinator's CLAUDE.md governs routing and
          delegation. Each repo's CLAUDE.md governs implementation.
        </p>
      </div>
    ),
  },
  {
    n: 6,
    title: "Constraints in the harness, not the prompt",
    teaser: "What belongs in CLAUDE.md vs what belongs in the orchestration layer.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          CLAUDE.md is for describing <em>intent</em> — what done means, how to handle errors, what
          the PR contract looks like. It is not the place for safety-critical constraints. If
          violating a constraint has real consequences, it must live in the infrastructure, not in
          the language.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          Language models can be persuaded to ignore language-level constraints in edge cases,
          emergencies, or sufficiently creative framing. Infrastructure constraints are immune to
          persuasion.
        </p>

        {/* Two-column contrast */}
        <div className="border border-foreground/10 overflow-hidden">
          <div className="grid grid-cols-2 bg-foreground/5 border-b border-foreground/10">
            <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
              Put in CLAUDE.md
            </div>
            <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary border-l border-foreground/10">
              Put in the harness
            </div>
          </div>
          {[
            ["What 'done' means", "max_budget_usd per spawn"],
            ["Branch naming conventions", "Branch protection rules (no push to main)"],
            ["PR title format", "Allowed-repo set (schema validation)"],
            ["Error handling preferences", "Redis gate keys (rejected at MCP layer)"],
            ["Commit message style", "MCP config omission (tool literally unavailable)"],
          ].map(([soft, hard]) => (
            <div key={soft} className="grid grid-cols-2 border-b border-foreground/8 last:border-0">
              <div className="px-4 py-3 text-xs text-foreground/65 leading-snug">{soft}</div>
              <div className="px-4 py-3 text-xs text-primary font-mono leading-snug border-l border-foreground/10">
                {hard}
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground/75 leading-relaxed">
          The mental model: if you'd be comfortable publishing the constraint as a comment in a
          GitHub issue, it can live in CLAUDE.md. If violating it could delete data, expose
          credentials, or merge untested code, it belongs in the infrastructure.
        </p>

        <div className="p-5 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
            — Concrete example
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed mb-3">
            Instead of writing "never push to main" in CLAUDE.md, enable branch protection on
            GitHub. The agent literally cannot push to main — not because it was told not to, but
            because the operation is mechanically rejected.
          </p>
          <CodeBlock>{`# In CLAUDE.md: describes intent, not policy
## Branch naming
feat/, fix/, mvp/ — never push to main directly.

# In GitHub settings: enforces the policy mechanically
Settings → Branches → Branch protection rules
  → Require pull request before merging: ✓
  → Include administrators: ✓`}</CodeBlock>
        </div>

        <div className="p-5 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
            — Information flow is also architectural
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Telegram → coordinator → spawner → task agent. Notifications flow back up. No
            cross-tier lateral communication is possible — not because agents are instructed to
            avoid it, but because the pipes don't exist.
          </p>
        </div>
      </div>
    ),
  },
  {
    n: 7,
    title: "Ship something real",
    teaser: "End-to-end: Telegram message → PR merged → npm published.",
    free: false,
    content: (
      <div className="space-y-6">
        <p className="text-foreground/75 leading-relaxed">
          The final step is a full end-to-end run. Send a real task to your Telegram bot. Watch it
          flow through the entire stack without you touching a keyboard.
        </p>
        <div className="p-5 border border-primary/20 bg-primary/5 mb-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
            — Your test task
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Send to your bot:{" "}
            <em>
              "Add a /health endpoint to the express server in repo https://github.com/you/myapi
              that returns JSON status: ok. Tests, PR, merge, publish."
            </em>
          </p>
        </div>
        <p className="text-primary font-mono text-[11px] uppercase tracking-[0.18em]">
          What should happen:
        </p>
        <ol className="space-y-3">
          {[
            "cc-tg receives the Telegram message",
            "Routes it to the persistent Claude session",
            "Claude calls spawn_agent with the repo and task",
            "cc-agent starts an ephemeral Claude subprocess in a worktree",
            "Agent implements /health, writes tests, commits",
            "Agent opens a PR and merges it",
            "Agent runs npm version patch && npm publish",
            "cc-agent publishes to Redis: cca:notify:<project>",
            "cc-tg receives notification, sends Telegram reply",
            "You receive: 'Done. PR #42 merged. v1.0.3 published.'",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 items-start text-sm text-foreground/70">
              <span className="font-mono text-primary shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 p-6 border border-primary/20 bg-primary/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
            — You are done when
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            A Telegram message triggers a complete implementation cycle — code, tests, PR, merge,
            publish, notification — with no human intervention beyond the initial message. That is
            the meta-harness.
          </p>
        </div>
      </div>
    ),
  },
];

interface LockedStepProps {
  step: Step;
  onUnlockClick: () => void;
}

const LockedStep = ({ step, onUnlockClick }: LockedStepProps) => (
  <div className="relative border border-foreground/10 overflow-hidden">
    {/* Visible header */}
    <div className="px-8 py-6 border-b border-foreground/10">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs text-foreground/40">Step {step.n}</span>
        <Lock className="w-3.5 h-3.5 text-foreground/30" />
      </div>
      <h3 className="font-serif-display text-2xl text-foreground mb-2">{step.title}</h3>
      <p className="text-sm text-foreground/55">{step.teaser}</p>
    </div>

    {/* Blurred body */}
    <div className="relative px-8 py-6 select-none" aria-hidden="true">
      <div className="blur-sm opacity-40 pointer-events-none space-y-3">
        <div className="h-4 bg-foreground/10 rounded w-3/4" />
        <div className="h-4 bg-foreground/10 rounded w-full" />
        <div className="h-4 bg-foreground/10 rounded w-2/3" />
        <div className="h-24 bg-foreground/5 rounded border border-foreground/10 mt-4" />
        <div className="h-4 bg-foreground/10 rounded w-4/5" />
        <div className="h-4 bg-foreground/10 rounded w-1/2" />
      </div>
    </div>

    {/* Unlock overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[2px]">
      <button
        onClick={onUnlockClick}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
      >
        <Lock className="w-3.5 h-3.5" /> Unlock Full Course
      </button>
    </div>
  </div>
);

interface UnlockModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

const UnlockModal = ({ onClose, onUnlock }: UnlockModalProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        className="bg-background border border-foreground/15 max-w-md w-full p-8"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
          — Unlock access
        </div>
        <h2 className="font-serif-display text-3xl mb-2">Unlock Full Course</h2>
        <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
          Enter your access code below, or purchase access on Gumroad.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(false);
              }}
              placeholder="Access code"
              className="w-full font-mono text-sm bg-secondary border border-foreground/15 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors uppercase tracking-[0.1em]"
              autoFocus
            />
            {error && (
              <p className="font-mono text-xs text-destructive mt-2">
                Invalid code. Check your purchase email or try Gumroad.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
          >
            Unlock
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-foreground/10 flex flex-col gap-3">
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-5 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
          >
            Purchase on Gumroad →
          </a>
          <button
            onClick={onClose}
            className="w-full text-center font-mono text-xs text-foreground/40 hover:text-foreground/70 transition-colors py-1"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const MetaHarnessCourse = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(UNLOCK_KEY) === "true");
  }, []);

  const handleUnlock = () => {
    localStorage.setItem(UNLOCK_KEY, "true");
    setUnlocked(true);
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/meta-harness"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Meta-Harness Reference
          </Link>
          {!unlocked && (
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary hover:text-primary/80 transition-colors"
            >
              <Lock className="w-3 h-3" /> Unlock Course
            </button>
          )}
          {unlocked && (
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              ✓ Full access
            </span>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-20 md:py-28 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">
            — Interactive Course · 8 Steps
          </div>
          <h1 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.02] mb-8 break-words">
            Build Your Own{" "}
            <span className="text-accent-blue italic">Meta-Harness.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
            A step-by-step course for building autonomous Claude Code infrastructure from scratch.
            From prerequisites to end-to-end: Telegram message → PR merged → npm published.
          </p>
          {!unlocked && (
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors"
              >
                Unlock Full Course →
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
              >
                <Lock className="w-3.5 h-3.5" /> Enter access code
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course steps */}
      <section className="px-6 md:px-10 py-16 max-w-4xl mx-auto space-y-8">
        {steps.map((step, i) => {
          const isLocked = !step.free && !unlocked;

          if (isLocked) {
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <LockedStep step={step} onUnlockClick={() => setShowModal(true)} />
              </motion.div>
            );
          }

          return (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-foreground/10"
            >
              {/* Step header */}
              <div className="px-8 py-6 border-b border-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-primary">Step {step.n}</span>
                  {step.free && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/60 border border-primary/30 px-2 py-0.5">
                      Free
                    </span>
                  )}
                </div>
                <h3 className="font-serif-display text-2xl text-foreground">{step.title}</h3>
              </div>

              {/* Step content */}
              <div className="px-8 py-8">{step.content}</div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom CTA — always visible */}
      <section className="px-6 md:px-10 py-20 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
            — Questions?
          </div>
          <p className="font-serif-display text-3xl text-primary-foreground mb-6 font-light">
            Stuck on a step? Want to talk architecture?
          </p>
          <a
            href="mailto:gonzih@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> gonzih@gmail.com
          </a>
        </div>
      </section>

      <Footer />

      {/* Unlock modal */}
      {showModal && (
        <UnlockModal onClose={() => setShowModal(false)} onUnlock={handleUnlock} />
      )}
    </main>
  );
};

export default MetaHarnessCourse;
