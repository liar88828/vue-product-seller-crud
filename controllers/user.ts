import type { User } from "@prisma/client"
import type { Remove } from "~/types/transaction/GetBox"
import type { ControlCreateUser } from "../types/user/ControlCreateUser"

export class UserController {
  sanitize(data: Remove<User>): ControlCreateUser {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      roleId: data.roleId,
    }
  }
}
