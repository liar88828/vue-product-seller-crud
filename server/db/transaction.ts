import type { Transaction } from "@prisma/client"
import { prisma } from "~/server/config/prisma"
import type { GetPackageProps } from "~/types/transaction/GetBox"

export class TransactionDB {
  async wantBuy({ data: { pack, trans }, id_user }: WantBuyProps) {
    await control.check.transaction(id_user)
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
      data: control.buy.getPackage(transaction.id, pack),
    })
    return {
      packages,
      transaction,
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
