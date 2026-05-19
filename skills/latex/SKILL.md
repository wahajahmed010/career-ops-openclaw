---
name: latex
description: Generate LaTeX/Overleaf CV tailored to a specific job. Triggers on generate latex, overleaf cv, latex cv, tex resume.
---

# LaTeX — LaTeX/Overleaf CV Export

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for ATS and writing rules.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Output: `~/.openclaw/workspace/career-ops-data/output/`
- Script: `node ~/.openclaw/workspace/skills/career-ops/scripts/generate-latex.mjs`

## Pipeline

1. Read `cv.md` as source of truth
2. Read `config/profile.yml` for candidate identity and contact info
3. Ask for JD if not already in context (text or URL)
4. Extract 15-20 keywords from JD
5. Detect JD language → CV language (EN default)
6. Detect role archetype → adapt framing
7. Rewrite Professional Summary injecting JD keywords
8. Select top 3-4 most relevant projects
9. Reorder experience bullets by JD relevance
10. Inject keywords naturally (NEVER invent skills)
11. Generate `.tex` file using templates
12. Write to `output/cv-{candidate}-{company}-{YYYY-MM-DD}.tex`
13. Run: `node ~/.openclaw/workspace/skills/career-ops/scripts/generate-latex.mjs output/cv-{candidate}-{company}-{YYYY-MM-DD}.tex output/cv-{candidate}-{company}-{YYYY-MM-DD}.pdf`
14. Report: .tex path, .pdf path, file sizes, section count, keyword coverage %

**Requires:** `tectonic` (preferred) or `pdflatex` on PATH.

## LaTeX Escaping (CRITICAL)

All text content MUST be escaped before insertion:
- `&` → `\&`, `%` → `\%`, `$` → `\$`, `#` → `\#`, `_` → `\_`
- `{` → `\{`, `}` → `\}`, `~` → `\textasciitilde{}`
- `^` → `\textasciicircum{}`, `\` → `\textbackslash{}`
- `±` → `$\pm$`, `→` → `$\rightarrow$`

**Exception:** Do NOT escape text inside `\href{URL}{...}` first arguments. URLs must remain raw.

## ATS Rules

Same as PDF mode: single-column, standard headers, UTF-8, keywords distributed, no images.

## Overleaf Compatibility

Generated `.tex` uses only standard CTAN packages. Upload directly to Overleaf — compiles with no extra configuration.