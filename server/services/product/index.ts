import type { Product } from "@prisma/client"
import type { ProductUser } from "~/types/product/data.db"
import type { IdValid } from "~/types/product/findId"
import { ProductMarketServices } from "./ProductMarketServices"
import { ProductSanitized } from "./ProductSanitized"
import { ShopServices } from "./shop"

export class ProductServices extends ProductSanitized {
  market = new ProductMarketServices()
  shop = new ShopServices()
  async findId(id: number) {
    id = zods.idNumber.parse(id)
    return db.product.findId(id)
  }
  async detail(id: number) {
    id = zods.idNumber.parse(id)
    return db.product.findFull(Number(id))
  }

  async create(data: ProductUser): Promise<Product> {
    data = zods.productCreate.parse(data)
    return db.product.create(data)
  }

  async update(id: IdValid, data: ProductUser): Promise<Product> {
    id = zods.idValid.parse(id)
    data = zods.productUpdate.parse(data)
    return db.product.update(id, data)
  }
  async delete(id: IdValid): Promise<Product> {
    id = zods.idValid.parse(id)
    return db.product.delete(id)
  }
}
