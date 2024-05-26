import { dataCompany } from "./dataCompany"
import { dataOrder, type OrderProps } from "./dataOrder"
import { dataProduct, dataProduct2 } from "./dataProduct"
import { userProfile2 } from "./dataUser"
export const dataHistory: OrderProps = {
  id: "3",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Delivered",
}
export const dataHistory2: OrderProps = {
  id: "3",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile2,
  Market: dataCompany,
  dateBuy: new Date(),
  status: "Cancelled",
}
export const dataHistoris: OrderProps[] = [dataHistory, dataHistory2]
