// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Home/Carousel.vue"

describe("Test Home Carousel", () => {
  test("SUCCESS : it can be tested Carousel", async () => {
    const component = mount(Index, {
      // props: {
      //   data: [exampleProduct],
      // },
    })

    // expect(component.text()).toContain(exampleProduct.name)
    // expect(component.text()).toContain(exampleProduct.price)
    expect(component.html()).toContain("❯")
    expect(component.html()).toContain("❮")
  })
})
