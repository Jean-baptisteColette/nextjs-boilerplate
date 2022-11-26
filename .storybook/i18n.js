import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18n as i18nConfig } from "../next-i18next.config";

const ns = ["common"];
const supportedLngs = i18nConfig.locales;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: i18nConfig.defaultLocale,
    fallbackLng: i18nConfig.defaultLocale,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
    ns,
    resources: {},
    supportedLngs,
  });

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      require(`../public/locales/${lang}/${n}.json`)
    );
  });
});

export { i18n };
