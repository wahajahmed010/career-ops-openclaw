---
name: batch
description: Batch parallel evaluation of multiple job offers via subagents. Triggers on batch evaluate, batch process, mass evaluate, parallel jobs.
---

# Batch — Mass Processing of Jobs

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` first.

## Data Paths

- Batch input: `~/.openclaw/workspace/career-ops-data/batch/batch-input.tsv`
- Batch state: `~/.openclaw/workspace/career-ops-data/batch/batch-state.tsv`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`

## Architecture

Each job is processed by a subagent (spawned via OpenClaw sessions_spawn) with a clean context. The main agent orchestrates.

## Workflow (Conductor Mode)

1. Read `batch/batch-state.tsv` to identify what's already processed
2. For each pending URL:
   a. Calculate next sequential report number
   b. Spawn a subagent with the full evaluation prompt (A-G + report + PDF)
   c. Update `batch-state.tsv` (completed/failed + score + report_num)
   d. Log to `batch/logs/{report_num}-{id}.log`
3. If 3+ pending URLs, spawn subagents in parallel
4. After all complete: merge `batch/tracker-additions/` → `applications.md`

## Subagent Prompt

Each subagent receives the evaluate skill prompt plus:
- The specific job URL or text
- The report number to use
- Instructions to save report and generate PDF

## Error Handling

| Error | Recovery |
|-------|----------|
| URL inaccessible | Mark `failed`, continue |
| JD behind login | Mark `failed`, continue |
| PDF fails | Report saved, PDF pending |
| Subagent timeout | Mark `failed`, can retry with `--retry-failed` |

## Scripts

- `node ~/.openclaw/workspace/skills/career-ops/scripts/merge-tracker.mjs` — merge TSV additions into tracker
- `node ~/.openclaw/workspace/skills/career-ops/scripts/dedup-tracker.mjs` — deduplicate tracker entries