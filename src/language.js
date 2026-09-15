export function resolveLanguage(language) {
  return language?.startsWith("es") ? "es" : "en";
}
