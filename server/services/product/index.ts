import type { Product } from "@prisma/client"
import { ProductCurrentMarketServices } from "./ProductMarketServices"
import { ProductMarketServices } from "./ProductMarketServices.1"
import { ProductSanitized } from "./ProductSanitized"
import { ShopServices } from "./shop"
import { prisma } from "~/server/config/prisma"

export class ProductServices extends ProductSanitized {
  market = new ProductMarketServices()
  shop = new ShopServices()
  current = new ProductCurrentMarketServices()

  async id(id: number): Promise<Product> {
    const data = await prisma.product.findUnique({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }

  async detail(id: number) {
    id = zods.id.number.parse(id)
    return db.product.findFull(Number(id))
  }
}
