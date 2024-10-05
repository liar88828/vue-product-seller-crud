// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/sign-out.vue"

describe("Test Auth Sign Out", () => {
  test("Success : it can be tested to see Sign Out", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Welcome to ShopEase!")
    expect(component.text()).toContain("Welcome to ShopEase!")
    expect(component.text()).toContain(
      "Your Ultimate Online Shopping Destination"
    )
  })
})
