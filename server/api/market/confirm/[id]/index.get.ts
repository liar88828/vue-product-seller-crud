export default defineEventHandler(async (event) => {
  const data = {
    confirm: await control.market.owner.id(event),
    toJson() {
      return this.confirm
    },
  }
  return data
})
