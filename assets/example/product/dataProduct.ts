import type { Product } from "@prisma/client"
import type { ProductItem } from "~/types/product/item"
import { dataDesc, dataDesc2, dataDesc3 } from "./desc"
import { dataTech, dataTech2, dataTech3 } from "./tech"
import { dataSpec, dataSpec2, dataSpec3 } from "./spec"
import { dataImage } from "./image"

const dataProduct2: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  id_type: "13",
  id: 123,
  description: "i dont know",
  id_user: "112",

  id_company: 1,
  id_order: 1,
}
const dataProduct3: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  id_type: "13",
  id: 213,
  description: "i dont know",
  id_user: "112",
  id_company: 1,
  id_order: 1,
}
const dataProduct1: Product = {
  image: "https://picsum.photos/200",
  name: "Sneakers",
  price: 120,
  stock: 30,
  brand: "Nike",
  id_type: "11",
  id: 1001,
  description: "Comfortable running shoes",
  id_user: "110",
  id_company: 1,
  id_order: 1,
}
const dataProduct4: Product = {
  image: "https://picsum.photos/230",
  name: "T-Shirt",
  price: 25,
  stock: 100,
  brand: "H&M",
  id_type: "14",
  id: 1003,
  description: "Soft cotton t-shirt",
  id_user: "113",
  id_company: 1,
  id_order: 1,
}
const dataProduct5: Product = {
  image: "https://picsum.photos/240",
  name: "Smartwatch",
  price: 199,
  stock: 20,
  brand: "Apple",
  id_type: "15",
  id: 1004,
  description: "Latest model with GPS",
  id_user: "114",
  id_company: 1,
  id_order: 1,
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
  id_type: "1",
  id_user: "1",
  desc: dataDesc,
  desc_tech: dataTech,
  desc_spec: dataSpec,
  id_company: 1,
  id_order: 1,
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
  id_type: "1",
  id_user: "1",
  desc: dataDesc2,
  desc_tech: dataTech2,
  desc_spec: dataSpec2,
  id_company: 1,
  id_order: 1,
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
  id_type: "1",
  id_user: "1",
  desc: dataDesc3,
  desc_tech: dataTech3,
  desc_spec: dataSpec3,
  id_company: 1,
  id_order: 1,
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
  dataProduct4,
  dataProduct5,
  dataProductDetail,
  dataProductDetail2,
  dataProductDetail3,
]
