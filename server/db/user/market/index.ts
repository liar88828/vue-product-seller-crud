import type {
  MarketServer,
  MarketServerFull,
} from "~/types/market/ProfileCompany"
import { MarketTestDB } from "./MarketTestDB"
import { prisma } from "~/server/config/prisma"

class MarketUserDB extends MarketTestDB {}

class MarketOwnerDB extends MarketUserDB {
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

  async delete(id: number) {
    const res = await prisma.market.delete({
      where: { id },
    })
    if (!res) {
      throw createError({
        statusCode: 404,
        statusMessage: "Market not found",
      })
    }
    return res
  }
}

export class MarketDB extends MarketOwnerDB {
  async findUser(id_user: string) {
    const data = await prisma.market.findMany({
      where: { User: { id: id_user } },
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
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found",
      })
    }
    // data.User.password = ""
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

  async findFull(id: number): Promise<MarketServerFull> {
    const data = await prisma.market.findUnique({
      where: { id },
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
}
