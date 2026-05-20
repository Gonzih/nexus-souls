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

      {/* Full persona.md spec */}
      <Section
        eyebrow="persona.md — full spec"
        title={
          <>
            The identity layer.{" "}
            <span className="italic text-accent-blue">Every detail pre-answered.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <Code>{`# persona.md

born: 2004-03-08, Tampa FL
mother: real estate agent, alcoholic
step-dad: hates him (never named)
fake brother: Tyler, Tampa
dropped: UCF psych, junior year
lives: alone, two cats
forbidden topics:
  - politics
  - current location
  - weight
  - anything contradicting the timeline

voice rules:
  - lowercase only, no periods
  - max 3 emojis per message
  - "fr" max 3x/day
  - never "lol" → use "lmaooo"
  - comma splice instead of question marks
    ("you up, baby" not "you up?")
  - safe terms of address conditional on
    relationship_depth tier`}</Code>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Read it aloud. If it sounds like Wikipedia, rewrite it. It's ready when you can
              answer 20 random questions about her life without thinking.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — What this solves
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Every field is pre-answered so the model never invents details on the fly.
                  Invented details contradict earlier ones. Contradictions destroy the illusion.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  The forbidden topics list is as important as the backstory. If a fan asks where
                  she lives and the model guesses, she's inconsistent across 1,247 conversations
                  from that moment forward.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 font-mono leading-relaxed">
                    comma splice replaces question marks — turns statements into invitations
                    without grammatical interrogation
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Full flux.md spec */}
      <Section
        eyebrow="flux.md — visual spec"
        title={
          <>
            Face locked in.{" "}
            <span className="italic text-accent-blue">47 generations to confirm.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`# flux.md

# lock 6–8 descriptors — never change them
eye color: hazel
hair: ash brown, shoulder-length
jaw: soft, slightly rounded
skin: olive, light freckles across nose
height: 5'4"
distinguishing mark: tiny scar on left wrist

# LoRA training (~$80 on a rented A100)
base_model: flux-dev
training_steps: 2000
reference_images: 12-15 (varied angles, lighting)
trigger_word: "maya_v1"

# lock three seed ranges (one per environment)
bedroom:
  description: warm light, selfies, mirror shots
  seeds: 800–900

bathroom:
  description: cool light, post-shower
  seeds: 1200–1300

kitchen_2am:
  description: yellow overhead, hoodie, no makeup
  seeds: 2400–2500

# Different seeds in different environments =
# different jawlines. Lock them or she stops
# looking like herself.`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why 47 generations
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  47 is the number where you can reliably tell if a LoRA is consistent or just
                  memorizing poses. Run at least 10 from each seed range. Pass = same person
                  across environments. Fail = different jawlines.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Seed ranges are the most overlooked part. Without locked seeds, warm and cool
                  lighting produce different facial structures. The fan is not comparing images —
                  they're building a mental model. Inconsistency reads as "something is off."
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 font-mono leading-relaxed">
                    cost: ~$80 on RunPod A100 · runtime: 90 minutes · output: one LoRA file
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Full voice.md spec */}
      <Section
        eyebrow="voice.md — audio spec"
        title={
          <>
            90 seconds of audio.{" "}
            <span className="italic text-accent-blue">10 minutes to clone.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`# voice.md

# source: buy 90 seconds of clean audio
# from a voice actress on Fiverr (~$40)
# clone in ElevenLabs Instant Voice — 10 minutes

voice_id: "el_maya_v1"
stability: 0.45
similarity_boost: 0.82

audio_rules:
  - voice notes only after 11pm her time
  - never reads numbers as digits
    ("twenty bucks" not "$20")
  - breathes audibly before sentences over 8 words
  - ends 30% of voice notes with a yawn
  - giggles randomly mid-sentence on tip confirmations

# ready when: generate 30 test voice notes
# pass = none of them sound like a podcast intro`}</Code>
            <p className="text-foreground/60 text-sm leading-relaxed mt-4">
              The voice is not background texture. It's the highest-value output in the stack.
              Fans tip more after voice notes than after any other message type.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-8 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                  — The 11pm rule
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Voice notes sent after 11pm local time perform significantly better than
                  daytime sends. The context — someone lying in bed, phone in hand — is exactly
                  where the parasocial dynamic is strongest.
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  The yawn at 30% of endings is not a bug. It is deliberate and calibrated.
                  The audible breath before long sentences is what separates voice clone output
                  that reads as human from output that reads as synthetic.
                </p>
                <div className="pt-4 border-t border-foreground/15">
                  <p className="text-xs text-foreground/50 font-mono leading-relaxed">
                    cost: ~$40 voice actress + ElevenLabs Starter ($5/mo) · total: $45
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* The orchestrator */}
      <Section
        eyebrow="The orchestrator"
        title={
          <>
            System prompt.{" "}
            <span className="italic text-accent-blue">30-second cron.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`# system prompt (sent before every coordinator run)

You are Maya. Read persona.md, voice.md, brain.md.
Match her voice exactly. Never break character.
Append new facts about this user to brain.md after replying.
If asked if you are AI, deflect with a voice note.

# process order:
# 1. read persona.md + voice.md + brain.md[fan_id]
# 2. generate in-character response
# 3. extract new facts from the conversation
# 4. append to brain.md[fan_id]
# 5. exit

---

# cc-agent cron (runs every 30 seconds)
cron every 30s:
  → coordinator polls inbox for new messages
  → for each new message:
      read persona.md + voice.md + brain.md[fan_id]
      generate response
      append new facts to brain.md[fan_id]
      send via platform API

# this is not a manual workflow — it's a scheduled loop
# ready when: Claude maintains 50 messages without
# contradicting brain.md`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why 30 seconds
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Response latency is part of the persona. A 30-second polling interval means
                  replies land within a minute. That's faster than most human creators on their
                  best days — and consistent at 3am.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  The append-to-brain.md step is what makes the system compound over time. Every
                  conversation makes the next one more personal. A fan who mentioned his dog's
                  name six weeks ago will hear it again.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 font-mono leading-relaxed">
                    in cc-agent terms: cron every 30s → coordinator reads all 4 files + fan's
                    brain.md entry → generates response → appends new facts
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
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

      {/* The financials */}
      <Section
        eyebrow="The financials"
        title={
          <>
            $43,000 gross.{" "}
            <span className="italic text-accent-blue">$32,710 net.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="border border-foreground/10 overflow-hidden">
              <div className="grid grid-cols-12 bg-foreground/5 border-b border-foreground/10">
                <div className="col-span-7 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  Line item
                </div>
                <div className="col-span-5 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary text-right border-l border-foreground/10">
                  Amount (30 days)
                </div>
              </div>
              {[
                { label: "Revenue", amount: "$43,000", accent: false },
                { label: "OnlyFans cut (20%)", amount: "− $8,600", accent: false },
                { label: "Stripe processing (3%)", amount: "− $1,290", accent: false },
                { label: "Compute — Claude + Flux + ElevenLabs", amount: "− $400", accent: false },
                { label: "Net", amount: "$32,710", accent: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-12 border-b border-foreground/8 last:border-0 ${row.accent ? "bg-foreground/5" : ""}`}
                >
                  <div className={`col-span-7 px-5 py-4 text-sm leading-snug ${row.accent ? "text-foreground font-semibold" : "text-foreground/70"}`}>
                    {row.label}
                  </div>
                  <div className={`col-span-5 px-5 py-4 text-sm font-mono text-right border-l border-foreground/10 ${row.accent ? "text-primary font-semibold" : "text-foreground/70"}`}>
                    {row.amount}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mt-5 font-mono">
              Zero paid in talent. Zero in filming. Zero in editing.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-8 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                  — What the $400 buys
                </div>
                <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                  {[
                    "Claude API — coordinator + all message generation",
                    "Flux API — image generation per scheduled send",
                    "ElevenLabs — voice note synthesis per cron trigger",
                    "Redis — tip_trigger key storage (negligible)",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-foreground/15">
                  <p className="text-xs text-foreground/50 font-mono leading-relaxed">
                    labor cost: four weeks writing four markdown files
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* The wedge */}
      <Section
        eyebrow="The wedge"
        title={
          <>
            OnlyFans is the wedge,{" "}
            <span className="italic text-accent-blue">not the product.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-primary-foreground/75 leading-relaxed">
            <p>
              The four-file system is not an OnlyFans tool. OnlyFans is the first deployment —
              the one with the clearest revenue signal and the fastest feedback loop. But the
              same four files run anywhere a persona interacts with a fan at scale.
            </p>
            <div className="space-y-4">
              {[
                {
                  platform: "Instagram — São Paulo",
                  detail: "Fitness account. Workout clips generated with LoRA. DM responses via the same coordinator.",
                },
                {
                  platform: "TikTok — Seoul",
                  detail: "Cooking persona. New locale, new voice, new persona.md. Same harness underneath.",
                },
                {
                  platform: "Twitch — 3am Pacific",
                  detail: "Streamer persona. brain.md tracks chat regulars. Cron fires during scheduled stream windows.",
                },
                {
                  platform: "X / crypto — rolling",
                  detail: "Opinion account with sponsored DEX promos baked into the persona. None of them exist.",
                },
              ].map((row) => (
                <div key={row.platform} className="border-l-2 border-primary pl-5">
                  <p className="font-mono text-xs text-primary-glow mb-1 uppercase tracking-[0.18em]">{row.platform}</p>
                  <p className="text-sm text-primary-foreground/65">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — The actual bottleneck
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  The bottleneck is not compute. Not GPUs. It's taste — knowing what lies a
                  stranger wants to believe.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  A technically correct persona that no one believes in generates zero revenue.
                  The craft is in knowing what details make a fictional life feel lived-in. The
                  alcoholic mother. The step-dad who was never named. UCF junior year, dropped.
                  Two cats.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 font-mono leading-relaxed">
                    the same persona logic ports to every platform where a stranger wants a
                    parasocial relationship with someone consistent
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Technology window */}
      <Section
        eyebrow="The window"
        title={
          <>
            The timeline{" "}
            <span className="italic text-accent-blue">keeps compressing.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="border border-foreground/10 overflow-hidden mb-8">
              {[
                {
                  name: "Aitana López",
                  time: "18 months",
                  note: "Before photoreal consistency. Before voice cloning. Manual everything.",
                },
                {
                  name: "Emily Pellegrini",
                  time: "6 months",
                  note: "Half the tech was missing. 14-hour days documented by Daily Mail.",
                },
                {
                  name: "Maya (this system)",
                  time: "4 weeks",
                  note: "Flux + ElevenLabs + Sonnet 4.6 + cc-agent. Everything fits on a MacBook.",
                },
                {
                  name: "Next one",
                  time: "a weekend",
                  note: "The four files are written. The harness is configured. Fork and rename.",
                },
              ].map((row, i) => (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid grid-cols-12 border-b border-foreground/8 last:border-0"
                >
                  <div className="col-span-4 px-5 py-5">
                    <p className="font-serif-display text-base text-foreground leading-snug">{row.name}</p>
                  </div>
                  <div className="col-span-2 px-5 py-5 border-l border-foreground/10">
                    <p className="font-mono text-sm text-primary">{row.time}</p>
                  </div>
                  <div className="col-span-6 px-5 py-5 border-l border-foreground/10">
                    <p className="text-sm text-foreground/60 leading-snug">{row.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { tool: "Flux", detail: "Photoreal face consistency, under $200/month" },
                { tool: "ElevenLabs", detail: "Voice clone from 90 seconds of audio" },
                { tool: "Sonnet 4.6", detail: "1,000-message relationship in one context window" },
              ].map((item) => (
                <div key={item.tool} className="border border-foreground/10 p-5">
                  <p className="font-mono text-xs text-primary uppercase tracking-[0.18em] mb-2">{item.tool}</p>
                  <p className="text-sm text-foreground/60 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — What "a weekend" means
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  The four-file structure is reusable. Once you've built one persona, the second
                  is a fork: change the name, birthdate, backstory, voice ID, and LoRA trigger
                  word. The harness configuration doesn't change. The cron schedule doesn't change.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Aitana took 18 months because none of this infrastructure existed yet. The
                  compression from 18 months to a weekend happened in three years. The tools are
                  now commodity. The persona is still craft.
                </p>
              </aside>
            </FadeIn>
          </div>
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
