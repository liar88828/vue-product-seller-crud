import type { SessionUser } from "~/types/globals/session"

export default defineEventHandler(async (event) => {
  const setSessionX = (session: SessionUser) => {
    const cookie = getCookie(event, "sessionUser")
    console.log(cookie)
    if (!cookie) {
      console.log("set cookie")
      setCookie(event, "sessionUser", JSON.stringify(session))
      console.log(cookie)
    }
    return true
  }
  const user = await control.auth.signIn(await readBody(event))
  setSessionX(user)
  console.log("will send")
  // console.log(user)

  const data = {
    data: user,
    async toJson() {
      return this.data
    },
  }
  return data
})
