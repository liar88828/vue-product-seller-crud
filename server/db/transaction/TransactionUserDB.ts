import type { CreateTransaction } from "~/types/transaction"
import type { IdUserTrans } from "~/types/product/findId"
import type { DataMarket, WantBuyProps } from "~/types/market/order"
import { prisma } from "~/server/config/prisma"
import type  { Transaction } from "@prisma/client";
import type { GetBoxProps, GetPackageReturn } from "~/types/transaction/trolly";

export class TransactionUserDB {
  // async user(id_user: string) {
  //   return prisma.transaction.findMany({
  //     where: {
  //       //id,
  //       id_buyer: id_user,
  //     },
  //   })
  // }


  loopBox(
	id_trans: number,
	data: GetBoxProps[],
	id_trolly: number
  ): GetPackageReturn[] {
	return data.map((d) => ({
	  id_product: d.id_product,
	  price: d.price,
	  qty: d.qty,
	  transactionId: id_trans,
	  id_transaction: id_trans,
	  id_trolly: id_trolly,
	}))
  }

  async wantBuy({ data: { box, data }, id_user, id_trolly }: WantBuyProps) {
	await this.check(id_user)
	const transaction = await prisma.transaction.create({
	  data,
	})

	const packages = await prisma.box.createMany({
	  data: this.loopBox(transaction.id, box, id_trolly),
	})
	return {
	  packages,
	  transaction,
	}
  }

  async id({ id, id_buyer }: IdUserTrans) {
	return prisma.transaction.findUnique({
	  where: { id, id_buyer },
	})
  }

  async all(id_buyer: string): Promise<Transaction[]> {
	return prisma.transaction.findMany({
	  where: { id_buyer },
	})
  }

  async idDetail({ id, id_buyer }: IdUserTrans): Promise<DataMarket> {
	const data = await prisma.transaction.findUnique({
	  where: { id, id_buyer },
	  include: {
		userBuy: true,
		Market: true,
		Box: {
		  include: { Product: true },
		},
	  },
	})
	if (!data) {
	  throw createError({
		statusCode: 404,
		statusMessage: "Order not found",
	  })
	}
	return data
  }

  async check(id_buyer: string) {
	const found = await prisma.transaction.findMany({
	  where: { id_buyer },
	  select: { id: true },
	})
	return found
	// if (!found) {
	//   const create = await prisma.transaction.create({
	//     data: { id_buyer },
	//   })
	//   return create
	// }
  }

  async pay({ id, id_buyer }: IdUserTrans) {
	return prisma.transaction.update({
	  where: { id, id_buyer },
	  data: {
		id_status: "Accepted",
	  },
	})
  }

  async create(data: CreateTransaction) {
	return prisma.transaction.create({ data })
  }

  async delete({ id, id_buyer }: IdUserTrans) {
	return prisma.transaction.findMany({
	  where: { id, id_buyer },
	})
  }
}
