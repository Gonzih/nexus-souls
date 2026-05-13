import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6">
    <code>{children}</code>
  </pre>
);

const applications = [
  {
    n: "01",
    title: "AI auditing",
    body: "Trace exactly which facts were dominant when a decision was made — not just which existed. A fact with weight 0.04 at decision time is a very different auditing result from a fact with weight 0.92. Dominance is the accountability unit.",
  },
  {
    n: "02",
    title: "Identity protection",
    body: "Detect when an agent's model of you was last updated. A stale identity model is a manipulation surface — an adversary can exploit the gap between who you were when the model was built and who you are now.",
  },
  {
    n: "03",
    title: "Information flow monitoring",
    body: "A meta-agent watches what facts enter your information space, measures their dominance curves, and flags anomalies. This is temporal semantic analysis applied as continuous infrastructure, not one-off audit.",
  },
];

const durationPrinciples = [
  {
    label: "Start date",
    value: "When the fact was asserted (transaction time)",
    note: "Already captured by the datom model",
  },
  {
    label: "Effective end",
    value: "When the fact stopped being dominant in the reasoning space",
    note: "Not captured by any current AI system",
  },
  {
    label: "Duration",
    value: "The interval between start and effective end",
    note: "The gap most AI accountability frameworks ignore",
  },
];

const CaseStudyTemporalSemantic = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Nexus
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Case Study · 03</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Case Study · Temporal Semantics</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
              Facts <span className="text-accent-blue italic">decay.</span><br />
              Models don't know it.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              There is a gap between "this fact exists" and "this fact still matters." Current AI systems
              cannot see that gap. Temporal semantic analysis is the infrastructure layer that closes it.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Domain</dt>
                <dd className="text-foreground">AI Semantics</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Use case</dt>
                <dd className="text-foreground">Fact Lifecycle</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Builds on</dt>
                <dd className="text-foreground">nexus-temporal-storage</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Read time</dt>
                <dd className="text-foreground">7 min</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* §1 — The duration problem */}
      <Section
        eyebrow="The duration problem"
        title={<>A fact has a start date. <span className="italic text-accent-blue">What about an end?</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              Every AI accountability framework asks: what did the system know when it made the decision?
              The temporal datom model answers this precisely — here are the facts that existed at
              transaction time T.
            </p>
            <p>
              But existence is a blunt instrument. A fact can exist in the store while carrying near-zero
              influence on the reasoning graph — it was superseded last year, crowded out by newer
              assertions, or simply became irrelevant as the model's context evolved. That fact "existed"
              at decision time. But was it dominant? Did it actually shape the output?
            </p>
            <p>
              Those are different questions. Temporal semantic analysis answers the second one.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="border border-foreground/10 divide-y divide-foreground/10">
                {durationPrinciples.map((p) => (
                  <div key={p.label} className="p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">{p.label}</div>
                    <p className="text-foreground text-sm font-medium mb-1">{p.value}</p>
                    <p className="text-foreground/50 text-xs font-mono">{p.note}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §2 — The mechanism */}
      <Section
        eyebrow="The mechanism"
        title={<>Measuring <span className="italic text-accent-blue">influence over time.</span></>}
        variant="ink"
      >
        <div className="space-y-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                Temporal semantic analysis extends the datom model with a weight dimension. Weight is not
                static — it is recomputed continuously as the reasoning graph evolves. A fact that
                becomes heavily cited rises in weight. A fact that is contradicted, superseded, or simply
                stops being referenced decays.
              </p>
              <p>
                The operational result is a time-series of influence, not just a binary present/absent
                log. For any fact, you can ask: what was its weight at time T? Was it rising or falling?
                Had it already decayed before the decision ran?
              </p>
              <Code>{`// Weighted datom — the extended model
interface WeightedDatom {
  entity:    string;
  attribute: string;
  value:     unknown;
  txTime:    Date;     // when asserted
  weight:    number;   // current influence, 0.0 – 1.0
}

// Query: what was this fact's influence at decision time?
function weightAt(
  entity:    string,
  attribute: string,
  timestamp: Date
): number

// Query: dominance curve for a fact over a window
function dominanceCurve(
  entity:    string,
  attribute: string,
  from:      Date,
  to:        Date
): Array<{ t: Date; weight: number }>`}</Code>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">— Dominance vs. existence</div>
                  <ul className="space-y-4 text-sm text-primary-foreground/75">
                    {[
                      "Existence: the datom is present in the store at time T",
                      "Dominance: the datom's weight exceeds a semantic threshold at time T",
                      "Decay: weight falling below threshold while fact still exists",
                      "Supersession: a successor fact rises to dominance in the same semantic slot",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start pb-4 border-b border-primary-foreground/10 last:border-0 last:pb-0">
                        <span className="text-primary-glow mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </FadeIn>
            </div>
          </div>

          {/* Dominance curve visual */}
          <FadeIn>
            <div className="border border-primary-foreground/15 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">— A fact's dominance curve over 36 months</div>
              <div className="flex items-end gap-1 h-24">
                {[4, 12, 28, 52, 76, 88, 92, 90, 84, 72, 55, 38, 22, 12, 7, 4, 3, 2].map((v, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-primary-glow/70 rounded-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  />
                ))}
              </div>
              <div className="flex justify-between font-mono text-[10px] text-primary-foreground/40 mt-3">
                <span>Month 0 — entry</span>
                <span>Peak dominance</span>
                <span>Month 36 — decayed</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* §3 — Temporal semantic drift */}
      <Section
        eyebrow="Semantic drift"
        title={<>The same concept, <span className="italic text-accent-blue">different meaning.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              Temporal semantic drift is a subtler problem than fact decay. A fact itself may remain
              stable — same entity, same attribute, same value — but its meaning shifts as the surrounding
              graph changes.
            </p>
            <p>
              "Trustworthy" as an attribute assigned to a financial counterparty meant something specific
              in 2010 — low default history, stable ratings. By 2026, the same label in the same system
              may encode entirely different signals: ESG compliance, algorithmic reputation scores,
              regulatory standing in post-Basel frameworks.
            </p>
            <p>
              The value hasn't changed. The context has. An AI system reasoning about a "trustworthy"
              counterparty using a model trained in 2018 and a fact asserted in 2024 is working with a
              semantic mismatch. Temporal semantic analysis surfaces this mismatch explicitly.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Drift detection pattern</div>
                <Code>{`// Detect semantic drift in a concept
function driftScore(
  attribute: string,
  t1: Date,
  t2: Date
): number

// Returns 0.0 (no drift) to 1.0 (fully drifted)
// Based on: context graph changes,
// co-occurrence shifts, weight redistribution
// in the semantic neighbourhood`}</Code>
                <p className="text-sm text-foreground/65 leading-relaxed mt-4">
                  A drift score above threshold flags that the same value string no longer carries
                  the same semantic content it did at original assertion.
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §4 — Applications */}
      <Section
        eyebrow="Applications"
        title={<>Three uses for <span className="italic text-accent-blue">fact lifecycle analysis.</span></>}
        variant="ink"
      >
        <div className="space-y-8">
          <div className="grid sm:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
            {applications.map((a) => (
              <FadeIn key={a.n}>
                <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                  <div className="font-mono text-xs text-primary-glow mb-4">{a.n}</div>
                  <h3 className="font-serif-display text-2xl text-primary-foreground leading-tight mb-3">{a.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{a.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* AI Auditing deep-dive */}
          <FadeIn>
            <div className="border border-primary-foreground/15 p-8 space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow">— AI auditing: the dominance question</div>
              <div className="grid md:grid-cols-2 gap-8 text-sm text-primary-foreground/70 leading-relaxed">
                <div>
                  <div className="font-mono text-xs text-destructive mb-3 uppercase tracking-[0.15em]">Existence-only audit</div>
                  <p>
                    The guideline version 2023-Q4 was present in the store at decision time. The system
                    had access to it. Audit complete.
                  </p>
                  <p className="mt-3 text-primary-foreground/45 text-xs">
                    But: 2024-Q1 was also present, with weight 0.91. The 2023-Q4 version had weight 0.06.
                    The old guideline technically existed — but the model's reasoning was almost entirely
                    shaped by the new one.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs text-primary-glow mb-3 uppercase tracking-[0.15em]">Dominance-aware audit</div>
                  <p>
                    The guideline version 2024-Q1 was dominant at decision time (weight: 0.91). The prior
                    version 2023-Q4 existed but was semantically inert (weight: 0.06). The decision was
                    driven by 2024-Q1 logic.
                  </p>
                  <p className="mt-3 text-primary-glow text-xs font-mono">
                    This is an audit result with accountability teeth.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* §5 — Research framing */}
      <Section
        eyebrow="Research framing"
        title={<>Why this is an <span className="italic text-accent-blue">open problem.</span></>}
      >
        <div className="space-y-10">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
              <p>
                Temporal semantic analysis requires solving three problems simultaneously: efficient
                weight recomputation as the graph evolves, semantic neighbourhood mapping that captures
                which facts are in the same reasoning cluster, and drift detection that is
                concept-agnostic rather than domain-specific.
              </p>
              <p>
                No production AI system currently tracks fact dominance curves. The research question is
                not whether this matters — it clearly does for any meaningful accountability framework.
                The question is what the minimal viable implementation looks like without requiring a
                full knowledge graph rewrite.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FadeIn>
                <aside className="panel p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Open problems</div>
                  <ul className="space-y-4 text-sm text-foreground/70">
                    {[
                      "Weight initialisation: how to assign t₀ influence to a newly asserted fact",
                      "Recomputation trigger: when does weight recalculation run — continuous or event-driven?",
                      "Threshold semantics: what weight floor separates dominant from residual?",
                      "Drift grounding: how to anchor semantic meaning across model versions",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start pb-4 border-b border-foreground/10 last:border-0 last:pb-0">
                        <span className="font-mono text-primary shrink-0 text-xs">?</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </FadeIn>
            </div>
          </div>
          <FadeIn>
            <aside className="panel-ink p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The thesis</div>
              <p className="font-serif-display text-2xl md:text-3xl text-primary-foreground leading-snug italic">
                "Accountability requires knowing not just what the system knew, but what it was
                actually attending to. Dominance is the operational definition of attention over time."
              </p>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-8">
            A fact that decays without being deleted<br />
            <span className="italic text-primary-glow">is the most dangerous kind.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/case-study/temporal-storage"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Temporal storage model
            </Link>
            <Link
              to="/case-study/identity-guardian"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              The identity guardian <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudyTemporalSemantic;
