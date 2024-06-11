/* v8 ignore next 3 */
import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["./components/Icons/**"],
    },
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/server/config/**",
    ],
  },
})
