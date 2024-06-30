// Can see all order of user want buy

// find by market id from session id
export default defineEventHandler(async (event) => {
  const data = {
    data: await control.market(event).owner.trans.allProduct(),
    toJson() {
      return this.data
    },
  }
  return data
})
