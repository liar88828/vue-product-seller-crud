// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Home/BestSeller.vue"

describe("Test Home Best Seller", () => {
  test("SUCCESS : it can be tested Best Seller", async () => {
    const component = mount(Index, {
      // props: {
      //   data: [exampleProduct],
      // },
    })

    // expect(component.text()).toContain(exampleProduct.name)
    // expect(component.text()).toContain(exampleProduct.price)
    // expect(component.html()).toContain("New Products")
  })
})
