# Plan: Enrich AI Creator Persona Workflow Page

## Task
Add full technical details, financials, and "wedge not the product" insight to
the existing /workflows/ai-creator-persona page (WorkflowAiCreatorPersona.tsx).
Add to it — do NOT rewrite.

## Sections to add

1. **Full persona.md spec** — born: 2004-03-08 Tampa FL, mother (real estate, alcoholic), 
   step-dad (hates him), fake brother Tyler, dropped UCF psych junior year, lives alone 
   two cats, forbidden topics, voice rules (lowercase, no periods, max 3 emojis, "fr" 3x/day, 
   "lmaooo" not "lol", comma splice for questions)
2. **Full flux.md spec** — 6-8 locked descriptors, 47 variations, LoRA ~$80 A100, 
   three seed ranges (bedroom 800-900, bathroom 1200-1300, kitchen 2400-2500)
3. **Full voice.md spec** — 90s audio from Fiverr ~$40, ElevenLabs Instant Voice, 
   audio rules (voice notes after 11pm, breathes before long sentences, 30% yawn endings, giggles on tips)
4. **The orchestrator** — system prompt code block + 30s cron polling detail
5. **The financials** — $43k → $32,710 net breakdown
6. **The wedge** — OnlyFans is the wedge, not the product; 4 other platforms/personas
7. **Technology window** — Aitana 18mo, Emily 6mo, Maya 4wk, next: weekend

## Placement in the file

After "The 4-week build" section → insert:
- Full spec sections (persona, flux, voice, orchestrator) as new Sections

After meta-harness layer → insert:
- Financials
- The wedge
- Technology window

Before Tags and Footer.

## Files to touch
- src/pages/WorkflowAiCreatorPersona.tsx — only file

## Risks
- Keep all existing sections intact — add only, don't rewrite
- panel-ink overrides text-foreground to cream — use text-primary inside
- Code component needs max-w-full overflow-x-auto (already there)
- Match existing design patterns exactly (Section, FadeIn, panel-ink, panel)
