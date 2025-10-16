import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ✅ Import JSON files directly
import enLocale from "./language/en.json";
import frLocale from "./language/fr.json";

const resources = {
  en: { translation: enLocale },
  fr: { translation: frLocale },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
