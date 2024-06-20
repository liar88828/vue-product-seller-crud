import type { Box } from "@prisma/client"
import type { IdTrolly } from "~/server/db/user/trolly"
import type {
  BoxCreate,
  IdBox,
  TrollyAllService,
} from "~/types/transaction/trolly"
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
  async push(data: BoxCreate): Promise<Box> {
    data = zods.boxCreate.parse(data)
    return db.trolly.push(data)
  }
  async check(id_trolly: number) {
    return db.trolly.check(id_trolly)
  }
  async delete(id: IdBox): Promise<Box> {
    id = zods.idBox.parse(id)
    return db.trolly.delete(id)
  }
  async all(id: IdTrolly): Promise<TrollyAllService> {
    const trolleys = await db.trolly.all(id)
    const boxs = trolleys.map((trolly) => trolly.Box.map((box) => box))
    const products = boxs.flatMap((box) =>
      box.map((d) => {
        return d.Product
      })
    )

    return {
      trolleys,
      boxs,
      products,
    }
  }
}
