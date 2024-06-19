import { prisma } from "~/server/config/prisma"
import type { Market } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductTestDB } from "./ProductTestDB"

export class ProductStatic extends ProductTestDB {
  async counts(id: number) {
    return prisma.product.count({
      where: { id },
    })
  }

  async statics(
    id_product: number,
    market: Market
  ): Promise<ProductDetail["static"]> {
    return {
      product: await this.counts(id_product),
      follow: await this.findSelf(Number(market.id_follow)),
      since: market?.since || new Date(),
      response: "100%",
    }
  }
}
