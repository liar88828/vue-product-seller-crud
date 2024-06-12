import {
  type Company,
  type Desc,
  type Image,
  type List_Spec,
  type Preview,
  type Product,
  type Spec,
  type Tech,
  type User,
} from "@prisma/client"
// import type { DataImage } from "~/assets/example/product/image"
import type { MarketStatic } from "../profile/profile"
import type { IfEquals } from "../globals/equal"
import { dataPreview } from "~/assets/example/product/dataPreview"
// id: string
// name: string | null
// description: string | null
// image: string | null
// brand: string | null
// stock: number
// price: number
// userId: string | null
// typeId: string | null
export type DataImage = {
  img: string
  link: string
  title: string
}

export type DataTech = {
  title: string
  text: string
}
export type DataSpec = {
  title: string
  list: string[]
}

export type ProductItem = Product & {
  dataImage: DataImage[]
  desc: string[]
  desc_spec: DataSpec[]
  desc_tech: DataTech[]
}

// server

export type DataPreview = Preview & { user: User }

export type ProductDetail = {
  static: MarketStatic
  detail: ProductItemServer
  related: Product[]
  previews: DataPreview[]
  market: Company
  // dataProduct: ProductItem
  // dataPreviews: DataPreviewProps[]
}
export type ProductItemServer = Product & {
  Spec: (Spec & {
    list: List_Spec[]
  })[]
  Tech: Tech[]
  Desc: Desc[]
  Img: Image[]
}
// --------
type test = IfEquals<ProductItem, ProductItemServer, "save", "different">
const Test: test = "different"
