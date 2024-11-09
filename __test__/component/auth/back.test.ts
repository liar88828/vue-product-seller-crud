// @vitest-environment nuxt
import Back from "~/components/Page/Auth/Back.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

describe("Test Auth Back", () => {
  test("SUCCESS : it can be tested Auth Back", async () => {
    const component = mount(Back)

    expect(component.text()).toContain("ShopEase")
  })
})
