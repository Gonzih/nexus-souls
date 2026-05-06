import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";

const services = [
  { name: "id-service", port: ":8080", desc: "Identity Registry + Soulchain" },
  { name: "shadow", port: ":8085", desc: "Capital / Balance Enforcement" },
  { name: "shepherd", port: ":8084", desc: "Agent Lifecycle + Orchestration" },
  { name: "soul-log", port: ":8086", desc: "Immutable Event Ledger" },
  { name: "agent-jail", port: ":8082", desc: "Sandboxed Execution" },
  { name: "nexus-mcp", port: ":8089", desc: "MCP Interface (Claude, Cursor)" },
  { name: "convergence", port: ":8090", desc: "Multi-LLM Fan-out + 7-step Pipeline" },
  { name: "consensus", port: ":8091", desc: "Semantic Similarity + Agreement Scoring" },
  { name: "compliance", port: ":8092", desc: "Policy Enforcement (HIPAA / EU AI Act)" },
];

const capabilities = [
  {
    title: "Cryptographic Identity",
    body: "Every agent gets an Ed25519 keypair. Registered. Signed. Can't be faked. The soulchain records every action — append-only, hash-linked, permanent.",
    tag: "Rust / id-service",
  },
  {
    title: "Trust Score (0–850)",
    body: "Every task. Every fault. Every dollar. All signed. All recorded. That history becomes a trust score. Good agents get resources. Unknown agents don't.",
    tag: "Proprietary Algorithm",
  },
  {
    title: "Capital Enforcement",
    body: "Agents post collateral before they run. Overspend and the contract stops them. Every cent tracked in real time.",
    tag: "TypeScript / shadow-service",
  },
  {
    title: "Multi-Model Consensus",
    body: "10 small open-source models beat GPT-4 when they disagree with each other. We built that system. Disagreement is the signal, not the problem.",
    tag: "Research → nexus-research-agents-code",
  },
];

export const Architecture = () => (
  <Section id="architecture" eyebrow="The Architecture" title="What we built">
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Service mesh diagram */}
      <FadeIn>
        <div className="glass rounded-2xl p-6 md:p-8 font-mono text-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">nexus.mesh</span>
          </div>
          <div className="space-y-3">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="flex items-start gap-3 group"
              >
                <span className="text-primary/80 mt-0.5">▸</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-foreground font-semibold">{s.name}</span>
                    <span className="text-muted-foreground text-xs">{s.port}</span>
                  </div>
                  <div className="text-muted-foreground/70 text-xs mt-0.5">← {s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: services.length * 0.2 }}
            className="h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 mt-6 origin-left"
          />
        </div>
      </FadeIn>

      {/* Capability cards 2x2 */}
      <div className="grid sm:grid-cols-2 gap-4">
        {capabilities.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
              <h3 className="text-base font-semibold mb-2.5">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{c.body}</p>
              <div className="font-mono text-[10px] uppercase tracking-wider text-primary/80 px-2 py-1 inline-block bg-primary/10 rounded">
                {c.tag}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </Section>
);
