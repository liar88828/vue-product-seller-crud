// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/home/index.vue"

describe("Test Auth Home", () => {
  test("Success : it can be tested to see home", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Find By Category")
    expect(component.text()).toContain("Find By Category")
    expect(component.text()).toContain(
      "Copyright © 2024 - All right reserved by Brian use daisyUI Industries Ltd"
    )
  })
})
