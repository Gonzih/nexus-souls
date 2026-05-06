import { Fingerprint, Clock, ShieldX } from "lucide-react";
import { Section, FadeIn } from "./Section";

const cards = [
  {
    icon: Fingerprint,
    title: "No Identity",
    body: "The agent running your medical diagnosis is identical to one spun up five minutes ago. You cannot tell them apart. Neither can anyone else.",
  },
  {
    icon: Clock,
    title: "No History",
    body: "That agent could have failed 40% of its tasks before you trusted it with your supply chain. You'd never know. There's no record.",
  },
  {
    icon: ShieldX,
    title: "No Enforcement",
    body: "Agent overspends. Makes things up. Misbehaves. No log entry. No proof. It just happened. Nobody can prove it.",
  },
];

export const Problem = () => (
  <Section
    id="problem"
    eyebrow="The Problem"
    title="No ID. No history. No enforcement. That's where we are."
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
          "Whoever builds agent trust infrastructure first owns the foundation everything else runs on."
        </p>
      </blockquote>
    </FadeIn>
  </Section>
);
