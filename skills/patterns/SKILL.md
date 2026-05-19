---
name: patterns
description: Analyze rejection patterns across all tracked applications to find what's working and what's wasting time. Triggers on patterns, rejection analysis, pattern analysis, improve targeting.
---

# Patterns — Rejection Pattern Detector

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for scoring context.

## Data Paths

- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Portals: `~/.openclaw/workspace/career-ops-data/portals.yml`
- Script: `node ~/.openclaw/workspace/skills/career-ops/scripts/analyze-patterns.mjs`

## Minimum Threshold

Before running analysis, check: does `data/applications.md` have at least 5 entries with status beyond "Evaluated"?

If not: tell the user there's not enough data yet and suggest coming back with more outcomes.

## Step 1 — Run Analysis Script

Execute: `node ~/.openclaw/workspace/skills/career-ops/scripts/analyze-patterns.mjs`

Parse JSON output containing: metadata, funnel, scoreComparison, archetypeBreakdown, blockerAnalysis, remotePolicy, companySizeBreakdown, scoreThreshold, techStackGaps, recommendations.

## Step 2 — Generate Report

Save to `reports/pattern-analysis-{YYYY-MM-DD}.md` with sections:
- Conversion Funnel
- Score vs Outcome
- Archetype Performance
- Top Blockers
- Remote Policy Patterns
- Tech Stack Gaps
- Recommended Score Threshold
- Top 5 Recommendations

## Step 3 — Present Summary

Condensed view:
1. One-line stat summary
2. Top 3 findings
3. Link to full report

## Step 4 — Offer to Apply Recommendations

Suggest actionable changes:
- Update `portals.yml` to filter out low-converting roles
- Set score threshold in profile
- Adjust archetype targeting

## Outcome Classification

| Status | Outcome |
|--------|---------|
| Interview, Offer, Responded, Applied | **Positive** |
| Rejected, Discarded | **Negative** |
| SKIP, NO APLICAR | **Self-filtered** |
| Evaluated | **Pending** |