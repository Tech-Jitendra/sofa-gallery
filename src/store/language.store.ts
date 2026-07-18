import i18n from "@/i18n";
import { create } from "zustand";

type Language = "en" | "hi";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",

  setLanguage: (lang) => {
    i18n.changeLanguage(lang);

    set({
      language: lang,
    });
  },
}));