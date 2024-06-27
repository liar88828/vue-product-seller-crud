import type { Market, Product } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import { MarketOwnerService } from "./MarketOwner"

export class MarketServices extends MarketSanitize {
  owner = new MarketOwnerService(this.sanitizeProfile)
  static = new MarketStaticService()

  async all(id_market: number): Promise<Product[]> {
    return prisma.product.findMany({
      where: { id_market },
    })
  }

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

  async findFull(id_market: number): Promise<MarketServerFull> {
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

  // async updateProfile(
  //   id_market: number,
  //   data: MarketServer
  // ): Promise<MarketServerFullNull> {
  //   id_market = zods.id.number.parse(id_market)
  //   data = this.updateMarketProfile(data)
  //   return db.market.updateProfile(id_market, data)
  // }
}
