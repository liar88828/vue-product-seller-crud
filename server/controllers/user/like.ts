import type { Like } from "@prisma/client";
import type { H3Event } from "h3"

export class UserLikeController {
  async all(id: number): Promise<Like[]> {
	return db.like.all(id)
  }

  async id(event: H3Event): Promise<Like[]> {
	const { session } = await getUserSession(event)
	const { id } = getRouterParams(event)
	return db.like.id({ id: session.id_like, id_product: Number(id) })
  }


  async add(event: H3Event): Promise<Like> {
	const { session } = await getUserSession(event)
	const { id } = getRouterParams(event)
	return db.like.add({ id: session.id_like, id_product: Number(id) }
	)
  }

  async unLike(event: H3Event): Promise<Like> {
	const { session } = await getUserSession(event)
	const { id } = getRouterParams(event)
	return db.like.unLike({ id: session.id_like, id_product: Number(id) })
  }


}
