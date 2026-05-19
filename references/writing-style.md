# Career-Ops Writing Style Calibration

<!-- Extracted from career-ops/modes/_shared.md — writing style extraction and calibration rules -->

## When to Apply

Before generating any text the user will send or publish — cover letters, LinkedIn outreach, application form answers, follow-up emails, executive summaries, profile blurbs. Does NOT apply to internal evaluation reports.

## Check Profile First

Check `modes/_profile.md` for a `## Writing Style` section. If it exists, use it directly — do not re-scan writing samples. Re-scanning is only needed when new samples are added or the user explicitly asks to recalibrate.

## If No Cached Style

Read all files in `writing-samples/`, **skipping any file named `README.md`**. If no user-provided samples found, skip style calibration and gently note that adding a writing sample would help tailor outputs. If samples exist, extract the markers below and write the result to `_profile.md` under `## Writing Style`.

## What to Extract

**Tone & register**
- Formal vs. conversational
- Confident vs. hedging (watch for qualifiers like "I think", "perhaps", "somewhat")
- Warm vs. transactional
- Degree of self-promotion

**Sentence structure**
- Average sentence length
- Use of fragments for emphasis
- Clause nesting and complexity
- How sentences open — subject-first, action-first, context-first?

**Punctuation habits**
- Em dashes, en dashes, or parentheses for asides?
- Oxford comma or not?
- Ellipses — used or avoided?
- Exclamation marks — never, sparingly, or freely?
- Semicolons vs. full stops

**Vocabulary**
- Technical density
- Preferred synonyms ("built" vs. "developed" vs. "engineered")
- Repeated phrases — keep them
- Words that never appear — don't introduce them

**Paragraph and structure patterns**
- Paragraph length
- Bullet-heavy or prose-heavy?
- How ideas are sequenced
- Use of headers within longer pieces

**Voice signatures**
- First-person patterns — "I led", "we built", "our team"?
- Active vs. passive ratio
- Habitual openers and closers
- Rhetorical moves — questions, contrast, micro-stories?

## Rules

- **Only extract what is demonstrably present.** Do not infer from a single data point.
- **Idiosyncratic choices are intentional.** Preserve unconventional punctuation or phrasing.
- **If samples conflict**, weight the most recent or most similar-context file.
- **If samples are sparse**, apply what can be reliably extracted and fall back to defaults for the rest.
- **Style calibration applies to tone and structure only.** Do not import content, claims, or metrics from samples.
- **No verbatim copying or personal identifiers.** Store only abstract style descriptors.

## Persisting Extracted Style

Write to `modes/_profile.md` only if at least one user-provided sample was found:

```markdown
## Writing Style

_Extracted from writing-samples/ on {date}. Re-run if new samples are added._

**Tone:** {e.g. conversational, confident, no hedging qualifiers}
**Sentence length:** {e.g. short and punchy, avg 12 words}
**Openings:** {e.g. action-first, subject-first}
**Punctuation:** {e.g. em dashes for asides, Oxford comma, no ellipses}
**Vocabulary:** {e.g. prefers "built"/"ran"/"cut" over "developed"/"led"/"reduced"}
**Structure:** {e.g. prose-heavy, result-first sequencing}
**Voice:** {e.g. "I led", active voice dominant, no rhetorical questions}
**Avoid:** {words or patterns absent from samples}
```