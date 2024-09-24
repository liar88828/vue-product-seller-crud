// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/product/index.vue"

describe.skip("test index product", () => {
  test("it can be tested index product", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("product")
    expect(component.text()).toContain("product")
    expect(component.text()).not.toContain("product_2")
    expect(component.text()).not.toContain("false")
  })
})
