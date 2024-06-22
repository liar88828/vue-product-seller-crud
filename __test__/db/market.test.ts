import { assert, expect, test } from "vitest"

import { MarketDB } from "~/server/db/user/market"

const market = new MarketDB()
export const testMarketDb = test.extend({
  market,
})

testMarketDb("market can be tested market controller", async ({ market }) => {
  const test = market.test("test")
  expect(test).toBe("test")
})

const findMarket = await market.testId(0).then((data) => {
  console.log(data, "test id market")
  // if found dont return true
  if (!data) {
    return false
  }
  return true
})
// const findAllMarket = await market.testAll().then((data) => {
//   console.log(data, "test id market Many")
//   if (data) {
//     return false
//   }
// })
console.log(findMarket, `this find is ${findMarket}`)
testMarketDb.skipIf(findMarket)("market can be create ", async ({ market }) => {
  console.log("will execute")

  const test = await market.create({
    name: "test1",
    address: "test1.address",
    description: "test1.description",
    history: "test1.history",
    industry: "test1.industry",
    mission: "test1.mission",
    since: new Date(),
    vision: "test1.vision",
    //@ts-expect-error
    id: 0,
  })

  expect(test).toBeDefined()
})

testMarketDb.skipIf(findMarket)("market can be find", async ({ market }) => {
  const test = await market.testId(0)
  console.log(test)
  if (test) {
    expect(test).toBeDefined()
    assert.isObject(test)
    assert.include(test, {
      name: "test1",
    })
  } else {
    expect(test).toBeUndefined()
  }
})

testMarketDb.skipIf(findMarket)("market can be update ", async ({ market }) => {
  const test = await market.update(0, {
    name: "test1 update",
    address: "test1.address",
    description: "test1.description",
    history: "test1.history",
    industry: "test1.industry",
    mission: "test1.mission",
    since: new Date(),
    vision: "test1.vision",
  })

  expect(test).toBeDefined()
  assert.include(test, {
    name: "test1 update",
  })
})

testMarketDb.skipIf(findMarket)(
  "market can be find after update",
  async ({ market }) => {
    const test = await market.testId(0)
    console.log(test)
    if (test) {
      expect(test).toBeDefined()
      assert.isObject(test)
      assert.include(test, {
        name: "test1 update",
      })
    } else {
      expect(test).toBeUndefined()
    }
  }
)

testMarketDb.skipIf(findMarket)("market can be delete ", async ({ market }) => {
  const test = await market.delete(0)

  console.log(test.name, " is found")
  expect(test).toBeDefined()

  assert.include(test, {
    name: "test1 update",
  })
})

testMarketDb.skipIf(findMarket)(
  "market can be find after Delete",
  async ({ market }) => {
    const test = await market.testId(0)
    console.log(test, " is null")
    expect(test).toBeNull()
  }
)
