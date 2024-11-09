import type { CreateTransaction } from "~/types/transaction"
import { prisma } from "~/server/config/prisma"
import type { Transaction } from "@prisma/client"

export class TransactionTestDB {
  test(text: string) {
    return text
  }

  async all(): Promise<Transaction[]> {
    const data = await prisma.transaction.findMany({})
    return data
  }

  async id(id: number): Promise<Transaction> {
    const data = await prisma.transaction.findUnique({
      where: { id },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Transaction not found",
      })
    }
    return data
  }

  // async create(data: CreateTransaction): Promise<Transaction> {
  //   return prisma.transaction.create({ data })
  // }

  async update(id: number, data: CreateTransaction): Promise<Transaction> {
    return prisma.transaction.update({
      where: { id },
      data,
    })
  }

  async delete(id: number): Promise<Transaction[]> {
    return prisma.transaction.findMany({
      where: { id },
    })
  }
}
