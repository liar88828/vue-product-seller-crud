import { tryCatch } from "../../lib/tryCatch"
import { ProductServices } from "../../services/product"
import { ProductMarketController } from "./ProductMarketController"
import { ProductUserController } from "./ProductUserController"
import { ProductShopController } from "./ProductShopController"

export class ProductController {
  protected service = new ProductServices()
  market = new ProductMarketController()
  user = new ProductUserController(this.service)
  shop = new ProductShopController(this.service)

  test(text: string): string {
	return text
  }

  async id(id: number) {
	return tryCatch(async () => {
	  return this.service.id(id)
	})
  }

  async findDetail(id: number) {
	return tryCatch(async () => {
	  return this.service.detail(id)
	})
  }
}
