import zods from "~/utils/zods"
import { tryCatch } from "../lib/tryCatch"
import type { ProductUser } from "~/types/product/data.db"
import type { IdValid } from "~/types/product/findId"
import type { MarketIdProductId } from "~/types/market/ProfileCompany"

export class ProductController {
  async detail(id: number) {
    return tryCatch(async () => {
      const valid = zods.idNumber.parse(id)
      console.log(valid, "valid")
      const market = await db.product.findCompany(valid)
      console.log(market, "market")
      return {
        product: await db.product.findFull(valid),
        productRelated: await db.product.findTest(),
        userPreview: await db.preview.findUser(valid),
        market,
        statics: await service.market.statics(valid, market),
      }
    })
  }

  async createUser(data: ProductUser, id_user: string) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = service.sanitize.productCreate(data, id_user, id_type)
      data = await service.product.create(data)
      return data
    })
  }

  async updateUser(data: ProductUser, id: number, id_user: string) {
    // console.log(data, id, id_user)
    return tryCatch(async () => {
      const idValid = zods.idValid.parse({ id, id_user })
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      data = service.sanitize.productUpdate(data, id_type)
      return service.product.update(idValid, data)
    })
  }

  async findId(id: number) {
    return tryCatch(async () => {
      const valid = zods.idNumber.parse(id)
      const dataDb = await db.product.findId(valid)
      return dataDb
    })
  }

  async findMarketIdProductId(id: MarketIdProductId) {
    return tryCatch(async () => {
      const valid = zods.MarketProduct.parse(id)
      const dataDb = await db.product.findMarketProductId(valid)
      return dataDb
    })
  }
  async findMarketProductAll(id: number) {
    return tryCatch(async () => {
      const valid = zods.idNumber.parse(id)
      const dataDb = await db.product.findMarketProductAll(valid)
      return dataDb
    })
  }

  async deleteId(data: IdValid) {
    return tryCatch(async () => {
      const valid = zods.idValid.parse(data)
      const dataDb = await db.product.delete(valid)
      return dataDb
    })
  }
}
