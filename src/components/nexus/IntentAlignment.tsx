import { Section, FadeIn } from "./Section";

const steps = [
  {
    n: "01",
    label: "Intent Mining",
    body: "The current prompt is a fragment. Actual intent lives in accumulated memory — interaction history, behavioral patterns, correction signals. We mine it from the record, not the moment.",
  },
  {
    n: "02",
    label: "Performative Scoring",
    body: "Every agent action is scored against mined intent. Not self-reported confidence. Not what the agent claims it will do. What it actually did.",
  },
  {
    n: "03",
    label: "Memory Microadjustment",
    body: "Scores feed back as signed memory entries. Small corrections, continuously. No retraining. No rollback. The loop itself is the alignment mechanism.",
  },
];

export const IntentAlignment = () => (
  <Section
    id="alignment"
    eyebrow="Alignment mechanism"
    title={<>Identity is the substrate <span className="text-accent-blue italic">for alignment.</span></>}
  >
    <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-14">
      {steps.map((s, i) => (
        <FadeIn key={s.n} delay={i * 0.1}>
          <div className="bg-background p-8 h-full flex flex-col">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">
              {s.n} — {s.label}
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed">{s.body}</p>
          </div>
        </FadeIn>
      ))}
    </div>

    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        <FadeIn>
          <blockquote className="border-l-2 border-primary pl-6 py-2 mb-8">
            <p className="font-serif-display text-2xl md:text-3xl font-light leading-snug text-foreground italic">
              "Drift and slop aren't model failures. They're memory failures."
            </p>
          </blockquote>
          <div className="space-y-5 text-foreground/70 leading-relaxed">
            <p>
              An agent without persistent identity can't drift — there's nothing to drift from.
              One with identity but no intent model drifts silently. The soulchain gives you the record.
              Intent mining gives you the target. Performative scoring closes the loop.
            </p>
            <p>
              Each microadjustment is a signed entry in the behavioral ledger. The correction history
              becomes part of the agent's identity — auditable, attributable, irreversible.
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="lg:col-span-5">
        <FadeIn delay={0.15}>
          <aside className="panel-ink p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">
              — The loop
            </div>
            <div className="space-y-0 font-mono text-sm">
              {[
                { label: "memory[]",    val: "mine intent" },
                { label: "intent",      val: "score action" },
                { label: "score",       val: "write adjustment" },
                { label: "adjustment",  val: "sign + ledger" },
                { label: "ledger",      val: "next context" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline gap-3 py-3 border-b border-primary-foreground/10 last:border-0"
                >
                  <span className="text-primary w-28 shrink-0">{row.label}</span>
                  <span className="text-primary-foreground/40 text-xs">→</span>
                  <span className="text-primary-foreground/75 text-xs">{row.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-primary-foreground/15 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/45">
              Continuous. Signed. Auditable.
            </div>
          </aside>
        </FadeIn>
      </div>
    </div>
  </Section>
);
