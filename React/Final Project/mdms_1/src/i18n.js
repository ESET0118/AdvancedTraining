import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          dashboard: "Dashboard",
          bills: "Bills & Payments",
          meterData: "Meter Data",
          alerts: "Alerts & Notifications",
          profile: "Profile & Settings",
          logs: "Logs",
        },
      },
      fr: {
        translation: {
          dashboard: "Tableau de bord",
          bills: "Factures et paiements",
          meterData: "Données du compteur",
          alerts: "Alertes et notifications",
          profile: "Profil et paramètres",
          logs: "Journaux",
        },
      },
      hi: {
        translation: {
          dashboard: "डैशबोर्ड",
          bills: "बिल और भुगतान",
          meterData: "मीटर डेटा",
          alerts: "अलर्ट और सूचनाएं",
          profile: "प्रोफाइल और सेटिंग्स",
          logs: "लॉग्स",
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
