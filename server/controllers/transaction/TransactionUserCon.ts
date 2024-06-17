import type { CreateTransaction } from "~/types/transaction"
import type { Transaction } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import type { TransactionServices } from "~/server/services/transaction"
import type { IdUserTrans } from "~/types/product/findId"
import type { PayProps } from "~/types/market/order"

export class TransactionUserCon {
  constructor(public service: TransactionServices) {}

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
  async detail(id: string, id_buyer: string) {
    return this.service.user.detail({ id_buyer, id: Number(id) })
  }
  async all(id_buyer: string) {
    return this.service.user.all(id_buyer)
  }

  async delete(id: string, id_buyer: string) {
    return this.service.user.delete({ id_buyer, id: Number(id) })
  }

  async pay(id: string, id_buyer: string) {
    return this.service.user.pay({ id_buyer, id: Number(id) })
  }
  async create(data: CreateTransaction): Promise<Transaction> {
    const sanitize = service.transaction.sanitize(data)
    return service.transaction.create(sanitize)
  }
  async payDetail(id: string, id_buyer: string): Promise<PayProps> {
    return {
      market: await db.market.findFull(Number(id)),
      order: await db.trans.user.idDetail({ id: Number(id), id_buyer }),
    }
  }
}
