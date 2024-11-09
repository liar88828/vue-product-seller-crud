// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/sign-up.vue"

describe("Test Auth Sign Up", () => {
  test("Success : it can be tested to see Sign Up", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Sign Up")
    expect(component.text()).toContain("Sign Up")
    expect(component.text()).toContain(
      "Create account and choose favorite menu"
    )
  })
})
