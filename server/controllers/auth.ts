import type { SignInProps, SignUpProps } from "~/types/auth/user"
import getZod from "~/utils/getZod"
import { tryCatch } from "../lib/tryCatch"

export class AuthController {
  async signIn(data: SignInProps) {
    return tryCatch(async () => {
      data = getZod.signInSchema.parse(data)
      const { password, ...user } = await service.user.foundExist(data)
      const validPass = service.auth.validPass(data.password, password)
      return user
    })
  }

  async signUp(data: SignUpProps) {
    return tryCatch(async () => {
      data = getZod.signUpSchema.parse(data)
      await service.user.emailExists(data.email)
      const hashPassword = await service.auth.hashPass(data)
      return hashPassword
    })
  }
}
