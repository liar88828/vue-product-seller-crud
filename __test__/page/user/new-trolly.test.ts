import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataProducts } from "~/assets/example/product/dataProduct"
import Trolly from "~/components/Page/Transaction/Trolly/new.vue"

test("it can be tested trolly", async () => {
  const component = mount(Trolly, {
    slots: {
      default: "profile",
    },
    props: {
      data: [
        {
          Box: [
            {
              id: 1,
              id_product: dataProducts[0].id,
              id_transaction: 1,
              id_trolly: 1,
              price: 100,
              Product: dataProducts[0],
              qty: 1,
            },
          ],
          id: 1,
        },
      ],
    },
  })

  expect(component.html()).toContain("Subtotal")
  expect(component.html()).toContain("Sneakers")
  // expect(component.html()).toContain("Continue Shopping")
  // expect(component.html()).not.toContain("Continue Shopping_false")
})
