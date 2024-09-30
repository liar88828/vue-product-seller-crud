import { type IdStaticMarket } from "~/types/market/ProfileCompany"
import type { Contact, Market, Product, SocialMedia } from "@prisma/client"

export class MarketService {
  constructor(private sanitizeMarket: IMarketSanitize) {}

  async findProfile(session: SessionUser): Promise<Market> {
    const data = await prisma.market.findUnique({
      where: { id_user: session.id },
    })
    // console.log(data)
    if (!data) {
      console.error("will error ")
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found please register",
      })
    }
    return data
  }

  async all(id_market: number): Promise<Product[]> {
    return prisma.product.findMany({
      where: { id_market },
    })
  }

  async register(
    data: MarketServer,
    session: SessionUser
  ): Promise<MarketUser> {
    // data.id_user = session.id
    data = this.sanitizeMarket.sanitize(data, session)
    data = zods.market.registerServer.parse(data)
    // console.log(data, "data market--")

    return prisma.$transaction(async (tx) => {
      const market = await tx.market.create({
        data: {
          address: data.address,
          description: data.description,
          history: data.history,
          industry: data.industry,
          mission: data.mission,
          vision: data.vision,
          name: data.name,
          since: data.since,
          id_user: data.id_user,
          // id_contact: 1,
          // id_socialMedia: 1,
          // id_follow: 1,
          // id_contact: data.id_contact,
          // id_socialMedia: data.id_socialMedia,
          // id_user: session.id,
        },
      })
      const user = await tx.user.update({
        where: { id: data.id_user },
        data: {
          createMarket: true,
        },
      })

      if (!data) {
        throw createError({
          statusCode: 404,
          statusMessage: "Market not found",
        })
      }
      return { market, user }
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
    return MarketService.findFullStatic(id_market)
  }

  async marketStatic({
    id_market,
    id_product,
  }: {
    id_market: number
    id_product: number
  }): Promise<StaticServer> {
    // console.log("id_market-----", id)
    // id = zods.id.number.parse(id)
    const market = await this.id(id_market)
    // console.log(market, "market")
    return {
      market: market,
      static: await statics(id_product, market),
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

  async findProfileEdit(id_user: string): Promise<MarketServiceSingleNull> {
    id_user = zods.id.string.parse(id_user)
    console.log("id_market-----", id_user)

    const market = await prisma.market
      .findUnique({ where: { id_user } })
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

  async ownerFindSingle(id_user: string): Promise<MarketServiceSingleNull> {
    id_user = zods.id.string.parse(id_user)
    console.log("id_market-----", id_user)

    const market = await prisma.market
      .findUnique({ where: { id_user } })
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
    session: SessionUser
  ): Promise<{ market: Market; user: SessionUser }> {
    data = this.sanitizeMarket.sanitize(data, session)
    // data = zods.market.registerServer.parse(data)

    return prisma.$transaction(async (tx) => {
      const contact = await tx.contact.create({
        data: {
          email: session.email,
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
      // const follow = await tx.follow.create({ data: {} })

      const sanitize: Omit<Market, "id"> = {
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
        // id_follow: follow.id,
        id_user: session.id,
      }

      const userDB = await tx.user.update({
        where: { id: session.id },
        data: {
          createMarket: true,
        },
      })
      userDB.password = ""
      const market = await tx.market.update({
        where: { id_user: session.id },
        data: sanitize,
      })
      return {
        market,
        user: userDB,
      }
    })
  }

  async ownerUpdateProfile(
    { id }: SessionUser,
    data: MarketServiceSingle
  ): Promise<MarketServiceSingle> {
    return prisma.$transaction(async (tx) => {
      const market = await tx.market.update({
        where: { id_user: id },
        data: this.sanitizeMarket.sanitizeMarket(data.Market),
      })

      const contact = await tx.contact.update({
        where: { id: market.id },
        data: this.sanitizeMarket.sanitizeContact(data.Contact),
      })

      const socialMedia = await tx.socialMedia.update({
        where: { id: market.id_socialMedia as number },
        data: this.sanitizeMarket.sanitizeSocial(data.SocialMedia),
      })

      return {
        Market: market,
        SocialMedia: socialMedia,
        Contact: contact,
      }
    })
  }

  async idMarketFind({ id }: Pick<SessionUser, "id">) {
    return getIdMarket({ id })
  }

  async confirmId({
    id_transaction,
    session: { id },
  }: {
    id_transaction: number
    session: SessionUser
  }) {
    const market = await this.idMarket(id)

    return prisma.transaction.findUnique({
      where: {
        id: id_transaction,
        id_market: market.id, // must be use id_market
      },
    })
  }
  async idMarket(id: string) {
    return await prisma.market
      .findUnique({
        select: { id: true },
        where: {
          id_user: id,
        },
      })
      .then((d) => {
        if (!d) {
          throw createError({
            statusCode: 404,
            statusMessage: "Market not found",
          })
        }
        return d
      })
  }

  async idMarketStatic(id_market: number): Promise<IdStaticMarket> {
    return prisma.$transaction(async (tx) => {
      return {
        follow: await tx.follow.count({
          where: {
            id_market,
          },
        }),
        product: await tx.product.count({
          where: {
            id_market,
          },
        }),
      }
    })
  }
}

export const marketService = new MarketService(marketSanitize)
export type IMarketService = MarketService

export async function getIdMarket({ id }: Pick<SessionUser, "id">) {
  return prisma.market
    .findUnique({
      where: { id_user: id },
      select: { id: true },
    })
    .then((data) => {
      if (!data) {
        throw createError({
          statusCode: 404,
          statusMessage: "market not found please create first",
        })
      }
      return data
    })
}
