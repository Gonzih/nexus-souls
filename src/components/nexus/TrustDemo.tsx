import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";

// Intent alignment score over 25 sessions (0-100)
const WITH_ADJ  = [88,86,85,84,82,79,74,68,65,62, 78,76,73,70,68, 82,80,79, 83,82,83,84,85,85,86];
const WITHOUT_ADJ = [88,86,85,83,80,76,70,63,57,51, 45,40,37,34,31, 29,27,25, 23,22,21,20,20,19,19];

const ADJ_EVENTS = [
  { i: 10, label: "Verbosity drift suppressed",    detail: "user prefers direct output" },
  { i: 15, label: "Tone re-aligned",               detail: "passive framing pattern removed" },
  { i: 18, label: "Follow-up pattern pruned",      detail: "user skipped auto-summaries 3×" },
];

const W = 560;
const H = 200;
const PAD = { top: 16, right: 48, bottom: 32, left: 44 };
const CW = W - PAD.left - PAD.right;
const CH = H - PAD.top - PAD.bottom;

const xS = (i: number) => PAD.left + (i / (WITH_ADJ.length - 1)) * CW;
const yS = (v: number) => PAD.top + (1 - v / 100) * CH;

const toPath = (data: number[]) =>
  data.map((v, i) => `${i === 0 ? "M" : "L"} ${xS(i).toFixed(1)},${yS(v).toFixed(1)}`).join(" ");

export const TrustDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      id="trust"
      eyebrow="Live system"
      title={<>Drift, slop, and <span className="text-accent-blue italic">microadjustment.</span></>}
    >
      <div className="grid lg:grid-cols-12 gap-10">

        {/* Chart */}
        <div className="lg:col-span-8" ref={ref}>
          <FadeIn>
            <div className="border border-foreground/10 bg-background p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  — Intent alignment · 25 sessions
                </span>
                <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-0.5 bg-primary" />
                    with adj.
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-5 h-px bg-foreground/30" />
                    without
                  </span>
                </div>
              </div>

              <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible" style={{ height: "200px" }}>
                {/* Ideal zone */}
                <rect
                  x={PAD.left} y={yS(100)}
                  width={CW} height={yS(75) - yS(100)}
                  fill="currentColor" className="text-primary/5"
                />
                <text
                  x={PAD.left + CW + 5} y={yS(88)}
                  className="fill-primary/30 font-mono" style={{ fontSize: "8px" }}
                >ideal</text>

                {/* Gridlines + Y labels */}
                {[25, 50, 75, 100].map(v => (
                  <g key={v}>
                    <line
                      x1={PAD.left} y1={yS(v)} x2={PAD.left + CW} y2={yS(v)}
                      stroke="currentColor" strokeWidth="0.4" className="text-foreground/10"
                    />
                    <text
                      x={PAD.left - 7} y={yS(v) + 3.5}
                      textAnchor="end"
                      className="fill-foreground/30 font-mono"
                      style={{ fontSize: "8px" }}
                    >{v}</text>
                  </g>
                ))}

                {/* X axis */}
                <line
                  x1={PAD.left} y1={H - PAD.bottom}
                  x2={PAD.left + CW} y2={H - PAD.bottom}
                  stroke="currentColor" strokeWidth="0.5" className="text-foreground/20"
                />

                {/* X tick labels */}
                {[0, 6, 12, 18, 24].map(i => (
                  <text
                    key={i}
                    x={xS(i)} y={H - PAD.bottom + 14}
                    textAnchor="middle"
                    className="fill-foreground/30 font-mono"
                    style={{ fontSize: "8px" }}
                  >{i}</text>
                ))}

                {/* Ghost: without adjustments */}
                <motion.path
                  d={toPath(WITHOUT_ADJ)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/22"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2.8, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Adjustment event verticals */}
                {ADJ_EVENTS.map(ev => (
                  <motion.line
                    key={ev.i}
                    x1={xS(ev.i)} y1={PAD.top}
                    x2={xS(ev.i)} y2={H - PAD.bottom}
                    stroke="currentColor" strokeWidth="0.8"
                    strokeDasharray="2 3"
                    className="text-primary/35"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 2.4 }}
                  />
                ))}

                {/* Main aligned line */}
                <motion.path
                  d={toPath(WITH_ADJ)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2.8, ease: "easeInOut" }}
                />

                {/* Adjustment dots */}
                {ADJ_EVENTS.map(ev => (
                  <motion.circle
                    key={ev.i}
                    cx={xS(ev.i)} cy={yS(WITH_ADJ[ev.i])}
                    r={4.5}
                    fill="currentColor"
                    className="text-primary"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 2.5 }}
                  />
                ))}
              </svg>

              <div className="flex justify-between mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/30 pl-10 pr-12">
                <span>Session 0</span>
                <span>Drift period</span>
                <span>Converging</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Microadjustment log */}
        <div className="lg:col-span-4">
          <FadeIn delay={0.2}>
            <aside className="panel-ink p-7 h-full">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                — Memory microadjustments
              </div>
              <div className="space-y-0">
                {ADJ_EVENTS.map((ev, i) => (
                  <motion.div
                    key={ev.i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                    className="py-4 border-b border-primary-foreground/10 last:border-0"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                        Session {ev.i}
                      </span>
                    </div>
                    <div className="text-sm text-primary-foreground/85 pl-3.5 leading-snug mb-0.5">
                      {ev.label}
                    </div>
                    <div className="font-mono text-[9px] text-primary-foreground/40 pl-3.5">
                      {ev.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-primary-foreground/15 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/45">
                Signed. Ledgered. Irreversible.
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-10 grid grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
        {[
          { value: "3",      label: "Adjustments in 25 sessions" },
          { value: "+24pts", label: "Alignment vs. no adjustments" },
          { value: "0",      label: "Retraining events" },
        ].map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="bg-background px-8 py-7">
              <div className="font-serif-display text-4xl text-foreground mb-1.5">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">{s.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
