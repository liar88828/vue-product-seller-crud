// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/History/Market/index.vue"
import { exampleHistoryIndex } from "~/assets/example/history"

describe("Test History Market Index", () => {
  test("SUCCESS : it can be tested History Market Index", async () => {
    const component = mount(Index, {
      props: {
        data: exampleHistoryIndex,
      },
    })

    expect(component.text()).toContain("Buyer")
    expect(component.text()).toContain("Product Name")
    expect(component.html()).toContain(exampleHistoryIndex[0].status)
    expect(component.text()).toContain(
      exampleHistoryIndex[0].Trolley[0].Product.name
    )
  })
})
