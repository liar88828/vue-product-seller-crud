import { trollyService, TrollyService } from "../../services/user/trolly"
import type { Box } from "@prisma/client"
import type { BoxProduct, TrollyAllService } from "~/types/transaction/trolly"
import type { H3Event } from "h3"
import { sessionId } from "./sessionId"

export class TrolleyController {
  constructor(private serviceTrolley: TrollyService) {}

  async id(
    id_user: string,
    id_trolly: number,
    id_product: number
  ): Promise<BoxProduct[]> {
    const trolly = await db.trolly.id(id_user)
    return db.trolly.findBox(id_trolly)
  }

  async productId(event: H3Event): Promise<BoxProduct[]> {
    const { session, id } = await sessionId(event)
    return db.trolly.productId({
      id_trolly: session.id_trolly,
      id_product: id,
      id_user: session.id,
    })
  }

  async all(event: H3Event): Promise<TollyProps[]> {
    const { session } = await sessionId(event)
    return this.serviceTrolley.all({
      id_trolley: session.id_trolly,
      id_user: session.id,
    })
  }

  async _all(event: H3Event): Promise<TrollyAllService> {
    const { session } = await sessionId(event)
    return this.serviceTrolley._all({
      id_trolley: session.id_trolly,
      id_user: session.id,
    })
  }

  async notify(event: H3Event): Promise<number> {
    const { session } = await getUserSession(event)
    return this.serviceTrolley.notify(session.id_trolly)
  }

  async push(event: H3Event): Promise<Box> {
    // await this.serviceTrolley.check(id_trolly)
    let data = await readBody(event)
    data = this.serviceTrolley.sanitize(data)
    return this.serviceTrolley.push(data)
  }

  async delete(
    id_box: number,
    id_product: number,
    id_trolly: number
  ): Promise<Box> {
    return this.serviceTrolley.delete({ id_box, id_product, id_trolly })
  }
}

export const trolleyController = new TrolleyController(trollyService)
