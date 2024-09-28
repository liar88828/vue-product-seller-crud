export default defineEventHandler(async (event) => {
  const data = {
    trolley: await trolleyController.decrement(event),
    toJson() {
      return this.trolley
    },
  }
  return data
})
