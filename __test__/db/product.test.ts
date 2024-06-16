import { beforeAll, describe, expect, it, test } from "vitest"
import { ProductController } from "~/server/controllers/product/index"
import { ProductDB } from "~/server/db/product"

const product = new ProductDB()
export const testProductDb = test.extend({
  product,
})

testProductDb(
  "Describe can be tested product controller",
  async ({ product }) => {
    const test = product.test("test")
    expect(test).toBe("test")
  }
)
testProductDb.skip(
  "Describe can be tested product controller",
  async ({ product }) => {
    const test = await product.create({
      brand: "test",
      description: "test",
      image: "test",
      name: "test",
      price: 100,
      stock: 100,
      id_user: "test1",
      id_market: 1,
      id_type: "Buku",
    })

    expect(test).toBe("test")
  }
)
