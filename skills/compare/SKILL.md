---
name: compare
description: Compare multiple job offers side-by-side with a weighted scoring matrix across 10 dimensions. Triggers on compare offers, compare jobs, ofertas, multiple offers, side by side.
---

# Compare — Multi-Job Comparison

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` first for archetype detection and scoring rules.

## Data Paths

- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`

## Scoring Matrix

10 weighted dimensions:

| Dimension | Weight | Criteria 1-5 |
|-----------|------|----------------|
| North Star alignment | 25% | 5=exact target role, 1=unrelated |
| CV match | 15% | 5=90%+ match, 1=<40% match |
| Level (senior+) | 15% | 5=staff+, 4=senior, 3=mid-senior, 2=mid, 1=junior |
| Estimated compensation | 10% | 5=top quartile, 1=below market |
| Growth trajectory | 10% | 5=clear path to next level, 1=dead end |
| Remote quality | 5% | 5=full remote async, 1=onsite only |
| Company reputation | 5% | 5=top employer, 1=red flags |
| Tech stack modernity | 5% | 5=cutting-edge AI/ML, 1=legacy |
| Time-to-offer speed | 5% | 5=fast process, 1=6+ months |
| Cultural signals | 5% | 5=builder culture, 1=bureaucratic |

## Workflow

1. Ask for job postings if not in context (text, URLs, or references to evaluated jobs in tracker)
2. For each job: score per dimension and total weighted score
3. Final ranking + recommendation with time-to-offer considerations
4. All reports must include **URL:** and **Legitimacy:** fields in the output header