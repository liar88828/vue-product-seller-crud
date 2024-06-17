import { TrollyService } from "../../services/user/trolly"
import type { BoxCreate } from "~/types/transaction/trolly"

export class TrollyController {
  constructor(protected service: TrollyService) {}
  async push(id_trolly: number, data: BoxCreate) {
    await service.trolly.check(id_trolly)
    data = service.trolly.sanitize(data)
    return service.trolly.push(data)
  }

  async find(id_user: string) {
    const id_trolly = await db.trolly.findTrolly(id_user)
    return db.trolly.findBox(id_trolly)
  }

  async delete(id_box: number, id_product: number, id_trolly: number) {
    return service.trolly.delete({ id_box, id_product, id_trolly })
  }
}
