// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Home/Adv.vue"
import { dataAdv } from "~/assets/example/home/dataAdv"

describe("Test Home Adv", () => {
  test("SUCCESS : it can be tested Home Adv", async () => {
    const component = mount(Index, {
      props: {
        data: dataAdv,
      },
    })

    expect(component.text()).toContain(dataAdv.slogans)
    expect(component.text()).toContain(dataAdv.description[0])
    expect(component.html()).toContain(dataAdv.title)
  })
})
