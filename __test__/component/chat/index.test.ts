// @vitest-environment nuxt
import Back from "~/components/Page/Message/Chat/index.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { dataMessages } from "~/assets/example/message/dataMessage"

describe("test chat", () => {
  test("it can be tested chat", async () => {
    const component = mount(Back, {
      props: {
        data: dataMessages,
      },
    })

    expect(component.text()).toContain("John")
    expect(component.text()).toContain("Alex")
    expect(component.text()).not.toContain("Sarah")
  })
})
