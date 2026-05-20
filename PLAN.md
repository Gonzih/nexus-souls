# PLAN: Meta-Harness Talk Rewrite

## Task
Full rewrite of `/meta-harness-talk` slide deck. Current version (17 slides) is too generic
and shallow. New version: 18 slides, the "Orchestration Gap" thesis, audience-specific framing
for developers who use Claude Code but haven't solved orchestration.

## Approach
Single approach: replace the `slides` array in `MetaHarnessTalk.tsx` entirely.
Keep all nav infrastructure (AnimatePresence, keyboard nav, click-half, controls bar).
The component structure is solid — only content changes.

## Slide Map (18 slides)
1.  Title — "The Orchestration Gap" / "You have the agents. You don't have the harness."
2.  The Human Problem — you are still the ops layer
3.  The Commodity Insight — coding agent is commoditized; orchestration isn't
4.  What's Actually Missing — frameworks solve wrong problem
5.  The Mental Model — grid: projects × tasks, single entry point
6.  Architecture: 3 Tiers — ASCII diagram + tier descriptions
7.  One Entry Point, Multiple Branches — parallel agents from one message
8.  The Prompt Trick — zero credentials in code
9.  Constraints as Architecture — encode in infra, not prompts
10. Information Flow is Directional — tree not mesh
11. Self-Healing by Default — launchd KeepAlive, crashes as events
12. The Compound Effect — harness gets smarter, CLAUDE.md accumulation
13. What You Can Build On This — concrete use cases
14. Live Example — 3-repo bug fix, 8 minutes, 1 message
15. vs. The Alternative — manual 45min vs meta-harness 8min
16. The Harness Is the Leverage — the orchestration is the leverage
17. Getting Started — npm, docs, course, access code
18. Q&A — gonzih@gmail.com

## Files to touch
- `src/pages/MetaHarnessTalk.tsx` — full rewrite of slides array

## Risks
- Some slides have dense content — keep text minimal, let structure do the work
- 18 dot-nav dots fit (approx 220px total width)
- Code blocks must be `string`, not JSX
