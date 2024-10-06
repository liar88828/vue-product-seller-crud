// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Market/ProfileEdit/index.vue"
import { exampleMarket } from "~/assets/example/market"

describe.skip("Test Market profile edit", () => {
  test("SUCCESS : it can be tested Market profile edit", async () => {
    const component = mount(Index, {
      props: {
        data: exampleMarket,
      },
    })

    expect(component.text()).toContain("Industry")
    expect(component.text()).toContain("Industry")
  })
})
