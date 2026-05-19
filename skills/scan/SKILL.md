---
name: scan
description: Scan configured job portals for new offers. Uses Greenhouse/Ashby/Lever APIs plus Playwright and WebSearch for discovery. Triggers on scan, scan portals, find jobs, discover offers.
---

# Scan — Portal Scanner

Read `~/.openclaw/workspace/skills/career-ops/references/ats-providers.md` first for provider patterns.

## Data Paths

- Portals config: `~/.openclaw/workspace/career-ops-data/portals.yml`
- Scan history: `~/.openclaw/workspace/career-ops-data/data/scan-history.tsv`
- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`
- Pipeline: `~/.openclaw/workspace/career-ops-data/data/pipeline.md`
- Scripts: `~/.openclaw/workspace/skills/career-ops/scripts/`

## Scan Strategy (3 Levels)

### Level 1 — Playwright Direct (Primary)

For each company in `tracked_companies` with `careers_url`: navigate with Playwright, read all job listings, extract `{title, url, company}`.

### Level 2 — ATS APIs / Feeds (Complementary)

Hit structured JSON endpoints for companies with known ATS providers:
- Greenhouse: `https://boards-api.greenhouse.io/v1/boards/{slug}/jobs`
- Ashby: `https://api.ashbyhq.com/posting-api/job-board/{slug}`
- Lever: `https://api.lever.co/v0/postings/{slug}`
- BambooHR, Teamtailor, Workday also supported

### Level 3 — WebSearch Queries (Discovery)

Execute `search_queries` from `portals.yml` with `enabled: true`. Extract `{title, url, company}` from results.

## Zero-Token Scanner

Run `node ~/.openclaw/workspace/skills/career-ops/scripts/scan.mjs` for Level 2 API-only scanning (no LLM cost). This scans Greenhouse/Ashby/Lever APIs directly.

## Workflow

1. Read `portals.yml` configuration
2. Read `data/scan-history.tsv` for already-seen URLs
3. Read `data/applications.md` + `data/pipeline.md` for dedup sources
4. Execute Level 1 (Playwright), Level 2 (APIs), Level 3 (WebSearch) — additive, results merge and dedup
5. Filter by `title_filter` (positive keywords must match, negative must not)
6. Filter by `location_filter` if configured
7. Dedup against 3 sources: scan-history.tsv, applications.md, pipeline.md
8. Verify liveness for Level 3 URLs (Playwright check each)
9. For each new verified offer: add to `pipeline.md` and register in `scan-history.tsv`
10. Show summary: queries executed, offers found, filtered, duplicates, expired, new additions

## Cron Setup

For daily automated scans, set up a cron job:
```
0 9 * * * cd ~/.openclaw/workspace && openclaw cron run --name career-ops-daily-scan --prompt "Run career-ops scan"
```

## Important Notes

- **Prefer corporate careers URL** over ATS URL — ATS URLs can return 410 errors
- **Never run 2+ Playwright agents in parallel** — they share a browser instance
- If `careers_url` doesn't exist for a company, search for it and save to `portals.yml`