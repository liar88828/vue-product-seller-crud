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
      id_product: d.id_product,
      trollyId: id_trolly,
      id_trolly: id_trolly,
    }))
  }
  getPackage(id_trans: string, data: GetPackageProps[]): GetPackageReturn[] {
    //@ts-expect-error
    return data.map((d) => ({
      amount: d.amount,
      price: d.price,
      transactionId: id_trans,
      id_product: d.id_product,
      // id_trolly: id_trolly,
    }))
  }
}
