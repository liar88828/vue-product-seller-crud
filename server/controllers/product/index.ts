import type { Product } from "@prisma/client"
import type { H3Event } from "h3"
import { type ProductServices } from "../../services/product/ProductServices"
import { statics } from "~/server/db/product/ProductStatic"
import { ProductSanitized } from "./../../services/product/ProductSanitized"

export class ProductController {
  constructor(
    private serviceProduct: ProductServices,
    private sanitize: ProductSanitized // private user: ProductUserController, // private market: ProductMarketController
  ) {}

  test(text: string): string {
    return text
  }

  async id(id: number) {
    return tryCatch(async () => {
      return this.serviceProduct.id(id)
    })
  }

  async all(event: H3Event) {
    return tryCatch(async () => {
      const { category, search } = getRouterParams(event)
      return this.serviceProduct.searchProduct({ category, search })
    })
  }

  async detail(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceProduct.detail(Number(id))
    })
  }

  async trending(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
  }

  async newProduct(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
  }

  async bestProduct(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
  }

  async bestSeller(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
  }

  async discount(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
  }
  async related(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
    })
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

  async create(event: H3Event) {
    console.log("create")

    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const data = this.sanitize.sanitizeCreate(body, {
        id_user: session.id,
        id_market: session.id_market,
      })
      return this.serviceProduct.create(data)
    })
  }

  async marketAll(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)

      return this.serviceProduct.marketAll(Number(id))
    })
  }

  async preview(event: H3Event): Promise<UserPreviewServer[]> {
    const { id } = getRouterParams(event)
    return prisma.preview.findMany({
      include: { User: true },
      where: {
        id_product: Number(id),
      },
    })
  }
}

export const productController = new ProductController(
  productService,
  productSanitized
  // productUserController,
  // productMarketController
)
