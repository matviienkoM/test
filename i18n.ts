import * as Localization from 'expo-localization'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enNs1 from './app/locales/en/ns1.json'
import esNs1 from './app/locales/es/ns1.json'
import frNs1 from './app/locales/fr/ns1.json'

export const languageResources = {
  en: {
    ns1: enNs1
  },
  es: {
    ns1: esNs1
  },
  fr: {
    ns1: frNs1
  }
}

const languageDetector: LanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb: (language: string) => void) => {
    const deviceLanguage = Localization.locale.split('-')[0];
    console.log('Default Language:', deviceLanguage);
    cb(deviceLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

interface LanguageDetector {
  type: 'languageDetector';
  async: boolean;
  detect: (cb: (language: string) => void) => void;
  init: () => void;
  cacheUserLanguage: () => void;
}

i18next.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  fallbackLng: 'en',
  defaultNS: 'ns1',
  resources: languageResources
})

export default i18next