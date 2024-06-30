export default defineEventHandler(async (event) => {
  const data = {
    user: await control.user(event).id(),
    toJson() {
      return this.user
    },
  }
  return data
})
