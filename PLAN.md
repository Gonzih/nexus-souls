# PLAN — Update /research with full Nexus suite

## Task restatement
Replace the existing tool table (7 tools, 3 repos) and research questions (6) on the /research page with the full Nexus suite grouped into 5 architectural layers (12+ tools), plus 5 new research questions enabled by the new tools. Keep hero, independence thesis, data access section, and contact CTA. Verify Repos.tsx index is up to date.

## Approach
Single-file edit to `src/pages/Research.tsx` — restructure the `tools` array into `layers`, expand `questions` from 6 to 11, update hero stats. No new components needed.

## Files to touch
- `src/pages/Research.tsx` — layered tools, expanded questions, updated stats
- `src/components/nexus/Repos.tsx` — already has all public repos; nexus-forge and nexus-infra returned 404 (private) so no changes needed

## Layer structure
- L1 Orchestration: cc-agent, cc-tg, cc-agent-ui
- L2 Knowledge & Memory: nexus-gravitas, nexus-reasoning-graph
- L3 Multi-Model Consensus: nexus-convergence-mcp, nexus-convergence-service, nexus-consensus-service, nexus-evidence-service
- L4 Safety & Compliance: nexus-compliance-service, nexus-agent-jail
- L5 Research: nexus-research, nexus-forge

## Risks
- nexus-forge and nexus-infra READMEs returned 404 — use task-provided descriptions
- Hero stat counts must match actual content (11 questions, 12 tools, 5 layers)
