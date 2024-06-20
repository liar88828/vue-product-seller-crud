import { prisma, } from "~/server/config/prisma"
import type { IdLike } from "~/types/user/like"
import type { Like } from "@prisma/client";

export class LikeDB {
  all(id: number): Promise<Like[]> {
	return prisma.like.findMany({
	  where: { id },
	})
  }
  id(id: number, id_product: number): Promise<Like[]> {
	return prisma.like.findMany({
	  where: { id ,id_product},
	})
  }


  add({ id_product, id_user }: IdLike): Promise<Like> {
	return prisma.like.create({
	  data: {
		id_product,
		id_user,
	  },
	})
  }

  unLike(id: number, id_product: number): Promise<Like> {
	return prisma.like.delete({
	  where: {
		id,
		id_product,
	  },
	})
  }
}
