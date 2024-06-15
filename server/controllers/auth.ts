import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { tryCatch } from "../lib/tryCatch"
import { AuthServices } from "../services/auth"

export class AuthController {
  // private service: AuthServices
  constructor(private service: AuthServices) {}
  async signIn(data: SignInProps) {
    return tryCatch(async () => {
      const { password, ...user } = await this.service.foundExist(data)
      this.service.validPass(data.password, password)
      return user
    })
  }

  async signUp(data: SignUpProps) {
    return tryCatch(async () => {
      await this.service.emailExists(data)
      const hashPassword = await this.service.hashPass(data)
      return hashPassword
    })
  }
}
