import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section, FadeIn } from "./Section";

export const CaseStudyTeaser = () => (
  <Section
    id="case-study"
    eyebrow="Case study · 01"
    title={<>When AI denies a prior auth and a patient is <span className="text-accent-blue italic">harmed.</span></>}
    variant="ink"
  >
    <FadeIn>
      <Link
        to="/case-study/ai-malpractice"
        className="group block border border-primary-foreground/15 bg-[hsl(var(--surface-ink))] hover:border-primary-glow/60 transition-colors"
      >
        <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-10">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
              — Healthcare · AI Malpractice Investigation
            </div>
            <h3 className="font-serif-display text-2xl md:text-3xl text-primary-foreground leading-snug mb-5">
              A walkthrough of how the Nexus suite reconstructs an AI clinical
              decision — fact by fact, weight by weight, minute by minute.
            </h3>
            <p className="text-sm md:text-base text-primary-foreground/65 leading-relaxed max-w-2xl">
              Time-travel queries on immutable facts. Cosine-similarity influence
              graphs. Pipeline-level policy enforcement logs. Three failure points,
              three liable parties, one auditable record.
            </p>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-primary-foreground/15 lg:pl-8 flex flex-col justify-between gap-8">
            <dl className="grid grid-cols-2 gap-y-5 font-mono text-xs">
              {[
                ["Domain", "Clinical AI"],
                ["Use case", "Prior Auth"],
                ["Components", "4 of 31"],
                ["Read time", "6 min"],
              ].map(([k, v]) => (
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
  </Section>
);
