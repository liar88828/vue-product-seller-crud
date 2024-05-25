import type { Product, User } from "@prisma/client"
import { dataProduct, dataProduct2 } from "./dataProduct"
import { userProfile, userProfile2 } from "./dataUser"

export type OrderProps = {
  id: string
  trolly: Product[]
  userBuy: User
  Market: User
  dateBuy: Date
}

export const dataOrder: OrderProps = {
  id: "1",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile,
  Market: userProfile2,
  dateBuy: new Date(),
}

export const dataOrder2 = {
  id: "3",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile,
  Market: userProfile2,
  dateBuy: new Date(),
}
export const dataOrders = [dataOrder, dataOrder2]
