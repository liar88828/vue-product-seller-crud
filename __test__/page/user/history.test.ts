import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import History from "~/pages/user/history.vue"

test("it can be tested history", async () => {
  const component = await mount(History, {
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
