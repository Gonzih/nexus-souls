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

const steps = [
  {
    n: "1",
    step: "Drop photos",
    detail:
      "Name photos descriptively: saint-laurent-blazer-front.jpg, saint-laurent-blazer-tag.jpg. 2–4 shots per item. The garment shot first — it becomes the hero image in Squarespace.",
  },
  {
    n: "2",
    step: "Prepare",
    detail:
      "python3 prepare.py — converts HEIC→JPEG, auto-groups by item name prefix. No manual sorting. Items are inferred from filename.",
  },
  {
    n: "3",
    step: "Review clusters",
    detail:
      "python3 server.py → localhost:5555 — a drag-and-drop UI to verify each cluster maps to one physical item. Human checkpoint before AI processing.",
  },
  {
    n: "4",
    step: "Florence-2",
    detail:
      "Two passes per image: detailed caption + OCR. Reads brand names, fabric content, care labels, size tags — directly from the photo. No manual tag-reading.",
  },
  {
    n: "5",
    step: "Generate CSV",
    detail:
      "python3 make_csv.py — produces Squarespace-format CSV: title, description, price, image URLs, condition. Claude cleans Florence captions into polished listing copy.",
  },
  {
    n: "6",
    step: "Host images",
    detail:
      "Push photos to a throwaway GitHub repo. GitHub Pages serves them publicly within ~2 minutes. Free CDN, no upload friction, publicly reachable at import time.",
  },
  {
    n: "7",
    step: "Import",
    detail:
      "Squarespace → Commerce → Products → Import CSV. Store page must already exist and Product Page slug must match. Live in minutes.",
  },
  {
    n: "8",
    step: "Cleanup",
    detail:
      "Delete the throwaway GitHub repo after import. Images are now cached by Squarespace. No ongoing hosting cost.",
  },
];

const metaLayers = [
  {
    n: "01",
    layer: "HEIC conversion",
    tool: "prepare.py",
    detail:
      "iPhone shoots HEIC by default. prepare.py converts to JPEG and auto-clusters by item name prefix — everything before the first space or dash groups together.",
  },
  {
    n: "02",
    layer: "Cluster review UI",
    tool: "Flask + localhost:5555",
    detail:
      "A minimal drag-and-drop localhost server lets you verify clusters before committing to AI processing. One wrong cluster means one bad listing — fix it here, not after.",
  },
  {
    n: "03",
    layer: "Vision + OCR",
    tool: "Florence-2 (two-pass)",
    detail:
      "Pass 1: detailed caption describing garment type, color, silhouette, condition. Pass 2: OCR reads every visible label — brand, fabric composition, country of origin, care symbols.",
  },
  {
    n: "04",
    layer: "Copy generation",
    tool: "Claude (make_csv.py)",
    detail:
      "Claude takes Florence-2 output and writes SEO-friendly listing copy: structured title (brand + item + color), description with provenance details, condition note. Accurate because OCR read the tags.",
  },
  {
    n: "05",
    layer: "Image CDN",
    tool: "GitHub Pages",
    detail:
      "Throwaway GitHub repo hosts photos publicly. Pages activates in ~2 minutes. URLs are stable at import time. Delete the repo after Squarespace has cached the images.",
  },
  {
    n: "06",
    layer: "Store publish",
    tool: "Squarespace CSV import",
    detail:
      "Commerce → Products → Import. Space-separated image URLs in Hosted Image URLs column. Squarespace generates product slugs from titles. 50 listings import in under a minute.",
  },
];

const WorkflowPhotoToListing = () => {
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
            Workflow #002
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
              — Photo to Live Listing
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words"
            >
              Physical inventory.{" "}
              <span className="text-accent-blue italic">Live store in under 2 hours.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
            >
              Luxury fashion resellers spend hours manually writing descriptions and uploading
              to their store. The bottleneck is always the copy. Florence-2 reads the tags
              directly from photos. Claude turns structured data into polished listing copy.
              The result ships to Squarespace via CSV import.
            </motion.p>
          </div>

          {/* Metrics panel */}
          <div className="lg:col-span-4 lg:border-l lg:border-foreground/15 lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Before</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">4h+</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">After</dt>
                <dd className="text-foreground font-serif-display text-2xl font-light">&lt;2h</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Batch size</dt>
                <dd className="text-foreground">50 items</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Vision model</dt>
                <dd className="text-foreground">Florence-2</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Store</dt>
                <dd className="text-foreground">Squarespace</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-foreground/50 mb-1.5">Image CDN</dt>
                <dd className="text-foreground">GitHub Pages</dd>
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
            The bottleneck is always{" "}
            <span className="italic text-accent-blue">the copy.</span>
          </>
        }
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Luxury fashion resellers have a photography session down to a routine. The real
              time sink is everything after: reading brand tags, transcribing fabric labels,
              writing accurate descriptions, uploading one by one. For 50 items, that's 4+ hours
              of repetitive, error-prone work.
            </p>
            <p>
              Florence-2 eliminates the bottleneck. Its OCR pass reads brand tags directly from
              photos — "100% cashmere, dry clean only", "Made in Italy", "Brunello Cucinelli" —
              and feeds that data straight into the listing pipeline. No manual tag-reading.
              No typos. Accurate provenance from the source photo.
            </p>
            <p>
              The pipeline runs locally. No API costs for image hosting — GitHub Pages serves
              photos publicly for free. Squarespace's CSV import handles 50 listings in under
              a minute. Most of the 2-hour window is the photography session itself.
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
                    "Florence-2 OCR reads brand tags in situ — no manual transcription",
                    "Two-pass vision: caption for description, OCR for provenance data",
                    "GitHub Pages is free CDN — images publicly reachable at import time",
                    "Squarespace CSV import is atomic — 50 listings, one operation",
                    "Human checkpoint (cluster review) before AI commits to any processing",
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
            Six scripts.{" "}
            <span className="italic text-accent-blue">One pipeline.</span>
          </>
        }
        variant="ink"
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Code>{`HEIC photos from phone
  → prepare.py: convert to JPEG, auto-cluster by item name
  → clustering UI (localhost Flask server): human drag-and-drop review
  → Florence-2: two passes per image
      pass 1: detailed caption (garment type, color, condition)
      pass 2: OCR (brand tag, fabric label, care symbols)
  → make_csv.py: Claude cleans captions → Squarespace CSV
      columns: title, description, price, image URLs, condition
  → GitHub Pages: hosts images publicly (~2 min, free CDN)
  → Squarespace Commerce → Products → Import: live store`}</Code>
          </div>
          <div className="lg:col-span-2">
            <FadeIn>
              <aside className="bg-[hsl(var(--surface-ink))] border border-primary-foreground/15 p-7 space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow mb-2">
                  — Why Florence-2 + OCR
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Florence-2's detailed caption pass describes the garment — silhouette, color,
                  condition, fabric texture. The OCR pass reads every visible label in the photo.
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">
                  Combined, they produce structured data that Claude turns into accurate, SEO-friendly
                  listing copy — with provenance pulled straight from the source photo.
                </p>
                <div className="pt-4 border-t border-primary-foreground/15">
                  <p className="text-xs text-primary-foreground/55 leading-relaxed font-mono">
                    No manual tag-reading. No typos.
                  </p>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Step by step */}
      <Section
        eyebrow="Step by step"
        title={
          <>
            Drop photos.{" "}
            <span className="italic text-accent-blue">Live store.</span>
          </>
        }
      >
        <div className="border border-foreground/10 overflow-hidden mb-10">
          <div className="grid grid-cols-12 bg-foreground/5 border-b border-foreground/10">
            <div className="col-span-1 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              #
            </div>
            <div className="col-span-3 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Step
            </div>
            <div className="col-span-8 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary border-l border-foreground/10">
              What happens
            </div>
          </div>
          {steps.map((row) => (
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
                {row.step}
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
                — Photography guidelines
              </div>
              <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                {[
                  "2–4 photos per item",
                  "Required: full garment shot (front), brand/authenticity tag",
                  "Optional: fabric tag, detail shot, back",
                  "Name garment shot first — it becomes the hero image",
                  "Natural light, plain background, tag clearly visible",
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
                — Squarespace import rules
              </div>
              <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Store page must already exist (Commerce → Pages → + → Store)",
                  "Product Page must match existing store slug exactly",
                  "Hosted Image URLs — space-separated, publicly reachable at import time",
                  "Price — numeric, no $ sign",
                  "Leave Product URL blank — Squarespace generates from title",
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
            Tags in photo.{" "}
            <span className="italic text-accent-blue">Copy in listing.</span>
          </>
        }
        variant="ink"
      >
        <div className="max-w-3xl">
          <Code>{`iPhone photos → prepare.py
  → JPEG conversion + auto-cluster by filename prefix

localhost:5555 cluster review
  → human verifies: one cluster = one physical item
  → drag to reassign stray photos

Florence-2 per cluster
  → pass 1: "A black Brunello Cucinelli cashmere turtleneck,
             excellent condition, minimal wear"
  → pass 2: OCR reads tag: "100% cashmere | Made in Italy
             Dry clean only | Size M"

make_csv.py
  → Claude structures caption + OCR into listing:
      title: "Brunello Cucinelli Black Cashmere Turtleneck"
      desc:  "100% cashmere turtleneck in excellent condition.
              Made in Italy. Size M. Dry clean only."
      price: [set manually or via pricing agent]

GitHub Pages (~2 min)
  → git push throwaway repo
  → photos publicly reachable

Squarespace import
  → 50 listings, one CSV, one operation
  → store live`}</Code>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Florence-2 reads the tag.
              </p>
              <p className="text-sm text-foreground/60">
                Brand, fabric, origin, care — from the photo, not from memory or manual transcription.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <p className="font-serif-display text-xl text-foreground leading-snug mb-2">
                Claude writes the listing.
              </p>
              <p className="text-sm text-foreground/60">
                Accurate because the source data is accurate. SEO-friendly because Claude structures it.
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
            <span className="italic text-accent-blue">extend it.</span>
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
                — cc-agent extensions
              </div>
              <ul className="space-y-3 text-sm text-primary-foreground/75 leading-relaxed">
                {[
                  "Replace make_csv.py Claude step with a spawned cc-agent task that writes and reviews every listing",
                  "Cron the full pipeline: drop photos → auto-process → CSV ready by morning",
                  "Add pricing intelligence: Claude looks up comparable sold listings before setting price",
                  "Add condition grading: Florence-2 flags wear, marks, loose buttons automatically",
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
                — What the CSV contains
              </div>
              <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Title — brand + item type + color",
                  "Description — Florence caption cleaned by Claude",
                  "Price — numeric, set manually or via pricing agent",
                  "Product Page — store slug (must match existing store page)",
                  "Hosted Image URLs — space-separated GitHub Pages URLs",
                  "Condition — Excellent / Good / Fair (from Florence-2 assessment)",
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
          {["ecommerce", "vision", "automation", "content", "florence-2", "squarespace", "csv-import", "ocr"].map(
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

export default WorkflowPhotoToListing;
