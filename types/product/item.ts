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
import type { IfEquals } from "../globals/generic"

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
export type PreviewClient = Omit<Preview, "time"> & {
  time: string | Date
}
export type UserPreviewServer = Preview & { User: User }
export type UserPreviewClient = PreviewClient
// & {
//   User: User
// }

export type ProductDetailServer = {
  detail: ProductItemServer
  previews: UserPreviewServer[]
  // relateds: Product[]
  // market: Market
  // static: MarketStatic
  // dataProduct: ProductItem
  // dataPreviews: DataPreviewProps[]
}

export type ProductDetailClient = {
  detail: ProductItemServer
  previews: UserPreviewClient[]
  // market: MarketClient
  // relateds: Product[]
  // static: MarketStaticClient
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
export type ProductServer = Product
// --------
type test = IfEquals<ProductItem, ProductItemServer, "save", "different">
const Test: test = "different"

export type SearchProduct = {
  category: string
  search: string
}

export type ProductClient = Product
