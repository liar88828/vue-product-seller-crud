// @vitest-environment nuxt
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Index from "~/pages/auth/forgot.vue";

describe("Test Auth Forgot", () => {
	test("Success : it can be tested to see forgot auth", async () => {
		const component = mount(Index)
		expect(component.html()).toContain("Select which account(s) should be reset your password")
		expect(component.text()).toContain("Select which account(s) should be reset your password")
		expect(component.text()).toContain("Send to your Email")
	})
})
