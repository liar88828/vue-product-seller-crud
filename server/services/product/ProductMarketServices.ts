import type { Product } from "@prisma/client"

export type AllProductCurrentMarket = { id_market: number; id_user: string }

export class ProductCurrentMarketServices {
  async all({ id_market, id_user }: AllProductCurrentMarket) {
    const data = await prisma.product.findMany({
      where: { id_market, id_user },
      take: 100,
    })
    return data
  }

  async id(id: FindIdProductCurrentMarket): Promise<ProductItemServer> {
    id = zods.id.marketProduct.parse(id)
    const product = await prisma.product
      .findUnique({
        where: id,
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

export const productMarketService = new ProductCurrentMarketServices()
