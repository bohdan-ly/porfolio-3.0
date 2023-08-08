import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from 'shared/assets/locale/en';
import ua from 'shared/assets/locale/uk-UA';

const defaultFallback = 'en';
const defaultTranslationNamespace = 'translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: defaultTranslationNamespace,
    fallbackLng: defaultFallback,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en,
      },
      'uk-UA': {
        translation: ua,
      },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
