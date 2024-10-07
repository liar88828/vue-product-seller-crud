// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/components/Page/Message/List/index.vue"
import { exampleMessageList } from "~/assets/example/message/list"

describe("Test Message List", () => {
  test("SUCCESS : it can be tested Message List", async () => {
    const component = mount(Index, {
      props: {
        data: [exampleMessageList],
      },
    })

    expect(component.text()).toContain(exampleMessageList.name)
    // expect(component.text()).toContain(exampleMessageList[1].name)
  })
})
