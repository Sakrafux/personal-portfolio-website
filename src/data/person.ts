// Single source of truth for identity + social values.
// Consumed by SocialLinks.astro, BaseLayout.astro (meta/JSON-LD), and the OG image generator.
// Localized strings (role, tagline, etc.) live in src/i18n/ui.ts; this file only holds the
// locale-independent identity + social values, plus the per-locale CV paths picked by the consumer.

import type { Locale } from "@/i18n/ui";

export const person = {
  name: "Andreas Hell",
  email: "andhell03+portfolio@gmail.com",
  github: "https://github.com/Sakrafux",
  linkedin: "https://www.linkedin.com/in/andreas-hell-681939244",
  cvEn: "/documents/CV_english.pdf",
  cvDe: "/documents/CV_deutsch.pdf",
  cvDownloadName: "CV_Andreas_Hell.pdf",
} as const;

export const cvPath: Record<Locale, string> = {
  en: person.cvEn,
  de: person.cvDe,
};