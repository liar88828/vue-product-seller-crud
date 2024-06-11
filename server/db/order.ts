import { Status } from "~/types/market/confirm"
import { prisma } from "../config/prisma"
import { Order } from "@prisma/client"

class OrderMutation {
  async confirm(id: string, status: Status) {
    return prisma.order.update({
      where: {
        id: Number(id),
      },
      data: {
        status: status,
      },
    })
  }

  async create(data: Order) {
    return prisma.order.create({ data })
  }
}

export class OrderDB extends OrderMutation {}
