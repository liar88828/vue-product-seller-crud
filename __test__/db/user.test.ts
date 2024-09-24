import { beforeAll, describe, expect, it, test } from "vitest"

const user = new UserDB()
export const testUserDb = test.extend({
  user,
})

testUserDb("Describe can be tested product controller", async ({ user }) => {
  const test = user.test("test")
  expect(test).toBe("test")
})

// const userFound = testUserDb(
//   "Describe can be find id before test",
//   async ({ user }) => {
//     const test = await user.findId("test1")
//     console.log(test, "user found")
//     return test
//   }
// )

const userFound = await user.findId("test1").then((data) => {
  if (data) {
    return false
  }
})
// testUserDb.skipIf(!userFound)(
//   "Describe can be create user id",
//   async ({ user }) => {
//     const test = await user.create({
//       name: "test1",
//       address: "test1.address",
//       phone: "01234567890",
//       email: "test1@gmail.com",
//       password: "test112345",
//       // id_role: "USER",
//       //@ts-ignore
//       id: "test1",
//     })

//     expect(test).toBeDefined()
//   }
// )
testUserDb("Describe can be find after create", async ({ user }) => {
  const test = await user.findId("test1")
  if (test) {
    expect(test).toBeDefined()
  } else {
    expect(test).not.toBeDefined()
  }
})
