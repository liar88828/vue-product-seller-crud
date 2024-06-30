import type { H3Event } from "h3"
import type { Transaction } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import { OrderController } from "~/server/controllers/transaction/order"

export class TransactionUserCon {
  constructor(
    protected event: H3Event,
    public order = new OrderController(event).user,
    public history = new HistoryController(event).user
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

  async all(): Promise<Transaction[]> {
    const { session } = await getUserSession(this.event)
    return db.trans.user.all(session.id)
  }

  async delete() {
    const { session } = await getUserSession(this.event)
    const { id } = getRouterParams(this.event)
    return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }
}
