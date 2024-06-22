export default defineEventHandler(async (event) => {
  const data = {
    user: await control.auth.signIn(event),
    toJson() {
      return {
        user: this.user,
      }
    },
  }
  return data
})
