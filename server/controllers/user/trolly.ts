import { TrollyService } from "../../services/user/trolly"
import type { Box } from "@prisma/client"
import type { BoxCreate, BoxProduct, TrollyAllService, } from "~/types/transaction/trolly"

export class TrollyController {
  constructor(protected service: TrollyService) {
  }

  async push(id_trolly: number, data: BoxCreate): Promise<Box> {
	await this.service.check(id_trolly)
	data = this.service.sanitize(data)
	return this.service.push(data)
  }

  async id(
	id_user: string,
	id_trolly: number,
	id_product: number
  ): Promise<BoxProduct[]> {
	const trolly = await db.trolly.id(id_user)
	return db.trolly.findBox(id_trolly)
  }

  async productId(
	id_user: string,
	id_trolly: number | null, // may be change
	id_product: string
  ): Promise<BoxProduct[]> {
	return db.trolly.productId(id_trolly as number, Number(id_product), id_user)
  }

  async all(
	id_user: string,
	id_trolly: number | null | string,// may be change
  ): Promise<TrollyAllService> {
	return this.service.all({ id_trolly: Number(id_trolly), id_user })
  }

  async delete(
	id_box: number,
	id_product: number,
	id_trolly: number
  ): Promise<Box> {
	return this.service.delete({ id_box, id_product, id_trolly })
  }
}
