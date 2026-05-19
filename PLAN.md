# PLAN: Custom 404 Page

## Task
Replace the generic `src/pages/NotFound.tsx` with a visually designed 404 page
that feels native to the nexus-souls design system.

## Routing
The catch-all `Route path="*"` in `App.tsx` already renders `<NotFound />`.
The `public/404.html` is a GitHub Pages SPA redirect shim — it must NOT be
replaced; it encodes the path to `/?/path` so `index.html` can decode it.
No routing changes needed.

## Approach
Single approach: rewrite `src/pages/NotFound.tsx` following the established
component patterns (Framer Motion animations, navy panel background with
dot-bg-ink texture, font-serif-display large numerals, font-mono eyebrow,
corner-marks decoration, primary blue accent). No new dependencies.

## Design
- Full-height navy `panel-ink` background with `dot-bg-ink` texture
- Logo mark (box + rotated diamond) top-left, matching Hero
- Center: `— Error 404` mono eyebrow → large `404` serif display → `Page not found.` → subtext → "Go home →" button
- Corner crosshairs animated with Framer Motion (matching Hero pattern)
- Staggered fade-in entrance animations

## Files to touch
1. `src/pages/NotFound.tsx` — full rewrite

## Risks
- None significant; self-contained single file
