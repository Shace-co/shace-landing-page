// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  devServer: {
    port: 3006
  },
  ssr: false, // Enable static site generation for GitHub Pages
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
    baseURL: '/shace-landing-page/', // GitHub Pages base URL
    buildAssetsDir: 'assets',
    head: {
      title: 'Shace - Space management made effortless',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Whether you\'re a co-working space provider, a corporate office, or a flexible space operator, Shace helps you digitize your space management and improve utilization for both employees and visitors.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/shace-landing-page/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', href: '/shace-landing-page/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/shace-landing-page/icon.svg' },
        { rel: 'apple-touch-icon', href: '/shace-landing-page/apple-icon.png' }
      ]
    }
  }
})

