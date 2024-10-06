// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Trolley/index.vue"
import { exampleTrolley } from "~/assets/example/trolley"

describe("Test Trolley Index", () => {
  test("SUCCESS : it can be tested Trolley Index", async () => {
    const component = mount(Index, {
      props: {
        data: [exampleTrolley],
      },
    })

    expect(component.text()).toContain(exampleTrolley.qty)
    expect(component.text()).toContain(exampleTrolley.Product.name)

    expect(component.text()).toContain("Sold")
    expect(component.html()).toContain("Total")
  })
})
