import { prisma } from "~/server/config/prisma"
import type { IdValid } from "~/types/product/findId"
import type { Product } from "@prisma/client"
import type { ProductMarketCreate } from "~/types/product/data.db"

export class ProductTestDB {
  test(test: string) {
    return test
  }

  async delete({ id, id_user }: IdValid) {
    const data = await prisma.product.delete({
      where: { id, id_user },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }

  async create(data: ProductMarketCreate) {
    return prisma.product.create({ data })
  }

  async update(
    { id, id_user }: IdValid,
    data: ProductMarketCreate
  ): Promise<Product> {
    return prisma.product.update({ where: { id, id_user }, data: data })
  }
}
