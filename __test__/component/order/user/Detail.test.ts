// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Order/User/Detail.vue"
import { exampleHistoryDetail } from "~/assets/example/history/detail"

describe("Test Order User Detail", () => {
  test("SUCCESS : it can be tested Order User Detail", async () => {
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
