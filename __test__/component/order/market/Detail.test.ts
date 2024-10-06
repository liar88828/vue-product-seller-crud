// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Order/Market/Detail.vue"
import { exampleHistoryDetail } from "~/assets/example/history/detail"

describe("Test Order Market Detail", () => {
  test("SUCCESS : it can be tested Order Market Detail", async () => {
    const component = mount(Index, {
      props: {
        data: exampleHistoryDetail,
      },
    })

    expect(component.text()).toContain("Nama")
    expect(component.text()).toContain("Cancelled")
    expect(component.html()).toContain("Semarang")
    expect(component.text()).toContain("Expire Delivery Date")
  })
})
