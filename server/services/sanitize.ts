import type { User } from "@prisma/client"
import type { RequiredProperty } from "~/types/globals/generic"
import { CompanyServer } from "~/types/market/ProfileCompany"
import type {
  ProductCreateUser,
  ProductUpdateUser,
} from "~/types/product/data.db"
import type { Remove } from "~/types/transaction/GetBox"
import type { ControlCreateUser } from "~/types/user/ControlCreateUser"
export class SanitizeService {
  productCreate(
    data: Omit<ProductCreateUser, "id_user" | "id_type">,
    id_user: string,
    id_type: string
  ): RequiredProperty<ProductCreateUser> {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      id_type,
      id_user,
    }
  }

  productUpdate(
    data: Omit<ProductUpdateUser, "id_user" | "id_type">,
    id: number,
    id_user: string,
    id_type: string
  ): RequiredProperty<ProductUpdateUser> {
    return {
      brand: data.brand ?? "",
      description: data.description ?? "",
      image: data.image ?? "https://picsum.photos/220",
      name: data.name,
      price: data.price,
      stock: data.stock,
      id_type,
      id_user,
      id: id,
    }
  }
  user(data: Remove<User>): ControlCreateUser {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      id_follow: data.id_follow,
      id_role: data.id_role,
      id_trolly: data.id_trolly,
      password: data.password,
    }
  }

  companyCreate(
    data: CompanyServer,
    id_user: string
  ): RequiredProperty<CompanyServer> {
    return {
      address: data.address,
      name: data.name,
      description: data.description,
      history: data.history,
      industry: data.industry,
      mission: data.mission,
      since: new Date(data.since),
      vision: data.vision,
      id_user: id_user,
    }
  }
}
