export default defineEventHandler(async (event) => {
  const data = {
    trolly: await transactionController.apply(event),
    toJson(): { trolleys: TrollyAllService } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
