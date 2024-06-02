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
}
const dataHistory2: OrderProps = {
  id: "3",
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Cancelled",
}
const dataOrder: OrderProps = {
  id: "1",
  status: "Pending",
  trolly: dataProducts,
  userBuy: userProfile,
  Market: dataCompany,
  dateBuy: new Date(),
}

const dataOrder2: OrderProps = {
  id: "3",
  trolly: dataProducts,
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Waiting",
}
export const dataOrders = [dataOrder, dataOrder2, dataHistory, dataHistory2]
