import { TrollyService } from "../../services/user/trolly"
import type { Box } from "@prisma/client"
import type { BoxProduct, TrollyAllService } from "~/types/transaction/trolly"
import type { H3Event } from "h3"

export class TrollyController {
  protected service = new TrollyService()

  async id(
	id_user: string,
	id_trolly: number,
	id_product: number
  ): Promise<BoxProduct[]> {
	const trolly = await db.trolly.id(id_user)
	return db.trolly.findBox(id_trolly)
  }

  async productId(event: H3Event): Promise<BoxProduct[]> {
	const { id } = getRouterParams(event)
	const { session } = await getUserSession(event)

	return db.trolly.productId(
	  {
		id_trolly: session.id_trolly,
		id_product: Number(id),
		id_user: session.id
	  })
  }

  async all(event: H3Event): Promise<TollyProps[]> {
	const { session } = await getUserSession(event)
	return this.service.all({
	  id_trolly: session.id_trolly,
	  id_user: session.id,
	})
  }

  async _all(event: H3Event): Promise<TrollyAllService> {
	const { session } = await getUserSession(event)
	return this.service._all({
	  id_trolly: session.id_trolly,
	  id_user: session.id,
	})
  }

  async notify(event: H3Event): Promise<number> {
	const { session } = await getUserSession(event)
	return this.service.notify(session.id_trolly)
  }

  async push(event: H3Event): Promise<Box> {
	// await this.service.check(id_trolly)
	let data = await readBody(event)
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
