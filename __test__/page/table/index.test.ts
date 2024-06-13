// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/table/index.vue"

describe("test chat", () => {
  test("it can be tested chat", async () => {
    const component = mount(Index, {})

    expect(component.text()).toContain("table")
    expect(component.text()).not.toContain("tables")
  })
})
