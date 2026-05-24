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
            2025-05-23
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
              — Automation Architecture
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
              Adversarial tokens are compute designed to burn AI resources. reCAPTCHA is the
              canonical example. The right architecture isn't to throw more AI at it — it's to
              identify the exact adversarial boundary and route a human there for 3 seconds.
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
                <dd className="text-foreground">2025-05-23</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Human cost</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">3s</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">AI cost</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">$0</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The Setup */}
      <Section
        eyebrow="The setup"
        title={
          <>
            Automating a hackathon.{" "}
            <span className="italic text-accent-blue">End-to-end.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              We were automating a hackathon form submission via Playwright. Full pipeline:
              fill out the registration form, attach files, submit. Simple enough. Then we hit
              reCAPTCHA.
            </p>
            <p>
              The obvious move — run a vision model against the tile grid — costs more per attempt
              than the entire rest of the pipeline. And it gets worse each retry. Google has spent
              a decade making reCAPTCHA specifically adversarial to AI: the challenges escalate
              in difficulty as confidence drops. You're in an adversarial compute loop with no
              floor.
            </p>
            <p>
              The right question isn't "can AI solve this?" It's "what's the cheapest intelligence
              that clears this checkpoint?" For a reCAPTCHA tile grid, that's a human eyeball,
              3 seconds, and a list of indices.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
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
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* The Pattern */}
      <Section
        eyebrow="The pattern"
        title={
          <>
            Signal file.{" "}
            <span className="italic text-accent-blue">Human loop.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <p className="text-foreground/75 leading-relaxed mb-6">
              The architecture is simple. When the script hits the CAPTCHA boundary, it:
            </p>
            <ol className="space-y-3 text-foreground/75 leading-relaxed mb-6 list-none">
              {[
                "Screenshots the challenge grid to /tmp/captcha_challenge.png",
                "Writes the path to /tmp/captcha_ready.txt",
                "Sends a Telegram message with the screenshot attached",
                "Polls for /tmp/captcha_answer.txt",
                "Reads the tile indices, clicks them, resumes",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="font-mono text-[10px] text-primary-glow shrink-0 pt-1">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-foreground/75 leading-relaxed">
              Total human attention: 3 seconds. You glance at the grid, type{" "}
              <code className="font-mono text-xs bg-primary/10 px-1.5 py-0.5 text-primary-foreground/80">
                1 3 5
              </code>{" "}
              into your phone, send it. The automation resumes.
            </p>

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
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why signal files
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Signal files are filesystem primitives — no server, no queue, no webhook.
                  The automation script and the human interface are decoupled completely.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  The Telegram bot just writes a file. The Playwright script just reads a file.
                  Either side can be swapped out without touching the other.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 leading-relaxed font-mono">
                    Works on any OS. Zero infrastructure.
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
              need to count pixels — they see the layout and tap numbers. Total cognitive load:
              less than reading a SMS.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="panel-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-5">
                  — Telegram bot setup
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed mb-4">
                  The bot listens for replies to CAPTCHA messages. When a reply arrives,
                  it writes the content to <code className="font-mono text-xs text-primary-glow">/tmp/captcha_answer.txt</code>.
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

      {/* The broader pattern */}
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
          <p className="text-foreground/75 leading-relaxed mb-8">
            Every automation pipeline has adversarial checkpoints. Not just CAPTCHAs — 2FA
            codes, biometric gates, "are you sure?" dialogs with unusual UX, phone number
            verifications, email OTPs. These are all compute designed to be expensive for
            automated systems to clear.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            The architecture principle: map these checkpoints upfront, before you write
            a line of code. Then design the pipeline around them. Route human attention
            exactly to those points. Automate everything else completely.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
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

          <div className="mt-10 space-y-0 border-t border-foreground/15">
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
          {["automation", "architecture", "playwright", "captcha", "ai-pipelines", "telegram"].map(
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

export default BlogCaptchaWorkflow;
