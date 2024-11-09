// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { exampleLike } from "~/assets/example/like"
import Index from "~/components/Page/Like/index.vue"

describe("Test Like Index", () => {
  test("SUCCESS : it can be tested Like Index", async () => {
    const component = mount(Index, {
      props: {
        data: [exampleLike],
      },
    })

    expect(component.text()).toContain(exampleLike.Product.name)
    expect(component.text()).toContain(exampleLike.Product.price)
  })
})
