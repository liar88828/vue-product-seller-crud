import { prisma } from "~/server/config/prisma";
import { HomeServices } from "~/server/services/home";
import type { Product } from "@prisma/client";

export class HomeController {
  constructor(protected service: HomeServices) {
  }

  // const trending = await db.product.findTest()
  // const newProduct = await db.product.findTest()
  // const bestProduct = await db.product.findTest()
  // return await service.home.index()
  async trending(): Promise<Product[]> {
  return db.product.findTest()
  }

  async newProduct(): Promise<Product[]> {
  return db.product.findTest()

  }

  async bestProduct(): Promise<Product[]> {
  return db.product.findTest()

  }
  // async index(): Promise<HomeApi> {
	// return {
	//   newProduct: await db.product.findTest(),
	//   bestProduct: await db.product.findTest(),
	//   trending: await db.product.findTest(),
  //
	// }
  //
  // }

  async trolly(
	id_user: string,
	id_trolly: number
  ) {
	return prisma.trolly.findUnique({
	  where: {
		id: id_trolly,
		User: {
		  id: id_user
		}
	  }, include: {
		Box: {
		  include: {
			Product: true
		  }
		}
	  }
	})
  }
}