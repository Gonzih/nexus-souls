# PLAN: Extend Gravitas Case Study with Bitemporal Model

## Task
Add a new §9 section to `src/pages/CaseStudyTemporalStorage.tsx` explaining
the three independent time axes in Gravitas: valid_from/valid_until (world time),
authored_at (source time), and tx (system time). Introduce three decay curves,
the effective weight formula, Allen's Interval Algebra overview, and the Charles I
example. Do NOT remove or modify existing sections.

## Approach
Single approach: insert a new `<Section>` block between the existing §8 and the
closing CTA. Follow the existing patterns exactly (Section + FadeIn, glass/panel-ink
cards, font-mono code, §N eyebrow numbering, Code inline component).

## Files to touch
1. `src/pages/CaseStudyTemporalStorage.tsx` — add new section data + JSX block

## Content plan for §9
Sub-sections:
- Three time axes table (glass card)
- The epistemic gaps (authored_at - valid_until, tx - authored_at)
- Charles I code example
- Three decay curves (validity / source / corroboration) — 3-column grid
- Effective weight formula code block
- Allen's Interval Algebra — brief card listing 13 relations + why it matters
- Closing callout quote

## Risks
- Section numbering: §9 fits, nothing after §8 before CTA
- No extra dependencies needed (framer-motion, lucide-react already imported)
- Variant alternates: §8 is `variant="ink"`, so §9 should be default (light bg)
