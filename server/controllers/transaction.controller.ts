import type { H3Event } from "h3"
import type { Transaction } from "@prisma/client"

export class TransactionController {
  constructor(
    private serviceTransaction: ITransactionService, // private market: TransactionMarketCon, // private user: TransactionUserCon
    private serviceHistory: IHistoryService // private market: TransactionMarketCon, // private user: TransactionUserCon
  ) {}

  async id(id: number) {
    return this.serviceTransaction.id(id)
  }

  async createTrans(data: Transaction) {
    return db.trans.create(data)
  }

  // change in class MarketOwner
  // async confirmTrans(data: Transaction) {
  //   return db.transaction.confirm(data)
  // }
  async allTrans() {
    return db.trans.all()
  }

  async allTransDetail(id_market: number) {
    return db.trans.id(id_market)
  }

  async detailTrans(id: number) {
    return db.trans.id(id)
  }

  // async userAllProduct(id_user: string) {
  //   const transaction = await prisma.user.findUnique({
  //     where: { id: id_user },
  //     select: {
  //       Transaction: {
  //         include: {
  //           Box: {
  //             include: {
  //               Product: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   })
  //   return transaction
  // }

  async userAll(event: H3Event): Promise<Transaction[]> {
    const { session } = await getUserSession(event)
    return db.trans.user.all(session.id)
  }

  async userDelete(event: H3Event) {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    return db.trans.user.delete({ id_buyer: session.id, id: Number(id) })
  }

  async marketDetail(event: H3Event): Promise<HistoryServer> {
    const { id_market, id_transaction } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceHistory.detailId({
      id_market: Number(id_market),
      id: Number(id_transaction),
    })
  }

  async marketAll(event: H3Event): Promise<HistoryServer[]> {
    const { session } = await getUserSession(event)
    return this.serviceHistory.marketAll(session)
  }
  async marketAllProduct(event: H3Event) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const { id } = getRouterParams(event)

      return this.serviceTransaction.allProduct(Number(id), session.id)
    })
  }

  async apply(event: H3Event) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)

      // return this.serviceTransaction.create()
    })
  }
}

export const transactionController = new TransactionController(
  transactionService,
  historyService
  // transactionMarketController,
  // transactionUserController
)

export type ITransactionController = TransactionController
