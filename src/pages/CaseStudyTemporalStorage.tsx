import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const capabilities = [
  {
    n: "01",
    title: "Decision reconstruction",
    body: "Reproduce the exact knowledge state that produced any output. Not an approximation — the actual facts the system held, as of the exact transaction.",
  },
  {
    n: "02",
    title: "Staleness detection",
    body: "Query: for this decision, were any relevant facts already superseded by newer values at decision time? E.g., was the guideline version that influenced the output already outdated when the decision ran?",
  },
  {
    n: "03",
    title: "Causality isolation",
    body: "Combine with nexus-reasoning-graph: which specific datoms had the highest influence on the synthesis? The temporal layer says \"these facts existed.\" The graph layer says \"these facts drove the output.\"",
  },
  {
    n: "04",
    title: "Regulatory auditability",
    body: "EU AI Act Article 12 requires logging for high-risk AI. HIPAA requires protection of patient data integrity. A temporal datom store satisfies both — immutable, timestamped, queryable — by its structure, not by bolt-on logging.",
  },
];

const researchQuestions = [
  {
    n: "01",
    q: "The temporal grounding problem",
    a: "What does it mean for an AI system to \"know\" something? Current systems conflate \"in the training data\" with \"known.\" nexus-temporal-storage introduces precise operational semantics: a system knows fact F at time T if and only if datom [e, a, v, tx] exists where tx ≤ T.",
  },
  {
    n: "02",
    q: "The accountability attribution problem",
    a: "When an AI decision causes harm, who is accountable and why? Without a temporal record, accountability is diffuse and indeterminate. With it, accountability is assigned to specific gaps in specific layers — data provider, model operator, policy author.",
  },
  {
    n: "03",
    q: "The contestability infrastructure problem",
    a: "EU AI Act and emerging US frameworks require that people be able to contest automated decisions. Contestability requires knowing what decision was made and on what basis. Temporal immutability is the technical prerequisite for meaningful contestability.",
  },
];

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto border border-foreground/10 my-6">
    <code>{children}</code>
  </pre>
);

const CaseStudyTemporalStorage = () => {
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
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Case Study · 02</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Case Study · Infrastructure</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8">
              Why AI systems <span className="text-accent-blue italic">forget</span> —<br />
              and how temporal storage fixes that.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              Every AI decision is made against a specific knowledge state. That state is almost never
              recorded. When the decision turns out to be wrong, the reasoning evaporates — not because
              AI is mysterious, but because nobody stored what the system knew when it ran.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Domain</dt>
                <dd className="text-foreground">AI Infrastructure</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Use case</dt>
                <dd className="text-foreground">Temporal Accountability</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Focus</dt>
                <dd className="text-foreground">nexus-temporal-storage</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Read time</dt>
                <dd className="text-foreground">8 min</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* §1 — The problem */}
      <Section
        eyebrow="The problem"
        title={<>AI systems have no memory of <span className="italic text-accent-blue">their own past.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              Most AI deployments run like this: data enters, model processes, output produced. The data
              that entered at that specific moment? Gone. The next time the system runs, it may see
              completely different data. Nobody captured what it saw the first time.
            </p>
            <p>
              This matters enormously the moment something goes wrong. The decision to deny a claim,
              flag a transaction, reject an application — that decision was made by a system that knew
              certain facts at a certain time. Those facts may have changed since. The original state is
              unrecoverable.
            </p>
            <p>
              This is not a model problem. It is a storage problem.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel-ink p-8 relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The core insight</div>
                <p className="font-serif-display text-2xl leading-snug text-primary-foreground">
                  "The reasoning didn't evaporate because the AI is a black box. It evaporated because
                  nobody stored the inputs."
                </p>
                <div className="mt-6 pt-6 border-t border-primary-foreground/15">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    The solution is not a better model. It is a storage layer with temporal semantics.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §2 — The datom model */}
      <Section
        eyebrow="The data model"
        title={<>What a <span className="italic text-accent-blue">datom</span> is.</>}
        variant="ink"
      >
        <div className="space-y-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                nexus-temporal-storage represents every fact as a datom — four values:
              </p>
              <Code>{`[entity, attribute, value, transaction_time]`}</Code>
              <ul className="space-y-5 text-sm text-primary-foreground/75">
                {[
                  ["entity", "What thing this fact is about. A patient, a transaction, a document."],
                  ["attribute", "What property. diagnosis_code, account_balance, guideline_version."],
                  ["value", "The value at this moment."],
                  ["transaction_time", "When this fact was asserted into the system."],
                ].map(([field, desc]) => (
                  <li key={field} className="flex gap-4 pb-5 border-b border-primary-foreground/10 last:border-0 last:pb-0">
                    <span className="font-mono text-primary-glow w-40 shrink-0">{field}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Nothing is ever deleted or overwritten. When a fact changes, a new datom is asserted.
                The old one remains. The full history accumulates.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">— Immutability invariant</div>
                  <ul className="space-y-4 text-sm text-primary-foreground/75">
                    {[
                      "Every fact has a timestamp of when it became true in the system",
                      "Facts are never mutated — only superseded by newer assertions",
                      "The complete audit trail is structural, not bolt-on",
                      "Any past state is reconstructable by filtering on transaction_time",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start pb-4 border-b border-primary-foreground/10 last:border-0 last:pb-0">
                        <span className="text-primary-glow mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </FadeIn>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— Example datom sequence</div>
            <Code>{`[patient:MRN-447821, diagnosis_code,  "C34.12",    2026-03-01T09:14:00Z]  ← initial diagnosis
[patient:MRN-447821, lab_result,      "normal",    2026-03-01T09:20:00Z]
[patient:MRN-447821, oncology_note,   "see notes", 2026-03-03T14:45:00Z]  ← added AFTER decision
[guideline:payer-001, version,        "2023-Q4",   2024-01-15T00:00:00Z]
[guideline:payer-001, version,        "2024-Q1",   2024-04-01T08:00:00Z]  ← update that changed coverage`}</Code>
          </div>
        </div>
      </Section>

      {/* §3 — Time-travel queries */}
      <Section
        eyebrow="The mechanism"
        title={<>Time-travel <span className="italic text-accent-blue">queries.</span></>}
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              You can query the database <em>as of</em> any point in time. The query returns only facts
              that existed at that timestamp — exactly what the system knew at that moment.
            </p>
            <Code>{`// What did the system know about this patient at decision time?
as_of("patient:MRN-447821", "2026-03-03T14:32:00Z")

// Returns:
// ✓ diagnosis_code:    C34.12    (present since March 1)
// ✓ lab_result:        normal    (present since March 1)
// ✗ oncology_note:     NOT PRESENT (entered at 14:45 — 13 min after decision)
// ✓ guideline_version: 2024-Q1  (loaded April 2024)`}</Code>
            <p>
              The 13-minute gap is not an inference. It is a fact with a timestamp. The oncology note
              entered the system 13 minutes after the decision transaction. That is in the record.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">— Two very different statements</div>
                <ul className="space-y-5 text-sm text-foreground/75">
                  <li className="pb-5 border-b border-foreground/10">
                    <span className="block text-foreground font-medium mb-1">"The AI didn't have the oncology note."</span>
                    Impression. Unprovable.
                  </li>
                  <li>
                    <span className="block text-foreground font-medium mb-2">
                      "The oncology note entered the system at 14:45:03Z. The decision transaction ran
                      at 14:32:17Z. The note was not present at decision time."
                    </span>
                    <span className="text-primary font-mono text-xs">Fact. Auditable. Timestamped.</span>
                  </li>
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §4 — Four capabilities */}
      <Section
        eyebrow="What this enables"
        title={<>Four <span className="italic text-accent-blue">capabilities.</span></>}
        variant="ink"
      >
        <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {capabilities.map((c) => (
            <FadeIn key={c.n}>
              <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                <div className="font-mono text-xs text-primary-glow mb-4">{c.n}</div>
                <h3 className="font-serif-display text-2xl text-primary-foreground leading-tight mb-3">{c.title}</h3>
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* §5 — Fraud scenario */}
      <Section
        eyebrow="A scenario"
        title={<>A frozen account. A <span className="italic text-accent-blue">dispute.</span> A complete record.</>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              A real-time fraud detection system flags a transaction as potentially fraudulent. The
              account is frozen. The customer files a dispute. The bank's compliance team needs to
              reconstruct: what signals did the fraud model receive? What account history was visible at
              the moment of the flag? Had the customer already submitted a travel notice that should have
              depressed the fraud score?
            </p>
            <p>
              Without temporal storage: the account state has changed since the freeze. The exact signal
              the model received is not recoverable. The compliance team is working from current data,
              not decision-time data.
            </p>
            <p>With nexus-temporal-storage:</p>
            <Code>{`as_of("account:ACC-8821934", "2026-04-15T11:23:00Z") // exact flag timestamp

// Returns exactly:
// balance:                  $4,832.00
// travel_notice:            null    ← submitted at 11:31:00Z, 8 min after the flag
// recent_merchant_category: international_electronics
// fraud_score_factors:      [velocity_flag, geo_anomaly]`}</Code>
            <p>
              The travel notice was submitted 8 minutes after the flag. The model never saw it. That is
              the complete story. The customer is right. The freeze was the correct response given
              available data, but the data was incomplete through no fault of the system.
            </p>
            <p>
              That is a defensible outcome — for the bank. It can be explained precisely. It can be
              remediated specifically (add a 10-minute hold before freeze to allow pending notices to
              resolve). It does not become a regulatory failure.
            </p>
          </div>
          <div className="lg:col-span-4">
            <FadeIn>
              <aside className="panel p-7 sticky top-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Two outcomes</div>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-destructive mb-2 uppercase tracking-[0.15em]">Without temporal storage</div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Compliance team reviews current account state. Dispute is unresolvable. Regulatory
                      exposure is indeterminate.
                    </p>
                  </div>
                  <div className="border-t border-foreground/10 pt-6">
                    <div className="font-mono text-xs text-primary mb-2 uppercase tracking-[0.15em]">With nexus-temporal-storage</div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Decision-time state reconstructed exactly. Root cause isolated to an 8-minute
                      window. Remediation is specific and testable.
                    </p>
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §6 — Research framing */}
      <Section
        eyebrow="Research context"
        title={<>Why this is <span className="italic text-accent-blue">research,</span> not a product.</>}
        variant="ink"
      >
        <div className="space-y-12">
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl font-light">
            Three open problems in AI accountability that temporal immutability directly addresses.
          </p>
          <div className="border-t border-primary-foreground/15">
            {researchQuestions.map((q, i) => (
              <motion.div
                key={q.n}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid md:grid-cols-12 gap-6 py-8 border-b border-primary-foreground/10"
              >
                <div className="md:col-span-1 font-mono text-xs text-primary-glow pt-1">{q.n}</div>
                <div className="md:col-span-4">
                  <h3 className="font-serif-display text-xl text-primary-foreground leading-snug">{q.q}</h3>
                </div>
                <div className="md:col-span-7 text-sm text-primary-foreground/65 leading-relaxed">
                  {q.a}
                </div>
              </motion.div>
            ))}
          </div>
          <FadeIn>
            <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The thesis</div>
              <p className="font-serif-display text-2xl md:text-3xl text-primary-foreground leading-snug italic">
                "Temporal immutability is not a feature. It is the prerequisite for everything else the
                accountability stack requires."
              </p>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* §7 — Technical spec */}
      <Section
        eyebrow="Technical specification"
        title={<>The core <span className="italic text-accent-blue">interface.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Code>{`// Core datom interface
interface Datom {
  entity:    string;   // "patient:MRN-447821"
  attribute: string;   // "diagnosis_code"
  value:     unknown;  // "C34.12"
  txTime:    Date;     // 2026-03-01T09:14:00Z — when asserted
  txId:      number;   // monotonic transaction ID
}

// Time-travel query
function asOf(entity: string, timestamp: Date): Datom[]

// History of a specific attribute
function history(entity: string, attribute: string): Datom[]

// What changed between two timestamps?
function delta(
  entity: string,
  t1: Date,
  t2: Date
): { added: Datom[], retracted: Datom[] }`}</Code>
          </div>
          <div className="lg:col-span-4">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Design properties</div>
                <ul className="space-y-4 text-sm text-foreground/75">
                  {[
                    "Append-only storage — no UPDATE or DELETE operations",
                    "Monotonic transaction IDs preserve total ordering",
                    "asOf complexity: O(log n) with a transaction-time index",
                    "Datomic-inspired bitemporal model — entity/attribute/value/time",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start pb-4 border-b border-foreground/10 last:border-0 last:pb-0">
                      <span className="font-mono text-primary shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-8">
            The decision was made. <br />
            <span className="italic text-primary-glow">Now you can prove what it knew.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Explore the architecture
            </Link>
            <a
              href="https://github.com/Gonzih/nexus-temporal-storage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              View on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudyTemporalStorage;
