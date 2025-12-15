// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  devServer: {
    port: 3006
  },
  ssr: false, // Enable static site generation for GitHub Pages
  app: {
    baseURL: process.env.BASE_URL || '/', // Set BASE_URL env var if repo is not at root
    buildAssetsDir: 'assets',
  },
  modules: [
    '@vueuse/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Shace - Space management made effortless',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Whether you\'re a co-working space provider, a corporate office, or a flexible space operator, Shace helps you digitize your space management and improve utilization for both employees and visitors.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', href: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-icon.png' }
      ]
    }
  }
})

