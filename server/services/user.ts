import type { SignInProps } from "~/types/auth/user"

export class UserServices {
  async foundExist({ email }: SignInProps) {
    const findUser = await db.user.findEmail(email)
    if (!findUser) {
      throw createError({ statusCode: 404, statusMessage: "User not found" })
    }
    return findUser
  }

  async emailExists(email: string) {
    const foundEmail = await db.user.findEmail(email)

    if (foundEmail) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email Already Exists",
      })
    }
    return foundEmail
  }
}