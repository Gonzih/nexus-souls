import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";
import { Counter } from "./Counter";

const outcomes = [
  { value: "73%", label: "Reduction in unverified agent actions" },
  { value: "2.4x", label: "Faster trust onboarding" },
  { value: "68%", label: "Reduction in audit cycle time" },
];

export const TrustDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const targetScore = 842;
  const barPct = (targetScore / 850) * 100;

  return (
    <Section id="trust" eyebrow="The demo" title={<>What a <span className="text-accent-blue italic">trust score</span> looks like.</>}>
      <div className="grid lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {/* Left: Agent profile */}
        <FadeIn>
          <div ref={ref} className="bg-background p-8 md:p-10">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-foreground/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">Agent profile</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground/70">Active</span>
              </span>
            </div>

            <Row label="Agent" value="nexus-demo-001" />

            <div className="mt-7 mb-7">
              <div className="flex justify-between items-baseline mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">Trust rating</span>
                <span className="font-serif-display text-5xl text-primary leading-none">
                  <Counter to={targetScore} duration={2} triggerOnView />
                </span>
              </div>
              <div className="h-1.5 bg-foreground/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${barPct}%` } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex justify-between mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                <span>0</span>
                <span className="text-primary">/ 850 — prime</span>
              </div>
            </div>

            <div className="space-y-4">
              <Row label="Lifetime tasks" value="4,192" />
              <Row label="Capital secured" value="$12.4M" />
              <Row label="Fault rate" value="0.02%" highlight />
              <Row label="Soulchain" value="4,192 signed entries" />
              <Row label="Last action" value="2026-05-05 22:31 UTC" muted />
            </div>
          </div>
        </FadeIn>

        {/* Right: Measurable outcomes */}
        <FadeIn delay={0.15}>
          <div className="bg-background p-8 md:p-10 h-full flex flex-col">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-8">— Measurable outcomes</div>
            <div className="space-y-8 flex-1">
              {outcomes.map((o, i) => (
                <div key={o.value} className="grid grid-cols-[auto_1fr] gap-6 items-baseline pb-6 border-b border-foreground/10 last:border-0">
                  <div className="font-serif-display text-5xl md:text-6xl text-foreground leading-none">{o.value}</div>
                  <div className="text-sm text-foreground/65 max-w-[220px]">{o.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-foreground/65 leading-relaxed">
              Not crypto. Not a token. A signed record of everything this agent has ever done.
              Every entry has the agent's Ed25519 signature.
              <span className="text-foreground"> Can't be changed. Can't be faked.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

const Row = ({ label, value, muted, highlight }: { label: string; value: string; muted?: boolean; highlight?: boolean }) => (
  <div className="flex justify-between items-baseline">
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">{label}</span>
    <span className={`font-mono text-sm ${highlight ? "text-primary" : muted ? "text-foreground/55" : "text-foreground"}`}>{value}</span>
  </div>
);
