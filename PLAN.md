# Plan: Workflow #004 — AI Creator Persona System

## Task
Add workflow #004 to the /workflows library:
- Index card in Workflows.tsx
- New detail page at /workflows/ai-creator-persona
- Route in App.tsx

## Approach
Follow exact same pattern as WorkflowPhotoToListing.tsx:
- Top bar (Workflow #004) + dot-bg hero with metrics panel
- Section + FadeIn components throughout
- panel-ink for navy cards, panel for cream cards
- Code component for pipeline diagrams
- Step-by-step table, meta-harness layer table, tags footer

## Files to touch
1. src/pages/Workflows.tsx — append to workflows array
2. src/pages/WorkflowAiCreatorPersona.tsx — new detail page
3. src/App.tsx — add route before catch-all

## Risks
- Route must be declared before catch-all "*"
- panel-ink overrides text-foreground to cream — use text-primary inside
