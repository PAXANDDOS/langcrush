import i18n, { ReactOptions } from 'i18next'
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector'
import Backend, { HttpBackendOptions } from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

type I18nInit = HttpBackendOptions & DetectorOptions & ReactOptions

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<I18nInit>({
        load: 'languageOnly',
        fallbackLng: 'en',
        supportedLngs: ['uk', 'en'],
        debug: true,
        detection: {
            order: ['localStorage', 'cookie', 'sessionStorage'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        react: {
            useSuspense: true,
        },
    })

export default i18n
