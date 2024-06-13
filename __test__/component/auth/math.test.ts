import { mockNuxtImport } from "@nuxt/test-utils/runtime"
import { it, expect, describe } from "vitest"
import MATH from "./Math.vue"
import { mount } from "@vue/test-utils"

mockNuxtImport("useState", () => {
  return () => 3
})

describe("AppNumber", () => {
  it("can mount the component", () => {
    const component = mount(MATH)
    expect(component.html()).toContain("Number")
  })
  // it("returns the state", async () => {
  //   const component = await mountSuspended(Math)
  //   expect(component.text()).toContain("Number: 3Refresh")
  // })
})
