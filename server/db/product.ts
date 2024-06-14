import { prisma } from "~/server/config/prisma"
import type { Pagination } from "~/types/globals/Pagination"
import type { IdValid } from "../../types/product/findId"
import type { Product } from "@prisma/client"
import type { ProductItemServer } from "~/types/product/item"
import type { ProductUser } from "~/types/product/data.db"
import type { MarketIdProductId } from "~/types/market/ProfileCompany"

class ProductMutation {
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

export class ProductDB extends ProductMutation {
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

  async findTest() {
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
  async findMarketProductId({ id_company, id_product }: MarketIdProductId) {
    const data = await prisma.product.findUnique({
      where: { id_company, id: id_product },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }

  async findMarketProductAll(id_company: number) {
    const data = await prisma.product.findMany({
      where: { id_company: id_company },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }
  async counts(id: number) {
    return prisma.product.count({
      where: { id },
    })
  }

  async findFull(id: number) {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { Spec: true, Tech: true, Desc: true, Img: true },
    })
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

  async findCompany(id: number) {
    const data = await prisma.product
      .findUnique({ where: { id }, select: { Company: true } })
      .then((data) => data?.Company)
    console.log(data, "data")
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Company not found",
      })
    }
    return data
  }

  async findCheckOut(id: number) {
    const data = await prisma.product.findUnique({
      where: { id, id_order: null },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      })
    }
    return data
  }
}
