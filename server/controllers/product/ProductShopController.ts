import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductServices } from "../../services/product"
import type { H3Event } from "h3"

export class ProductShopController {
  constructor(protected service: ProductServices) {}

  async _all(event: H3Event): Promise<Product[]> {
    return db.product.findTest()
  }

  async detail(event: H3Event): Promise<ProductDetail> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.service.shop.oldDetail(Number(id))
    })
  }
  async all(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.service.market.all(Number(id))
  }
}
