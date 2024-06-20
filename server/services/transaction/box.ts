import type { Box } from "@prisma/client"
import type { CreateBox } from "~/types/market/order"

class BoxTrolly {
  sanitize(data: Box, id_transaction: number): Box {
    return {
      id: data.id,
      id_product: data.id_product,
      id_transaction,
      id_trolly: data.id_trolly,
      price: data.price,
      qty: data.qty,
    }
  }
  sanitizeLoop({ box, id_transaction }: CreateBox) {
    return box.map((item) => {
      return this.sanitize(item, id_transaction)
    })
  }
}

export class BoxService extends BoxTrolly {
  async pushPackage(data: Box[]) {
    return db.box.boxMany(data)
  }

  // async checkTransaction(data: CheckTransaction): Promise<Transaction> {
  //   return db.transaction.create(data)
  // }
}
