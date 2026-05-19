/**
 * paths.mjs — Centralised data & script paths for career-ops
 *
 * All paths point to ~/.openclaw/workspace/career-ops-data/ for user data
 * and ~/.openclaw/workspace/skills/career-ops/ for skill files.
 *
 * Every script should import from this module instead of using __dirname
 * or relative paths.
 */

import { join } from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const DATA_ROOT = join(homedir(), '.openclaw', 'workspace', 'career-ops-data');
const SCRIPT_ROOT = join(homedir(), '.openclaw', 'workspace', 'skills', 'career-ops', 'scripts');

export const PATHS = {
  DATA_ROOT,
  SCRIPT_ROOT,
  CV: join(DATA_ROOT, 'cv.md'),
  PROFILE: join(DATA_ROOT, 'config/profile.yml'),
  PORTALS: join(DATA_ROOT, 'portals.yml'),
  APPLICATIONS: join(DATA_ROOT, 'data/applications.md'),
  PIPELINE: join(DATA_ROOT, 'data/pipeline.md'),
  SCAN_HISTORY: join(DATA_ROOT, 'data/scan-history.tsv'),
  FOLLOWUPS: join(DATA_ROOT, 'data/follow-ups.md'),
  REPORTS: join(DATA_ROOT, 'reports'),
  OUTPUT: join(DATA_ROOT, 'output'),
  JDS: join(DATA_ROOT, 'jds'),
  STORY_BANK: join(DATA_ROOT, 'interview-prep/story-bank.md'),
  ARTICLE_DIGEST: join(DATA_ROOT, 'article-digest.md'),
  BATCH: join(DATA_ROOT, 'batch'),
  TEMPLATES: join(SCRIPT_ROOT, 'cv-template.html'),
  STATES: join(SCRIPT_ROOT, 'states.yml'),
  FONTS: join(SCRIPT_ROOT, '..', 'fonts'),
  PROVIDERS: join(SCRIPT_ROOT, '..', 'providers'),
  MODES: join(SCRIPT_ROOT, '..', 'modes'),
  WRITING_SAMPLES: join(DATA_ROOT, 'writing-samples'),
  MODES_DIR: join(DATA_ROOT, 'config', 'language_modes_dir'), // for locale support
};