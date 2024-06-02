import type {
  GetBoxProps,
  GetBoxReturn,
  GetPackageProps,
  GetPackageReturn,
} from "~/types/transaction/GetBox"

export class BuyController {
  getBox(id_trolly: string, data: GetBoxProps[]): GetBoxReturn[] {
    return data.map((d) => ({
      amount: d.amount,
      price: d.price,
      productId: d.productId,
      trollyId: id_trolly,
    }))
  }

  getPackage(id_trans: string, data: GetPackageProps[]): GetPackageReturn[] {
    return data.map((d) => ({
      amount: d.amount,
      price: d.price,
      transactionId: id_trans,
      productId: d.productId,
    }))
  }
}
