---
name: pipeline
description: Process pending job URLs from the pipeline inbox. Evaluates each URL and produces reports, PDFs, and tracker entries. Triggers on pipeline, process urls, process inbox, process pending.
---

# Pipeline — URL Inbox Processor

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` first.

## Data Paths

- Pipeline inbox: `~/.openclaw/workspace/career-ops-data/data/pipeline.md`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`

## Workflow

1. Read `data/pipeline.md` → find all `- [ ]` items in the "Pending" section
2. For each pending URL:
   a. Calculate next sequential `REPORT_NUM` (read `reports/`, take max + 1)
   b. Extract JD using Playwright → WebFetch → WebSearch
   c. If URL not accessible → mark as `- [!]` with note and continue
   d. Execute full auto-pipeline: Evaluation A-G → Report → PDF (if score >= 3.0) → Tracker
   e. Move from "Pending" to "Processed": `- [x] #NNN | URL | Company | Role | Score/5 | PDF ✅/❌`
3. If 3+ pending URLs, spawn subagents in parallel for speed
4. Show summary table: `| # | Company | Role | Score | PDF | Recommended action |`

## Pipeline.md Format

```markdown
## Pending
- [ ] https://jobs.example.com/posting/123
- [ ] https://boards.greenhouse.io/company/jobs/456 | Company Inc | Senior PM
- [!] https://private.url/job — Error: login required

## Processed
- [x] #143 | https://jobs.example.com/posting/789 | Acme Corp | AI PM | 4.2/5 | PDF ✅
```

## JD Extraction Priority

1. Playwright (preferred for SPAs)
2. WebFetch (for static pages)
3. WebSearch (last resort, search secondary portals)

## Special Cases

- **LinkedIn**: May require login → mark `[!]` and ask user to paste text
- **PDF URLs**: Read directly
- **`local:` prefix**: Read local file, e.g., `local:jds/linkedin-pm-ai.md`

## Pre-flight

Before processing any URL, verify sync: `node ~/.openclaw/workspace/skills/career-ops/scripts/cv-sync-check.mjs`