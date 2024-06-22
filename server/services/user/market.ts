export class MarketServices extends MarketSanitize {
  owner = new MarketOwner(this.sanitizeProfile)
  static = new MarketStaticService()

  async create(data: MarketServer): Promise<MarketUser> {
    data = zods.market.create.parse(data)
    const dataDB = await db.market.create(data)
    const { User } = dataDB
    if (!User) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    return { ...dataDB, User }
  }

  async id(id: number): Promise<MarketUser> {
    id = zods.id.number.parse(id)
    const data = await db.market.id(id)
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    const { User } = data
    if (!User) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    return { ...data, User }
  }

  async findFull(id_market: number): Promise<MarketServerFull> {
    id_market = zods.id.number.parse(id_market)
    const data = await db.market.findFull(id_market)
    console.log(data, "data market")
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

  // async updateProfile(
  //   id_market: number,
  //   data: MarketServer
  // ): Promise<MarketServerFullNull> {
  //   id_market = zods.id.number.parse(id_market)
  //   data = this.updateMarketProfile(data)
  //   return db.market.updateProfile(id_market, data)
  // }
}
