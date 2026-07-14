export type Locale = "en" | "de";
export const DEFAULT_LOCALE: Locale = "en";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export function pick<T extends LocalizedText | LocalizedList>(
  locale: Locale | undefined,
  value: T,
): T[Locale] {
  return value[(locale ?? DEFAULT_LOCALE) as Locale];
}

const dict = {
  en: {
    "nav.home": "Home",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "meta.title": "Andreas Hell | Full-Stack Developer",
    "meta.description":
      "Portfolio of Andreas Hell, Full-Stack Developer. End-to-End Engineering, built to be relied on.",
    "date.present": "Present",
    "context.work": "Work",
    "context.education": "Education",
    "context.private": "Private",
    "timeline.label": "Career timeline view",
    "timeline.work": "Work",
    "timeline.education": "Education",
    "project.readMore": "Read more",
    "project.showLess": "Show less",
    "project.moreSkills": "+{n} more",
    "project.linkToProject": "Link to {title}",
    "project.repository": "Repository",
    "project.demo": "Demo",
    "project.documentation": "Documentation",
    "skill.levelLegend": "Skill level legend",
    "skill.notUsed": "not used (blank cell)",
    "skill.caption":
      "Technologies grouped by category, showing usage level across work, education, and personal contexts.",
    "skill.colSkill": "Skill",
    "home.cv.download": "Download the CV as a PDF",
    "home.cv.english": "en",
    "home.cv.german": "de",
    "home.hero.title": "Full-Stack Developer",
    "home.hero.tagline": "End-to-End Engineering, built to be relied on.",
    "home.career.subtitle": "My professional journey through work and education.",
    "home.career.seeMore": "For a more thorough exploration, refer to the dedicated",
    "home.career.seeMorePage": " page.",
    "home.projects.subtitle": "A selection of projects from work, education, and personal work.",
    "page.projects.subtitle": "A collection of projects from work, education, and personal work.",
    "home.skills.subtitle":
      "Where and how much I have used each technology across work, education, and personal projects.",
  },
  de: {
    "nav.home": "Start",
    "nav.career": "Werdegang",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "meta.title": "Andreas Hell | Full-Stack Entwickler",
    "meta.description":
      "Portfolio von Andreas Hell, Full-Stack Entwickler. Engineering-Qualität, auf die man sich verlassen kann.",
    "date.present": "heute",
    "context.work": "Arbeit",
    "context.education": "Ausbildung",
    "context.private": "Privat",
    "timeline.label": "Ansicht Werdegang-Zeitleiste",
    "timeline.work": "Arbeit",
    "timeline.education": "Ausbildung",
    "project.readMore": "Mehr anzeigen",
    "project.showLess": "Weniger anzeigen",
    "project.moreSkills": "+{n} weitere",
    "project.linkToProject": "Link zu {title}",
    "project.repository": "Repository",
    "project.demo": "Demo",
    "project.documentation": "Dokumentation",
    "skill.levelLegend": "Legende der Fähigkeitsstufen",
    "skill.notUsed": "nicht verwendet (leere Zelle)",
    "skill.caption":
      "Technologien nach Kategorie gruppiert, mit Nutzungshäufigkeit in Arbeit, Ausbildung und privaten Projekten.",
    "skill.colSkill": "Fähigkeit",
    "home.cv.download": "Lebenslauf als PDF herunterladen",
    "home.cv.english": "en",
    "home.cv.german": "de",
    "home.hero.title": "Full-Stack Entwickler",
    "home.hero.tagline": "Engineering-Qualität, auf die man sich verlassen kann.",
    "home.career.subtitle": "Mein beruflicher Werdegang durch Arbeit und Ausbildung.",
    "home.career.seeMore": "Für eine ausführlichere Übersicht siehe die eigene",
    "home.career.seeMorePage": "-Seite.",
    "home.projects.subtitle":
      "Eine Auswahl an Projekten aus Arbeit, Ausbildung und persönlichen Arbeiten.",
    "page.projects.subtitle":
      "Eine Sammlung von Projekten aus Arbeit, Ausbildung und persönlichen Arbeiten.",
    "home.skills.subtitle":
      "Wo und wie oft ich jede Technologie in Arbeit, Ausbildung und privaten Projekten eingesetzt habe.",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type TKey = keyof (typeof dict)[typeof DEFAULT_LOCALE];

export function t(locale: Locale | undefined, key: TKey): string {
  const l = (locale ?? DEFAULT_LOCALE) as Locale;
  return dict[l][key] ?? dict[DEFAULT_LOCALE][key] ?? key;
}

export function tTemplate(
  locale: Locale | undefined,
  key: TKey,
  vars: Record<string, string | number>,
): string {
  return t(locale, key).replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
