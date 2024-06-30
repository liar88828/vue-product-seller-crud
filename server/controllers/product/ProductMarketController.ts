import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product"
import { ProductCurrentMarketController } from "~/server/controllers/product/ProductCurrentMarketController"
import { H3Event } from "h3"

export class ProductMarketController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service = new ProductServices(),
    public current = new ProductCurrentMarketController(
      event,
      service.current,
      service.sanitizeCreate
    )
  ) {}

  async _id(param: string = "id") {
    const id_product = getRouterParam(this.event, param)
    const { id } = getRouterParams(this.event)

    return tryCatch(async () => {
      return this.service.market.id({
        id_market: Number(id),
        id_product: Number(id_product),
      })
    })
  }

  async all() {
    return tryCatch(async () => {
      const { id } = getRouterParams(this.event)

      return this.service.market.all(Number(id))
    })
  }
}
