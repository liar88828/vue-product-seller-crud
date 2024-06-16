import { TrollyService } from "../../services/user/trolly"
import type { BoxCreate } from "~/types/transaction/trolly"

export class TrollyController {
  constructor(protected service: TrollyService) {}
  async push(id_trolly: number, data: BoxCreate) {
    await service.trolly.checkTrolly(id_trolly)
    data = service.trolly.sanitize(data)
    return service.trolly.pushTrolly(data)
  }
  async findTrolly(id_user: string) {
    const id_trolly = await db.trolly.findTrolly(id_user)
    return db.trolly.findBox(id_trolly)
  }
}
