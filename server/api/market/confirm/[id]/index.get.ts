export default defineEventHandler(async (event) => {
  const data = {
    confirm: await control.market(event).owner.id(),
    toJson() {
      return this.confirm
    },
  }
  return data
})
