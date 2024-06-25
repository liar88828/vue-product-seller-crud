import type {
  Desc,
  Image,
  List_Spec,
  Market,
  Preview,
  Product,
  Spec,
  Tech,
  User,
} from "@prisma/client"
// import type { DataImage } from "~/assets/example/product/image"
import type { IfEquals } from "../globals/generic"
import type { MarketStatic } from "../market/ProfileCompany"
// id: string
// name: string | null
// description: string | null
// image: string | null
// brand: string | null
// stock: number
// price: number
// userId: string | null
// typeId: string | null

export type DataTech = {
  title: string
  text: string
}
export type DataSpec = {
  title: string
  list: string[]
}

export type ProductItem = Product & {
  dataImage: Image[]
  desc: string[]
  desc_spec: DataSpec[]
  desc_tech: DataTech[]
}

// server

export type DataPreview = Preview & { User: User }

export type ProductDetail = {
  detail: ProductItemServer
  market: Market
  previews: DataPreview[]
  relateds: Product[]
  static: MarketStatic
  // dataProduct: ProductItem
  // dataPreviews: DataPreviewProps[]
}

export type ProductMarketDetail = {
  product: ProductItemServer
  market: Market
}
export type SpecProduct = Spec & {
  List: List_Spec[]
}
export type DataImage = {
  img: string
  link: string
  title: string
}

export type ProductItemServer = Product & {
  Spec: SpecProduct[]
  Tech: Tech[]
  Desc: Desc[]
  Img: Image[]
}
// --------
type test = IfEquals<ProductItem, ProductItemServer, "save", "different">
const Test: test = "different"
