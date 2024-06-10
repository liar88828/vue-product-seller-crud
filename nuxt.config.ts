// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/assets/main/style.css"],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    configPath: "./tailwind.config.js",
  },

  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3000",
    },
    cryptrKey: process.env.CRYPTR_KEY,
  },
})
