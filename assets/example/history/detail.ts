import { exampleProduct } from "../home/product"

export const exampleHistoryDetail: TransactionConfirmClient = {
  status: "Cancelled",
  id: 3,
  Trolley: [
    {
      id: 1,
      id_transaction: 1,
      qty: 1,
      Product: exampleProduct,
      id_product: exampleProduct.id,
      id_user: "1",
      mark: false,
    },
  ],
  Market: dataCompany,
  discount: 20,
  promoCode: "FASDFSD5756",
  id_market: 1,
  createdAt: new Date(),
  dateExp: new Date(),
  drop_address: "semarang",
  id_buyer: "1",
  updatedAt: new Date(),
}
