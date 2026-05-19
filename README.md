# Career-Ops for OpenClaw

> AI-powered job search pipeline, natively adapted for OpenClaw. Fork of [santifer/career-ops](https://github.com/santifer/career-ops) (45K+ ⭐).

## What It Does

Career-Ops turns your OpenClaw agent into a full job search command center:

- **Evaluate** job offers with a structured A-G scoring system (6 weighted dimensions + posting legitimacy)
- **Auto-Pipeline** — paste a JD URL, get full evaluation + tailored CV + tracker entry
- **Scan** job portals automatically (Greenhouse, Ashby, Lever — zero-token API scanner)
- **Batch** evaluate multiple jobs in parallel via subagents
- **Generate** ATS-optimized PDFs and LaTeX CVs
- **Prep** for interviews with STAR+R story banks
- **Track** applications, analyze rejection patterns, manage follow-up cadences
- **Outreach** — LinkedIn contact finder + message drafts
- **Research** — deep company dives, comp analysis, cultural signals

## Quick Start

### 1. Install Dependencies

```bash
cd ~/.openclaw/workspace/skills/career-ops
npm install
npx playwright install chromium   # Required for PDF generation
```

### 2. Set Up Your Data

Copy the example profile and fill in your details:

```bash
cd ~/.openclaw/workspace/career-ops-data

# Edit these files with your information:
# - cv.md              → Your CV in markdown
# - config/profile.yml  → Your identity, targets, compensation
# - portals.yml         → Job portal configuration
```

### 3. Use It

Just talk to your agent naturally:

- "Evaluate this job: [paste URL or JD text]"
- "Scan for new ML engineer roles"
- "Generate a PDF for the SpaceX application"
- "Prep me for my Anthropic interview"
- "What's my application tracker looking like?"

The skill router detects intent and routes to the right sub-skill.

## Sub-Skills

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| **evaluate** | "evaluate", "review job", "score offer" | Full A-G evaluation with scoring |
| **compare** | "compare offers", "rank jobs" | Side-by-side offer comparison |
| **auto-pipeline** | "auto-pipeline", "paste URL" | End-to-end: URL → evaluation → PDF → tracker |
| **scan** | "scan jobs", "find roles" | Portal scanning (Greenhouse, Ashby, Lever) |
| **batch** | "batch evaluate", "process all" | Parallel evaluation via subagents |
| **pipeline** | "process pipeline", "process inbox" | Process pending URLs from pipeline |
| **pdf** | "generate PDF", "make CV" | ATS-optimized HTML → PDF |
| **latex** | "generate LaTeX", "LaTeX CV" | LaTeX CV generation |
| **interview** | "interview prep", "STAR stories" | Interview prep with story bank |
| **apply** | "fill application", "apply form" | Application form assistant |
| **contact** | "find contacts", "LinkedIn outreach" | LinkedIn contact finder + message drafts |
| **research** | "research company", "deep dive" | Deep company research |
| **tracker** | "tracker", "application status" | Application status overview |
| **patterns** | "rejection patterns", "analyze rejections" | Rejection pattern analysis |
| **followup** | "follow up", "follow-up cadence" | Follow-up timing tracker |
| **training** | "evaluate course", "cert worth it" | Course/certification evaluation |
| **project** | "portfolio project", "project idea" | Portfolio project evaluation |

## Scoring System

Every evaluation uses a weighted 1-5 scale:

| Block | Dimension | Weight |
|-------|-----------|--------|
| B | Match with CV | 30% |
| B | North Star Alignment | 20% |
| D | Comp & Demand | 20% |
| C | Level & Strategy | 15% |
| E | Cultural Signals & Red Flags | 15% |

**Block G** (Posting Legitimacy) is assessed separately as High Confidence / Proceed with Caution / Suspicious.

**Score interpretation:**
- 4.5+ → Strong match, apply immediately
- 4.0–4.4 → Good match, worth applying
- 3.5–3.9 → Decent but not ideal
- Below 3.5 → Recommend against

## German Market (DACH)

Built-in support for German job market specifics:

- 13. Monatsgehalt (annual salary = monthly × 13)
- Probezeit (6-month probation)
- Kündigungsfrist (3-month notice period)
- AGG compliance (no photo on CV, no discriminatory questions)
- Motivationsschreiben (cover letter culture)
- Tarifvertrag (collective bargaining agreements)

Activate by targeting German-language postings or setting `language: de` in your profile.

## Architecture

```
skills/career-ops/
├── SKILL.md                    # Router (triggers on job/career/CV keywords)
├── references/                 # Shared context
│   ├── scoring-system.md       # A-G scoring, archetypes, rules
│   ├── writing-style.md         # Tone calibration, persistence
│   ├── german-locale.md         # DACH market specifics
│   └── ats-providers.md         # Greenhouse/Ashby/Lever API patterns
├── skills/                     # 16 sub-skills
│   ├── evaluate/SKILL.md
│   ├── auto-pipeline/SKILL.md
│   ├── scan/SKILL.md
│   └── ... (see table above)
├── scripts/                    # Node.js utilities
│   ├── paths.mjs               # Centralized path resolution
│   ├── generate-pdf.mjs        # Playwright PDF generation
│   ├── scan.mjs                # Zero-token portal scanner
│   └── ... (17 scripts total)
├── providers/                  # ATS API providers
│   ├── greenhouse.mjs
│   ├── ashby.mjs
│   └── lever.mjs
├── fonts/                      # ATS-optimized fonts
└── package.json

career-ops-data/                # Your data (separated from skill code)
├── cv.md                       # Your CV
├── config/profile.yml           # Your profile
├── portals.yml                  # Portal config
├── data/
│   ├── applications.md          # Application tracker
│   ├── pipeline.md              # Pending URLs
│   ├── scan-history.tsv         # Scanner history
│   └── follow-ups.md            # Follow-up tracking
├── reports/                    # Evaluation reports
├── output/                     # Generated PDFs
├── jds/                        # Saved job descriptions
└── interview-prep/
    └── story-bank.md           # Accumulated STAR+R stories
```

## Scripts

| Script | Purpose |
|--------|---------|
| `generate-pdf.mjs` | HTML → PDF via Playwright |
| `generate-latex.mjs` | LaTeX CV validator + compiler |
| `scan.mjs` | Zero-token portal scanner (Greenhouse/Ashby/Lever) |
| `check-liveness.mjs` | Job posting liveness checker |
| `merge-tracker.mjs` | Merge TSV tracker additions |
| `dedup-tracker.mjs` | Deduplicate tracker entries |
| `normalize-statuses.mjs` | Normalize application status names |
| `verify-pipeline.mjs` | Pipeline integrity checks |
| `analyze-patterns.mjs` | Rejection pattern analysis (JSON output) |
| `followup-cadence.mjs` | Follow-up cadence calculator |
| `cv-sync-check.mjs` | CV source sync verification |
| `doctor.mjs` | System health check |
| `update-system.mjs` | ⚠️ DISABLED (not applicable to OpenClaw) |

## Cron Jobs (Recommended)

Set up through OpenClaw's cron system:

| Schedule | Skill | Purpose |
|----------|-------|---------|
| Daily 09:00 | scan | Discover new job postings |
| Every 2-3 days | followup | Flag overdue follow-ups |
| Weekly | patterns | Analyze rejection patterns |
| After 10+ applications | patterns | Statistical significance check |

## Ethical Use

- **NEVER submit applications without user review**
- **Discourage low-fit applications** — score < 4.0 = recommend against
- **Quality over quantity** — fewer well-targeted applications beat mass blasts
- **Respect recruiters' time** — only send what's worth reading

## Credits

- Original project: [santifer/career-ops](https://github.com/santifer/career-ops) by [@santifer](https://x.com/santifer)
- OpenClaw adaptation by [wahajahmed010](https://github.com/wahajahmed010)
- License: MIT (same as original)

## Differences from Original

| Feature | Original (CLI) | OpenClaw Adaptation |
|---------|---------------|---------------------|
| Runtime | Claude Code / OpenCode / Gemini CLI | OpenClaw skills + subagents |
| Batch processing | `claude -p` workers | `sessions_spawn` subagents |
| Scheduling | Manual | Cron jobs (daily scan, follow-ups) |
| Data paths | Relative to project root | `~/.openclaw/workspace/career-ops-data/` |
| Script paths | `__dirname` relative | Centralized `paths.mjs` module |
| Updates | `update-system.mjs` | Disabled (fork diverges) |
| Inter-agent communication | None | Bridge to Hermes for second opinions |
| Memory | Session-scoped files | OpenClaw memory + story bank persistence |