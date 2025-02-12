import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "en", // Default language is English
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "ar" : "en",
    })),
}));

export default useLanguageStore;
