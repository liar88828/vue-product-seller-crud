import type { SignInProps, SignUpProps } from "~/types/auth/user"

export class UserServices {
  async signIn({ email, password }: SignInProps) {
    const findUser = await db.user.findEmail(email)
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
    const foundEmail = await db.user.findEmail(email)

    if (foundEmail) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email Already Exists",
      })
    }

    const hashPassword = lib.cryptr.encrypted(password)

    const user = await db.user.signUp({ email, name, password: hashPassword })
    // prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     password: hashPassword,
    //   },
    // })
    return user
  }
}
