import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";

import { resolveLanguage } from "./language";

function isSpanish(language) {
  return resolveLanguage(language) === "es";
}

// "Thursday, September 10th, 2026" / "jueves, 10 de septiembre de 2026"
export function formatFullDate(date, language) {
  return format(date, "PPPP", { locale: isSpanish(language) ? es : enUS });
}

// "6:00pm" in both languages
export function formatTime(date) {
  return format(date, "h:mmaaa");
}

// "Sep 10" / "10 sep"
export function formatShortDay(date, language) {
  const spanish = isSpanish(language);

  return format(date, spanish ? "d MMM" : "MMM d", {
    locale: spanish ? es : enUS
  });
}
