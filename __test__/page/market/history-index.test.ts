// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/market/history/index.vue"

describe.skip("Test Auth Market History Index", () => {
  test("Success : it can be tested to see Market History Index", async () => {
    const component = mount(Index, {
      global: {
        provide: {
          plugins: ["nuxt-auth-utils"],
          auth() {
            {
              getToken: () => ""
            }
          },
        },
      },
    })
    console.log(component.html())
    expect(component.html()).toContain("Buyer")
    expect(component.text()).toContain("Buyer")
    expect(component.text()).toContain("Product Name")
  })
})
