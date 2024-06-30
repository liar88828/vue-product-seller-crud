import { TrollyService } from "../../services/user/trolly"
import type { Box } from "@prisma/client"
import type { BoxProduct, TrollyAllService } from "~/types/transaction/trolly"
import type { H3Event } from "h3"
import { SessionIdClass } from "./SessionIdClass"

export class TrollyController extends SessionIdClass {
  constructor(protected event: H3Event) {
    super(event)
  }
  protected service = new TrollyService()
  async id(
    id_user: string,
    id_trolly: number,
    id_product: number
  ): Promise<BoxProduct[]> {
    const trolly = await db.trolly.id(id_user)
    return db.trolly.findBox(id_trolly)
  }

  async productId(): Promise<BoxProduct[]> {
    const { session, id } = await this.sessionId()
    return db.trolly.productId({
      id_trolly: session.id_trolly,
      id_product: id,
      id_user: session.id,
    })
  }

  async all(): Promise<TollyProps[]> {
    const { session } = await this.sessionId()
    return this.service.all({
      id_trolly: session.id_trolly,
      id_user: session.id,
    })
  }

  async _all(): Promise<TrollyAllService> {
    const { session } = await this.sessionId()
    return this.service._all({
      id_trolly: session.id_trolly,
      id_user: session.id,
    })
  }

  async notify(): Promise<number> {
    const { session } = await getUserSession(this.event)
    return this.service.notify(session.id_trolly)
  }

  async push(): Promise<Box> {
    // await this.service.check(id_trolly)
    let data = await readBody(this.event)
    data = this.service.sanitize(data)
    return this.service.push(data)
  }

  async delete(
    id_box: number,
    id_product: number,
    id_trolly: number
  ): Promise<Box> {
    return this.service.delete({ id_box, id_product, id_trolly })
  }
}
