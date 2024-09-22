import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product/ProductServices"
import { productCurrentMarketController } from "~/server/controllers/product/ProductCurrentMarketController"
import { H3Event } from "h3"

export class ProductMarketController {
  constructor(
    private serviceProduct: ProductServices,
    public current = productCurrentMarketController
  ) {}

  async _id(event: H3Event, param: string = "id") {
    const id_product = getRouterParam(event, param)
    const { id } = getRouterParams(event)

    return tryCatch(async () => {
      return this.serviceProduct.productMarketId({
        id_market: Number(id),
        id_product: Number(id_product),
      })
    })
  }

  async marketAll(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)

      return this.serviceProduct.marketAll(Number(id))
    })
  }
}

export const productMarketController = new ProductMarketController(
  productService
)
