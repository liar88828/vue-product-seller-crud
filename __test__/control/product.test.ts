import { beforeAll, describe, expect, it, test } from "vitest"
import { ProductController } from "~/server/controllers/product/index"
import { ProductServices } from "~/server/services/product/index"

const product = new ProductController(new ProductServices())
export const testProductController = test.extend({
  product,
})

testProductController(
  "Describe can be tested product controller",
  async ({ product }) => {
    const test = product.test("test")
    expect(test).toBe("test")
  }
)

// testProductController(
//   "Describe can be tested product controller",
//   async ({ product }) => {
//     // const test = product.market.id()
//     // expect(test).toBe("test")
//   }
// )
