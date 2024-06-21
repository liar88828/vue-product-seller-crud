import type { ProductMarketCreate } from "~/types/product/data.db"
import type { IdProduct } from "~/types/product/findId"
import { MarketStaticService } from "../user/MarketStaticService"
import type { RequiredProperty } from "~/types/globals/generic"

export class ProductSanitized extends MarketStaticService {
  sanitizeCreate(
    data: Omit<ProductMarketCreate, "id_user" | "id_type">,
    { id_user, id_market }: IdProduct,
    id_type: string
  ): RequiredProperty<ProductMarketCreate> {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      id_type,
      id_user,
      id_market,
    }
  }
  sanitizeUpdate(
    data: Omit<ProductMarketCreate, "id_type">,
    // id: number,
    // id_user: string,
    id_type: string
  ): ProductMarketCreate {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      id_type,
      id_user: data.id_user,
      id_market: data.id_market,
      // id: id,
    }
  }
}
