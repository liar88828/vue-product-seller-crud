// noinspection JSUnusedGlobalSymbols

import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { tryCatch } from "../lib/tryCatch"
import { AuthServices } from "../services/auth"
import { JWTService } from "~/server/services/JWTService"
import type { SessionUser } from "~/types/globals/session"
import type { H3Event } from "h3"

// const config = useRuntimeConfig()

export class AuthController {
  // private service: AuthServices
  constructor(private service: AuthServices) {}

  public jwt = new JWTService(
    // config.access_token,
    // config.refresh_token,

    "access",
    "refresh",
    "1h",
    "7h"
  )

  async signIn(event: H3Event): Promise<SessionUser> {
    return tryCatch(async () => {
      const config = useRuntimeConfig(event)
      const cryptr = new CryptrService(config.cryptrKey)

      let data = await readBody(event)
      const valid = zods.signIn.parse(data)
      console.log(valid)

      const { password, ...user } = await this.service.foundExist(valid)
      const validPass = await cryptr.compare(valid.password, password)
      console.log(` success login ${validPass}`)

      // const userJWT = await control.auth.jwt.accessToken(user, access)
      // await control.auth.jwt.refreshToken(user, refresh)
      // 	  update user refresh token
      console.log("will set session")

      await setUserSession(event, {
        user,
        loggedInAt: new Date(),
        session: user,
      })
      return user
    })
  }

  async oldSignIn(data: SignInProps): Promise<SessionUser> {
    return tryCatch(async () => {
      const { password, ...user } = await this.service.foundExist(data)
      // const validPass = this.service.validPass(data.password, password)
      // console.log(` success login ${validPass}`)
      return user
    })
  }

  async signUp(event: H3Event) {
    return tryCatch(async () => {
      const config = useRuntimeConfig(event)
      const cryptr = new CryptrService(config.cryptrKey)
      const data = await readBody(event)
      const { email, name, password } = await this.service.emailExists(data)
      const hashPassword = cryptr.encrypted(data.password)
      return db.user.signUp({ email, name, password: hashPassword })
    })
  }
}
