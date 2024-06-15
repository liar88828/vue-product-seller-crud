import type { Order, Product, User } from "@prisma/client"
import type { ProfileMarket } from "./ProfileCompany"
import type { Status } from "../globals/Status"
import type { IfEquals } from "../globals/generic"

export type OrderProps = {
  id: string
  discount: number
  status: Status
  promoCode: string
  dateBuy: Date
  expired: Date
  trolly: Product[]
  //
  id_userBuy: string
  userBuy: User

  id_company: string
  Market: ProfileMarket
  // Market: DataCompany
}

type test = IfEquals<OrderProps, Order, "save", "different">
const Test: test = "different"
