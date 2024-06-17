import type { Transaction } from "@prisma/client"

export type IdValid = {
  id: number
  id_user: string
}

export type IdUserTrans = Pick<Transaction, "id" | "id_buyer">
export type IdMarketTrans = Pick<Transaction, "id" | "id_market">
export type StatusTrans = Pick<Transaction, "id" | "id_status">

export type MarketIdProductId = {
  id_market: number
  id_product: number
}
export type IdProduct = {
  id_user: string
  id_market: number
}
