export default defineEventHandler(async (event) => {
  const data = {
    user: await control.auth.signUp(event),
    async toJson() {
      return { user: this.user }
    },
  }
  return data
})
