export default defineEventHandler(async (event) => {
  const data = {
    user: await authController.signUp(event),
    async toJson() {
      return { user: this.user }
    },
  }
  return data
})
