import type { BoxCreate, IdBox } from "~/types/transaction/trolly"
class SanitizeTrolly {
  sanitize(data: BoxCreate): BoxCreate {
    return {
      price: data.price,
      qty: data.qty,
      id_trolly: data.id_trolly,
      id_product: data.id_product,
      id_transaction: data.id_transaction,
    }
  }
}

export class TrollyService extends SanitizeTrolly {
  async push(data: BoxCreate) {
    data = zods.boxCreate.parse(data)
    return db.trolly.push(data)
  }
  async check(id_trolly: number) {
    return db.trolly.check(id_trolly)
  }
  async delete(id: IdBox) {
    id = zods.idBox.parse(id)
    return db.trolly.delete(id)
  }
}
