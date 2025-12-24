const isGH = process.env.NUXT_PUBLIC_DEPLOY_TARGET === 'gh'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  devServer: {
    port: 3006,
    host: '0.0.0.0',
  },

  ssr: false,

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en/en.json' },
      { code: 'ar', iso: 'ar-SA', name: 'العربية', file: 'ar/ar.json', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    compilation: { strictMessage: false }
  },
  

  tailwindcss: {
    configPath: 'tailwind.config.cjs',
  },

  app: {
    baseURL: isGH ? '/shace-landing-page/' : '/',   // ✅ local works
    buildAssetsDir: 'assets',
    head: {
      title: 'Shace - Space management made effortless',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Whether you're a co-working space provider, a corporate office, or a flexible space operator, Shace helps you digitize your space management and improve utilization for both employees and visitors.",
        },
      ],
      link: [
        // ✅ works both local + GH
        { rel: 'icon', type: 'image/x-icon', href: isGH ? '/shace-landing-page/favicon.ico' : '/favicon.ico' }
      ],
    },
  },
})
