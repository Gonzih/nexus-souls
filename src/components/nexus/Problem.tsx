import { Fingerprint, Clock, ShieldX } from "lucide-react";
import { Section, FadeIn } from "./Section";

const cards = [
  {
    icon: Fingerprint,
    n: "01",
    title: "No Identity",
    body: "The agent running your medical diagnosis is identical to one spun up five minutes ago. You cannot tell them apart. Neither can anyone else.",
  },
  {
    icon: Clock,
    n: "02",
    title: "No History",
    body: "That agent could have failed 40% of its tasks before you trusted it with your supply chain. You'd never know. There's no record.",
  },
  {
    icon: ShieldX,
    n: "03",
    title: "No Enforcement",
    body: "Agent overspends. Makes things up. Misbehaves. No log entry. No proof. It just happened. Nobody can prove it.",
  },
];

export const Problem = () => (
  <Section
    id="problem"
    eyebrow="The problem"
    eyebrowClassName="text-[11px] font-semibold tracking-[0.18em] bg-foreground text-background px-4 py-2 inline-block mb-8"
    className="bg-muted"
    title={<>No ID. No history. <span className="text-accent-blue italic">No enforcement.</span></>}
  >
    <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-16">
      {cards.map((c, i) => (
        <FadeIn key={c.title} delay={i * 0.1}>
          <div className="bg-background p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 border border-foreground/30 flex items-center justify-center">
                <c.icon className="w-4 h-4 text-primary" strokeWidth={1.4} />
              </div>
              <span className="font-mono text-xs text-foreground/40">{c.n}</span>
            </div>
            <h3 className="font-serif-display text-2xl font-normal mb-3 text-foreground">{c.title}</h3>
            <p className="text-sm text-foreground/65 leading-relaxed">{c.body}</p>
          </div>
        </FadeIn>
      ))}
    </div>
    <FadeIn delay={0.3}>
      <blockquote className="border-l-2 border-primary pl-6 py-2 max-w-3xl">
        <p className="font-serif-display text-2xl md:text-3xl font-light leading-snug text-foreground italic">
          "Whoever builds agent trust infrastructure first owns the foundation everything else runs on."
        </p>
      </blockquote>
    </FadeIn>
  </Section>
);
