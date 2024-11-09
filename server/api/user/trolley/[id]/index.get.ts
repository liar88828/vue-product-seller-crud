export default defineEventHandler(async (event) => {
  const data = {
    trolly: await trolleyController.trolleyId(event),
    toJson(): { product: BoxProduct[] } {
      return {
        product: this.trolly,
      }
    },
  }

  return data
})
