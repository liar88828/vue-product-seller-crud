import { userProfile, userProfile2 } from "../user/dataUser"
import { dataCompany } from "../user/dataCompany"
import { dataProducts } from "../product/dataProduct"
import type { TransClient, TransServer } from "~/types/market/order"

const dataHistory: TransServer = {
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

const dataHistory2: TransServer = {
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

const dataOrder2: TransServer = {
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
export const dataOrders: TransServer[] = [
  // dataOrder,
  dataOrder2,
  // dataHistory,
  dataHistory2,
]

const dataOrder: TransClient = {
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
  Market: {
    since: new Date().toDateString(),
    name: "PT. Orak Genah",
    industry: "Sustainable Clothing Manufacturing",
    address: "Semarang, Central Java, Indonesia",
    description:
      "PT. Orak Genah is a clothing manufacturer based in Semarang, Central Java, Indonesia, specializing in creating high-quality, eco-friendly apparel. We use organic and recycled materials whenever possible, and our production processes are designed to minimize environmental impact.",
    mission:
      "To provide stylish and functional clothing made with sustainable materials, while promoting fair labor practices and minimizing our environmental footprint. We are dedicated to creating beautiful garments that are good for the planet and the people who make them.",
    vision:
      "Our vision is to be a leading sustainable clothing manufacturer, setting new standards for ethical and environmentally conscious production. We aim to inspire and empower our customers to make more sustainable choices in their fashion purchases.",
    history:
      "PT. Orak Genah was founded in 2020 with a passion for sustainable fashion. We are a team of dedicated individuals who believe in creating beautiful clothing that is good for the planet and the people who make it. We partner with local artisans and use traditional techniques whenever possible to preserve cultural heritage.",

    id: 1,
    id_contact: 1,
    id_socialMedia: 1,
    id_follow: 1,
  },
  discount: 20,
  promoCode: "FASDFSD5756",
  id_market: 1,
  createdAt: new Date().toDateString(),
  dateExp: new Date().toDateString(),
  drop_address: "semarang",
  id_buyer: "1",
  id_status: "Pending",
  updatedAt: new Date().toDateString(),
  status: "Pending",
}

export const dataOrdersClient: TransClient[] = [dataOrder]
