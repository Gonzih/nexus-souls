# PLAN: Meta-Harness Pages (3 pages)

## Task
Add three new pages to nexus-souls:
1. `/meta-harness` — Technical reference for the meta-harness architecture
2. `/meta-harness-course` — Interactive step-by-step course with paywall (Step 0 free, Steps 1–6 locked behind `HARNESS2026` code + Gumroad CTA)
3. `/meta-harness-talk` — Full-viewport slide deck for a ~20-min SF meetup talk

Source material: `/Users/feral/money-brain/meta-harness-design.md`

## Approach
Single clear approach: follow the established CaseStudy.tsx patterns exactly.
- `Section` + `FadeIn` from `@/components/nexus/Section`
- `panel-ink`, `dot-bg-ink`, `glass` CSS classes
- `font-mono` for code/technical text, `font-serif-display` for headings
- `text-primary` / `text-primary-foreground` color hierarchy
- Framer Motion for animations
- No new npm dependencies

## Files to touch
1. `src/pages/MetaHarness.tsx` — new reference page
2. `src/pages/MetaHarnessCourse.tsx` — new course page with paywall
3. `src/pages/MetaHarnessTalk.tsx` — new slide deck page
4. `src/App.tsx` — add 3 new routes

## Paywall design (page 2)
- `useState` + `useEffect` to sync with `localStorage.getItem("metaharness_unlocked")`
- Access code input: if value === `HARNESS2026` → `localStorage.setItem("metaharness_unlocked", "true")` → reveal
- Locked steps show title + teaser + blur overlay + lock icon + "Unlock Full Course" button → `https://gonzih.gumroad.com/l/meta-harness`
- Step 0 always visible

## Slide deck design (page 3)
- `useState` for `currentSlide`
- `useEffect` to add `keydown` listener for ArrowLeft/ArrowRight
- Click right half → next, click left half → prev
- 15 slides, full-viewport (`h-screen`), cover: problem → solution → architecture → prompt trick → redis → principles → demo → QA
- Uses site design system but full-bleed: alternating `panel-ink` + `bg-background`

## Risks
- Slide deck keyboard nav must clean up event listeners on unmount
- Paywall localStorage must be read on mount to handle returning visitors
- Long code blocks in reference page need `overflow-x-auto max-w-full`
