import { prisma } from "~/server/config/prisma"
import type { H3Event } from "h3"

export class HistoryUserController {
  async all(event: H3Event): Promise<HistoryProps[]> {
	const { session } = await getUserSession(event)
	return prisma.transaction
	.findMany({
	  where: {
		id_buyer: session.id,
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
		const Box: HistoryProps['Box'] = d.Box.map((item) => {
		  const { Product, ...ress } = item

		  return {
			...Product,
			...ress,
		  } satisfies HBoxProducts
		})

		return {
		  ...d,
		  userBuy: d.userBuy,
		  Market: d.Market,
		  Box,
		}
	  })
	})
  }
}
