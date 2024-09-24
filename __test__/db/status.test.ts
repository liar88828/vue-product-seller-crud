import type { Status } from "@prisma/client"
import { assert, describe, expect, test } from "vitest"
import { StatusDB } from "~/server/db/user/status"

const status = new StatusDB()
export const testStatusDB = test.extend({
  status,
})

const testAll = testStatusDB.skip(
  "Describe can be test status db all",
  async ({ status }) => {
    const test = await status.checkStatus()
    if (test) {
      expect(test).toBe([
        {
          id: "Pending",
        },
        {
          id: "Accepted",
        },
        {
          id: "Delivered",
        },
        {
          id: "Cancelled",
        },
      ] as Status[])
    } else {
      expect(test).toBe(undefined)
    }
  }
)
console.log(testAll, "test-----------------")

describe.skip("can test status", async () => {
  testStatusDB(
    "Describe can be tested status controller",
    async ({ status }) => {
      const test = status.test("test")
      expect(test).toBe("test")
    }
  )

  testStatusDB.skipIf(testAll)(
    "Describe can be test status db Pending",
    async ({ status }) => {
      const test = await status.createOne("PENDING")
      expect(test.id).toBe("Pending")
    }
  )

  testStatusDB.skipIf(testAll)(
    "Describe can be test status db Accepted",
    async ({ status }) => {
      const test = await status.createOne("ACCEPTED")
      expect(test.id).toBe("Accepted")
    }
  )

  testStatusDB.skipIf(testAll)(
    "Describe can be test status db Delivered",
    async ({ status }) => {
      const test = await status.createOne("DELIVERED")
      expect(test.id).toBe("Delivered")
    }
  )

  testStatusDB.skipIf(testAll)(
    "Describe can be test status db Cancelled",
    async ({ status }) => {
      const test = await status.createOne("CANCELED")
      expect(test.id).toBe("CANCELED")
    }
  )

  testStatusDB("Describe can be test status db all", async ({ status }) => {
    const test = await status.checkStatus()
    console.log(test, "data is---------")
    expect(test).toHaveLength(4)
    expect(test).toHaveProperty("length", 4)
    assert.isArray(test)
    assert.isObject(test[0])
    expect(test[0].id).toBe("Pending")
    expect(test[1].id).toBe("Accepted")
    expect(test[2].id).toBe("Delivered")
    expect(test[3].id).toBe("Cancelled")
    assert.deepInclude(test, {
      id: "Pending",
    })
  })
  const statusInit = [
    {
      id: "Pending",
    },
    {
      id: "Accepted",
    },
    {
      id: "Delivered",
    },
    {
      id: "Cancelled",
    },
  ] as Status[]

  testStatusDB.skip(
    "Describe can delete after init status",
    async ({ status }) => {
      const test = await status.deleteMany()

      expect(test).toBeDefined()
      assert.isObject(test)
      console.log(test, "after test will delete")
    }
  )
})
