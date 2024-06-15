import { BoxCreate } from "~/types/transaction/trolly"
class SanitizeTrolly {
  sanitize(data: BoxCreate): BoxCreate {
    return {
      price: data.price,
      qty: data.qty,
      id_trolly: data.id_trolly,
      id_product: data.id_product,
    }
  }
}

export class TrollyService extends SanitizeTrolly {
  async pushTrolly(data: BoxCreate) {
    data = zods.boxCreate.parse(data)
    return db.trolly.push(data)
  }
  async checkTrolly(id_trolly: number) {
    return db.trolly.check(id_trolly)
  }
}
