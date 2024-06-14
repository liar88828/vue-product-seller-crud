/* v8 ignore next 3 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["@/assets/main/style.css"],

  // 4. Integrate with Nitro
  nitro: {
    imports: {
      dirs: [
        "./server/services",
        "./server/controllers",
        "./server/db",
        "./server/lib",
        "./server/config",
        "./utils",
      ],
      // presets: [
      //   {
      //     // from: "date-fns/addDays",
      //     // imports: [{ name: "default", as: "addDays" }],
      //   },
      // ],
    },
  },
  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/test-utils/module"],

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
