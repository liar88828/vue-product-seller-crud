export default defineEventHandler(async (event) => {
  // const session = await getUserSession(event)
  // if (session) {
  //   console.log(session)
  //   console.log("You was logged")
  //   return "You was logged"
  // }
  const data = {
    data: await control.auth.signUp(event),
    async toJson() {
      return this.data
    },
  }
  return data
})
