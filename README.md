# Andreas Hell | Full-Stack Developer

Source for the personal portfolio at https://andreas-hell.ddns.net/.
Static site built with [Astro](https://astro.build/) (static output, view transitions via `ClientRouter`), with **i18n** (`en` default + `de` prefixed) and a **dark/light theme** toggle persisted to `localStorage`.
All content lives in `src/data/` and `public/`; the Astro components only render it.

## Tech Stack

- **Framework:** Astro 7 (static HTML output, zero JS by default)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Package manager:** pnpm (see `pnpm-lock.yaml`, `pnpm-workspace.yaml`)
- **Node:** `>=22.12.0` (engines constraint in `package.json`)
- **Formatting:** Prettier + `prettier-plugin-astro` (config in `.prettierrc.mjs`)

## Getting Started

```bash
pnpm install      # install dependencies
pnpm dev          # dev server on http://localhost:3000 (astro.config.mjs)
pnpm build        # static build to ./dist
pnpm preview      # preview the production build
pnpm astro ...    # raw Astro CLI passthrough
```

Path alias `@/*` → `./src/*` is configured in both `tsconfig.json` and Astro.
Import images that should be processed/optimized by Astro from `src/assets/` (via `astro:assets` `Image`).
Place immutable files (PDFs, favicons, org logos) directly under `public/` — they are served as-is at the root.

## Project Structure

```
astro.config.mjs          Astro config: dev port 3000
tsconfig.json             Strict TS, @/* path alias
.prettierrc.mjs           Prettier + Astro plugin, 2-space indent, double quotes
package.json              Scripts: dev / build / preview / astro (no lint/typecheck script yet)

src/
├── pages/                File-based routing (one page per route; de/ mirrors routes for /de/*)
│   ├── index.astro       /          Home (assembled from Home* sections)
│   ├── career.astro       /career     Full career timeline
│   ├── projects.astro    /projects   Full projects list
│   ├── skills.astro       /skills     Full skill matrix
│   └── de/                German locale (Astro i18n: default locale "en" unprefixed, "de" prefixed)
│       ├── index.astro   /de
│       ├── career.astro   /de/career
│       ├── projects.astro /de/projects
│       └── skills.astro   /de/skills
├── layouts/
│   └── BaseLayout.astro   HTML shell: <head>, meta/OG + hreflang alternates, theme pre-paint script, NavBar, <slot/>, Footer, ClientRouter
├── components/            Presentation components (no page logic here)
│   ├── NavBar.astro       Sticky header + mobile drawer
│   ├── Footer.astro       Social links + copyright year
│   ├── SocialLinks.astro  GitHub / LinkedIn / Email / CV download (reused in Hero & Footer)
│   ├── LanguagePill.astro EN/DE segmented toggle (links via getLocalizedPath)
│   ├── ThemePill.astro    Dark/Light segmented toggle (sets <html data-theme>, localStorage, View Transitions)
│   ├── HomeHero.astro     Hero image + headline + statement + inline social links
│   ├── HomeCareer.astro   Home section: important timeline entries only
│   ├── HomeProjects.astro Home section: top 5 important projects
│   ├── HomeSkills.astro   Home section: important skill groups (score-filtered)
│   ├── Timeline.astro      Grid-based career timeline (computes rows from dates)
│   ├── TimelineColumn.astro  Column rendering for Timeline
│   ├── ProjectList.astro  Maps Project[] → ProjectCard[]
│   ├── ProjectCard.astro   Single project card (expandable description + skill tags)
│   └── SkillMatrix.astro   Skill table grouped by category, with legend
├── data/                  Single source of truth for all content (localized via LocalizedText/LocalizedList)
│   ├── projects.ts        Project[] + sortProjects() helper
│   ├── career-timeline.ts work[] + education[] timeline entries
│   └── skills.ts          SkillGroup[] + sortSkillGroups() / filterSkillScore() helpers
├── i18n/
│   ├── ui.ts              Locale type, DEFAULT_LOCALE, LocalizedText/LocalizedList types, pick() + t()/tTemplate(), EN/DE dictionary
│   └── routing.ts         PREFIXED_LOCALES, getLocaleFromPath / stripLocalePrefix / getLocalizedPath
├── util/
│   └── format.ts          formatDate / formatDateRange (locale-aware month names; AT spelling "Jän"…)
├── styles/
│   └── index.css          Design tokens (dark on :root, light overrides on :root[data-theme="light"]) + reset + typography + layout
└── assets/
    └── mount_fuji.jpg      Processed by Astro:assets (used by HomeHero via <Image>)

public/                    Served verbatim at site root
├── documents/             CV_deutsch.pdf, CV_english.pdf
├── favicon/               Site icons + webmanifest (see Icons section)
├── images/                Mount Fuji variants (legacy duplicates; Hero sources from src/assets)
└── logos/                 Org/school logos referenced by career-timeline.ts via icon path
```

## Pages & Content Sources

| Route | Page file | Renders | Content source |
|---|---|---|---|
| `/` | `pages/index.astro` | Hero + curated Career + top Projects + filtered Skills + CV links | `Home*` components (each reads from `src/data/*`) |
| `/career` | `pages/career.astro` | Full dual-column timeline (work left, education right) | `career-timeline.ts` → `work`, `education` |
| `/projects` | `pages/projects.astro` | Full project list, each card linkable via `#<id>` anchor | `projects.ts` → `projects` (sorted by `sortProjects`) |
| `/skills` | `pages/skills.astro` | Full skill matrix table (all groups, all contexts) | `skills.ts` → `skillGroups` (sorted by `sortSkillGroups`) |

Each of the four routes is **mirrored under `/de/*`** (e.g. `/de/career` → `pages/de/career.astro`); the German pages render the same components with `Astro.currentLocale === "de"`, so all labels come from the `de` dictionary and `LocalizedText`/`LocalizedList` content fields switch automatically.

### Home page vs. dedicated pages
The home page intentionally shows **curated subsets** of the same data:

- **HomeCareer** (`HomeCareer.astro`): `work` + `education` entries filtered by `important: true`, with manual `rowAdjustment` overrides for specific positions to tune the grid. Dedicated `/career` page renders **all** entries without overrides.
- **HomeProjects** (`HomeProjects.astro`): `important: true` projects, sliced to 5, not linkable. Dedicated `/projects` page renders **all** projects with anchor links.
- **HomeSkills** (`HomeSkills.astro`): `important: true` groups **and** filtered by `filterSkillScore` (skill score ≥ 25, see `skills.ts`). Dedicated `/skills` page renders **all** groups unfiltered.

Each home section ends with a "For a more thorough exploration…" link to the dedicated page.

## Content Data Model

All editable content is in `src/data/`. Types are exported alongside the data.

### `projects.ts`
```ts
interface Project {
  id: string;            // used as #anchor on /projects
  title: LocalizedText;  // { en, de }; Title Case convention
  description: LocalizedList; // records of paragraphs; first shown, rest collapsed behind "Read more"
  context: "work" | "education" | "private";
  org?: LocalizedText;   // { en, de }
  start: "YYYY-MM";      // end-exclusive in display (formatted via formatDateRange)
  end: "YYYY-MM" | null; // null = "Present"
  skills: string[];      // free-form tags; first 5 shown, rest collapsed
  links: { repo?, demo?, doc? };
  important: boolean;    // gates home-page inclusion
}
```

Localized fields are resolved at render time with `pick(locale, field)` (or implicitly inside components that already call `t`/`pick`) — `en` is the default locale, `de` is the prefixed one.
`sortProjects()` sorts by `end` (null treated as `9999-12`), newest first.

**Voice convention:** first person for academic/private projects ("I built/designed…"); first person only for personal responsibilities on work projects, "our team / we" for team-level work ("I oversaw…", "our team performed…").

### `career-timeline.ts`
```ts
interface TimelineEntry {
  start: "YYYY-MM";
  end: "YYYY-MM" | null;  // null = ongoing
  title: LocalizedText;   // role / degree / certification (official names kept verbatim)
  org: LocalizedText;     // may include grade, e.g. "TU Wien - Grade 1.0"
  description: LocalizedText | null;  // first person ("I…" / "Ich…"), or null for terse entries
  icon: string | null;     // path under /logos/, e.g. "/logos/tuwien_logo.jpg"
  accentColor: "primary" | "secondary";
  rowAdjustment?: number;  // manual grid tweak (used on home page)
  important: boolean;
  projectRefs?: string[];  // Project ids shown in this entry
}
```

A `TimelineEntryExtended` adds grid-layout fields (`lineColumn`, `cardColumn`, `cardLocation: "left" | "right"`, `prefix`) produced in the pages when assembling `work` + `education` for the `Timeline` component.
Exported as two arrays: `work[]` and `education[]` (the latter also includes certifications as additional entries).

### `skills.ts`
```ts
type SkillLevel = "familiar" | "regular" | "heavy";
type SkillContext = "work" | "education" | "private";
interface Skill { name: string; contexts: Partial<Record<SkillContext, SkillLevel>> }
interface SkillGroup { title: LocalizedText; skills: Skill[]; important: boolean }
```

Level labels are also localized: `skillLevels: { level: SkillLevel; label: LocalizedText }[]`.
Helpers:
- `sortSkillGroups()` — sorts skills within each group by weighted score (level weight × context weight), tiebreak alphabetic.
- `filterSkillScore()` — drops skills below the importance baseline (score 25), then drops empty groups.

Score weights: `familiar=1`, `regular=5`, `heavy=9`; `work=10`, `education=5`, `private=3`.

## Internationalization & Theming

### i18n (`src/i18n/`)
- **Locales:** `en` (default, unprefixed) and `de` (prefixed, routes mirrored under `src/pages/de/`). Configured in `astro.config.mjs` via `i18n: { defaultLocale: "en", locales: ["en", "de"], routing: { prefixDefaultLocale: false } }`.
- **`ui.ts`** — `Locale`/`DEFAULT_LOCALE` types, `LocalizedText` (`Record<Locale, string>`) and `LocalizedList` (`Record<Locale, string[]>`) field shapes, the `dict` of UI strings (`t(locale, key)` falls back to `DEFAULT_LOCALE` then the key), and `pick(locale, value)` to unwrap a single `LocalizedText`/`LocalizedList` field.
- **`routing.ts`** — locale-aware path helpers: `getLocaleFromPath`, `stripLocalePrefix`, `getLocalizedPath(path, target)`. Used by `LanguagePill` and `BaseLayout`.
- **Content fields** in `src/data/*` are typed as `LocalizedText` / `LocalizedList`; pages read `Astro.currentLocale` (typed as `Locale`) and resolve fields with `pick`. Months/dates are localized in `src/util/format.ts` (`MONTHS["de"]` uses Austrian "Jän").
- **`<head>` alternates:** `BaseLayout.astro` emits `<link rel="alternate" hreflang="de|en|x-default">` and sets `<html lang={locale}>`.

### Theme toggle (`src/components/ThemePill.astro`)
- Segmented **Dark / Light** pill. Selecting light sets `data-theme="light"` on `<html>`; dark removes it so `:root` defaults reapply.
- Choice is persisted in `localStorage` ("theme") and re-applied on every load by the pre-paint inline script in `BaseLayout.astro`. The pre-paint script also honours `prefers-color-scheme: light` when no stored value exists.
- Updates animate through the View Transitions API (`document.startViewTransition`) when available, and re-bind on `astro:after-swap`.

### Language toggle (`src/components/LanguagePill.astro`)
- Segmented **EN / DE** pill built from anchor links to `getLocalizedPath(currentPath, "en"|"de")`, with correct `hreflang`. Pure navigation (no client JS).

## Design System

Defined as CSS custom properties in `src/styles/index.css`, following the 60-30-10 rule. The **dark** palette lives on `:root` (default); the **light** palette overrides it via `:root[data-theme="light"]`. An inline pre-paint script in `BaseLayout.astro` sets `<html data-theme="light">` from `localStorage` / `prefers-color-scheme` before first paint to avoid FOUC.

### Color Palette

**60% — Dominant canvas neutrals** (dark / light)
| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-bg-main` | `#1E222A` | `#F4F6F9` | Page background |
| `--color-bg-surface` | `#252a34` | `#FFFFFF` | Cards, drawer, skill chips |

**30% — Typography & structural lines**
| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-text-primary` | `#E5E9F0` | `#1E222A` | Headings |
| `--color-text-muted` | `#959EAD` | `#5C667A` | Body prose, meta, muted links |
| `--color-border` | `#333a47` | `#E2E8F0` | Subtle dividers, card borders, hr |

**10% — Focal accents**
| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-accent` | `#00FFC2` | `#008F6B` | CTAs, links, active nav, highlights |
| `--color-accent-hover` | `#00D4A2` | `#007356` | `:hover` on accent elements |
| `--color-accent-secondary` | `#FFB347` | `#D97706` | Amber — alternate accent (e.g. `education` context badge) |
| `--color-accent-secondary-hover` | `#D4953B` | `#B45309` | Darker amber — `:hover` |

### Typography

| Token | Stack | Usage |
|---|---|---|
| `--font-sans` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Body, headings |
| `--font-mono` | `ui-monospace, 'Cascadia Code', 'Fira Code', monospace` | Nav links, meta/badges, footer, code-like accents |

### Layout Metrics

| Token | Value | Usage |
|---|---|---|
| `--navbar-height` | `70px` | NavBar sticky height + hero offset calculations |
| `--table-header-height` | `2.5rem` | Skill matrix header row |

`.container` is the shared horizontal wrapper (`max-width: 1000px`, auto margins, `1.5rem` padding; reduced to `1rem` on mobile `≤780px`).

## Icons

Site favicons live in `public/favicon/`.
They are wired in `src/layouts/BaseLayout.astro`:

| File | Purpose |
|---|---|
| `favicon.svg` | Primary SVG icon (used by NavBar brand) |
| `favicon.ico` | Legacy shortcut icon |
| `favicon-96x96.png` | 96×96 PNG icon; also used as `og:image` |

Org/school logos used by the career timeline live in `public/logos/` and are referenced by `icon` paths in `src/data/career-timeline.ts` (e.g. `"/logos/dynatrace_logo.jpg"`).

## License
This project is not licensed. All rights reserved. © Andreas Hell. 
You may view the code for educational purposes, but you may not copy or redistribute it.

## TODOs

- Check and translate all texts
- Deploy website
- Install Umami or something for simple web analytics

### Career
- need to consider the fact that the career timeline is static, i.e., how can I show always an expanding timeline
  - best solved using a monthly cron job that just rebuilds and deploys the website with the updated timeline

### Professionalism / Polish
- [ ] Accessibility audit: skip-to-content link, `prefers-reduced-motion` handling, focus styles, alt text