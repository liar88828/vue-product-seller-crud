import { prisma } from "~/server/config/prisma"

type FollowServer = {
  User: {
    id: string
  }[]
}
export async function all(id: number): Promise<FollowServer[]> {
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

export async function findSelf(id: number): Promise<MarketStatic["follow"]> {
  const data = await prisma.follow.count({
    where: { id },
  })
  if (!data) {
    return 0
  }
  return data
}
export async function findThrow(id: number): Promise<number> {
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
