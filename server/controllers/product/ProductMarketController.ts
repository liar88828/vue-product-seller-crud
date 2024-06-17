import { tryCatch } from "../../lib/tryCatch"
import type { ProductUser } from "~/types/product/data.db"
import type { IdProduct, IdValid } from "~/types/product/findId"
import { ProductServices } from "../../services/product"
import { ProductUserController } from "./ProductUserController"

export class ProductMarketController extends ProductUserController {
  constructor(public service: ProductServices) {
    super(service)
  }
  protected async marketId(id_market: string, id_product: string) {
    return tryCatch(async () => {
      return this.service.market.id({
        id_market: Number(id_market),
        id_product: Number(id_product),
      })
    })
  }
  protected async marketAll(id_market: string) {
    return tryCatch(async () => {
      return this.service.market.all(Number(id_market))
    })
  }
  protected async marketDelete(id: IdValid) {
    return tryCatch(async () => {
      return this.service.delete(id)
    })
  }
  protected async marketCreate(data: ProductUser, id: IdProduct) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeCreate(data, id, id_type)
      return this.service.create(data)
    })
  }

  protected async marketUpdate(data: ProductUser, id: string, id_user: string) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeUpdate(data, id_type)
      return this.service.update({ id: Number(id), id_user }, data)
    })
  }
}
