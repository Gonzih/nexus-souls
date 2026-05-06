# PLAN — Copy Rewrite (retardmaxxed)

## Task
Rewrite all text copy on the nexus-souls site: brutally simple, visceral, punchy.
Billboard logic. First-grader clarity. No corporate gloss. Angry and obvious, not clever.
Do NOT touch JSX structure, layout, classNames, imports, or logic. Text strings only.

## Approach
Single-pass rewrite across 7 component files. Edit only string literals.
Keep earned technical terms: Ed25519, soulchain, MCP, HIPAA, EU AI Act. Cut everything soft.

## Files to touch
- src/components/nexus/Hero.tsx
- src/components/nexus/Problem.tsx
- src/components/nexus/Architecture.tsx
- src/components/nexus/Convergence.tsx
- src/components/nexus/Harnesses.tsx
- src/components/nexus/Research.tsx
- src/components/nexus/TrustDemo.tsx

## Risks
- Convergence title is ReactNode (already widened in prior PR) — preserve JSX fragment
- Verify build passes after all edits
