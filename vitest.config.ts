/* v8 ignore next 3 */
import { defineVitestConfig } from "@nuxt/test-utils/config"
import { loadEnv } from "vite"
export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt",
    env: loadEnv("", process.cwd(), ""),
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "**/components/Icons/**",
        "**/node_modules/**",
        "**/.nuxt/**",
        "**/.idea/**",
        "**/.output/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/server/config/**",
      ],
    },
    exclude: [
      "**/node_modules/**",
      "**/.nuxt/**",
      "**/.idea/**",
      "**/.output/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/server/config/**",
    ],
  },
})
