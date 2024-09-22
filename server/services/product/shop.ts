import type { ProductDetail } from "~/types/product/item"

export class ShopServices {
  async detail(id: number): Promise<ProductDetail> {
    const previews = await db.preview.findUser(id)
    const product = await db.product.findFull(id)
    // const market = await db.product.findCompany(id)
    // const relateds = await db.product.findTest()

    return {
      detail: product,
      previews,
      //   static: marketStatic,
      // market,
      // relateds,
      // static: await statics(id, market),
    }
  }
  async oldDetail(id: number): Promise<ProductDetail> {
    const valid = zods.id.number.parse(id)
    const market = await db.product.findCompany(valid)
    // console.log(valid, "valid")
    // console.log(market, "market")
    return {
      // market,
      // static: await statics(valid, market),

      // relateds: await db.product.findTest(),
      detail: await db.product.findFull(valid),
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

export const shopService = new ShopServices()
