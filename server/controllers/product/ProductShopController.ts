import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductServices } from "../../services/product"
import type { H3Event } from "h3"

export class ProductShopController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: ProductServices
  ) {}

  async _all(): Promise<Product[]> {
    return db.product.findTest()
  }

  async detail(): Promise<ProductDetail> {
    return tryCatch(async () => {
      const { id } = getRouterParams(this.event)
      return this.service.shop.oldDetail(Number(id))
    })
  }
  async all(): Promise<Product[]> {
    const { id } = getRouterParams(this.event)
    return this.service.market.all(Number(id))
  }
}
