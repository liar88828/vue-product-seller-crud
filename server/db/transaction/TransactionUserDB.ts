import type { CreateTransaction } from "~/types/transaction"
import type { IdUserTrans } from "~/types/product/findId"
import type { DataMarket, WantBuyProps } from "~/types/market/order"
import { prisma } from "~/server/config/prisma"

export class TransactionUserDB {
  // async user(id_user: string) {
  //   return prisma.transaction.findMany({
  //     where: {
  //       //id,
  //       id_buyer: id_user,
  //     },
  //   })
  // }

  async wantBuy({ data: { box, data }, id_user, id_trolly }: WantBuyProps) {
    await this.check(id_user)
    const transaction = await prisma.transaction.create({
      data,
    })

    const packages = await prisma.box.createMany({
      data: service.transaction.loopBox(transaction.id, box, id_trolly),
    })
    return {
      packages,
      transaction,
    }
  }

  async id({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_buyer },
    })
  }
  async all(id_buyer: string) {
    return prisma.transaction.findMany({
      where: { id_buyer },
    })
  }
  async idDetail({ id, id_buyer }: IdUserTrans): Promise<DataMarket> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_buyer },
      include: {
        userBuy: true,
        Market: true,
        Box: {
          include: { Product: true },
        },
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }

  async check(id_buyer: string) {
    const found = await prisma.transaction.findMany({
      where: { id_buyer },
      select: { id: true },
    })
    return found
    // if (!found) {
    //   const create = await prisma.transaction.create({
    //     data: { id_buyer },
    //   })
    //   return create
    // }
  }

  async pay({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.update({
      where: { id, id_buyer },
      data: {
        id_status: "Accepted",
      },
    })
  }
  async create(data: CreateTransaction) {
    return prisma.transaction.create({ data })
  }

  async delete({ id, id_buyer }: IdUserTrans) {
    return prisma.transaction.findMany({
      where: { id, id_buyer },
    })
  }
}
