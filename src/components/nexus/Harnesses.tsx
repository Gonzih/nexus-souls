import { ArrowUpRight, Terminal, Bot, LayoutGrid } from "lucide-react";
import { Section, FadeIn } from "./Section";

const harnesses = [
  {
    name: "cc-agent",
    npm: "@gonzih/cc-agent",
    icon: Terminal,
    desc: "MCP server for spawning Claude Code subagents. Works with any MCP-compatible client — Claude Desktop, Cursor, cc-tg, or your own integration. The coordination backbone — spawn agents, manage jobs, monitor cost, orchestrate multi-step tasks across any repo.",
    link: "https://github.com/Gonzih/cc-agent",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-agent",
  },
  {
    name: "cc-tg",
    npm: "@gonzih/cc-tg",
    icon: Bot,
    desc: "Telegram ↔ Claude Code bridge. One npx command turns any project directory into a fully autonomous AI operator reachable from your phone. Ships with the Void Operator programming pre-seeded.",
    link: "https://github.com/Gonzih/cc-tg",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-tg",
  },
  {
    name: "cc-agent-ui",
    npm: "@gonzih/cc-agent-ui",
    icon: LayoutGrid,
    desc: "Live canvas UI for cc-agent. Infinite scrollable grid of agent terminals — watch your agent fleet execute in real time. Runs in Docker, zero config.",
    link: "https://github.com/Gonzih/cc-agent-ui",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-agent-ui",
  },
];

export const Harnesses = () => (
  <Section
    id="harnesses"
    eyebrow="The Harness Layer"
    title="One command. Your project becomes an AI operator."
  >
    <p className="text-sm text-muted-foreground max-w-2xl mb-12 -mt-6 leading-relaxed">
      cc-agent, cc-tg, and cc-agent-ui form the meta-harness family — the human interface layer
      that sits above Nexus infrastructure. Open source. npm-published. Run anywhere.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {harnesses.map((h, i) => {
        const Icon = h.icon;
        return (
          <FadeIn key={h.name} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-sm text-foreground">{h.name}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground">{h.npm}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-5">{h.desc}</p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-muted-foreground/30">·</span>
                <a
                  href={h.npm_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary hover:underline font-mono"
                >
                  npm <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>

    <FadeIn>
      <div className="glass rounded-2xl p-6 font-mono text-sm">
        <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">quickstart</div>
        <div className="space-y-2">
          <div><span className="text-primary/60"># 1.</span> <span className="text-muted-foreground">Get a bot token from @BotFather on Telegram</span></div>
          <div><span className="text-primary/60"># 2.</span> <span className="text-muted-foreground">Get your Claude token</span></div>
          <div className="mt-3 text-foreground">TELEGRAM_BOT_TOKEN=<span className="text-accent">xxx</span> CLAUDE_CODE_TOKEN=<span className="text-accent">yyy</span> npx <span className="text-primary">@gonzih/cc-tg</span></div>
          <div className="text-muted-foreground/50 text-xs mt-2"># Claude Code is now live in your project. Talk to it from Telegram.</div>
        </div>
      </div>
    </FadeIn>
  </Section>
);
