import type { Market, Product } from "@prisma/client"

export class MarketServices extends MarketSanitize {
  constructor() {
    super()
  }

  async all(id_market: number): Promise<Product[]> {
    return prisma.product.findMany({
      where: { id_market },
    })
  }

  async create(data: MarketServer, session: SessionUser): Promise<MarketUser> {
    console.log(data, "data market")
    data = zods.market.create.parse(data)

    return prisma.market
      .upsert({
        where: { id: session.id_market },
        create: data,
        update: {
          User: {
            update: {
              createMarket: true,
            },
          },
        },
        include: { User: true },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Market not found",
          })
        } else {
          const { User } = data
          if (!User) {
            throw createError({
              statusCode: 404,
              statusMessage: "User not found",
            })
          }
          User.password = ""
          return { ...data, User: User }
        }
      })
  }

  async id(id: number): Promise<Market> {
    id = zods.id.number.parse(id)
    return prisma.market
      .findUnique({
        where: { id },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Market not found",
          })
        }
        return data
      })
  }

  static async findFullStatic(id_market: number): Promise<MarketServerFull> {
    id_market = zods.id.number.parse(id_market)
    const data = await db.market.findFull(id_market)
    // console.log(data, "data market")
    console.log("data market")
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    const { Contact, SocialMedia } = data
    if (!Contact) {
      throw createError({
        statusCode: 404,
        statusMessage: "Contact not found",
      })
    }
    if (!SocialMedia) {
      throw createError({
        statusCode: 404,
        statusMessage: "SocialMedia not found",
      })
    }
    return {
      ...data,
      SocialMedia,
      Contact,
    }
  }
  async findFull(id_market: number): Promise<MarketServerFull> {
    return MarketServices.findFullStatic(id_market)
  }

  async marketStatic(id: number): Promise<StaticServer> {
    const valid = zods.id.number.parse(id)
    const market = await db.product.findCompany(valid)

    return {
      market: market,
      static: await statics(valid, market),
    }
  }

  // async updateProfile(
  //   id_market: number,
  //   data: MarketServer
  // ): Promise<MarketServerFullNull> {
  //   id_market = zods.id.number.parse(id_market)
  //   data = this.updateMarketProfile(data)
  //   return db.market.updateProfile(id_market, data)
  // }
}

export const marketService = new MarketServices()
