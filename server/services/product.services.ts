import type { Product } from "@prisma/client"

export class ProductService extends ProductSanitize {
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
          id: data.type,
        },
        create: {
          id: data.type,
        },
        update: {
          id: data.type,
        },
      })
      const product = await tx.product.create({
        data: {
          type: type.id,
          name: data.name,
          description: data.description,
          image: data.image,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          // id_user: data.id_user,
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

  async ownerAll({ id_market, id_user }: IdProductOwner) {
    const data = await prisma.product.findMany({
      where: {
        id_market,
        // id_user
      },
      take: 100,
    })
    return data
  }

  async ownerId(id: FindIdProductCurrentMarket): Promise<ProductItemServer> {
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

  async ownerCreate(
    data: RequiredProperty<ProductMarketCreate>
  ): Promise<Product> {
    data = zods.product.create.parse(data)
    return prisma.$transaction(async (tx) => {
      const type = await tx.type.upsert({
        where: {
          id: data.type,
        },
        create: {
          id: data.type,
        },
        update: {
          id: data.type,
        },
      })
      const product = await tx.product.create({
        data: {
          type: type.id,
          name: data.name,
          description: data.description,
          image: data.image,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          // id_user: data.id_user,
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

  async ownerUpdate(
    id: IdValid,
    data: RequiredProperty<ProductMarketCreate>
  ): Promise<Product> {
    id = zods.id.valid.parse(id)
    data = zods.product.update.parse(data)

    return prisma.$transaction(async (tx) => {
      const type = await tx.type.upsert({
        where: {
          id: data.type,
        },
        create: {
          id: data.type,
        },
        update: {
          id: data.type,
        },
      })
      return tx.product.update({
        where: { id: id.id },
        data: {
          type: type.id,
          name: data.name,
          description: data.description,
          image: data.image,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          // id_user: data.id_user,
          id_market: data.id_market,
        },
      })
    })
  }

  async ownerDelete({
    id,
    id_market,
  }: Omit<IdProduct, "id_user">): Promise<Product> {
    id = zods.id.number.parse(id)
    return prisma.product.delete({ where: { id: id, id_market: id_market } })
  }

  async shopDetail(id: number): Promise<ProductDetail> {
    const previews = await db.preview.findUser({ id })
    const product = await db.product.findFull(id)
    // const market = await db.product.findCompany(id)
    // const relateds = await db.product.findTest()

    return {
      detail: product,
      previews,
      //   static: marketStatic,
      // market,
      // relateds,
      // static: await statics(id, market),
    }
  }
}

export const productService = new ProductService()

export type IProductService = ProductService
