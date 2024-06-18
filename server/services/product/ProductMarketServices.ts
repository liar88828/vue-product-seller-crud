import type { ProductMarketId } from "~/types/product/findId"

export class ProductMarketServices {
  async all(id_market: number) {
    id_market = zods.idNumber.parse(id_market)
    return db.product.market.all(id_market)
  }
  async id(id: ProductMarketId) {
    id = zods.idMarketProduct.parse(id)
    return db.product.market.id(id)
  }
}
