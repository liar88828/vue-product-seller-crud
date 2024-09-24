export class AuthService {
  async foundExist(data: SignInProps) {
    data = zods.user.signIn.parse(data)
    const findUser = await prisma.user
      .findUnique({
        where: { email: data.email },
      })
      .then((data) => {
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: "User Email not found",
          })
        }
        return data
      })
    return findUser
  }

  async emailExists(data: SignUpProps) {
    data = zods.user.signUp.parse(data)
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

  async validOTP(id_user: string, OTP: string) {
    console.log("valid---------test----------")

    const data = zods.user.otpSchema.parse({ OTP, id_user })
    const otp = await prisma.user
      .findUnique({
        where: { id: id_user },
        select: {
          OTP: true,
        },
      })
      .then((item) => {
        if (!item) {
          throw createError({
            statusCode: 400,
            statusMessage: "OTP NOT Exists",
          })
        }
        return item
      })
    const validOTP = otp.OTP === data.OTP

    await prisma.user.update({
      where: { id: id_user },
      select: {
        OTP: true,
      },
      data: {
        OTP: randomNumber(99999999).toString(),
      },
    })
    return validOTP
  }

  async resendOTP(id_user: string) {
    const user = await prisma.user.update({
      where: { id: id_user },
      data: {
        OTP: randomOTP,
      },
    })
    return user
  }
}

export const authService = new AuthService()

export type IAuthService = AuthService
