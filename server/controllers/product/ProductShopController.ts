import type { Product } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"
import { ProductServices } from "../../services/product/ProductServices"
import type { H3Event } from "h3"

export class ProductShopController {
  constructor(private serviceProduct: ProductServices) {}

  async _all(): Promise<Product[]> {
    return db.product.findTest()
  }

  async detail(event: H3Event): Promise<ProductDetail> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceProduct.shop.oldDetail(Number(id))
    })
  }
  async all(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.serviceProduct.marketAll(Number(id))
  }
}

export const productShopController = new ProductShopController(productService)
