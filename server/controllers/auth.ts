// noinspection JSUnusedGlobalSymbols

import { tryCatch } from "../lib/tryCatch"
import { AuthServices } from "../services/auth"
import type { SessionUser } from "~/types/globals/session"
import type { H3Event } from "h3"

// const config = useRuntimeConfig()

export class AuthController {
  // private service: AuthServices
  constructor(private service: AuthServices) {}

  // public jwt = new JWTService(
  //   // config.access_token,
  //   // config.refresh_token,

  //   "access",
  //   "refresh",
  //   "1h",
  //   "7h"
  // )

  async signIn(event: H3Event): Promise<SessionUser> {
    return tryCatch(async () => {
      const config = useRuntimeConfig(event)
      const body = await readBody(event)

      const { password, ...user } = await this.service.foundExist(body)

      const cryptr = new CryptrService(config.cryptrKey)
      cryptr.compare(body.password, password)

      // const userJWT = await control.auth.jwt.accessToken(user, access)
      // await control.auth.jwt.refreshToken(user, refresh)
      // 	  update user refresh token

      await setUserSession(event, {
        loggedInAt: new Date(),
        session: user,
        user,
      })
      return user
    })
  }

  // async oldSignIn(data: SignInProps): Promise<SessionUser> {
  //   return tryCatch(async () => {
  //     const { password, ...user } = await this.service.foundExist(data)
  //     const validPass = this.service.validPass(data.password, password)
  //     console.log(` success login ${validPass}`)
  //     return user
  //   })
  // }

  async signUp(event: H3Event): Promise<{ name: string; email: string }> {
    return tryCatch(async () => {
      const config = useRuntimeConfig(event)
      const body = await readBody(event)
      const { email, name } = await this.service.emailExists(body)

      const cryptr = new CryptrService(config.cryptrKey)
      const hashPassword = cryptr.encrypted(body.password)
      const user = await db.user.signUp({ email, name, password: hashPassword })
      console.log(` success sign up ${user}`)
      await setUserSession(event, {
        loggedInAt: new Date(),
        session: user,
        user,
      })
      return user
    })
  }
  async validOTP(event: H3Event) {
    const { session } = await requireUserSession(event)
    const body = await readBody(event)
    return this.service.validOTP(session.id, body.otp)
  }
  async resendOTP(event: H3Event) {
    const { session } = await getUserSession(event)
    return this.service.resendOTP(session.id)
  }
}
