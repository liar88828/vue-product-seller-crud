export default defineEventHandler(async (event) => {
  // const role = "ADMIN"

  const data = {
    user: await userController.update(event),
    toJson(): { user: UserPublic } {
      return { user: this.user }
    },
  }
  return data
})
