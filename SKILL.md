---
name: career-ops
description: Full career operations suite — evaluate job offers (A-G scoring), compare multiple offers, auto-pipeline from URLs, portal scanning, batch processing, ATS-optimized PDF/LaTeX CV generation, interview prep, application assistance, LinkedIn outreach, deep company research, application tracking, rejection pattern analysis, follow-up cadence, training evaluation, and portfolio project evaluation. Triggers on job, career, offer, oferta, bewerbung, CV, resume, interview, scan, pipeline, tracker.
---

# Career-Ops — AI Job Search Pipeline

Complete career operations suite adapted for OpenClaw. Reads `~/.openclaw/workspace/career-ops-data/` for all user data.

## Quick Reference

| Intent | Route to |
|--------|----------|
| Evaluate a single job offer (URL or text) | `skills/career-ops/skills/evaluate/` |
| Compare multiple offers | `skills/career-ops/skills/compare/` |
| Paste URL → full auto-pipeline | `skills/career-ops/skills/auto-pipeline/` |
| Scan job portals for new offers | `skills/career-ops/skills/scan/` |
| Batch evaluate multiple jobs | `skills/career-ops/skills/batch/` |
| Process pending URLs from inbox | `skills/career-ops/skills/pipeline/` |
| Generate ATS-optimized PDF | `skills/career-ops/skills/pdf/` |
| Generate LaTeX CV | `skills/career-ops/skills/latex/` |
| Interview prep for a company | `skills/career-ops/skills/interview/` |
| Fill out application form | `skills/career-ops/skills/apply/` |
| LinkedIn outreach message | `skills/career-ops/skills/contact/` |
| Deep company research | `skills/career-ops/skills/research/` |
| Check application status | `skills/career-ops/skills/tracker/` |
| Analyze rejection patterns | `skills/career-ops/skills/patterns/` |
| Follow-up cadence tracker | `skills/career-ops/skills/followup/` |
| Evaluate a course/certification | `skills/career-ops/skills/training/` |
| Evaluate a portfolio project | `skills/career-ops/skills/project/` |

## Data Paths

All user data lives in `~/.openclaw/workspace/career-ops-data/`:

| File | Purpose |
|------|---------|
| `cv.md` | Candidate's CV (source of truth) |
| `config/profile.yml` | Candidate identity, targets, comp |
| `data/applications.md` | Application tracker |
| `data/pipeline.md` | Inbox of pending URLs |
| `data/scan-history.tsv` | Scanner dedup history |
| `data/follow-ups.md` | Follow-up history |
| `portals.yml` | Portal scanner config |
| `reports/` | Evaluation reports |
| `output/` | Generated PDFs |
| `jds/` | Saved job descriptions |
| `interview-prep/story-bank.md` | Reusable STAR+R stories |

## Scripts

Utility scripts are in `~/.openclaw/workspace/skills/career-ops/scripts/`:

| Script | Purpose |
|--------|---------|
| `generate-pdf.mjs` | HTML → PDF via Playwright |
| `generate-latex.mjs` | LaTeX CV validator + compiler |
| `scan.mjs` | Zero-token portal scanner (Greenhouse/Ashby/Lever APIs) |
| `check-liveness.mjs` | Job posting liveness checker |
| `liveness-browser.mjs` | Browser-based liveness checks |
| `liveness-core.mjs` | Shared liveness logic |
| `merge-tracker.mjs` | Merge TSV tracker additions |
| `dedup-tracker.mjs` | Deduplicate tracker entries |
| `normalize-statuses.mjs` | Normalize status names |
| `verify-pipeline.mjs` | Pipeline integrity checks |
| `analyze-patterns.mjs` | Pattern analysis (JSON output) |
| `followup-cadence.mjs` | Follow-up cadence calculator |
| `update-system.mjs` | Career-ops update checker |
| `cv-sync-check.mjs` | CV source sync verification |
| `doctor.mjs` | System health check |
| `test-all.mjs` | Run all tests |
| `gemini-eval.mjs` | Gemini-based evaluation |
| `cv-template.html` | ATS-optimized HTML template |
| `states.yml` | Canonical application states |

Run scripts with: `node ~/.openclaw/workspace/skills/career-ops/scripts/{script}.mjs`

## References

| Reference | Content |
|-----------|---------|
| `references/scoring-system.md` | A-G scoring, archetype detection, global rules, ATS writing rules |
| `references/writing-style.md` | Writing style calibration, tone extraction, persistence |
| `references/german-locale.md` | DACH market specifics (13. Monatsgehalt, Probezeit, AGG, etc.) |
| `references/ats-providers.md` | Greenhouse/Ashby/Lever API patterns and provider contract |

## Language Detection

- Default: English modes
- If user targets German-language postings, lives in DACH, or asks for German → read `references/german-locale.md` and use German output
- If `config/profile.yml` has `language.modes_dir` set → use that locale
- If user applies to English-language roles at German companies → use English modes unless user explicitly requested German

## Onboarding

On first use, check if required files exist in `career-ops-data/`:
1. `cv.md` — if missing, ask user to provide CV
2. `config/profile.yml` — if missing, copy from profile template and guide user
3. `portals.yml` — if missing, copy from example
4. `data/applications.md` — if missing, create with header row

If any are missing, enter onboarding mode before proceeding with evaluations.

## Ethical Use

- **NEVER submit applications without user review**
- **Discourage low-fit applications** — if score < 4.0, recommend against applying
- **Quality over speed** — fewer well-targeted applications beat mass blasts
- **Respect recruiters' time** — only send what's worth reading