import type { Trolley } from "@prisma/client"

import { prisma } from "~/server/config/prisma"

export type IdTrolleyProduct = {
  id_trolley: number
  id_product: number
  id_user: string
}

export class TrolleyMutation extends CheckDB {
  checkout = new CheckOutDB()

  // async checkTrolley(id_user: string) {
  //   const found = await prisma.trolley.findMany({
  //     select: {
  //       id: true,
  //     },
  //     // where: {
  //     //   User: { id: id_user },
  //     // },
  //   })
  //   if (!found) {
  //     const create = await prisma.trolley.create({
  //       data: {
  //         User: {
  //           connect: {
  //             id: id_user,
  //           },
  //         },
  //       },
  //     })
  //     return create
  //   }
  // }
}

export class TrolleyDB extends TrolleyMutation {
  async myNotify(id: string, page: number): Promise<number> {
    return prisma.trolley.count({
      where: {
        User: {
          id,
        },
      },
    })
  }

  async id(id: string): Promise<number> {
    const data = await prisma.user
      .findUnique({
        where: { id },
        select: {
          Trolley: true,
        },
      })
      .then((data) => data?.Trolley)

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolley not found",
      })
    }
    return 666
  }

  async findTrolley(id_trolley: number): Promise<TrolleyProduct[]> {
    const data = await prisma.trolley.findMany({
      where: { id: id_trolley },
      include: { Product: true },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Trolley not found",
      })
    }
    return data
  }
}