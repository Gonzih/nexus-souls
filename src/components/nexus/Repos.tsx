import { ArrowUpRight } from "lucide-react";
import { Section, FadeIn } from "./Section";

type Lang = "Rust" | "TypeScript" | "Markdown" | "Research";

const repos: { name: string; desc: string; lang: Lang }[] = [
  { name: "cc-agent", desc: "MCP server for spawning Claude Code subagents", lang: "TypeScript" },
  { name: "cc-tg", desc: "Telegram ↔ Claude Code bridge with Void Operator", lang: "TypeScript" },
  { name: "cc-agent-ui", desc: "Live canvas — infinite scrollable grid of agent terminals", lang: "TypeScript" },
  { name: "nexus-convergence-mcp", desc: "MCP — converge_query, evidence ladder, compliance", lang: "TypeScript" },
  { name: "nexus-convergence-service", desc: "7-step multi-LLM convergence pipeline orchestrator", lang: "TypeScript" },
  { name: "nexus-compliance-service", desc: "Runtime policy enforcement — HIPAA, EU AI Act, NIST", lang: "TypeScript" },
  { name: "nexus-consensus-service", desc: "Semantic similarity, inversion, truth stability", lang: "TypeScript" },
  { name: "nexus-evidence-service", desc: "Hash-linked append-only audit trail", lang: "TypeScript" },
  { name: "nexus-soul-core", desc: "Agent loop, provider routing, tool registry", lang: "Rust" },
  { name: "nexus-soul-coder", desc: "Coding tools for autonomous agents", lang: "Rust" },
  { name: "nexus-id-service", desc: "Cryptographic identity + soulchain ledger", lang: "Rust" },
  { name: "nexus-agent-jail", desc: "Sandboxed agent execution + observers", lang: "Rust" },
  { name: "nexus-mock-llm-service", desc: "LLM simulation for deterministic testing", lang: "Rust" },
  { name: "nexus-shepherd-service", desc: "Agent lifecycle, sessions, A2A spawning", lang: "TypeScript" },
  { name: "nexus-shadow-service", desc: "Capital enforcement, balance tracking", lang: "TypeScript" },
  { name: "nexus-soul-log-service", desc: "Immutable event ingestion + query", lang: "TypeScript" },
  { name: "nexus-trading-service", desc: "Wallets, order execution, Polymarket", lang: "TypeScript" },
  { name: "nexus-data-service", desc: "Watchlists, alerts, market data", lang: "TypeScript" },
  { name: "nexus-mcp", desc: "MCP server — Claude Code, Cursor integration", lang: "TypeScript" },
  { name: "nexus", desc: "Core product binary — nexus-agent", lang: "Rust" },
  { name: "nexus-protocols", desc: "Intelligence frameworks + operating protocols", lang: "Markdown" },
  { name: "nexus-research-agents-code", desc: "Ensemble models, agent code research", lang: "Research" },
  { name: "nexus-research-agent-jailing", desc: "Agent sandboxing + security research", lang: "Research" },
  { name: "nexus-soul-gateways", desc: "Multi-provider gateway layer", lang: "Rust" },
  { name: "nexus-soul-terminal", desc: "Open source terminal interface", lang: "TypeScript" },
  { name: "nexus-voice-service", desc: "Voice interaction proof of concept", lang: "TypeScript" },
  { name: "nexus-soul-google-tools", desc: "Google tools integration", lang: "Rust" },
  { name: "nexus-research-finetune-llms", desc: "LLM fine-tuning research", lang: "Research" },
  { name: "nexus-research-hw", desc: "Hardware research", lang: "Research" },
];

const langStyle: Record<Lang, string> = {
  Rust: "text-primary border-primary/40",
  TypeScript: "text-foreground border-foreground/30",
  Markdown: "text-foreground/60 border-foreground/20",
  Research: "text-foreground/60 border-foreground/20",
};

export const Repos = () => (
  <Section id="repos" eyebrow="The code" title={<>29 repositories. <span className="text-accent-blue italic">All public.</span></>}>
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/50 mb-10 -mt-6">github.com/Gonzih</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
      {repos.map((r, i) => (
        <FadeIn key={r.name} delay={Math.min(i * 0.02, 0.3)}>
          <a
            href={`https://github.com/Gonzih/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-background p-5 repo-card-hover group h-full"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-mono text-sm text-primary font-semibold leading-tight break-all">{r.name}</h3>
              <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors shrink-0" />
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed mb-4">{r.desc}</p>
            <span className={`inline-block font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 border ${langStyle[r.lang]}`}>
              {r.lang}
            </span>
          </a>
        </FadeIn>
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="https://github.com/Gonzih?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 hover:border-primary hover:text-primary transition-colors font-mono text-xs uppercase tracking-[0.18em]"
      >
        View all on GitHub <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  </Section>
);
