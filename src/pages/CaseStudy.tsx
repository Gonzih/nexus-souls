import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const timeline = [
  { time: "14:32", event: "Prior auth session initiated", detail: "Patient state snapshot taken from incomplete record" },
  { time: "14:33", event: "Denial recommendation generated", detail: "AI synthesis weighted 2023 guideline at 0.94, 2024 amendment at 0.31" },
  { time: "14:45", event: "Oncology note entered the system", detail: "13 minutes after the decision ran" },
  { time: "15:20", event: "2024 guideline amendment loaded", detail: "Added to knowledge base — but not to enforcement layer" },
  { time: "15:45", event: "Human reviewer approves denial", detail: "Without independent review of oncology context" },
];

const components = [
  { name: "nexus-temporal-storage", role: "What did the system know at decision time?", detail: "Time-travel queries on immutable fact history. Every datom [entity, attribute, value, transaction_time]. Nothing overwritten, nothing deleted." },
  { name: "nexus-reasoning-graph", role: "What drove the decision?", detail: "Provenance DAG with cosine-similarity influence edges. Quantified: which chunk weighted what, into which synthesis node." },
  { name: "nexus-protocols", role: "What constraints were active?", detail: "Pipeline-level policy enforcement log. Which rules active, which triggered, which passed or failed — before output reaches a clinician." },
  { name: "nexus-research", role: "Why does this work?", detail: "Invariant topology, adversarial robustness, agent identity theory. The theoretical foundation under the audit substrate." },
];

const questions = [
  { n: "01", q: "What did the AI know at decision time?", a: "Was the relevant information present? Current? Was anything missing that should have been there?" },
  { n: "02", q: "What information drove the decision?", a: "Of everything the AI had access to, what actually influenced the output? What was effectively ignored?" },
  { n: "03", q: "What constraints were active?", a: "What policy rules, compliance requirements, clinical guidelines was the system supposed to enforce? Did it?" },
  { n: "04", q: "When did each fact become true?", a: "When did a lab result enter the system? When was a guideline updated? Was the AI working from stale data?" },
];

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto border border-foreground/10 my-6">
    <code>{children}</code>
  </pre>
);

const CaseStudy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Nexus
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Case Study · 01</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Case Study · Healthcare</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8">
              Investigating an AI <span className="text-accent-blue italic">malpractice</span> case
              with the Nexus suite.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              When AI denies a prior auth and a patient is harmed, the reasoning evaporates.
              No chain of custody. No record of what the model saw. That is not a gap in the
              law — it is a gap in the infrastructure.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Domain</dt>
                <dd className="text-foreground">Clinical AI</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Use case</dt>
                <dd className="text-foreground">Prior Authorization</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Stakeholders</dt>
                <dd className="text-foreground">Hospitals · Regulators · Vendors</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Components</dt>
                <dd className="text-foreground">4 of 31</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The setup */}
      <Section eyebrow="The setup" title={<>AI is making <span className="italic text-accent-blue">clinical</span> decisions.</>}>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              Ambient documentation summarizes patient encounters. Prior auth systems approve
              or deny coverage. Diagnostic support flags conditions. Readmission risk scores
              determine discharge timing.
            </p>
            <p>
              When one of those decisions is wrong and a patient is harmed, you have an AI
              malpractice case. And right now, nobody can investigate it.
            </p>
            <p>
              The model ran. The output was produced. The reasoning evaporated. There is no
              chain of custody for the decision. No record of what information the AI saw.
              No way to know which specific data point drove the recommendation that led to
              harm.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel-ink p-8 relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The thesis</div>
                <p className="font-serif-display text-2xl leading-snug text-primary-foreground">
                  Courts can ask the question. The industry has no mechanism to answer it.
                </p>
                <div className="mt-6 pt-6 border-t border-primary-foreground/15">
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    Nexus is that mechanism — a temporal, auditable substrate for AI decisions.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Four questions */}
      <Section eyebrow="Investigation requires" title={<>Four <span className="italic text-accent-blue">questions.</span> No partial answers.</>}>
        <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {questions.map((q) => (
            <FadeIn key={q.n}>
              <div className="bg-background p-8 h-full">
                <div className="font-mono text-xs text-primary mb-4">{q.n}</div>
                <h3 className="font-serif-display text-2xl leading-tight mb-3">{q.q}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{q.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Scenario */}
      <Section eyebrow="The scenario" title={<>A denial. A deterioration. A <span className="italic text-accent-blue">lawsuit.</span></>} variant="ink">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-light">
            A hospital deploys an AI prior authorization system. The AI reviews patient
            records and recommends approval or denial to a human reviewer. A denial is
            issued. The patient's condition deteriorates while awaiting appeal. The family
            files suit.
          </p>
          <p className="mt-8 font-serif-display text-2xl md:text-3xl text-primary-foreground italic leading-snug">
            "What did the AI see, what did it miss, and why did it recommend denial?"
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-glow">
            — Plaintiff's attorney
          </p>
        </div>
      </Section>

      {/* Q1 */}
      <Section eyebrow="Question 01" title={<>What did the AI know at <span className="italic text-accent-blue">decision time?</span></>}>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              <span className="font-mono text-primary text-sm">nexus-temporal-storage</span>{" "}
              stores every fact as an immutable datom. Nothing is overwritten. Nothing is
              deleted. The full history of every fact is preserved.
            </p>
            <Code>{`as_of("patient:MRN-447821",
      timestamp="2026-03-03T14:32:00Z")`}</Code>
            <p>
              Returns: every fact the system held about this patient at the exact moment
              the prior auth recommendation was generated. Lab values. Diagnosis codes.
              Prior auth history. The version of the payer guideline that was loaded.
            </p>
            <p>
              If the patient's most recent oncology note — entered at 14:45 — was not yet
              in the system at 14:32 when the decision ran:{" "}
              <span className="text-foreground font-medium">that is visible.</span>
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">— Two failure modes</div>
                <ul className="space-y-5 text-sm text-foreground/75">
                  <li className="pb-5 border-b border-foreground/10">
                    <span className="block text-foreground font-medium mb-1">"The AI missed it."</span>
                    Vague. Undifferentiated. Indefensible.
                  </li>
                  <li>
                    <span className="block text-foreground font-medium mb-1">
                      "The note entered 13 minutes after the decision ran. No mechanism delayed
                      the decision until the record was complete."
                    </span>
                    Different failure. Different liable party.
                  </li>
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Q2 */}
      <Section eyebrow="Question 02" title={<>What information drove the <span className="italic text-accent-blue">decision?</span></>} variant="ink">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-primary-foreground/80 leading-relaxed">
            <p>
              <span className="font-mono text-primary-glow text-sm">nexus-reasoning-graph</span>{" "}
              captures the full provenance of every AI session. Every document retrieved,
              every chunk processed, every synthesis step — stored as a directed acyclic
              graph with cosine similarity influence edges.
            </p>
            <Code>{`get_session_graph(
  session_id="prior-auth-session-44782"
)`}</Code>
            <p>
              The investigation finds: a 2023 payer guideline section scored{" "}
              <span className="text-primary-foreground font-medium">0.94 similarity</span>{" "}
              to the synthesis node that produced the denial language. The 2024 amendment
              that changed coverage criteria scored{" "}
              <span className="text-primary-foreground font-medium">0.31</span>.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">— Influence weights</div>
                <div className="space-y-5">
                  {[
                    { label: "Guideline 2023 § coverage", w: 0.94, color: "bg-primary-glow" },
                    { label: "Amendment 2024 § coverage", w: 0.31, color: "bg-primary-foreground/35" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between text-xs font-mono text-primary-foreground/80 mb-2">
                        <span>{b.label}</span>
                        <span className="text-primary-foreground">{b.w.toFixed(2)}</span>
                      </div>
                      <div className="h-1.5 bg-primary-foreground/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.w * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className={`h-full ${b.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-7 pt-5 border-t border-primary-foreground/10 text-xs text-primary-foreground/60 leading-relaxed">
                  In litigation, 0.94 vs 0.31 is evidence. The influence graph is the
                  evidence.
                </p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Q3 */}
      <Section eyebrow="Question 03" title={<>What constraints were <span className="italic text-accent-blue">active?</span></>}>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              <span className="font-mono text-primary text-sm">nexus-protocols</span>{" "}
              enforces compliance policy at the pipeline level before any output reaches a
              clinician. Every enforcement decision is logged.
            </p>
            <p>
              The investigation finds: the 2024 guideline update was in the knowledge base
              but{" "}
              <span className="text-foreground font-medium">
                had not been added to the enforcement layer
              </span>{" "}
              as a required constraint. The system was allowed to produce a denial based on
              2023 criteria.
            </p>
            <p className="font-serif-display text-2xl text-foreground italic leading-snug pt-2">
              The model did what it was configured to do. The configuration was wrong.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— Policy gap, not model failure</div>
                <ul className="space-y-3 font-mono text-xs text-foreground/75">
                  <li className="flex justify-between gap-3 border-b border-foreground/10 pb-3">
                    <span>guideline_2023_§_coverage</span>
                    <span className="text-primary">ACTIVE</span>
                  </li>
                  <li className="flex justify-between gap-3 border-b border-foreground/10 pb-3">
                    <span>amendment_2024_§_coverage</span>
                    <span className="text-destructive">NOT ENFORCED</span>
                  </li>
                  <li className="flex justify-between gap-3 border-b border-foreground/10 pb-3">
                    <span>hipaa_minimum_necessary</span>
                    <span className="text-primary">PASS</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span>completeness_check</span>
                    <span className="text-destructive">SKIPPED</span>
                  </li>
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Q4 — timeline */}
      <Section eyebrow="Question 04" title={<>When did each fact become <span className="italic text-accent-blue">true?</span></>} variant="ink">
        <div className="relative">
          <div className="absolute left-[88px] md:left-[120px] top-2 bottom-2 w-px bg-primary-foreground/20" />
          <ol className="space-y-10">
            {timeline.map((t, i) => (
              <motion.li
                key={t.time}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[112px_1fr] gap-6 md:gap-10 items-start relative"
              >
                <div className="font-mono text-sm md:text-base text-primary-glow text-right pt-1">
                  {t.time}
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-glow ring-4 ring-[hsl(var(--surface-ink))]" />
                  <h3 className="font-serif-display text-xl md:text-2xl text-primary-foreground leading-tight mb-2">
                    {t.event}
                  </h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed max-w-xl">
                    {t.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="mt-14 pt-8 border-t border-primary-foreground/15 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", l: "Hospital info system", d: "Allowed prior auth on incomplete record" },
            { n: "02", l: "AI governance team", d: "Hadn't loaded the 2024 guideline" },
            { n: "03", l: "Human reviewer", d: "Rubber-stamped without independent review" },
          ].map((f) => (
            <div key={f.n} className="border-l border-primary-glow/40 pl-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">Failure {f.n}</div>
              <div className="text-primary-foreground font-serif-display text-lg mb-1">{f.l}</div>
              <p className="text-xs text-primary-foreground/60">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What changes */}
      <Section eyebrow="What changes" title={<>From undifferentiated negligence to <span className="italic text-accent-blue">precise failure analysis.</span></>}>
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {[
            { who: "For the hospital", body: "Liability exposure shifts. Instead of \"we don't know what the AI did,\" the defense is a complete documented record. That cuts both ways — it surfaces failures that can be fixed before they become cases." },
            { who: "For regulators", body: "A standard for AI auditability in clinical settings. The question shifts from \"do you have AI governance?\" to \"can you produce the decision record for case #447821?\"" },
            { who: "For AI vendors", body: "The vendor provides the model. The hospital owns the compliance liability. Nexus is the layer that makes the hospital's defense defensible independent of what the vendor provides." },
            { who: "For the field", body: "A malpractice case that can be investigated is a case that can be learned from. Specific failure modes become specific rule changes — at the policy layer, not by retraining the model." },
          ].map((b) => (
            <FadeIn key={b.who}>
              <div className="bg-background p-8 h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">— {b.who}</div>
                <p className="text-foreground/75 leading-relaxed">{b.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Components */}
      <Section eyebrow="The components" title={<>Four pieces of the <span className="italic text-accent-blue">Nexus</span> suite.</>}>
        <div className="border-t border-foreground/15">
          {components.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <a
                href={`https://github.com/Gonzih/${c.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-12 gap-6 py-8 border-b border-foreground/15 hover:bg-secondary/40 transition-colors px-2 -mx-2"
              >
                <div className="md:col-span-1 font-mono text-xs text-foreground/40 pt-1">
                  0{i + 1}
                </div>
                <div className="md:col-span-4">
                  <div className="font-mono text-sm text-primary font-semibold break-all">{c.name}</div>
                </div>
                <div className="md:col-span-3 font-serif-display text-lg text-foreground italic leading-snug">
                  {c.role}
                </div>
                <div className="md:col-span-3 text-sm text-foreground/65 leading-relaxed">
                  {c.detail}
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground/10 panel-ink relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-ink opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-6xl font-light leading-[1.05] text-primary-foreground mb-8">
            The decision was made. <br />
            <span className="italic text-primary-glow">Now it can be answered for.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Explore the architecture
            </Link>
            <a
              href="https://github.com/Gonzih"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              View source on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudy;
