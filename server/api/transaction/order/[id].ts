export default defineEventHandler(async (event) => {
  const data = {
    order: await orderController.detail(event),
    toJson() {
      return {
        order: this.order,
      }
    },
  }
  return data
})
