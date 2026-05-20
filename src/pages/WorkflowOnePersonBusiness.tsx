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

const aiPrinciples = [
  {
    n: "01",
    title: "Feed expert sources",
    detail:
      "Don't ask generic questions. Paste in books, YouTube transcripts, specific frameworks. The quality of AI output scales directly with the quality of what you feed it.",
  },
  {
    n: "02",
    title: "Interview-style prompts",
    detail:
      "Structure prompts that extract YOUR situation first, then generate tailored strategy. 'Here is my customer avatar, my offer, my price point — now build the content calendar' outperforms any generic prompt.",
  },
  {
    n: "03",
    title: "First draft, not final draft",
    detail:
      "Use AI output as a starting point. Refine it to match how you actually speak. Your voice is the differentiator — AI gives you speed, you give it direction.",
  },
  {
    n: "04",
    title: "Never post raw AI output",
    detail:
      "The person directing the AI is where the magic lives. Unedited AI content is detectable, generic, and erodes trust. The edit is not optional.",
  },
];

const metaMapping = [
  {
    task: "Weekly newsletter",
    impl: "cc-agent cron (Monday 8am) → content agent reads your CLAUDE.md pillars → drafts newsletter → emails to your list",
  },
  {
    task: "Social post generation",
    impl: "Coordinator spawns post agent → pulls ideas from newsletter → generates 5 posts per platform",
  },
  {
    task: "Content distribution",
    impl: "Spawned Postiz/scheduling agent pushes to all platforms on defined schedule",
  },
  {
    task: "Customer avatar",
    impl: "Stored in CLAUDE.md as persistent context — all marketing agents read it before generating any copy",
  },
  {
    task: "Landing page",
    impl: "Spawned agent generates copy from avatar + offer → commits to site → deploys via CI",
  },
  {
    task: "Offer iteration",
    impl: "Coordinator tracks conversion metrics → spawns A/B variant agent when conversion drops below threshold",
  },
];

const startingWeek = [
  { day: "Day 1–2", action: "Write brand strategy — pillars, customer avatar, 1–2 sentence positioning bio" },
  { day: "Day 3–4", action: "Generate offer + landing page copy using avatar as input context" },
  { day: "Day 5–6", action: "Write first newsletter, pull 5 social posts from it" },
  { day: "Day 7", action: "Post, observe, iterate — measure what resonates, double down on it" },
];

const WorkflowOnePersonBusiness = () => {
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
            Workflow #005
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
              — One-Person Business Operating System
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              Brand. Content. Offer.{" "}
              <span className="text-accent-blue italic">AI accelerates all three.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              The math for a $1M/year solo business is not complicated. The execution bottleneck
              is. AI removes the execution gap between your idea and published output — without
              removing the thinking that makes it worth publishing.
            </motion.p>
          </div>

          {/* Metrics panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Revenue target</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">$1M/yr</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Team size</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">1</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">LP conversion</dt>
                <dd className="text-foreground">2.5%</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Content cadence</dt>
                <dd className="text-foreground">1 idea/week</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Source</dt>
                <dd className="text-foreground">@leopardracer</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Reach</dt>
                <dd className="text-foreground">213.5K views</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The Math */}
      <Section
        eyebrow="The math"
        title={
          <>
            $1M/year.{" "}
            <span className="italic text-accent-blue">One person.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`$1,000,000 / 12 = $83,333/month
$83,333 / 30 = $2,777/day

Paths to $2,777/day:
→ 18 × $150 product sales/day    (course, digital product)
→ 111 × $25 subscriptions/day    (niche AI app, community)
→ 1 × $5,000 client every 2 days (freelancing)
→ 1 × $10,000 client every 4 days (coaching/consulting)
→ Any combination of the above

At 2.5% landing page conversion:
  18 sales/day = 720 visitors/day
  ≈ a few viral posts/month
  OR consistent SEO/social at scale`}</Code>
            <p className="text-foreground/65 leading-relaxed text-sm mt-4">
              720 visitors/day is not a heroic number. It is achievable with a content machine
              that runs every week without fail. The constraint is not traffic math — it is
              execution consistency.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — The honest constraint
                </div>
                <ul className="space-y-4 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "The barrier to entry is lower. The skill cap is higher.",
                    "AI removes the execution bottleneck. It doesn't remove the thinking bottleneck.",
                    "The people who win understand what good looks like AND have infrastructure to ship it at scale.",
                    "Most people get a dopamine hit from watching agents run. Nothing ships. Orchestration is the product.",
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

      {/* Three Pillars */}
      <Section
        eyebrow="Three pillars"
        title={
          <>
            Brand, Content, Offer.{" "}
            <span className="italic text-accent-blue">In that order.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10 mb-10">
          {[
            {
              name: "Brand",
              definition: "Who you are, what you help people achieve, why they should trust you.",
              detail:
                "Brand is not a logo. It is the accumulated answer to 'why this person over anyone else?' It takes months to build and seconds to destroy. AI helps you articulate it — it can't manufacture it.",
            },
            {
              name: "Content",
              definition: "Ideas and opinions that attract people to the brand.",
              detail:
                "Content is the top of the funnel. Every post is a bet that someone who has never heard of you sees it, trusts the idea, and follows the thread back to your offer. Volume + quality both matter.",
            },
            {
              name: "Offer",
              definition: "Product, service, or subscription + landing page that converts.",
              detail:
                "The offer converts attention into revenue. A weak offer with great content bleeds. A great offer with weak content starves. You need both, and the landing page is the bridge.",
            },
          ].map((pillar) => (
            <div key={pillar.name} className="bg-[hsl(var(--surface-ink))] p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-3">
                — {pillar.name}
              </div>
              <p className="font-serif-display text-lg text-primary-foreground leading-snug mb-4">
                {pillar.definition}
              </p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Content Waterfall */}
      <Section
        eyebrow="Content waterfall"
        title={
          <>
            One idea.{" "}
            <span className="italic text-accent-blue">Everywhere.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`1 newsletter/week  (long-form thinking, your best ideas)
  → soft script for 1 YouTube video/week
      → published to podcast platforms
  → social posts  (pull ideas from newsletter)
      → best posts → Reels/YT Shorts script
          (read it, speak to camera)
  → carousels for LinkedIn, Instagram, YouTube community`}</Code>
            <p className="text-foreground/65 leading-relaxed text-sm mt-4">
              One idea, spread everywhere. Don't create unique content per platform — it degrades
              quality and burns energy. The newsletter is the source of truth. Everything else is
              a distribution format.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                  — Why newsletter-first
                </div>
                <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                  {[
                    "Newsletter forces full-thought development — you can't be vague in 800 words",
                    "Email list is the only audience you own — social followers are rented",
                    "Long-form thinking produces short-form content naturally; the reverse is harder",
                    "Repurposing to video and carousels is mechanical; the AI handles it",
                    "SEO value compounds — old newsletter posts keep generating traffic",
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
        </div>
      </Section>

      {/* AI Usage Principles */}
      <Section
        eyebrow="AI usage"
        title={
          <>
            How to use AI{" "}
            <span className="italic text-accent-blue">without losing your voice.</span>
          </>
        }
        variant="ink"
      >
        <div className="space-y-0 border-t border-primary-foreground/10">
          {aiPrinciples.map((principle, i) => (
            <motion.div
              key={principle.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="grid md:grid-cols-12 gap-6 py-8 border-b border-primary-foreground/10"
            >
              <div className="md:col-span-1 font-mono text-xs text-primary/50 pt-1">
                {principle.n}
              </div>
              <div className="md:col-span-3">
                <div className="font-serif-display text-lg text-primary-foreground leading-snug">
                  {principle.title}
                </div>
              </div>
              <div className="md:col-span-8 text-primary-foreground/65 leading-relaxed text-sm">
                {principle.detail}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-primary pl-6 max-w-2xl">
          <p className="font-serif-display text-xl text-primary-foreground leading-snug mb-2">
            "Never post raw AI output."
          </p>
          <p className="text-sm text-primary-foreground/55">
            The person directing the AI is where the magic lives. The edit is not optional — it's
            where your voice re-enters and where generic becomes distinctive.
          </p>
        </div>
      </Section>

      {/* Meta-Harness Mapping */}
      <Section
        eyebrow="Meta-harness mapping"
        title={
          <>
            Every business task.{" "}
            <span className="italic text-accent-blue">Automated.</span>
          </>
        }
      >
        <p className="text-foreground/65 leading-relaxed mb-10 max-w-2xl">
          Once your brand, avatar, and offer are defined in CLAUDE.md, the content pipeline runs
          on cron. You write one newsletter brief — the coordinator spawns agents for social,
          carousel, YouTube script, and email. Everything distributes automatically.
        </p>

        <div className="border border-foreground/10 overflow-hidden mb-10">
          <div className="grid grid-cols-12 bg-foreground/5 border-b border-foreground/10">
            <div className="col-span-4 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Business task
            </div>
            <div className="col-span-8 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-l border-foreground/10">
              Meta-harness implementation
            </div>
          </div>
          {metaMapping.map((row, i) => (
            <motion.div
              key={row.task}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-12 border-b border-foreground/8 last:border-0"
            >
              <div className="col-span-4 px-5 py-4 text-sm text-foreground/70 font-mono leading-snug">
                {row.task}
              </div>
              <div className="col-span-8 px-5 py-4 text-sm text-foreground/70 leading-snug border-l border-foreground/10">
                {row.impl}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <aside className="panel-ink p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                — The automation ceiling they don't mention
              </div>
              <p className="text-sm text-primary-foreground/75 leading-relaxed mb-4">
                The meta-harness doesn't replace your taste. It removes the execution gap between
                your idea and published output. You still direct everything — the system just
                ships while you sleep.
              </p>
              <ul className="space-y-3 text-sm text-primary-foreground/65 leading-relaxed">
                {[
                  "Brand pillars in CLAUDE.md → all agents read them before generating",
                  "Newsletter brief → coordinator spawns social + carousel + video agents",
                  "Cron distributes across all platforms on defined schedule",
                  "Conversion drops → A/B variant agent spawns automatically",
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
                — What lives in CLAUDE.md
              </div>
              <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Customer avatar — who they are, what they want, what they fear",
                  "Brand pillars — the 3–5 things you always stand for",
                  "Positioning bio — 1–2 sentences that orient every agent",
                  "Offer details — price, format, transformation promised",
                  "Voice guidelines — words you use, words you avoid, tone at rest",
                  "Content calendar — current themes, past top performers",
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

      {/* The Starting Week */}
      <Section
        eyebrow="Starting week"
        title={
          <>
            Ship something{" "}
            <span className="italic text-accent-blue">by day 7.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <div className="space-y-0 border-t border-primary-foreground/10 mb-10">
            {startingWeek.map((item, i) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="grid grid-cols-12 gap-4 py-6 border-b border-primary-foreground/10"
              >
                <div className="col-span-3 font-mono text-xs text-primary pt-0.5">
                  {item.day}
                </div>
                <div className="col-span-9 text-sm text-primary-foreground/75 leading-relaxed">
                  {item.action}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-primary-foreground leading-snug mb-2">
                Iteration is the product.
              </p>
              <p className="text-sm text-primary-foreground/55">
                What works eventually stops working. Human nature normalizes novelty. The business
                is the system for noticing what doesn't work and replacing it.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-primary-foreground leading-snug mb-2">
                AI makes iteration 10x faster.
              </p>
              <p className="text-sm text-primary-foreground/55">
                Not by doing it for you — by running variants without the execution cost. You still
                decide what to iterate. The system runs the experiment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tags */}
      <section className="px-6 md:px-10 py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 mr-2">
            Tags
          </span>
          {["business", "content", "brand", "solopreneur", "newsletter", "content-waterfall", "meta-harness", "automation"].map(
            (tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border border-foreground/15 text-foreground/50"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkflowOnePersonBusiness;
