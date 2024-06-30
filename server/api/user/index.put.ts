export default defineEventHandler(async (event) => {
  const role = "ADMIN"

  const data = {
    data: await control.user(event).update(),
    async toJson() {
      return this.data
    },
  }
  return data
})
