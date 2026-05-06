# Plan: Harnesses Section + GitHub Pages Deploy

## Task Summary
Add a "Harnesses" section showcasing cc-agent, cc-tg, and cc-agent-ui as the meta-harness layer above Nexus infrastructure. Also add a GitHub Actions workflow to deploy the site to gonzih.github.io.

## Approach
Direct implementation — the task has clear specs. No architectural decisions needed beyond following the provided code patterns.

## Files to touch
- `src/components/nexus/Harnesses.tsx` — new component (create)
- `src/pages/Index.tsx` — import + insert `<Harnesses />` between Architecture and Research
- `src/components/nexus/Hero.tsx` — update stats (10→13 microservices, 21→24 open source repos)
- `src/components/nexus/Repos.tsx` — add 3 cc-agent repos at top, update section title count
- `.github/workflows/deploy.yml` — new GitHub Actions workflow (create)
- `vite.config.ts` — verify base is `/` (no change needed, defaults to `/`)

## Risks
- `lovable-tagger` plugin might cause issues in CI — it's dev-only and already guarded by `mode === "development"` check
- `Repos.tsx` title currently says "21 open source repositories" — needs updating to "24"
