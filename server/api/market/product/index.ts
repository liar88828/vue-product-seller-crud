import { dataProductDetails } from "~/assets/example/product/dataProduct"
import { prisma } from "~/server/config/prisma"
import type { ProductItemServer } from "~/types/product/item"

export default defineEventHandler(async (event) => {
  // const product: ProductItemServer[] = await prisma.product.findMany({
  //   take: 100,
  // })
  return dataProductDetails //{ product }
})
