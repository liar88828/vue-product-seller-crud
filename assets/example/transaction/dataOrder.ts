import { userProfile, userProfile2 } from "../user/dataUser"
import { dataCompany } from "../user/dataCompany"
import { dataProducts } from "../product/dataProduct"
import type { OrderProps } from "~/types/product/order"
import type { DataCompany } from "~/types/market/confirm"

const dataHistory: DataCompany = {
  id: 3,
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  discount: 20,
  status: "Delivered",
  promoCode: "FASDFSD5756",
  dateBuy: new Date(),
  expired: new Date(),
}

const dataHistory2: OrderProps = {
  id: "3",
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Cancelled",
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
}
const dataOrder: OrderProps = {
  id: "1",
  status: "Pending",
  trolly: dataProducts,
  userBuy: userProfile,
  Market: dataCompany,
  dateBuy: new Date(),
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
}

const dataOrder2: OrderProps = {
  id: "3",
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Waiting",
  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
}
export const dataOrders = [dataOrder, dataOrder2, dataHistory, dataHistory2]
