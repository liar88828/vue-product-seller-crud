import { expect, test } from "vitest"
import { UserController } from "~/server/controllers/user"
import { UserServices } from "~/server/services/user"

const user = new UserController()

export const testUserController = test.extend({ user })

testUserController(
  "Describe can be tested product controller",
  async ({ user }) => {
    const test = user.test("test")
    expect(test).toBe("test")
  }
)
