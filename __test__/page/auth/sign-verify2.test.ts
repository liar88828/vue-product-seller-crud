// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/verify2.vue"

describe("Test Auth Verify2", () => {
  test("Success : it can be tested to see Verify2", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("ShopEase")
    expect(component.text()).toContain("ShopEase")
    expect(component.text()).toContain("Verify Your Email")
  })
})
