import getZod from "~/utils/getZod"
import { tryCatch } from "../lib/tryCatch"
import type {
  ProductCreateUser,
  ProductUpdateUser,
} from "~/types/product/data.db"
import type { DeleteDataDB } from "~/types/product/findId"
import { MarketIdProductId } from "~/types/market/ProfileCompany"

export class ProductController {
  async detail(id: number) {
    return tryCatch(async () => {
      const valid = getZod.idNumber.parse(id)
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

  async createUser(data: ProductCreateUser, id_user: string) {
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      const sanitize = service.sanitize.productCreate(data, id_user, id_type)
      const valid = getZod.productCreateSchema.parse(sanitize)
      const dataDb = await db.product.create(valid)
      return dataDb
    })
  }

  async updateUser(data: ProductUpdateUser, id: number, id_user: string) {
    // console.log(data, id, id_user)
    return tryCatch(async () => {
      const id_type = await db.type.create(data.id_type ?? "unKnown")
      const sanitize = service.sanitize.productUpdate(
        data,
        id,
        id_user,
        id_type
      )
      const valid = getZod.productUpdateSchema.parse(sanitize)
      const dataDb = await db.product.update(valid, valid.id, valid.id_user)
      return dataDb
    })
  }

  async findId(id: number) {
    return tryCatch(async () => {
      const valid = getZod.idNumber.parse(id)
      const dataDb = await db.product.findId(valid)
      return dataDb
    })
  }

  async findMarketIdProductId(id: MarketIdProductId) {
    return tryCatch(async () => {
      const valid = getZod.MarketProductSchema.parse(id)
      const dataDb = await db.product.findMarketProductId(valid)
      return dataDb
    })
  }
  async findMarketProductAll(id: number) {
    return tryCatch(async () => {
      const valid = getZod.idNumber.parse(id)
      const dataDb = await db.product.findMarketProductAll(valid)
      return dataDb
    })
  }

  async deleteId(data: DeleteDataDB) {
    return tryCatch(async () => {
      const valid = getZod.deleteSchema.parse(data)
      const dataDb = await db.product.delete(valid)
      return dataDb
    })
  }
}
