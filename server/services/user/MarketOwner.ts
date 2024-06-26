import type { Contact, Market, SocialMedia } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import { MarketSanitize } from "./MarketSanitize"
import type { SessionUser } from "~/types/globals/session"
import type {
  UpdateSocial,
  MarketServer,
  MarketServerFull,
  MarketServiceSingle,
  MarketServiceSingleNull,
  UpdateMarket,
  UpdateContact,
} from "~/types/market/ProfileCompany"
import type { RequiredProperty } from "~/types/globals/generic"

export class MarketOwner {
  constructor(protected sanitize: MarketSanitize["sanitizeProfile"]) {}

  async findSingle(id_market: number): Promise<MarketServiceSingleNull> {
    id_market = zods.id.number.parse(id_market)
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

  async findFullSingle(id: number): Promise<MarketServiceSingleNull> {
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
        return this.sanitize(data)
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

  async create(
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

  sanitizeContact(data: UpdateContact) {
    return zods.market.contact.parse({
      email: data.email,
      phone: data.phone,
      website: data.website,
    })
  }

  sanitizeMarket(data: UpdateMarket) {
    return zods.market.market.parse({
      address: data.address,
      industry: data.industry,
      mission: data.mission,
      vision: data.vision,
      description: data.description,
      history: data.history,
      name: data.name,
      since: new Date(data.since),
    })
  }

  sanitizeSocial(data: UpdateSocial) {
    return zods.market.social.parse({
      facebook: data.facebook,
      instagram: data.instagram,
      whatsapp: data.whatsapp,
      twitter: data.twitter,
    })
  }

  async updateProfile(
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
