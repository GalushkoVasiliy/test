import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';

const getInitialLocale = () => {
  i18n.locale = 'en';
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en,
    },
    lng: getInitialLocale(),
    fallbackLng: i18n.locale,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

export default i18n;
