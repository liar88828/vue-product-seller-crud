import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product"
import { ProductMarketController } from "./ProductMarketController"
import { ProductUserController } from "./ProductUserController"
import type { H3Event } from "h3"

export class ProductController {
  constructor(
    event: H3Event,
    protected service: ProductServices,
    public user = new ProductUserController(service, event),
    public market = new ProductMarketController(event)
  ) {}

  test(text: string): string {
    return text
  }

  async id(id: number) {
    return tryCatch(async () => {
      return this.service.id(id)
    })
  }

  async detail(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.service.detail(Number(id))
    })
  }
}
