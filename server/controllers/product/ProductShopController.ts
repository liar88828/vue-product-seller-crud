import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductServices } from "../../services/product"
import type { H3Event } from "h3"

export class ProductShopController {
  constructor(protected service: ProductServices) {}

  async _all(search: string): Promise<Product[]> {
    return db.product.findTest()
  }

  async detail(id: number): Promise<ProductDetail> {
    return tryCatch(async () => {
      return this.service.shop.oldDetail(id)
    })
  }
  async all(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.service.market.all(Number(id))
  }
}
