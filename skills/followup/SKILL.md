---
name: followup
description: Track follow-up cadence for active applications. Flag overdue follow-ups and generate tailored email/LinkedIn drafts. Triggers on follow up, followup, cadence, follow-up tracker, check follow-ups.
---

# Follow-up — Cadence Tracker

## Data Paths

- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`
- Follow-ups: `~/.openclaw/workspace/career-ops-data/data/follow-ups.md`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Script: `node ~/.openclaw/workspace/skills/career-ops/scripts/followup-cadence.mjs`

## Step 1 — Run Cadence Script

Execute: `node ~/.openclaw/workspace/skills/career-ops/scripts/followup-cadence.mjs`

Parse JSON output containing: metadata, entries (per-application cadence data), cadenceConfig.

If no actionable entries: tell user to apply to some roles first.

## Step 2 — Display Dashboard

Sort by urgency (urgent > overdue > waiting > cold):

```
| # | Company | Role | Status | Days | Follow-ups | Next | Urgency | Contact |
```

Visual indicators:
- **URGENT** — respond within 24h
- **OVERDUE** — follow-up past due
- **waiting (X days)** — on track
- **COLD** — 2+ follow-ups sent, suggest closing

## Step 3 — Generate Follow-up Drafts

For each **overdue** or **urgent** entry:

1. Read the linked report for company context
2. Read `cv.md` for proof points
3. Read profile for candidate name

### Email Framework (first follow-up):
1. Reference specific role + when applied
2. One concrete value-add from report or CV
3. Soft ask + availability
4. (Optional) Brief achievement mention

**Rules:**
- Professional but warm, NOT desperate
- NEVER "just checking in", "touching base", "circling back"
- Lead with value, not ask
- Under 150 words
- Include subject line

### Second Follow-up (shorter, new angle):
- Share relevant insight/article/project update
- Don't repeat first follow-up content

### Cold Application (2+ follow-ups):
Suggest: update status to Discarded, try different contact, or deprioritize.

## Step 4 — Record Follow-ups

After user confirms sending, record in `data/follow-ups.md`.

**Only record confirmed sends.** Never record a draft as sent.

## Cadence Rules

| Status | First follow-up | Subsequent | Max attempts |
|--------|----------------|------------|-------------|
| Applied | 7 days after | Every 7 days | 2 (then cold) |
| Responded | 1 day (urgent) | Every 3 days | No limit |
| Interview | 1 day (thank-you) | Every 3 days | No limit |