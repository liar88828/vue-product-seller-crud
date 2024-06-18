import { prisma } from "~/server/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { IdValid, ProductMarketId } from "../../../types/product/findId"
import type { Market, Product } from "@prisma/client"
import type { ProductDetail, ProductItemServer } from "~/types/product/item"
import type { ProductUser } from "~/types/product/data.db"
import type { MarketStatic } from "~/types/market/ProfileCompany"
import { FollowDB } from "../user/follow"
import { ProductUserDB } from "./ProductUserDB"
import { ProductMarketDB } from "./ProductMarketDB"

class ProductStatic extends FollowDB {
  async counts(id: number) {
    return prisma.product.count({
      where: { id },
    })
  }

  async statics(
    id_product: number,
    market: Market
  ): Promise<ProductDetail["static"]> {
    return {
      product: await this.counts(id_product),
      follow: await this.findSelf(Number(market.id_follow)),
      since: market?.since || new Date(),
      response: "100%",
    }
  }
}

class ProductMutationDB extends ProductStatic {
  async delete({ id, id_user }: IdValid) {
    const data = await prisma.product.delete({
      where: {
        id,
        id_user,
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }
  async create(data: ProductUser) {
    return prisma.product.create({ data })
  }

  async update({ id, id_user }: IdValid, data: ProductUser): Promise<Product> {
    return prisma.product.update({ where: { id, id_user }, data: data })
  }
}

export class ProductDB extends ProductMutationDB {
  user = new ProductUserDB()
  market = new ProductMarketDB()

  test(test: string) {
    return test
  }
  async findAll({ page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        id_type: search,
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findAllId(id_user: string) {
    return prisma.product.findMany({
      where: { id_user },
      take: 100,
    })
  }

  async findTest(): Promise<ProductDetail["relateds"]> {
    const product: Product[] = await prisma.product.findMany({
      take: 100,
    })
    return product
  }

  async findId(id: number) {
    const data = await prisma.product.findUnique({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }

  async findFull(id: number): Promise<ProductDetail["detail"]> {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { Spec: true, Tech: true, Desc: true, Img: true },
    })
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return product as ProductItemServer
  }
  async myProduct({ id_user, page, search }: Pagination) {
    return prisma.product.findMany({
      where: {
        id_user: id_user,
        id_type: search,
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findCompany(id: number): Promise<ProductDetail["market"]> {
    const data = await prisma.product
      .findUnique({ where: { id }, select: { Market: true } })
      .then((data) => data?.Market)
    console.log(data, "data")
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Company not found",
      })
    }
    return data
  }

  async detail(id: number): Promise<ProductItemServer> {
    const data = await prisma.product.findUnique({
      include: {
        Spec: {
          include: {
            List: true,
          },
        },
        Tech: true,
        Desc: true,
        Img: true,
      },
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }
  async detailFull(id: number) {
    return tryCatch(async () => {
      const valid = zods.idNumber.parse(id)
      const market = await db.product.findCompany(valid)
      // console.log(valid, "valid")
      // console.log(market, "market")
      return {
        product: await db.product.findFull(valid),
        productRelated: await db.product.findTest(),
        userPreview: await db.preview.findUser(valid),
        market,
        statics: await this.statics(valid, market),
      }
    })
  }
}
