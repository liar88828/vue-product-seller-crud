import type { Product } from "@prisma/client"
import type { H3Event } from "h3"
import { getIdMarket } from "../services/market.service"

export class ProductController extends ReviewController {
  constructor(
    private serviceProduct: IProductService,

    private sanitize: IProductSanitize // private user: ProductUserController, // private market: ProductMarketController
  ) {
    super(serviceProduct)
  }

  test(text: string): string {
    return text
  }

  async id(event: H3Event) {
    return tryCatch(async () => {
      // console.log(event.path, "----")
      const { id } = getQuery(event)
      // console.log(id, "----------")
      return this.serviceProduct.id(Number(id))
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
  // the product
  async bestProduct(): Promise<Product[]> {
    return prisma.product.findMany({
      take: 100,
      orderBy: {
        // sold: "desc"
      },
    })
  }
  // the market
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

  async create(event: H3Event) {
    console.log("create")

    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const { id } = await getIdMarket(session)
      const data = this.sanitize.sanitizeCreate(body, {
        id_market: id,
      })
      return this.serviceProduct.create(data)
    })
  }
  async ownerAll(event: H3Event): Promise<Product[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const { id } = await getIdMarket(session)
      const data = await this.serviceProduct.ownerAll({
        id_market: id,
        id_user: session.id,
      })
      return data
    })
  }

  async marketAll(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceProduct.marketAll(Number(id))
    })
  }

  async market_id(event: H3Event, param: string = "id") {
    const id_product = getRouterParam(event, param)
    const { id } = getRouterParams(event)

    return tryCatch(async () => {
      return this.serviceProduct.productMarketId({
        id_market: Number(id),
        id_product: Number(id_product),
      })
    })
  }

  async preview(event: H3Event): Promise<UserPreviewServer[]> {
    return tryCatch(async () => {
      const { id } = getQuery(event)
      // console.log(id, "-------------")
      return prisma.preview
        .findMany({
          include: { User: true },
          where: {
            id_product: Number(id),
          },
        })
        .then((data) => {
          if (!data) {
            return []
          }
          return data
        })
    })
  }

  async shop_All(): Promise<Product[]> {
    return db.product.findTest()
  }
  async shopId(event: H3Event): Promise<ProductDetailServer> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceProduct.shopDetail(Number(id))
    })
  }

  async shopAll(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.serviceProduct.marketAll(Number(id))
  }

  async marketId(event: H3Event): Promise<ProductItemServer> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    const { id: id_market } = await getIdMarket(session)

    const data = await this.serviceProduct.ownerId({
      id: Number(id),
      id_market: id_market,
      id_user: session.id,
    })
    return data
  }
  async marketDelete(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      const { session } = await getUserSession(event)
      const { id: id_market } = await getIdMarket(session)

      return this.serviceProduct.ownerDelete({
        id: Number(id),
        id_market: id_market,
      })
    })
  }

  async markerCreate(event: H3Event) {
    console.log("create")

    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const { id: id_market } = await getIdMarket(session)

      const data = this.sanitize.sanitizeCreate(body, {
        id_market,
      })
      return this.serviceProduct.ownerCreate(data)
    })
  }

  async marketUpdate(event: H3Event) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const { id } = getRouterParams(event)
      const { id: id_market } = await getIdMarket(session)

      const data = this.sanitize.sanitizeCreate(body, {
        id_market: id_market,
      })

      return this.serviceProduct.ownerUpdate(
        {
          id: Number(id),
          id_user: session.id,
        },
        data
      )
    })
  }
}

export const productController = new ProductController(
  productService,
  productSanitize
)

export type IProductController = ProductController
