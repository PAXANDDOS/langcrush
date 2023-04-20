import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg', 'favicon.png', 'robots.txt', 'apple-touch-icon.png'],
    registerType: 'autoUpdate',
    manifest: {
        lang: 'uk',
        name: 'Langdice - Англійська граючи',
        short_name: 'Langdice',
        description:
            'Langdice це гра, яка допоможе вам вивчити англійську мову. Ви можете вивчити різноманітні слова та сленг граючи.',
        categories: ['education', 'game', 'language', 'learning', 'quiz', 'vocabulary', 'words'],
        iarc_rating_id: 'Ages 3+',
        theme_color: '#DEF1FF',
        background_color: '#FFFFFF',
        orientation: 'portrait-primary',
        icons: [
            {
                src: 'maskable-128x128.png',
                sizes: '128x128',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: 'maskable-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: 'pwa-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: 'pwa-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: 'maskable-384x384.png',
                sizes: '384x384',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: 'maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    },
    workbox: {
        runtimeCaching: [
            {
                urlPattern: /^https:\/\/fonts\.googleapis\.com/,
                handler: 'CacheFirst' as const,
                options: {
                    cacheName: 'google-fonts-stylesheets',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
    devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(pwaOptions)],
})
