export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const data = {
    // product: dataProducts,
    confirm: await db.order.confirmId(Number(id)),
    toJson() {
      return this.confirm
    },
  }
  return data
})
