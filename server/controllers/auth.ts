import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { tryCatch } from "../lib/tryCatch"
import { AuthServices } from "../services/auth"
import type { User } from "@prisma/client"
import type { SessionUser } from "~/types/globals/session"

export class AuthController {
  // private service: AuthServices
  constructor(private service: AuthServices) {}
  async signIn(data: SignInProps): Promise<SessionUser> {
    return tryCatch(async () => {
      const { password, ...user } = await this.service.foundExist(data)
      const validPass = this.service.validPass(data.password, password)
      console.log(` success login ${validPass}`)
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
