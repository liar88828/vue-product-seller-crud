// @vitest-environment nuxt
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime"
import { it, expect, describe } from "vitest"
import MATH from "./Math.vue"

mockNuxtImport("useState", () => {
  return () => 3
})

describe("AppNumber", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(MATH)
    expect(component.html()).toContain("Number")
  })
  // it("returns the state", async () => {
  //   const component = await mountSuspended(Math)
  //   expect(component.text()).toContain("Number: 3Refresh")
  // })
})
