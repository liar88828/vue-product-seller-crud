import type { IdLike } from "~/types/user/like"
import type { Like } from "@prisma/client";

export class UserLikeController {
  async all(id: number): Promise<Like[]> {
	return db.like.all(id)
  }

  async id(id: number,id_product:number): Promise<Like[]> {
	return db.like.id(id,id_product)
  }


  async add(id: IdLike): Promise<Like> {
	return db.like.add(id)
  }

  async unLike(id: number,id_product:number): Promise<Like> {
	return db.like.unLike(id,id_product)
  }


}
