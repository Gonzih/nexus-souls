import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

interface CopyBlockProps {
  code: string;
  label?: string;
}

const CopyBlock = ({ code, label }: CopyBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group my-6">
      {label && (
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
          — {label}
        </div>
      )}
      <div className="relative bg-[hsl(var(--surface-ink))] border border-foreground/10">
        <pre className="font-mono text-xs md:text-sm text-primary-foreground p-5 overflow-x-auto max-w-full pr-16">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="absolute top-3 right-3 p-2 border border-primary-foreground/20 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors bg-[hsl(var(--surface-ink))]"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-primary-glow" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

const steps = [
  { n: "00", label: "Prerequisites" },
  { n: "01", label: "Bootstrap cc-agent" },
  { n: "02", label: "Spawn your first agent" },
  { n: "03", label: "Set up cc-tg" },
  { n: "04", label: "The prompt trick" },
  { n: "05", label: "Design your CLAUDE.md" },
  { n: "06", label: "Ship something" },
];

const MetaHarnessCourse = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link to="/meta-harness" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Meta-Harness
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Course · 7 Steps</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-32 border-b border-foreground/10 overflow-hidden panel-ink">
        <div className="absolute inset-0 dot-bg-ink opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Harness Engineering Course</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] text-primary-foreground mb-8 break-words">
              Build your own <span className="italic text-primary-glow">meta-harness.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl font-light">
              This is not a tutorial about AI assistants. This is a course about building
              autonomous infrastructure. Harness Engineering means designing the environment,
              constraints, and instruction layer that lets agents run useful loops without you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActiveStep(i)}
                className={`font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors ${
                  activeStep === i
                    ? "border-primary-glow text-primary-glow bg-primary-glow/10"
                    : "border-primary-foreground/20 text-primary-foreground/50 hover:border-primary-foreground/40 hover:text-primary-foreground/70"
                }`}
              >
                {s.n} · {s.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Step 0 */}
      <Section
        id="step-0"
        eyebrow="Step 00"
        title={<>Prerequisites</>}
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Before you start, make sure you have these in place. The course assumes a macOS or Linux
              environment. Windows WSL2 works, but launchd (Step 03) is macOS-only.
            </p>
            <div className="border border-foreground/10">
              {[
                { item: "Claude Code CLI", cmd: "npm install -g @anthropic-ai/claude-code", note: "or brew install claude" },
                { item: "GitHub account + gh CLI", cmd: "gh auth login", note: "authenticated and ready to push" },
                { item: "Node.js 22+", cmd: "node --version", note: "v22 or higher" },
                { item: "Redis running locally", cmd: "redis-cli ping", note: "should return PONG" },
                { item: "Telegram bot token", cmd: "@BotFather on Telegram", note: "create a bot, save the token" },
              ].map((req, i) => (
                <div key={req.item} className={`px-5 py-4 grid md:grid-cols-3 gap-3 items-start text-sm ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                  <span className="text-foreground font-medium">{req.item}</span>
                  <span className="font-mono text-xs text-primary">{req.cmd}</span>
                  <span className="text-foreground/50 text-xs">{req.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— What you'll build</div>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                  By the end of this course you will have:
                </p>
                <ul className="space-y-3 text-sm text-foreground/75">
                  {[
                    "cc-agent MCP installed and active in your Claude session",
                    "Your first autonomous agent task completed",
                    "cc-tg coordinator running via launchd",
                    "A starter CLAUDE.md that defines agent behavior",
                    "One full cycle: message → agent → PR → merge",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="text-primary mt-0.5 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Step 1 */}
      <Section
        id="step-1"
        eyebrow="Step 01"
        title={<>Bootstrap <span className="italic text-accent-blue">cc-agent</span></>}
        variant="ink"
      >
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
            cc-agent is an MCP server that gives your Claude session the ability to spawn and manage
            autonomous task agents. Install it with one command, then restart Claude Code.
          </p>
          <CopyBlock
            label="Paste into your terminal"
            code="claude mcp add cc-agent -- npx @gonzih/cc-agent"
          />
          <p className="text-primary-foreground/70 leading-relaxed">
            Restart Claude Code after running this. When it comes back up, you'll have{" "}
            <span className="font-mono text-primary-foreground text-sm">13 new MCP tools</span> in
            your session. Your Claude instance can now spawn and monitor autonomous agents.
          </p>
          <FadeIn>
            <div className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">— The 13 tools you get</div>
              <div className="grid sm:grid-cols-2 gap-2 font-mono text-xs text-primary-foreground/70">
                {[
                  "spawn_agent", "list_jobs", "get_job_output",
                  "cancel_job", "get_job_status", "wait_for_job",
                  "list_repos", "create_repo", "delete_repo",
                  "list_branches", "create_branch", "get_job_logs",
                  "get_agent_config",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="text-primary-glow">·</span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Step 2 */}
      <Section
        id="step-2"
        eyebrow="Step 02"
        title={<>Spawn your <span className="italic text-accent-blue">first agent</span></>}
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Open Claude Code. Paste the following prompt. This will create a GitHub repo and
              spawn an agent to write its README.
            </p>
            <CopyBlock
              label="Paste into Claude Code"
              code={`Create a new public GitHub repo called "my-first-agent-task",\nseed it with an empty main branch, then spawn a cc-agent to\nwrite a README.md explaining what this repo is for.`}
            />
            <p>
              Watch the job lifecycle in real time. The coordinator will show you status updates as
              the agent clones, writes, commits, and opens a PR.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Job lifecycle</div>
                <div className="space-y-4">
                  {[
                    { state: "PENDING", desc: "Job queued, repo cloned", color: "text-foreground/50" },
                    { state: "RUNNING", desc: "Agent implementing task", color: "text-primary" },
                    { state: "COMPLETED", desc: "PR merged, work shipped", color: "text-foreground" },
                  ].map((s) => (
                    <div key={s.state} className="flex gap-3 items-start pb-4 border-b border-foreground/8 last:border-0 last:pb-0">
                      <span className={`font-mono text-xs shrink-0 ${s.color}`}>{s.state}</span>
                      <span className="text-sm text-foreground/60">{s.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 pt-4 border-t border-foreground/10 text-xs text-foreground/50 leading-relaxed">
                  Use <span className="font-mono">get_job_output(job_id)</span> to stream logs while the agent runs.
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Step 3 */}
      <Section
        id="step-3"
        eyebrow="Step 03"
        title={<>Set up <span className="italic text-accent-blue">cc-tg</span> (the coordinator)</>}
        variant="ink"
      >
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
            cc-tg turns a Telegram bot into a persistent Claude session that survives reboots.
            launchd watches the process — if it crashes, it comes back automatically.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed">
            Save the following plist to{" "}
            <span className="font-mono text-primary-foreground text-sm">~/Library/LaunchAgents/cc-tg.plist</span>,
            replacing <span className="font-mono text-primary-glow text-sm">YOUR_TOKEN</span> and the project path.
            Then load it with <span className="font-mono text-primary-foreground text-sm">launchctl load ~/Library/LaunchAgents/cc-tg.plist</span>.
          </p>
          <CopyBlock
            label="~/Library/LaunchAgents/cc-tg.plist"
            code={`<?xml version="1.0" encoding="UTF-8"?>
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
  <key>EnvironmentVariables</key>
  <dict>
    <key>TELEGRAM_BOT_TOKEN</key>
    <string>YOUR_TOKEN</string>
    <key>PROJECT_DIR</key>
    <string>/Users/you/your-project</string>
  </dict>
  <key>KeepAlive</key>
  <true/>
  <key>RunAtLoad</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/tmp/cc-tg.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/cc-tg.err</string>
</dict>
</plist>`}
          />
          <p className="text-primary-foreground/70 leading-relaxed">
            Once loaded, send a message to your Telegram bot. The coordinator will respond
            from the project context. Kill it with <span className="font-mono text-primary-foreground text-sm">pkill -f cc-tg</span> —
            launchd will respawn within seconds.
          </p>
        </div>
      </Section>

      {/* Step 4 */}
      <Section
        id="step-4"
        eyebrow="Step 04"
        title={<>The <span className="italic text-accent-blue">Prompt Trick</span></>}
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Your agents can send emails, post to Slack, hit APIs — without storing any credentials
              in code. The trick: spawn a Claude subprocess with the right <span className="font-mono text-primary text-sm">cwd</span>.
              It inherits the project-scoped MCP session.
            </p>
            <CopyBlock
              label="Zero-credential tool access"
              code={`import { spawnSync } from "child_process";

const result = spawnSync(
  "claude",
  ["--print", "--dangerously-skip-permissions", "-p", prompt],
  {
    cwd: "/Users/you/your-project",  // ← inherits MCPs
    env: {
      ...process.env,
      CLAUDE_CODE_OAUTH_TOKEN: process.env.CLAUDE_TOKEN,
    },
    timeout: 60_000,
  }
);`}
            />
            <p>
              Configure MCPs in <span className="font-mono text-sm text-foreground">~/.claude.json</span> under your project path.
              The credential never enters your service code.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— What this unlocks</div>
                <ul className="space-y-3 text-sm text-foreground/75">
                  {[
                    "Send emails via Gmail MCP — no SMTP config",
                    "Post to Slack — no bot token in code",
                    "Query databases — no connection string in env",
                    "Hit internal APIs — credentials stay in ~/.claude.json",
                    "npm publish stays safe — no secrets in the package",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 items-start pb-3 border-b border-foreground/8 last:border-0 last:pb-0">
                      <span className="text-primary mt-0.5 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Step 5 */}
      <Section
        id="step-5"
        eyebrow="Step 05"
        title={<>Design your <span className="italic text-accent-blue">CLAUDE.md</span></>}
        variant="ink"
      >
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
            The instruction file is a discipline. CLAUDE.md is read by every agent spawned in
            your project. It defines the operational mythology — how agents behave, what they
            can and cannot do, and when to stop and ask.
          </p>
          <CopyBlock
            label="Starter CLAUDE.md template — copy and adapt"
            code={`# Project: [Your Project Name]

## Agent Behavior
- Always work on a branch — never main
- Branch naming: feat/, fix/, chore/
- Nothing is done until: implement → test → commit → PR → merge → deploy

## Autonomy Rules
- You may: create files, modify code, run tests, create PRs, merge PRs
- You may: publish packages, restart services via launchd
- Ask before: deleting data, changing infrastructure, external payments

## Delegation Patterns
- For tasks >2h estimated: break into sub-tasks, spawn sub-agents
- For blocked tasks: report status to Redis, do not spin
- For ambiguous tasks: state your assumption, proceed, report

## Quality Gates
- Tests must pass before PR
- npm audit before publish (no high/critical)
- git diff --staged review before commit

## Memory
- Use /memory to persist cross-session context
- Key decisions go in DECISIONS.md at repo root
- Never store credentials — use the prompt trick`}
          />
          <p className="text-primary-foreground/70 leading-relaxed">
            Iterate on this file as you learn what your agents do well and where they need guardrails.
            The CLAUDE.md is the primary lever for agent behavior — not prompts, not code.
          </p>
        </div>
      </Section>

      {/* Step 6 */}
      <Section
        id="step-6"
        eyebrow="Step 06"
        title={<>Ship <span className="italic text-accent-blue">something.</span></>}
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The final step. Run the full cycle — one message, full stack, no human in the loop.
              Paste this into your Claude Code (or send it via Telegram if cc-tg is running):
            </p>
            <CopyBlock
              label="Paste into Claude Code"
              code={`Spawn an agent to add a GitHub Actions CI workflow to\nmy-first-agent-task repo. Branch, implement, PR, merge.`}
            />
            <p>
              Watch the coordinator spawn the agent, open the PR, and merge it.
              When it's done — that's the full cycle. One message. Full stack. No human in the loop.
            </p>
            <p className="font-serif-display text-2xl text-foreground italic leading-snug">
              Harness Engineering is not about prompts. It's about building the loop that makes the prompts unnecessary.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— The full cycle</div>
                <ol className="space-y-3">
                  {[
                    "Telegram message (or Claude session)",
                    "cc-tg routes to coordinator",
                    "spawn_agent via cc-agent MCP",
                    "Agent clones repo, creates branch",
                    "Implements, tests, commits",
                    "PR opened and merged",
                    "Deploy / publish runs",
                    "Redis notification → Telegram reply",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start pb-3 border-b border-foreground/8 last:border-0 last:pb-0 text-sm">
                      <span className="font-mono text-xs text-primary shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-foreground/75">{step}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-6">
            Want to go deeper?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light mb-12 max-w-xl mx-auto">
            I run workshops on Meta-Harness design. Bring your team — we'll stand up production
            agentic infrastructure together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="mailto:gonzih@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> gonzih@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50">
            <a href="https://github.com/Gonzih/cc-agent" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors inline-flex items-center gap-1.5">
              cc-agent <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-primary-foreground/20">·</span>
            <a href="https://github.com/Gonzih/cc-tg" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors inline-flex items-center gap-1.5">
              cc-tg <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-primary-foreground/20">·</span>
            <Link to="/" className="hover:text-primary-glow transition-colors inline-flex items-center gap-1.5">
              nexus-souls <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MetaHarnessCourse;
