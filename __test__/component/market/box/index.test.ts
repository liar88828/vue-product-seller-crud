// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Market/Box/index.vue"
import { exampleMarket } from "~/assets/example/market"

describe("Test Market profile index", () => {
  test("SUCCESS : it can be tested Market profile index", async () => {
    const component = mount(Index, {
      props: {
        data: exampleMarket,
      },
    })

    expect(component.text()).toContain(exampleMarket.name)
  })
})
