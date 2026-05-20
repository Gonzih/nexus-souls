# PLAN: /research page for nexus-souls

## Task restatement
Build a `/research` page that frames the cc-agent/Gravitas/MCP suite as production research infrastructure for independent researchers studying agentic systems. The page should match the existing nexus-souls design system exactly and be navigable from the footer.

## Approach selected
Single-page React component (`src/pages/Research.tsx`) following the MetaHarness.tsx pattern exactly — top bar, hero, Section components, footer. Add route to App.tsx and "Research" link to Footer.tsx.

## Page structure
1. Top bar (back button + "For Researchers" identifier)
2. Hero — title, subtext, stat grid
3. Section (cream): "What you can investigate" — 6 research questions as grid cards
4. Section (ink): Tool suite table — 7 tools with descriptions
5. Section (cream): "Why this stack" — 5 bullet reasons
6. Section (ink): Research data access — MCP code block
7. Section (cream): The independence thesis — blockquote + context
8. CTA (ink): Contact + external links
9. Footer

## Files to touch
1. `src/pages/Research.tsx` — new page (primary work)
2. `src/App.tsx` — add `/research` route
3. `src/components/nexus/Footer.tsx` — add Research nav link

## Risks and unknowns
- Footer nav must use `<Link to="/research">` (internal), not `<a href>`
- `panel-ink` overrides text color — use `text-primary-foreground` / `text-primary` inside, never `text-foreground`
- Code blocks need `max-w-full overflow-x-auto` for mobile safety
