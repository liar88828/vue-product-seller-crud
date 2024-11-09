export default defineEventHandler(async (event) => {
  const data = {
    user: await userController.idUserPublic(event),
    toJson(): { user: UserPublic } {
      return { user: this.user }
    },
  }
  return data
})
