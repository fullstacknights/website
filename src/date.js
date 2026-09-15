import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";

import { resolveLanguage } from "./language";

function isSpanish(language) {
  return resolveLanguage(language) === "es";
}

export function formatFullDate(date, language) {
  return format(date, "PPPP", { locale: isSpanish(language) ? es : enUS });
}

export function formatTime(date) {
  return format(date, "h:mmaaa");
}

export function formatShortDay(date, language) {
  const spanish = isSpanish(language);

  return format(date, spanish ? "d MMM" : "MMM d", {
    locale: spanish ? es : enUS
  });
}
