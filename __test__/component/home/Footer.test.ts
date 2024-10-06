// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Home/Footer.vue"

describe("Test Home Footer", () => {
  test("SUCCESS : it can be tested Footer", async () => {
    const component = mount(Index, {
      // props: {
      //   data: [exampleProduct],
      // },
    })

    // expect(component.text()).toContain(exampleProduct.name)
    // expect(component.text()).toContain(exampleProduct.price)
    expect(component.html()).toContain(
      "Copyright © 2024 - All right reserved by Brian use daisyUI Industries Ltd"
    )
    expect(component.text()).toContain(
      "Copyright © 2024 - All right reserved by Brian use daisyUI Industries Ltd"
    )
  })
})
