// @vitest-environment nuxt
import { mountSuspended } from "@nuxt/test-utils/runtime"
import { expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import Index from "~/pages/user/index.vue"

test("it can be tested index", async () => {
  const component = await mountSuspended(Index, {
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
