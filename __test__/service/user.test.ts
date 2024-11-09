import { afterAll, beforeAll, describe, expect, test } from "vitest"
import { UserService } from "~/server/services/user/user.service"
import type { SignUpProps } from "~/types/auth/user"
import { deleteUserByEmail, findUserByEmail } from "../utils/user"

const testUser: SignUpProps = {
  // address: "jl. jakarta no. 1",
  name: "testUser",
  email: "testUser@gmail.com",
  // phone: "01234567890",
  password: "12345678",
  confPass: "12345678",
}
let userId = ""

const testUserService = test.extend({
  userService: new UserService(userSanitize),
})

describe("test user service", async () => {
  beforeAll(async () => {
    const found = await findUserByEmail(testUser.email)
    if (found) {
      await deleteUserByEmail(testUser.email)
    }
  })

  afterAll(async () => {
    const found = await findUserByEmail(testUser.email)
    if (found) {
      await deleteUserByEmail(testUser.email)
    }
  })

  describe("CREATE register", () => {
    testUserService(
      "SUCCESS : can test create user service",
      async ({ userService }) => {
        const result = await userService.signUp(testUser)
        userId = result.id

        expect(result).toBeDefined()
        expect(result.email).toBe(testUser.email)
      }
    )
  })

  describe("DELETE", () => {
    testUserService(
      "SUCCESS : can test delete user service",
      async ({ userService }) => {
        const result = await userService.delete(userId)

        expect(result).toBeDefined()
        expect(result.password).not.toBe("i dont know")
        expect(result.password).toBe("")
        expect(result.email).toBe(testUser.email)
      }
    )
  })
})
