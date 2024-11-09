import { registerEndpoint } from "@nuxt/test-utils/runtime"
import { test } from "vitest"

test("test endpoint", async () => {
  registerEndpoint("/api/", () => ({
    test: "test-field",
  }))
})
