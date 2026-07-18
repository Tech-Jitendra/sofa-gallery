import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as Localization from "expo-localization";

import en from "./locales/en";
import hi from "./locales/hi";

console.log("Before init");

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        resources: {
            en: {
                translation: en,
            },
            hi: {
                translation: hi,
            },
        },

        lng: Localization.getLocales()[0]?.languageCode ?? "en",

        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });
console.log("After init");
console.log(i18n.isInitialized);

export default i18n;