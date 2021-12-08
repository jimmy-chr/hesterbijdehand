import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// translation json files
import translationEN from "./translations/en.json";
import translationNL from "./translations/nl.json";

const resources = {
  nl: {
    translation: translationNL,
  },
  en: {
    translation: translationEN,
  },
};

const detection = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: detection,
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
