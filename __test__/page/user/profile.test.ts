import { expect, test } from "vitest"
import { userProfile } from "~/assets/example/user/dataUser"
import Profile from "~/components/Page/Profile/User/index.vue"
import CardBody from "~/components/Card/Body/index.vue"
import Card from "~/components/Card/index.vue"
import { mount } from "@vue/test-utils"

test("it can be tested profile user", async () => {
  const component = await mount(Profile, {
    props: {
      data: userProfile,
    },
  })
  const card = component.findComponent(Card)
  const cardBody = component.findComponent(CardBody)

  expect(card.exists()).toBe(true)
  expect(cardBody.exists()).toBe(true)

  expect(component.exists()).toBe(true)
  expect(component.exists()).toBe(true)
  expect(component.find("p").exists()).toBe(true)
  expect(component.find("button").exists()).toBe(true)
  expect(component.text()).toContain("User Profile")
  expect(component.text()).toContain("This is some information about the user.")
  expect(component.text()).toContain("Full name")
  expect(component.text()).toContain("Phone number")
  expect(component.text()).toContain("Address")

  expect(component.html()).not.toContain("password")
  expect(component.html()).not.toContain("Password")
})
