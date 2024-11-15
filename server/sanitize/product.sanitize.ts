import type { ProductMarketCreate } from "~/types/product/data.db"
import type { IdProduct } from "~/types/product/findId"
import type { RequiredProperty } from "~/types/globals/generic"

export class ProductSanitize {
  sanitizeCreate(
    data: Omit<ProductMarketCreate, "id_user" | "id">,
    { id_market }: Omit<IdProduct, "id_user" | "id">
  ): RequiredProperty<ProductMarketCreate> {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      type: data.type ?? "kosong",
      // id_user,
      id_market,
    }
  }

  sanitizeUpdate(
    data: Omit<ProductMarketCreate, "id_type">,
    // id: number,
    // id_user: string,
    type: string
  ): ProductMarketCreate {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      type,
      // id_user: data.id_user,
      id_market: data.id_market,
      // id: id,
    }
  }
}

export const productSanitize = new ProductSanitize()

export type IProductSanitize = ProductSanitize
