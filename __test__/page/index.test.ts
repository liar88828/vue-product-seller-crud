// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/index.vue"

describe("test index page", () => {
  test("it can be tested index page", async () => {
    const component = mount(Index)

    // because index is redirect to home
    expect(component.text()).not.toContain("index")
    // Loading comments
    // expect(component.text()).toContain("Loading comments")
  })
})
