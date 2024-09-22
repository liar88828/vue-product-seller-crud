export default defineEventHandler(async (event) => {
  const role = "ADMIN"

  const data = {
    data: await userController.update(event),
    async toJson() {
      return this.data
    },
  }
  return data
})
