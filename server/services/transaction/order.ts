import type { IdTransaction } from "~/types/product/findId"

export class OrderServices {
  async all(id_user: string) {
    return db.transaction.all(id_user)
  }

  async delete(id: IdTransaction) {
    return db.transaction.delete(id)
  }
  async user(id_user: string) {
    return db.transaction.user(id_user)
  }
}
