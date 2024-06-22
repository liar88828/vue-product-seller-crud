import { prisma } from "~/server/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { Product } from "@prisma/client"
import type { ProductDetail, ProductItemServer } from "~/types/product/item"
import { ProductUserDB } from "./ProductUserDB"
import { ProductMarketDB } from "./ProductMarketDB"
import { ProductStatic } from "./ProductStatic"

class ProductMutationDB extends ProductStatic {}

export class ProductDB extends ProductMutationDB {
  user = new ProductUserDB()
  market = new ProductMarketDB()

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

  async findId(id: number): Promise<Product> {
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
      const valid = zods.id.number.parse(id)
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
