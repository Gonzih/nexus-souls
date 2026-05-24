import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/nexus/Footer";

const posts = [
  {
    slug: "captcha-meatbag-checkpoint",
    title: "The Meatbag Checkpoint",
    date: "2025-05-23",
    description:
      "An AI agent read my emails, found a hackathon, read my repos, wrote the submission, recorded the demo video, and hit submit — autonomously. One human checkpoint: 3 seconds on a reCAPTCHA tile grid. Total API cost: ~$3. A dispatch on adversarial tokens, autonomous form submission, and what it means when the unit of work is the task, not the session.",
    tags: ["automation", "architecture", "ai-pipelines", "captcha", "hackathon", "agents"],
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top bar */}
      <div className="border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Nexus
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            Blog
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-24 md:py-36 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary mb-6"
          >
            — Dispatches from Building
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] mb-8 break-words max-w-4xl"
          >
            Real systems.{" "}
            <span className="text-accent-blue italic">Hard lessons.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
          >
            Not tutorials. Not product announcements. First-person technical writing from
            building AI pipelines that run in production.
          </motion.p>
        </div>
      </section>

      {/* Post list */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/50 mb-10">
            — {posts.length} post{posts.length !== 1 ? "s" : ""}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="bg-background p-7 flex flex-col h-full group hover:bg-secondary/50 transition-colors"
                >
                  {/* Date */}
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-6">
                    {post.date}
                  </div>

                  <h2 className="font-serif-display text-2xl leading-snug text-foreground mb-4">
                    {post.title}
                  </h2>

                  <p className="text-sm text-foreground/65 leading-relaxed mb-8 flex-1">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-1 border border-foreground/15 text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
                    Read post{" "}
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
