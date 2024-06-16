import zods from "~/utils/zods"
import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product"
import { ProductMarketController } from "./ProductMarketController"

export class ProductController extends ProductMarketController {
  constructor(public service: ProductServices) {
    super(service)
  }
  test(text: string): string {
    return text
  }
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
        statics: await db.product.statics(valid, market),
      }
    })
  }

  async id(id: number) {
    return tryCatch(async () => {
      return this.service.findId(id)
    })
  }
  async findDetail(id: number) {
    return tryCatch(async () => {
      return this.service.detail(id)
    })
  }

  user = {
    // id: this.id,
    // findDetail: this.findDetail,
    // detail: this.detail,
    comment: super.comment,
    rating: super.rating,
  }

  market = {
    id: super.marketId,
    update: super.marketUpdate,
    all: super.marketAll,
    delete: super.marketDelete,
    create: super.marketCreate,
  }
}
