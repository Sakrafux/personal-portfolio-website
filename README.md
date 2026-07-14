# Andreas Hell | Full-Stack Developer

Source for the personal portfolio at https://andreas-hell.ddns.net/.
Static site built with [Astro](https://astro.build/) (static output, view transitions via `ClientRouter`).
All content lives in `src/data/` and `public/`; the Astro components only render it.

## Tech Stack

- **Framework:** Astro 7 (static HTML output, zero JS by default, island components via Preact only when interactive)
- **UI rendering:** `@astrojs/preact` 6 + Preact 10 (available for islands; currently unused on pages)
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
astro.config.mjs          Astro config: dev port 3000, Preact integration
tsconfig.json             Strict TS, @/* path alias
.prettierrc.mjs           Prettier + Astro plugin, 2-space indent, double quotes
package.json              Scripts: dev / build / preview / astro (no lint/typecheck script yet)

src/
├── pages/                File-based routing (one page per route)
│   ├── index.astro       /          Home (assembled from Home* sections)
│   ├── career.astro       /career     Full career timeline
│   ├── projects.astro    /projects   Full projects list
│   └── skills.astro       /skills     Full skill matrix
├── layouts/
│   └── BaseLayout.astro   HTML shell: <head>, meta/OG, NavBar, <slot/>, Footer, ClientRouter
├── components/            Presentation components (no page logic here)
│   ├── NavBar.astro       Sticky header + mobile drawer
│   ├── Footer.astro       Social links + copyright year
│   ├── SocialLinks.astro  GitHub / LinkedIn / Email / CV download (reused in Hero & Footer)
│   ├── HomeHero.astro     Hero image + headline + statement + inline social links
│   ├── HomeCareer.astro   Home section: important timeline entries only
│   ├── HomeProjects.astro Home section: top 5 important projects
│   ├── HomeSkills.astro   Home section: important skill groups (score-filtered)
│   ├── Timeline.astro      Grid-based career timeline (computes rows from dates)
│   ├── TimelineColumn.astro  Column rendering for Timeline
│   ├── ProjectList.astro  Maps Project[] → ProjectCard[]
│   ├── ProjectCard.astro   Single project card (expandable description + skill tags)
│   └── SkillMatrix.astro   Skill table grouped by category, with legend
├── data/                  Single source of truth for all content
│   ├── projects.ts        Project[] + sortProjects() helper
│   ├── career-timeline.ts work[] + education[] timeline entries
│   └── skills.ts          SkillGroup[] + sortSkillGroups() / filterSkillScore() helpers
├── styles/
│   └── index.css          Design tokens + reset + base typography + layout
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
  title: string;         // Title Case convention
  description: string[]; // paragraphs; first shown, rest collapsed behind "Read more"
  context: "work" | "education" | "private";
  org?: string;
  start: "YYYY-MM";      // end-exclusive in display (formatted via formatDateRange)
  end: "YYYY-MM" | null; // null = "Present"
  skills: string[];      // free-form tags; first 5 shown, rest collapsed
  links: { repo?, demo?, doc? };
  important: boolean;    // gates home-page inclusion
}
```
`sortProjects()` sorts by `end` (null treated as `9999-12`), newest first.

**Voice convention:** first person for academic/private projects ("I built/designed…"); first person only for personal responsibilities on work projects, "our team / we" for team-level work ("I oversaw…", "our team performed…").

### `career-timeline.ts`
```ts
interface TimelineEntry {
  start: "YYYY-MM";
  end: "YYYY-MM" | null;  // null = ongoing
  title: string;           // role / degree / certification (official names kept verbatim)
  org: string;             // may include grade, e.g. "TU Wien - Grade 1.0"
  description: string | null;  // first person ("I…"), or null for terse entries
  icon: string | null;     // path under /logos/, e.g. "/logos/tuwien_logo.jpg"
  accentColor: "primary" | "secondary";
  rowAdjustment?: number;  // manual grid tweak (used on home page)
  important: boolean;
  projectRefs?: string[];  // Project ids shown in this entry
}
```
Exported as two arrays: `work[]` and `education[]` (the latter also includes certifications as additional entries).

### `skills.ts`
```ts
type SkillLevel = "familiar" | "regular" | "heavy";
type SkillContext = "work" | "education" | "private";
interface Skill { name: string; contexts: Partial<Record<SkillContext, SkillLevel>> }
interface SkillGroup { title: string; skills: Skill[]; important: boolean }
```
Helpers:
- `sortSkillGroups()` — sorts skills within each group by weighted score (level weight × context weight), tiebreak alphabetic.
- `filterSkillScore()` — drops skills below the importance baseline (score 25), then drops empty groups.

Score weights: `familiar=1`, `regular=5`, `heavy=9`; `work=10`, `education=5`, `private=3`.

## Design System

Defined as CSS custom properties on `:root` in `src/styles/index.css`, following the 60-30-10 rule.

### Color Palette

**60% — Dominant dark canvas neutrals**
| Token | Hex | Usage |
|---|---|---|
| `--color-bg-main` | `#1E222A` | Deep Slate — page background |
| `--color-bg-surface` | `#252a34` | Slightly lighter — cards, drawer, skill chips |

**30% — Typography & structural lines**
| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#E5E9F0` | Crisp chalk white — headings |
| `--color-text-muted` | `#959EAD` | Muted gray — body prose, meta, muted links |
| `--color-border` | `#333a47` | Subtle dividers, card borders, hr |

**10% — Focal accents**
| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#00FFC2` | Vibrant Carbon Mint — CTAs, links, active nav, highlights |
| `--color-accent-hover` | `#00D4A2` | Darker mint — `:hover` on accent elements |
| `--color-accent-secondary` | `#FFB347` | Amber — alternate accent (e.g. `education` context badge) |
| `--color-accent-secondary-hover` | `#D4953B` | Darker amber — `:hover` |

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

## TODOs

- Check and translate all texts
- Deploy website
- Install Umami or something for simple web analytics

### Career
- need to consider the fact that the career timeline is static, i.e., how can I show always an expanding timeline
  - best solved using a monthly cron job that just rebuilds and deploys the website with the updated timeline