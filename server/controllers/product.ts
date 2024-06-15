import zods from "~/utils/zods"
import { tryCatch } from "../lib/tryCatch"
import type { ProductUser } from "~/types/product/data.db"
import type { IdValid } from "~/types/product/findId"
import type {
  IdProduct,
  MarketIdProductId,
} from "~/types/market/ProfileCompany"
import { ProductServices } from "../services/product"

export class ProductController {
  constructor(private service: ProductServices) {}

  async detail(id: number) {
    return tryCatch(async () => {
      const valid = zods.idNumber.parse(id)
      const market = await db.product.findCompany(valid)
      // console.log(valid, "valid")
      // console.log(market, "market")
      return {
        product: await db.product.findFull(valid),
        productRelated: await db.product.findTest(),
        userPreview: await db.preview.findUser(valid),
        market,
        statics: await this.service.statics(valid, market),
      }
    })
  }

  async createUser(data: ProductUser, id: IdProduct) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeCreate(data, id, id_type)
      return this.service.create(data)
    })
  }

  async updateUser(data: ProductUser, id: number, id_user: string) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = this.service.sanitizeUpdate(data, id_type)
      return this.service.update({ id, id_user }, data)
    })
  }

  async findId(id: number) {
    return tryCatch(async () => {
      return this.service.findId(id)
    })
  }

  async findDetail(id: number) {
    return tryCatch(async () => {
      return this.service.detail(id)
    })
  }

  async findMarketIdProductId(id: MarketIdProductId) {
    return tryCatch(async () => {
      return this.service.MarketIdProductId(id)
    })
  }
  async findMarketProductAll(id_company: number) {
    return tryCatch(async () => {
      return this.service.MarketProductAll(id_company)
    })
  }

  async deleteId(id: IdValid) {
    return tryCatch(async () => {
      return this.service.delete(id)
    })
  }
}
