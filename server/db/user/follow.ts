import { prisma } from "~/server/config/prisma"
import type { MarketStatic } from "~/types/market/ProfileCompany"

type FollowServer = {
  User: {
    id: string
  }[]
}
export class FollowDB {
  async all(id: number): Promise<FollowServer[]> {
    const data = await prisma.follow.findMany({
      where: { id },
      select: {
        User: {
          select: {
            id: true,
          },
        },
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Follow not found",
      })
    }
    return data
  }

  async findSelf(id: number): Promise<MarketStatic["follow"]> {
    const data = await prisma.follow.count({
      where: { id },
    })
    if (!data) {
      return 0
    }
    return data
  }
  async findThrow(id: number): Promise<number> {
    const data = await prisma.follow.count({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Follow not found",
      })
    }
    return data
  }
}
