import "intl-pluralrules";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as Localization from "expo-localization";

import en from "./locales/en";
import hi from "./locales/hi";


const resources = {
  en: {
    translation: en,
  },

  hi: {
    translation: hi,
  },
};


i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",

    resources,

    lng:
      Localization.getLocales()[0]?.languageCode ?? "en",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });


export default i18n;