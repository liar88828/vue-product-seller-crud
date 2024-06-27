import { prisma } from "~/server/config/prisma"
import type { IdLike } from "~/types/user/like"
import type { Like } from "@prisma/client"

export class LikeDB {
  all(id: number): Promise<Like[]> {
	return prisma.like.findMany({
	  where: { id },
	})
  }

  id({ id_product, id }: IdLike): Promise<Like[]> {
	return prisma.likeBox.findMany({
	  where: { id_like: id, id_product },
	})
  }

  add({ id_product, id }: IdLike): Promise<Like> {
	return prisma.likeBox.create({
	  data: { id_product: id_product, id },
	})
  }

  unLike({ id_product, id }: IdLike): Promise<Like> {
	return prisma.likeBox.delete({
	  where: {
		id,
		id_product,
		// likeId: id,
	  },
	})
  }
}
