import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";

const steps = [
  { n: "01", label: "Query Received", detail: "Any query, any source" },
  { n: "02", label: "Compliance Pre-flight", detail: "HIPAA · EU_AI_ACT · NIST · Custom" },
  { n: "03", label: "LLM Fan-out", detail: "OpenAI · Anthropic · Google · Ollama — all in parallel" },
  { n: "04", label: "Consensus Engine", detail: "Semantic similarity + inversion detection" },
  { n: "05", label: "Evidence Ladder", detail: "Append-only audit trail, hash-linked" },
  { n: "06", label: "Verification", detail: "Truth stability classification" },
  { n: "07", label: "Conclusion", detail: "Structured result + agreement score + full provenance" },
];

const tools = [
  { name: "converge_query", desc: "Fan out to all LLMs, run consensus, return structured result with evidence" },
  { name: "get_evidence_ladder", desc: "Full immutable audit trail for any query" },
  { name: "check_compliance", desc: "Pre-flight policy check — HIPAA, EU AI Act, NIST, custom" },
  { name: "list_model_disagreements", desc: "Expose friction points between model responses as signal" },
];

export const Convergence = () => (
  <Section
    id="convergence"
    eyebrow="The Convergence Pipeline"
    title={<>Never depend on one.<br />Never accept one answer.</>}
  >
    <p className="text-sm text-muted-foreground max-w-2xl -mt-6 mb-12 leading-relaxed">
      A 7-step pipeline that fans your query to every major LLM simultaneously, runs a consensus engine,
      enforces compliance policy, and returns a structured result with full cryptographic provenance.
      Disagreement between models is not noise — it's the signal.
    </p>

    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Pipeline steps */}
      <FadeIn>
        <div className="glass rounded-2xl p-6 font-mono text-sm space-y-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">pipeline</div>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <span className="text-primary/40 text-xs w-6 shrink-0 mt-0.5">{s.n}</span>
              <div>
                <div className="text-foreground font-semibold text-xs">{s.label}</div>
                <div className="text-muted-foreground/70 text-[11px] mt-0.5">{s.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* MCP Tools */}
      <div className="space-y-4">
        <FadeIn>
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-4">
            available as MCP tools — works with Claude Code, Cursor, any MCP client
          </div>
        </FadeIn>
        {tools.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="glass rounded-xl p-4 hover:border-primary/30 transition-colors">
              <div className="font-mono text-xs text-primary font-semibold mb-1">{t.name}()</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{t.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </Section>
);
