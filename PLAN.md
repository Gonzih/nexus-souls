# PLAN — Surface Nexus Research Themes

## Task Restatement
Weave the nexus-research themes (geometry of language, agent identity, trust infrastructure, adversarial robustness, reasoning provenance) into the public-facing nexus-souls site. Keep the existing design intact. Link to github.com/Gonzih/nexus-research.

## Approaches Considered

**A. Add new Research.tsx cards only**
Simple. No structural change. Adds depth to the existing Research section. Risk: section grows to 8 cards (5 existing + 3 new) — acceptable in a 3-col grid.

**B. Rewrite/replace existing Research cards**
Risky — loses existing copy that's been validated. Out of scope.

**C. Add a separate "Foundations" section**
More structural, but the task says don't overhaul the design. Over-engineering.

## Chosen Approach: A (add cards + minor Hero tweak)

**Files to touch:**
- `src/components/nexus/Research.tsx` — add 3 new cards: Geometry of Language, Adversarial Robustness, Reasoning Provenance
- `src/components/nexus/Hero.tsx` — one-line tweak to description to surface the research angle

**Not touching:** Section.tsx, Repos.tsx, Architecture.tsx, Index.tsx, Problem.tsx

## Risks
- nexus-research repo is empty — all 3 new cards link to the repo root (https://github.com/Gonzih/nexus-research)
- 8 cards in a 3-col grid: rows will be 3+3+2, which is fine
