import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const principles = [
  {
    n: "01",
    title: "Intelligence over orchestration",
    body: "The coordinator is not a workflow engine. It is a Claude session. Tasks are described in natural language, not YAML pipelines. The intelligence adapts to failure, ambiguity, and changing requirements without reconfiguration.",
  },
  {
    n: "02",
    title: "Self-healing by default",
    body: "KeepAlive: true in launchd means every service is always on. Crashes are events, not incidents. The system restores itself without human intervention.",
  },
  {
    n: "03",
    title: "Zero credentials in code",
    body: "The prompt trick means tools are accessed through Claude's credential chain, not the service's. npm publish is safe. The codebase is publishable by default.",
  },
  {
    n: "04",
    title: "Ship as the definition of done",
    body: "An agent that researches but doesn't commit, commits but doesn't PR, or PRs but doesn't merge — is not done. Terminal steps (PR, merge, publish, restart) are part of every task definition.",
  },
  {
    n: "05",
    title: "Composability through MCP",
    body: "Services expose capabilities as MCP tools. Other services consume them. The harness grows by adding MCPs, not by rewriting orchestration code. New capability = new MCP server.",
  },
  {
    n: "06",
    title: "Ephemerality with persistence",
    body: "Task agents are ephemeral — they run, ship, and exit. The coordinator is persistent — it holds state, routes work, and remembers context. The separation keeps agents cheap and stateless while keeping the coordinator deep and contextual.",
  },
];

const redisTable = [
  { key: "cca:notify:<project>", purpose: "pub/sub — agent completion notifications to Telegram" },
  { key: "cca:chat:log:<project>", purpose: "append-only log of all Telegram↔Claude exchanges" },
  { key: "whiteh:auto_send_queue", purpose: "disclosure email queue (white-hat scanner)" },
  { key: "whiteh:disclosures", purpose: "rolling list of discovered vulnerabilities" },
  { key: "whiteh:sent_emails", purpose: "sent email log (capped at 500)" },
  { key: "whiteh:dead_letter_emails", purpose: "failed sends after MAX_REQUEUE_ATTEMPTS" },
];

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6">
    <code>{children}</code>
  </pre>
);

const MetaHarness = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Nexus
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Architecture · Reference</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Meta-Harness Design</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
              Turn Claude Code into an <span className="text-accent-blue italic">always-on</span> autonomous workforce.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              Claude Code is not just a coding assistant. It is a general-purpose intelligence
              substrate that can be wrapped, orchestrated, and composed into autonomous
              infrastructure. This is the architecture for doing that at production scale.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Tier 1</dt>
                <dd className="text-foreground">cc-tg Coordinator</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Tier 2</dt>
                <dd className="text-foreground">cc-agent Spawner</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Tier 3</dt>
                <dd className="text-foreground">Task Agents</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Backbone</dt>
                <dd className="text-foreground">Redis pub/sub</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <Section eyebrow="Overview" title={<>Three tiers. <span className="italic text-accent-blue">One pipeline.</span></>} variant="ink">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-primary-foreground/80 leading-relaxed font-light mb-8">
              The harness turns a local development tool into an always-on autonomous workforce.
              Each tier has a distinct responsibility — persistent, self-healing, and zero-credential
              from end to end.
            </p>
            <Code>{`launchd (KeepAlive: true)
  └── cc-tg  ← coordinator / Telegram bridge
        └── Claude Code (--continue, project context)
              └── cc-agent MCP  ← worker spawner
                    └── claude subprocess  ← ephemeral task agent
                          └── more subagents...`}</Code>
          </div>
          <div className="space-y-4">
            {[
              { tier: "Tier 1", name: "cc-tg", role: "Persistent coordinator. Bridges Telegram → Claude session. Holds project context across days.", color: "border-primary-glow" },
              { tier: "Tier 2", name: "cc-agent MCP", role: "Worker spawner. Exposes spawn/monitor/retrieve tools to the coordinator's Claude session.", color: "border-primary-foreground/40" },
              { tier: "Tier 3", name: "Task agents", role: "Ephemeral Claude subprocesses. Clone, branch, implement, test, commit, PR, publish, exit.", color: "border-primary-foreground/20" },
            ].map((t, i) => (
              <FadeIn key={t.tier} delay={i * 0.1}>
                <div className={`border-l-2 ${t.color} pl-5`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-1">{t.tier}</div>
                  <div className="font-serif-display text-xl text-primary-foreground mb-1">{t.name}</div>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Tier 1 */}
      <Section eyebrow="Tier 1" title={<>The <span className="italic text-accent-blue">Coordinator</span> (cc-tg)</>}>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              A Node.js process managed by launchd with <span className="font-mono text-primary text-sm">KeepAlive: true</span>.
              It bridges Telegram messages to a persistent Claude Code session running{" "}
              <span className="font-mono text-primary text-sm">--continue</span> in the target project directory.
            </p>
            <p>
              The coordinator holds the project context. It runs with{" "}
              <span className="font-mono text-sm text-foreground">cwd=/Users/feral/money-brain</span>{" "}
              so it picks up all project-scoped MCP configs, CLAUDE.md instructions, and memory.
              The context is stateful — it carries the conversation across days.
            </p>
            <p className="font-serif-display text-2xl text-foreground italic leading-snug pt-2">
              Never launchctl unload. Kill with pkill — launchd respawns cleanly.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— What it does</div>
                <ul className="space-y-3 text-sm text-foreground/75 leading-relaxed">
                  <li className="pb-3 border-b border-foreground/10">Receives messages from a Telegram bot</li>
                  <li className="pb-3 border-b border-foreground/10">Routes them to a persistent <span className="font-mono text-xs">claude --continue</span> subprocess</li>
                  <li className="pb-3 border-b border-foreground/10">Flushes Claude's responses back to Telegram and Redis</li>
                  <li>Stays alive forever — launchd respawns on crash</li>
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Tier 2 */}
      <Section eyebrow="Tier 2" title={<>The Worker <span className="italic text-accent-blue">Spawner</span> (cc-agent)</>} variant="ink">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-primary-foreground/80 leading-relaxed">
            <p>
              An MCP server that exposes tool calls to the coordinator's Claude session. The coordinator
              uses it to spawn, monitor, and retrieve results from autonomous work agents.
            </p>
            <Code>{`spawn_agent(repo_url, task, create_branch, branch, claude_token)
  → job_id

list_jobs() → [{job_id, status, repo, branch}]

get_job_output(job_id) → stdout/stderr log

cancel_job(job_id) → bool`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">— Job lifecycle</div>
                <div className="space-y-3 font-mono text-sm">
                  {[
                    { state: "PENDING", color: "text-primary-foreground/50" },
                    { state: "RUNNING", color: "text-primary-glow" },
                    { state: "COMPLETED", color: "text-primary-foreground" },
                    { state: "FAILED", color: "text-destructive" },
                    { state: "INTERRUPTED", color: "text-primary-foreground/40" },
                  ].map((s, i) => (
                    <div key={s.state} className={`flex items-center gap-3 ${s.color}`}>
                      {i > 0 && <span className="text-primary-foreground/20 text-xs">↓</span>}
                      {i === 0 && <span className="text-primary-foreground/20 text-xs"> </span>}
                      <span>{s.state}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 pt-4 border-t border-primary-foreground/10 text-xs text-primary-foreground/50 leading-relaxed">
                  The branch rule: every agent task runs on a branch. Never main.
                  Pattern: feat/, fix/, mvp/
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Tier 3 */}
      <Section eyebrow="Tier 3" title={<>Task Agents — <span className="italic text-accent-blue">ephemeral</span> by design</>}>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Isolated Claude Code sessions spawned into a fresh worktree of the target repo.
              Each gets a task prompt and runs to completion.
            </p>
            <p>
              Every agent prompt ends with terminal steps. Agents that don't ship are not done.
            </p>
            <Code>{`gh pr create --title "<title>" --body "<what and why>" --base main
gh pr merge --squash --auto
npm version patch && npm publish --access public`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— What they do</div>
                <ol className="space-y-3 text-sm text-foreground/75 leading-relaxed list-none">
                  {[
                    "Clone the repo, create the branch",
                    "Implement the task (code, tests, config)",
                    "Run tests, fix failures",
                    "Commit, push, open a PR via gh pr create",
                    "npm publish, cargo publish, or service restart",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 pb-3 border-b border-foreground/8 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-primary mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Prompt Trick */}
      <Section eyebrow="The prompt trick" title={<>Zero credentials <span className="italic text-accent-blue">in code.</span></>} variant="ink">
        <div className="max-w-3xl">
          <p className="text-lg text-primary-foreground/80 leading-relaxed font-light mb-8">
            Services need to call tools — send emails, write to Slack, hit APIs — without storing
            credentials in the service code. The solution: spawn a Claude Code subprocess with{" "}
            <span className="font-mono text-primary-foreground text-sm">cwd</span> set to the project
            directory that has the relevant MCPs configured. Claude inherits the MCP session.
            The service only passes the prompt.
          </p>
          <Code>{`spawnSync('claude', ['--print', '--dangerously-skip-permissions', '-p', prompt], {
  cwd: '/Users/feral/money-brain',  // ← inherits gmail-personal MCP
  env: { ...process.env, CLAUDE_CODE_OAUTH_TOKEN: token },
  timeout: 60_000,
})`}</Code>
          <p className="text-primary-foreground/70 leading-relaxed mt-6">
            <span className="font-mono text-sm text-primary-foreground">~/.claude.json</span> holds
            project-scoped MCP configs. Zero credentials in published code.
            No SMTP passwords. No API keys. The Claude OAuth token is the only secret,
            and it lives in the environment.
          </p>
          <Code>{`{
  "projects": {
    "/Users/feral/money-brain": {
      "mcpServers": {
        "gmail-personal": { "command": "npx", "args": ["-y", "gmail-mcp-imap"] }
      }
    }
  }
}`}</Code>
        </div>
      </Section>

      {/* Redis */}
      <Section eyebrow="Communication protocol" title={<>Redis as the <span className="italic text-accent-blue">nervous system.</span></>}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-foreground/75 leading-relaxed">
            <p>
              All asynchronous communication in the harness flows through Redis pub/sub.
              Agent completion events, chat logs, email queues — everything has a named channel.
            </p>
            <Code>{`agent task completes
  → cc-agent publishes to cca:notify:money-brain
  → cc-tg receives notification
  → flushes to Telegram + appends to Redis log`}</Code>
          </div>
          <FadeIn>
            <div className="border border-foreground/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary px-5 py-3 border-b border-foreground/10">
                Channel / Key → Purpose
              </div>
              {redisTable.map((row, i) => (
                <div key={row.key} className={`grid grid-cols-2 gap-4 px-5 py-4 text-xs ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                  <span className="font-mono text-primary break-all">{row.key}</span>
                  <span className="text-foreground/65 leading-relaxed">{row.purpose}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Design philosophy */}
      <Section eyebrow="Design philosophy" title={<>Six <span className="italic text-accent-blue">principles.</span></>} variant="ink">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {principles.map((p) => (
            <FadeIn key={p.n}>
              <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">{p.n}</div>
                <h3 className="font-serif-display text-xl text-primary-foreground leading-tight mb-3">{p.title}</h3>
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Full cycle */}
      <Section eyebrow="The full cycle" title={<>One message. Full stack. <span className="italic text-accent-blue">No human in the loop.</span></>}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The complete loop — from Telegram message to npm publish — runs without human intervention.
              Every step is automatic, logged, and reversible.
            </p>
            <p className="font-serif-display text-2xl text-foreground italic leading-snug">
              This is the infrastructure pattern, not the product. The product is whatever the agents build.
            </p>
          </div>
          <FadeIn>
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
          </FadeIn>
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-6">
            Interested in building this?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light mb-12 max-w-xl mx-auto">
            I run workshops on Meta-Harness design and can help you stand up a production
            agentic infrastructure for your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:gonzih@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> gonzih@gmail.com
            </a>
            <Link
              to="/meta-harness-course"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              Try the course <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MetaHarness;
