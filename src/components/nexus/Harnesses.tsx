import { ArrowUpRight, Terminal, Bot, LayoutGrid } from "lucide-react";
import { Section, FadeIn } from "./Section";

const harnesses = [
  {
    name: "cc-agent",
    npm: "@gonzih/cc-agent",
    icon: Terminal,
    desc: "Spawns AI agents across Claude, OpenAI, Gemini, Aider. Manages jobs. Tracks cost. Works with any MCP client.",
    link: "https://github.com/Gonzih/cc-agent",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-agent",
  },
  {
    name: "cc-tg",
    npm: "@gonzih/cc-tg",
    icon: Bot,
    desc: "Telegram ↔ Claude Code. One npx command. Your phone is the control panel. Ships with Void Operator pre-loaded.",
    link: "https://github.com/Gonzih/cc-tg",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-tg",
  },
  {
    name: "cc-agent-ui",
    npm: "@gonzih/cc-agent-ui",
    icon: LayoutGrid,
    desc: "Live grid of agent terminals. Watch them run. Docker. Zero config.",
    link: "https://github.com/Gonzih/cc-agent-ui",
    npm_link: "https://www.npmjs.com/package/@gonzih/cc-agent-ui",
  },
];

export const Harnesses = () => (
  <Section
    id="harnesses"
    eyebrow="The harness layer"
    title={<>One command. Your project <span className="text-accent-blue italic">runs agents.</span></>}
  >
    <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-10">
      {harnesses.map((h, i) => {
        const Icon = h.icon;
        return (
          <FadeIn key={h.name} delay={i * 0.1}>
            <div className="bg-background p-7 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 border border-foreground/25 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.4} />
                </div>
                <span className="font-mono text-[10px] text-foreground/40">/0{i+1}</span>
              </div>
              <h3 className="font-serif-display text-2xl mb-1 text-foreground">{h.name}</h3>
              <span className="font-mono text-[10px] text-foreground/50 mb-4">{h.npm}</span>
              <p className="text-sm text-foreground/65 leading-relaxed flex-1 mb-6">{h.desc}</p>
              <div className="flex gap-4 mt-auto pt-4 border-t border-foreground/10">
                <a href={h.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-primary hover:underline">
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href={h.npm_link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-foreground/55 hover:text-primary">
                  npm <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>

    <FadeIn>
      <div className="panel-ink p-7 font-mono text-sm">
        <div className="text-[10px] text-primary-foreground/55 mb-4 uppercase tracking-[0.22em]">quickstart</div>
        <div className="space-y-2">
          <div><span className="text-primary-glow/70"># 1.</span> <span className="text-primary-foreground/65">Get a bot token from @BotFather on Telegram</span></div>
          <div><span className="text-primary-glow/70"># 2.</span> <span className="text-primary-foreground/65">Get your Claude token</span></div>
          <div className="mt-3 text-primary-foreground">TELEGRAM_BOT_TOKEN=<span className="text-primary-glow">xxx</span> CLAUDE_CODE_TOKEN=<span className="text-primary-glow">yyy</span> npx <span className="text-primary-glow">@gonzih/cc-tg</span></div>
          <div className="text-primary-foreground/40 text-xs mt-2"># Claude Code is live. Talk to it from Telegram.</div>
        </div>
      </div>
    </FadeIn>
  </Section>
);
