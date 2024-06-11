// @vitest-environment nuxt
import { mountSuspended } from "@nuxt/test-utils/runtime"
import { expect, test } from "vitest"
import { dataProducts } from "~/assets/example/product/dataProduct"
import Like from "~/pages/user/like.vue"

test("it can be tested like", async () => {
  const component = await mountSuspended(Like, {
    slots: {
      default: "profile",
    },
    props: {
      data: dataProducts,
    },
  })

  // because index is redirect to home
  //   expect(component.text()).not.toContain("sandal")
  //   expect(component.text()).toContain("Sneakers")
  expect(component.text()).toContain("Sneakers")
  expect(component.text()).toContain("T-Shirt")
  expect(component.text()).toContain("Like")
  expect(component.text()).toContain("Sold")
  expect(component.html()).not.toContain("Likes")
  // Loading comments
  // expect(component.text()).toContain("Loading comments")
})
