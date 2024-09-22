import type { Contact, Market, Product, SocialMedia } from "@prisma/client"

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

  async ownerFindSingle(id_market: number): Promise<MarketServiceSingleNull> {
    id_market = zods.id.number.parse(id_market)
    // console.log("id_market-----", id_market)

    const market = await prisma.market
      .findUnique({ where: { id: id_market } })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "Market not found",
          })
        }
        return data
      })

    // console.log(market)
    const additional = await prisma.additional.findMany({
      where: { id_market: market.id },
    })
    const social = await prisma.socialMedia.findUnique({
      where: { id: market.id_socialMedia as number },
    })
    const contact = await prisma.contact.findUnique({
      where: { id: market.id_contact as number },
    })
    return {
      Market: market,
      // Additional: additional,
      SocialMedia: social,
      Contact: contact,
    }
  }

  async ownerFindFullSingle(id: number): Promise<MarketServiceSingleNull> {
    id = zods.id.number.parse(id)

    const market: RequiredProperty<Market> = await prisma.market
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
        return MarketSanitize.sanitizeProfileStatic(data)
      })

    const contact: Contact | null = await prisma.contact.findUnique({
      where: { id: market.id_contact },
    })

    const socialMedia: SocialMedia | null = await prisma.socialMedia.findUnique(
      { where: { id: market.id_socialMedia } }
    )

    // const additional: Additional[] = await prisma.additional.findMany({
    //   where: { id_market: market.id },
    // })

    return {
      Market: market,
      Contact: contact,
      SocialMedia: socialMedia,
      // Additional: additional,
    }
  }

  async ownerCreate(
    data: RequiredProperty<MarketServer>,
    user: SessionUser
  ): Promise<{ market: Market; user: SessionUser }> {
    return prisma.$transaction(async (tx) => {
      const contact = await tx.contact.create({
        data: {
          email: user.email,
          phone: "empty",
          website: "empty",
        },
      })
      const social = await tx.socialMedia.create({
        data: {
          facebook: "empty",
          instagram: "empty",
          twitter: "empty",
          whatsapp: "empty",
        },
      })
      const follow = await tx.follow.create({ data: {} })

      const sanitize: RequiredProperty<Market> = {
        name: data.name,
        industry: data.industry,
        address: data.address,
        description: data.description,
        mission: data.mission,
        vision: data.vision,
        history: data.history,
        since: data.since,
        id_contact: contact.id,
        id_socialMedia: social.id,
        id_follow: follow.id,
        id: user.id_market,
      }

      const userDB = await tx.user.update({
        where: { id: user.id },
        data: {
          createMarket: true,
        },
      })
      userDB.password = ""
      const market = await tx.market.update({
        where: { id: user.id_market },
        data: sanitize,
      })
      return {
        market,
        user: userDB,
      }
    })
  }

  async ownerUpdateProfile(
    id_market: number,
    data: MarketServiceSingle
  ): Promise<MarketServiceSingle> {
    return prisma.$transaction(async (tx) => {
      const market = await tx.market.update({
        where: { id: id_market },
        data: this.sanitizeMarket(data.Market),
      })

      const contact = await tx.contact.update({
        where: { id: market.id },
        data: this.sanitizeContact(data.Contact),
      })

      const socialMedia = await tx.socialMedia.update({
        where: { id: market.id_socialMedia as number },
        data: this.sanitizeSocial(data.SocialMedia),
      })

      return {
        Market: market,
        SocialMedia: socialMedia,
        Contact: contact,
      }
    })
  }
}

export const marketService = new MarketServices()
export type IMarketService = MarketServices
