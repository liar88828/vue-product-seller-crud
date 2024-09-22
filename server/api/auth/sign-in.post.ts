export default defineEventHandler(async (event) => {
  // const session = await requireUserSession(event)
  // if (session) {
  //   console.log(session)
  //   console.log("You was logged")
  //   return "You was logged"
  // }
  const data = {
    data: await authController.signIn(event),
    toJson(): { userLogin: SessionUser } {
      return { userLogin: this.data }
    },
  }
  return data
})
