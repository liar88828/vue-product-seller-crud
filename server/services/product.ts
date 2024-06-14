import { Product } from "@prisma/client"
import type { ProductUser } from "~/types/product/data.db"
import { IdValid } from "~/types/product/findId"

export class ProductServices {
  async create(data: ProductUser): Promise<Product> {
    data = zods.productCreate.parse(data)
    return db.product.create(data)
  }

  async update(IdValid: IdValid, data: ProductUser): Promise<Product> {
    data = zods.productUpdate.parse(data)
    return db.product.update(IdValid, data)
  }
}
