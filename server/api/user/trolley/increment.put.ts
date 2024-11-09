export default defineEventHandler(async (event) => {
  const data = {
    trolley: await trolleyController.increment(event),
    toJson() {
      return this.trolley
    },
  }
  return data
})
