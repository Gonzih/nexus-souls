# PLAN — Expand BlogCaptchaWorkflow into full hackathon post

## Task restatement
Expand `src/pages/BlogCaptchaWorkflow.tsx` from a narrow CAPTCHA post into a full-arc
blog post covering autonomous hackathon participation: discovery (Gmail MCP), research
(reading repos), form authorship (17 fields from code), CAPTCHA (existing, reframed),
demo video recording (Playwright + ffmpeg), resubmission, and the adversarial-tokens
framework. Update Blog.tsx description to match.

## Approach
Single-file overwrite of `BlogCaptchaWorkflow.tsx` — keep existing 4 sections (setup,
signal-file pattern, tile indexing, adversarial boundary) but reframe + add 3 new sections
before them and restructure throughout. Update hero stats. No new components needed.

## Section structure (alternating cream/ink)
- Hero: update subtitle, description, stats (human 3s, api ~$3, fields 17, stages 7)
- S1 (cream): The full arc — 7-stage numbered dispatch, "unit is the task" thesis
- S2 (ink): Discovery — Gmail MCP, Agora announcement, fit assessment
- S3 (cream): Research — reading gonzih/oracle-agora + poly-scout, 3-layer agent, metrics
- S4 (ink): Authoring the form — 17 fields, traction numbers, Playwright submission
- S5 (cream): The CAPTCHA — existing signal-file sections merged, reframed as one chapter
- S6 (ink): Video recording — Playwright browser, animated terminal, ffmpeg, resubmission
- S7 (cream): Adversarial tokens + cost structure — framework + checkpoint table

## Files to touch
- `src/pages/BlogCaptchaWorkflow.tsx` — full rewrite/expansion
- `src/pages/Blog.tsx` — update post description and tags

## Risks
- File is large; ensure all existing code blocks and the checkpoint table carry over
- Keep alternating Section variants (ink/cream) matching the pattern
- Mobile overflow: max-w-full on pre, overflow-x-auto on Code
