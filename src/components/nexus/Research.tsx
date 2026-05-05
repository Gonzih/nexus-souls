import { ExternalLink } from "lucide-react";
import { Section, FadeIn } from "./Section";

const research = [
  {
    title: "Autopoietic AI",
    tag: "North Star Architecture",
    body: "Agents that synthesize their own constraint layers — harnesses that fix illegal actions automatically. A smaller model + harness beats a larger model without one. We mapped the full implementation path.",
    cta: "Read the research →",
    href: "https://github.com/Gonzih/nexus-protocols",
  },
  {
    title: "Ensemble Weak Learners",
    tag: "Multi-Model Systems",
    body: "The Avengers (AAAI 2026 Oral): 10 open-source ~7B models surpass GPT-4o on math (+18%) and code (+7%) with zero fine-tuning. We benchmarked this pattern and mapped it to our agent stack.",
    cta: "View research →",
    href: "https://github.com/Gonzih/nexus-research-agents-code",
  },
  {
    title: "Agent Reputation Landscape",
    tag: "Market Research",
    body: "We surveyed the entire emerging space — from Fetch.ai to Virtuals Protocol to ERC-8004. Nobody has an append-only signed behavioral ledger combined with capital enforcement. The gap is real.",
    cta: "Explore →",
    href: "https://github.com/Gonzih/nexus-research-agent-jailing",
  },
  {
    title: "Conflict of Thought",
    tag: "Multi-Model Intelligence",
    body: "Disagreement between models isn't noise — it's compressed energy. We built a framework that maps friction points between AI lenses and converts them into directional signal. VOID spaces identify structural uncertainty in 87% of cases.",
    cta: "See protocols →",
    href: "https://github.com/Gonzih/nexus-protocols",
  },
  {
    title: "A2A Information Markets",
    tag: "Agent Economy",
    body: "Agent-to-agent commerce is forming. ACP, MCP, Farcaster rails. We mapped the protocols, the primitives, and where trust infrastructure becomes the necessary layer underneath it all.",
    cta: "Read report →",
    href: "https://github.com/Gonzih/nexus-research-agents-code",
  },
];

export const Research = () => (
  <Section id="research" eyebrow="The Research" title="We didn't guess. We researched.">
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
