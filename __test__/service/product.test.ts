import { test } from "vitest"
import { dataProduct2 } from "~/assets/example/product/dataProduct"

export const testProductService = test.extend({
  productService,
})

testProductService("can test product service", async ({ productService }) => {
  const test = productService.create({
    ...dataProduct2,
  })
})
