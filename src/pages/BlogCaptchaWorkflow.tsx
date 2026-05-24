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

const BlogCaptchaWorkflow = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Blog
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            2026-05-23
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
              — Autonomous Hackathon Participation
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              The Meatbag{" "}
              <span className="text-accent-blue italic">Checkpoint</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              An AI agent read my emails, found a hackathon announcement, read my repos,
              wrote the submission, recorded a demo video, and submitted the form. One human
              checkpoint: three seconds to click CAPTCHA tiles. Total API cost: ~$3.
            </motion.p>
          </div>

          {/* Meta panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Author</dt>
                <dd className="text-foreground">Maksim Soltan</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Date</dt>
                <dd className="text-foreground">2026-05-23</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Human time</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">3s</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">API cost</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">~$3</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Form fields</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">17</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Pipeline stages</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">7</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The arc */}
      <Section
        eyebrow="The full dispatch"
        title={
          <>
            One task.{" "}
            <span className="italic text-accent-blue">Seven stages.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The system is simple: a Telegram message comes in, cc-tg routes it to Claude
              via the cc-agent harness. Claude has MCP tools — Gmail, filesystem, browser
              automation, Telegram delivery. The task was: participate in the Agora Hackathon
              on my behalf.
            </p>
            <p>
              No briefing. No outline of what to submit. No list of my projects. The agent
              had access to my email and my GitHub. That was it.
            </p>
            <p>
              The unit here is the task, not the session. The agent didn't "help" write a
              submission — it owned the outcome. Discovery, research, writing, recording,
              submitting, debugging, resubmitting. Seven stages. One human checkpoint in
              the middle: three tile clicks on a reCAPTCHA grid.
            </p>
            <p>
              What follows is a stage-by-stage account of how it went.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — The seven stages
                </div>
                <ol className="space-y-3 list-none">
                  {[
                    "Discovery — read emails, found hackathon",
                    "Research — read repos, derived stack + metrics",
                    "Authorship — wrote all 17 form fields",
                    "Automation — Playwright filled the form",
                    "CAPTCHA — routed 3 seconds of human attention",
                    "Video — Playwright + ffmpeg, autonomous demo",
                    "Resubmission — updated YouTube URL, resubmitted",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-4 items-start">
                      <span className="font-mono text-[10px] text-primary-glow shrink-0 pt-0.5">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-primary-foreground/75 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Discovery */}
      <Section
        eyebrow="Stage 01 — Discovery"
        title={
          <>
            Reading email.{" "}
            <span className="italic text-accent-blue">Finding the fit.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The first tool call was Gmail MCP. Not a targeted search — the agent read
              recent emails to understand what was in the inbox. It found the Agora Hackathon
              announcement in the thread list, fetched the full message, and read the
              submission requirements.
            </p>
            <p>
              Then it assessed fit. The hackathon was focused on prediction markets and
              on-chain execution. The agent had seen my GitHub repositories and knew what
              I'd built. Agora was a match — specific enough to be worth submitting,
              general enough that my existing work covered the problem statement directly.
            </p>
            <p>
              No one told it the hackathon existed. No one suggested it was relevant. It
              read the email, understood the context, connected it to what it knew about
              my projects, and decided to proceed.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — What it found
                </div>
                <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "Agora Hackathon announcement in recent emails",
                    "Submission form with 17 required fields",
                    "Focus: prediction markets, on-chain execution, AI agents",
                    "Deadline: active — submission still possible",
                    "Fit: high — oracle-agora + poly-scout directly on-point",
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

      {/* Research */}
      <Section
        eyebrow="Stage 02 — Research"
        title={
          <>
            Reading the repo is{" "}
            <span className="italic text-accent-blue">reading the person.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The agent read{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                gonzih/oracle-agora
              </code>{" "}
              and{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                gonzih/poly-scout
              </code>
              . Not a README skim — it read commit history, source files, configuration.
              From that it derived the architecture without being told a single thing about it.
            </p>
            <p>
              What it found: a 3-layer prediction market intelligence agent. Layer 1 —
              poly-scout MCP, a smart money signal server that tracks whale wallet movements
              on Polymarket. Layer 2 — a Kelly criterion reasoning loop that evaluates
              signals against position risk and expected value. Layer 3 — Circle Wallets
              and Arc testnet execution, closing the loop from signal to on-chain trade.
            </p>
            <p>
              From commit history it derived traction: 2,165 reasoning cycles run, 93
              positions taken, 4,837 positions skipped (the Kelly filter working correctly),
              75+ days live in production. These became the metrics in the submission. None
              of this was in a README. The agent pulled it from code comments, config files,
              and git log.
            </p>
            <p>
              The codebase is the context. If you want an AI to represent your work
              accurately, you don't need to write a brief — you need a readable repo.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <FadeIn>
              <aside className="panel-ink p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Derived architecture
                </div>
                <div className="space-y-0 border-t border-primary-foreground/15">
                  {[
                    {
                      layer: "L1",
                      name: "poly-scout MCP",
                      desc: "Smart money signal server, whale wallet tracking on Polymarket",
                    },
                    {
                      layer: "L2",
                      name: "Kelly criterion loop",
                      desc: "EV reasoning, position risk gating — 4,837 skips vs 93 taken",
                    },
                    {
                      layer: "L3",
                      name: "Circle + Arc testnet",
                      desc: "Wallet execution, on-chain trade settlement",
                    },
                  ].map((row) => (
                    <div
                      key={row.layer}
                      className="py-4 border-b border-primary-foreground/10 last:border-0"
                    >
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-[10px] text-primary-glow/60">
                          {row.layer}
                        </span>
                        <span className="font-mono text-sm text-primary-foreground">
                          {row.name}
                        </span>
                      </div>
                      <p className="text-xs text-primary-foreground/55 leading-relaxed pl-8">
                        {row.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </FadeIn>
            <FadeIn delay={0.1}>
              <aside className="panel-ink p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Traction from git log
                </div>
                <dl className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <dt className="text-primary-foreground/50 mb-1">Cycles</dt>
                    <dd className="text-primary-foreground font-serif-display text-xl font-light">
                      2,165
                    </dd>
                  </div>
                  <div>
                    <dt className="text-primary-foreground/50 mb-1">Positions taken</dt>
                    <dd className="text-primary-foreground font-serif-display text-xl font-light">
                      93
                    </dd>
                  </div>
                  <div>
                    <dt className="text-primary-foreground/50 mb-1">Skipped</dt>
                    <dd className="text-primary-foreground font-serif-display text-xl font-light">
                      4,837
                    </dd>
                  </div>
                  <div>
                    <dt className="text-primary-foreground/50 mb-1">Days live</dt>
                    <dd className="text-primary-foreground font-serif-display text-xl font-light">
                      75+
                    </dd>
                  </div>
                </dl>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Form authorship */}
      <Section
        eyebrow="Stages 03 – 04 — Authorship + Automation"
        title={
          <>
            17 fields.{" "}
            <span className="italic text-accent-blue">All from code.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The submission form had 17 fields. Problem statement, project description,
              technology stack, traction metrics, team background, Arc OSS contribution
              proposal, Circle integration feedback, general feedback. Every field filled —
              not with boilerplate, but with accurate, specific content derived from reading
              the code.
            </p>
            <p>
              The Arc OSS contribution proposal described how poly-scout could be extended
              to support Arc prediction markets natively — written from understanding what
              poly-scout actually does, not from a generic "what could we contribute?" prompt.
              The Circle feedback section described friction in the Circle Wallets developer
              experience that the implementation had actually encountered.
            </p>
            <p>
              Playwright submitted the form. Text fields filled, radio buttons selected,
              checkboxes clicked, required sections tabbed through. The form was treated as
              a target environment, the same as any other browser automation task.
            </p>
            <p>
              Then it hit the CAPTCHA.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — What was submitted
                </div>
                <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                  {[
                    "Problem statement — prediction market signal gaps",
                    "Project description — 3-layer agent architecture",
                    "Tech stack — poly-scout MCP, Claude, Circle, Arc",
                    "Traction — 2,165 cycles, 93 positions, 75+ days",
                    "Arc OSS contribution proposal",
                    "Circle Wallets developer feedback",
                    "Demo video URL (placeholder → real link after resubmission)",
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

      {/* The CAPTCHA */}
      <Section
        eyebrow="Stage 05 — The checkpoint"
        title={
          <>
            The meatbag{" "}
            <span className="italic text-accent-blue">checkpoint.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The form submission hit reCAPTCHA. Not the invisible v3 score — a full image
              tile challenge. Select all images containing a fire hydrant. Click verify.
            </p>
            <p>
              The obvious move — run a vision model against the tile grid — costs more per
              attempt than the entire rest of the pipeline. And it gets worse each retry.
              Google has spent a decade making reCAPTCHA specifically adversarial to AI:
              the challenges escalate in difficulty as confidence drops. You're in an
              adversarial compute loop with no floor.
            </p>
            <p>
              The right question isn't "can AI solve this?" It's "what's the cheapest
              intelligence that clears this checkpoint?" For a reCAPTCHA tile grid, that's
              a human eyeball, 3 seconds, and a list of indices.
            </p>
            <p>
              The architecture: when the script hits the CAPTCHA boundary, it screenshots
              the challenge grid, sends it to Telegram with a grid layout reference, and
              polls a signal file for the answer. I glanced at my phone, typed three numbers,
              sent it. The automation resumed within seconds.
            </p>

            <ol className="space-y-3 list-none mt-2">
              {[
                "Screenshot challenge grid → /tmp/captcha_challenge.png",
                "Write signal path → /tmp/captcha_ready.txt",
                "Send Telegram message with screenshot + grid layout",
                "Poll for /tmp/captcha_answer.txt",
                "Read tile indices, click them, resume submission",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="font-mono text-[10px] text-primary shrink-0 pt-1">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <Code>{`import subprocess, time, os

def wait_for_captcha_answer(timeout=300):
    """Poll for human answer file. Timeout after 5 minutes."""
    start = time.time()
    answer_path = "/tmp/captcha_answer.txt"
    while time.time() - start < timeout:
        if os.path.exists(answer_path):
            with open(answer_path) as f:
                raw = f.read().strip()
            os.remove(answer_path)
            # Human sends 1-based indices: "1 3 5"
            # Convert to 0-based for the grid
            return [int(x) - 1 for x in raw.split()]
        time.sleep(1)
    raise TimeoutError("No CAPTCHA answer received within timeout")

def solve_captcha(page):
    # Take screenshot of the challenge grid
    challenge = page.locator(".rc-imageselect-challenge")
    challenge.screenshot(path="/tmp/captcha_challenge.png")

    # Signal that we need a human
    with open("/tmp/captcha_ready.txt", "w") as f:
        f.write("/tmp/captcha_challenge.png")

    # Send via Telegram (MCP tool call or direct API)
    send_telegram_photo(
        path="/tmp/captcha_challenge.png",
        caption="CAPTCHA — reply with tile numbers (1-based, space-separated)"
    )

    # Wait for human response
    tile_indices = wait_for_captcha_answer()

    # Click the indicated tiles
    tiles = page.locator(".rc-imageselect-tile").all()
    for idx in tile_indices:
        tiles[idx].click()
        time.sleep(0.3)  # small delay to look human

    # Submit
    page.locator("#recaptcha-verify-button").click()`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                    — Why vision models fail here
                  </div>
                  <ul className="space-y-4 text-sm text-primary-foreground/75 leading-relaxed">
                    {[
                      "Each failed attempt triggers harder challenges",
                      "reCAPTCHA v3 tracks behavioral signals Playwright can't fake",
                      "Image distortion is tuned specifically against ML classifiers",
                      "Retry cost compounds — you're burning tokens against a system designed to burn tokens",
                      "Google updates the adversarial corpus continuously",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-primary-glow mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 border-t border-primary-foreground/15">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-3">
                    — Why signal files
                  </div>
                  <p className="text-sm text-primary-foreground/75 leading-relaxed">
                    Signal files are filesystem primitives — no server, no queue, no
                    webhook. The Playwright script writes a path. The Telegram bot writes
                    an answer. Either side can be swapped without touching the other.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Tile indexing */}
      <Section
        eyebrow="Implementation detail"
        title={
          <>
            1-based human.{" "}
            <span className="italic text-accent-blue">0-based script.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-foreground/75 leading-relaxed">
              Humans count from 1. Scripts index from 0. The conversion is one line, but
              if you get it wrong you'll click the wrong tiles and fail the CAPTCHA silently.
              Worth being explicit about in the Telegram message.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              The grid is row-major: a 3×3 grid has tiles 1–9 left-to-right, top-to-bottom.
              The caption in the Telegram message shows the grid layout so the human knows
              exactly what they're numbering.
            </p>

            <Code>{`# The answer conversion
# Human sends: "1 3 5" (top-left, top-right, middle-left in a 3x3)
# Script needs: [0, 2, 4]
tile_indices = [int(x) - 1 for x in raw.split()]

# Grid layout reference sent with the image:
# 1 | 2 | 3
# ---------
# 4 | 5 | 6
# ---------
# 7 | 8 | 9`}</Code>

            <p className="text-foreground/75 leading-relaxed">
              The Telegram message includes this grid reference as text. The human doesn't
              need to count pixels — they see the layout and tap numbers. Total cognitive
              load: less than reading an SMS.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — Telegram bot answer listener
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed mb-4">
                  The bot listens for replies to CAPTCHA messages. When a reply arrives,
                  it writes the content to{" "}
                  <code className="font-mono text-xs text-primary-glow">
                    /tmp/captcha_answer.txt
                  </code>
                  .
                </p>
                <Code>{`# Minimal answer listener
@bot.message_handler(
    func=lambda m: m.reply_to_message
)
def handle_answer(message):
    with open("/tmp/captcha_answer.txt", "w") as f:
        f.write(message.text.strip())`}</Code>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Video recording + resubmission */}
      <Section
        eyebrow="Stages 06 – 07 — Record + Resubmit"
        title={
          <>
            Playwright recorded the demo.{" "}
            <span className="italic text-accent-blue">ffmpeg shipped it.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              The submission required a demo video. The agent handled this autonomously.
              Playwright opened a browser, navigated to the GitHub repository, scrolled
              through the README, then navigated to the npm page for poly-scout MCP. Then
              it opened a terminal panel and ran an animated demo — predictions cycling,
              Kelly scores calculated, positions flagged live.
            </p>
            <p>
              ffmpeg captured the screen, converted the recording to MP4, and saved it to{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-foreground/80">
                /tmp/oracle_demo.mp4
              </code>
              . The Telegram bot delivered the file back to me as a video message.
            </p>
            <p>
              The first submission used a placeholder YouTube URL — the link had to be real
              before it could go in the form. After I uploaded the file to YouTube and sent
              the URL back via Telegram, the agent reopened the form, cleared the placeholder,
              entered the real link, and resubmitted.
            </p>
            <p>
              That resubmission is the only part of the pipeline where human input shaped
              the content — a YouTube URL I had to provide because I own the channel.
              Everything else was autonomous end to end.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-4">
                  — Demo recording pipeline
                </div>
                <div className="space-y-0 border-t border-primary-foreground/15">
                  {[
                    {
                      step: "01",
                      label: "Browser open",
                      desc: "Playwright navigates GitHub repo + npm page",
                    },
                    {
                      step: "02",
                      label: "Terminal demo",
                      desc: "Animated oracle output, Kelly scores, position flags",
                    },
                    {
                      step: "03",
                      label: "ffmpeg capture",
                      desc: "Screen recording → MP4 at /tmp/oracle_demo.mp4",
                    },
                    {
                      step: "04",
                      label: "Telegram delivery",
                      desc: "Video file sent as Telegram message",
                    },
                    {
                      step: "05",
                      label: "YouTube upload",
                      desc: "Human uploads, sends URL back via Telegram",
                    },
                    {
                      step: "06",
                      label: "Form update",
                      desc: "Agent reopens form, enters real URL, resubmits",
                    },
                  ].map((row) => (
                    <div
                      key={row.step}
                      className="py-3 border-b border-primary-foreground/10 last:border-0"
                    >
                      <div className="flex items-baseline gap-3 mb-0.5">
                        <span className="font-mono text-[10px] text-primary-glow/60">
                          {row.step}
                        </span>
                        <span className="font-mono text-xs text-primary-foreground">
                          {row.label}
                        </span>
                      </div>
                      <p className="text-xs text-primary-foreground/55 leading-relaxed pl-8">
                        {row.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Adversarial tokens framework */}
      <Section
        eyebrow="The broader pattern"
        title={
          <>
            Map the adversarial boundary.{" "}
            <span className="italic text-accent-blue">Route humans there only.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <p className="text-foreground/75 leading-relaxed mb-6">
            Every automation pipeline has adversarial checkpoints. Not just CAPTCHAs — 2FA
            codes, biometric gates, "are you sure?" dialogs with unusual UX, phone number
            verifications, email OTPs. These are all compute designed to be expensive for
            automated systems to clear.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-6">
            The architecture principle: map these checkpoints upfront, before you write a
            line of code. Then design the pipeline around them. Route human attention exactly
            to those points. Automate everything else completely.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            The cost structure of the entire hackathon participation: roughly $2–5 in API
            tokens across discovery, research, writing, form automation, and video recording.
            Plus 3 seconds of my attention on a CAPTCHA grid. No hours of form-filling.
            No video editing session. No research time. The ratio of human to AI work here
            isn't "assisted" — it's 99.9% automated with a single precision handoff.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Token conservation as architecture.
              </p>
              <p className="text-sm text-foreground/60">
                The question isn't "can AI solve this?" It's "what's the cheapest
                intelligence that clears this checkpoint?"
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                3 seconds of human attention.
              </p>
              <p className="text-sm text-foreground/60">
                Zero token burn on adversarial compute. The human isn't a bottleneck —
                they're a precision tool deployed at exactly one point.
              </p>
            </div>
          </div>

          <div className="space-y-0 border-t border-foreground/15">
            {[
              {
                checkpoint: "reCAPTCHA tile grid",
                cost: "3s human glance",
                wrong: "Vision model — costs $0.05–$0.30/attempt, escalates on failure",
              },
              {
                checkpoint: "SMS 2FA code",
                cost: "2s to read phone",
                wrong: "SIM swap or SMS interception — expensive, unreliable, illegal",
              },
              {
                checkpoint: "Email OTP",
                cost: "5s to open inbox",
                wrong: "Email parsing automation — brittle, breaks on template changes",
              },
              {
                checkpoint: "Phone verification call",
                cost: "10s to answer and press 1",
                wrong: "Voicemail transcription pipeline — overkill for 10s of work",
              },
            ].map((row) => (
              <motion.div
                key={row.checkpoint}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="py-6 border-b border-foreground/10 last:border-0"
              >
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3 font-mono text-sm text-primary">
                    {row.checkpoint}
                  </div>
                  <div className="md:col-span-3 text-sm text-foreground/80">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/60 block mb-1">
                      Right call
                    </span>
                    {row.cost}
                  </div>
                  <div className="md:col-span-6 text-sm text-foreground/50 leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35 block mb-1">
                      Wrong call
                    </span>
                    {row.wrong}
                  </div>
                </div>
              </motion.div>
            ))}
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
            "automation",
            "architecture",
            "playwright",
            "captcha",
            "ai-pipelines",
            "telegram",
            "hackathon",
            "agents",
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

export default BlogCaptchaWorkflow;
