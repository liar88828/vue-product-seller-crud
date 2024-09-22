export default defineEventHandler(async (event) => {
  const data = {
    user: await authController.signIn(event),
    toJson() {
      return {
        user: this.user,
      }
    },
  }
  return data
})
