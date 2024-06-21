export default defineEventHandler(async (event) => {
  const data = {
    user: await control.user.id(event),
    toJson() {
      return this.user
    },
  }
  return data
})
