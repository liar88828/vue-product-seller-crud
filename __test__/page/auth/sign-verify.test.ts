// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/verify.vue"

describe("Test Auth Verify", () => {
  test("Success : it can be tested to see Verify", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Verify Your Email")
    expect(component.text()).toContain("Verify Your Email")
    expect(component.text()).toContain(
      "Please enter the code on just sent to your email"
    )
  })
})
