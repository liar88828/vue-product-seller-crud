import { tryCatch } from "../../lib/tryCatch"
import type { ProductMarketCreate } from "~/types/product/data.db"
import type { IdProduct, IdValid } from "~/types/product/findId"
import { ProductServices } from "../../services/product"

export class ProductMarketController {
  constructor(protected service: ProductServices) {}
  async id(id_market: string, id_product: string) {
    return tryCatch(async () => {
      return this.service.market.id({
        id_market: Number(id_market),
        id_product: Number(id_product),
      })
    })
  }

  async all(id_market: string) {
    return tryCatch(async () => {
      return this.service.market.all(Number(id_market))
    })
  }
  async delete(id: IdValid) {
    return tryCatch(async () => {
      return this.service.delete(id)
    })
  }
  async create(data: ProductMarketCreate, id: IdProduct) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeCreate(data, id, id_type)
      return this.service.create(data)
    })
  }

  async update(data: ProductMarketCreate, id: string, id_user: string) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeUpdate(data, id_type)
      return this.service.update({ id: Number(id), id_user }, data)
    })
  }
}
