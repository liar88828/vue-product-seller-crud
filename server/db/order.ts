import type { Status } from "~/types/globals/Status"
import { prisma } from "../config/prisma"
import type { Order } from "@prisma/client"

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

export class OrderDB extends OrderMutation {
  async findConfirmFull() {
    console.log("db confirm")
    prisma.order.findMany({
      include: {
        market: true,
        trolly: true,
        userBuy: true,
      },
    })
  }
}
