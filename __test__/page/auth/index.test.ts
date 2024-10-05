// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/index.vue"

describe("Test Auth Index", () => {
  test("Success : it can be tested to see index", async () => {
    const component = mount(Index)
    expect(component.html()).toContain(
      "At ShopEase, we bring you a seamless and enjoyable shopping experience."
    )
    expect(component.text()).toContain(
      "At ShopEase, we bring you a seamless and enjoyable shopping experience."
    )
    expect(component.text()).toContain("Welcome to ShopEase!")
  })
})
