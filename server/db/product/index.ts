import { prisma } from "~/server/config/prisma"
import type { SearchPagination } from "~/types/globals/Pagination"
import type { Market, Product } from "@prisma/client"
import type {
  ProductDetailServer,
  ProductItemServer,
} from "~/types/product/item"
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
  async findAll({ page, search }: SearchPagination) {
    return prisma.product.findMany({
      where: {
        type: search,
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findAllId({ id_market }: Pick<SearchPagination, "id_market">) {
    return prisma.product.findMany({
      where: { id_market },
      take: 100,
    })
  }

  async findTest(): Promise<Product[]> {
    const product: Product[] = await prisma.product.findMany({
      take: 100,
    })
    return product
  }

  async findFull(id: number): Promise<ProductDetailServer["detail"]> {
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

  async myProduct({ id_market, page, search }: SearchPagination) {
    return prisma.product.findMany({
      where: {
        id_market: id_market,
        type: search,
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
      id = zods.id.number.parse(id)
      const market = await db.product.findCompany(id)
      // console.log(valid, "valid")
      // console.log(market, "market")
      return {
        product: await db.product.findFull(id),
        productRelated: await db.product.findTest(),
        userPreview: await db.preview.findUser({ id }),
        market,
        statics: await statics(id, market),
      }
    })
  }
}
