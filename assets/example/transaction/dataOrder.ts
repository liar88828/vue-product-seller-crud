import { userProfile, userProfile2 } from "../user/dataUser"
import { dataCompany } from "../user/dataCompany"
import { dataProducts } from "../product/dataProduct"
import type { TransProps } from "~/types/market/order"

const dataHistory: TransProps = {
  id: 3,
  Box: [
	{
	  id: 1,
	  id_product: dataProducts[1].id,
	  id_transaction: 1,
	  id_trolly: 1,
	  price: 100,
	  qty: 1,
	  Product: dataProducts[1],
	},
  ],
  userBuy: userProfile2,
  Market: dataCompany,
  discount: 20,
  status: "Delivered",
  promoCode: "FASDFSD5756",
  id_market: 1,
  createdAt: new Date(),
  dateExp: new Date(),
  drop_address: "semarang",
  id_buyer: "1",
  id_status: "Pending",
  updatedAt: new Date(),
}

const dataHistory2: TransProps = {
  status: "Cancelled",
  id: 3,
  Box: [
	{
	  id: 1,
	  id_product: dataProducts[1].id,
	  id_transaction: 1,
	  id_trolly: 1,
	  price: 100,
	  qty: 1,
	  Product: dataProducts[1],
	},
  ],
  userBuy: userProfile2,
  Market: dataCompany,
  discount: 20,
  promoCode: "FASDFSD5756",
  id_market: 1,
  createdAt: new Date(),
  dateExp: new Date(),
  drop_address: "semarang",
  id_buyer: "1",
  id_status: "Cancelled",
  updatedAt: new Date(),
}

const dataOrder: TransProps = {
  id: 1,
  Box: [
	{
	  id: 1,
	  id_product: dataProducts[1].id,
	  id_transaction: 1,
	  id_trolly: 1,
	  price: 100,
	  qty: 1,
	  Product: dataProducts[1],
	},
  ],
  userBuy: userProfile,
  Market: dataCompany,
  discount: 20,
  promoCode: "FASDFSD5756",
  id_market: 1,
  createdAt: new Date(),
  dateExp: new Date(),
  drop_address: "semarang",
  id_buyer: "1",
  id_status: "Pending",
  updatedAt: new Date(),
  status: "Pending",
}

const dataOrder2: TransProps = {
  id: 3,
  userBuy: userProfile2,
  Market: dataCompany,
  status: "Accepted",
  discount: 20,
  promoCode: "FASDFSD5756",
  id_market: 1,
  dateExp: new Date(),
  drop_address: "semarang",
  id_buyer: "1",
  id_status: "Pending",
  updatedAt: new Date(),
  createdAt: new Date(),
  Box: [
	{
	  id: 1,
	  id_product: dataProducts[0].id,
	  id_transaction: 1,
	  id_trolly: 1,
	  price: 100,
	  qty: 1,
	  Product: dataProducts[0],
	},
  ],
}
export const dataOrders: TransProps[] = [
  dataOrder,
  dataOrder2,
  // dataHistory,
  dataHistory2,
]
