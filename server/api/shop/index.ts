import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  const products = await db.product.findTest()
  return { product: dataProducts }
})
