export default defineEventHandler(async (event) => {
  const data = {
    order: control.user(event).trans.delete(),
    toJson() {
      return this.order
    },
  }
  return data
})
