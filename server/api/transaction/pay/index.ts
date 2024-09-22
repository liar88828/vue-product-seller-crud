export default defineEventHandler(async (event) => {
  const data = {
    order: await orderUserController.pay(event),
    toJson() {
      return { order: this.order }
    },
  }

  return data
})
