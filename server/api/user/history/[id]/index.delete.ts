export default defineEventHandler(async (event) => {
  const data = {
    order: historyController.userDelete(event),
    toJson() {
      return this.order
    },
  }
  return data
})
