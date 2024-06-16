import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import History from "~/components/Page/Transaction/Order/index.vue"

test.skip("it can be tested history", async () => {
  const component = mount(History, {
    slots: {
      default: "profile",
    },
    props: {
      // products: dataOrders,
      data: dataOrders,
    },
  })

  expect(component.text()).toContain("Accepted")
  expect(component.text()).toContain("Pending")
  expect(component.text()).toContain("Cancelled")
  expect(component.text()).toContain("Payment")
  expect(component.text()).toContain("Market")
  expect(component.text()).toContain("Name")
  expect(component.text()).toContain("Qty")
  expect(component.text()).toContain("Total")
  expect(component.html()).not.toContain("Continue Shopping_false")
  expect(component.text()).not.toContain("i dont know")
})
