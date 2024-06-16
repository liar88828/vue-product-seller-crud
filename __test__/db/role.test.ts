import type { Role } from "@prisma/client"
import { assert, beforeAll, describe, expect, it, test } from "vitest"
import { RoleDB } from "~/server/db/user/role"

const role = new RoleDB()
export const testRoleDb = test.extend({
  role,
})

const testAll = testRoleDb.skip(
  "Describe can be test role db all",
  async ({ role }) => {
    const test = await role.checkRole()
    if (test) {
      expect(test).toBe([
        {
          id: "ADMIN",
        },
        {
          id: "USER",
        },
        {
          id: "MARKET",
        },
      ] as Role[])
    } else {
      expect(test).toBe(undefined)
    }
  }
)
console.log(testAll, "test-----------------")

testRoleDb("Describe can be tested role controller", async ({ role }) => {
  const test = role.test("test")
  expect(test).toBe("test")
})

testRoleDb.skipIf(testAll)(
  "Describe can be test role db admin",
  async ({ role }) => {
    const test = await role.createOne("ADMIN")
    expect(test.id).toBe("ADMIN")
  }
)

testRoleDb.skipIf(testAll)(
  "Describe can be test role db user",
  async ({ role }) => {
    const test = await role.createOne("USER")
    expect(test.id).toBe("USER")
  }
)

testRoleDb.skipIf(testAll)(
  "Describe can be test role db market",
  async ({ role }) => {
    const test = await role.createOne("MARKET")
    expect(test.id).toBe("MARKET")
  }
)
testRoleDb("Describe can be test role db all", async ({ role }) => {
  const test = await role.checkRole()
  expect(test).toHaveLength(3)
  expect(test).toHaveProperty("length", 3)
  expect(test).toHaveProperty("length", 3)
  assert.isArray(test)
  assert.isObject(test[0])
  expect(test[0].id).toBe("ADMIN")
  expect(test[1].id).toBe("USER")
  expect(test[2].id).toBe("MARKET")
  assert.deepInclude(test, {
    id: "ADMIN",
  })
})
const roleInit = [
  {
    id: "ADMIN",
  },
  {
    id: "USER",
  },
  {
    id: "MARKET",
  },
] as Role[]
