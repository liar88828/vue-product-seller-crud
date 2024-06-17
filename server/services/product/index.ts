import type { Product } from "@prisma/client"
import type { ProductUser } from "~/types/product/data.db"
import type {
  IdProduct,
  IdValid,
  MarketIdProductId,
} from "~/types/product/findId"
import { MarketStaticService } from "../user/market"
import type { RequiredProperty } from "~/types/globals/generic"

class ProductSanitized extends MarketStaticService {
  sanitizeCreate(
    data: Omit<ProductUser, "id_user" | "id_type">,
    { id_user, id_market }: IdProduct,
    id_type: string
  ): RequiredProperty<ProductUser> {
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
    data: Omit<ProductUser, "id_type">,
    // id: number,
    // id_user: string,
    id_type: string
  ): ProductUser {
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

class ProductMarketServices extends ProductSanitized {
  protected async marketAll(id_market: number) {
    id_market = zods.idNumber.parse(id_market)
    return db.product.findMarketProductAll(id_market)
  }
  protected async marketId(id: MarketIdProductId) {
    id = zods.idMarketProduct.parse(id)
    return db.product.findMarketProductId(id)
  }
}

export class ProductServices extends ProductMarketServices {
  async findId(id: number) {
    id = zods.idNumber.parse(id)
    return db.product.findId(id)
  }
  async detail(id: number) {
    id = zods.idNumber.parse(id)
    return db.product.findFull(Number(id))
  }

  async create(data: ProductUser): Promise<Product> {
    data = zods.productCreate.parse(data)
    return db.product.create(data)
  }

  async update(id: IdValid, data: ProductUser): Promise<Product> {
    id = zods.idValid.parse(id)
    data = zods.productUpdate.parse(data)
    return db.product.update(id, data)
  }
  async delete(id: IdValid): Promise<Product> {
    id = zods.idValid.parse(id)
    return db.product.delete(id)
  }
  market = {
    id: super.marketId,
    all: super.marketAll,
  }
}
