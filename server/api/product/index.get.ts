import { prisma } from "~/server/config/prisma"
import type { ProductItemServer } from "~/types/product/item"

import { dataProductDetails } from "~/assets/example/product/dataProduct"
import type { Product } from "@prisma/client"
export default defineEventHandler(async (event) => {
  const product: Product[] = await prisma.product.findMany({
    take: 100,
  })

  return { product: dataProductDetails }
})
