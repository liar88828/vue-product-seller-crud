// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/assets/main/style.css"],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxtjs/tailwindcss"],

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
})
