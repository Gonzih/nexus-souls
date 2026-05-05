import { Fingerprint, Clock, ShieldX } from "lucide-react";
import { Section, FadeIn } from "./Section";

const cards = [
  {
    icon: Fingerprint,
    title: "No Identity",
    body: "An AI agent running a medical diagnosis has the same identity as one you spun up five minutes ago. Zero provenance. Zero accountability.",
  },
  {
    icon: Clock,
    title: "No History",
    body: "You can't know if an agent has failed 40% of tasks before trusting it with your supply chain. There is no credit bureau for machines.",
  },
  {
    icon: ShieldX,
    title: "No Enforcement",
    body: "When an agent overspends, misbehaves, or produces unverifiable output — there is no ledger entry. It just... happened. And no one can prove it.",
  },
];

export const Problem = () => (
  <Section
    id="problem"
    eyebrow="The Problem"
    title="Humans have FICO. Businesses have Dun & Bradstreet. AI agents have nothing."
  >
    <div className="grid md:grid-cols-3 gap-5 mb-14">
      {cards.map((c, i) => (
        <FadeIn key={c.title} delay={i * 0.1}>
          <div className="glass rounded-2xl p-7 h-full hover:bg-white/[0.04] transition-colors">
            <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.3}>
      <blockquote className="border-l-2 border-primary pl-6 py-2 max-w-3xl">
        <p className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-snug">
          "The first company to solve agent trust at the infrastructure level owns the rails the entire
          autonomous economy runs on."
        </p>
      </blockquote>
    </FadeIn>
  </Section>
);
