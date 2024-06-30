import type { ProductMarketId } from "~/types/product/findId"
import type { Product } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export class ProductMarketServices {
  async all(id_market: number): Promise<Product[]> {
    id_market = zods.id.number.parse(id_market)
    return prisma.product
      .findMany({
        where: { id_market },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Product not found",
          })
        }
        return data
      })
  }

  async id(id: ProductMarketId) {
    id = zods.product.idMarketProduct.parse(id)
    return db.product.market.id(id)
  }
}
