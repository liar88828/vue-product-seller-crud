import type { H3Event } from "h3"
import { prisma } from "../config/prisma"

export class ConfirmService {
  async id({ id, id_market }: IdMarketTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_market },
    })
  }
  async add({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
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
}

export const confirmService = new ConfirmService()

export class ConfirmController {
  constructor(private serviceConfirm: ConfirmService) {}

  async id(event: H3Event) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    await this.serviceConfirm.id({
      id: Number(id),
      id_market: session.id_market,
    })
  }

  async apply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)

    await this.serviceConfirm.add(
      {
        id: Number(id),
        id_market: session.id_market,
      },
      status
    )
  }

  async all(event: H3Event): Promise<DataMarket[]> {
    const { session } = await getUserSession(event)
    return this.serviceConfirm.allDetail(session.id_market)
  }
}

export const confirmController = new ConfirmController(confirmService)
