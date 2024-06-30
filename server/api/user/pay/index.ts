export default defineEventHandler(async (event) => {
  const data = {
    order: await control.user(event).trans.order.pay(),
    toJson() {
      return { order: this.order }
    },
  }

  return data
})
