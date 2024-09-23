import { describe, expect, test } from "vitest"

const testUser: UserCreate = {
  address: "jl. jakarta no. 1",
  email: "test@gmail",
  name: "test",
  password: "test",
  phone: "01234567890",
}

const testUserService = test.extend({
  userService,
  userId: "",
})

describe("test user service", () => {
  describe("CREATE", () => {
    testUserService(
      "SUCCESS : can test create user service",
      async ({ userService, userId }) => {
        const test = await userService.create(testUser)
        userId = test.id
        expect(test).toBeDefined()
      }
    )
  })

  describe("DELETE", () => {
    testUserService(
      "SUCCESS : can test delete user service",
      async ({ userService }) => {
        const test = userService.create(testUser)

        expect(test).toBeDefined()
      }
    )
  })
})
