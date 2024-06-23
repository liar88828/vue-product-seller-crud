import type { IdValid, ProductMarketId } from "~/types/product/findId"
import type { ProductMarketCreate } from "~/types/product/data.db"
import type { Product } from "@prisma/client"
import type { RequiredProperty } from "~/types/globals/generic"
import { prisma } from "~/server/config/prisma"

export type FindIdProductCurrentMarket = {
  id: number
  id_market: number
  id_user: string
}
export type AllProductCurrentMarket = { id_market: number; id_user: string }

export class ProductMarketServices {
  async all(id_market: number) {
    id_market = zods.id.number.parse(id_market)
    return db.product.market.all(id_market)
  }

  async id(id: ProductMarketId) {
    id = zods.product.idMarketProduct.parse(id)
    return db.product.market.id(id)
  }
}

export class ProductCurrentMarketServices {
  async all({ id_market, id_user }: AllProductCurrentMarket) {
    const data = await prisma.product.findMany({
      where: { id_market, id_user },
      take: 100,
    })
    return data
  }

  async id({
    id,
    id_market,
    id_user,
  }: FindIdProductCurrentMarket): Promise<ProductItemServer> {
    const product = await prisma.product
      .findUnique({
        where: { id_market, id_user, id },
        include: {
          Spec: { include: { List: true } },
          Tech: true,
          Desc: true,
          Img: true,
        },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Product is Not Found",
          })
        }
        return data
      })

    return product
  }

  async create(data: RequiredProperty<ProductMarketCreate>): Promise<Product> {
    data = zods.product.create.parse(data)
    return prisma.$transaction(async (tx) => {
      const type = await tx.type.upsert({
        where: {
          id: data.id_type,
        },
        create: {
          id: data.id_type,
        },
        update: {
          id: data.id_type,
        },
      })
      return tx.product.create({
        data: {
          id_type: type.id,
          name: data.name,
          description: data.description,
          image: data.image,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          id_user: data.id_user,
          id_market: data.id_market,
        },
      })
    })
  }

  async update(
    id: IdValid,
    data: RequiredProperty<ProductMarketCreate>
  ): Promise<Product> {
    id = zods.id.valid.parse(id)
    data = zods.product.update.parse(data)

    return prisma.$transaction(async (tx) => {
      const type = await tx.type.upsert({
        where: {
          id: data.id_type,
        },
        create: {
          id: data.id_type,
        },
        update: {
          id: data.id_type,
        },
      })
      return tx.product.update({
        where: { id: id.id },
        data: {
          id_type: type.id,
          name: data.name,
          description: data.description,
          image: data.image,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          id_user: data.id_user,
          id_market: data.id_market,
        },
      })
    })
  }

  async delete(id: IdValid): Promise<Product> {
    id = zods.id.valid.parse(id)
    return db.product.delete(id)
  }
}
