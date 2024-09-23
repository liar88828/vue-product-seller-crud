export default defineEventHandler(async (event) => {
  const data = {
    trolly: await trolleyController.userProductId(event),
    toJson(): { product: BoxProduct[] } {
      return {
        product: this.trolly,
      }
    },
  }

  return data
})
