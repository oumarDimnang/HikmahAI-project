import enTranslations from "../locales/en.json";
import arTranslations from "../locales/ar.json";
import useLanguageStore from "../store/useLanguageStore";

const useTranslation = () => {
  const { language } = useLanguageStore();

  const translations = language === "en" ? enTranslations : arTranslations;

  return (key) => translations[key] || key; // Return the translation or the key itself if not found
};

export default useTranslation;
