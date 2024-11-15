import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { dataProducts } from "~/assets/example/product/dataProduct"
import Like from "~/pages/user/like/index.vue"

test.skip("it can be tested like", async () => {
  const component = mount(Like, {
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
