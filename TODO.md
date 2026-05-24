# TODO

## MetaHarness.tsx
- [ ] Replace `redisChannels` array with cc-suite keys (cc:jobs, cc:agents:heartbeat 5s TTL, cc:chat, cc:swarm, cc:coordinator:tasks)
- [ ] Update notification flow code block to use cc-suite key names
- [ ] Add timing constants aside (800ms/2s/3s/5s) in Redis section
- [ ] Update "full cycle" code to include swarm_task path
- [ ] Update design principle #6 to mention forum routing / meta-agent

## MetaHarnessCourse.tsx
- [ ] Step 1: add swarm_task to MCP tools list
- [ ] Step 3: add FORUM_META_AGENT_ROUTING=true to .env block
- [ ] "What You Can Build" intro: add OF stack reference (7 services, zero lines)

## MetaHarnessTalk.tsx
- [ ] Slide 7 (Multiple Branches): mention swarm_task as parallel primitive
- [ ] Slide 12 (Compound Effect): update "Memory system" bullet for forum routing
- [ ] Slide 13 (What You Can Build): add OF stack (7 services, zero lines)

## Final
- [ ] git diff --staged review
- [ ] git commit
- [ ] git push + PR
- [ ] merge PR
