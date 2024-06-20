// noinspection JSUnusedGlobalSymbols

import type { SignInProps, SignUpProps } from "~/types/auth/user"
import { tryCatch } from "../lib/tryCatch"
import { AuthServices } from "../services/auth"
import { JWTService } from "~/server/services/JWTService";
import type { SessionUser } from "~/types/globals/session"

// const config = useRuntimeConfig()

export class AuthController {
  // private service: AuthServices
  constructor(private service: AuthServices,) {
  }

  public jwt = new JWTService(
	// config.access_token,
	// config.refresh_token,

	'access',
	'refresh',
	"1h",
	"7h"
  )

  async signIn(data: SignInProps, access: string, refresh: string): Promise<SessionUser> {

	return tryCatch(async () => {
	  const { password, ...user } = await this.service.foundExist(data)
	  const validPass = this.service.validPass(data.password, password)
	  console.log(` success login ${ validPass }`)
	  const userJWT = await control.auth.jwt.accessToken(user, access)
	  await control.auth.jwt.refreshToken(user, refresh)
// 	  update user refresh token
	  return userJWT
	})
  }

  async signUp(data: SignUpProps) {
	return tryCatch(async () => {
	  await this.service.emailExists(data)
	  return await this.service.hashPass(data)
	})
  }
}
