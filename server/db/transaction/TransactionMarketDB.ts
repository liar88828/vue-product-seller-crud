import { prisma } from "~/server/config/prisma"
import type { TStatus } from "~/types/globals/Status"
import type { IdMarketTrans } from "~/types/product/findId"
import type { DataMarket, OrderConfirm } from "~/types/market/order"

class TransactionMarketConfirmDB {
  async add({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
  }
  async id({ id, id_market }: IdMarketTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_market },
    })
  }
  async all(id_market: number) {
    return prisma.transaction.findMany({
      where: { id_market },
    })
  }
}

export class TransactionMarketDB {
  confirm = new TransactionMarketConfirmDB()

  async findId({ id, id_market }: IdMarketTrans): Promise<OrderConfirm> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_market },
      include: {
        userBuy: true,
        Market: true,
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

  async allDetail(id_market: number): Promise<DataMarket[]> {
    const data = await prisma.transaction.findMany({
      where: {
        id_market,
      },
      include: {
        userBuy: true,
        Market: true,
        Box: {
          include: {
            Product: true,
          },
        },
      },
      take: 100,
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }

  async idDetail(id: IdMarketTrans): Promise<DataMarket> {
    const data = await prisma.transaction.findUnique({
      where: { id: id.id, id_market: id.id_market },
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
}
