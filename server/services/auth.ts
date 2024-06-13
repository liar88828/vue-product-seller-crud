import type { SignInProps, SignUpProps } from "~/types/auth/user"

export class AuthServices {
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
