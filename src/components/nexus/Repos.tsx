import { ArrowUpRight } from "lucide-react";
import { Section, FadeIn } from "./Section";

type Lang = "Rust" | "TypeScript" | "Markdown" | "Research";

const repos: { name: string; desc: string; lang: Lang }[] = [
  { name: "cc-agent", desc: "MCP server for spawning Claude Code subagents — coordinator backbone", lang: "TypeScript" },
  { name: "cc-tg", desc: "Telegram ↔ Claude Code bridge with Void Operator programming pre-seeded", lang: "TypeScript" },
  { name: "cc-agent-ui", desc: "Live canvas UI — infinite scrollable grid of agent terminals", lang: "TypeScript" },
  { name: "nexus-convergence-mcp", desc: "MCP server — converge_query, evidence ladder, compliance, disagreements", lang: "TypeScript" },
  { name: "nexus-convergence-service", desc: "7-step multi-LLM convergence pipeline orchestrator", lang: "TypeScript" },
  { name: "nexus-compliance-service", desc: "Runtime policy enforcement — HIPAA, EU AI Act, NIST, Custom", lang: "TypeScript" },
  { name: "nexus-consensus-service", desc: "Semantic similarity, inversion detection, truth stability scoring", lang: "TypeScript" },
  { name: "nexus-evidence-service", desc: "Immutable Evidence Ladder — hash-linked append-only audit trail", lang: "TypeScript" },
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
  Rust: "text-accent bg-accent/10 border-accent/20",
  TypeScript: "text-primary bg-primary/10 border-primary/20",
  Markdown: "text-muted-foreground bg-white/5 border-white/10",
  Research: "text-foreground/80 bg-white/5 border-white/10",
};

export const Repos = () => (
  <Section id="repos" eyebrow="The Code" title="29 open source repositories. All public.">
    <p className="font-mono text-sm text-muted-foreground mb-10 -mt-8">github.com/Gonzih</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((r, i) => (
        <FadeIn key={r.name} delay={Math.min(i * 0.03, 0.4)}>
          <a
            href={`https://github.com/Gonzih/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass rounded-xl p-5 repo-card-hover group h-full"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-mono text-sm text-primary font-semibold leading-tight break-all">
                {r.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
            <span className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${langStyle[r.lang]}`}>
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
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/[0.06] hover:border-primary/30 transition-all font-medium"
      >
        View all on GitHub →
      </a>
    </div>
  </Section>
);
