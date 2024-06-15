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
}
