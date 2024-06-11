import { registerEndpoint } from "@nuxt/test-utils/runtime"

registerEndpoint("/test/", {
  method: "POST",
  handler: () => ({ test: "test-field" }),
})
