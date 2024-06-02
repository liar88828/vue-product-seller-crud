import type { Product } from "@prisma/client"
import type { ProductItem } from "~/types/product/item"
import { dataDesc, dataDesc2, dataDesc3 } from "./desc"
import { dataTech, dataTech2, dataTech3 } from "./tech"
import { dataSpec, dataSpec2, dataSpec3 } from "./spec"

const dataProduct2: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  typeId: "13",
  id: "1234",
  description: "i dont know",
  userId: "112",
}
const dataProduct3: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  typeId: "13",
  id: "2131",
  description: "i dont know",
  userId: "112",
}
const dataProduct1: Product = {
  image: "https://picsum.photos/200",
  name: "Sneakers",
  price: 120,
  stock: 30,
  brand: "Nike",
  typeId: "11",
  id: "1001",
  description: "Comfortable running shoes",
  userId: "110",
}
const dataProduct4: Product = {
  image: "https://picsum.photos/230",
  name: "T-Shirt",
  price: 25,
  stock: 100,
  brand: "H&M",
  typeId: "14",
  id: "1003",
  description: "Soft cotton t-shirt",
  userId: "113",
}
const dataProduct5: Product = {
  image: "https://picsum.photos/240",
  name: "Smartwatch",
  price: 199,
  stock: 20,
  brand: "Apple",
  typeId: "15",
  id: "1004",
  description: "Latest model with GPS",
  userId: "114",
}
const dataProductDetail: ProductItem = {
  name: "High-Quality Noise-Cancelling Headphones",
  description:
    "Experience the ultimate in audio immersion with our premium noise-cancelling headphones. Crafted with the finest materials and advanced technology, these headphones deliver unparalleled sound quality and comfort for the discerning listener.",
  brand: "Apple",
  id: "1",
  image: "https://picsum.photos/220",
  price: 199.99,
  stock: 10,
  typeId: "1",
  userId: "1",
  desc: dataDesc,
  desc_tech: dataTech,
  desc_spec: dataSpec,
}

const dataProductDetail2 = {
  brand: "Hart Hagerty",
  description:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  image: "https://picsum.photos/134",

  name: "Shoes",
  price: 123,
  stock: 10,
  id: "23423",
  typeId: "1",
  userId: "1",
  desc: dataDesc2,
  desc_tech: dataTech2,
  desc_spec: dataSpec2,
}

const dataProductDetail3 = {
  brand: "Hart Hagerty",
  description:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  image: "https://picsum.photos/234",
  name: "Shoes",
  price: 123,
  stock: 10,
  id: "2",
  typeId: "1",
  userId: "1",
  desc: dataDesc3,
  desc_tech: dataTech3,
  desc_spec: dataSpec3,
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
