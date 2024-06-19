import { TrollyService } from "../../services/user/trolly"
import type { Product } from "@prisma/client"
import type { BoxCreate, TrollyAllService } from "~/types/transaction/trolly"

export class TrollyController {
  constructor(protected service: TrollyService) {}
  async push(id_trolly: number, data: BoxCreate) {
    await service.trolly.check(id_trolly)
    data = service.trolly.sanitize(data)
    return service.trolly.push(data)
  }

  async id(id_user: string, id_trolly: number, id_product: number) {
    const trolly = await db.trolly.id(id_user)
    return db.trolly.findBox(id_trolly)
  }
  async all(id_trolly: string, id_user: string): Promise<TrollyAllService> {
    return this.service.all({ id_trolly: Number(id_trolly), id_user })
  }

  async delete(id_box: number, id_product: number, id_trolly: number) {
    return service.trolly.delete({ id_box, id_product, id_trolly })
  }
}
