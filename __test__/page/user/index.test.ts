import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import Index from "~/pages/user/index.vue"

test("it can be tested index", async () => {
  const component = await mount(Index, {
    slots: {
      default: "profile",
    },
    props: {
      data: dataOrders,
    },
  })

  expect(component.text()).toContain("index")
  expect(component.html()).not.toContain("indexs")
})
