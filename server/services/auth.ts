import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { prisma } from "../config/prisma"

export class AuthServices {
  async foundExist(data: SignInProps) {
    data = zods.signIn.parse(data)
    const findUser = await prisma.user.findUnique({
      where: { email: data.email },
    })
    if (!findUser) {
      throw createError({
        statusCode: 404,
        statusMessage: "User Email not found",
      })
    }
    return findUser
  }

  async emailExists(data: SignUpProps) {
    data = zods.signUp.parse(data)
    const foundEmail = await prisma.user.findUnique({
      where: { email: data.email },
    })
    if (foundEmail) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email Already Exists",
      })
    }
    return data
  }

  // validPass(passApi: string, passDb: string) {
  //   return lib.cryptr.compare(passApi, passDb)
  // }

  // async hashPass({ email, name, password }: Omit<SignUpProps, "confPass">) {
  //   const hashPassword = lib.cryptr.encrypted(password)
  //   const user = await db.user.signUp({ email, name, password: hashPassword })
  //   return user
  // }
}
