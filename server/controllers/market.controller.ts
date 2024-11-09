import type { H3Event } from "h3"
import type { Additional, Contact, Product, SocialMedia } from "@prisma/client"
import type { idMarketFind } from "~/types/market/ProfileCompany"

// public user: MarketUserController,
// public product: ProductMarketController,
// public serviceShop: ShopServices
export class MarketController {
  constructor(private serviceMarket: IMarketService) {}

  async register(event: H3Event): Promise<MarketUser> {
    return tryCatch(async () => {
      let data = await readBody(event)
      const { session } = await getUserSession(event)
      const res = await this.serviceMarket.register(data, session)

      await replaceUserSession(event, {
        session: res.user,
        user: res.user,
        loggedInAt: new Date(),
      })

      return res
    })
  }

  async findProfile(event: H3Event): Promise<MarketServer> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.findProfile(session)
    })
  }

  async findProfileFull(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.findProfileFull(session)
    })
  }

  async fullSingle(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.ownerFindSingle(session.id)
    })
  }

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const { id } = getRouterParams(event)

      // return this.serviceMarket.findFull(Number(session.id_market))
    })
  }

  async idFull(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.findFull(Number(id))
    })
  }

  async productMarket(
    event: H3Event
  ): Promise<Product & { market: MarketServer }> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return prisma.product.findUnique({
        include: {
          Market: true,
        },
        where: {
          id: Number(id),
        },
      })
    })
  }

  async id(event: H3Event): Promise<MarketUser> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.id(Number(session.id))
    })
  }

  async fullSingleId(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.ownerFindSingle(id)
    })
  }

  async getMarketId(event: H3Event): Promise<idMarketFind> {
    const { session } = await getUserSession(event)
    return this.serviceMarket.idMarketFind(session)
  }

  // const role: TRole = "MARKET"
  async marketUpdate(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body: MarketServiceSingle = await readBody(event)
      return this.serviceMarket.ownerUpdateProfile(session, body)
    })
  }
  async marketStatic(event: H3Event): Promise<StaticServer> {
    return tryCatch(async () => {
      // const { id } = await this.getMarketId(event)
      const { id_market, id_product } = getQuery(event)
      return this.serviceMarket.marketStatic({
        id_market: Number(id_market),
        id_product: Number(id_product),
      })
    })
  }

  private async marketCreate(event: H3Event): Promise<MarketServer> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      let body = await readBody(event)
      body = zods.market.register.parse(body)
      const data = await this.serviceMarket.ownerCreate(body, session)
      await replaceUserSession(event, {
        loggedInAt: new Date(),
        session: data.user,
        user: data.user,
      })
      return data.market
    })
  }

  async info(event: H3Event): Promise<MarketServer> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      return prisma.market
        .findUnique({ where: { id_user: session.id } })
        .then((data) => {
          if (!data) {
            throw createError({
              statusCode: 404,
              statusMessage: "Market not found",
            })
          }
          return data
        })
    })
  }

  async additional(event: H3Event): Promise<Additional[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const { id } = getRouterParams(event)
      return prisma.additional
        .findMany({
          where: {
            id_market: Number(id),
          },
        })
        .then((d) => {
          if (d.length === 0) {
            throw null
          }
          return d
        })
    })
  }

  async social(event: H3Event): Promise<SocialMedia> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      return prisma.socialMedia
        .findFirst({
          where: {
            Market: {
              id_user: session.id,
            },
          },
        })
        .then((d) => {
          if (!d) {
            throw null
          }
          return d
        })
    })
  }

  async contact(event: H3Event): Promise<Contact> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      return prisma.contact
        .findFirst({
          where: {
            Market: {
              id_user: session.id,
            },
          },
        })
        .then((d) => {
          if (!d) {
            throw null
          }
          return d
        })
    })
  }

  async ownerFull(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      // console.log(session, "test")
      const { id } = getRouterParams(event)

      return this.serviceMarket.findFull(Number(id))
    })
  }

  async ownerId(event: H3Event, param: string = "id") {
    const id = getRouterParam(event, param)
    const { session } = await getUserSession(event)
    await this.serviceMarket.confirmId({
      id_transaction: Number(id),
      session,
    })
  }

  async idMarket(event: H3Event): Promise<MarketServer> {
    return tryCatch(async () => {
      const { id } = getQuery(event)
      return this.serviceMarket.id(Number(id))
    })
  }

  async idMarketStatic(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getQuery(event)
      return this.serviceMarket.idMarketStatic(Number(id))
    })
  }

  // async userFull(event: H3Event): Promise<MarketServerFull> {
  //   return tryCatch(async () => {
  //     const { session } = await getUserSession(event)
  //     return this.serviceMarket.findFull(Number(session.id_market))
  //   })
  // }

  async userId(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.findFull(Number(id))
    })
  }

  async userAll(event: H3Event): Promise<Product[]> {
    const { id } = getRouterParams(event)
    return this.serviceMarket.all(Number(id))
  }
}

export const marketController = new MarketController(marketService)
