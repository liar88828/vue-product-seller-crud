import type { Transaction } from "@prisma/client"
import type { GetPackageProps } from "~/types/transaction/GetBox"
import type { CheckTransaction } from "~/types/transaction/package"
import type { IdTransaction } from "~/types/product/findId"
import { prisma } from "~/server/config/prisma"
import { service } from "~/server/services/_index"
import { registerTS } from "vue/compiler-sfc"

class TransactionMutationDB {
  async create(data: CheckTransaction) {
    return prisma.transaction.create({ data })
  }

  async pay({ id, id_user }: IdTransaction) {
    return prisma.transaction.update({
      where: { id, id_user },
      data: {
        id_status: "Accepted",
      },
    })
  }

  async update(id: number, data: CheckTransaction) {
    return prisma.transaction.update({
      where: { id },
      data,
    })
  }

  async delete({ id, id_user }: IdTransaction) {
    return prisma.order.findMany({
      where: { id, id_userBuy: id_user },
    })
  }
}

export class TransactionDB extends TransactionMutationDB {
  test(text: string) {
    return text
  }

  async findMany({ id_user, id }: IdTransaction) {
    return prisma.order.findMany({
      where: { id_userBuy: id_user, id: id },
    })
  }
  async all(id_userBuy: string) {
    return prisma.order.findMany({
      where: { id_userBuy },
    })
  }

  async wantBuy({ data: { pack, trans }, id_user }: WantBuyProps) {
    await this.check(id_user)
    const transaction = await prisma.transaction.create({
      data: {
        drop_address: trans.drop_address,

        Status: {
          connectOrCreate: {
            where: {
              id: "SIMPAN",
            },
            create: {
              id: "SIMPAN",
            },
          },
        },
      },
    })

    const packages = await prisma.package.createMany({
      data: service.transaction.getPackage(transaction.id, pack),
    })
    return {
      packages,
      transaction,
    }
  }

  async detail({ id, id_user }: IdTransaction) {
    return prisma.transaction.findUnique({
      where: { id, id_user },
    })
  }
  async id(id: number) {
    const data = await prisma.transaction.findUnique({
      where: { id },
    })
    // if (!data) {
    //   throw createError({
    //     statusCode: 404,
    //     statusMessage: "Transaction not found",
    //   })
    // }
    return data
  }

  async user(id_user: string) {
    return prisma.transaction.findMany({
      where: {
        //id,
        id_user,
      },
    })
  }

  async check(id_user: string) {
    const found = await prisma.transaction.findMany({
      where: { id_user },
      select: { id: true },
    })
    if (!found) {
      const create = await prisma.transaction.create({
        data: {
          id_user,
        },
      })
      return create
    }
  }
}

export type WantBuyProps = {
  id_user: string
  data: {
    pack: GetPackageProps[]
    trans: Transaction
  }
}
