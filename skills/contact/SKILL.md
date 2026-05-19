---
name: contact
description: Generate LinkedIn outreach messages tailored by contact type (recruiter, hiring manager, peer, interviewer). Triggers on linkedin, outreach, contact message, contacto, reach out.
---

# Contact — LinkedIn Power Move

Read `~/.openclaw/workspace/skills/career-ops/references/scoring-system.md` for writing rules and archetype detection.

## Data Paths

- CV: `~/.openclaw/workspace/career-ops-data/cv.md`
- Profile: `~/.openclaw/workspace/career-ops-data/config/profile.yml`
- Reports: `~/.openclaw/workspace/career-ops-data/reports/`

## Workflow

1. **Identify targets** via WebSearch: hiring manager, recruiter, 2-3 team peers, interviewer (if scheduled)
2. **Classify contact type**: Recruiter / Hiring Manager / Peer / Interviewer
3. **Select primary target**: person who benefits most from the candidate being there
4. **Generate message** — 3 sentences, 300 characters max

## Message Templates by Contact Type

### Recruiter
- **S1 (Fit):** Direct match criteria — role, experience, availability
- **S2 (Proof):** Data answering screening questions before they ask
- **S3 (CTA):** "Happy to share my CV if this aligns"

### Hiring Manager
- **S1 (Hook):** Specific challenge their team faces (from JD/blog/news)
- **S2 (Proof):** Greatest quantifiable achievement solving similar problems
- **S3 (CTA):** "Would love to hear how your team is approaching [challenge]"

### Peer (referral)
- **S1 (Interest):** Genuine reference to their work — blog, talk, open-source
- **S2 (Connection):** Something you're doing in the same space (NOT a job pitch)
- **S3 (CTA):** "Would love to hear your take on [topic]"
- **Note:** NEVER ask for a job. The referral happens naturally.

### Interviewer (pre-interview)
- **S1 (Research):** Reference something specific from their work
- **S2 (Context):** Light connection to your experience in that area
- **S3 (CTA):** "Looking forward to our conversation on [date]"

## Message Rules

- Maximum 300 characters (LinkedIn connection request limit)
- NO corporate-speak, NO "I'm passionate about..."
- Something that makes them want to respond
- NEVER share phone number
- Contact type changes EMPHASIS, not structure

## Versions

Generate in EN (default) or ES/DE if the company is in that market.