export default defineEventHandler(async (event) => {
  const role = "ADMIN"

  const data = {
    data: await control.user.update(event),
    async toJson() {
      return this.data
    },
  }
  return data
})
