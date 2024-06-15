import { Market } from "@prisma/client"
import {
  MarketServer,
  MarketServerFull,
  ProfileMarket,
} from "~/types/market/ProfileCompany"

export class MarketDB {
  async findUser(id_user: string) {
    const data = await prisma.market.findUnique({
      where: { id_user },
      include: {
        User: true,
      },
    })

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    if (!data.User) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found",
      })
    }
    data.User.password = ""
    return data
  }
  async findFull(id_user: string): Promise<MarketServerFull> {
    const data = await prisma.market.findUnique({
      where: { id_user },
      include: {
        User: true,
        Contact: true,
        SocialMedia: true,
        Additional: true,
      },
    })

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }

    return data
  }

  async findId(id: number) {
    const data = await prisma.market.findUnique({
      where: { id },
      include: {
        User: true,
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    return data
  }
  async create(data: MarketServer) {
    const res = await prisma.market.create({
      data: data,
      include: {
        User: true,
      },
    })
    if (!res) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    return res
  }

  async updateProfile(
    id_market: number,
    data: MarketServer
  ): Promise<MarketServerFull> {
    return prisma.market.update({
      where: { id: id_market },
      data: data,
      include: {
        User: true,
        Contact: true,
        SocialMedia: true,
        Additional: true,
      },
    })
  }
}
