# Plan: Sync MetaHarness pages with BlogDelegatedIntelligence specifics

## Task
Update MetaHarness.tsx, MetaHarnessCourse.tsx, MetaHarnessTalk.tsx to reflect concrete technical details documented in BlogDelegatedIntelligence.tsx (the canonical cc-suite architecture post). No new sections — only update existing content in place.

## Source of truth (BlogDelegatedIntelligence.tsx)
- Redis key schema: cc:jobs:<id>, cc:jobs:<id>:log, cc:agents:<id>:heartbeat (5s TTL), cc:chat:<session_id>, cc:swarm:<id>, cc:swarm:<id>:results, cc:coordinator:tasks
- Timing constants: LOG_FLUSH_DEBOUNCE_MS=800, COORDINATOR_POLL_MS=2000, DEP_RESOLUTION_TICK_MS=3000, heartbeat TTL=5s
- Swarm 6-step: Goal in → Decompose → Claim → Execute → Collect → Synthesize
- Forum routing: Telegram topic name → repo → meta-agent session; FORUM_META_AGENT_ROUTING env var; hashtag fallback #of-stack / #gonzih/of-stack
- OF stack case study: 7 services, zero lines written by hand

## Approach: Targeted text content updates only

### MetaHarness.tsx
1. Replace `redisChannels` array (old cca:/whiteh: keys) with 7 cc-suite keys from blog
2. Update notification flow code block to use cc-suite key names
3. Add timing constants (800ms/2s/3s/5s) as second aside in Redis section
4. Update "full cycle" code block to include swarm_task parallel path
5. Update design principle #6 to mention forum routing / meta-agent

### MetaHarnessCourse.tsx
1. Step 1 content: add swarm_task to MCP tools list
2. Step 3 content: add FORUM_META_AGENT_ROUTING=true to .env block
3. "What You Can Build" intro: reference OF stack case study (7 services, zero lines)

### MetaHarnessTalk.tsx
1. Slide 7 (Multiple Branches): mention swarm_task as higher-level primitive for parallel work
2. Slide 12 (Compound Effect): update "Memory system" bullet to reference forum routing
3. Slide 13 (What You Can Build): add OF stack reference (7 services, zero lines)

## Files to touch
- src/pages/MetaHarness.tsx
- src/pages/MetaHarnessCourse.tsx
- src/pages/MetaHarnessTalk.tsx

## Constraints
- No new <Section> components
- Keep visual layout/structure
- Preserve marketing tone in Course and Talk pages
- Text/data-array changes only
