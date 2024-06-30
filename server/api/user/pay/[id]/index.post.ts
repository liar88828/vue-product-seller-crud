// can see
// get by session user
//
export default defineEventHandler(async (event) => {
  const data = {
    order: await control.user(event).trans.order.pay(),
    toJson() {
      return this.order
    },
  }
  return data
})
