import type { Product, User } from "@prisma/client"
import type { Remove } from "~/types/transaction/GetBox"
import type { ControlCreateUser } from "~/types/user/ControlCreateUser"

export class Sanitize {
  // sanitize(data: ControlCreateProduct): ControlCreateProduct {
  //   return {
  //     name: data.name,
  //     price: data.price,
  //     stock: data.stock,
  //     brand: data.brand,
  //     description: data.description,
  //     image: data.image,
  //     id_user: data.id_user,
  //     id_type: data.id_type,
  //     id_order: data.id_order,
  //     id_company: data.id_company,
  //   }
  // }
  product = (data: Product) => {
    return {
      brand: data.brand,
      description: data.description,
      image: data.image,
      name: data.name,
      price: data.price,
      id_user: data.id_user,
      stock: data.stock,
      id_type: data.id_type,
      id_company: data.id_company,
      id: data.id,
      id_order: data.id_order,
    }
  }

  sanitize(data: Remove<User>): ControlCreateUser {
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
