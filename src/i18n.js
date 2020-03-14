import React from "react";
import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import englishLocale from "./locales/en.json";
import spanishLocale from "./locales/es.json";

export function getLanguageSwitcher({ i18n, classNames }) {
  let langDisplay;
  let langSwitch;

  if (i18n.language === "en-US") {
    langDisplay = "español";
    langSwitch = "es-PR";
  } else {
    langDisplay = "english";
    langSwitch = "en-US";
  }
  return (
    <button
      className={classNames}
      onClick={() => i18n.changeLanguage(langSwitch)}
    >
      {langDisplay}
    </button>
  );
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/{{lng}}.json"
    },
    ns: ["translations"],
    defaultNS: "translations",
    fallbackLng: "en",
    resources: {
      en: { translations: englishLocale },
      es: { translations: spanishLocale }
    },
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

i18next.languages = ["en", "es"];

export default i18next;
