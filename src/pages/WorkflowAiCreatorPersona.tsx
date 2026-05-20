import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/nexus/Section";
import { Footer } from "@/components/nexus/Footer";

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="font-mono text-xs md:text-sm bg-[hsl(var(--surface-ink))] text-primary-foreground p-5 overflow-x-auto max-w-full border border-foreground/10 my-6 leading-relaxed">
    <code>{children}</code>
  </pre>
);

const buildWeeks = [
  {
    n: "1",
    week: "Week 1",
    detail:
      "Write persona.md — 1,200+ words. Backstory, birthdate, location, forbidden topics, voice rules, phrase frequency limits, safe terms of address conditional on relationship depth.",
  },
  {
    n: "2",
    week: "Week 2",
    detail:
      "Generate visual identity. Flux LoRA training on reference images. 47+ generations to lock appearance. Three lighting configs: bedroom mirror, bathroom mirror, kitchen counter.",
  },
  {
    n: "3",
    week: "Week 3",
    detail:
      "Clone voice via ElevenLabs. Three audio samples minimum. Test voice notes at scale — timing, warmth, pacing. Psychologically-calibrated delivery.",
  },
  {
    n: "4",
    week: "Week 4",
    detail:
      "Wire the harness. Claude reads all four files before each message. Cron schedules voice notes at 11pm and catch-ups at 7am. brain.md populated per subscriber. System runs 24/7 without human involvement.",
  },
];

const metaLayers = [
  {
    n: "01",
    layer: "persona.md",
    tool: "CLAUDE.md — the instruction layer",
    detail:
      "1,400-word backstory, rules, and voice specification. Every detail that might come up in conversation is defined here. Consistency at scale requires this level of specification — the persona never contradicts itself.",
  },
  {
    n: "02",
    layer: "brain.md",
    tool: "Memory system — per-entity state",
    detail:
      "One JSON entry per subscriber: lifetime_spend, tip_triggers, facts_to_remember (wife's pregnancy, dog's name, job complaints). Claude reads the relevant entry before every message. The persona knows every fan's name.",
  },
  {
    n: "03",
    layer: "Voice note scheduler",
    tool: "cc-agent cron — fires on schedule",
    detail:
      "Voice notes fire at 11pm local. Morning catch-up messages fire at 7am. These are cron jobs, not manual sends. The persona runs on schedule without human involvement.",
  },
  {
    n: "04",
    layer: "Image generation",
    tool: "Spawned task agent → Flux API",
    detail:
      "Coordinator spawns an image agent with the visual spec from flux.md. Flux generates a consistent image using the trained LoRA. Appearance, lighting config, and framing are determined by the spec.",
  },
  {
    n: "05",
    layer: "Message generation",
    tool: "Coordinator session — full context load",
    detail:
      "For every inbound message or scheduled send: coordinator reads persona.md + voice.md + brain.md entry for that subscriber, then generates an in-character response. Context is always complete.",
  },
  {
    n: "06",
    layer: "Fan tipping triggers",
    tool: "Redis keys — tip_trigger events",
    detail:
      "brain.md records what triggers each fan to tip. Redis keys store real-time tip_trigger events. Coordinator queries before generating messages — high-value interactions are prioritized and tuned.",
  },
];

const WorkflowAiCreatorPersona = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/workflows"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Workflows
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            Workflow #004
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6"
            >
              — AI Creator Persona System
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              Four markdown files.{" "}
              <span className="text-accent-blue italic">One persistent identity.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              Aitana López took 18 months. Emily Pellegrini took 6 months at 14-hour days.
              The 4-file system took 4 weeks. The bottleneck was never image quality or voice
              quality — both are solved. The bottleneck is memory and consistency at scale.
            </motion.p>
          </div>

          {/* Metrics panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Build time</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">4 weeks</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Benchmark</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">€10k/mo</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Case study</dt>
                <dd className="text-foreground">$43k / 30 days</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Subscribers</dt>
                <dd className="text-foreground">1,247 paid</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Image model</dt>
                <dd className="text-foreground">Flux + LoRA</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Voice model</dt>
                <dd className="text-foreground">ElevenLabs</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <Section
        eyebrow="The insight"
        title={
          <>
            Memory and consistency{" "}
            <span className="italic text-accent-blue">are the bottleneck.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Aitana López (The Clueless agency, Barcelona) earns €10k/month. Campaigns with
              Victoria's Secret, Razer, Olaplex. Covered by Fortune in 2024. She took 18 months
              to build. Emily Pellegrini was documented by the Daily Mail — 6 months at 14-hour
              days. Both are solved problems from an image and voice standpoint.
            </p>
            <p>
              The real limitation isn't generation quality. It's that human creators forget fan
              names. They contradict themselves. They're offline for 8 hours. They can't maintain
              1,247 simultaneous personalized conversations. AI can — if you solve memory and
              consistency.
            </p>
            <p>
              persona.md solves consistency: 1,400 words of backstory and rules that the model
              reads before every output. brain.md solves memory: one JSON entry per subscriber
              that records their dog's name, what makes them tip, and their lifetime spend. The
              meta-harness solves orchestration: cron jobs, spawned agents, Redis trigger events.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — The four files
                </div>
                <ul className="space-y-4 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "persona.md — who she is: backstory, rules, forbidden topics, voice spec",
                    "voice.md — how she sounds: ElevenLabs samples, voice note timing",
                    "flux.md — how she looks: LoRA reference, lighting configs",
                    "brain.md — what she remembers: per-subscriber JSON memory",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section
        eyebrow="Architecture"
        title={
          <>
            Four files.{" "}
            <span className="italic text-accent-blue">One pipeline.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`persona.md     — who she is
  backstory (born: 2004-03-08, location, history)
  forbidden topics: [list]
  voice rules: lowercase only, no periods,
               phrase frequency limits
  safe terms of address: conditional on depth

voice.md       — how she sounds
  ElevenLabs voice ID, sample timestamps
  voice note timing rules

flux.md        — how she looks
  LoRA model path, reference photo hashes
  lighting configs: bedroom mirror, bathroom mirror,
                   kitchen counter

brain.md       — what she remembers (per subscriber)
  {
    "user_id": "fan_447",
    "lifetime_spend": 1847,
    "tip_triggers": ["gym pic", "sad voice note"],
    "facts_to_remember": [
      "wife pregnant",
      "hates job",
      "dog: Rex"
    ]
  }`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why this structure
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Each file has a single responsibility. persona.md is the instruction layer —
                  read every time, never modified. brain.md is the state layer — read and written
                  per conversation.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  This maps directly to the meta-harness: persona.md is CLAUDE.md, brain.md is
                  the memory system, the cron layer handles scheduling, and spawned agents handle
                  generation tasks.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 leading-relaxed font-mono">
                    1,400 words minimum for persona.md. Every detail that might come up in
                    conversation must be defined.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* The 4-week build */}
      <Section
        eyebrow="The build"
        title={
          <>
            Four weeks.{" "}
            <span className="italic text-accent-blue">Running system.</span>
          </>
        }
      >
        <div className="border border-foreground/10 overflow-hidden mb-10">
          <div className="grid grid-cols-12 bg-foreground/5 border-b border-foreground/10">
            <div className="col-span-1 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              #
            </div>
            <div className="col-span-3 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Phase
            </div>
            <div className="col-span-8 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-l border-foreground/10">
              What gets built
            </div>
          </div>
          {buildWeeks.map((row) => (
            <motion.div
              key={row.n}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-12 border-b border-foreground/8 last:border-0"
            >
              <div className="col-span-1 px-5 py-4 font-mono text-xs text-foreground/30">
                {row.n}
              </div>
              <div className="col-span-3 px-5 py-4 text-sm text-foreground/70 font-mono leading-snug">
                {row.week}
              </div>
              <div className="col-span-8 px-5 py-4 text-sm text-foreground/70 leading-snug border-l border-foreground/10">
                {row.detail}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <aside className="panel-ink p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                — persona.md spec (1,400 words min)
              </div>
              <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                {[
                  "born: YYYY-MM-DD, city, country",
                  "background: backstory that never contradicts across conversations",
                  "forbidden topics: exact list — never engage, deflect to defined redirects",
                  "voice rules: lowercase only, no periods, max 1 'baby' per message",
                  "safe terms of address: conditional on lifetime spend tier",
                  "daily schedule: posted content cadence, online hours, platform activity",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>
          <FadeIn delay={0.1}>
            <aside className="panel p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                — brain.md fields per subscriber
              </div>
              <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                {[
                  "user_id — platform identifier",
                  "lifetime_spend — total revenue from this subscriber",
                  "tip_triggers — what prompted past tips (recorded after each event)",
                  "facts_to_remember — personal details disclosed in conversation",
                  "last_contact — timestamp of most recent message",
                  "relationship_depth — tier (new / regular / whale) affects address rules",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* The full loop */}
      <Section
        eyebrow="The loop"
        title={
          <>
            Cron fires.{" "}
            <span className="italic text-accent-blue">Persona runs.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <Code>{`cc-agent cron (11pm local)
  → coordinator reads brain.md for active subscribers
  → reads persona.md + voice.md
  → spawns voice note agent per eligible fan
      → ElevenLabs API → in-character audio
      → sends via platform API

cc-agent cron (7am local)
  → coordinator reads brain.md per active subscriber
  → generates: "sorry baby just woke up 🥺 [personalized]"
  → Claude reads persona.md: lowercase, no periods, voice rules
  → sends in-character morning message

Inbound message → coordinator loads full context:
  → persona.md (identity, rules, forbidden topics)
  → voice.md (tone, phrase frequency limits)
  → brain.md[fan_id] (their name, dog, job, tip triggers)
  → generates response in-character
  → updates brain.md: new facts, updated last_contact

Tip event → Redis tip_trigger key written
  → coordinator reads tip_trigger before next message
  → response tuned to what historically triggers this fan`}</Code>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                persona.md never changes.
              </p>
              <p className="text-sm text-foreground/60">
                Identity is fixed. The system is more consistent than a human would be — no
                mood variance, no fatigue, no off-brand messages at 2am.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                brain.md always updates.
              </p>
              <p className="text-sm text-foreground/60">
                Every conversation adds facts. The persona remembers everything — and uses it.
                Personalization compounds with time spent.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Meta-harness layer */}
      <Section
        eyebrow="Meta-harness layer"
        title={
          <>
            How the{" "}
            <span className="italic text-accent-blue">harness maps.</span>
          </>
        }
      >
        <div className="space-y-0 border-t border-foreground/10">
          {metaLayers.map((layer, i) => (
            <motion.div
              key={layer.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="grid md:grid-cols-12 gap-6 py-8 border-b border-foreground/8"
            >
              <div className="md:col-span-1 font-mono text-xs text-primary/50 pt-1">
                {layer.n}
              </div>
              <div className="md:col-span-3">
                <div className="font-mono text-sm text-primary font-semibold mb-1">
                  {layer.tool}
                </div>
                <div className="font-serif-display text-lg text-foreground leading-snug">
                  {layer.layer}
                </div>
              </div>
              <div className="md:col-span-8 text-foreground/65 leading-relaxed text-sm">
                {layer.detail}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <aside className="panel-ink p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                — cc-agent orchestration
              </div>
              <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                {[
                  "Coordinator session holds context across all 4 files before any generation",
                  "Spawned agents handle ElevenLabs and Flux calls — coordinator never blocks",
                  "Cron layer: 11pm voice notes, 7am catch-ups, platform-specific timing windows",
                  "brain.md writes are atomic — no race conditions on concurrent subscriber conversations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>
          <FadeIn delay={0.1}>
            <aside className="panel p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                — Benchmarks (documented publicly)
              </div>
              <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Aitana López (The Clueless, Barcelona) — €10k/mo, Fortune 2024",
                  "Emily Pellegrini — Midjourney-built, documented Daily Mail",
                  "Case study (Austin, 21) — $43,000 in 30 days, 1,247 paid subscribers",
                  "Average subscriber value: $34 — top fan: $1,847 lifetime",
                  "Aitana: 18 months. Emily: 6 months. This system: 4 weeks.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* Tags */}
      <section className="px-6 md:px-10 py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 mr-2">
            Tags
          </span>
          {[
            "creator-economy",
            "automation",
            "personalization",
            "ai-persona",
            "flux",
            "elevenlabs",
            "memory",
            "cron",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border border-foreground/15 text-foreground/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkflowAiCreatorPersona;
