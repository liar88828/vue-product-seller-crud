// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/market/[id]/index.vue"

describe.skip("Test Auth Market Profile id", () => {
  test("Success : it can be tested to see Market Profile Id", async () => {
    const component = mount(Index)
    expect(component.html()).toContain("Address")
    expect(component.text()).toContain("Address")
    expect(component.text()).toContain("Edit")
  })
})
