# PLAN: Temporal Storage Case Study

## Task
Add a second case study page at `/case-study/temporal-storage` focused exclusively on
nexus-temporal-storage — for the ISOC Foundation Research Grant (May 22 deadline).
Also update App.tsx with the new route and CaseStudyTeaser.tsx with a second teaser card.

## Approach chosen
Mirror the existing `CaseStudy.tsx` structure exactly (same Section/FadeIn/Code patterns,
same panel-ink/panel classes, same color hierarchy). Data-driven arrays for capabilities and
research questions. No new dependencies.

## Files to touch
1. `src/pages/CaseStudyTemporalStorage.tsx` — new page (create)
2. `src/App.tsx` — add route
3. `src/components/nexus/CaseStudyTeaser.tsx` — restructure to show both case studies

## Section structure
- Top bar + Hero (cream, dot-bg)
- §1 The problem (cream) — 3 paragraphs + panel-ink callout
- §2 What a datom is (ink) — definition, 4-field table, example sequence code block
- §3 Time-travel queries (cream) — as_of code block + two-statements panel
- §4 Four capabilities (ink) — 2×2 grid
- §5 Fraud scenario (cream) — narrative + as_of code block + two-outcome aside
- §6 Research framing (ink) — 3 open questions + pull quote aside
- §7 Technical spec (cream) — TypeScript interface code block + design properties
- Closing CTA (ink)
- Footer

## CaseStudyTeaser restructure
- Change eyebrow to "Case studies", title to cover both
- Extract both studies into a `studies[]` array, render with `.map()`
- First card: existing healthcare malpractice
- Second card: temporal-storage / "Why AI systems forget."

## Risks
- CaseStudyTeaser title change is a visible UI change — keep close to original tone
- Code blocks with multi-line strings must preserve exact indentation
