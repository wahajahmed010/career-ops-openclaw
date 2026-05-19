---
name: apply
description: Live application assistant — reads the form on screen, matches to evaluation context, generates tailored responses for each question. Triggers on apply, fill form, application form, apply to, bewerben.
---

# Apply — Live Application Assistant

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for writing rules.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`
- Tracker: `~/.openclaw/workspace/career-ops-data/data/applications.md`

## Workflow

```
1. DETECT      → Read active page (Playwright screenshot or user input)
2. IDENTIFY    → Extract company + role from page
3. SEARCH      → Match against existing reports
4. LOAD        → Read full report + Section G (draft answers) if exists
5. COMPARE     → Does role on screen match evaluated role? Notify if changed
6. ANALYZE     → Identify ALL visible form questions
7. GENERATE    → Personalized response for each question
8. PRESENT     → Formatted for copy-paste
```

## Question Classification

- **Free text** (cover letter, motivation, why this role)
- **Dropdowns** (how did you hear, work authorization)
- **Yes/No** (relocation, visa, availability)
- **Salary fields** (range, expectation — in local currency)
- **Upload fields** (resume, cover letter PDF, references)

## German-Specific Form Fields

- **Gehaltsvorstellung (brutto, jährlich)** → Range from profile.yml, EUR, "verhandelbar je nach Gesamtpaket"
- **Eintrittsdatum / Verfügbarkeit** → Realistic date considering Kündigungsfrist
- **Arbeitserlaubnis** → For EU citizens: "Keine Arbeitserlaubnis erforderlich"
- **Sprachkenntnisse** → German/English by GER level (A1-C2)
- **Anrede** → Required field (Herr/Frau/Divers/Keine)

## Response Framework

**Tone: "I'm choosing you."**
- Confident without arrogance
- Specific and concrete — reference JD and CV
- 2-4 sentences per response
- The hook is the proof, not the statement

## Post-Apply

If user confirms submission:
1. Update status in `applications.md` from "Evaluated" to "Applied"
2. Update report Section G with final responses
3. Suggest: `contact` skill for LinkedIn outreach