import type { Box, Product, Trolly, User } from "@prisma/client"
import type { GetBoxReturn } from "~/types/transaction/GetBox"
import { prisma } from "~/server/config/prisma"
import { BoxCreate } from "~/types/transaction/trolly"

export class TrollyMutation extends CheckDB {
  async createTrolly(id: string, box: GetBoxReturn[]) {
    await this.trolly(id)

    const trolly = await prisma.trolly.create({
      data: { User: { connect: { id } } },
    })

    const boxs = await prisma.box.createMany({ data: box })
    return { trolly, boxs }
  }
  async push(data: BoxCreate) {
    return prisma.box.create({ data })
  }
  async check(id_trolly: number) {
    return prisma.trolly.upsert({
      where: { id: id_trolly },
      update: {},
      create: {},
    })
  }
}

export class TrollyDB extends TrollyMutation {
  async myNotify(id: string, page: number): Promise<number> {
    return prisma.trolly.count({
      where: {
        User: {
          id,
        },
      },
    })
  }

  async myTrolly(id: string, page: number): Promise<MyTrollyReturn> {
    return prisma.trolly.findMany({
      include: { User: true, Box: true },
      where: {
        User: {
          id,
        },
      },
      take: 100,
      skip: page * 100,
    })
  }

  async findTrolly(id: string): Promise<number> {
    const data = await prisma.user
      .findUnique({
        where: { id },
        select: {
          Trolly: true,
        },
      })
      .then((data) => data?.Trolly?.id)

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolly not found",
      })
    }
    return data
  }

  async findBox(id_trolly: number): Promise<BoxProduct[]> {
    const data = await prisma.box.findMany({
      where: { id_trolly },
      include: { Product: true },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Box not found",
      })
    }
    return data
  }
}

export type MyTrollyReturn = (Trolly & {
  User: User | null
  Box: Box[]
})[]

export type BoxProduct = Box & {
  Product: Product | null
}
