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

const attackVectors = [
  {
    n: "01",
    title: "Velocity injection",
    body: "A fact is injected that rises to dominance abnormally fast — in hours rather than the weeks or months a legitimate fact takes. The speed itself is the signal.",
  },
  {
    n: "02",
    title: "Source isolation",
    body: "A high-weight fact with no corroborating datoms from independent sources. In a healthy information environment, dominant facts accumulate citations. An injected fact arrives fully-formed and alone.",
  },
  {
    n: "03",
    title: "Identity staleness exploitation",
    body: "An adversary identifies a gap between the user's current state and the model's last update of the user's identity. They craft messages that fit the stale model, not the current person.",
  },
  {
    n: "04",
    title: "Contextual anchor replacement",
    body: "A coordinated injection that suppresses existing high-weight facts by flooding the semantic neighbourhood with contradicting assertions until the original decays below threshold.",
  },
];

const guardianCapabilities = [
  {
    label: "Dominance monitoring",
    desc: "Continuous tracking of which facts in the user's information space are currently dominant, and at what rate their weight is changing.",
  },
  {
    label: "Velocity alerting",
    desc: "Flag facts whose weight rises faster than the historical baseline for their semantic category. Speed is a manipulation signal.",
  },
  {
    label: "Source corroboration",
    desc: "Check whether a rising fact has citation support from independent assertion paths, or whether it is arriving from a single coordinated source.",
  },
  {
    label: "Identity freshness",
    desc: "Track when the agent's model of the user was last updated. Surface the gap between then and now. Stale identity models are attack surfaces.",
  },
  {
    label: "Anomaly scoring",
    desc: "Combine velocity, source diversity, and corroboration signals into a single anomaly score per incoming fact. Surface outliers before they reach dominance.",
  },
];

const CaseStudyIdentityGuardian = () => {
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
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">Case Study · 04</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6">— Case Study · Identity · Defense</div>
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words">
              The <span className="text-accent-blue italic">identity guardian</span><br />
              pattern.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
              AI scams don't work by showing you false content. They work by injecting facts into your
              information environment that rise to dominance before you notice. The defense is not
              content filtering — it is temporal semantic anomaly detection.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Domain</dt>
                <dd className="text-foreground">Identity Defense</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Pattern</dt>
                <dd className="text-foreground">Meta-agent</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Builds on</dt>
                <dd className="text-foreground">Temporal Semantics</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Read time</dt>
                <dd className="text-foreground">8 min</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* §1 — The attack surface */}
      <Section
        eyebrow="The attack surface"
        title={<>How AI scams <span className="italic text-accent-blue">actually work.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              Content-based defenses — spam filters, fact-checkers, misinformation labels — share an
              assumption: the threat is a single false statement that can be detected and removed.
            </p>
            <p>
              Sophisticated AI manipulation does not work that way. It works by shaping the information
              environment over time: injecting facts that are individually plausible, letting them
              accumulate weight through repetition and cross-referencing, and then building on that
              dominant foundation to drive a conclusion that no individual fact would have supported.
            </p>
            <p>
              By the time the target acts on the manipulated conclusion, the injected facts may have
              been dominant for weeks. Each individual fact "checks out." Only the trajectory — the
              velocity, the source concentration, the rate of weight accumulation — is the signal.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">— The manipulation timeline</div>
                <div className="space-y-0">
                  {[
                    { phase: "Week 1", act: "Plausible facts injected. Weight low. Below awareness threshold.", col: "text-primary-foreground/50" },
                    { phase: "Week 2", act: "Cross-referencing begins. Facts cite each other. Weight climbs.", col: "text-primary-foreground/70" },
                    { phase: "Week 3", act: "Injected facts reach dominance. They now shape how new information is interpreted.", col: "text-primary-glow" },
                    { phase: "Week 4", act: "Target acts on a conclusion that feels self-evident. The manipulation is complete.", col: "text-destructive" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.phase}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex gap-4 py-4 border-b border-primary-foreground/10 last:border-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary-foreground/40 w-16 shrink-0 pt-0.5">{row.phase}</span>
                      <span className={`text-sm leading-relaxed ${row.col}`}>{row.act}</span>
                    </motion.div>
                  ))}
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* §2 — Attack vectors */}
      <Section
        eyebrow="Attack vectors"
        title={<>Four manipulation <span className="italic text-accent-blue">patterns.</span></>}
        variant="ink"
      >
        <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {attackVectors.map((v) => (
            <FadeIn key={v.n}>
              <div className="bg-[hsl(var(--surface-ink))] p-8 h-full">
                <div className="font-mono text-xs text-primary-glow mb-4">{v.n}</div>
                <h3 className="font-serif-display text-2xl text-primary-foreground leading-tight mb-3">{v.title}</h3>
                <p className="text-sm text-primary-foreground/65 leading-relaxed">{v.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* §3 — Memory and data sovereignty */}
      <Section
        eyebrow="Data sovereignty"
        title={<>You should own your <span className="italic text-accent-blue">temporal record.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              The prerequisite for the guardian pattern is data sovereignty: the user must have access
              to a temporal record of what entered their information space and when. Without this record,
              there is nothing to monitor.
            </p>
            <p>
              This is not a privacy argument in the traditional sense — it is an infrastructure
              argument. Just as you need a bank statement to audit your financial transactions, you
              need a temporal datom log to audit your information transactions. Currently, that log
              does not exist for most users, in any form, under their control.
            </p>
            <p>
              The identity guardian pattern requires three components under user control: a temporal
              datom store for their information space, a weight computation layer that tracks dominance
              curves, and a monitoring agent with read access to both.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FadeIn>
              <aside className="panel p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— What data sovereignty means here</div>
                <ul className="space-y-4 text-sm text-foreground/70">
                  {[
                    "A portable log of every fact asserted into your context, with timestamps",
                    "Weight history — not just current weight, but the full dominance curve",
                    "Source metadata — where did this fact come from, and through what path",
                    "Export and portability — the record follows you, not the platform",
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

      {/* §4 — The guardian pattern */}
      <Section
        eyebrow="The guardian pattern"
        title={<>A meta-agent that <span className="italic text-accent-blue">watches the watchers.</span></>}
        variant="ink"
      >
        <div className="space-y-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                The identity guardian is not a content moderation system. It does not evaluate whether
                facts are true or false. It evaluates whether the dynamics of fact accumulation in a
                user's information space are consistent with legitimate information flow or match
                known manipulation patterns.
              </p>
              <p>
                The guardian agent has read access to the user's temporal datom store and weight
                computation layer. It runs continuously, monitoring dominance curves for anomalies and
                surfacing alerts when specific patterns are detected.
              </p>
              <Code>{`// Guardian agent interface
interface GuardianAlert {
  factId:       string;
  attribute:    string;
  signal:       "velocity" | "isolation" | "staleness" | "anchor_suppression";
  weight:       number;    // current dominance
  weightDelta:  number;    // rate of change
  sourceCount:  number;    // distinct assertion sources
  anomalyScore: number;    // 0.0 (normal) – 1.0 (high anomaly)
  detectedAt:   Date;
}

// Monitor runs on every weight recomputation
function monitor(
  userId: string,
  since:  Date
): GuardianAlert[]`}</Code>
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow">— Guardian capabilities</div>
                  {guardianCapabilities.map((c) => (
                    <div key={c.label} className="pb-5 border-b border-primary-foreground/10 last:border-0 last:pb-0">
                      <div className="font-mono text-xs text-primary-glow mb-2">{c.label}</div>
                      <p className="text-sm text-primary-foreground/65 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </aside>
              </FadeIn>
            </div>
          </div>

          {/* Anomaly example */}
          <FadeIn>
            <div className="border border-primary-foreground/15 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-6">— Example anomaly alert</div>
              <Code>{`{
  "factId":      "claim:investment-opportunity-xr7",
  "attribute":   "legitimacy",
  "signal":      "velocity",
  "weight":      0.73,         // already near-dominant
  "weightDelta": +0.61,        // rose 0.61 in 48 hours (baseline: +0.04/day)
  "sourceCount": 2,            // only 2 distinct assertion sources
  "anomalyScore": 0.94,        // high anomaly
  "detectedAt":  "2026-05-12T09:14:00Z"
}

// Human-readable: A fact about the "legitimacy" of an investment opportunity
// reached 73% dominance in 48 hours from 2 sources.
// Historical baseline for legitimacy claims: ~4% weight gain per day,
// from 12+ independent sources before reaching this weight.
// This pattern matches velocity injection. Flag for review.`}</Code>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* §5 — Open infrastructure */}
      <Section
        eyebrow="Open infrastructure"
        title={<>A community good, <span className="italic text-accent-blue">not a product.</span></>}
      >
        <div className="space-y-10">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
              <p>
                The identity guardian pattern works best as open infrastructure. A proprietary
                implementation creates a single point of trust — and a single point of compromise.
                An adversary who controls the guardian controls the defense.
              </p>
              <p>
                The Nexus framing is that this belongs in the same category as DNS, certificate
                authorities, and BGP monitoring — infrastructure that the internet governance community
                maintains collectively because it is too important to be owned by any single actor.
              </p>
              <p>
                The temporal datom store, the weight computation layer, and the guardian monitoring
                agent should all be open specifications with multiple independent implementations.
                Users should be able to run their own guardian instances against their own data stores.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FadeIn>
                <aside className="panel p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-5">— The internet governance parallel</div>
                  <ul className="space-y-4 text-sm text-foreground/70">
                    {[
                      "DNS is open infrastructure because centralized control breaks trust",
                      "BGP monitoring is community-maintained because the stakes are too high for one owner",
                      "Identity guardian belongs in the same category — too important to be a product",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start pb-4 border-b border-foreground/10 last:border-0 last:pb-0">
                        <span className="font-mono text-primary shrink-0 text-xs">→</span>
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
                "The manipulation is not in the content. It is in the timing, the velocity, and the
                source concentration. Build infrastructure that can see those signals — and make it
                a commons."
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
            The scam was in the trajectory,<br />
            <span className="italic text-primary-glow">not the statement.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/case-study/temporal-semantic"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-glow hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Temporal semantic analysis
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] hover:border-primary-glow hover:text-primary-glow transition-colors"
            >
              Explore the architecture <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudyIdentityGuardian;
