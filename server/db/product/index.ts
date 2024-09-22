import { prisma } from "~/server/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { Market, Product } from "@prisma/client"
import type { ProductDetail, ProductItemServer } from "~/types/product/item"
import { statics } from "./ProductStatic"

export class ProductDB {
  async marketFindId({ id_market, id_product }: ProductMarketId) {
    const data = await prisma.product.findUnique({
      where: { id_market, id: id_product },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
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

  async findTest(): Promise<Product[]> {
    const product: Product[] = await prisma.product.findMany({
      take: 100,
    })
    return product
  }

  async findFull(id: number): Promise<ProductDetail["detail"]> {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        Spec: true,
        Tech: true,
        Desc: true,
        Img: true,
      },
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

  async findCompany(id: number): Promise<Market> {
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
        statics: await statics(valid, market),
      }
    })
  }

  async delete({ id, id_user }: IdValid) {
    return prisma.product.delete({ where: { id, id_user } })
  }
}
