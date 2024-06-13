// @vitest-environment nuxt
import Back from "~/components/Page/Auth/Back.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

describe("test back", () => {
  test("it can be tested", async () => {
    const component = mount(Back)

    expect(component.text()).toContain("ShopEase")
  })
})
