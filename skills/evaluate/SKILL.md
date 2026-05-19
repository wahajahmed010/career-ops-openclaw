---
name: evaluate
description: Full A-G evaluation of a single job offer. Scoring across 6 dimensions (match, North Star, comp, culture, red flags, global) plus posting legitimacy analysis. Triggers on evaluate, oferta, review job, score job, assess offer.
---

# Evaluate — Full A-G Evaluation

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` first for scoring rules, archetype detection, and global rules.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Profile narrative: `~/.openclaw/workspace/career-ops-data/config/profile.md` (or create from template)
- Article digest: `~/.openclaw/workspace/career-ops-data/article-digest.md` (if exists)
- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Story bank: `~/.openclaw/workspace/career-ops-data/interview-prep/story-bank.md`

## Workflow

### Step 0 — Archetype Detection

Classify the job into one of 6 archetypes (see scoring-system.md). If hybrid, indicate the 2 closest ones. This determines which proof points to prioritize.

### Block A — Role Summary

Table with: Archetype detected, Domain, Function, Seniority, Remote, Team size (if mentioned), TL;DR in 1 sentence.

### Block B — Match with CV

Read `cv.md`. Create a table mapping each JD requirement to exact lines in the CV. Adapt emphasis to archetype. Include a **Gaps** section with mitigation strategy for each gap.

### Block C — Level and Strategy

1. Level detected vs candidate's natural level
2. "Sell senior without lying" plan: specific phrases, achievements to highlight
3. "If they downlevel me" plan: accept if comp is fair, negotiate 6-month review

### Block D — Comp and Demand

Use WebSearch for current salaries (Glassdoor, Levels.fyi, Blind). Include company comp reputation and demand trend. If no data found, say so.

### Block E — Customization Plan

Table with top 5 changes to CV and top 5 changes to LinkedIn to maximize match.

### Block F — Interview Plan

6-10 STAR+R stories mapped to JD requirements. Include recommended case study and red-flag questions. Check story-bank.md for existing stories; append new ones.

### Block G — Posting Legitimacy

Analyze signals: posting freshness, description quality, company hiring signals, reposting detection. Output: High Confidence / Proceed with Caution / Suspicious.

### Post-evaluation

1. Save report to `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`
2. Record in tracker `data/applications.md`

Report header must include: Date, URL, Archetype, Score, Legitimacy, PDF status.

## German Mode

If the JD is in German or user targets DACH market, read `~/.openclaw/workspace/skills/career-ops/references/german-locale.md` and:
- Use German for all output
- Include 13. Monatsgehalt, Probezeit, Kündigungsfrist, Tarifvertrag checks
- Generate German-language report sections