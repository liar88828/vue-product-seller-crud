import type { Product, User } from "@prisma/client"
import { dataProduct, dataProduct2 } from "./dataProduct"
import { userProfile, userProfile2 } from "./dataUser"
import type { ProfileCompany } from "~/types/profile"
import { dataCompany } from "./dataCompany"

export type OrderProps = {
  id: string
  status: string
  trolly: Product[]
  userBuy: User
  Market: ProfileCompany
  dateBuy: Date
}

export const dataOrder: OrderProps = {
  id: "1",
  status: "Pending",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile,
  Market: dataCompany,
  dateBuy: new Date(),
}

export const dataOrder2: OrderProps = {
  id: "3",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Waiting",
}
export const dataOrders = [dataOrder, dataOrder2]
