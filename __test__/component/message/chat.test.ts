// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { exampleMessageChat } from "~/assets/example/message/chat"
import Index from "~/components/Page/Message/Chat/index.vue"

describe("Test Message Chat", () => {
  test("SUCCESS : it can be tested Message Chat", async () => {
    const component = mount(Index, {
      props: {
        data: exampleMessageChat,
      },
    })

    expect(component.text()).toContain(exampleMessageChat[0].name)
    expect(component.text()).toContain(exampleMessageChat[1].name)
  })
})
