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
    body: "Combine with nexus-reasoning-graph: which specific gravita had the highest influence on the synthesis? The temporal layer says \"these facts existed.\" The graph layer says \"these facts drove the output.\"",
  },
  {
    n: "04",
    title: "Regulatory auditability",
    body: "EU AI Act Article 12 requires logging for high-risk AI. HIPAA requires protection of patient data integrity. Gravitas satisfies both — immutable, timestamped, queryable — by its structure, not by bolt-on logging.",
  },
];

const timeAxes = [
  {
    axis: "World time",
    fields: "valid_from / valid_until",
    example: "Charles I was King of Spain 1519–1556",
    signal: "Is this fact still in its valid window?",
  },
  {
    axis: "Source time",
    fields: "authored_at",
    example: "A historian recorded this in 1600",
    signal: "How much lag exists between event and recording?",
  },
  {
    axis: "System time",
    fields: "tx",
    example: "Ingested into Gravitas today",
    signal: "How stale is the source we are reading from?",
  },
];

const decayCurves = [
  {
    n: "01",
    title: "Validity decay",
    body: "Is the fact still within its valid_from / valid_until window? A fact with valid_until in the past carries validity_factor = 0 — historically settled. An open-ended fact (valid_until = null) is still true as of authorship and decays only by source trust.",
  },
  {
    n: "02",
    title: "Source decay",
    body: "How much do we trust the author? source.trust_weight captures this. A primary source written at the time of the event (reconstruction lag ≈ 0) carries full weight. A secondary account written 400 years later starts discounted.",
  },
  {
    n: "03",
    title: "Corroboration decay",
    body: "Are agents still confirming this fact? The existing gravit weight mechanism tracks this. A fact that was once dominant but has received no corroboration in years has decayed semantically even if it remains present in the store.",
  },
];

const allenRelations = [
  { rel: "before", desc: "X ends before Y starts. No overlap." },
  { rel: "meets", desc: "X ends exactly when Y starts. Adjacent." },
  { rel: "overlaps", desc: "X starts before Y but they share time." },
  { rel: "starts", desc: "X and Y start together; X ends first." },
  { rel: "during", desc: "X is fully contained within Y." },
  { rel: "finishes", desc: "X and Y end together; Y starts first." },
  { rel: "equals", desc: "X and Y are identical intervals." },
];

const researchQuestions = [
  {
    n: "01",
    q: "The temporal grounding problem",
    a: "What does it mean for an AI system to \"know\" something? Current systems conflate \"in the training data\" with \"known.\" Gravitas introduces precise operational semantics: a system knows fact F at time T if and only if gravit [e, a, v, tx, weight] exists where tx ≤ T.",
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
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6">
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
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
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
                <dd className="text-foreground">Gravitas</dd>
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

      {/* §2 — The gravit model */}
      <Section
        eyebrow="The data model"
        title={<>What a <span className="italic text-accent-blue">gravit</span> is.</>}
        variant="ink"
      >
        <div className="space-y-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                Gravitas represents every fact as a gravit — five values:
              </p>
              <Code>{`[entity, attribute, value, tx, weight]  // a gravit`}</Code>
              <ul className="space-y-5 text-sm text-primary-foreground/75">
                {[
                  ["entity", "What thing this fact is about. A patient, a transaction, a document."],
                  ["attribute", "What property. diagnosis_code, account_balance, guideline_version."],
                  ["value", "The value at this moment."],
                  ["tx", "When this fact was asserted into the system."],
                  ["weight", "Current influence of this gravit on the reasoning graph. 0.0–1.0, recomputed as context evolves."],
                ].map(([field, desc]) => (
                  <li key={field} className="flex gap-4 pb-5 border-b border-primary-foreground/10 last:border-0 last:pb-0">
                    <span className="font-mono text-primary-glow w-40 shrink-0">{field}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Nothing is ever deleted or overwritten. When a fact changes, a new gravit is asserted.
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
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— Example gravita sequence</div>
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
            <p>With Gravitas:</p>
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
                    <div className="font-mono text-xs text-primary mb-2 uppercase tracking-[0.15em]">With Gravitas</div>
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
            <Code>{`// Core gravit interface
interface Gravit {
  entity:    string;   // "patient:MRN-447821"
  attribute: string;   // "diagnosis_code"
  value:     unknown;  // "C34.12"
  txTime:    Date;     // 2026-03-01T09:14:00Z — when asserted
  txId:      number;   // monotonic transaction ID
  weight:    number;   // 0.0 – 1.0, current influence on reasoning graph
}

// Time-travel query
function asOf(entity: string, timestamp: Date): Gravit[]

// History of a specific attribute
function history(entity: string, attribute: string): Gravit[]

// What changed between two timestamps?
function delta(
  entity: string,
  t1: Date,
  t2: Date
): { added: Gravit[], retracted: Gravit[] }`}</Code>
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
                    "Datomic-inspired bitemporal model — entity/attribute/value/time/weight",
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

      {/* §8 — Temporal Semantic Analysis */}
      <Section
        eyebrow="Temporal semantic analysis"
        title={<>What is the <span className="italic text-accent-blue">duration</span> of a fact?</>}
        variant="ink"
      >
        <div className="space-y-14">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                A gravit records when a fact was asserted. But that is not the same as how long the fact
                <em> mattered</em>. Facts have a lifecycle — they enter the system, rise to influence,
                plateau, and eventually decay. The temporal store captures the entry timestamp. Temporal
                semantic analysis captures the rest of the arc.
              </p>
              <p>
                The extended gravit is <code className="font-mono text-primary-glow text-sm">[entity, attribute, value, tx, weight]</code> where
                weight is not static. It changes over time as the fact's influence on the reasoning graph
                rises and falls. A fact can technically still exist in the store while carrying near-zero
                weight — it has decayed semantically even if it was never retracted.
              </p>
              <p>
                This is the distinction between <em>existence</em> and <em>dominance</em>. Existing
                systems track existence. Temporal semantic analysis tracks dominance.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">— Extended gravit</div>
                  <Code>{`interface WeightedGravit {
  entity:    string;
  attribute: string;
  value:     unknown;
  txTime:    Date;
  weight:    number; // 0.0 – 1.0, mutable
}`}</Code>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed mt-4">
                    Weight is recomputed as the reasoning graph evolves. A fact asserted in 2020 may carry
                    weight 0.9 in 2021 and weight 0.04 in 2026 — still present, no longer dominant.
                  </p>
                  <p className="text-xs text-primary-foreground/40 leading-relaxed mt-4 font-mono italic border-t border-primary-foreground/10 pt-4">
                    * Gravitas takes its name from the GSV <em>Gravitas</em> in Iain M. Banks'
                    <em> Excession</em> — a Culture Mind carrying the accumulated weight of knowledge
                    it can barely contain.
                  </p>
                </aside>
              </FadeIn>
            </div>
          </div>

          {/* Fact lifecycle timeline */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-8">— The fact lifecycle</div>
            <div className="relative">
              {/* Animated horizontal line */}
              <motion.div
                className="absolute top-5 left-0 h-px bg-primary-glow/40"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <div className="grid grid-cols-5 gap-2 relative">
                {[
                  { phase: "Entry", label: "01", desc: "Fact asserted. Weight initialises near zero — the system has not yet integrated it into the reasoning graph.", color: "text-primary-foreground/50" },
                  { phase: "Climb", label: "02", desc: "Fact is cited frequently. Influence weight rises as subsequent facts reference or build on it.", color: "text-primary-glow" },
                  { phase: "Dominance", label: "03", desc: "Peak influence. The fact reshapes how all new facts in its semantic neighbourhood are interpreted.", color: "text-primary-glow" },
                  { phase: "Decay", label: "04", desc: "Newer facts contradict, supersede, or crowd it out. Weight falls — not deleted, just diminished.", color: "text-primary-foreground/60" },
                  { phase: "Supersession", label: "05", desc: "Weight approaches zero. A successor fact is dominant. The original is auditable but no longer active.", color: "text-primary-foreground/35" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="pt-12 text-center"
                  >
                    <div className="absolute top-3.5 left-0 right-0 flex justify-around pointer-events-none" style={{ zIndex: 1 }}>
                    </div>
                    <div className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-2 ${s.color}`}>{s.phase}</div>
                    <div className="font-mono text-xs text-primary-glow mb-3">{s.label}</div>
                    <p className="text-[11px] text-primary-foreground/55 leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
              {/* Dots on the timeline */}
              <div className="absolute top-[14px] left-0 w-full flex justify-around pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                    className="w-3 h-3 rounded-full border-2 border-primary-glow bg-[hsl(var(--surface-ink))]"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Three sub-concepts */}
          <div className="grid sm:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
            {[
              {
                n: "01",
                title: "Dominance curves",
                body: "The influence a fact has on model outputs over time is not binary. It follows a curve: rise, peak, decay. Model thinking is shaped by what is currently dominant, not just what exists in the store.",
              },
              {
                n: "02",
                title: "Temporal semantic drift",
                body: "The same concept changes meaning as surrounding facts shift context. \"Trustworthy\" meant something different to a network in 2010 vs 2026. Track drift — not just timestamps.",
              },
              {
                n: "03",
                title: "Belief decay",
                body: "When does a previously dominant fact stop influencing outputs even though it still exists? Decay is semantic, not just temporal. A fact can be present and irrelevant simultaneously.",
              },
            ].map((c) => (
              <FadeIn key={c.n}>
                <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                  <div className="font-mono text-xs text-primary-glow mb-4">{c.n}</div>
                  <h3 className="font-serif-display text-xl text-primary-foreground leading-tight mb-3">{c.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The operational question</div>
              <p className="font-serif-display text-2xl md:text-3xl text-primary-foreground leading-snug italic">
                "Not: did this fact exist when the decision ran? But: was this fact still dominant when the
                decision ran? Those are different questions with different answers."
              </p>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* §9 — Bitemporal model */}
      <Section
        eyebrow="The bitemporal model"
        title={<>Three independent <span className="italic text-accent-blue">time axes.</span></>}
      >
        <div className="space-y-14">

          {/* Intro */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
              <p>
                The gravit's <code className="font-mono text-sm">tx</code> field records when a fact entered
                the system. That is one timestamp. But facts exist in the world before they are observed,
                and they are recorded before they are ingested. A single transaction timestamp collapses
                three genuinely different things into one.
              </p>
              <p>
                The bitemporal extension pulls them apart. Each gravit now carries three independent time
                axes. The gaps between them are not noise — they are epistemic signal.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="panel p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Why the gaps matter</div>
                  <ul className="space-y-4 text-sm text-foreground/75">
                    {[
                      "authored_at − valid_until → reconstruction lag (400 years = far less trust than 0 years)",
                      "tx − authored_at → ingestion lag (stale source = depressed trust)",
                      "valid_until = null → open-ended fact, still true as of authorship",
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

          {/* Three axes table */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-6">— The three axes</div>
            <div className="border border-foreground/10 divide-y divide-foreground/10">
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-foreground/5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                <span>Axis</span>
                <span>Fields</span>
                <span>Example</span>
                <span>Epistemic signal</span>
              </div>
              {timeAxes.map((row) => (
                <motion.div
                  key={row.axis}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-4 gap-4 px-6 py-5 items-start text-sm"
                >
                  <span className="font-mono text-primary font-medium">{row.axis}</span>
                  <span className="font-mono text-foreground/80 text-xs">{row.fields}</span>
                  <span className="text-foreground/65 text-xs leading-relaxed">{row.example}</span>
                  <span className="text-foreground/60 text-xs leading-relaxed">{row.signal}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Charles I example */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-4">— Example: the Charles I gravit</div>
            <Code>{`// Bitemporal gravit
{
  entity:         "charles-i-habsburg",
  attribute:      "role",
  value:          "King of Spain",
  valid_from:     "1519-01-23",   // ← when fact held in the world
  valid_until:    "1556-01-16",   // ← historically closed; validity_factor = 0
  authored_at:    "1600-00-00",   // ← a historian wrote this 44 years after valid_until
  tx:             "2026-05-13",   // ← ingested today
  influence_weight:   0.8,
  source_trust_weight: 0.8,       // ← partial — secondary, 44-year reconstruction lag
}

// Effective weight at query time
effective_weight = influence_weight × source_trust_weight × validity_factor
                 = 0.8 × 0.8 × 0.0   // valid_until is 466 years in the past
                 = 0.0                // historically settled — not decaying, just closed`}</Code>
            <p className="text-sm text-foreground/60 leading-relaxed mt-4">
              The system knows this fact is historically settled, not uncertain. The zero validity_factor
              does not mean the fact is wrong — it means the valid window has closed. The reconstruction
              lag (authored_at − valid_until ≈ 44 years) informs source_trust_weight independently.
            </p>
          </div>

          {/* Three decay curves */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-6">— Three distinct decay curves</div>
            <div className="grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {decayCurves.map((c) => (
                <FadeIn key={c.n}>
                  <div className="bg-background p-8 h-full glass">
                    <div className="font-mono text-xs text-primary mb-4">{c.n}</div>
                    <h3 className="font-serif-display text-xl text-foreground leading-tight mb-3">{c.title}</h3>
                    <p className="text-sm text-foreground/65 leading-relaxed">{c.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Effective weight formula */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-4">— Effective weight formula</div>
              <Code>{`// The three decay curves compose multiplicatively
effective_weight =
  influence_weight      // corroboration: are agents still citing this?
  × source_trust_weight // source decay: how trusted is the author?
  × validity_factor     // validity decay: is the fact in its valid window?

// validity_factor examples:
//   valid window still open  → 1.0
//   valid_until = null       → 1.0  (open-ended; still true as of authorship)
//   valid window just closed → gradual decay curve (configurable)
//   valid_until 466 yrs ago  → 0.0  (historically settled)`}</Code>
              <p>
                All three curves are independent. A fact can have high source trust but zero validity
                (historically settled), high validity but low corroboration (fresh but unconfirmed), or
                any combination. The product gives the operational influence.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="panel p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Extended gravit interface</div>
                  <Code>{`interface BitemporalGravit {
  entity:    string;
  attribute: string;
  value:     unknown;
  // World time
  valid_from:  Date;
  valid_until: Date | null;
  // Source time
  authored_at: Date;
  // System time
  tx:          Date;
  txId:        number;
  // Weight components
  influence_weight:    number; // 0–1
  source_trust_weight: number; // 0–1
}`}</Code>
                </aside>
              </FadeIn>
            </div>
          </div>

          {/* Allen's Interval Algebra */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-6">— Allen's Interval Algebra</div>
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5 text-foreground/75 leading-relaxed text-sm">
                <p>
                  Querying "what was true during period X" is not a simple point lookup. Two time intervals
                  can relate in 13 distinct ways. Allen's Interval Algebra names all of them.
                </p>
                <p>
                  A correct bitemporal query must handle all overlap cases: a fact whose valid window
                  starts before the query period, ends inside it, spans it entirely, or is fully contained
                  within it. Ignoring any relation produces silent gaps or false inclusions.
                </p>
                <Code>{`// Allen overlap: fact valid window intersects query period
function withinPeriod(
  fact: BitemporalGravit,
  periodStart: Date,
  periodEnd: Date
): boolean {
  const end = fact.valid_until ?? periodEnd;
  return fact.valid_from < periodEnd && end > periodStart;
  // covers: overlaps, during, starts, finishes, equals
}`}</Code>
              </div>
              <div className="lg:col-span-7">
                <FadeIn>
                  <div className="border border-foreground/10">
                    <div className="grid grid-cols-2 gap-px bg-foreground/10 border-b border-foreground/10">
                      <div className="bg-foreground/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">Relation</div>
                      <div className="bg-foreground/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">Meaning</div>
                    </div>
                    {allenRelations.map((r) => (
                      <motion.div
                        key={r.rel}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-px bg-foreground/5 border-b border-foreground/8 last:border-0"
                      >
                        <div className="bg-background px-4 py-3 font-mono text-xs text-primary">{r.rel}</div>
                        <div className="bg-background px-4 py-3 text-xs text-foreground/65">{r.desc}</div>
                      </motion.div>
                    ))}
                    <div className="px-4 py-3 bg-foreground/3 font-mono text-[10px] text-foreground/40 border-t border-foreground/10">
                      + 6 inverse relations (after, met-by, overlapped-by, started-by, contains, finished-by) = 13 total
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Closing callout */}
          <FadeIn>
            <aside className="panel p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">— The upgrade</div>
              <p className="font-serif-display text-2xl md:text-3xl text-foreground leading-snug italic">
                "One timestamp tells you when the system learned something. Three timestamps tell you
                whether to trust it."
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
