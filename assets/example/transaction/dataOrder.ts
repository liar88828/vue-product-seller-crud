import { userProfile, userProfile2 } from "../user/dataUser"
import { dataCompany } from "../user/dataCompany"
import { dataProducts } from "../product/dataProduct"
import type { OrderProps } from "~/types/product/order"

const dataHistory: OrderProps = {
  id: "3",
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Delivered",

  discount: 20,
  expired: new Date(),
  promoCode: "FASDFSD5756",
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
