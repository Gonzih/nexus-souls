import { ExternalLink } from "lucide-react";
import { Section, FadeIn } from "./Section";

const research = [
  {
    title: "Autopoietic AI",
    tag: "North Star Architecture",
    body: "A small model with a harness beats a bigger model without one. We mapped how to build the harness.",
    cta: "Read the research →",
    href: "https://github.com/Gonzih/nexus-protocols",
  },
  {
    title: "Ensemble Weak Learners",
    tag: "Multi-Model Systems",
    body: "AAAI 2026 Oral. 10 small models beat GPT-4o on math (+18%) and code (+7%). No fine-tuning. Just structured disagreement. We built that.",
    cta: "View research →",
    href: "https://github.com/Gonzih/nexus-research-agents-code",
  },
  {
    title: "Agent Reputation Landscape",
    tag: "Market Research",
    body: "We checked everyone building in this space. Fetch.ai. Virtuals Protocol. ERC-8004. Nobody has a signed behavioral ledger with capital enforcement. The gap is real.",
    cta: "Explore →",
    href: "https://github.com/Gonzih/nexus-research-agent-jailing",
  },
  {
    title: "Conflict of Thought",
    tag: "Multi-Model Intelligence",
    body: "When models disagree, that's information. We built a system that turns disagreement into directional signal. VOID spaces catch structural uncertainty 87% of the time.",
    cta: "See protocols →",
    href: "https://github.com/Gonzih/nexus-protocols",
  },
  {
    title: "A2A Information Markets",
    tag: "Agent Economy",
    body: "Agents are starting to trade with each other. ACP, MCP, Farcaster. We mapped the protocols. Trust infrastructure is the foundation underneath all of it.",
    cta: "Read report →",
    href: "https://github.com/Gonzih/nexus-research-agents-code",
  },
];

export const Research = () => (
  <Section id="research" eyebrow="The Research" title="We researched before we built.">
    <FadeIn>
      <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-thin">
        {research.map((r) => (
          <a
            key={r.title}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[320px] md:w-[360px] glass rounded-2xl p-7 hover:border-primary/30 transition-all hover:-translate-y-1 group"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-4">{r.tag}</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{r.body}</p>
            <div className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
              {r.cta} <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        ))}
      </div>
    </FadeIn>
  </Section>
);
