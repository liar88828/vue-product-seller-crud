import type { Product } from "@prisma/client"
import type { ProductDetailServer, ProductItem } from "~/types/product/item"
import { dataDesc, dataDesc2, dataDesc3 } from "./desc"
import { dataTech, dataTech2, dataTech3 } from "./tech"
import { dataSpec, dataSpec2, dataSpec3 } from "./spec"
import { dataImage } from "./image"
import { userProfile } from "../user/dataUser"

export const dataProduct2: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  type: "13",
  id: 123,
  description: "i dont know",
  // id_user: "112",
  id_market: 1,
}
const dataProduct3: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  type: "13",
  id: 213,
  description: "i dont know",
  // id_user: "112",
  id_market: 1,
}
const dataProduct1: Product = {
  image: "https://picsum.photos/200",
  name: "Sneakers",
  price: 120,
  stock: 30,
  brand: "Nike",
  type: "11",
  id: 1001,
  description: "Comfortable running shoes",
  // id_user: "110",
  id_market: 1,
}

const dataProductDetail: ProductItem = {
  dataImage: dataImage,

  name: "High-Quality Noise-Cancelling Headphones",
  description:
    "Experience the ultimate in audio immersion with our premium noise-cancelling headphones. Crafted with the finest materials and advanced technology, these headphones deliver unparalleled sound quality and comfort for the discerning listener.",
  brand: "Apple",
  id: 1,
  image: "https://picsum.photos/220",
  price: 199.99,
  stock: 10,
  type: "1",
  // id_user: "1",
  desc: dataDesc,
  desc_tech: dataTech,
  desc_spec: dataSpec,
  id_market: 1,
}

const dataProductDetail2: ProductItem = {
  dataImage: dataImage,

  brand: "Hart Hagerty",
  description:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  image: "https://picsum.photos/134",

  name: "Shoes",
  price: 123,
  stock: 10,
  id: 3423,
  type: "1",
  // id_user: "1",
  desc: dataDesc2,
  desc_tech: dataTech2,
  desc_spec: dataSpec2,
  id_market: 1,
}

const dataProductDetail3: ProductItem = {
  dataImage: dataImage,
  brand: "Hart Hagerty",
  description:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  image: "https://picsum.photos/234",
  name: "Shoes",
  price: 123,
  stock: 10,
  id: 2,
  type: "1",
  // id_user: "1",
  desc: dataDesc3,
  desc_tech: dataTech3,
  desc_spec: dataSpec3,
  id_market: 1,
}

export const dataProductDetails: ProductItem[] = [
  dataProductDetail,
  dataProductDetail2,
  dataProductDetail3,
]

export const dataProducts: Product[] = [
  dataProduct1,
  dataProduct2,
  dataProduct3,
  dataProductDetail,
  dataProductDetail2,
  dataProductDetail3,
]

export const dataProductDetailServer: ProductDetailServer = {
  detail: {
    id: 22,
    name: "Wesley",
    description: "Devin",
    image: "Dorothy",
    brand: "Travis",
    stock: 10,
    price: 37,
    // id_user: "Gene",
    type: "Maude",
    id_market: 94,
    Desc: [{ id_product: 1, text: "Wesley" }],
    Img: [
      {
        id: 1,
        id_product: 1,
        img: "https://picsum.photos/220",
        title: "Travis",
      },
      {
        id: 3,
        id_product: 3,
        img: "https://picsum.photos/210",
        title: "Travis",
      },
    ],
    Spec: [
      {
        id_product: 1,
        title: "Devin",
        List: [{ specTitle: "Wesley", text: "Devin" }],
      },
    ],
    Tech: [{ id_product: 1, title: "Dorothy", text: "Travis" }],
  },

  // market: {
  //   id: 31,
  //   name: "Adam",
  //   industry: "Eugenia",
  //   address: "Peter",
  //   description: "Elsie",
  //   mission: "Lou",
  //   vision: "Bernice",
  //   history: "Leona",
  //   since: new Date(),
  //   id_contact: 94,
  //   id_socialMedia: 74,
  //   id_follow: 57,
  // },
  previews: [
    {
      id: 1,
      id_product: 1,
      id_user: "Wesley",
      text: "Devin",
      time: new Date(),
      User: userProfile,
    },
  ],
  // relateds: [
  //   {
  //     id: 2,
  //     name: "Product C",
  //     description: "Description for Product C",
  //     image: "https://picsum.photos/22",
  //     brand: "Brand Y",
  //     stock: 25,
  //     price: 49.99,
  //     id_user: "2",
  //     type: "type002",
  //     id_market: 3,
  //   },
  // ],
  // static: {
  //   follow: 12312,
  //   product: 123423,
  //   since: new Date(),
  //   response: "100%",
  // },
}
