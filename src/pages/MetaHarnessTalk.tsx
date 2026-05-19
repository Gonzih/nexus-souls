import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_SLIDES = 15;

const SlideWrapper = ({ children, index, active }: { children: React.ReactNode; index: number; active: number }) => {
  const visible = index === active;
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SlideBase = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`w-full h-full flex flex-col justify-center px-12 md:px-20 py-12 relative overflow-hidden ${dark ? "panel-ink" : "bg-background"}`}>
    {dark && <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />}
    {!dark && <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />}
    <div className="relative z-10 max-w-4xl mx-auto w-full">
      {children}
    </div>
  </div>
);

const Eyebrow = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`font-mono text-[11px] uppercase tracking-[0.26em] mb-6 ${dark ? "text-primary-glow" : "text-primary"}`}>
    — {children}
  </div>
);

const SlideTitle = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <h2 className={`font-serif-display text-3xl md:text-5xl font-light leading-[1.05] mb-8 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
    {children}
  </h2>
);

const SlideBody = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`text-base md:text-lg leading-relaxed font-light ${dark ? "text-primary-foreground/75" : "text-foreground/75"}`}>
    {children}
  </div>
);

const SlidePre = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-primary-foreground/15 my-4">
    <code>{children}</code>
  </pre>
);

const slides = [
  // 1 — Title
  <SlideBase key={1}>
    <div className="text-center">
      <div className="flex items-center justify-center gap-2.5 mb-12">
        <div className="w-9 h-9 border border-primary-foreground/30 flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-primary rotate-45" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Nexus</span>
      </div>
      <h1 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.02] text-primary-foreground mb-6">
        Meta-Harness Engineering
      </h1>
      <p className="font-serif-display text-xl md:text-2xl italic text-primary-glow mb-14">
        Building Autonomous Infrastructure with Claude Code
      </p>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground/50 space-y-2">
        <div>Maksim Soltan</div>
        <div>SF AI Meetup · 2026</div>
        <div>gonzih@gmail.com</div>
      </div>
    </div>
  </SlideBase>,

  // 2 — The Gap
  <SlideBase key={2}>
    <Eyebrow>The Gap</Eyebrow>
    <SlideTitle>Most people use LLMs as fancy autocomplete.</SlideTitle>
    <SlideBody>
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="border border-primary-foreground/10 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">What most people do</div>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>· Chat with an assistant</li>
            <li>· Copy-paste code suggestions</li>
            <li>· Ask questions, get answers</li>
            <li>· Human does every action</li>
          </ul>
        </div>
        <div className="border border-primary-glow/40 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow mb-4">What's possible</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>· Agents implement features autonomously</li>
            <li>· PRs opened, merged, deployed</li>
            <li>· Infrastructure runs without you</li>
            <li>· One message → full stack</li>
          </ul>
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 3 — Three levels
  <SlideBase key={3} dark={false}>
    <Eyebrow dark={false}>Three Levels</Eyebrow>
    <SlideTitle dark={false}>Prompt → Context → <span className="italic text-accent-blue">Harness</span></SlideTitle>
    <SlideBody dark={false}>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {[
          { level: "Level 1", name: "Prompt Engineering", desc: "Craft better inputs. Get better single outputs. Still manual, still reactive.", active: false },
          { level: "Level 2", name: "Context Engineering", desc: "Shape the session. Memory, tools, RAG. Better sustained outputs. Still you driving.", active: false },
          { level: "Level 3", name: "Harness Engineering", desc: "Design the loop. Environment + constraints + instructions = agents that run without you.", active: true },
        ].map((l) => (
          <div key={l.level} className={`p-6 border ${l.active ? "border-primary bg-primary/5" : "border-foreground/10"}`}>
            <div className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-3 ${l.active ? "text-primary" : "text-foreground/40"}`}>{l.level}</div>
            <div className={`font-serif-display text-xl mb-3 ${l.active ? "text-foreground" : "text-foreground/70"}`}>{l.name}</div>
            <p className="text-sm text-foreground/60 leading-relaxed">{l.desc}</p>
          </div>
        ))}
      </div>
    </SlideBody>
  </SlideBase>,

  // 4 — Architecture diagram
  <SlideBase key={4}>
    <Eyebrow>Architecture</Eyebrow>
    <SlideTitle>What is a meta-harness?</SlideTitle>
    <SlideBody>
      <SlidePre>{`launchd (KeepAlive: true)
  └── cc-tg  ← coordinator / Telegram bridge
        └── Claude Code (--continue, project context)
              └── cc-agent MCP  ← worker spawner
                    └── claude subprocess  ← ephemeral task agent
                          └── more subagents...`}</SlidePre>
      <p className="text-sm text-primary-foreground/60 mt-2">
        Three tiers. Each with a distinct responsibility. Persistent at the top, ephemeral at the bottom.
      </p>
    </SlideBody>
  </SlideBase>,

  // 5 — Tier 1
  <SlideBase key={5}>
    <Eyebrow>Tier 1</Eyebrow>
    <SlideTitle>The Coordinator <span className="italic text-primary-glow">(cc-tg)</span></SlideTitle>
    <SlideBody>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-sm text-primary-foreground/75">
          <p>Node.js process managed by launchd with <span className="font-mono text-primary-foreground">KeepAlive: true</span>.</p>
          <p>Bridges Telegram → persistent Claude Code session → Redis.</p>
          <p>Holds project context. Runs <span className="font-mono text-primary-foreground">--continue</span> in target project dir.</p>
          <p className="font-serif-display text-lg italic text-primary-foreground/90 leading-snug pt-2">
            The context is stateful. It carries the conversation across days.
          </p>
        </div>
        <div className="border border-primary-foreground/10 p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow mb-4">Restart rule</div>
          <div className="font-mono text-sm text-primary-foreground/80 space-y-2">
            <div className="text-destructive line-through opacity-60">launchctl unload</div>
            <div className="text-primary-glow">pkill -f cc-tg</div>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-4">launchd respawns with --prefer-online, pulling latest package automatically.</p>
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 6 — Tier 2
  <SlideBase key={6} dark={false}>
    <Eyebrow dark={false}>Tier 2</Eyebrow>
    <SlideTitle dark={false}>The Worker Spawner <span className="italic text-accent-blue">(cc-agent)</span></SlideTitle>
    <SlideBody dark={false}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-foreground/70 mb-4">MCP server exposing 13 tools to the coordinator's Claude session.</p>
          <div className="font-mono text-xs bg-[hsl(var(--surface-ink))] text-primary-foreground p-4 border border-foreground/10 space-y-1">
            <div>spawn_agent(repo, task, branch) → job_id</div>
            <div>list_jobs() → status[]</div>
            <div>get_job_output(job_id) → logs</div>
            <div>cancel_job(job_id) → bool</div>
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Branch rule</div>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">Every agent task runs on a branch. Never main.</p>
          <div className="space-y-1 font-mono text-sm">
            {["feat/", "fix/", "chore/", "mvp/"].map((b) => (
              <div key={b} className="text-primary">{b}<span className="text-foreground/40">your-task</span></div>
            ))}
          </div>
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 7 — Tier 3
  <SlideBase key={7}>
    <Eyebrow>Tier 3</Eyebrow>
    <SlideTitle>Task Agents — <span className="italic text-primary-glow">ephemeral</span> by design</SlideTitle>
    <SlideBody>
      <div className="space-y-4">
        <p className="text-sm text-primary-foreground/70">Isolated Claude Code sessions. Clone, branch, implement, test, commit, PR, publish, exit.</p>
        <SlidePre>{`gh pr create --title "<title>" --body "<what and why>" --base main
gh pr merge --squash --auto
npm version patch && npm publish --access public`}</SlidePre>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Agents that don't ship", verdict: "Not done", ok: false },
            { label: "Agents that PR + merge", verdict: "Done", ok: true },
            { label: "Agents that publish", verdict: "Done + deployed", ok: true },
          ].map((c) => (
            <div key={c.label} className={`p-4 border ${c.ok ? "border-primary-glow/40" : "border-destructive/40"}`}>
              <div className={`font-mono text-xs mb-2 ${c.ok ? "text-primary-glow" : "text-destructive"}`}>{c.verdict}</div>
              <div className="text-xs text-primary-foreground/60">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 8 — Prompt Trick
  <SlideBase key={8} dark={false}>
    <Eyebrow dark={false}>The Prompt Trick</Eyebrow>
    <SlideTitle dark={false}>Zero credentials <span className="italic text-accent-blue">in code.</span></SlideTitle>
    <SlideBody dark={false}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-foreground/70 mb-4">Spawn a Claude subprocess with the right <span className="font-mono text-foreground">cwd</span>. It inherits project-scoped MCPs.</p>
          <div className="font-mono text-xs bg-[hsl(var(--surface-ink))] text-primary-foreground p-4 border border-foreground/10">
            {`spawnSync('claude', [\n  '--print',\n  '--dangerously-skip-permissions',\n  '-p', prompt\n], {\n  cwd: '/your/project',\n  env: { CLAUDE_CODE_OAUTH_TOKEN: token },\n})`}
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">What stays out of code</div>
          {["SMTP passwords", "Slack bot tokens", "Database credentials", "API keys", "OAuth secrets"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-foreground/70">
              <span className="text-destructive font-mono text-xs">✗</span>
              <span>{item}</span>
            </div>
          ))}
          <div className="pt-4 border-t border-foreground/10">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="text-primary font-mono text-xs">✓</span>
              <span>CLAUDE_CODE_OAUTH_TOKEN — in env, not in code</span>
            </div>
          </div>
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 9 — Redis
  <SlideBase key={9}>
    <Eyebrow>Communication</Eyebrow>
    <SlideTitle>Redis as the nervous system.</SlideTitle>
    <SlideBody>
      <SlidePre>{`agent task completes
  → cc-agent publishes to cca:notify:money-brain
  → cc-tg receives notification
  → flushes to Telegram + appends to Redis log`}</SlidePre>
      <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs font-mono">
        {[
          { key: "cca:notify:<project>", desc: "agent completion → Telegram" },
          { key: "cca:chat:log:<project>", desc: "append-only exchange log" },
          { key: "whiteh:auto_send_queue", desc: "disclosure email queue" },
          { key: "whiteh:disclosures", desc: "discovered vulnerabilities" },
        ].map((r) => (
          <div key={r.key} className="border border-primary-foreground/10 p-3">
            <div className="text-primary-glow mb-1 break-all">{r.key}</div>
            <div className="text-primary-foreground/50">{r.desc}</div>
          </div>
        ))}
      </div>
    </SlideBody>
  </SlideBase>,

  // 10 — Philosophy
  <SlideBase key={10} dark={false}>
    <Eyebrow dark={false}>Design Philosophy</Eyebrow>
    <SlideTitle dark={false}>Six principles.</SlideTitle>
    <SlideBody dark={false}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
        {[
          { n: "01", title: "Intelligence over orchestration" },
          { n: "02", title: "Self-healing by default" },
          { n: "03", title: "Zero credentials in code" },
          { n: "04", title: "Ship as the definition of done" },
          { n: "05", title: "Composability through MCP" },
          { n: "06", title: "Ephemerality with persistence" },
        ].map((p) => (
          <div key={p.n} className="border border-foreground/10 p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">{p.n}</div>
            <div className="text-sm text-foreground/80 leading-snug">{p.title}</div>
          </div>
        ))}
      </div>
    </SlideBody>
  </SlideBase>,

  // 11 — Ship as done
  <SlideBase key={11}>
    <Eyebrow>The Definition of Done</Eyebrow>
    <SlideTitle><span className="italic text-primary-glow">Ship</span> as the definition of done.</SlideTitle>
    <SlideBody>
      <div className="space-y-6">
        <div className="grid grid-cols-4 gap-3 text-center text-xs font-mono">
          {[
            { step: "Implement", ok: true },
            { step: "PR", ok: true },
            { step: "Merge", ok: true },
            { step: "Publish", ok: true },
          ].map((s) => (
            <div key={s.step} className="border border-primary-glow/40 p-3 text-primary-glow">{s.step}</div>
          ))}
        </div>
        <p className="font-serif-display text-2xl md:text-3xl italic text-primary-foreground/90 leading-snug pt-4">
          "Agents that don't ship are not done. Terminal steps are part of every task definition."
        </p>
        <div className="font-mono text-xs text-primary-foreground/40 uppercase tracking-[0.22em]">— The branch rule</div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 12 — Live demo
  <SlideBase key={12} dark={false}>
    <Eyebrow dark={false}>Live Demo</Eyebrow>
    <SlideTitle dark={false}>One message → full stack.</SlideTitle>
    <SlideBody dark={false}>
      <div className="space-y-6">
        <p className="text-foreground/70">Paste this into Claude Code (or send via Telegram):</p>
        <div className="font-mono text-xs bg-[hsl(var(--surface-ink))] text-primary-foreground p-6 border border-foreground/10 text-base leading-relaxed">
          Spawn an agent to add a GitHub Actions CI workflow to my-first-agent-task repo. Branch, implement, PR, merge.
        </div>
        <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono text-foreground/60">
          {["Telegram msg", "Coordinator", "spawn_agent", "PR + merge", "Reply"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="border border-foreground/15 p-2 flex-1">{s}</div>
              {i < 4 && <span className="text-primary/50 shrink-0">→</span>}
            </div>
          ))}
        </div>
      </div>
    </SlideBody>
  </SlideBase>,

  // 13 — What this unlocks
  <SlideBase key={13}>
    <Eyebrow>What This Unlocks</Eyebrow>
    <SlideTitle>Agentic businesses. <span className="italic text-primary-glow">Always-on workforce.</span></SlideTitle>
    <SlideBody>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {[
          { title: "Autonomous dev cycles", body: "PRs ship while you sleep. No standup for routine work." },
          { title: "Composable MCPs", body: "New capability = new MCP server. The harness grows without rewrites." },
          { title: "Always-on infrastructure", body: "Crashes are events, not incidents. launchd restores the system." },
          { title: "Zero-credential publishing", body: "The full stack is publishable by default. No secrets in code." },
        ].map((item) => (
          <div key={item.title} className="border-l-2 border-primary-glow pl-5">
            <div className="font-serif-display text-xl text-primary-foreground mb-2">{item.title}</div>
            <p className="text-sm text-primary-foreground/65 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </SlideBody>
  </SlideBase>,

  // 14 — Distill and delegate
  <SlideBase key={14}>
    <Eyebrow>The Philosophy</Eyebrow>
    <SlideTitle>Distill and delegate.</SlideTitle>
    <SlideBody>
      <div className="max-w-2xl space-y-8">
        <p className="text-lg text-primary-foreground/80 leading-relaxed">
          Harness Engineering is not about prompts. It's about building the loop that makes
          prompts unnecessary.
        </p>
        <blockquote className="font-serif-display text-2xl md:text-3xl italic text-primary-foreground leading-snug border-l-2 border-primary-glow pl-8">
          "This is the infrastructure pattern, not the product. The product is whatever the agents build."
        </blockquote>
        <p className="font-mono text-sm text-primary-foreground/50">
          Your job shifts: from writing code to designing the instruction layer that writes the code.
        </p>
      </div>
    </SlideBody>
  </SlideBase>,

  // 15 — Q&A
  <SlideBase key={15}>
    <div className="text-center space-y-8">
      <div className="flex items-center justify-center gap-2.5 mb-8">
        <div className="w-9 h-9 border border-primary-foreground/30 flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-primary rotate-45" />
        </div>
      </div>
      <div className="font-serif-display text-5xl md:text-7xl font-light text-primary-foreground">Q&A</div>
      <p className="font-serif-display text-xl italic text-primary-foreground/70">What questions do you have?</p>
      <div className="pt-6 border-t border-primary-foreground/15 space-y-3">
        <div className="font-mono text-sm text-primary-glow">gonzih@gmail.com</div>
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50">
          <a href="https://github.com/Gonzih/cc-agent" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">cc-agent</a>
          <span className="text-primary-foreground/20">·</span>
          <a href="https://github.com/Gonzih/cc-tg" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">cc-tg</a>
          <span className="text-primary-foreground/20">·</span>
          <a href="https://gonzih.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">nexus-souls</a>
        </div>
      </div>
    </div>
  </SlideBase>,
];

const MetaHarnessTalk = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(TOTAL_SLIDES - 1, c + 1));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-[hsl(var(--surface-ink))] text-foreground"
      onKeyDown={handleKey}
      tabIndex={0}
      style={{ outline: "none" }}
    >
      {/* Top bar */}
      <div className="shrink-0 border-b border-primary-foreground/10 bg-[hsl(var(--surface-ink))]">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/meta-harness" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground/50 hover:text-primary-glow transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Meta-Harness
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/30">
            {String(current + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
          </span>
          <a
            href="mailto:gonzih@gmail.com"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50 hover:text-primary-glow transition-colors"
          >
            <Mail className="w-3 h-3" /> gonzih@gmail.com
          </a>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Slide thumbnails sidebar */}
        <div className="hidden lg:flex flex-col w-20 shrink-0 border-r border-primary-foreground/10 bg-[hsl(var(--surface-ink))] py-4 gap-1.5 overflow-y-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`mx-auto w-12 h-7 text-[9px] font-mono transition-colors border ${
                i === current
                  ? "border-primary-glow text-primary-glow bg-primary-glow/10"
                  : "border-primary-foreground/10 text-primary-foreground/30 hover:border-primary-foreground/30 hover:text-primary-foreground/60"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        {/* Main slide */}
        <div className="flex-1 flex flex-col">
          {/* Slide canvas — 16:9 aspect in a container */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-5xl" style={{ aspectRatio: "16/9", position: "relative" }}>
              <div className="absolute inset-0 border border-primary-foreground/10">
                <div className="relative w-full h-full overflow-hidden">
                  {slides.map((slide, i) => (
                    <SlideWrapper key={i} index={i} active={current}>
                      {slide}
                    </SlideWrapper>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="shrink-0 border-t border-primary-foreground/10 px-6 py-4 flex items-center justify-between bg-[hsl(var(--surface-ink))]">
            <button
              onClick={prev}
              disabled={current === 0}
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 hover:border-primary-foreground/40 hover:text-primary-foreground/90 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-3 h-3" /> Prev
            </button>

            {/* Progress dots */}
            <div className="hidden md:flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current ? "w-5 h-1.5 bg-primary-glow" : "w-1.5 h-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current === TOTAL_SLIDES - 1}
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 hover:border-primary-foreground/40 hover:text-primary-foreground/90 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Next <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaHarnessTalk;
