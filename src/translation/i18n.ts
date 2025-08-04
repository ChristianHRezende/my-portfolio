import "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

const resources = {
  en: {
    translation: { ...en },
  },
  pt: {
    translation: { ...pt },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "pt"],
    fallbackLng: "en",
    detection: {
      // Order of detection methods
      order: ["navigator", "localStorage", "cookie"],

      // Cache user language
      caches: ["localStorage", "cookie"],

      // Optional conversion function to modify detected language
      convertDetectedLanguage: (lng: string) => {
        // If browser language starts with 'pt', use Portuguese
        if (lng.startsWith("pt")) {
          return "pt";
        }
        // For all other languages, default to English
        return "en";
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
