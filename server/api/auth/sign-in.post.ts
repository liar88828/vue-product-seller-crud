import type { SessionUser } from "~/types/globals/session";

export default defineEventHandler(async (event) => {

  const { loggedInAt } = await getUserSession(event)
  if (loggedInAt) {
	return 'You was logged'
  }
  const config = useRuntimeConfig(event)

  //   const cookie = getCookie(event, "sessionUser")
  // const setSessionX = (session: SessionUser) => {
  //   console.log(cookie)
  //   if (!cookie) {
  //     console.log("set cookie")
  //     setCookie(event, "sessionUser", JSON.stringify(session))
  //     console.log(cookie)
  //   }
  //   return true
  // }
  const body = await readBody(event)
  const dataUser = await control.auth.signIn(body, config.access_token, config.refresh_token)
  setCookie(event, "JWTs", JSON.stringify(dataUser))
  await setUserSession(event, {
	loggedInAt: new Date().toISOString(),
	session: dataUser,
	// jwt:
  })
  // setSessionX(user)

  console.log((await getUserSession(event)).loggedInAt)
  console.log("will send")
  // console.log(user)

  const data = {
	data: dataUser,
	toJson(): { userLogin: SessionUser } {
	  return { userLogin: this.data }
	},
  }
  return data
})
