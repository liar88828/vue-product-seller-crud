import type { Package, Transaction } from "@prisma/client"
import { prisma } from "~/config/prisma"
import { control } from "~/export/control"
import type { GetPackageProps } from "~/types/GetBox"

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