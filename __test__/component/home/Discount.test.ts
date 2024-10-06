// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Home/Discount.vue"

describe("Test Home Discount", () => {
  test("SUCCESS : it can be tested Discount", async () => {
    const component = mount(Index, {
      // props: {
      //   data: [exampleProduct],
      // },
    })

    // expect(component.text()).toContain(exampleProduct.name)
    // expect(component.text()).toContain(exampleProduct.price)
    expect(component.text()).toContain("Healthy Choices, Delicious")
    expect(component.text()).toContain(
      "If a dog chews shoes whose shoes does he choose?"
    )
  })
})
