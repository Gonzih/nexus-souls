# Plan: Convergence Pipeline Section + Content Deepdive

## Task Summary
Add a Convergence Pipeline section as a new React component, wire it into Index.tsx, add 3 convergence services to Architecture.tsx, update Hero stats, and add 5 convergence repos to Repos.tsx. No visual/styling changes — text content only.

## Approach
Straight implementation following the spec. Only content changes, no design changes.

## Key Fix Required
`Section.tsx` types `title` as `string` — must change to `ReactNode` so Convergence can use JSX (`<>Never depend...<br/>...</>`).

## Files to touch
- `src/components/nexus/Section.tsx` — change `title: string` to `title: ReactNode`
- `src/components/nexus/Convergence.tsx` — CREATE new component
- `src/pages/Index.tsx` — add `<Convergence />` between Architecture and Harnesses
- `src/components/nexus/Architecture.tsx` — add 3 convergence services to mesh
- `src/components/nexus/Hero.tsx` — update microservices 13→16, repos 24→29
- `src/components/nexus/Repos.tsx` — add 5 convergence repos, update title to "29 open source repositories"

## Counts
- Current repos: 24. Adding: nexus-convergence-mcp, nexus-convergence-service, nexus-compliance-service, nexus-consensus-service, nexus-evidence-service → 29 total
- Current microservices: 13. Adding convergence(:8090), consensus(:8091), compliance(:8092) → 16 total
- Architecture mesh: was 6, becomes 9

## Risks
- Section.tsx `title: string` → must widen to `ReactNode` before creating Convergence component or build fails
