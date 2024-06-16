import type { Package } from "@prisma/client"
import type { SanitizePackage } from "~/types/market/order"

class PackageTrolly {
  sanitize({ box, id_transaction }: SanitizePackage) {
    return box.map((item) => {
      return {
        id: item.id,
        id_product: item.id_product,
        price: item.price,
        qty: item.qty,
        id_transaction,
      }
    })
  }
}

export class PackageService extends PackageTrolly {
  async pushPackage(data: Package[]) {
    return db.package.packageProduct(data)
  }

  // async checkTransaction(data: CheckTransaction): Promise<Transaction> {
  //   return db.transaction.create(data)
  // }
}
