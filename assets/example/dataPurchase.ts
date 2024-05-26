import type { Purchase } from "~/types/product/purchase"
import { userProfile } from "./dataUser"
import { dataProduct, dataProduct2 } from "./dataProduct"

export const dataPurchase: Purchase = {
  id: "1",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile,
  dateBuy: new Date(),
}
export const dataPurchase2: Purchase = {
  id: "4",
  trolly: [dataProduct2, dataProduct],
  userBuy: userProfile,
  dateBuy: new Date(),
}
export const dataPurchases: Purchase[] = [dataPurchase, dataPurchase2]
