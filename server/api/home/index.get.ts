export default defineEventHandler(async (event) => {
  const data = {
    // product: dataProducts,
    data: await service.home.index(),
    toJson() {
      return this.data
    },
  }
  return data
})
