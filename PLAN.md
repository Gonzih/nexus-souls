# Plan: Sharpen Repo Descriptions

## Task
Update repo card descriptions in `src/components/nexus/Repos.tsx` so each is accurate to what the repo actually does — no fluff, concrete nouns, billboard-readable.

## Approach
Single-file edit to `Repos.tsx`. No count changes needed (still 30 repos).

## Files to touch
- `src/components/nexus/Repos.tsx` (descriptions only)

## What changes and why

| Repo | Old | New |
|------|-----|-----|
| cc-tg | "Telegram ↔ Claude Code bridge with Void Operator" | "Claude Code Telegram bot — text, voice, images, files, scheduled prompts, multi-token rotation" |
| nexus-convergence-mcp | "MCP — converge_query, evidence ladder, compliance" | "MCP server wrapping the Convergence Pipeline — converge_query, get_evidence_ladder, check_compliance, list_model_disagreements" |
| nexus-consensus-service | "Semantic similarity, inversion, truth stability" | "Consensus engine — semantic similarity scoring, inversion detection, truth stability classification, agreement scoring" |
| nexus-evidence-service | "Hash-linked append-only audit trail" | "Immutable Evidence Ladder — append-only audit trail for convergence pipeline stages (QUERY→DECOMPOSE→EXECUTE→CONSENSUS→VERIFY→CONCLUDE)" |
| nexus-soul-core | "Agent loop, provider routing, tool registry" | "Async agentic runtime for Rust — steerable agent loops, multi-provider LLM abstraction, semantic context management, WASM-ready" |
| nexus-soul-coder | "Coding tools for autonomous agents" | "soul-core tool plugin — read, write, edit, bash, grep, find, ls; WASM-first via VirtualFs/VirtualExecutor abstraction" |
| nexus-protocols | "Intelligence frameworks + operating protocols" | "LLM operating protocols — VOID_OPERATOR, FREEDOM, GRIT, Conflict of Thought; Cognitive Mathematics Framework and substrate reasoning recipes" |
| nexus-research-agent-jailing | "Agent sandboxing + security research" | "Transparent-proxy behavioral capture of AI agents — full request/response logging; system prompt extraction, token counts, network audit" |
| nexus-soul-terminal | "Open source terminal interface" | "GPU-accelerated terminal widget surface — WebGL2/WebGPU in browser, Vulkan/Metal/DX12 native; text grids, inline images, interactive widgets" |
| nexus-research-finetune-llms | "LLM fine-tuning research" | "DPO fine-tuning for narrow-specialist Llama persona agents — Design/Infra/Finance fleet with domain-focused training and intentional forgetting" |
| nexus-reasoning-graph | (very long multi-sentence) | "Claude Code hooks → sliding-window embeddings → cosine-similarity influence graph → live D3 force visualization of reasoning provenance" |
