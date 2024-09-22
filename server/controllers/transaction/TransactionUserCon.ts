import {
  HistoryUserController,
  historyUserController,
} from "./history/HistoryUserController"
import {
  orderUserController,
  OrderUserController,
} from "./order/OrderUserController"
import type { H3Event } from "h3"
import type { Transaction } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export class TransactionUserCon {
  constructor(
    private serviceOrder: OrderUserController,
    private serviceHistory: HistoryUserController
  ) {}

  async allProduct(id_user: string) {
    const transaction = await prisma.user.findUnique({
      where: { id: id_user },
      select: {
        Transaction: {
          include: {
            Box: {
              include: {
                Product: true,
              },
            },
          },
        },
      },
    })
    return transaction
  }

  async all(event: H3Event): Promise<Transaction[]> {
    const { session } = await getUserSession(event)
    return db.trans.user.all(session.id)
  }

  async delete(event: H3Event) {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }
}

export const transactionUserController = new TransactionUserCon(
  orderUserController,
  historyUserController
)
