export default defineEventHandler(async (event) => {
  const data = {
    checkout: await transactionController.checkout(event),
    toJson() {
      return {
        checkout: this.checkout,
      }
    },
  }

  return data
})
