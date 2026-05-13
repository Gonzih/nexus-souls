import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section, FadeIn } from "./Section";

const studies = [
  {
    num: "01",
    tag: "Healthcare · AI Malpractice Investigation",
    href: "/case-study/ai-malpractice",
    title: "A walkthrough of how the Nexus suite reconstructs an AI clinical decision — fact by fact, weight by weight, minute by minute.",
    subtitle: "Time-travel queries on immutable facts. Cosine-similarity influence graphs. Pipeline-level policy enforcement logs. Three failure points, three liable parties, one auditable record.",
    meta: [
      ["Domain", "Clinical AI"],
      ["Use case", "Prior Auth"],
      ["Components", "4 of 31"],
      ["Read time", "6 min"],
    ],
  },
  {
    num: "02",
    tag: "Infrastructure · nexus-temporal-storage",
    href: "/case-study/temporal-storage",
    title: "Why AI systems forget — and how temporal storage fixes that.",
    subtitle: "Datom model. Time-travel queries. Decision reconstruction for fintech fraud and clinical prior auth. Temporal immutability as AI accountability infrastructure.",
    meta: [
      ["Domain", "AI Infrastructure"],
      ["Use case", "Temporal Accountability"],
      ["Focus", "nexus-temporal-storage"],
      ["Read time", "8 min"],
    ],
  },
  {
    num: "03",
    tag: "Semantics · Fact Lifecycle Analysis",
    href: "/case-study/temporal-semantic",
    title: "Facts decay. Models don't know it.",
    subtitle: "The gap between 'this fact exists' and 'this fact still matters.' Dominance curves, temporal semantic drift, belief decay, and fact lifecycle as AI accountability infrastructure.",
    meta: [
      ["Domain", "AI Semantics"],
      ["Use case", "Fact Lifecycle"],
      ["Builds on", "Temporal Storage"],
      ["Read time", "7 min"],
    ],
  },
  {
    num: "04",
    tag: "Identity · Defense · Meta-agent",
    href: "/case-study/identity-guardian",
    title: "The identity guardian pattern.",
    subtitle: "A meta-agent that monitors your information space for temporal semantic anomalies. AI scams work through velocity and source concentration — the defense is detecting the trajectory, not the content.",
    meta: [
      ["Domain", "Identity Defense"],
      ["Pattern", "Meta-agent"],
      ["Builds on", "Temporal Semantics"],
      ["Read time", "8 min"],
    ],
  },
];

export const CaseStudyTeaser = () => (
  <Section
    id="case-study"
    eyebrow="Case studies"
    title={<>Applied scenarios. <span className="text-accent-blue italic">One substrate.</span></>}
    variant="ink"
  >
    <div className="space-y-6">
      {studies.map((s, i) => (
        <FadeIn key={s.num} delay={i * 0.1}>
          <Link
            to={s.href}
            className="group block border border-primary-foreground/15 bg-[hsl(var(--surface-ink))] hover:border-primary-glow/60 transition-colors"
          >
            <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-10">
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — {s.tag}
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl text-primary-foreground leading-snug mb-5">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-primary-foreground/65 leading-relaxed max-w-2xl">
                  {s.subtitle}
                </p>
              </div>
              <div className="lg:col-span-5 lg:border-l lg:border-primary-foreground/15 lg:pl-8 flex flex-col justify-between gap-8">
                <dl className="grid grid-cols-2 gap-y-5 font-mono text-xs">
                  {s.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt className="uppercase tracking-[0.18em] text-primary-foreground/45 mb-1.5">{k}</dt>
                      <dd className="text-primary-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-glow group-hover:gap-3 transition-all">
                  Read the case study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  </Section>
);
