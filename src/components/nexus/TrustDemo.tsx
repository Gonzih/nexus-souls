import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";
import { Counter } from "./Counter";

export const TrustDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const targetScore = 842;
  const barPct = (targetScore / 850) * 100;

  return (
    <Section id="trust" eyebrow="The Demo" title="What a trust score looks like">
      <FadeIn>
        <div ref={ref} className="max-w-[480px] mx-auto glass-strong rounded-2xl p-7 font-mono text-sm shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Agent Profile</span>
            <span className="flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/80">Active</span>
            </span>
          </div>

          <div className="space-y-4 text-xs md:text-sm">
            <Row label="AGENT" value="nexus-demo-001" valueClass="text-foreground" />

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Trust Rating</span>
                <span className="text-accent font-bold text-lg">
                  <Counter to={targetScore} duration={2} triggerOnView />
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${barPct}%` } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-accent/70 shadow-[0_0_12px_hsl(var(--accent)/0.5)]"
                />
              </div>
              <div className="flex justify-end mt-1.5">
                <span className="text-[10px] uppercase tracking-wider text-accent font-bold">PRIME</span>
              </div>
            </div>

            <Row label="Lifetime Tasks" value="4,192" />
            <Row label="Capital Secured" value="$12.4M" />
            <Row label="Fault Rate" value="0.02%" valueClass="text-primary" />
            <Row label="Soulchain" value="4,192 signed entries" />
            <Row label="Last Action" value="2026-05-05 22:31 UTC" valueClass="text-muted-foreground" />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="max-w-2xl mx-auto text-center text-sm md:text-base text-muted-foreground leading-relaxed mt-10">
          Not crypto. Not a token. Not a blockchain. A signed record of everything this agent has ever done.
          Every entry has the agent's Ed25519 signature. Every entry links to the one before it.{" "}
          <span className="text-foreground/80">Can't be changed. Can't be faked.</span>
        </p>
      </FadeIn>
    </Section>
  );
};

const Row = ({ label, value, valueClass = "text-foreground/90" }: { label: string; value: string; valueClass?: string }) => (
  <div className="flex justify-between items-baseline">
    <span className="text-muted-foreground">{label}</span>
    <span className={valueClass}>{value}</span>
  </div>
);
