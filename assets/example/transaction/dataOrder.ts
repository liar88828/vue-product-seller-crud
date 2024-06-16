import { userProfile, userProfile2 } from "../user/dataUser"
import { dataCompany } from "../user/dataCompany"
import { dataProducts } from "../product/dataProduct"
import type { OrderProps } from "~/types/market/order"

const dataHistory: OrderProps = {
  id: 3,
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  discount: 20,
  status: "Delivered",
  promoCode: "FASDFSD5756",
  dateBuy: new Date(),
  expired: new Date(),
  id_market: 1,
  id_userBuy: "2",
}

const dataHistory2: OrderProps = {
  id: 3,
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Cancelled",
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
  id_market: 1,
  id_userBuy: "2",
}
const dataOrder: OrderProps = {
  id: 1,
  status: "Pending",
  trolly: dataProducts,
  userBuy: userProfile,
  Market: dataCompany,
  dateBuy: new Date(),
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
  id_market: 1,
  id_userBuy: "2",
}

const dataOrder2: OrderProps = {
  id: 3,
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Accepted",
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
  id_market: 1,
  id_userBuy: "2",
}
export const dataOrders: OrderProps[] = [
  dataOrder,
  dataOrder2,
  // dataHistory,
  dataHistory2,
]
