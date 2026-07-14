import type { Locale } from "./ui";

export const PREFIXED_LOCALES: Locale[] = ["de"];

export function getLocaleFromPath(pathname: string): Locale {
  return PREFIXED_LOCALES.some((p) => pathname === `/${p}` || pathname.startsWith(`/${p}/`))
    ? (pathname.split("/")[1] as Locale)
    : "en";
}

export function stripLocalePrefix(pathname: string): string {
  for (const p of PREFIXED_LOCALES) {
    if (pathname === `/${p}`) return "/";
    if (pathname.startsWith(`/${p}/`)) return pathname.slice(p.length + 1);
  }
  return pathname;
}

export function getLocalizedPath(pathname: string, target: Locale): string {
  const base = stripLocalePrefix(pathname);
  return PREFIXED_LOCALES.includes(target) ? `/${target}${base === "/" ? "" : base}` : base;
}
