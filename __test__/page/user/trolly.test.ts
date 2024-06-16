import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataProducts } from "~/assets/example/product/dataProduct"
import Trolly from "~/components/Page/Transaction/Trolly/index.vue"

test("it can be tested trolly", async () => {
  const component = mount(Trolly, {
    slots: {
      default: "profile",
    },
    props: {
      data: dataProducts,
    },
  })

  expect(component.html()).toContain("Subtotal")
  expect(component.html()).toContain("Sneakers")
  // expect(component.html()).toContain("Continue Shopping")
  // expect(component.html()).not.toContain("Continue Shopping_false")
})
