// i18next hands out full tags ("en-US", "es-PR", and whatever the browser
// detector reports), but the site ships exactly two locales. Every "which
// language is this?" decision routes through here so the answer can't drift.
export function resolveLanguage(language) {
  return language?.startsWith("es") ? "es" : "en";
}
