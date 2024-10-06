// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { exampleLike } from "~/assets/example/like"
import Index from "~/components/Page/Home/index.vue"

describe.skip("Test Like Index", () => {
  test("SUCCESS : it can be tested Like Index", async () => {
    const component = mount(Index, {
      props: {
        data: [exampleLike],
      },
    })

    expect(component.html()).toContain(exampleLike.Product.description)
  })
})
