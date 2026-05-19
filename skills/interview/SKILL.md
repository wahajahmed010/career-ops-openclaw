---
name: interview
description: Generate company-specific interview intelligence including process overview, audience-mapped questions, story bank mapping, and technical prep checklist. Triggers on interview prep, interview prep, interview for, prep for interview.
---

# Interview — Company-Specific Interview Intelligence

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for archetype detection.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Story bank: `~/.openclaw/workspace/career-ops-data/interview-prep/story-bank.md`
- Output: `~/.openclaw/workspace/career-ops-data/interview-prep/{company-slug}-{role-slug}.md`

## Workflow

### Step 1 — Research

Run WebSearch queries grouped by audience:

**Recruiter / HR screen:**
- `"{company} {role} salary" site:levels.fyi` and `site:glassdoor.com/Salary`
- `"{company} interview process site:glassdoor.com"`
- `"{company} site:teamblind.com" comp negotiation OR offer`
- `"{company} careers"` + `"{company} benefits"`

**Hiring manager / leadership:**
- `"{company} engineering blog"` and `"{company} {team} blog"`
- `"{company}" news OR launch OR roadmap`
- `"{company} {role} interview process"`

**Peer / technical panel:**
- `"{company} {role} interview questions site:glassdoor.com"`
- `"{company} {role} interview site:leetcode.com/discuss"`
- `"{company} interview process site:teamblind.com"`

**NEVER invent interview questions.** Inferred questions must be tagged `[inferred from JD]`. Cite all sources.

### Step 2 — Process Overview

Summary: rounds, timeline, difficulty rating, positive experience rate, known quirks. If data insufficient, write "unknown" rather than guessing.

### Step 2.5 — Audience Map

Classify each round: `recruiter-screen`, `hiring-manager`, `peer-tech`, `panel-mixed`.

### Step 3 — Round-by-Round Breakdown

For each round: duration, conducted by, what they evaluate, reported questions with sources, how to prepare.

### Step 4 — Likely Questions (per audience)

Group questions by audience. Draft candidate-specific answers using CV and profile. Each audience gets tailored prep:
- **Recruiter**: CV walkthrough, comp, why this company, logistics
- **Hiring Manager**: motivation + scope fit, 90-day plan, leadership questions
- **Peer-tech**: technical depth, domain-specific, reverse questions
- **Panel-mixed**: framing for all audiences, hand-off discipline

### Step 5 — Story Bank Mapping

Map stories from `story-bank.md` to each audience. Identify gaps and suggest experiences from CV that could become STAR+R stories.

### Step 6 — Technical Prep Checklist

Max 10 items, prioritized by frequency and relevance.

### Step 7 — Company Signals (per audience)

What to say, do, and avoid — segmented by who's listening. Different framing for recruiter, HM, peer, and mixed panel.

## Output

Save to `interview-prep/{company-slug}-{role-slug}.md` with header: Company, Role, URL, Legitimacy tier, Report link, Date, Sources count, Audiences covered.

## Post-Research

1. Ask if user wants to draft stories for gaps
2. Suggest running `research` mode if company research was thin
3. If interview date known, suggest setting a review reminder