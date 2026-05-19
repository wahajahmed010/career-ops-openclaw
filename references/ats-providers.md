# Career-Ops ATS Provider Reference

<!-- Extracted from career-ops/providers/ — API patterns for Greenhouse, Ashby, Lever -->

## Overview

The scan system uses provider plugins to fetch job listings from ATS platforms. Each provider implements `detect()` (auto-detect from URL) and `fetch()` (retrieve jobs).

## Greenhouse

**URL Pattern:** `https://job-boards.greenhouse.io/{slug}` or `https://job-boards.eu.greenhouse.io/{slug}`

**API Endpoint:** `https://boards-api.greenhouse.io/v1/boards/{slug}/jobs`

**Response Structure:**
```json
{
  "jobs": [
    {
      "title": "Senior AI Engineer",
      "absolute_url": "https://job-boards.greenhouse.io/company/jobs/12345",
      "location": { "name": "Berlin, Germany" }
    }
  ]
}
```

**Key Fields:** `title`, `absolute_url`, `location.name`

**Notes:** Validate hostname against allowlist. Use `redirect: 'error'` to prevent SSRF.

## Ashby

**URL Pattern:** `https://jobs.ashbyhq.com/{slug}`

**API Endpoint:** `https://api.ashbyhq.com/posting-api/job-board/{slug}?includeCompensation=true`

**Response Structure:**
```json
{
  "jobs": [
    {
      "title": "AI Platform Engineer",
      "jobUrl": "https://jobs.ashbyhq.com/company/1234",
      "location": "Remote - US"
    }
  ]
}
```

**Key Fields:** `title`, `jobUrl`, `location`

**Notes:** Some Ashby boards use GraphQL. The posting-api endpoint is simpler and returns structured JSON.

## Lever

**URL Pattern:** `https://jobs.lever.co/{slug}`

**API Endpoint:** `https://api.lever.co/v0/postings/{slug}?mode=json`

**Response Structure:**
```json
[
  {
    "text": "Senior Solutions Architect",
    "hostedUrl": "https://jobs.lever.co/company/abc123",
    "categories": { "location": "Berlin" }
  }
]
```

**Key Fields:** `text` (title), `hostedUrl`, `categories.location`

**Notes:** Response is a flat array, not wrapped in an object. Use `hostedUrl` with fallback to `applyUrl`.

## BambooHR

**List URL:** `https://{company}.bamboohr.com/careers/list`
**Detail URL:** `https://{company}.bamboohr.com/careers/{id}/detail`

**Notes:** List endpoint only returns basic metadata. Must fetch each detail URL for full JD. `result.jobOpening.jobOpeningShareUrl` for public URL.

## Teamtailor

**RSS URL:** `https://{company}.teamtailor.com/jobs.rss`

**Notes:** Standard RSS feed. Parse `<item>` elements for `title` and `link`.

## Workday

**API URL:** `https://{company}.{shard}.myworkdayjobs.com/wday/cxs/{company}/{site}/jobs`

**Notes:** Requires POST with JSON body `{"appliedFacets":{},"limit":20,"offset":0,"searchText":""}`. Paginate by offset.

## General Provider Rules

1. **Always prefer corporate careers URL over ATS URL** — ATS URLs can return 410 for valid jobs due to ID mismatch
2. **Rate limit responsibly** — don't hammer APIs
3. **Handle errors gracefully** — mark failed fetches and continue
4. **Dedup by URL** — same job may appear from multiple sources