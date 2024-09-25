export class TransactionSanitize {
  sanitize(data: CreateTransaction): CreateTransaction {
    return {
      dateExp: data.dateExp,
      discount: data.discount,
      drop_address: data.drop_address,
      id_buyer: data.id_buyer,
      id_market: data.id_market,
      // id_status: data.id_status,
      promoCode: data.promoCode,
      status: data.status,
    }
  }
  getBox(id_trolly: number, data: GetBoxProps[]): GetBoxReturn[] {
    return data.map((d) => ({
      // id_product: d.id_product,
      id_transaction: id_trolly,
      id_trolley: id_trolly,
      price: d.price,
      qty: d.qty,
      trollyId: id_trolly,
    }))
  }
}
export const transactionSanitize = new TransactionSanitize()
export type ITransactionSanitize = TransactionSanitize
