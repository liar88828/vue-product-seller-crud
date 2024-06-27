import type { Transaction } from "@prisma/client"
import type { TransactionServices } from "~/server/services/transaction"
import type { PayProps, TBoxProduct, TransProps } from "~/types/market/order"
import type { H3Event } from "h3"

import { MarketServices } from "~/server/services/market/market"
import { prisma } from "~/server/config/prisma"

export class OrderUserController {

  constructor(
	protected serviceMarket: MarketServices
  ) {
  }

  async detail(event: H3Event) {
	const { id } = getRouterParams(event)
	const { session } = await getUserSession(event)
	return db.trans.user.id({ id_buyer: session.id, id: Number(id) })
  }


  async all(event: H3Event): Promise<TransProps[]> {
	const { session } = await getUserSession(event)
	return prisma.transaction
	.findMany({
	  where: {
		id_market: session.id_market,
	  },
	  include: {
		userBuy: true,
		Market: true,
		Box: {
		  include: {
			Product: true,
		  },
		},
	  },
	  take: 100,
	})
	.then((data) => {
	  return data.map((d) => {
		d.userBuy.OTP = ""
		d.userBuy.password = ""
		const Box: TransProps['Box'] = d.Box.map((item) => {
		  const { Product, ...ress } = item

		  return {
			Product: Product,
			...ress,
		  } satisfies TBoxProduct
		})

		return {
		  ...d,
		  userBuy: d.userBuy,
		  Market: d.Market,
		  Box,
		}satisfies TransProps
	  })
	})
  }


  async payDetail(event: H3Event): Promise<PayProps> {

	const { session } = await getUserSession(event)
	const { id } = getRouterParams(event)
	return {
	  market: await this.serviceMarket.findFull(Number(session.id_market)),
	  order: await db.trans.user.idDetail({
		id: Number(id),
		id_buyer: session.id,
	  }),
	}
  }

  async pay(event: H3Event) {
	const { id } = getRouterParams(event)
	const { session } = await getUserSession(event)
	return db.trans.user.pay({ id_buyer: session.id, id: Number(id) })
  }


}

export class TransactionUserCon {
  protected serviceMarket = new MarketServices()

  history = new HistoryController().user
  order = new OrderUserController(this.serviceMarket)

  constructor(protected serviceTrans: TransactionServices,) {
  }


  async allProduct(id_user: string) {
	const transaction = await prisma.user.findUnique({
	  where: { id: id_user },
	  select: {
		Transaction: {
		  include: {
			Box: {
			  include: {
				Product: true,
			  },
			},
		  },
		},
	  },
	})
	return transaction
  }


  async all(event: H3Event): Promise<Transaction[]> {
	const { session } = await getUserSession(event)
	return db.trans.user.all(session.id)
  }

  async delete(event: H3Event) {
	const { session } = await getUserSession(event)
	const { id } = getRouterParams(event)
	return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }
}
