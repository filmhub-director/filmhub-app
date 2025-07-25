import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from '../locales/ru/translation.json';
import translationEN from '../locales/en/translation.json';
import translationUZ from '../locales/uz/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN },
    uz: { translation: translationUZ },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
