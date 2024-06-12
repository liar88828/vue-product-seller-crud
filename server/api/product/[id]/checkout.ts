import { dataProducts } from "~/assets/example/product/dataProduct"

export default defineEventHandler(async (event) => {
  return { product: dataProducts }
})
