/* v8 ignore next 3 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    // esbuild: {
    //   tsconfigRaw: {
    //     compilerOptions: {
    //       useDefineForClassFields: false,
    //     },
    //   },
    // },
  },
  // devtools: { enabled: true },
  css: ["@/assets/main/style.css"],

  // 4. Integrate with Nitro
  imports: {
    dirs: ["composables/**", "utils/**", "types/**"],
  },
  nitro: {
    imports: {
      dirs: [
        "./server/services/**",
        "./server/controllers/**",
        "./server/db/**",
        "./server/lib/**",
        "./server/utils/**",
        // "./server/config",
        "utils/**",
        "types/**",
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

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "nuxt-auth-utils",
  ],

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
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    },

    public: {
      apiBase: process.env.API_BASE ?? "http://localhost:3000",
      test: process.env.TEST ?? "false",
    },
    access_token: process.env.ACCESS_TOKEN,
    refresh_token: process.env.REFRESH_TOKEN,
    cryptrKey: process.env.CRYPTR_KEY,
  },
})
