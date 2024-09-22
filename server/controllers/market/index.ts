import {
  marketService,
  MarketServices,
} from "../../services/market/MarketService"

import type { H3Event } from "h3"
import type {
  Additional,
  Contact,
  Market,
  Product,
  SocialMedia,
} from "@prisma/client"
import {
  MarketOwnerService,
  marketOwnerService,
} from "~/server/services/market/MarketOwner"

// public user: MarketUserController,
// public product: ProductMarketController,
// public serviceShop: ShopServices
export class MarketController {
  constructor(
    private serviceMarket: MarketServices,
    private serviceOwner: MarketOwnerService
  ) {}

  async full(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceMarket.findFull(Number(session.id_market))
    })
  }

  async idFull(event: H3Event): Promise<MarketServerFull> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.findFull(Number(id))
    })
  }

  async productMarket(event: H3Event): Promise<Product & { market: Market }> {
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

  async createProfile(event: H3Event): Promise<MarketUser> {
    // id_user: string, data: MarketServer
    return tryCatch(async () => {
      let data = await readBody(event)
      const { session } = await getUserSession(event)
      data = this.serviceMarket.sanitize(data)
      const marketData = await this.serviceMarket.create(data, session)

      await replaceUserSession(event, {
        session: marketData.User,
        user: marketData.User,
        loggedInAt: new Date(),
      })
      return marketData
    })
  }

  async fullSingle(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      return this.serviceOwner.findSingle(session.id_market)
    })
  }

  async fullSingleId(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceOwner.findSingle(Number(id))
    })
  }

  async idMarketFind(event: H3Event): Promise<idMarketFind> {
    const { session } = await getUserSession(event)
    return db.trans.market.confirm.idMarketFind(session.id_market)
  }

  // const role: TRole = "MARKET"
  async marketUpdate(event: H3Event): Promise<MarketServiceSingle> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body: MarketServiceSingle = await readBody(event)
      return this.serviceOwner.updateProfile(session.id_market, body)
    })
  }
  async marketStatic(event: H3Event): Promise<StaticServer> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      return this.serviceMarket.marketStatic(Number(id))
    })
  }

  async marketCreate(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      let body = await readBody(event)

      body = this.serviceMarket.sanitize(body)
      body = zods.market.create.parse(body)
      const data = await this.serviceOwner.create(body, session)
      await replaceUserSession(event, {
        loggedInAt: new Date(),
        session: data.user,
        user: data.user,
      })
      return data.market
    })
  }

  async info(event: H3Event): Promise<Market> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      return await prisma.market
        .findUnique({ where: { id: session.id_market } })
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

      return prisma.additional
        .findMany({
          where: { id_market: session.id_market },
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
              id: session.id_market,
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
              id: session.id_market,
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
}

export const marketController = new MarketController(
  marketService,
  marketOwnerService
)
