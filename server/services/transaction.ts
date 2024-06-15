import type { IdTransaction } from "~/types/product/findId"
import type {
  GetBoxProps,
  GetBoxReturn,
  GetPackageProps,
  GetPackageReturn,
} from "~/types/transaction/GetBox"

class LoopTransactionServices {
  getBox(id_trolly: number, data: GetBoxProps[]): GetBoxReturn[] {
    return data.map((d) => ({
      qty: d.qty,
      price: d.price,
      id_product: d.id_product,
      trollyId: id_trolly,
      id_trolly: id_trolly,
    }))
  }
  getPackage(id_trans: number, data: GetPackageProps[]): GetPackageReturn[] {
    //@ts-expect-error
    return data.map((d) => ({
      qty: d.qty,
      price: d.price,
      transactionId: id_trans,
      id_product: d.id_product,
      // id_trolly: id_trolly,
    }))
  }
}

export class TransactionServices extends LoopTransactionServices {
  findOrder({ id_user, id }: IdTransaction) {
    prisma.order.findMany({
      where: { id_userBuy: id_user, id: id },
    })
  }
  async history(id: IdTransaction) {
    return prisma.transaction.findMany({
      where: {
        id_user: id.id_user,
        id: id.id,
      },
    })
  }

  async pay(id: IdTransaction) {
    return prisma.transaction.findMany({
      where: {
        id_user: id.id_user,
        id: id.id,
      },
    })
  }
}
