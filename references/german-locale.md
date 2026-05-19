# Career-Ops German Locale (DACH Market)

<!-- Extracted from career-ops/modes/de/ — German market specifics -->

## When to Use

- User is targeting German-language job postings
- User lives in DACH (Germany, Austria, Switzerland)
- User asks for German output
- `config/profile.yml` has `language.modes_dir: modes/de`

## DACH Market Specifics

In German job postings and contract negotiations, specific terms appear that don't exist in EN/ES markets:

| Term | Meaning | Evaluation Impact |
|------|---------|-------------------|
| **AGG** (Allgemeines Gleichbehandlungsgesetz) | Anti-discrimination law. Job ads must include "(m/w/d)" | Don't reject applications without "(m/w/d)" — but note as compliance weakness |
| **13. Monatsgehalt** / Weihnachtsgeld | 13th month salary, often paid in November | Comp calculation: Gross x 13 (or 13.5/14 in union sectors). NEVER forget when comparing |
| **Festanstellung** vs **Freelance** | Permanent vs self-employed | Permanent = social security covered, lower risk, lower daily rate. Freelance = higher rate, check for Scheinselbstständigkeit risk |
| **Probezeit** | Typical 6 months, reduced notice period (2 weeks) | Not a red flag — market standard. Only flag if > 6 months |
| **Kündigungsfrist** | Legal notice period after probation, often 1-3 months | Relevant for contract transitions: plan start date accordingly |
| **Urlaub** | 25-30 days standard (legal min. 20 at 5-day week) | < 28 days = below market standard for tech. Negotiable |
| **Tarifvertrag** / TVöD / IG Metall | Collective wage agreements | In union companies, negotiation room is smaller — but more security, fixed increases |
| **Betriebsrat** | Employee representation | Strong in mid-size and large companies. Say in terminations, working hours. Plus for stability |
| **Bewerbungsmappe** | Cover letter + CV + references | Often expected in DACH, unlike EN markets. References can be submitted later |
| **Arbeitszeugnis** | Structured reference document from former employer | Classic DACH standard, has its own coded language |
| **VWL** (Vermögenswirksame Leistungen) | Employer subsidy for wealth building | Small amount (often 40 €/month), but counts as benefit |
| **bAV** (Betriebliche Altersvorsorge) | Company pension | Can be several hundred euros monthly — include in comp comparison |

## German Evaluation Mode (angebot)

When evaluating German-language job postings:

1. Use German for all output (summaries, reports, recommendations)
2. Include DACH-specific comp checks: 13th month, VWL, bAV, Tarifvertrag
3. Check for Festanstellung vs Freelance and note Scheinselbstständigkeit risk
4. Note Probezeit duration (standard = 6 months, flag if longer)
5. Include Kündigungsfrist in practical planning
6. Generate German-language PDF content if the JD is in German
7. Use German status names in tracker: Evaluated → Evaluiert, Applied → Beworben, etc.

## German Application Mode (bewerben)

When helping with German application forms:

- **Gehaltsvorstellung (brutto, jährlich)** → Range from profile.yml, in EUR, with note "verhandelbar je nach Gesamtpaket"
- **Eintrittsdatum / Verfügbarkeit** → Realistic date considering Kündigungsfrist (often 1-3 months)
- **Arbeitserlaubnis / Aufenthaltsstatus** → Honest and brief; for EU citizens: "Keine Arbeitserlaubnis erforderlich (EU-Bürger:in)"
- **Sprachkenntnisse** → German / English by GER level (A1-C2)
- **Anrede** → German forms often require (Herr / Frau / Divers / Keine)

## German Pipeline Mode

- Section headers can be DE ("Offen"/"Verarbeitet") — be flexible when reading, preserve style when writing
- StepStone / XING / Kununu: German portals, often have cookie banners. Playwright can handle scrolling
- Bundesagentur für Arbeit (arbeitsagentur.de): Structured postings, machine-readable. WebFetch usually sufficient

## Negotiation Scripts (German)

**Gehaltsvorstellung:**
> "Auf Basis aktueller Marktdaten für diese Rolle peile ich [SPANNE aus profile.yml] an. Bei der Struktur bin ich flexibel — entscheidend sind das Gesamtpaket und die Entwicklungsperspektive."

**Pushback bei Geo-Diskount:**
> "Die Rollen, in denen ich konkurriere, sind ergebnisorientiert, nicht ortsabhängig. Mein Track Record ändert sich nicht mit der Postleitzahl."

**Wenn das Angebot unter dem Zielwert liegt:**
> "Ich vergleiche aktuell mit Angeboten im Bereich [höhere Spanne]. [Firma] reizt mich wegen [Grund]. Lässt sich [Zielwert] gemeinsam erreichen?"

## Writing Rules for German

- Natürliches Tech-Deutsch, keine wörtliche Übersetzung
- Kurze Sätze, aktive Verben, Passiv vermeiden
- Fachbegriffe (Stack, Pipeline, Deployment, Embedding) nicht zwanghaft eindeutschen
- Case-Study-URLs in der PDF Professional Summary MÜSSEN im ersten Absatz erscheinen