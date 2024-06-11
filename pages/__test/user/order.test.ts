// @vitest-environment nuxt
import { mountSuspended } from "@nuxt/test-utils/runtime"
import { expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import Order from "~/pages/user/order.vue"

test("it can be tested order", async () => {
  const component = await mountSuspended(Order, {
    slots: {
      default: "profile",
    },
    props: {
      data: dataOrders,
    },
  })

  expect(component.text()).toContain("Waiting")
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
