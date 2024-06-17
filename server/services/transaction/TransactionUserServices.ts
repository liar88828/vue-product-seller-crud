import type { IdUserTrans } from "~/types/product/findId"

export class TransactionUserServices {
  async all(id_user: string) {
    return db.trans.user.all(id_user)
  }
  // async (id_user: string) {
  //   return db.transaction.(id_user)
  // }
  async detail(id: IdUserTrans) {
    return db.trans.user.id(id)
  }
  async findOrder(id: IdUserTrans) {
    return db.trans.user.id(id)
  }

  async delete(id: IdUserTrans) {
    return db.trans.user.delete(id)
  }
  async pay(id: IdUserTrans) {
    return db.trans.user.pay(id)
  }
}
