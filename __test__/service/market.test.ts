import { afterAll, beforeAll, describe, expect, test } from "vitest"
import { MarketService } from "~/server/services/market.service"
import {
  afterTestUser,
  deleteUserByEmail,
  findUserByEmail,
} from "../utils/user"
import { marketSanitize } from "~/server/sanitize/market.sanitize"
import { userService } from "~/server/services/user/user.service"
import {
  beforeTestMarket,
  deleteMarket,
  marketExample,
  testUser,
} from "../utils/market"

let user: SessionUser | null = null
let marketId: number
const testMarketService = test.extend({
  marketService: new MarketService(marketSanitize),
})
describe("test user service", async () => {
  beforeAll(async () => {
    const found = await findUserByEmail(testUser.email)
    if (found !== null) {
      await beforeTestMarket(found)
      await deleteUserByEmail(testUser.email)
    }
    user = await userService.signUp(testUser)
  })

  afterAll(async () => {
    await deleteMarket({ id: marketId })
    await afterTestUser(user as SessionUser)
  })

  describe("CREATE register", () => {
    testMarketService(
      "SUCCESS : can test create user service",
      async ({ marketService }) => {
        marketExample.id_user = user?.id ?? ""
        const result = await marketService.register(
          marketExample,
          user as SessionUser
        )
        marketId = result.id
        expect(result).toBeDefined()
        expect(result.name).toBe(marketExample.name)
        expect(result.name).not.toBe("not name")
        expect(result.name).not.toBe("not name")
      }
    )
  })
})
