import type { Product } from "@prisma/client"
import type { SearchProduct } from "~/types/product/item"

export class ProductServices extends ProductSanitized {
  shop = new ShopServices()
  // current = new ProductCurrentMarketServices()
  async productMarketId(id: ProductMarketId) {
    id = zods.product.idMarketProduct.parse(id)
    return prisma.product.findUnique({
      where: {
        id: id.id_product,
        id_market: id.id_market,
      },
    })
  }
  async marketAll(id_market: number): Promise<Product[]> {
    id_market = zods.id.number.parse(id_market)
    return prisma.product
      .findMany({
        where: { id_market },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Product not found",
          })
        }
        return data
      })
  }

  async id(id: number): Promise<Product> {
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
  async searchProduct({ category, search }: SearchProduct): Promise<Product[]> {
    const data = await prisma.product.findMany({
      where: {
        ...(search ? { name: search } : {}),
        ...(category ? { category } : {}),
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

  async detail(id: number) {
    id = zods.id.number.parse(id)
    return db.product.findFull(Number(id))
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
      const product = await tx.product.create({
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
      const images = await tx.image.create({
        data: {
          id_product: product.id,
          img: data.image,
          title: data.name,
        },
      })
      return product
    })
  }
}

export const productService = new ProductServices()
