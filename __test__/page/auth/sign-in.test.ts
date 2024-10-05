// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/sign-in.vue"

describe("Test Auth Sign In", () => {
  test("Success : it can be tested to see Sign In", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Sign In to your account")
    expect(component.text()).toContain("Sign In to your account")
    expect(component.text()).toContain("Sign In")
  })
})
