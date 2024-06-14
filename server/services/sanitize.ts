import type { User } from "@prisma/client"
import type { RequiredProperty } from "~/types/globals/generic"
import type { CompanyServer } from "~/types/market/ProfileCompany"
import type { ProductUser } from "~/types/product/data.db"

import type { Remove } from "~/types/transaction/GetBox"
import type {
  ControlCreateUser,
  UserCreate,
  UserUpdate,
} from "~/types/user/ControlCreateUser"
export class SanitizeService {
  productCreate(
    data: Omit<ProductUser, "id_user" | "id_type">,
    id_user: string,
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
    }
  }

  productUpdate(
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
      // id: id,
    }
  }
  user(data: UserCreate): UserCreate {
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
  // userUpdate(data: UserUpdate): UserUpdate {
  //   return {
  //     id: data.id,
  //     email: data.email,
  //     name: data.name,
  //     address: data.address,
  //     phone: data.phone,
  //     id_follow: data.id_follow,
  //     id_role: data.id_role,
  //     id_trolly: data.id_trolly,
  //     password: data.password,
  //   }
  // }
  oldUser(data: Remove<User>): ControlCreateUser {
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
