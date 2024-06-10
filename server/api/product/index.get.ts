import { prisma } from "~/server/config/prisma"
import { DataProduct } from "~/types/product/DataProduct"

export default defineEventHandler(async (event) => {
  const product: DataProduct[] = await prisma.product.findMany({ take: 100 })
  return { product }
})
