import { SignInProps, SignUpProps } from "~/types/auth/user"
import { prisma } from "../config/prisma"

export class UserServices {
  async signIn({ email, password }: SignInProps) {
    const findUser = await prisma.user.findUnique({ where: { email } })
    if (!findUser) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    const validPass = lib.cryptr.compare(password, findUser.password)

    if (!validPass) {
      throw createError({ statusCode: 401, statusMessage: "Invalid Password" })
    }
    return findUser
  }
  async signUp({ email, name, password }: SignUpProps) {
    const foundEmail = await prisma.user.findUnique({ where: { email } })

    if (foundEmail) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email Already Exists",
      })
    }

    const hashPassword = lib.cryptr.encrypted(password)

    const user = prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    })
    return user
  }
}
