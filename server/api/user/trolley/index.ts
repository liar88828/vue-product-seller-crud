export default defineEventHandler(async (event) => {
  const data = {
    trolleys: await trolleyController.all(event),
    toJson(): { trolleys: TollyProps[] } {
      return {
        trolleys: this.trolleys,
      }
    },
  }

  return data
})
