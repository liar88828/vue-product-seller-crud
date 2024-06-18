import type { ProductDetail } from "~/types/product/item"

export class ShopServices {
  async detail(id: number): Promise<ProductDetail> {
    const product = await db.product.findFull(id)
    const relateds = await db.product.findTest()
    const previews = await db.preview.findUser(id)
    const market = await db.product.findCompany(id)
    const statics = await db.product.statics(id, market)

    return {
      //   static: marketStatic,
      detail: product,
      market,
      previews,
      relateds,
      static: statics,
    }
  }
  async oldDetail(id: number): Promise<ProductDetail> {
    const valid = zods.idNumber.parse(id)
    const market = await db.product.findCompany(valid)
    // console.log(valid, "valid")
    // console.log(market, "market")
    return {
      market,
      detail: await db.product.findFull(valid),
      relateds: await db.product.findTest(),
      static: await db.product.statics(valid, market),
      previews: await db.preview.findUser(valid),
    }
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
