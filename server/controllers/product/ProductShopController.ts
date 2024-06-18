import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductServices } from "../../services/product"

export class ProductShopController {
  constructor(protected service: ProductServices) {}

  async all(search: string): Promise<Product[]> {
    return db.product.findTest()
  }

  async detail(id: number): Promise<ProductDetail> {
    return tryCatch(async () => {
      return this.service.shop.oldDetail(id)
    })
  }
}
