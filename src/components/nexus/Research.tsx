import { ArrowUpRight } from "lucide-react";
import { Section, FadeIn } from "./Section";

const research = [
  { title: "Autopoietic AI", tag: "North Star Architecture", body: "A small model with a harness beats a bigger model without one. We mapped how to build the harness.", href: "https://github.com/Gonzih/nexus-protocols/blob/main/NEXUS.md" },
  { title: "Ensemble Weak Learners", tag: "Multi-Model Systems", body: "AAAI 2026 Oral. 10 small models beat GPT-4o on math (+18%) and code (+7%). No fine-tuning. Just structured disagreement.", href: "https://github.com/Gonzih/nexus-research-agents-code/blob/main/analysis/cline-architecture.md" },
  { title: "Agent Reputation Landscape", tag: "Market Research", body: "Fetch.ai. Virtuals Protocol. ERC-8004. Nobody has a signed behavioral ledger with capital enforcement. The gap is real.", href: "https://github.com/Gonzih/nexus-research-agent-jailing/blob/main/claude-code/CLAUDE_CODE_JAIL_FINDINGS.md" },
  { title: "Conflict of Thought", tag: "Multi-Model Intelligence", body: "When models disagree, that's information. VOID spaces catch structural uncertainty 87% of the time.", href: "https://github.com/Gonzih/nexus-protocols/blob/main/CONFLICT_OF_THOUGHT.md" },
  { title: "A2A Information Markets", tag: "Agent Economy", body: "Agents are starting to trade with each other. ACP, MCP, Farcaster. Trust infrastructure is the foundation underneath.", href: "https://github.com/Gonzih/nexus-research-agents-code/blob/main/observations/openclaw-behavior.md" },
  { title: "Geometry of Language", tag: "Theoretical Foundations", body: "Language intelligence as topology. A model that understands preserves invariants in state space. Adversarial inputs are boundary violations — the structure breaks before the meaning does.", href: "https://github.com/Gonzih/nexus-research/blob/main/geometry/geometry-of-language.md" },
  { title: "Adversarial Robustness", tag: "Structural Integrity", body: "A cell maintains its identity under chemical attack by preserving its membrane. An agent should do the same. Robustness isn't hardening — it's structural coherence under hostile inputs.", href: "https://github.com/Gonzih/nexus-research/blob/main/geometry/geometry-of-language.md" },
  { title: "Reasoning Provenance", tag: "Audit Infrastructure", body: "When an agent reaches a conclusion, every prior step is accountable. We track what influenced what — not just the output, but the reasoning chain that produced it.", href: "https://github.com/Gonzih/nexus-research" },
];

export const Research = () => (
  <Section id="research" eyebrow="The research" title={<>Theory <span className="text-accent-blue italic">first.</span> Infrastructure second.</>}>
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
        {research.map((r) => (
          <a
            key={r.title}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-7 group hover:bg-secondary/50 transition-colors flex flex-col"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-6">{r.tag}</div>
            <h3 className="font-serif-display text-2xl mb-4 text-foreground leading-tight">{r.title}</h3>
            <p className="text-sm text-foreground/65 leading-relaxed mb-8">{r.body}</p>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
              Read <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </FadeIn>
  </Section>
);
