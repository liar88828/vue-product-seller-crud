import type { Transaction } from "@prisma/client"

export type CreateTransaction = Omit<
  Transaction,
  "id" | "createdAt" | "updatedAt" | "discount" | "promoCode" | "dateExp"
>

export type CheckoutTrolley = {
  id_trolley: number
  // id_product: number
  id_market: number
  qty: number
  price: number
}
export type TransactionCheckout = {
  transaction: CreateTransaction
  trolley: CheckoutTrolley[]
}

export type TransactionCheckoutClient = {
  transaction: Omit<CreateTransaction, "id_market" | "status">
  trolley: CheckoutTrolley[]
}
