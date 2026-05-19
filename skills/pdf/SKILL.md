---
name: pdf
description: Generate ATS-optimized PDF from CV tailored to a specific job description. Triggers on generate pdf, create cv, make resume, pdf generation, ats cv.
---

# PDF — ATS-Optimized CV Generation

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for ATS and writing rules.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Template: `~/.openclaw/workspace/skills/career-ops/scripts/cv-template.html`
- Output: `~/.openclaw/workspace/career-ops-data/output/`
- Script: `node ~/.openclaw/workspace/skills/career-ops/scripts/generate-pdf.mjs`

## Full Pipeline

1. Read `cv.md` as source of truth
2. Ask for JD if not in context (text or URL)
3. Extract 15-20 keywords from JD
4. Detect JD language → CV language (EN default)
5. Detect company location → paper format (US/Canada → letter, rest → A4)
6. Detect role archetype → adapt framing
7. Rewrite Professional Summary with JD keywords + exit narrative bridge
8. Select top 3-4 most relevant projects for the job
9. Reorder experience bullets by JD relevance
10. Build competency grid from JD requirements (6-8 keyword phrases)
11. Inject keywords naturally into existing achievements (NEVER invent)
12. Generate full HTML from template + personalized content
13. Read `name` from `config/profile.yml` → normalize to kebab-case → `{candidate}`
14. Write HTML to `/tmp/cv-{candidate}-{company}.html`
15. Execute: `node ~/.openclaw/workspace/skills/career-ops/scripts/generate-pdf.mjs /tmp/cv-{candidate}-{company}.html ~/.openclaw/workspace/career-ops-data/output/cv-{candidate}-{company}-{YYYY-MM-DD}.pdf --format={letter|a4}`
16. Report: PDF path, number of pages, keyword coverage %

## ATS Rules

- Single-column layout, no sidebars
- Standard headers: Professional Summary, Work Experience, Education, Skills, Certifications, Projects
- No text in images/SVGs, no nested tables
- UTF-8, selectable text
- Keywords distributed: Summary (top 5), first bullet of each role, Skills section

## PDF Design

- **Fonts**: Space Grotesk (headings) + DM Sans (body)
- **Header**: Name in Space Grotesk 24px bold + gradient line + contact row
- **Section headers**: Space Grotesk 13px, uppercase, letter-spacing 0.05em, cyan primary
- **Body**: DM Sans 11px, line-height 1.5
- **Company names**: accent purple `hsl(270,70%,45%)`
- **Margins**: 0.6in, Background: white

## Section Order (6-second recruiter scan)

1. Header (name, gradient, contact, portfolio)
2. Professional Summary (3-4 lines, keyword-dense)
3. Core Competencies (6-8 keyword phrases in flex-grid)
4. Work Experience (reverse chronological)
5. Projects (top 3-4 most relevant)
6. Education & Certifications
7. Skills

## Keyword Injection Strategy

NEVER add skills the candidate doesn't have. Only reword real experience using JD vocabulary.

## Post-generation

Update tracker if the job is already registered: change PDF from ❌ to ✅.