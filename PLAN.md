# PLAN: Meta-Harness Pages + SF Talk Slide Deck

## Task
Add three new pages to nexus-souls (gonzih.github.io):
1. `/meta-harness` — Technical reference page explaining the cc-tg/cc-agent architecture
2. `/meta-harness-course` — Interactive copy-paste course for bootstrapping a meta-harness
3. `/meta-harness-talk` — HTML slide deck for SF meetup talk (~15 slides, Reveal.js-style)

Wire all three into App.tsx routes and add nav links in Footer.

## Approach
Single approach: new page components following the established nexus-souls patterns.
- Section + FadeIn from ./Section
- panel-ink / dot-bg-ink for dark sections, bg-background for light
- font-serif-display headings, font-mono eyebrows/labels/code
- Framer Motion scroll-triggered animations
- Code blocks: `<pre>` with surface-ink bg, monospace text, copy button (useState + navigator.clipboard)
- Slide deck: styled divs with scroll-snap, no external deps

## Files to touch
1. `PLAN.md` — this file
2. `TODO.md` — task tracking
3. `src/pages/MetaHarness.tsx` — new
4. `src/pages/MetaHarnessCourse.tsx` — new
5. `src/pages/MetaHarnessTalk.tsx` — new
6. `src/App.tsx` — add 3 routes
7. `src/components/nexus/Footer.tsx` — add nav links

## Risks
- Copy button needs `navigator.clipboard` (HTTPS only on prod — fine for GitHub Pages)
- Slide deck: use CSS scroll-snap on a container div, not reveal.js (no new deps)
- Build must pass before PR
