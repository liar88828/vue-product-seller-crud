import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product"
import { ProductCurrentMarketController } from "~/server/controllers/product/ProductCurrentMarketController";

export class ProductMarketController {
  protected service = new ProductServices()
  current = new ProductCurrentMarketController(this.service.current,
	this.service.sanitizeCreate)


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


}
