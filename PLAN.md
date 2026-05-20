# Plan: /workflows Library

## Task
Add two new pages to nexus-souls:
1. `/workflows` — index page listing documented Claude Code workflow patterns
2. `/workflows/competitor-intelligence` — detail page for the Competitor Intelligence Pipeline

## Approach
Static pages following the existing MetaHarness.tsx pattern — no dynamic data loading, no new abstractions. Two page components, two routes, one footer link update.

## Files to touch
1. src/pages/Workflows.tsx — new index page
2. src/pages/WorkflowCompetitorIntelligence.tsx — new detail page
3. src/App.tsx — add two routes
4. src/components/nexus/Footer.tsx — add "Workflows" nav link

## Component conventions
- Top bar: left link + right label (border-b border-foreground/10)
- Hero: dot-bg overlay, font-serif-display heading, metrics grid
- Section + FadeIn from @/components/nexus/Section
- panel for cream cards, panel-ink for navy cards
- Code component: pre + font-mono text-xs on dark surface-ink bg
- glass class doesn't exist — use panel instead

## Risks
- Route /workflows/competitor-intelligence must be declared before catch-all *
- No nav bar component in this site — footer is the nav; add Workflows link there
