import { Box, Package, Transaction, User } from "@prisma/client"
import { CheckTransaction } from "~/types/transaction/package"
class PackageTrolly {
  sanitizePackage(id_transaction: number, data: Box[]): Package[] {
    return data.map((item) => {
      return {
        id: item.id,
        id_product: item.id_product,
        price: item.price,
        qty: item.qty,
        id_transaction,
      }
    })
  }

  sanitizeTransaction({ id, address }: User): CheckTransaction {
    return {
      id_user: id,
      drop_address: address,
      id_status: "Pending",
    }
  }
}

export class PackageService extends PackageTrolly {
  async pushPackage(data: Package[]) {
    return db.package.packageProduct(data)
  }

  async checkTransaction(data: CheckTransaction): Promise<Transaction> {
    return prisma.transaction.create({ data })
  }
}
