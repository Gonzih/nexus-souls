import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";
import { Database, Workflow, Users, ShieldCheck } from "lucide-react";

const services = [
  { name: "id-service", port: ":8080", desc: "Identity Registry + Soulchain" },
  { name: "shadow", port: ":8085", desc: "Capital / Balance Enforcement" },
  { name: "shepherd", port: ":8084", desc: "Agent Lifecycle + Orchestration" },
  { name: "soul-log", port: ":8086", desc: "Immutable Event Ledger" },
  { name: "agent-jail", port: ":8082", desc: "Sandboxed Execution" },
  { name: "nexus-mcp", port: ":8089", desc: "MCP Interface (Claude, Cursor)" },
  { name: "convergence", port: ":8090", desc: "Multi-LLM 7-step Pipeline" },
  { name: "consensus", port: ":8091", desc: "Semantic Agreement Scoring" },
  { name: "compliance", port: ":8092", desc: "HIPAA / EU AI Act Policy" },
];

const capabilities = [
  { icon: Database, title: "Cryptographic Identity", body: "Ed25519 keypair. Registered, signed, can't be faked. Soulchain records every action — append-only, hash-linked." },
  { icon: Workflow, title: "Trust Score 0–850", body: "Every task, fault, dollar — signed and recorded. That history becomes a score. Good agents earn resources." },
  { icon: Users, title: "Capital Enforcement", body: "Agents post collateral before they run. Overspend and the contract stops them. Every cent tracked live." },
  { icon: ShieldCheck, title: "Multi-Model Consensus", body: "10 small open models beat GPT-4 when they disagree. We built that system. Disagreement is signal." },
];

export const Architecture = () => (
  <Section id="architecture" eyebrow="The architecture" title={<>What we <span className="text-accent-blue italic">built.</span></>} variant="ink">
    <div className="grid lg:grid-cols-5 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
      {/* Service mesh */}
      <FadeIn>
        <div className="lg:col-span-2 bg-[hsl(var(--surface-ink))] p-7 font-mono text-sm h-full">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary-foreground/10">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-primary-glow" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 ml-2">nexus.mesh</span>
          </div>
          <div className="space-y-3">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary-glow mt-0.5">▸</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-primary-foreground font-semibold">{s.name}</span>
                    <span className="text-primary-foreground/40 text-xs">{s.port}</span>
                  </div>
                  <div className="text-primary-foreground/50 text-xs mt-0.5">← {s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Capabilities — 2x2 inside ink panel */}
      <div className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-primary-foreground/10">
        {capabilities.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <div className="bg-[hsl(var(--surface-ink))] p-7 h-full">
              <div className="w-10 h-10 border border-primary-glow/40 rounded-full flex items-center justify-center mb-5">
                <c.icon className="w-4 h-4 text-primary-glow" strokeWidth={1.4} />
              </div>
              <h3 className="font-serif-display text-xl mb-2 text-primary-foreground">{c.title}</h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">{c.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>

    <div className="mt-10 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/45">
      <span>Built for autonomy.</span>
      <span>Designed for trust.</span>
    </div>
  </Section>
);
