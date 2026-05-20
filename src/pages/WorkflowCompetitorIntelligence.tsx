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

const perPostActions = [
  {
    signal: "Feature request / product complaint",
    action:
      "Opus builds the feature in real time → records video of final product → sends to product team",
  },
  {
    signal: "Question / industry insight",
    action:
      "Opus writes SEO-optimized blog post → publishes it → sends link to marketing team",
  },
];

const metaLayers = [
  {
    n: "01",
    layer: "Browser harness",
    tool: "Playwright or Puppeteer",
    detail:
      "Runs as a scheduled task. Signed-in session stored in the browser profile directory — bypasses Cloudflare and newsfeed API restrictions completely.",
  },
  {
    n: "02",
    layer: "Screenshot pipeline",
    tool: "Post → image file",
    detail:
      "Each post is captured as a screenshot named by group + timestamp. Images are the unit of data — model-agnostic, works on any UI.",
  },
  {
    n: "03",
    layer: "Multi-model routing",
    tool: "cc-agent job spawner",
    detail:
      "cc-agent spawns per-screenshot jobs with model routing. Fast model for categorization, capable model for synthesis. Cost is proportional to value delivered.",
  },
  {
    n: "04",
    layer: "Slack output",
    tool: "MCP tool call",
    detail:
      "The synthesis agent (Opus) posts the weekly brief to Slack via an MCP tool call — no credentials in code, no webhook URLs hardcoded.",
  },
  {
    n: "05",
    layer: "Blog publish",
    tool: "git + auto-merge",
    detail:
      "Agent clones the blog repo, writes the post, commits, pushes. PR merges automatically. No human in the loop.",
  },
  {
    n: "06",
    layer: "Video recording",
    tool: "Playwright page.video",
    detail:
      "Playwright page.video.start() captures the feature demo while the agent builds it. The video is the artifact — sent directly to the product team.",
  },
];

const WorkflowCompetitorIntelligence = () => {
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
            Workflow #001
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
              — Competitor Intelligence Pipeline
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              Competitors' customers{" "}
              <span className="text-accent-blue italic">write the roadmap.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              Facebook competitor groups are an unmonitored goldmine. Customers complain publicly,
              request features, signal churn — all in the open. A signed-in browser harness
              sweeps them weekly. A multi-model pipeline does the rest.
            </motion.p>
          </div>

          {/* Metrics panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">ARR start</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">$1.2M</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">ARR end</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">$5.5M</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Timeframe</dt>
                <dd className="text-foreground">1 year</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Source</dt>
                <dd className="text-foreground">Founder, X</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Groups swept</dt>
                <dd className="text-foreground">6 weekly</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Human in loop</dt>
                <dd className="text-foreground">Optional</dd>
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
            An unmonitored goldmine.{" "}
            <span className="italic text-accent-blue">In the open.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Facebook competitor groups are where customers go when they're frustrated. They complain
              publicly, request features loudly, and announce churn before it happens — all in
              a single searchable thread.
            </p>
            <p>
              No newsfeed API exists. Cloudflare blocks conventional scrapers. But a signed-in browser
              session bypasses this completely. Playwright or Puppeteer, running with a stored
              profile directory, sees exactly what a logged-in user sees.
            </p>
            <p>
              The pipeline sweeps 4 competitor groups and 2 industry groups every week. Every new
              post becomes a screenshot. Every screenshot becomes a structured data row. Every data
              row triggers an automated action.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — Why this works
                </div>
                <ul className="space-y-4 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "Competitors don't moderate these groups — signal is raw",
                    "Posts are public within the group — no ethical issues with reading",
                    "Volume is low enough to process per-post with Opus",
                    "Churn signals arrive before the customer churns",
                    "Feature requests are already ranked by competitor frustration",
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
            Three models.{" "}
            <span className="italic text-accent-blue">One pipeline.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`Browser harness (signed-in Facebook account)
  → sweeps 4 competitor groups + 2 industry groups, weekly cron
  → screenshots every new post

GPT-4.5 (fast, cheap)
  → reads screenshot, categorizes post
  → extracts: author, group, signal type, content
  → outputs structured table row

Sonnet 4.6 (triage layer)
  → labels: competitor type, signal category
  → signal categories:
      [complaining, feature request, churn signal,
       pricing, question, industry insight]

Opus 4.7 (synthesis + action)
  → weekly cron: finds patterns across all posts
      → writes brief → posts to Slack (Monday morning)
  → per-post actions (see below)`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why the model split matters
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  GPT-4.5 at scale for categorization keeps cost low. Sonnet for triage is fast and
                  accurate on structured labeling.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Opus only runs where synthesis depth matters — pattern finding across 100+ posts,
                  or building a real feature.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 leading-relaxed font-mono">
                    Cost is proportional to value delivered.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Per-post automation */}
      <Section
        eyebrow="Per-post automation"
        title={
          <>
            Signal detected.{" "}
            <span className="italic text-accent-blue">Action taken.</span>
          </>
        }
      >
        <div className="border border-foreground/10 overflow-hidden mb-10">
          <div className="grid grid-cols-2 bg-foreground/5 border-b border-foreground/10">
            <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Signal
            </div>
            <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-l border-foreground/10">
              Automated action
            </div>
          </div>
          {perPostActions.map((row) => (
            <motion.div
              key={row.signal}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 border-b border-foreground/8 last:border-0"
            >
              <div className="px-5 py-4 text-sm text-foreground/70 leading-snug">
                {row.signal}
              </div>
              <div className="px-5 py-4 text-sm text-foreground/80 leading-snug border-l border-foreground/10">
                {row.action}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <aside className="panel-ink p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                — Feature pipeline
              </div>
              <p className="text-sm text-primary-foreground/75 leading-relaxed mb-4">
                When a feature request or product complaint is detected, Opus doesn't file a ticket.
                It builds the feature — in real time, in the product codebase — then records a
                Playwright video of the running result and sends it to the product team.
              </p>
              <p className="text-xs text-primary-foreground/50 font-mono leading-relaxed">
                The product team receives a demo video, not a request.
              </p>
            </aside>
          </FadeIn>
          <FadeIn delay={0.1}>
            <aside className="panel p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-4">
                — Content pipeline
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                When a question or industry insight is detected, Opus writes an SEO-optimized blog
                post answering it — with competitive positioning baked in. The agent clones the blog
                repo, writes the post, commits, pushes, and the PR merges automatically.
              </p>
              <p className="text-xs text-foreground/45 font-mono leading-relaxed">
                Marketing receives a published link, not a draft.
              </p>
            </aside>
          </FadeIn>
        </div>
      </Section>

      {/* The Loop */}
      <Section
        eyebrow="The loop"
        title={
          <>
            Competitors' weaknesses{" "}
            <span className="italic text-accent-blue">write the content calendar.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <Code>{`Competitor customers complain in Facebook group
  → Browser harness screenshots post
  → GPT-4.5 categorizes: "feature request"
  → Sonnet labels: competitor:ProductX, signal:feature_request
  → Opus builds the feature in product codebase
  → Playwright records demo video
  → Video → product team Slack

Competitor customers ask industry question
  → GPT-4.5 categorizes: "industry insight"
  → Sonnet labels: signal:question
  → Opus writes SEO post, positions against competitor
  → Agent clones blog repo, commits, PR merges
  → Published link → marketing team Slack

Every Monday morning
  → Opus synthesizes week's posts
  → Finds patterns across 100+ data points
  → Writes brief: top signals, competitor weaknesses, roadmap recommendations
  → Posts to #competitive-intelligence Slack`}</Code>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Competitors' customers write the roadmap.
              </p>
              <p className="text-sm text-foreground/60">
                Feature requests ranked by competitor frustration, not internal opinion.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Competitors' weaknesses write the content calendar.
              </p>
              <p className="text-sm text-foreground/60">
                SEO posts that answer questions competitors' customers are asking publicly.
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
            How to{" "}
            <span className="italic text-accent-blue">build it.</span>
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
      </Section>

      {/* Tags */}
      <section className="px-6 md:px-10 py-12 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 mr-2">
            Tags
          </span>
          {["intelligence", "automation", "content", "saas", "facebook", "competitive-research"].map(
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

export default WorkflowCompetitorIntelligence;
