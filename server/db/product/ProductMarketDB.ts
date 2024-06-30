import type { ProductMarketId } from "~/types/product/findId"
import { prisma } from "~/server/config/prisma"

export class ProductMarketDB {
  async id({ id_market, id_product }: ProductMarketId) {
    const data = await prisma.product.findUnique({
      where: { id_market, id: id_product },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }
}
