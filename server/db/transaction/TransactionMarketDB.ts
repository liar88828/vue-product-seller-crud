import { prisma } from "~/server/config/prisma"
import type { IdMarketTrans } from "~/types/product/findId"
import type { DataMarket, OrderConfirm } from "~/types/market/order"
import { TransactionMarketOrderDB } from "./order/TransactionMarketOrderDB"

export class TransactionMarketDB {
  confirm = new TransactionMarketOrderDB()

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
