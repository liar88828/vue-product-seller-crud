import type { Desc, Image, Spec, Tech, Preview, Product } from "@prisma/client"
import type { MarketStatic } from "../profile/profile"

export type ProductDetail = {
  static: MarketStatic
  dataDetail: DataProduct
  dataRelated: Product[]
  dataPreviews: Preview[]
  // dataProduct: ProductItem
  // dataPreviews: DataPreviewProps[]
}
export type DataProduct =
  | Product
  | {
      Spec: Spec
      Tech: Tech
      Desc: Desc
      Img: Image
    }
