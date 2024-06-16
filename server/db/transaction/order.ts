import type { TStatus } from "~/types/globals/Status"
import type { Order } from "@prisma/client"
import { prisma } from "../../config/prisma"
import type { DataMarket, OrderConfirm } from "~/types/market/order"

class OrderMarket {
  async confirm(id: string, status: TStatus) {
    return prisma.order.update({
      where: {
        id: Number(id),
      },
      data: {
        status: status,
      },
    })
  }
  async confirmId(id: number): Promise<OrderConfirm> {
    const data = await prisma.order.findUnique({
      where: { id },
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

  async all(id_market: number): Promise<Order[]> {
    const data = await prisma.order.findMany({
      where: {
        id_market,
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
  async allDetail(id_market: number): Promise<DataMarket[]> {
    const data = await prisma.order.findMany({
      where: {
        id_market,
      },
      include: {
        userBuy: true,
        Market: true,
        Product: true,
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
}

class OrderUser extends OrderMarket {
  async create(data: Order) {
    return prisma.order.create({ data })
  }
}

export class OrderDB extends OrderUser {
  async detail(id: number): Promise<DataMarket> {
    console.log("db confirm")
    const data = await prisma.order.findUnique({
      where: { id },
      include: {
        userBuy: true,
        Market: true,
        Product: true,
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
