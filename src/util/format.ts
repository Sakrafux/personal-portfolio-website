import { t, type Locale } from "@/i18n/ui";

const MONTHS: Record<Locale, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  de: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
};

// Note: Austrian/German HTML lang is "de" but day-to-day spelling is "Jänner".
// Stick to "Jän" to match widespread Austrian usage; switch to "Jan" if you prefer DACH-norm.
export function formatDate(locale: Locale, dateStr: string): string {
  const [year, month] = dateStr.split("-").map(Number);
  return `${MONTHS[locale][month - 1]} ${year}`;
}

export function formatDateRange(locale: Locale, start: string, end: string | null): string {
  const present = t(locale, "date.present");
  if (start === end) return formatDate(locale, start);
  const endLabel = end ? formatDate(locale, end) : present;
  return `${formatDate(locale, start)} — ${endLabel}`;
}
