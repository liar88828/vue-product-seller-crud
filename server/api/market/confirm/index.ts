export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const data = {
    confirm: await db.trans.market.allDetail(Number(id)),
    toJson() {
      return this.confirm
    },
  }
  return data
})
