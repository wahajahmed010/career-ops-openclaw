---
name: tracker
description: Show and manage application status tracker. Read and display applications.md with statistics. Triggers on tracker, applications, status, application status, track jobs.
---

# Tracker — Application Status Overview

## Data Paths

- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`

## Workflow

1. Read `data/applications.md`
2. Display the full tracker table
3. If user asks to update a status, edit the corresponding row

## Tracker Format

```markdown
| # | Date | Company | Role | Score | Status | PDF | Report | Notes |
```

## Canonical States

| State | When to use |
|-------|-------------|
| Evaluated | Report completed, pending decision |
| Applied | Application sent |
| Responded | Company responded |
| Interview | In interview process |
| Offer | Offer received |
| Rejected | Rejected by company |
| Discarded | Discarded by candidate or offer closed |
| SKIP | Doesn't fit, don't apply |

**Rules:** No markdown bold in status field, no dates in status, no extra text in status.

## Statistics

Show alongside the tracker:
- Total applications
- By status
- Average score
- % with PDF generated
- % with report generated

## Scripts

- `node ~/.openclaw/workspace/skills/career-ops/scripts/normalize-statuses.mjs` — normalize status names
- `node ~/.openclaw/workspace/skills/career-ops/scripts/dedup-tracker.mjs` — remove duplicates
- `node ~/.openclaw/workspace/skills/career-ops/scripts/merge-tracker.mjs` — merge TSV additions