import type { Transaction } from "@prisma/client"

export type IdValid = {
  id: number
  id_user: string
}

export type IdUserTrans = Pick<Transaction, "id" | "id_buyer">
export type IdMarketTrans = Pick<Transaction, "id" | "id_market">
// export type StatusTrans = Pick<Transaction, "id" | "id_status">

export type ProductMarketId = {
  id_market: number
  id_product: number
}
export type IdProduct = {
  id: number
  id_user: string
  id_market: number
}

export type FindIdProductCurrentMarket = {
  id: number
  id_market: number
  id_user: string
}

export type IdProductOwner = {
  id_market: number
  id_user: string
}
