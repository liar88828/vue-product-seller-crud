import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { tryCatch } from "../lib/tryCatch"

export class AuthController {
  async signIn(data: SignInProps) {
    return tryCatch(async () => {
      data = zods.signIn.parse(data)
      const { password, ...user } = await service.auth.foundExist(data)
      const validPass = service.auth.validPass(data.password, password)
      return user
    })
  }

  async signUp(data: SignUpProps) {
    return tryCatch(async () => {
      data = zods.signUp.parse(data)
      await service.auth.emailExists(data.email)
      const hashPassword = await service.auth.hashPass(data)
      return hashPassword
    })
  }
}
