# PLAN — Research blocks link to specific source files

## Task Restatement
Update Research.tsx so the 3 new cards (Geometry of Language, Adversarial Robustness, Reasoning Provenance) link to specific markdown files in nexus-research rather than the repo root.

## File Inventory (nexus-research)
Only one file has real content: `geometry/geometry-of-language.md`
All others (`AI_PSYCHOSIS_RESEARCH.md`, `NEXUS.md`, `FRICTION_POINT_FRAMEWORK.md`, etc.) are placeholders pointing to private repo.

## Mapping
| Card | href |
|------|------|
| Geometry of Language | `geometry/geometry-of-language.md` — paper is titled "Invariant Topology in Language State Space: Adversarial Feedback as a Gradient of Boundary Integrity" |
| Adversarial Robustness | `geometry/geometry-of-language.md` — "Max's framing" half of the unified thesis is exactly about adversarial feedback as gradient + boundary integrity |
| Reasoning Provenance | repo root (no specific file exists) |

## Files to touch
- `src/components/nexus/Research.tsx` — 2 href updates (Geometry of Language + Adversarial Robustness)

## Risks
- Pointing two cards to the same file — acceptable, the paper genuinely covers both topics
- Reasoning Provenance stays at repo root — clearly documented as fallback
