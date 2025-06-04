import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['public/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**']
  },
  nitro: {
    experimental: {
      websocket: true
    }
  }, 
  routeRules: {
    '/': { ssr: false, prerender: true },
    '/cabinet': { ssr: true },
    '/shop': { ssr: true }
  }
})