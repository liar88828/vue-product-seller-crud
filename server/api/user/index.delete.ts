export default defineEventHandler(async (event) => {
  const data = {
    data: await userController.delete(event),
    toJson() {
      return this.data
    },
  }
  return data
})
