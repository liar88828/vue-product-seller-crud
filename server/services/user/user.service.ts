import type { User } from "@prisma/client"
import type { UserUpdate } from "~/types/user/ControlCreateUser"

export class UserService {
  constructor(private readonly sanitizeUser: IUserSanitize) {}
  async first(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    const data = await db.user.first()
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    data.password = ""
    return data
  }

  async id(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    return db.user.findId(id).then((data) => {
      if (!data) {
        throw createError({ statusCode: 404, statusMessage: "User not found" })
      }
      console.log(data, "data user")
      return data
    })
  }

  async idUserPublic(id: string): Promise<UserPublic> {
    id = zods.id.string.parse(id)
    return db.user.findId(id).then((data) => {
      if (!data) {
        throw createError({ statusCode: 404, statusMessage: "User not found" })
      }
      const { password, activeOnline, createMarket, OTP, ...rest } = data
      console.log(rest, "data user")
      return rest
    })
  }

  async signUp(data: Omit<SignUpProps, "confPass">): Promise<SessionUser> {
    data = this.sanitizeUser.sanitize({ ...data, phone: "", address: "" })

    console.log(data, "sign up")
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
          OTP: randomOTP,
          address: "",
          phone: "",
          createMarket: false,
        },
      })
      user.password = ""
      return user
    })
  }

  async update({ id }: SessionUser, data: UserUpdate): Promise<UserPublic> {
    // data = this.sanitizeUser.sanitize(data)
    data = zods.user.update.parse(data)
    const res = await db.user.update(id, data)
    return res
  }

  async delete(id: string): Promise<User> {
    id = zods.id.string.parse(id)
    const res = await prisma.user.delete({
      where: {
        id,
      },
    })
    res.password = ""
    return res
  }
}

export const userService = new UserService(userSanitize)
export type IUserService = UserService
