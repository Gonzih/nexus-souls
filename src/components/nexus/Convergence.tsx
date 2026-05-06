import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";

const steps = [
  { n: "01", label: "Query Received", detail: "Any query, any source" },
  { n: "02", label: "Compliance Pre-flight", detail: "HIPAA · EU AI Act · NIST" },
  { n: "03", label: "LLM Fan-out", detail: "OpenAI · Anthropic · Google · Ollama" },
  { n: "04", label: "Consensus Engine", detail: "Semantic similarity + inversion" },
  { n: "05", label: "Evidence Ladder", detail: "Append-only audit, hash-linked" },
  { n: "06", label: "Verification", detail: "Truth stability classification" },
  { n: "07", label: "Conclusion", detail: "Result + agreement score + provenance" },
];

const tools = [
  { name: "converge_query", desc: "Fan out to all LLMs, run consensus, return structured result" },
  { name: "get_evidence_ladder", desc: "Full immutable audit trail for any query" },
  { name: "check_compliance", desc: "Pre-flight policy check — HIPAA, EU AI Act, NIST" },
  { name: "list_model_disagreements", desc: "Expose friction points between models as signal" },
];

export const Convergence = () => (
  <Section
    id="convergence"
    eyebrow="The convergence pipeline"
    title={<>One model is a guess.<br /><span className="text-accent-blue italic">We run all of them.</span></>}
  >
    <p className="text-base text-foreground/65 max-w-2xl mb-12 -mt-6 leading-relaxed">
      Your query goes to every major LLM at once. They argue. We grade the argument.
      You get an answer with proof — compliance checked, audit trail locked.
    </p>

    <div className="grid lg:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">
      <FadeIn>
        <div className="lg:col-span-3 bg-background p-8 h-full">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-6">Pipeline</div>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-6 items-baseline pb-5 border-b border-foreground/10 last:border-0"
              >
                <span className="font-serif-display text-3xl text-primary leading-none">{s.n}</span>
                <div>
                  <div className="font-serif-display text-lg text-foreground leading-tight">{s.label}</div>
                  <div className="font-mono text-[11px] text-foreground/55 mt-1">{s.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="lg:col-span-2 grid grid-rows-4 gap-px bg-foreground/10">
        {tools.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.06}>
            <div className="bg-background p-6 h-full flex flex-col justify-center">
              <div className="font-mono text-xs text-primary mb-1.5">{t.name}()</div>
              <div className="text-xs text-foreground/65 leading-relaxed">{t.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </Section>
);
