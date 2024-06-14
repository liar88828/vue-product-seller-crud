import type { Company } from "@prisma/client"
import type { ProductDetail } from "~/types/product/item"

export class ShopServices {
  async detail(id: number) {
    const product: ProductDetail["detail"] = await db.product.findFull(id)
    const productRelated = await db.product.findTest()
    const userPreview = await db.preview.findUser(id)
    const market = await db.product.findCompany(id)
    const statics = await service.market.statics(id, market as Company)

    return {
      detail: product,
      previews: userPreview,
      related: productRelated,
      market: market,
      static: statics,
      //   static: marketStatic,
    } as ProductDetail
  }
}
// const productCount = await db.product.counts(id)
// const follow = await db.follow.findMarket(market?.id_follow as number)

// const marketStatic: MarketStatic = {
//   product: productCount,
//   follow: follow,
//   since: market?.since || new Date(),
//   response: "100%",
// }
