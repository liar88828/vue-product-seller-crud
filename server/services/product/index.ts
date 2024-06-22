import type { Product } from "@prisma/client"
import type { ProductMarketCreate } from "~/types/product/data.db"
import type { IdValid } from "~/types/product/findId"
import { ProductMarketServices } from "./ProductMarketServices"
import { ProductSanitized } from "./ProductSanitized"
import { ShopServices } from "./shop"

export class ProductServices extends ProductSanitized {
  market = new ProductMarketServices()
  shop = new ShopServices()
  async findId(id: number) {
    id = zods.id.number.parse(id)
    return db.product.findId(id)
  }
  async detail(id: number) {
    id = zods.id.number.parse(id)
    return db.product.findFull(Number(id))
  }

  async create(data: ProductMarketCreate): Promise<Product> {
    data = zods.product.create.parse(data)
    return db.product.create(data)
  }

  async update(id: IdValid, data: ProductMarketCreate): Promise<Product> {
    id = zods.id.valid.parse(id)
    data = zods.product.update.parse(data)
    return db.product.update(id, data)
  }
  async delete(id: IdValid): Promise<Product> {
    id = zods.id.valid.parse(id)
    return db.product.delete(id)
  }
}
