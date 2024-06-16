import { expect, test } from "vitest"
import { UserController } from "~/server/controllers/user"
import { UserServices } from "~/server/services/user"

const user = new UserController(new UserServices())

export const testUserController = test.extend({ user })

testUserController(
  "Describe can be tested product controller",
  async ({ user }) => {
    const test = user.test("test")
    expect(test).toBe("test")
  }
)
testUserController.skip(
  "Describe can be tested product controller create new user",
  async ({ user }) => {
    const test = user.create({
      email: "default email",
      name: "default name",
      address: "default address",
      phone: "default phone",
      id_role: "default id_role",
      password: "default password",
      // id_follow: 1,
      // id_like: 2,
      // id_trolly: 1,
    })
    expect(test).toBe("test")
  }
)
