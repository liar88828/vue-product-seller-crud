import type { SignInProps, SignUpProps } from "~/types/auth/user"

export class AuthServices {
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

  validPass(passApi: string, passDb: string) {
    const validPass = lib.cryptr.compare(passApi, passDb)
    if (!validPass) {
      throw createError({ statusCode: 401, statusMessage: "Invalid Password" })
    }
    return validPass
  }

  async hashPass({ email, name, password }: Omit<SignUpProps, "confPass">) {
    const hashPassword = lib.cryptr.encrypted(password)
    const user = await db.user.signUp({ email, name, password: hashPassword })
    return user
  }
}
