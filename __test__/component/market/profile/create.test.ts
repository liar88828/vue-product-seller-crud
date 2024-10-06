// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Market/ProfileCreate/Basics.vue"
import { exampleMarket } from "~/assets/example/market"

describe("Test Market profile create", () => {
  test("SUCCESS : it can be tested Market profile create", async () => {
    const component = mount(Index)

    expect(component.text()).toContain("Create")
  })
})
