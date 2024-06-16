import type { User } from "@prisma/client"
import type { BaseClass } from "~/types/globals/controller"
import type { IdTransaction } from "~/types/product/findId"
import type {
  GetBoxProps,
  GetBoxReturn,
  GetPackageProps,
  GetPackageReturn,
} from "~/types/transaction/GetBox"
import type { CheckTransaction } from "~/types/transaction/package"

export class TransactionSanitize {
  sanitize({ id, address }: User): CheckTransaction {
    return {
      id_user: id,
      drop_address: address,
      id_status: "Pending",
    }
  }
}

class LoopTransactionServices extends TransactionSanitize {
  getBox(id_trolly: number, data: GetBoxProps[]): GetBoxReturn[] {
    return data.map((d) => ({
      qty: d.qty,
      price: d.price,
      id_product: d.id_product,
      trollyId: id_trolly,
      id_trolly: id_trolly,
    }))
  }
  getPackage(id_trans: number, data: GetPackageProps[]): GetPackageReturn[] {
    //@ts-expect-error
    return data.map((d) => ({
      qty: d.qty,
      price: d.price,
      transactionId: id_trans,
      id_product: d.id_product,
      // id_trolly: id_trolly,
    }))
  }
}

export class TransactionServices
  extends LoopTransactionServices
  implements BaseClass
{
  async findOrder(id: IdTransaction) {
    return db.transaction.findMany(id)
  }
  async all(id_user: string) {
    return db.transaction.all(id_user)
  }

  async delete(id: IdTransaction) {
    return db.transaction.delete(id)
  }
  async user(id_user: string) {
    return db.transaction.user(id_user)
  }

  async pay(id: IdTransaction) {
    return db.transaction.pay(id)
  }

  async detail(id: IdTransaction) {
    return db.transaction.detail(id)
  }
  async id(id: number) {
    return db.transaction.id(id)
  }
  async create(data: CheckTransaction) {
    return db.transaction.create(data)
  }
}
